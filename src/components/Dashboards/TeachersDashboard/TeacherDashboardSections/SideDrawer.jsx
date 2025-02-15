import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const sections = [
  { id: "personal", label: "Personal Details" },
  { id: "events", label: "My Events" },
  { id: "security", label: "Security" },
  { id: "settings", label: "Settings" },
  { id: "community", label: "Community" },
  { id: "notifications", label: "Notifications" },
];

const SidebarDrawer = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-base-100 border border-gray-200 rounded-lg overflow-hidden mb-3">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden py-1 md:shadow-lg ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost w-full flex justify-between items-center"
          >
            <span className="font-medium text-primary">Navigation Menu</span>
            <HiMenuAlt3 className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? "block" : "hidden md:block"}`}>
          <ul className="flex flex-col md:flex-row -mb-px">
            {sections.map((section) => (
              <li key={section.id} className="md:mr-1">
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMenuOpen(false); // Close menu on selection (for mobile)
                  }}
                  className={`cursor-pointer w-full md:w-auto px-6 py-4 text-sm font-semibold transition-all duration-200 ease-in-out border-b-2 hover:text-primary
                    ${
                      activeSection === section.id
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:border-primary/50"
                    }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarDrawer;
