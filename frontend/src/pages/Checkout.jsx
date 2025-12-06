import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { FaWhatsapp } from 'react-icons/fa'
import toast from 'react-hot-toast'

const Checkout = () => {
  const { cart, getTotalPrice } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart')
    }
  }, [cart, navigate])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      toast.error('Please fill all required fields')
      return
    }

    const phoneNumber = '919876543210' // Replace with your WhatsApp number
    
    let message = 'Hello! I would like to place an order:\n\n'
    message += `*Customer Details:*\n`
    message += `Name: ${formData.name}\n`
    message += `Phone: ${formData.phone}\n`
    if (formData.email) message += `Email: ${formData.email}\n`
    message += `Address: ${formData.address}\n`
    if (formData.city) message += `City: ${formData.city}\n`
    if (formData.state) message += `State: ${formData.state}\n`
    message += `Pincode: ${formData.pincode}\n\n`
    
    message += `*Order Details:*\n`
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}`
      if (item.selectedWeight) {
        message += ` (${item.selectedWeight})`
      }
      message += ` - Qty: ${item.quantity}\n`
    })
    message += `\nPlease confirm the order.`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    toast.success('Opening WhatsApp...')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Information */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800">Shipping Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={`${item.id || item._id}-${item.selectedWeight || ''}`} className="flex justify-between text-sm text-gray-600">
                  <span>{item.name} x{item.quantity}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg text-gray-800">
                  <span>Items</span>
                  <span>{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              className="w-full py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Place Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
