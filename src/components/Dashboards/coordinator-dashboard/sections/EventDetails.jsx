import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventDetails = () => {
  const event = {
    title: "Tech Conference 2023",
    date: "August 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco Convention Center",
    attendees: 500,
  };

  return (
    <motion.div
      className="w-full bg-white rounded-xl p-8 md:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">{event.title}</h2>

      {/* Event Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center text-lg">
          <Calendar className="mr-3 text-blue-500" size={24} />
          <span className="text-gray-700">{event.date}</span>
        </div>
        <div className="flex items-center text-lg">
          <Clock className="mr-3 text-green-500" size={24} />
          <span className="text-gray-700">{event.time}</span>
        </div>
        <div className="flex items-center text-lg">
          <MapPin className="mr-3 text-red-500" size={24} />
          <span className="text-gray-700">{event.location}</span>
        </div>
        <div className="flex items-center text-lg">
          <Users className="mr-3 text-purple-500" size={24} />
          <span className="text-gray-700">{event.attendees} Attendees</span>
        </div>
      </div>

      {/* Edit Event Button */}
      <div className="mt-8">
        <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
          Edit Event
        </button>
      </div>
    </motion.div>
  );
};

export default EventDetails;
