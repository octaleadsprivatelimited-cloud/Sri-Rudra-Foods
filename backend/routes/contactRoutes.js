import express from 'express'
import Message from '../models/Message.js'
import { authenticateAdmin } from '../middleware/auth.js'

const router = express.Router()

// Create message
router.post('/', async (req, res) => {
  try {
    const message = new Message(req.body)
    await message.save()
    res.status(201).json({ message: 'Message sent successfully', message: message })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// Get all messages (protected)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json({ messages })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router

