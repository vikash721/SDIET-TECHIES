import { motion } from "framer-motion"
import { Bell, AlertTriangle, Info } from "lucide-react"

export default function Announcements() {
  const announcements = [
    { id: 1, title: "New Event Guidelines", date: "2023-06-01", urgency: "normal" },
    { id: 2, title: "Summer Workshop Series", date: "2023-06-15", urgency: "high" },
    { id: 3, title: "System Maintenance", date: "2023-06-30", urgency: "low" },
  ]

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case "high":
        return <AlertTriangle className="w-5 h-5 text-red-500" />
      case "normal":
        return <Bell className="w-5 h-5 text-yellow-500" />
      case "low":
        return <Info className="w-5 h-5 text-blue-500" />
      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((announcement) => (
          <motion.li
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            {getUrgencyIcon(announcement.urgency)}
            <div>
              <p className="font-semibold text-gray-800">{announcement.title}</p>
              <p className="text-sm text-gray-600">{announcement.date}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

