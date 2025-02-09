import React, { useState } from "react";

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
              <span
                className={`transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
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
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                activeIndex === index ? "max-h-[500px] py-2" : ""
              }`}
            >
              <div className="px-6 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;