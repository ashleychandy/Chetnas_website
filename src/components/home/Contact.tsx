import { motion } from "framer-motion";
import { Phone, WhatsApp, LocationOn, AccessTime } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="relative py-32 bg-black overflow-hidden">
      {/* Main Background Floral Pattern Overlays */}
      {/* Top Row */}
      <div className="absolute -top-20 -left-20 w-[35rem] h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -top-20 -right-20 w-[35rem] h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>

      {/* Middle Row */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 w-[35rem] h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[35rem] h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>

      {/* Bottom Row */}
      <div className="absolute -bottom-20 -left-20 w-[35rem] h-[35rem] opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem] opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -bottom-20 -right-20 w-[35rem] h-[35rem] opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-white">
            Visit Our{" "}
            <span className="italic">
              Store<span className="text-red-600 font-serif">.</span>
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Premium wholesale kurti collection in Mumbai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent blur-sm"></div>
            <div className="relative bg-black border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Location Section */}
                <div className="p-8 md:p-12">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-3 flex items-center justify-center">
                        <LocationOn className="text-white" />
                      </div>
                      <h3 className="text-2xl font-serif italic text-white">
                        Store Location
                      </h3>
                    </div>

                    <address className="text-gray-400 not-italic text-lg space-y-2">
                      <p className="text-xl font-medium text-white">
                        Chetna<span className="text-red-600">'</span>s
                      </p>
                      <p>Shop no 4, Gemini apt,</p>
                      <p>Marve Rd, Malad West,</p>
                      <p>Mumbai, Maharashtra 400095</p>
                    </address>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-3 flex items-center justify-center shrink-0">
                        <AccessTime className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">
                          Business Hours
                        </h4>
                        <p className="text-gray-400">
                          Monday - Saturday
                          <br />
                          10:00 AM - 8:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="p-8 md:p-12 bg-white/5">
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-3 flex items-center justify-center">
                        <Phone className="text-white" />
                      </div>
                      <h3 className="text-2xl font-serif italic text-white">
                        Quick Contact
                      </h3>
                    </div>

                    {/* Main Contact */}
                    <div className="space-y-6">
                      <div>
                        <a
                          href="tel:+919833977850"
                          className="text-3xl font-medium text-white hover:text-red-600 transition-colors"
                        >
                          +91 98339 77850
                        </a>
                        <p className="text-gray-400 mt-1">Main Contact</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="tel:+919833977850"
                          className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <Phone className="mr-2" /> Call Now
                        </a>
                        <a
                          href="https://wa.me/919833977850"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <WhatsApp className="mr-2" /> WhatsApp
                        </a>
                      </div>

                      <a
                        href="https://maps.app.goo.gl/z4fs4ba6zg6r3LXcA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <LocationOn className="mr-2" /> Get Directions
                      </a>
                    </div>

                    {/* Alternative Contact */}
                    <div className="space-y-6 pt-6 border-t border-white/10">
                      <div>
                        <a
                          href="tel:+919930881987"
                          className="text-2xl font-medium text-white hover:text-red-600 transition-colors"
                        >
                          +91 99308 81987
                        </a>
                        <p className="text-gray-400 mt-1">Alternative Number</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="tel:+919930881987"
                          className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-white/80 text-black rounded-full hover:bg-white transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <Phone className="mr-2" /> Call Now
                        </a>
                        <a
                          href="https://wa.me/919930881987"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-green-600/80 text-white rounded-full hover:bg-green-700/80 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                          <WhatsApp className="mr-2" /> WhatsApp
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
