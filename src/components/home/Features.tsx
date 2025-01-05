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
    <div className="relative py-16 sm:py-24 lg:py-32 bg-black overflow-hidden">
      {/* Main Background Floral Pattern Overlays */}
      {/* Top Row */}
      <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -top-10 sm:-top-20 left-1/2 -translate-x-1/2 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>

      {/* Middle Row */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-10 sm:-left-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-10 sm:-right-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15]">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>

      {/* Bottom Row */}
      <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -bottom-10 sm:-bottom-20 left-1/2 -translate-x-1/2 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15] rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain brightness-200"
        />
      </div>
      <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-[20rem] sm:w-[35rem] h-[20rem] sm:h-[35rem] opacity-[0.15] rotate-180">
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
          className="text-center space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Why Choose{" "}
            <span className="italic">
              Chetna<span className="text-red-600">'</span>s
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of style, quality, and value
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-2 sm:p-3 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">
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
