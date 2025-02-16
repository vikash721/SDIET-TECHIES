import React from "react";
import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { formatDistanceToNow, parseISO } from "date-fns";
import { useParams } from "react-router-dom";
import useEventStore from '../../../store/useEventStore'; // Adjust the import path as needed

const urgencyStyles = {
  "high": "border-red-600 bg-red-50 text-red-800",
  "normal": "border-blue-500 bg-blue-50 text-blue-800",
};

// Format time dynamically
const formatTime = (date) => {
  const parsedDate = parseISO(date);
  const timeDiff = formatDistanceToNow(parsedDate, { addSuffix: true });
  return timeDiff;
};

const Announcements = () => {
  const { eventId } = useParams();
  const event = useEventStore((state) => 
    state.events.find((event) => event.id.toString() === eventId)
  );

  if (!event) return <div>No event data available</div>;

  const { announcements } = event;

  return (
    <div className="w-full p-6 bg-white shadow-xl rounded-2xl border border-gray-200 mb-5">
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
              <FaClock /> {formatTime(announcement.date)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;