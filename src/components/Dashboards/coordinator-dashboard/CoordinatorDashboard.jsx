"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sun, Moon, Menu, X, Calendar, MapPin, Bell, LogOut, Home, Settings } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const dummyUser = {
  name: "John Doe",
  role: "Coordinator",
}

const dummyEvents = [
  {
    id: 1,
    name: "Tech Fest 2025",
    date: "March 15, 2025",
    time: "10:00 AM",
    location: "SDIET Auditorium",
    participants: 150,
    badge: "Ongoing",
    logo: "https://via.placeholder.com/150",
  },
]

const CoordinatorDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={`min-h-screen bg-base-100 text-base-content ${isDarkMode ? "dark" : ""}`}>
      <header className="navbar bg-base-200 shadow-lg">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">SDIETTechies</button>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn btn-square btn-ghost md:hidden" onClick={toggleSidebar}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div className="flex">
        <motion.aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-base-200 shadow-xl md:relative md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          initial={false}
          animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        >
          <div className="p-4">
            <button className="btn btn-square btn-ghost md:hidden float-right" onClick={toggleSidebar}>
              <X size={20} />
            </button>
            <ul className="menu p-4 overflow-y-auto w-full">
              <li>
                <a className="flex items-center gap-2">
                  <Home size={18} /> CoordinatorDashboard
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  <Calendar size={18} /> My Events
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  <Bell size={18} /> Announcements
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  <Settings size={18} /> Settings
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2">
                  <LogOut size={18} /> Logout
                </a>
              </li>
            </ul>
          </div>
        </motion.aside>

        <main className="flex-1 p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-4">My Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-base-200 rounded-box p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Welcome, {dummyUser.name}!</h2>
                <p className="text-sm opacity-70 mb-4">Role: {dummyUser.role}</p>
                <div className="stats stats-vertical shadow">
                  <div className="stat">
                    <div className="stat-title">Total Events</div>
                    <div className="stat-value">{dummyEvents.length}</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Upcoming Events</div>
                    <div className="stat-value">1</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Active Participants</div>
                    <div className="stat-value">{dummyEvents[0]?.participants || 0}</div>
                  </div>
                </div>
              </div>
              <div className="bg-base-200 rounded-box p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Event Participation</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={dummyEvents}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="participants" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card-body">
        <img src={event.logo} alt="Event Logo" className="w-full h-32 object-cover rounded-md mb-2" />
        <h3 className="card-title">{event.name}</h3>
        <p className="text-sm opacity-70">
          <Calendar size={16} className="inline mr-1" />
          {event.date} at {event.time}
        </p>
        <p className="text-sm opacity-70">
          <MapPin size={16} className="inline mr-1" />
          <a href={`https://maps.google.com/?q=${event.location}`} target="_blank" rel="noopener noreferrer" className="link link-hover">
            {event.location}
          </a>
        </p>
        <button className="btn btn-sm btn-primary">Manage Event</button>
      </div>
    </motion.div>
  )
}

export default CoordinatorDashboard;
