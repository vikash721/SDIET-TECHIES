import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuthStore from "../store/useAuthStore";

const NavbarOnLogin = () => {
  const { logout } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Hamburger menu state
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Ref for hamburger button

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target) // Don't close if clicking on the hamburger button
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="text-black shadow-md w-screen bg-white">
      <div className="navbar container mx-auto px-4 lg:px-10 py-4 flex justify-between items-center relative">
        {/* Left - Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          SDIETTechies
        </Link>

        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex gap-8 mx-auto font-semibold">
          {["Home", "Events", "Community", "Gallery"].map((name) => (
            <Link
              key={name}
              to={`/${name.toLowerCase()}`}
              className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* ✅ Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            ref={buttonRef} // Attach ref to button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* ✅ Mobile Menu Content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-white shadow-md rounded-lg p-4 z-50 flex flex-col space-y-4 md:hidden"
            >
              {/* Navigation Links */}
              {["Home", "Events", "Community", "Gallery"].map((name) => (
                <Link
                  key={name}
                  to={`/${name.toLowerCase()}`}
                  className="text-lg font-semibold hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)} // ✅ Close menu on link click
                >
                  {name}
                </Link>
              ))}

              {/* ✅ Divider */}
              <div className="border-t border-gray-300 my-2"></div>

              {/* ✅ Profile Option */}
              <button
                onClick={() => {
                  navigate("/profile");
                  setIsMenuOpen(false);
                }}
                className="text-lg font-semibold hover:text-gray-600 py-2"
              >
                Profile
              </button>

              {/* ✅ Settings Option */}
              <button onClick={() => navigate("/settings")} className="text-lg font-semibold hover:text-gray-600 py-2">
                Report Bugs
              </button>

              {/* ✅ Logout Option */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-lg font-semibold text-red-600 hover:text-red-800 py-2"
              >
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Profile Dropdown (Hidden on Mobile) */}
        <div
          className="relative profile-dropdown hidden md:block" // ✅ Hides profile icon on mobile
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <button className="btn btn-ghost btn-circle avatar">
            <div className="w-10 h-10 rounded-full hover:scale-105 transition-transform duration-300">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </button>

          <AnimatePresence>
            {isProfileOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 bg-white text-black rounded-lg shadow-xl w-44 p-2 border border-gray-200 overflow-hidden z-50"
              >
                <li>
                  <button
                    onClick={() => navigate("/profile")}
                    className="block w-full px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition cursor-pointer"
                  >
                    Profile
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/settings")}
                    className="block w-full px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition cursor-pointer"
                  >
                    Settings
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full px-4 py-2 text-sm text-red-600 rounded-md hover:bg-red-100 transition cursor-pointer"
                  >
                    Logout
                  </button>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Logout Confirmation Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="font-bold text-lg">Confirm Logout</h3>
                <p className="py-4 text-gray-600">Are you sure you want to log out?</p>
                <div className="flex justify-end gap-4">
                  <button onClick={handleLogout} className="btn bg-red-500 text-white hover:bg-red-600">
                    Logout
                  </button>
                  <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost">
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavbarOnLogin;
