import React from "react";
import { motion } from "framer-motion";
import EventDetails from "./sections/EventDetails";
import AttendeeManagement from "./sections/AttendeeManagement";
import Announcements from "./sections/Announcements";

const CoordinatorDashboardContent = ({ activeSection }) => {
  return (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-6xl bg-white rounded-2xl border border-gray-200 overflow-auto  "
    >
      {activeSection === "eventdetails" && <EventDetails />}
      {activeSection === "attendeemanagement" && <AttendeeManagement />}
      {activeSection === "announcements" && <Announcements />}
    </motion.div>
  );
};

export default CoordinatorDashboardContent;
