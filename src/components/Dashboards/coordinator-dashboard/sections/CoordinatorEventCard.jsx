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
    <div className="relative bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-gray-200 flex flex-col sm:flex-row">
      {/* Event Logo (Full Height Left Side with Zoom Effect) */}
      <div className="w-full sm:w-40 sm:min-w-[160px] h-44 overflow-hidden relative">
        <img
          src={event.logo || "/placeholder.svg"}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Badge (Top Right for small devices) */}
        <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full sm:hidden ${badgeStyles}`}>
          {event.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between p-5 relative">
        {/* Badge (Top Right for larger devices) */}
        <span className={`absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full hidden sm:block ${badgeStyles}`}>
          {event.badge}
        </span>

        {/* Event Info */}
        <div>
          <h2 className="text-lg font-semibold">{event.name}</h2>
          <p className="text-sm text-gray-600 line-clamp-2 my-2">{event.description}</p>

          {/* Event Meta Info */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-gray-500">
            <div className="flex items-center">
              <MdCalendarToday className="mr-1 text-gray-600" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MdOutlineAccessTime className="mr-1 text-gray-600" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1 text-gray-600" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="mr-1 text-gray-600" />
              <span>{event.participants} Participants</span>
            </div>
          </div>
        </div>

        {/* Organizer Info & Button */}
        <div className="flex justify-between items-center mt-4 gap-3 sm:gap-0">
          {/* Organizer Info */}
          <div className="flex items-center text-sm text-gray-700">
            {event.organizer?.profilePicture ? (
              <img
                src={event.organizer.profilePicture || "/placeholder.svg"}
                alt="Organizer"
                className="w-8 h-8 rounded-full object-cover mr-2 border border-gray-300"
              />
            ) : (
              <FaUserCircle className="w-8 h-8 mr-2 text-gray-600" />
            )}
            <span className="truncate">{event.organizer?.name || "Unknown"}</span>
          </div>

          {/* Manage Button */}
          <button
            className="btn btn-sm btn-primary normal-case px-4 py-2 flex items-center gap-2 hover:scale-105 transition-transform ml-auto"
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