import { motion } from "framer-motion";
import { LocalMall, Palette, Diamond, Settings } from "@mui/icons-material";

const Features = () => {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Hand-picked fabrics and superior craftsmanship in every piece",
      icon: <LocalMall className="w-8 h-8" />,
    },
    {
      title: "Wholesale Pricing",
      description: "Best prices for bulk orders with flexible payment options",
      icon: <Diamond className="w-8 h-8" />,
    },
    {
      title: "Latest Designs",
      description: "Trendy and contemporary styles updated regularly",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for your specific requirements",
      icon: <Settings className="w-8 h-8" />,
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
    <div className="relative py-32 bg-black overflow-hidden">
      {/* Floral Pattern Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-20 rotate-180">
        <img
          src="/assets/floral-left.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 rotate-180">
        <img
          src="/assets/floral-right.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-white">
            Why Choose{" "}
            <span className="italic">
              Chetna<span className="text-red-600">'</span>s
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of style, quality, and value
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-sm"></div>
              <div className="relative h-full p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-3 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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
