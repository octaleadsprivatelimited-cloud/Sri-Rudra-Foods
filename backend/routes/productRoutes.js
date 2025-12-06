import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

// Get all products
router.get('/', async (req, res) => {
  try {
    const { category, limit, sort } = req.query
    const query = category ? { category } : {}
    const limitNum = limit ? parseInt(limit) : undefined
    const sortOption = sort ? { createdAt: sort === '-createdAt' ? -1 : 1 } : {}

    const products = await Product.find(query)
      .sort(sortOption)
      .limit(limitNum)

    res.json({ products })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    res.json({ product })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router

