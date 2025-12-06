import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import api from '../utils/api'

const OrderSuccess = () => {
  const { id } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    // Note: This endpoint would need to be public or use a token
    // For now, we'll just show a success message
    setOrder({ _id: id })
  }, [id])

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <FiCheckCircle className="text-6xl text-green mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-xl text-gray-600 mb-6">
          Thank you for your order. Your order ID is: <strong>{id}</strong>
        </p>
        <p className="text-gray-600 mb-8">
          We have received your order and will process it shortly. You will receive a confirmation email shortly.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
          <Link to="/" className="btn-secondary">
            Go to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default OrderSuccess

