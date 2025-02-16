import { motion } from "framer-motion"
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react"

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    className={`bg-white rounded-lg shadow-md p-6 ${color}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-opacity-20 mr-4">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </motion.div>
)

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard icon={Users} title="Total Attendees" value="1,234" color="text-blue-600" />
      <StatCard icon={Calendar} title="Upcoming Events" value="12" color="text-green-600" />
      <StatCard icon={DollarSign} title="Revenue" value="$45,678" color="text-yellow-600" />
      <StatCard icon={TrendingUp} title="Growth" value="+15%" color="text-purple-600" />
    </div>
  )
}

export default DashboardOverview

