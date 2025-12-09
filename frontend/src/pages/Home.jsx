import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingBag, FiAward, FiTruck, FiShield, FiStar, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { products, categories } from '../data/products'

const Home = () => {
  const topProducts = products.slice(0, 6)
  const testimonials = [
    {
      name: 'Ramesh Kumar',
      text: 'Excellent quality spices! The taste is authentic and fresh. My family loves cooking with Sri Rudra Foods products.',
      rating: 5,
      location: 'Nellore',
    },
    {
      name: 'Priya Reddy',
      text: 'Best masalas in town. Highly recommended! The packaging is great and the flavors are amazing.',
      rating: 5,
      location: 'Nellore',
    },
    {
      name: 'Suresh Naidu',
      text: 'Organic and pure. My family loves the products. Fast delivery and excellent customer service.',
      rating: 5,
      location: 'Nellore',
    },
  ]

  const handleProductClick = (product) => {
    const phoneNumber = '919876543210' // Replace with your WhatsApp number
    const message = `Hello! I'm interested in ordering ${product.name}.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto relative z-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6 border border-white/20"
              >
                <span className="text-sm font-semibold text-gray-800">100% Organic & FSSAI Certified</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-white"
              >
                <span className="text-white">
                  Premium <span className="text-primary font-bold">Arogya Spices</span>
                </span>
                <br />
                <span className="text-white">for Authentic</span>
                <br />
                <span className="text-secondary">
                  Indian Flavors
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base md:text-lg text-white/90 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Experience the rich, aromatic taste of traditional Indian spices. 
                <span className="font-semibold text-white"> Freshly ground, organically sourced <span className="text-primary font-bold">Arogya Spices</span>,</span> and delivered to your doorstep.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              >
                {[
                  { icon: <FiAward className="text-white" />, text: 'FSSAI Certified' },
                  { icon: '🌿', text: '100% Organic' },
                  { icon: <FiTruck className="text-white" />, text: 'Free Delivery' },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-white/20"
                  >
                    <span className="text-base">{feature.icon}</span>
                    <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center lg:justify-start mb-8"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <FiShoppingBag className="text-lg" />
                  Shop
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-3 justify-center lg:justify-start text-sm text-white/90"
              >
                <div className="flex -space-x-2">
                  {['R', 'P', 'S', 'A'].map((initial, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                      style={{ backgroundColor: '#DC2626' }}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <span className="font-semibold text-white">10K+</span>
                <span className="text-white">Happy Customers</span>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30">
                {/* Category Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category, idx) => (
                    <motion.div
                      key={category.slug}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="relative w-full h-24 rounded-xl overflow-hidden"
                    >
                      {category.image ? (
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 flex items-center justify-center text-3xl">
                          {category.icon}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Product Count Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-200"
                >
                  <div>
                    <p className="text-2xl font-bold text-gray-800">11</p>
                    <p className="text-xs text-gray-600">Premium Products</p>
                  </div>
                </motion.div>

                {/* Customer Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-200"
                >
                  <div>
                    <p className="text-2xl font-bold text-gray-800">4.9</p>
                    <p className="text-xs text-gray-600">Customer Rating</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Clean & Modern */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Feature 1 - Premium Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <FiAward className="text-4xl text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                FSSAI Certified & 100% Organic. Every product tested for purity and freshness.
              </p>
            </motion.div>

            {/* Feature 2 - Fast Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <FiTruck className="text-4xl text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick & Safe Shipping across India. Free delivery on orders.
              </p>
            </motion.div>

            {/* Feature 3 - Quality Guaranteed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <FiShield className="text-4xl text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                100% satisfaction guarantee. Fresh packaging to preserve aroma and flavor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section - Clean Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              Shop by Category
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of authentic Indian spices and masalas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const categoryProducts = products.filter(p => p.category === category.slug)
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="group block bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 overflow-hidden"
                  >
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      {category.image ? (
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl">
                          {category.icon}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-800 text-center text-lg mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      {category.teluguName && (
                        <p className="text-gray-500 text-sm text-center mb-3 italic">
                          {category.teluguName}
                        </p>
                      )}
                      <p className="text-gray-600 text-xs text-center mb-3">
                        {category.description}
                      </p>
                      <p className="text-primary text-sm font-semibold text-center">
                        {categoryProducts.length} Products
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Products Section - Clean Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              Top Selling Products
            </h2>
          </motion.div>

          {topProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {topProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    onClick={() => handleProductClick(product)}
                    className="group block bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <FiShoppingBag className="text-5xl" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 text-gray-800">
                        {product.name}
                      </h3>
                      {product.teluguName && (
                        <p className="text-gray-400 text-xs mb-1 italic">{product.teluguName}</p>
                      )}
                      <p className="text-gray-500 text-sm mb-3">{product.category}</p>
                      <button
                        onClick={() => handleProductClick(product)}
                        style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                        className="w-full py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FiShoppingBag className="text-5xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-base">No products available yet</p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              to="/products"
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:opacity-90"
            >
              View All Products
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Clean Grid Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <div className="mb-4">
                  <p className="font-bold text-gray-900 text-base mb-1">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Ready to Spice Up Your Kitchen?
            </h2>
            <p className="text-base md:text-lg mb-8 text-gray-600">
              Join thousands of happy customers enjoying authentic Indian flavors
            </p>
            <Link
              to="/products"
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
              className="inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:opacity-90"
            >
              Start Shopping Now
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
