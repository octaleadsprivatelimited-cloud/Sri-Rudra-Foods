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
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-700"
          style={{
            backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-black/50 to-primary/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8 leading-tight"
              >
                <span className="text-white drop-shadow-2xl">
                  Premium <span className="bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">Arogya Spices</span>
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">for Authentic</span>
                <br />
                <span className="bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent drop-shadow-2xl">
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
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
              >
                {[
                  { icon: <FiAward className="text-white" />, text: 'FSSAI Certified', color: 'from-blue-500 to-blue-600' },
                  { icon: '🌿', text: '100% Organic', color: 'from-green-500 to-green-600' },
                  { icon: <FiTruck className="text-white" />, text: 'Free Delivery', color: 'from-purple-500 to-purple-600' },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2 bg-gradient-to-r ${feature.color} backdrop-blur-xl px-5 py-3 rounded-xl shadow-xl border border-white/30 hover:shadow-2xl transition-all`}
                  >
                    <span className="text-lg">{feature.icon}</span>
                    <span className="text-sm font-bold text-white">{feature.text}</span>
                  </motion.div>
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
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-red-600 to-primary text-white font-bold rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <FiShoppingBag className="text-xl group-hover:rotate-12 transition-transform" />
                  <span>Shop Now</span>
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
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

      {/* Categories Section - Clean Design */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
            }}
          ></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-transparent to-secondary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Explore our wide range of authentic Indian spices and masalas
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const categoryProducts = products.filter(p => p.category === category.slug)
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="group block bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-52 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      {category.image ? (
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-5xl">
                          {category.icon}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="font-bold text-gray-900 text-center text-lg mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      {category.teluguName && (
                        <p className="text-gray-500 text-sm text-center mb-3 italic font-medium">
                          {category.teluguName}
                        </p>
                      )}
                      <p className="text-gray-600 text-xs text-center mb-4 font-medium">
                        {category.description}
                      </p>
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-red-500/10 text-primary text-sm font-bold rounded-full border border-primary/20">
                          {categoryProducts.length} Products
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Top Products Section - Clean Design */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
            }}
          ></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-transparent to-secondary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Top Selling Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          {topProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                    className="group block bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 h-full flex flex-col"
                  >
                    <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex-shrink-0">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <FiShoppingBag className="text-5xl" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-3 md:p-5 bg-white flex flex-col flex-grow">
                      <h3 className="font-bold text-sm md:text-lg mb-1 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      {product.teluguName && (
                        <p className="text-gray-500 text-xs mb-1 md:mb-2 italic line-clamp-1">{product.teluguName}</p>
                      )}
                      <p className="text-gray-400 text-xs mb-3 md:mb-4 font-medium uppercase tracking-wide">{product.category}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleProductClick(product)
                        }}
                        className="w-full py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white hover:from-[#20BA5A] hover:to-[#1DA851] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 md:gap-2 transform hover:scale-105 mt-auto"
                      >
                        <svg className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span className="whitespace-nowrap">Order on WhatsApp</span>
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

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 font-bold px-8 py-4 bg-gradient-to-r from-primary via-red-600 to-primary text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-1 hover:scale-105"
            >
              <span>View All Products</span>
              <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Clean Grid Layout */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
            }}
          ></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-transparent to-secondary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
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
      <section className="relative py-20 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
            }}
          ></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 via-transparent to-secondary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Ready to Spice Up Your Kitchen?
            </h2>
            <p className="text-base md:text-lg mb-8 text-gray-600 font-medium">
              Join thousands of happy customers enjoying authentic Indian flavors
            </p>
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 font-bold px-8 py-4 bg-gradient-to-r from-primary via-red-600 to-primary text-white rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-1 hover:scale-105"
            >
              <span>Start Shopping Now</span>
              <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Modern UI/UX Design */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-5xl mx-auto">
            {/* Feature 1 - Premium Quality */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full flex flex-col items-center justify-center">
                {/* Icon Container with Gradient */}
                <div className="relative mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-primary/10 to-red-600/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <FiAward className="text-primary text-xl md:text-3xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xs md:text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                  Premium Quality
                </h3>
              </div>
            </motion.div>

            {/* Feature 2 - Fast Delivery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full flex flex-col items-center justify-center">
                {/* Icon Container with Gradient */}
                <div className="relative mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-300">
                    <FiTruck className="text-blue-600 text-xl md:text-3xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xs md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center leading-tight">
                  Fast Delivery
                </h3>
              </div>
            </motion.div>

            {/* Feature 3 - Quality Guaranteed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full flex flex-col items-center justify-center">
                {/* Icon Container with Gradient */}
                <div className="relative mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center border border-green-500/20 group-hover:border-green-500/40 transition-all duration-300">
                    <FiShield className="text-green-600 text-xl md:text-3xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xs md:text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-center leading-tight">
                  Quality Guaranteed
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
