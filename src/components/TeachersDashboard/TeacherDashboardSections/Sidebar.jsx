import { Home, Calendar, Bell, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-white shadow-lg"
    >
      
      <nav className="mt-6">
        <a href="#" className="flex items-center px-6 py-3 text-indigo-600 bg-indigo-100">
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
          <Calendar className="w-5 h-5 mr-3" />
          Events
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
          <Bell className="w-5 h-5 mr-3" />
          Notifications
        </a>
        <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </a>
      </nav>
    </motion.aside>
  )
}

