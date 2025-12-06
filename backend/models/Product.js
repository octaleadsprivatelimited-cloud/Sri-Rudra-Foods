import mongoose from 'mongoose'

const priceSchema = new mongoose.Schema({
  weight: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    prices: [priceSchema],
    image: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    shelfLife: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product

