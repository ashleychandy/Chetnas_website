import { motion } from "framer-motion";
import { Phone, WhatsApp, LocationOn, AccessTime } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="relative py-12 sm:py-16 lg:py-24 bg-black overflow-hidden">
      {/* Main Background Floral Pattern Overlays */}
      {/* Bottom Row Only */}
      <div className="absolute -bottom-12 sm:-bottom-16 -left-12 sm:-left-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute -bottom-12 sm:-bottom-16 -right-12 sm:-right-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 sm:space-y-4 px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white">
            Visit Our{" "}
            <span className="italic">
              Store<span className="text-red-600 font-serif">.</span>
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400">
            Premium wholesale kurti collection in Mumbai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-0"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent blur-sm"></div>
            <div className="relative bg-black border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Location Section */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-2 sm:p-3 flex items-center justify-center">
                        <LocationOn className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif italic text-white">
                        Store Location
                      </h3>
                    </div>

                    <address className="text-gray-400 not-italic text-sm sm:text-base space-y-1">
                      <p className="text-base sm:text-lg font-medium text-white">
                        Chetna<span className="text-red-600">'</span>s
                      </p>
                      <p>Shop no 4, Gemini apt,</p>
                      <p>Marve Rd, Malad West,</p>
                      <p>Mumbai, Maharashtra 400095</p>
                    </address>

                    <a
                      href="https://maps.app.goo.gl/z4fs4ba6zg6r3LXcA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-gradient-to-r from-gray-50 to-white text-black rounded-md hover:from-white hover:to-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 backdrop-blur-sm border border-white/20 min-w-[120px]"
                    >
                      <LocationOn className="mr-1.5 w-3.5 h-3.5" /> Directions
                    </a>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-2 sm:p-3 flex items-center justify-center shrink-0">
                        <AccessTime className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-medium text-white mb-1">
                          Business Hours
                        </h4>
                        <p className="text-sm sm:text-base text-gray-400">
                          Monday - Saturday
                          <br />
                          11:00 AM - 9:30 PM
                          <br />
                          Sunday
                          <br />
                          5:00 PM - 9:30 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="p-5 sm:p-6 lg:p-8 bg-white/5">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-2 sm:p-3 flex items-center justify-center">
                        <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif italic text-white">
                        Quick Contact
                      </h3>
                    </div>

                    {/* Main Contact */}
                    <div className="space-y-4 sm:space-y-5">
                      <div>
                        <a
                          href="tel:+919833977850"
                          className="text-xl sm:text-2xl lg:text-3xl font-medium text-white hover:text-red-600 transition-colors active:scale-95"
                        >
                          +91 98339 77850
                        </a>
                        <p className="text-sm sm:text-base text-gray-400 mt-1">
                          Main Contact
                        </p>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <a
                          href="tel:+919833977850"
                          className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-white/90 text-black rounded-md hover:bg-white transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 backdrop-blur-sm min-w-[100px]"
                        >
                          <Phone className="mr-1.5 w-3.5 h-3.5" /> Call
                        </a>
                        <a
                          href="https://wa.me/919833977850"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-gradient-to-r from-green-600 to-green-500 text-white rounded-md hover:from-green-500 hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 border border-green-400/20 min-w-[100px]"
                        >
                          <WhatsApp className="mr-1.5 w-3.5 h-3.5" /> Chat
                        </a>
                      </div>
                    </div>

                    {/* Alternative Contact */}
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <a
                          href="tel:+919930881987"
                          className="text-lg sm:text-xl lg:text-2xl font-medium text-white hover:text-red-600 transition-colors active:scale-95"
                        >
                          +91 99308 81987
                        </a>
                        <p className="text-sm sm:text-base text-gray-400 mt-1">
                          Alternative Number
                        </p>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <a
                          href="tel:+919930881987"
                          className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-white/80 text-black rounded-md hover:bg-white transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 backdrop-blur-sm min-w-[100px]"
                        >
                          <Phone className="mr-1.5 w-3.5 h-3.5" /> Call
                        </a>
                        <a
                          href="https://wa.me/919930881987"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium bg-gradient-to-r from-green-600/90 to-green-500/90 text-white rounded-md hover:from-green-600 hover:to-green-500 transform hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 border border-green-400/20 min-w-[100px]"
                        >
                          <WhatsApp className="mr-1.5 w-3.5 h-3.5" /> Chat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
