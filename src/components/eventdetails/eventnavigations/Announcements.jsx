import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatDistanceToNow, parseISO } from "date-fns";

const announcements = [
  {
    title: "Hackathon Registration Closing Soon!",
    date: "2025-02-08T14:30:00Z",
    description: "Make sure to complete your registration before the deadline. Late entries will not be accepted!",
    urgency: "very-urgent",
  },
  {
    title: "New Resource Pack Available",
    date: "2025-01-10T10:00:00Z",
    description: "We have uploaded a new set of guidelines and resources to help participants. Check them out!",
    urgency: "normal",
  },
  {
    title: "Live Q&A Session Scheduled",
    date: "2025-02-08T16:00:00Z",
    description: "Join us for a live Q&A session to clear your doubts and get expert guidance.",
    urgency: "urgent",
  },
  {
    title: "Congratulations to the Winners!",
    date: "2025-02-15T12:00:00Z",
    description: "A big shoutout to all the winners of the hackathon! Check out the full list here.",
    urgency: "good-news",
  },
];

const urgencyStyles = {
  "very-urgent": "border-red-600 bg-red-50 text-red-800",
  urgent: "border-orange-500 bg-orange-50 text-orange-800",
  normal: "border-blue-500 bg-blue-50 text-blue-800",
  "good-news": "border-green-500 bg-green-50 text-green-800",
};

// Format time dynamically
const formatTime = (date) => {
  const parsedDate = parseISO(date);
  const timeDiff = formatDistanceToNow(parsedDate, { addSuffix: true });
  return timeDiff;
};

const Announcements = () => {
  return (
    <div className="w-full p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-left">Latest Announcements</h2>
      
      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all border-l-8 ${urgencyStyles[announcement.urgency]}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold">{announcement.title}</h3>
            </div>
            <p className="text-sm">{announcement.description}</p>
            <p className="text-xs mt-2 font-medium flex items-center gap-2">
              <FaClock  /> {formatTime(announcement.date)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
