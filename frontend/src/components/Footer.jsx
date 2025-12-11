import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiAward, FiShield } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const whatsappNumber = '919876543210' // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hello, I would like to know more about your products.')

  return (
    <footer className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white mt-auto overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
          }}
        ></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/images/logo.png"
                alt="Sri Rudra Foods Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
            <p className="text-gray-200 leading-relaxed mb-4 text-sm">
              Premium quality spices and masalas for authentic Indian flavors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FiShield className="text-primary text-base" />
                <span className="text-gray-200">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-4 h-4 rounded-full bg-primary border-2 border-primary"></div>
                <span className="text-gray-200">100% Organic</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white relative inline-block pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-200 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white relative inline-block pb-2">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <FiPhone className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-white hover:text-primary transition-colors text-sm font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <FiMail className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Email</p>
                  <a href="mailto:info@srirudrafoods.com" className="text-white hover:text-primary transition-colors break-all text-sm font-medium">
                    info@srirudrafoods.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <FiMapPin className="text-primary text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">Address</p>
                  <p className="text-white text-sm leading-relaxed">
                    Arogya Naturals<br />
                    Muthukuru Village, Muthukuru Mandal<br />
                    Nellore District, Andhra Pradesh<br />
                    India
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white relative inline-block pb-2">
              Business Hours
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <p className="text-gray-200 font-semibold mb-1 text-sm">Monday - Saturday</p>
                <p className="text-white text-base">9:00 AM - 7:00 PM</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <p className="text-gray-200 font-semibold mb-1 text-sm">Sunday</p>
                <p className="text-white text-base">10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm">
              <p className="text-gray-200">
                &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Sri Rudra Foods</span>. All rights reserved. Developed by{' '}
                <a 
                  href="https://octaleads.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-white transition-colors font-semibold"
                >
                  Octaleads Private Limited
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
              <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

