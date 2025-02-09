import React, { useState } from "react";

const faqData = [
  {
    question: "What is SDIETTechies?",
    answer: "SDIETTechies is an event management platform for organizing and managing college events at SDIET."
  },
  {
    question: "How can I register for an event?",
    answer: "You can register for events through the event page by filling out the required details."
  },
  {
    question: "Is there a fee for participating in events?",
    answer: "The participation fee varies depending on the event. Please check the event details for more information."
  },
  {
    question: "How do I become an event coordinator?",
    answer: "You can apply to be an event coordinator by expressing your interest through the event registration or reaching out to the event organizers."
  },
  {
    question: "How do I get in touch with an event organizer?",
    answer: "You can find the event organizers' contact details on the 'Contact Us' page or directly through the event page."
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg space-y-6">
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

            {/* Smooth transition animation for the answer */}
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
