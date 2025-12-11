import { motion } from 'framer-motion'
import { FiAward, FiTruck, FiShield, FiUsers, FiHeart, FiCheck, FiStar } from 'react-icons/fi'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-24 overflow-hidden min-h-[400px] flex items-center">
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
              <span className="text-sm font-semibold text-white">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About Sri Rudra Foods
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted source for authentic Indian spices and masalas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with Visual Elements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Story</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                  <img
                    src="/images/Indian_Spices_Health_Benefits.webp"
                    alt="Indian Spices"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <FiStar className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-800">Since 2010</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Sri Rudra Foods was born from a passion for authentic Indian flavors and a commitment
                    to bringing the finest spices and masalas to your kitchen.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We source our ingredients directly from trusted farmers and use traditional methods
                    to ensure the highest quality. Every product is carefully selected, tested, and packaged
                    to preserve its natural aroma and flavor.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-15">
                  <img
                    src="/images/Powders.jpg"
                    alt="Spices"
                    className="w-full h-full object-cover rounded-tl-2xl"
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <FiAward className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide authentic, high-quality Indian spices and masalas that bring the rich
                    flavors of traditional Indian cuisine to every home.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 border border-secondary/20 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-15">
                  <img
                    src="/images/South Indian Masalas.jpg"
                    alt="Masalas"
                    className="w-full h-full object-cover rounded-tl-2xl"
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <FiHeart className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become the most trusted brand for Indian spices, known for quality, authenticity,
                    and customer satisfaction.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FiAward className="text-3xl" />,
                title: 'Quality First',
                description: 'We never compromise on quality. Every product is tested and certified.',
                bgColor: 'bg-primary/10',
                iconColor: 'text-primary',
                image: '/images/Powders.jpg',
              },
              {
                icon: <FiHeart className="text-3xl" />,
                title: 'Authenticity',
                description: 'Traditional recipes and methods passed down through generations.',
                bgColor: 'bg-secondary/10',
                iconColor: 'text-secondary',
                image: '/images/South Indian Masalas.jpg',
              },
              {
                icon: <FiShield className="text-3xl" />,
                title: 'Trust & Safety',
                description: 'FSSAI certified and 100% organic products you can trust.',
                bgColor: 'bg-primary/10',
                iconColor: 'text-primary',
                image: '/images/Meat Masalas.jpg',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 hover:shadow-2xl hover:border-primary/20 transition-all group"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 p-8">
                  <div className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <div className={value.iconColor}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Why Choose Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'FSSAI Certified Products',
                '100% Organic & Natural',
                'Direct from Farmers',
                'Traditional Methods',
                'Fresh Packaging',
                'Fast Delivery',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gradient-to-r from-white to-gray-50 rounded-xl p-5 hover:shadow-lg transition-all border border-gray-200/50 shadow-md"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <FiCheck className="text-white text-lg" />
                  </div>
                  <span className="text-gray-900 font-bold text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-blue-700">Our Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Trusted by customers,</span>{' '}
              <span className="text-primary">backed by quality</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Recognized for quality in spices and masalas, customer satisfaction and authentic Indian flavors by leading certification bodies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                number: '11', 
                label: 'Products', 
                subtitle: 'Premium Quality Spices',
                icon: <FiAward />,
                iconBg: 'bg-blue-50',
                iconBorder: 'border-blue-200',
                iconColor: 'text-blue-600'
              },
              { 
                number: '10K+', 
                label: 'Happy Customers', 
                subtitle: 'Satisfied Families',
                icon: <FiUsers />,
                iconBg: 'bg-yellow-50',
                iconBorder: 'border-yellow-200',
                iconColor: 'text-yellow-600'
              },
              { 
                number: '50+', 
                label: 'Cities', 
                subtitle: 'Pan-India Delivery',
                icon: <FiTruck />,
                iconBg: 'bg-green-50',
                iconBorder: 'border-green-200',
                iconColor: 'text-green-600'
              },
              { 
                number: '4.9', 
                label: 'Rating', 
                subtitle: 'Customer Reviews',
                icon: <FiStar />,
                iconBg: 'bg-purple-50',
                iconBorder: 'border-purple-200',
                iconColor: 'text-purple-600'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 ${stat.iconBg} ${stat.iconBorder} border-2 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={stat.iconColor}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
