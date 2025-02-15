import React, { useState } from "react";
import { FaUsers, FaClipboardCheck, FaBullhorn, FaCalendarAlt, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const CoordinatorEventManage = () => {
  const [activeTab, setActiveTab] = useState("participants");

  const tabs = [
    { id: "participants", label: "Participants", icon: <FaUsers /> },
    { id: "approvals", label: "Approvals", icon: <FaClipboardCheck /> },
    { id: "announcements", label: "Announcements", icon: <FaBullhorn /> },
    { id: "schedule", label: "Schedule", icon: <FaCalendarAlt /> },
    { id: "resources", label: "Resources", icon: <FaFileAlt /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-xl rounded-r-2xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Coordinator Panel</h2>
        <nav className="space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200 font-medium text-gray-700 
              ${activeTab === tab.id ? "bg-primary text-white shadow-md" : "hover:bg-gray-200"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "participants" && <ParticipantsSection />}
          {activeTab === "approvals" && <ApprovalsSection />}
          {activeTab === "announcements" && <AnnouncementsSection />}
          {activeTab === "schedule" && <ScheduleSection />}
          {activeTab === "resources" && <ResourcesSection />}
        </motion.div>
      </main>
    </div>
  );
};

const ParticipantsSection = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Registered Participants</h2>
    {/* Display participants list */}
    <p className="text-gray-600">List of all registered participants...</p>
  </div>
);

const ApprovalsSection = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Approvals</h2>
    {/* Approve or reject participants */}
    <p className="text-gray-600">Approve participants who requested to join...</p>
  </div>
);

const AnnouncementsSection = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Announcements</h2>
    {/* Create or manage announcements */}
    <p className="text-gray-600">Send announcements to participants...</p>
  </div>
);

const ScheduleSection = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Manage Event Schedule</h2>
    {/* View or update event schedule */}
    <p className="text-gray-600">Modify the event schedule...</p>
  </div>
);

const ResourcesSection = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Resources</h2>
    {/* Provide resources for participants */}
    <p className="text-gray-600">Upload or share event-related resources...</p>
  </div>
);

export default CoordinatorEventManage;