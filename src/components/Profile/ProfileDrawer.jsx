import React from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const sections = [
  { id: "personal", label: "Personal Details" },
  { id: "events", label: "My Events" },
  { id: "security", label: "Security" },
  { id: "settings", label: "Settings" },
  { id: "community", label: "Community" },
  { id: "notifications", label: "Notifications" },
];

const ProfileDrawer = ({ showDrawer, setShowDrawer, activeSection, setActiveSection }) => {
  if (!showDrawer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden" onClick={() => setShowDrawer(false)}>
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        exit={{ x: -250 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-64 bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4" onClick={() => setShowDrawer(false)}>
          <FaTimes className="text-gray-700" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="flex flex-col space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setShowDrawer(false);
              }}
              className={`p-3 rounded-xl transition duration-300 cursor-pointer ${
                activeSection === section.id ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileDrawer;
