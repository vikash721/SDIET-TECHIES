import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-[1.03] transition-transform duration-300 ease-in-out flex flex-col">
      {/* Event Image */}
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={event.banner}
        alt={event.name}
        loading="lazy"
      />

      <div className="px-6 py-4 flex flex-col flex-grow">
        {/* Event Name */}
        <h2 className="text-2xl font-semibold text-[#291e00] mb-2">{event.name}</h2>

        {/* Event Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="text-sm text-gray-500 mt-auto space-y-2">
          <div className="flex items-center gap-2">
            <MdOutlineAccessTime size={20} className="text-gray-600" />
            <p className="font-medium">{event.time}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={18} className="text-gray-600" />
            <p className="font-medium">{event.location}</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 py-4 flex justify-between items-center bg-gray-100 rounded-b-lg">
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out">
          Join
        </button>
        <button className="border border-black text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
