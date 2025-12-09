import express from 'express'
import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'
import { authenticateAdmin } from '../middleware/auth.js'

const router = express.Router()

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' })
    }

    // Find admin by email
    const admin = await Admin.findOne({ email: email.toLowerCase() })

    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isMatch = await admin.comparePassword(password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' })
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || 'your-secret-key-change-in-production',
      { expiresIn: '7d' }
    )

    res.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email,
      },
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get current admin (protected)
router.get('/me', authenticateAdmin, async (req, res) => {
  try {
    res.json({
      admin: {
        id: req.admin._id,
        email: req.admin.email,
      },
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router

