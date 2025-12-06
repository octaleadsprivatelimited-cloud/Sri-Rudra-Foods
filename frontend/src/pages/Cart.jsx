import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart()

  const handleQuantityChange = (productId, weight, currentQuantity, change) => {
    const newQuantity = currentQuantity + change
    if (newQuantity > 0) {
      updateQuantity(productId, weight, newQuantity)
    }
  }

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return

    const phoneNumber = '919876543210' // Replace with your WhatsApp number
    
    let message = 'Hello! I would like to place an order:\n\n'
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
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <FiShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to get started!</p>
        <Link
          to="/products"
          style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
          className="inline-block px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <motion.div
              key={`${item.id || item._id}-${item.selectedWeight || ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <FiShoppingBag />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">{item.name}</h3>
                  {item.selectedWeight && (
                    <p className="text-gray-600 text-sm mb-2">{item.selectedWeight}</p>
                  )}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(item.id || item._id, item.selectedWeight, item.quantity, -1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      <FiMinus className="text-gray-600" />
                    </button>
                    <span className="font-semibold text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id || item._id, item.selectedWeight, item.quantity, 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      <FiPlus className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id || item._id, item.selectedWeight)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Items</span>
                <span>{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              className="w-full py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Order via WhatsApp
            </button>
            <Link
              to="/products"
              className="block text-center mt-4 text-gray-600 hover:text-primary transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
