import React from "react";
import { FaClipboardList, FaUsers, FaBullhorn } from "react-icons/fa";

const coordinatorSections = [
  { id: "eventdetails", icon: <FaClipboardList />, label: "Event Details" },
  { id: "attendeemanagement", icon: <FaUsers />, label: "Attendees" },
  { id: "announcements", icon: <FaBullhorn />, label: "Announcements" },
];

const CoordinatorSidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="hidden md:block w-64 bg-white  rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Coordinator Panel</h2>
      <nav className="space-y-4">
        {coordinatorSections.map((section) => (
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

export default CoordinatorSidebar;
