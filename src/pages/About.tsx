import { motion } from "framer-motion";
import { LocalMall, Diamond, Palette, People } from "@mui/icons-material";

const About = () => {
  const values = [
    {
      icon: <LocalMall className="w-8 h-8" />,
      title: "Quality First",
      description:
        "We source only the finest fabrics and maintain strict quality control to ensure premium products.",
    },
    {
      icon: <Diamond className="w-8 h-8" />,
      title: "Value for Money",
      description:
        "Direct factory prices with no middlemen, ensuring the best wholesale rates for our customers.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Excellence",
      description:
        "Our designs blend traditional aesthetics with contemporary trends, creating unique and stylish pieces.",
    },
    {
      icon: <People className="w-8 h-8" />,
      title: "Customer Focus",
      description:
        "We build lasting relationships with our clients through exceptional service and reliability.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden pt-20">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
            About{" "}
            <span className="italic">
              Chetna<span className="text-red-600">'</span>s
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Your premier destination for wholesale kurtis in Mumbai, where
            tradition meets contemporary fashion.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white">Our Story</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded with a vision to provide high-quality wholesale kurtis,
                Chetna<span className="text-red-600">'</span>s has established
                itself as a trusted name in Mumbai's fashion industry. Our
                journey began with a simple mission: to offer premium quality
                ethnic wear at wholesale prices.
              </p>
              <p>
                Over the years, we've built strong relationships with retailers
                and bulk buyers, understanding their needs and consistently
                delivering products that exceed expectations. Our commitment to
                quality, coupled with competitive pricing, has made us a
                preferred choice for businesses across the region.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-sm"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/assets/Chetnas.jpg"
                alt="Chetna's Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-serif text-white text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-sm"></div>
                <div className="relative p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-transparent p-3 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-4 group-hover:text-red-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 text-center max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-serif text-white">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To provide our customers with the finest quality ethnic wear at
            competitive wholesale prices while maintaining the highest standards
            of service and reliability. We strive to be the go-to destination
            for retailers and bulk buyers looking for premium kurtis that blend
            traditional aesthetics with contemporary fashion.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
