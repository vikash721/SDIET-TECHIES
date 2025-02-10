import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = ({ event }) => {
  if (!event) return <div>No event data available</div>;

  const { faqData } = event;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg space-y-6 mb-5">
      <h2 className="text-3xl font-semibold text-gray-900">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <div
              className="flex items-center justify-between py-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.span>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 text-gray-700"
                >
                  <p className="py-2">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;