import React from "react";
import { FaUser, FaLock, FaCog, FaCalendarAlt, FaUsers, FaBell } from "react-icons/fa";

const sections = [
  { id: "personal", icon: <FaUser />, label: "Personal Details" },
  { id: "events", icon: <FaCalendarAlt />, label: "My Events" },
  { id: "security", icon: <FaLock />, label: "Security" },
  { id: "settings", icon: <FaCog />, label: "Settings" },
  { id: "community", icon: <FaUsers />, label: "Community" },
  { id: "notifications", icon: <FaBell />, label: "Notifications" },
];

const ProfileSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="hidden md:block md:w-1/4 bg-white p-6 ">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center space-x-3 p-3 rounded-xl transition duration-300 cursor-pointer ${
              activeSection === section.id ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span>{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
