import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit2, LogOut, Mail, Phone, School, BookOpen, Building2 } from "lucide-react";
import { FaUser, FaLock, FaCog, FaCalendarAlt, FaUsers, FaBell, FaSearch } from "react-icons/fa";
import CenteredContainer from "../components/CenteredContainer";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const sections = [
    { id: "personal", icon: <FaUser />, label: "Personal Details" },
    { id: "security", icon: <FaLock />, label: "Security" },
    { id: "settings", icon: <FaCog />, label: "Settings" },
    { id: "events", icon: <FaCalendarAlt />, label: "My Events" },
    { id: "community", icon: <FaUsers />, label: "Community" },
    { id: "notifications", icon: <FaBell />, label: "Notifications" },
  ];

  return (
    <CenteredContainer>
      <div className="flex flex-col md:flex-row h-screen w-full p-4 ">
        {/* Mobile view toggle button */}
        <button
          className="md:hidden p-3 bg-gray-200 rounded-lg mb-4"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FaSearch className="text-gray-700" />
        </button>

        {/* Sidebar Navigation */}
        <div
          className={`md:w-1/4 bg-white p-6 ${showMobileMenu ? "block" : "hidden md:block"} md:mb-0 mb-4`}
        >
          <h2 className="text-xl font-semibold mb-4">Profile</h2>
          <div className="flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-3 p-3 rounded-xl transition duration-300 cursor-pointer ${
                  activeSection === section.id
                    ? "bg-black text-white"
                    : "bg-gray-200"
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="md:w-3/4 w-full bg-white rounded-2xl p-6 ml-6 "
        >
          {activeSection === "personal" && <PersonalDetails />}
          {activeSection === "security" && <Security />}
          {activeSection === "settings" && <Settings />}
          {activeSection === "events" && <MyEvents />}
          {activeSection === "community" && <Community />}
          {activeSection === "notifications" && <Notifications />}
        </motion.div>
      </div>
    </CenteredContainer>
  );
};

// Personal Details Section with Modern UI
const PersonalDetails = () => (
  <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl">
    <h1 className="text-3xl font-semibold text-gray-900 mb-8">Personal Details</h1>

    {/* Profile Section */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
      <div className="w-24 h-24 rounded-full overflow-hidden shadow-md">
        <img
          src="https://thumb.photo-ac.com/99/9902abe28d320af63b6e96b3a93496c7_t.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">Robot.com</h3>
        <p className="text-gray-500 flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          johndoe@example.com
        </p>
      </div>
    </div>

    {/* Separator */}
    <div className="border-t border-gray-300 my-6"></div>

    {/* Info Items */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InfoItem icon={Phone} label="Phone Number" value="+91 9876543210" />
      <InfoItem icon={School} label="College Roll No" value="CSE-23/127" />
      <InfoItem icon={BookOpen} label="Study Year" value="2nd Year" />
      <InfoItem icon={School} label="Course" value="B.Tech Computer Science" />
      <InfoItem icon={Building2} label="Department" value="Engineering" />
    </div>

    {/* Actions */}
    <div className="flex justify-end space-x-4 mt-8">
      <button className="bg-transparent border border-gray-500 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100 flex items-center">
        <Edit2 className="w-4 h-4 mr-2" />
        Edit Profile
      </button>
      <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 flex items-center">
        <LogOut className="w-4 h-4 mr-2" />
        Log Out
      </button>
    </div>
  </div>
);

// InfoItem component for displaying each piece of info
const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="space-y-2">
    <p className="text-sm text-gray-600 flex items-center">
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </p>
    <p className="text-lg font-medium text-gray-800">{value}</p>
  </div>
);

const Security = () => (
  <div className="p-6 bg-white rounded-xl ">
    <h2 className="text-xl font-semibold mb-4">Security</h2>
    <p className="text-gray-600">Manage your password, two-factor authentication, and other security settings.</p>
  </div>
);

const Settings = () => (
  <div className="p-6 bg-white rounded-xl ">
    <h2 className="text-xl font-semibold mb-4">Settings</h2>
    <p className="text-gray-600">Customize your notification preferences, theme, and other user settings.</p>
  </div>
);

const MyEvents = () => {
  const events = [
    { id: 1, title: "Tech Symposium 2023", date: "15 Oct 2023", location: "Main Auditorium", status: "Registered" },
    { id: 2, title: "Career Fair", date: "22 Nov 2023", location: "Sports Complex", status: "Ongoing" },
    { id: 3, title: "Alumni Meet", date: "5 Dec 2023", location: "Conference Hall", status: "Upcoming" },
  ];

  return (
    <div className="p-6 bg-white rounded-xl ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Events</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-50 p-4 rounded-xl flex items-center justify-between shadow-md">
            <div>
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              event.status === 'Registered' ? 'bg-green-100 text-green-800' :
              event.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {event.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Community = () => (
  <div className="p-6 bg-white rounded-xl shadow-md">
    <h2 className="text-xl font-semibold mb-4">Community</h2>
    <p className="text-gray-600">Interact with fellow students and faculty on the community platform.</p>
  </div>
);

const Notifications = () => (
  <div className="p-6  rounded-xl">
    <h2 className="text-xl font-semibold mb-4">Notifications</h2>
    <div className="space-y-4">
      <div className="p-4 bg-gray-100 rounded-xl shadow-md">
        <p className="font-semibold">New Event: Tech Symposium</p>
        <p className="text-gray-600">You have been registered for the Tech Symposium on 15th Oct 2023.</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-xl shadow-md">
        <p className="font-semibold">Event Reminder: Career Fair</p>
        <p className="text-gray-600">The Career Fair is coming up on 22nd Nov 2023. Don't forget to participate!</p>
      </div>
    </div>
  </div>
);

export default Profile;
