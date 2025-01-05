import { motion } from "framer-motion";
import { Phone, WhatsApp, LocationOn } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Floral Pattern Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg font-medium tracking-wider text-red-600 uppercase"
              >
                Premium Wholesale Kurtis
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white"
              >
                Welcome to{" "}
                <span className="block mt-2 italic bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                  Chetna<span className="text-red-600">'</span>s
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Visit our store in Mumbai for the finest collection of designer
              kurtis at wholesale prices. Direct factory outlet with exclusive
              designs for retailers and bulk buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919833977850"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Phone className="mr-2" /> Call Now
                </a>
                <a
                  href="https://wa.me/919833977850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <WhatsApp className="mr-2" /> WhatsApp
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/z4fs4ba6zg6r3LXcA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-gray-100 to-white text-black hover:from-white hover:to-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <LocationOn className="mr-2" /> Get Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-8 flex items-center justify-center lg:justify-start space-x-6 text-gray-400"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span>Open Monday - Saturday</span>
              </div>
              <span className="text-gray-600">•</span>
              <span>10 AM - 8 PM</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto">
              {/* Glow Effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-black via-white/10 to-black rounded-full blur-3xl"></div>

              {/* Logo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>

                {/* Floral Patterns */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-48 h-48 rotate-180 transform">
                    <img
                      src="/assets/floral-left.svg"
                      alt=""
                      className="w-full h-full object-contain opacity-60"
                    />
                  </div>
                  <div className="absolute top-0 right-0 w-48 h-48 -rotate-180 transform">
                    <img
                      src="/assets/floral-right.svg"
                      alt=""
                      className="w-full h-full object-contain opacity-60"
                    />
                  </div>
                </div>

                {/* Logo */}
                <div className="relative p-12">
                  <motion.img
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    src="/assets/Chetnas.jpg"
                    alt="Chetna's Logo"
                    className="w-full h-full object-contain rounded-lg shadow-2xl transform hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
