"use client"

import { motion } from "framer-motion"
import { User, Mail, Globe } from "lucide-react"

interface AdditionalInfoProps {
  formData: any
  onChange: (field: string, value: string) => void
}

export default function AdditionalInfo({ formData, onChange }: AdditionalInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-2xl font-semibold text-indigo-800 mb-6">Additional Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Organizer</span>
          </label>
          <div className="relative">
            <User className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <input
              type="text"
              placeholder="Enter organizer name"
              className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.organizer || ""}
              onChange={(e) => onChange("organizer", e.target.value)}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-indigo-700">Contact Email</span>
          </label>
          <div className="relative">
            <Mail className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
            <input
              type="email"
              placeholder="Enter contact email"
              className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.contactEmail || ""}
              onChange={(e) => onChange("contactEmail", e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-control mt-6">
        <label className="label">
          <span className="label-text text-indigo-700">Event Website</span>
        </label>
        <div className="relative">
          <Globe className="absolute top-3 left-3 w-5 h-5 text-indigo-500" />
          <input
            type="url"
            placeholder="Enter event website URL"
            className="input input-bordered w-full pl-10 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.website || ""}
            onChange={(e) => onChange("website", e.target.value)}
          />
        </div>
      </div>
    </motion.div>
  )
}

