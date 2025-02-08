import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { MdOutlineAccessTime, MdArrowForward, MdCalendarToday } from "react-icons/md";

// Mapping categories to styles
const roleStyles = {
  Tech: "bg-orange-200 text-orange-900 border border-orange-300",
  Cultural: "bg-pink-200 text-pink-900 border border-pink-300",
  Sports: "bg-green-200 text-green-900 border border-green-300",
  Business: "bg-blue-200 text-blue-900 border border-blue-300",
  Music: "bg-purple-200 text-purple-900 border border-purple-300",
  Dance: "bg-yellow-200 text-yellow-900 border border-yellow-300",
  Debate: "bg-red-200 text-red-900 border border-red-300",
  Hackathon: "bg-indigo-200 text-indigo-900 border border-indigo-300",
  Gaming: "bg-teal-200 text-teal-900 border border-teal-300",
  Quiz: "bg-gray-200 text-gray-900 border border-gray-300",
  Workshop: "bg-cyan-200 text-cyan-900 border border-cyan-300",
  Seminar: "bg-lime-200 text-lime-900 border border-lime-300",
  Startup: "bg-fuchsia-200 text-fuchsia-900 border border-fuchsia-300",
  Art: "bg-rose-200 text-rose-900 border border-rose-300",
  Photography: "bg-amber-200 text-amber-900 border border-amber-300",
};

const EventCard = ({ event, theme = "light" }) => {
  // Get the styles for the category, defaulting to 'Tech' if no category is provided
  const badgeStyles = roleStyles[event.badge] || roleStyles["Tech"];

  return (
    <div
      className={`card w-full max-w-sm shadow-lg hover:shadow-xl transition-all duration-300 
      ${theme === "dark" ? "bg-[#1e1e1e] text-white" : "bg-white text-black"} 
      rounded-xl overflow-hidden`}
    >
      <figure className="relative w-full pt-[56.25%]">
        {" "}
        {/* 16:9 aspect ratio */}
        <img
          src={event.banner || "/placeholder.svg"}
          alt={event.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="absolute top-2 right-2">
          <div className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${badgeStyles}`}>
            {event.badge || "Tech"}
          </div>
        </div>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold line-clamp-1">{event.name}</h2>
        <p className="text-sm opacity-80 line-clamp-2 mb-3">{event.description}</p>
        <div className="flex flex-col space-y-2 text-sm opacity-80 mb-4">

          <div className="flex items-center gap-2">
            <MdCalendarToday className="text-gray-500 flex-shrink-0" />
            <span className="truncate">{event.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineAccessTime className="text-gray-500 flex-shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500 flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            {event.organizer?.profilePicture ? (
              <img
                src={event.organizer.profilePicture}
                alt="Organizer Profile"
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
            ) : (
              <FaUserCircle className="text-gray-500 text-xl flex-shrink-0" />
            )}
            <span className="text-sm font-medium truncate">
              {event.organizer?.name || "Unknown Organizer"}
            </span>
          </div>

          <button className={`btn btn-sm gap-2 bg-black`}>
            View Details
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
