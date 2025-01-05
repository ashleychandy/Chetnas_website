import { motion } from "framer-motion";
import { Phone, WhatsApp, LocationOn } from "@mui/icons-material";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] sm:min-h-screen bg-black overflow-hidden">
      {/* Main Background Floral Pattern Overlays */}
      {/* Top Row */}
      <div className="absolute -top-12 sm:-top-16 -left-12 sm:-left-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute -top-12 sm:-top-16 -right-12 sm:-right-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>

      {/* Middle Row */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-12 sm:-right-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 z-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg font-medium tracking-wider text-red-600 uppercase px-4 sm:px-0"
              >
                Premium Wholesale Kurtis
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-white px-4 sm:px-0"
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
              className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
            >
              Visit our store in Mumbai for the finest collection of designer
              kurtis at wholesale prices. Direct factory outlet with exclusive
              designs for retailers and bulk buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="tel:+919833977850"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-md bg-white/90 text-black hover:bg-white transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 backdrop-blur-sm min-w-[100px]"
                >
                  <Phone className="mr-1.5 w-3.5 h-3.5" /> Call
                </a>
                <a
                  href="https://wa.me/919833977850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-md bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 border border-green-400/20 min-w-[100px]"
                >
                  <WhatsApp className="mr-1.5 w-3.5 h-3.5" /> Chat
                </a>
              </div>
              <a
                href="https://maps.app.goo.gl/z4fs4ba6zg6r3LXcA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-md bg-gradient-to-r from-gray-50 to-white text-black hover:from-white hover:to-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md backdrop-blur-sm active:scale-95 border border-white/20 min-w-[120px]"
              >
                <LocationOn className="mr-1.5 w-3.5 h-3.5" /> Directions
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-xs sm:text-sm"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                <span>Open Daily</span>
              </div>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span>Mon-Sat: 11 AM - 9:30 PM</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span>Sun: 5 PM - 9:30 PM</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-[16/9] w-full max-w-2xl mx-auto">
              {/* Glow Effects */}
              <div className="absolute -inset-2 bg-gradient-to-r from-black via-white/10 to-black rounded-full blur-3xl"></div>

              {/* Logo Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>

                {/* Floral Patterns */}
                <div className="absolute inset-0">
                  <div className="absolute -top-8 sm:-top-12 -left-8 sm:-left-12 w-40 sm:w-56 h-40 sm:h-56 rotate-180 transform opacity-[0.15]">
                    <img
                      src="/assets/floral-left.svg"
                      alt=""
                      className="w-full h-full object-contain brightness-200"
                    />
                  </div>
                  <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 w-40 sm:w-56 h-40 sm:h-56 -rotate-180 transform opacity-[0.15]">
                    <img
                      src="/assets/floral-right.svg"
                      alt=""
                      className="w-full h-full object-contain brightness-200"
                    />
                  </div>
                  <div className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 w-40 sm:w-56 h-40 sm:h-56 transform opacity-[0.15]">
                    <img
                      src="/assets/floral-left.svg"
                      alt=""
                      className="w-full h-full object-contain brightness-200"
                    />
                  </div>
                  <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-40 sm:w-56 h-40 sm:h-56 transform opacity-[0.15]">
                    <img
                      src="/assets/floral-right.svg"
                      alt=""
                      className="w-full h-full object-contain brightness-200"
                    />
                  </div>
                </div>

                {/* Logo */}
                <div className="relative p-4 sm:p-6 lg:p-12">
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
