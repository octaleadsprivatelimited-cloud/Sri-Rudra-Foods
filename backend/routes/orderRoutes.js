import express from 'express'
import Order from '../models/Order.js'
import Razorpay from 'razorpay'
import crypto from 'crypto'
import { authenticateAdmin } from '../middleware/auth.js'

const router = express.Router()

// Initialize Razorpay (only if keys are provided)
let razorpay = null
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })
}

// Create order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body)
    await order.save()

    // Create Razorpay order (if Razorpay is configured)
    if (razorpay) {
      try {
        const razorpayOrder = await razorpay.orders.create({
          amount: order.totalAmount * 100, // Amount in paise
          currency: 'INR',
          receipt: order._id.toString(),
        })
        order.razorpayOrderId = razorpayOrder.id
        await order.save()
        res.status(201).json({
          order,
          razorpayOrderId: razorpayOrder.id,
        })
      } catch (razorpayError) {
        // If Razorpay fails, still save the order
        console.error('Razorpay error:', razorpayError)
        res.status(201).json({
          order,
          message: 'Order created but Razorpay not configured',
        })
      }
    } else {
      // Razorpay not configured, just save the order
      res.status(201).json({
        order,
        message: 'Order created. Razorpay not configured - please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET',
      })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Verify payment
router.post('/:id/verify-payment', async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(400).json({ message: 'Razorpay not configured' })
    }

    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body

    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    // Verify signature
    const text = `${razorpayOrderId}|${razorpayPaymentId}`
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(text)
      .digest('hex')

    if (generatedSignature !== razorpaySignature) {
      return res.status(400).json({ message: 'Invalid payment signature' })
    }

    order.paymentStatus = 'completed'
    order.razorpayPaymentId = razorpayPaymentId
    await order.save()

    res.json({ message: 'Payment verified successfully', order })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get all orders (protected)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const orders = await Order.find().populate('items.product').sort({ createdAt: -1 })
    res.json({ orders })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update order status (protected)
router.put('/:id/status', authenticateAdmin, async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )
    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }
    res.json({ order })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router

