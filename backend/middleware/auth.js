import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'

export const authenticateAdmin = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided, authorization denied' })
    }

    const token = authHeader.substring(7) // Remove 'Bearer ' prefix

    if (!token) {
      return res.status(401).json({ message: 'No token provided, authorization denied' })
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-change-in-production')

    // Get admin from token
    const admin = await Admin.findById(decoded.id).select('-password')

    if (!admin) {
      return res.status(401).json({ message: 'Token is not valid, admin not found' })
    }

    req.admin = admin
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Token is not valid' })
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token has expired' })
    }
    res.status(500).json({ message: 'Server error during authentication' })
  }
}

