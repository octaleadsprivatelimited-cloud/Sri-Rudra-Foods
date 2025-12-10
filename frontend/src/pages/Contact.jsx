import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.message) {
      toast.error('Please fill all required fields')
      return
    }

    const phoneNumber = '919876543210' // Replace with your WhatsApp number
    let message = `Hello! I have a query:\n\n`
    message += `Name: ${formData.name}\n`
    if (formData.email) message += `Email: ${formData.email}\n`
    if (formData.phone) message += `Phone: ${formData.phone}\n`
    message += `Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    toast.success('Opening WhatsApp...')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const whatsappNumber = '919876543210'
  const whatsappMessage = encodeURIComponent('Hello, I would like to know more about your products.')

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[350px] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Indian_Spices_Health_Benefits.webp)',
          }}
        ></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 border border-white/30">
              <span className="text-sm font-semibold text-white">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
              className="w-full py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Send via WhatsApp
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FiPhone className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FiMail className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">Email</h3>
                  <p className="text-gray-600">info@srirudrafoods.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FiMapPin className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Arogya Naturals<br />
                    Muthukuru Village, Muthukuru Mandal<br />
                    Nellore District, Andhra Pradesh<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Contact</h3>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors w-full justify-center hover:opacity-90"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="bg-gradient-to-r from-primary to-red-600 rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Business Hours</h3>
            <p className="mb-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p>Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </motion.div>
      </div>

      {/* Google Maps Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Us on Map</h2>
          <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-gray-300">
            <iframe
              src="https://www.google.com/maps?q=Muthukuru+Village,+Muthukuru+Mandal,+Nellore+District,+Andhra+Pradesh,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arogya Naturals Location - Muthukuru Village, Muthukuru Mandal, Nellore District"
            ></iframe>
          </div>
          <p className="text-gray-600 text-sm mt-4 text-center">
            <strong>Arogya Naturals</strong><br />
            Muthukuru Village, Muthukuru Mandal, Nellore District, Andhra Pradesh, India
          </p>
        </motion.div>
      </section>
      </div>
    </div>
  )
}

export default Contact
