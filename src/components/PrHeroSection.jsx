import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Rocket, Send, ChevronDown, Laptop, Code, Terminal, Server, Monitor, Keyboard, Globe } from "lucide-react";

const HeroSection = () => {
  const rocketControls = useAnimation();
  const planeControls = useAnimation();
  const swapColors = useRef(false);
  const location = useLocation(); // Ensure the component updates on route change

  useEffect(() => {
    const generateRandomPath = () => ({
      x: [0, Math.random() * 600 - 300, Math.random() * 100 - 400, 0],
      y: [0, Math.random() * 400 - 200, Math.random() * 100 - 300, 0],
      rotate: [0, Math.random() * 360, Math.random() * 180, 0],
    });

    const speed = Math.random() * 3 + 5;

    rocketControls.start({
      ...generateRandomPath(),
      transition: { duration: speed, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
    });

    planeControls.start({
      ...generateRandomPath(),
      transition: { duration: speed, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
    });

    return () => {
      // Stop animations on unmount
      rocketControls.stop();
      planeControls.stop();
    };
  }, []);

  return (
    <section key={location.pathname} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Background Icons (Grouped Animation) */}
      <motion.div className="hidden md:block">
        {/* Top Left */}
        <motion.div
          className="absolute top-16 left-20 text-gray-300 opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: 1, ease: "easeInOut" }} // Removed infinite repeat
        >
          <Laptop size={100} />
        </motion.div>

        {/* Top Right */}
        <motion.div
          className="absolute top-16 right-20 text-gray-300 opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: 1, ease: "easeInOut" }}
        >
          <Code size={110} />
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          className="absolute bottom-16 left-20 text-gray-300 opacity-20"
          animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 8, repeat: 1, ease: "easeInOut" }}
        >
          <Terminal size={120} />
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          className="absolute bottom-16 right-20 text-gray-300 opacity-20"
          animate={{ y: [0, 15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: 1, ease: "easeInOut" }}
        >
          <Server size={100} />
        </motion.div>
      </motion.div>

      <motion.div
        className="z-20 relative text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight md:text-7xl mb-6">
          Welcome to{" "}
          <motion.span
            className={swapColors.current ? "text-indigo-600" : "text-orange-600"}
            animate={{ color: swapColors.current ? "#4F46E5" : "#EA580C" }}
            transition={{ duration: 0.8 }}
          >
            SDIET
          </motion.span>
          <motion.span
            className={swapColors.current ? "text-orange-600" : "text-indigo-600"}
            animate={{ color: swapColors.current ? "#EA580C" : "#4F46E5" }}
            transition={{ duration: 0.8 }}
          >
            Techies
          </motion.span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Your College Community for Event Management and Innovation
        </p>
        <button className="mt-8 px-8 py-4 bg-indigo-600 text-white text-lg rounded-full transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-indigo-400 shadow-lg">
          Join Now
        </button>
      </motion.div>

      {/* 🚀 Rocket Animation */}
      <motion.div className="absolute top-1/4 left-1/4 text-orange-600 z-50" animate={rocketControls}>
        <Rocket size={48} />
      </motion.div>

      {/* ✈️ Paper Plane Animation */}
      <motion.div className="absolute bottom-1/4 right-1/4 text-indigo-600 z-50" animate={planeControls}>
        <Send size={48} />
      </motion.div>

      {/* ⬇️ Smooth Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="w-10 h-10 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
