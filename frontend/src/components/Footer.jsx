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

      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Sri Rudra Foods
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            <p className="text-gray-200 leading-relaxed mb-6">
              Premium quality spices and masalas for authentic Indian flavors. Bringing traditional taste to your kitchen.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <FiAward className="text-secondary text-lg" />
                <span className="text-gray-200">FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FiShield className="text-primary text-lg" />
                <span className="text-gray-200">100% Organic</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <FiPhone className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-white hover:text-primary transition-colors font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <FiMail className="text-secondary text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Email</p>
                  <a href="mailto:info@srirudrafoods.com" className="text-white hover:text-secondary transition-colors break-all font-medium">
                    info@srirudrafoods.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <FiMapPin className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">Address</p>
                  <p className="text-white">
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
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Business Hours
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
            </h4>
            <div className="space-y-4">
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <p className="text-gray-200 font-semibold mb-2">Monday - Saturday</p>
                <p className="text-white text-lg">9:00 AM - 7:00 PM</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <p className="text-gray-200 font-semibold mb-2">Sunday</p>
                <p className="text-white text-lg">10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-200 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Sri Rudra Foods</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
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

