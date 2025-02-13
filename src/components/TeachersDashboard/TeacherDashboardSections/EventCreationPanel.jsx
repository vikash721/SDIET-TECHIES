"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, ChevronRight, CheckCircle } from "lucide-react"

const steps = [
  { title: "Event Overview", fields: ["name", "description", "date", "time", "location"] },
  { title: "Event Details", fields: ["category", "maxParticipants", "registrationDeadline"] },
  { title: "Additional Info", fields: ["organizer", "contactEmail", "website"] },
]

export default function EventCreationPanel() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})

  const toggleForm = () => setIsFormOpen(!isFormOpen)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderFields = () => {
    const { fields } = steps[currentStep]
    return fields.map((field) => (
      <div key={field} className="mb-4">
        <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
          {field.charAt(0).toUpperCase() + field.slice(1)}
        </label>
        <input
          type="text"
          id={field}
          name={field}
          value={formData[field] || ""}
          onChange={handleInputChange}
          className="input input-bordered w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm rounded-lg p-2"
        />
      </div>
    ))
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Create New Event</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleForm}
          className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none flex items-center gap-2 px-4 py-2"
        >
          {isFormOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          {isFormOpen ? "Close" : "Create Event"}
        </motion.button>
      </div>
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mb-6">
              <div className="flex justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                        index < currentStep
                          ? "bg-green-500 text-white"
                          : index === currentStep
                          ? "bg-indigo-600 text-white"
                          : "bg-gray-300 text-gray-600"
                      }`}
                    >
                      {index < currentStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    {index < steps.length - 1 && <ChevronRight className="w-5 h-5 mx-2 text-gray-400" />}
                  </div>
                ))}
              </div>
            </div>
            {renderFields()}
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="btn btn-outline border-indigo-600 text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-lg"
                disabled={currentStep === 0}
              >
                Previous
              </button>
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={nextStep}
                  className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={toggleForm}
                  className="btn btn-primary bg-green-600 hover:bg-green-700 border-none px-4 py-2 rounded-lg"
                >
                  Create Event
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}