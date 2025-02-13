import { Home, Calendar, Bell, Settings, Users, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "dashboard", icon: <Home className="w-5 h-5" />, label: "Dashboard" },
  { id: "events", icon: <Calendar className="w-5 h-5" />, label: "Events" },
  { id: "community", icon: <Users className="w-5 h-5" />, label: "Community" },
  { id: "notifications", icon: <Bell className="w-5 h-5" />, label: "Notifications" },
  { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex">
      {/* Sidebar - Visible on Large Screens */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: isOpen || isLargeScreen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white shadow-lg fixed top-0 left-0 h-full lg:static lg:translate-x-0 z-40"
      >
        <nav className="mt-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setIsOpen(false); // Close menu on mobile
              }}
              className={`flex items-center w-full px-6 py-3 text-sm font-semibold transition-all duration-200 border-b-2 
                ${
                  activeSection === section.id
                    ? "text-indigo-600 border-indigo-600 bg-indigo-100"
                    : "text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-300"
                }`}
            >
              {section.icon}
              <span className="ml-3">{section.label}</span>
            </button>
          ))}
        </nav>
      </motion.aside>

      {/* Mobile Navigation Drawer Button */}
      {!isLargeScreen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-2 rounded-md shadow-md"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}

      {/* Overlay for Mobile Sidebar */}
      {isOpen && !isLargeScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Bottom Navigation */}
      {!isLargeScreen && (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-3 border-t">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex flex-col items-center text-gray-600 hover:text-black transition-all ${
                activeSection === section.id ? "text-indigo-600" : ""
              }`}
            >
              {section.icon}
              <span className="text-xs">{section.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
