import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FiShoppingBag, FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  const whatsappNumber = '919876543210'
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about your products.')
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <FiShoppingBag className="text-white text-xl md:text-2xl" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                Sri Rudra Foods
              </h1>
              <p className="text-xs font-bold text-primary hidden sm:block">
                <span className="bg-primary/10 px-2 py-0.5 rounded-md">Arogya Spices</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Contact & Menu */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-semibold text-sm">Chat Now</span>
            </button>
            
            {/* Phone Button */}
            <a
              href="tel:+919876543210"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ backgroundColor: '#DC2626' }}
            >
              <FiPhone className="text-xl" />
              <span className="font-semibold text-sm">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl text-gray-700" />
              ) : (
                <FiMenu className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary border-l-4 border-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  handleWhatsAppClick()
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20BA5A] transition-all duration-200"
              >
                <FaWhatsapp className="text-xl" />
                <span>Chat on WhatsApp</span>
              </button>
              <a
                href="tel:+919876543210"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-200"
              >
                <FiPhone className="text-xl" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
