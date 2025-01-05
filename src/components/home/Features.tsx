import { motion } from "framer-motion";
import { LocalMall, Palette, Diamond, Settings } from "@mui/icons-material";

const Features = () => {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Hand-picked fabrics and superior craftsmanship in every piece",
      icon: <LocalMall className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "Wholesale Pricing",
      description: "Best prices for bulk orders with flexible payment options",
      icon: <Diamond className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "Latest Designs",
      description: "Trendy and contemporary styles updated regularly",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for your specific requirements",
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative py-12 sm:py-16 lg:py-24 bg-black overflow-hidden">
      {/* Main Background Floral Pattern Overlays */}
      {/* Top Floral */}
      <div className="absolute -top-4 -left-12 sm:-left-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute -top-4 -right-12 sm:-right-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>

      {/* Bottom Floral */}
      <div className="absolute -bottom-4 -left-12 sm:-left-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-[250] sm:brightness-200"
        />
      </div>
      <div className="absolute -bottom-4 -right-12 sm:-right-16 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] opacity-[0.2] sm:opacity-[0.15]">
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
            Why Choose{" "}
            <span className="italic">
              Chetna<span className="text-red-600">'</span>s
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of style, quality, and value
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative h-full p-5 sm:p-6 lg:p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-2 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
