import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuthStore from "../store/useAuthStore";

const NavbarOnLogin = () => {
  const { logout } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown") && isProfileOpen) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isProfileOpen]);

  const handleLogout = () => {
    logout();
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="text-black shadow-md w-screen">
        <div className="navbar container mx-auto px-4 lg:px-10 py-4 flex justify-between items-center">
          {/* Left Side - Brand Name */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold tracking-wide">SDIETTechies</Link>
          </div>

          {/* Center - Navigation Links (Visible on larger screens) */}
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

          {/* Right Side - Profile & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Drawer */}
            <div className="md:hidden">
              <button onClick={() => setIsDrawerOpen(true)} className="text-xl">☰</button>
            </div>

            {/* Profile Dropdown (Visible on larger screens) */}
            <div className="hidden md:block relative profile-dropdown">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full hover:scale-105 transition-transform duration-300">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </button>
              {isProfileOpen && (
                <ul className="absolute right-0 mt-3 bg-white text-black rounded-lg shadow-lg w-52 p-2 border border-gray-200">
                  <li><Link to="/profile" className="block px-4 py-2 hover:bg-black hover:text-white">Profile</Link></li>
                  <li><Link to="/settings" className="block px-4 py-2 hover:bg-black hover:text-white">Settings</Link></li>
                  <li><button className="block px-4 py-2 hover:bg-black hover:text-white w-full text-left cursor-pointer" onClick={() => setIsModalOpen(true)}>Logout</button></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsDrawerOpen(false)}
          >
            <motion.div 
              className="bg-white w-64 h-full p-4 shadow-lg"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsDrawerOpen(false)} className="text-lg font-bold">✖</button>
              <div className="flex flex-col gap-4 mt-4">
                {["Home", "Events", "Community", "Gallery"].map((name) => (
                  <Link key={name} to={`/${name.toLowerCase()}`} className="text-lg hover:text-gray-700">
                    {name}
                  </Link>
                ))}
                <hr className="my-2" />
                <Link to="/profile" className="text-lg hover:text-gray-700">Profile</Link>
                <Link to="/settings" className="text-lg hover:text-gray-700">Settings</Link>
                <button onClick={() => setIsModalOpen(true)} className="text-lg text-red-600 hover:text-red-800">Logout</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <button onClick={handleLogout} className="btn bg-black text-white hover:bg-gray-800">Logout</button>
                <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost">Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarOnLogin;