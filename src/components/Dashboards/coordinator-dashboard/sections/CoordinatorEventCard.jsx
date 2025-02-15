"use client"
import { FaMapMarkerAlt, FaUserCircle, FaUsers } from "react-icons/fa"
import { MdOutlineAccessTime, MdArrowForward, MdCalendarToday } from "react-icons/md"

const roleStyles = {
  Tech: "bg-blue-100 text-blue-800",
  Cultural: "bg-pink-100 text-pink-800",
  Sports: "bg-green-100 text-green-800",
  Business: "bg-amber-100 text-amber-800",
}

const events = [
  {
    id: 1,
    name: "Tech Innovation Fest",
    description: "A grand festival of technology and innovation.",
    date: "March 15, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "SDIET Auditorium",
    badge: "Tech",
    participants: 120,
    logo: "https://images.pexels.com/photos/10538542/pexels-photo-10538542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    organizer: { name: "John Doe", profilePicture: "" },
  },
  {
    id: 2,
    name: "Cultural Night",
    description: "An evening of cultural performances and fun.",
    date: "March 20, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "SDIET Open Grounds",
    badge: "Cultural",
    participants: 80,
    logo: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    organizer: { name: "Alice Smith", profilePicture: "" },
  },
]

const CoordinatorEventBar = ({ event }) => {
  const badgeStyles = roleStyles[event.badge] || roleStyles["Tech"]

  return (
    <div className="flex items-center bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden">
      <img src={event.logo || "/placeholder.svg"} alt={event.name} className="h-20 w-20 object-cover" />
      <div className="flex-1 flex items-center justify-between p-4">
        <div className="flex-1 min-w-0 mr-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-lg font-semibold truncate">{event.name}</h2>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${badgeStyles}`}>{event.badge}</span>
          </div>
          <p className="text-sm text-gray-600 truncate mb-2">{event.description}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
            <div className="flex items-center">
              <MdCalendarToday className="mr-1" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MdOutlineAccessTime className="mr-1" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center">
              <FaUsers className="mr-1" />
              <span>{event.participants} Participants</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center text-sm text-gray-600">
            {event.organizer?.profilePicture ? (
              <img
                src={event.organizer.profilePicture || "/placeholder.svg"}
                alt="Organizer"
                className="w-6 h-6 rounded-full object-cover mr-2"
              />
            ) : (
              <FaUserCircle className="w-6 h-6 mr-2" />
            )}
            <span className="truncate">{event.organizer?.name || "Unknown"}</span>
          </div>
          <button className="btn btn-sm btn-primary normal-case">
            Manage
            <MdArrowForward className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

const CoordinatorEventList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="space-y-4">
        {events.map((event) => (
          <CoordinatorEventBar key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default CoordinatorEventList

