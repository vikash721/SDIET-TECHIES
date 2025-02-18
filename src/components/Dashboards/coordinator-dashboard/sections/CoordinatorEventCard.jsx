"use client";

import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaUserCircle, FaUsers } from "react-icons/fa";
import { MdOutlineAccessTime, MdArrowForward, MdCalendarToday } from "react-icons/md";

const roleStyles = {
  Tech: "bg-blue-100 text-blue-700 border border-blue-300",
  Cultural: "bg-pink-100 text-pink-700 border border-pink-300",
  Sports: "bg-green-100 text-green-700 border border-green-300",
  Business: "bg-amber-100 text-amber-700 border border-amber-300",
};

const CoordinatorEventCard = ({ event }) => {
  const navigate = useNavigate();
  const badgeStyles = roleStyles[event.badge] || roleStyles["Tech"];

  return (
    <div className="relative bg-white  transition-all duration-300 rounded-lg overflow-hidden border border-gray-200 flex flex-col sm:flex-row ">
      {/* Event Logo */}
      <div className="w-full sm:w-40 sm:min-w-[160px] h-48 sm:h-auto overflow-hidden relative ">
        <img
          src={event.logo || "/placeholder.svg"}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 "
        />
        {/* Badge (For Mobile) */}
        <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full sm:hidden ${badgeStyles}`}>
          {event.badge}
        </span>
      </div>

      {/* Event Content */}
      <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 relative">
        {/* Badge (For Large Screens) */}
        <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full hidden sm:block ${badgeStyles}`}>
          {event.badge}
        </span>

        {/* Event Title & Description */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{event.name}</h2>
          <p className="text-sm text-gray-600 mt-2">{event.description}</p>
        </div>

        {/* Event Meta Details (Stacked on Mobile) */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MdCalendarToday className="mr-2 text-gray-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MdOutlineAccessTime className="mr-2 text-gray-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-2 text-gray-500" />
            <span>{event.participants} Participants</span>
          </div>
        </div>

        {/* Organizer Info & Manage Button */}
        <div className="flex justify-between items-center mt-6 sm:mt-6">
          {/* Organizer Info (Left Aligned) */}
          <div className="flex items-center text-sm text-gray-700">
            {event.organizer?.profilePicture ? (
              <img
                src={event.organizer.profilePicture}
                alt="Organizer"
                className="w-7 h-7 rounded-full object-cover mr-2 border border-gray-300"
              />
            ) : (
              <FaUserCircle className="w-7 h-7 mr-2 text-gray-500" />
            )}
            <span className="font-medium">{event.organizer?.name || "Unknown"}</span>
          </div>

          {/* Manage Event Button (Right Aligned) */}
          <button
            className="btn btn-sm btn-primary px-5 py-2 flex items-center gap-2 hover:scale-101 transition-transform"
            onClick={() => navigate("/coordinator-event-dashboard")}
          >
            Manage Event
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorEventCard;
