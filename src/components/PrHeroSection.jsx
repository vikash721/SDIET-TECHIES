import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket, Send, ChevronDown, Laptop, Code, Terminal, Server, Monitor, Keyboard, Globe } from "lucide-react";

const HeroSection = () => {
  const rocketControls = useAnimation();
  const planeControls = useAnimation();
  const [swapColors, setSwapColors] = useState(false);

  useEffect(() => {
    const generateRandomPath = () => {
      return {
        x: Array.from({ length: 6 }, () => Math.random() * 600 - 300),
        y: Array.from({ length: 6 }, () => Math.random() * 400 - 200),
        rotate: Array.from({ length: 6 }, () => Math.random() * 360),
      };
    };

    const animateIcons = async () => {
      while (true) {
        const speed = Math.random() * 10 + 10; // Random speed between 10s and 20s

        // Fade out before color swap
        await Promise.all([
          rocketControls.start({ opacity: 0, transition: { duration: 0.5 } }),
          planeControls.start({ opacity: 0, transition: { duration: 0.5 } }),
        ]);

        setSwapColors((prev) => !prev); // Toggle colors

        // Fade in with a new animation path
        await Promise.all([
          rocketControls.start({
            ...generateRandomPath(),
            opacity: 1, // Fade back in
            transition: { duration: speed, ease: "easeInOut" },
          }),
          planeControls.start({
            ...generateRandomPath(),
            opacity: 1, // Fade back in
            transition: { duration: speed, ease: "easeInOut" },
          }),
        ]);
      }
    };

    animateIcons();
  }, [rocketControls, planeControls]);

  // Floating Background Icons Animation
  const floatingAnimation = {
    y: [0, -20, 0], // Float up and down
    rotate: [0, 5, -5, 0], // Slight rotation
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Background Icons */}

       <div className="hidden md:block">
       <motion.div className="absolute top-10 left-10 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Laptop size={120} />
          </motion.div>

          <motion.div className="absolute top-130 left-1/5 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Code size={140} />
          </motion.div>

          <motion.div className="absolute bottom-20 right-20 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Terminal size={130} />
          </motion.div>

          <motion.div className="absolute bottom-1/3 right-1/4 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Server size={110} />
          </motion.div>

          <motion.div className="absolute top-1/3 right-10 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Monitor size={110} />
          </motion.div>

          <motion.div className="absolute bottom-10 left-20 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Keyboard size={100} />
          </motion.div>

          <motion.div className="absolute top-20 right-1/2 text-gray-300 opacity-20" animate={floatingAnimation}>
            <Globe size={100} />
          </motion.div>
        </div>

      <motion.div
        className="z-20 relative text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight md:text-7xl mb-6">
          Welcome to{" "}
          <motion.span
            className={swapColors ? "text-indigo-600" : "text-orange-600"}
            animate={{ color: swapColors ? "#4F46E5" : "#EA580C" }}
            transition={{ duration: 0.8 }}
          >
            SDIET
          </motion.span>
          <motion.span
            className={swapColors ? "text-orange-600" : "text-indigo-600"}
            animate={{ color: swapColors ? "#EA580C" : "#4F46E5" }}
            transition={{ duration: 0.8 }}
          >
            Techies
          </motion.span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Your College Community for Event Management and Innovation
        </p>
        <motion.button
          className="mt-8 px-8 py-4 bg-indigo-600 text-white text-lg rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Now
        </motion.button>
      </motion.div>

      {/* 🚀 Rocket Animation */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-orange-600 z-50"
        animate={rocketControls}
        initial={{ opacity: 1 }}
      >
        <Rocket size={48} />
      </motion.div>

      {/* ✈️ Paper Plane Animation */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 text-indigo-600 z-50"
        animate={planeControls}
        initial={{ opacity: 1 }}
      >
        <Send size={48} />
      </motion.div>

      {/* ⬇️ Smooth Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ChevronDown className="w-10 h-10 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
