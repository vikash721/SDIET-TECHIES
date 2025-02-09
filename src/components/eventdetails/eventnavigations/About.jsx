import React from "react";
import { motion } from "framer-motion";
import useEventStore from '../../../store/useEventStore';  // Import the useEventStore hook from Zustand store

const About = () => {
  const { events } = useEventStore(state => state.events);

  // Safely access the first event's aboutData using optional chaining
  const { aboutData2 } = events?.[0] || {}; // Use optional chaining in case events is empty
  
  // Safely destructure aboutData properties
  const { name, sections, callToAction } = aboutData2 || {};  // Default to empty object if aboutData is undefined

  console.log(aboutData2);

  const aboutData = {
    title: "About the Hackathon",
    sections: [
      {
        title: "What is This Hackathon?",
        content:
          "Welcome to SDIET Hackathon 2024, a high-energy event where innovation meets creativity! This hackathon challenges developers, designers, and problem-solvers to build cutting-edge solutions in a limited timeframe. Whether you're a beginner or an experienced coder, this is your chance to showcase your skills and push boundaries.",
      },
      {
        title: "Theme of the Hackathon",
        content:
          'This year, our hackathon focuses on “Tech for Good”—developing solutions for real-world challenges in healthcare, sustainability, education, and accessibility. Participants are encouraged to create projects that bring positive social impact through technology.',
      },
      {
        title: "What to Expect?",
        content: (
          <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
            <li>24-48 hours of non-stop coding, brainstorming, and innovation.</li>
            <li>Mentorship from industry experts and tech professionals.</li>
            <li>Exciting prizes and opportunities for the best projects.</li>
            <li>Networking with like-minded tech enthusiasts and industry leaders.</li>
            <li>Workshops, fun activities, and interactive sessions to boost creativity.</li>
          </ul>
        ),
      },
      {
        title: "Who Can Participate?",
        content:
          "This hackathon is open to students, developers, designers, and tech enthusiasts of all skill levels. Whether you’re a solo innovator or a team player, there’s a place for you here!",
      },
    ],
    callToAction: {
      title: "Get Ready to Hack!",
      content:
        "Gather your team, bring your best ideas, and prepare for an unforgettable coding experience! Register now and be part of SDIET Hackathon 2024, where innovation shapes the future. 🚀",
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full space-y-8 mb-10">
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
