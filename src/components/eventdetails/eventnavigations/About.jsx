import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useEventStore from '../../../store/useEventStore'; // Adjust the import path as needed

const About = () => {
  const { eventId } = useParams();
  const event = useEventStore((state) => 
    state.events.find((event) => event.id.toString() === eventId)
  );

  if (!event) {
    return <div>No event data available</div>;
  }

  const { aboutData } = event;

  if (!aboutData) {
    return <div>No about data available</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full space-y-8 mb-5">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold text-gray-900"
      >
        {aboutData.title}
      </motion.h2>

      {/* Dynamic Sections */}
      {aboutData.sections.map((section, index) => (
        <section key={index} className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
          {typeof section.content === "string" ? (
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          ) : (
            section.content // Directly render JSX if content is a list or another element
          )}
        </section>
      ))}

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2 bg-gray-100 p-6 rounded-xl shadow-md"
      >
        <h3 className="text-2xl font-semibold text-gray-800">{aboutData.callToAction.title}</h3>
        <p className="text-gray-600 leading-relaxed">{aboutData.callToAction.content}</p>
      </motion.section>
    </div>
  );
};

export default About;