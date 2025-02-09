import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const scheduleData = {
  title: "Event Schedule",
  eventDate: new Date(2025, 2, 15),
  eventTime: "10:00 AM - 5:00 PM",
  location: {
    name: "SDIET Auditorium",
    url: "https://www.google.com/maps?q=SDIET+Auditorium"
  },
  timeline: [
    {
      title: "Opening Ceremony",
      time: "10:00 AM - 10:30 AM"
    },
    {
      title: "Hackathon Begins",
      time: "10:30 AM - 3:00 PM"
    },
    {
      title: "Lunch Break",
      time: "1:00 PM - 2:00 PM"
    },
    {
      title: "Final Presentation",
      time: "3:30 PM - 5:00 PM"
    }
  ]
};

const Schedule = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="w-full p-6 bg-white shadow-md rounded-xl">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2">{scheduleData.title}</h2>

      {/* Date, Time, Location */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
        {/* Date with Hover Calendar */}
        <div
          className="relative flex items-center gap-2 text-gray-800 bg-gray-50 px-4 py-2 rounded-md shadow-sm hover:shadow transition cursor-pointer"
          onMouseEnter={() => setShowCalendar(true)}
          onMouseLeave={() => setShowCalendar(false)}
        >
          <FaCalendarAlt className="text-blue-600" />
          <span className="font-medium">{scheduleData.eventDate.toDateString()}</span>
          {showCalendar && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-12 left-0 bg-white shadow-lg rounded-md p-3 z-10 border border-gray-300"
            >
              <Calendar value={scheduleData.eventDate} className="react-calendar" />
            </motion.div>
          )}
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 text-gray-800 bg-gray-50 px-4 py-2 rounded-md shadow-sm hover:shadow transition">
          <FaClock className="text-green-600" />
          <span className="font-medium">{scheduleData.eventTime}</span>
        </div>

        {/* Location with Tooltip & Clickable Link */}
        <div
          className="relative flex items-center gap-2 text-gray-800 bg-gray-50 px-4 py-2 rounded-md shadow-sm hover:shadow transition cursor-pointer"
          onClick={() => window.open(scheduleData.location.url, "_blank")}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <FaMapMarkerAlt className="text-red-600" />
          <span className="font-medium">{scheduleData.location.name}</span>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute top-10 left-0 bg-gray-800 text-white text-sm rounded-md px-3 py-1 z-10"
            >
              Click to open in Maps
            </motion.div>
          )}
        </div>
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        <div className="text-lg text-gray-900 font-semibold pb-2">Detailed Timeline</div>
        {scheduleData.timeline.map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
