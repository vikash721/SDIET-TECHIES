import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md"; // Correct import

const EventCard = ({ event }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
      {/* Event Image */}
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={event.image}
        alt={event.name}
      />

      <div className="px-6 py-4 flex flex-col flex-grow">
        {/* Event Name */}
        <div className="text-2xl font-semibold text-[#291e00] mb-2">
          {event.name}
        </div>

        {/* Event Description (Truncated) */}
        <p className="text-sm text-gray-600 mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
          {event.description}
        </p>

        {/* Event Timing and Location */}
        <div className="text-sm text-gray-500 mt-auto space-y-1">
          <div className="flex items-center gap-2">
            <MdOutlineAccessTime size={20} className="text-grey" />
            <p className="font-semibold">{event.time}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-grey" size={18} />
            <p className="font-semibold">{event.location}</p>
          </div>
        </div>
      </div>

      {/* Buttons (Always at Bottom) */}
      <div className="px-6 py-4 flex justify-between items-center bg-[#f9f9f9] rounded-b-lg">
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
          Join
        </button>
        <button className="border border-black text-black py-2 px-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
