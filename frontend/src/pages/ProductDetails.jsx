import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { products } from '../data/products'
import SEO from '../components/SEO'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  const handleWhatsAppClick = () => {
    if (!product) return
    const phoneNumber = '919876543210' // Replace with your WhatsApp number
    const message = `Hello! I'm interested in ordering ${product.name}.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-500 mb-4">Product not found</p>
        <Link
          to="/products"
          className="text-primary hover:underline"
        >
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title={`${product.name} - Buy Online | Sri Rudra Foods`}
        description={`${product.description || `Buy premium quality ${product.name} online. 100% organic, FSSAI certified. ${product.teluguName ? `(${product.teluguName})` : ''} Fast delivery across India.`}`}
        keywords={`${product.name}, ${product.teluguName || ''}, ${product.category}, organic ${product.name}, buy ${product.name} online, premium spices, FSSAI certified, Indian spices, ${product.subCategory || ''}`}
        ogTitle={`${product.name} - Sri Rudra Foods`}
        ogDescription={product.description || `Premium quality ${product.name} - 100% organic and FSSAI certified`}
        ogImage={product.image || '/images/logo.png'}
        ogUrl={`https://srirudrafoods.com/products/${product.id}`}
        canonicalUrl={`https://srirudrafoods.com/products/${product.id}`}
        type="product"
      />
      <Link
        to="/products"
        className="inline-flex items-center text-gray-600 hover:text-primary mb-4"
      >
        <FiArrowLeft className="mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-100 rounded-lg overflow-hidden"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          ) : (
            <div className="w-full h-96 flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          {product.teluguName && (
            <p className="text-gray-500 text-lg mb-2 italic">{product.teluguName}</p>
          )}
          <p className="text-gray-600 font-semibold mb-6">{product.category}</p>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
            className="w-full py-4 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3 mb-6"
          >
            <FaWhatsapp className="text-2xl" />
            Order on WhatsApp
          </button>

          {/* Product Details */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Description</h3>
            <p className="text-gray-700 mb-4">{product.description || 'Premium quality product.'}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetails
