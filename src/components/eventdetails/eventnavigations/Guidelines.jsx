import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Guidelines = () => {
  const guidelinesData = {
    generalRules: [
      "All participants must register before the deadline.",
      "Teams can have a maximum of 4 members.",
      "Submissions must be made before the deadline.",
      "Any form of plagiarism will lead to disqualification.",
    ],
    technicalGuidelines: [
      "Only permitted resources can be used during the event.",
      "Ensure your submission adheres to the given format.",
      "Follow best coding practices to maintain code quality.",
    ],
    judgingCriteria: [
      "Innovation and originality",
      "Feasibility and practicality",
      "Technical implementation",
      "Presentation and clarity",
    ],
    resources: {
      text: "For more details, refer to the official event guidelines document:",
      link: "https://example.com/event-guidelines",
      linkText: "View Full Guidelines",
    },
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
        Event Guidelines
      </h2>

      <div className="space-y-6">
        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700"
        >
          Welcome to the event! Please follow the guidelines below to ensure a
          smooth and fair experience for all participants.
        </motion.p>

        {/* General Rules */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">General Rules</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {guidelinesData.generalRules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Technical Guidelines */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Guidelines</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {guidelinesData.technicalGuidelines.map((guideline, index) => (
              <li key={index}>{guideline}</li>
            ))}
          </ul>
        </div>

        {/* Judging Criteria */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Judging Criteria</h3>
          <p className="text-gray-700">Projects will be judged based on the following criteria:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {guidelinesData.judgingCriteria.map((criteria, index) => (
              <li key={index}>{criteria}</li>
            ))}
          </ul>
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Resources</h3>
          <p className="text-gray-700">{guidelinesData.resources.text}</p>
          <a
            href={guidelinesData.resources.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            {guidelinesData.resources.linkText}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines;
