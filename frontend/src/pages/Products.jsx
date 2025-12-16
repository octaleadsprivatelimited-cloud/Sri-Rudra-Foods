import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products, categories as categoryList } from '../data/products'
import { FiShoppingBag, FiFilter } from 'react-icons/fi'
import SEO from '../components/SEO'

const categories = [
  { name: 'All Products', slug: '', textColor: 'text-gray-900' },
  ...categoryList.map(cat => ({ name: cat.name, slug: cat.slug, textColor: 'text-gray-700' })),
]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const category = searchParams.get('category') || ''
    setSelectedCategory(category)
  }, [searchParams])

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory || p.subCategory === selectedCategory)
    : products

  const handleProductClick = (product) => {
    const phoneNumber = '919876543210' // Replace with your WhatsApp number
    const message = `Hello! I'm interested in ordering ${product.name}.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="All Products - Premium Indian Spices & Masalas | Sri Rudra Foods"
        description="Browse our complete collection of premium Indian spices and masalas. Organic, FSSAI certified powders including turmeric, red chili, coriander, cumin, and more. Shop authentic spices online."
        keywords="all spices, Indian spices collection, spice products, masala products, turmeric powder, red chili powder, coriander powder, cumin powder, spice powders, organic spices online, buy all spices, complete spice collection"
        ogUrl="https://srirudrafoods.com/products"
        canonicalUrl="https://srirudrafoods.com/products"
      />
      {/* Header Section with Background Image */}
      <div className="relative bg-white border-b border-gray-200 overflow-hidden min-h-[300px] mt-14 md:mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
          }}
        ></div>
        {/* Black Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Premium quality spices and masalas, handpicked for authentic Indian flavors
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-8 md:py-12 overflow-hidden">
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
        
        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FiFilter className="text-primary" />
                Categories
              </h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      category.name === 'All Products'
                        ? 'text-black font-semibold hover:bg-gray-100'
                        : selectedCategory === category.slug
                        ? 'bg-primary/10 text-primary border-2 border-primary shadow-md font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
                </p>
              </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <FiFilter className="text-primary" />
                  Filter Categories
                </span>
                <span className="text-sm text-gray-600">{filteredProducts.length} products</span>
              </button>
              
              {/* Mobile Filter Dropdown */}
              {showFilters && (
                <div className="mt-4 bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.slug}
                        onClick={() => {
                          setSelectedCategory(category.slug)
                          setShowFilters(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          category.name === 'All Products'
                            ? 'text-black font-semibold hover:bg-gray-100'
                            : selectedCategory === category.slug
                            ? 'bg-primary/10 text-primary border-2 border-primary font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl">
                <FiShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">No products found in this category.</p>
                <button
                  onClick={() => setSelectedCategory('')}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  View all products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    onClick={() => handleProductClick(product)}
                  >
                    {/* Product Image */}
                    <div className="relative h-56 bg-gray-100 overflow-hidden">
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
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      {product.teluguName && (
                        <p className="text-gray-500 text-sm mb-3 italic line-clamp-1">
                          {product.teluguName}
                        </p>
                      )}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="pt-4 border-t border-gray-100">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleProductClick(product)
                          }}
                          style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                          className="w-full py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Order on WhatsApp
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
