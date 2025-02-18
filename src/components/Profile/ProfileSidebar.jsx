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
    <aside className="hidden md:block w-64 bg-white  rounded-2xl p-6 border border-gray-200 ">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Profile</h2>
      <nav className="space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium text-gray-700 
            ${activeSection === section.id ? "bg-indigo-600 text-white shadow-md" : "hover:bg-gray-200"}`}
          >
            {section.icon}
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
