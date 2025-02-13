import { motion } from "framer-motion"
import { CheckCircle, XCircle, Clock } from "lucide-react"

export default function PendingApprovals() {
  const pendingEvents = [
    { id: 1, name: "Science Symposium", date: "2023-07-10", status: "pending" },
    { id: 2, name: "Art Exhibition", date: "2023-07-15", status: "approved" },
    { id: 3, name: "Coding Workshop", date: "2023-07-20", status: "rejected" },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Pending Approvals</h2>
      <ul className="space-y-4">
        {pendingEvents.map((event) => (
          <motion.li
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center space-x-3">
              {getStatusIcon(event.status)}
              <div>
                <p className="font-semibold text-gray-800">{event.name}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
            </div>
            {event.status === "pending" && (
              <div className="flex space-x-2">
                <button className="btn btn-sm btn-success">
                  <CheckCircle className="w-4 h-4" />
                </button>
                <button className="btn btn-sm btn-error">
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

