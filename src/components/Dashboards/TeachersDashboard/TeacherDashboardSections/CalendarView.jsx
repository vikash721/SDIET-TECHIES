"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Calendar</h2>
        <div className="flex space-x-2">
          <button onClick={prevMonth} className="btn btn-sm btn-ghost">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextMonth} className="btn btn-sm btn-ghost">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <p className="text-center mb-4 text-lg font-semibold text-gray-600">
        {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
      </p>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className="text-center p-2"></div>
          ))}
        {days.map((day) => (
          <motion.div
            key={day}
            whileHover={{ scale: 1.1 }}
            className="text-center p-2 cursor-pointer hover:bg-indigo-50 rounded-full transition-colors duration-200"
          >
            {day}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

