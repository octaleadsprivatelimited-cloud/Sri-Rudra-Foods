import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import toast from 'react-hot-toast'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.message) {
      toast.error('Please fill all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email || '')
      formDataToSend.append('phone', formData.phone || '')
      formDataToSend.append('message', formData.message)

      const response = await fetch('https://formspree.io/f/xlgeddrv', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        if (data.errors) {
          toast.error(data.errors.map(error => error.message).join(', '))
        } else {
          throw new Error(data.error || 'Failed to send message')
        }
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us via WhatsApp.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappNumber = '919100696669'
  const whatsappMessage = encodeURIComponent('Hello, I would like to know more about your products.')

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Contact Us - Sri Rudra Foods | Get in Touch | Phone, Email, WhatsApp"
        description="Contact Sri Rudra Foods for premium Indian spices and masalas. Reach us via phone +91-9100696669, email info@srirudrafoods.com, or WhatsApp. Located in Krishnapatnam, Muthukur Mandal, SPSR Nellore District, Andhra Pradesh, India. Business hours: Monday-Saturday 9 AM-7 PM, Sunday 10 AM-5 PM. We'd love to hear from you!"
        keywords="contact Sri Rudra Foods, spice company contact, buy spices contact, Nellore spices contact, Andhra Pradesh spices, spice inquiry, WhatsApp order spices, spice customer service, Krishnapatnam spice contact, Muthukur spices contact, SPSR Nellore spice company, spice company phone number, spice company email, spice company address, Indian spice contact, organic spice contact, spice order inquiry, spice customer support, spice helpline, spice WhatsApp number, spice business contact, wholesale spice contact, retail spice contact, spice delivery contact, spice company location"
        ogUrl="https://srirudrafoods.com/contact"
        canonicalUrl="https://srirudrafoods.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Sri Rudra Foods",
          "description": "Contact information for Sri Rudra Foods",
          "url": "https://srirudrafoods.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "Sri Rudra Foods",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Krishnapatnam",
              "addressLocality": "Muthukur Mandal",
              "addressRegion": "SPSR Nellore District",
              "addressCountry": "IN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9100696669",
                "contactType": "Customer Service",
                "availableLanguage": ["en", "te", "hi"],
                "areaServed": "IN"
              },
              {
                "@type": "ContactPoint",
                "email": "info@srirudrafoods.com",
                "contactType": "Customer Service"
              }
            ]
          }
        }}
      />
      {/* Hero Section with Background Image */}
      <section className="relative py-8 md:py-12 overflow-hidden min-h-[200px] md:min-h-[250px] flex items-center mt-14 md:mt-16">
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
      <div className="relative container mx-auto px-4 py-12 overflow-hidden">
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
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              disabled={isSubmitting}
              style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
              className="w-full py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
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
                  <p className="text-gray-600">+91-9100696669</p>
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
                    Krishnapatnam,<br />
                    Muthukur Mandal,<br />
                    SPSR Nellore District,<br />
                    Andhra Pradesh, India
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
      </div>

      {/* Google Maps Section */}
      <section className="relative container mx-auto px-4 py-12 overflow-hidden">
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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Us on Map</h2>
          <div className="w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden border border-gray-300">
            <iframe
              src="https://www.google.com/maps?q=Krishnapatnam,+Muthukur+Mandal,+SPSR+Nellore+District,+Andhra+Pradesh,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Rudra Foods Location - Krishnapatnam, Muthukur Mandal, SPSR Nellore District"
            ></iframe>
          </div>
          <p className="text-gray-600 text-sm mt-4 text-center">
            <strong>Sri Rudra Foods</strong><br />
            Krishnapatnam, Muthukur Mandal, SPSR Nellore District, Andhra Pradesh, India
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
