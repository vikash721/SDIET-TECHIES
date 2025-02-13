"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock } from "lucide-react"

interface EventOverviewProps {
  formData: any
  onChange: (field: string, value: string) => void
}

export default function EventOverview({ formData, onChange }: EventOverviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-indigo-800 mb-6">Event Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Event Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter event name"
            className="input input-bordered w-full border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Event Date</span>
          </label>
          <div className="relative">
            <Calendar className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <input
              type="date"
              className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.date || ""}
              onChange={(e) => onChange("date", e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Event Time</span>
          </label>
          <div className="relative">
            <Clock className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <input
              type="time"
              className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.time || ""}
              onChange={(e) => onChange("time", e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Location</span>
          </label>
          <div className="relative">
            <MapPin className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <input
              type="text"
              placeholder="Enter event location"
              className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.location || ""}
              onChange={(e) => onChange("location", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-control mt-6">
        <label className="label">
          <span className="label-text text-indigo-700">Event Description</span>
        </label>
        <textarea
          placeholder="Enter event description"
          className="textarea textarea-bordered h-24 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.description || ""}
          onChange={(e) => onChange("description", e.target.value)}
        ></textarea>
      </div>
    </motion.div>
  )
}

