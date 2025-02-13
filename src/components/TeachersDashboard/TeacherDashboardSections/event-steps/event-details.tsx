"use client"

import { motion } from "framer-motion"
import { Users, Tag, Calendar } from "lucide-react"

interface EventDetailsProps {
  formData: any
  onChange: (field: string, value: string) => void
}

export default function EventDetails({ formData, onChange }: EventDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-indigo-800 mb-6">Event Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Event Category</span>
          </label>
          <div className="relative">
            <Tag className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <select
              className="select select-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.category || ""}
              onChange={(e) => onChange("category", e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="seminar">Seminar</option>
              <option value="networking">Networking</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Maximum Participants</span>
          </label>
          <div className="relative">
            <Users className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <input
              type="number"
              placeholder="Enter max participants"
              className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.maxParticipants || ""}
              onChange={(e) => onChange("maxParticipants", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-control mt-6">
        <label className="label">
          <span className="label-text text-indigo-700">Registration Deadline</span>
        </label>
        <div className="relative">
          <Calendar className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
          <input
            type="date"
            className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.registrationDeadline || ""}
            onChange={(e) => onChange("registrationDeadline", e.target.value)}
          />
        </div>
      </div>
    </motion.div>
  )
}

