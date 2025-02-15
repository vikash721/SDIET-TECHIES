import { motion } from "framer-motion"
import { Edit, Trash2, Copy, Calendar, Users, MapPin } from "lucide-react"

export default function EventList({ title, status }) {
  const events = [
    { id: 1, name: "Science Fair", date: "2023-06-15", participants: 150, location: "Main Hall", status: "Upcoming" },
    { id: 2, name: "Math Olympiad", date: "2023-07-01", participants: 200, location: "Auditorium", status: "Ongoing" },
    { id: 3, name: "Literature Festival", date: "2023-05-20", participants: 180, location: "Library", status: "Completed" },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col md:flex-row justify-between items-start"
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
              <h3 className="text-lg font-semibold text-gray-800">{event.name}</h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2 md:mt-0">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {event.date}
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {event.participants} participants
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  event.status === "Upcoming"
                    ? "bg-blue-100 text-blue-800"
                    : event.status === "Ongoing"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {event.status}
              </span>
              <button className="btn btn-sm btn-outline btn-circle">
                <Edit className="w-4 h-4" />
              </button>
              <button className="btn btn-sm btn-outline btn-circle">
                <Trash2 className="w-4 h-4" />
              </button>
              <button className="btn btn-sm btn-outline btn-circle">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
