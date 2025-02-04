import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WinnerCarousel = () => {
  const winners = [
    { name: "Rahul", event: "Web 3 Hackathon", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sanya", event: "AI Challenge", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "John", event: "Coding Battle", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % winners.length);
    }, 4000); // Changes winner every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Horizontally center the content
        alignItems: "center", // Vertically center the content
       
        backgroundColor: "#f9f9f9", // Light background for contrast
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%", // Adjust width to fit on smaller screens
          maxWidth: "600px", // Maximum width for larger screens
          position: "relative",
        }}
      >
        <motion.div
          key={winners[currentIndex].name}
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            padding: "10px 0",
            width: "100%", // Ensure it uses the available width
            height: "80px", // Reduced height for a more compact design
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 1,
          }}
        >
          <motion.img
            src={winners[currentIndex].image}
            alt={winners[currentIndex].name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{
              width: "50px", // Smaller image size for better layout
              height: "50px",
              borderRadius: "50%",
              marginRight: "1rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div style={{ padding: "0 1rem" }}>
            <motion.p
              style={{
                fontSize: "1rem", // Smaller font size for better readability on mobile
                fontWeight: "bold",
                color: "#333",
                marginBottom: "0.5rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              Congratulations{" "}
              <span style={{ color: "#f39c12" }}>{winners[currentIndex].name}</span> for winning in{" "}
              <span style={{ fontStyle: "italic" }}>{winners[currentIndex].event}</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WinnerCarousel;
