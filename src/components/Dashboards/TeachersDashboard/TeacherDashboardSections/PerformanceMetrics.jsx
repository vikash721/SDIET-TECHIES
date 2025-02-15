import { motion } from "framer-motion"
import { Calendar, Users, BarChart2 } from "lucide-react"

export default function PerformanceMetrics() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
      <div className="space-y-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-4 bg-blue-100 rounded-lg"
        >
          <Calendar className="w-8 h-8 text-blue-500 mr-4" />
          <div>
            <p className="text-sm text-blue-600">Total Events</p>
            <p className="text-2xl font-bold text-blue-800">24</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-4 bg-green-100 rounded-lg"
        >
          <Users className="w-8 h-8 text-green-500 mr-4" />
          <div>
            <p className="text-sm text-green-600">Total Participants</p>
            <p className="text-2xl font-bold text-green-800">1,234</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center p-4 bg-purple-100 rounded-lg"
        >
          <BarChart2 className="w-8 h-8 text-purple-500 mr-4" />
          <div>
            <p className="text-sm text-purple-600">Engagement Rate</p>
            <p className="text-2xl font-bold text-purple-800">87%</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
