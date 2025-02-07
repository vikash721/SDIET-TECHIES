import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuthStore from "../store/useAuthStore";

const NavbarOnLogin = () => {
  const { logout } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className=" text-black shadow-md w-full">
        <div className="navbar container mx-auto px-4 lg:px-30 py-4 flex justify-between items-center">
          {/* Left Side - Brand Name */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-bold tracking-wide">SDIETTechies</Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex gap-8 mx-auto font-semibold">
            {[
              { name: "Home", path: "/" },
              { name: "Events", path: "/events" },
              { name: "Community", path: "/community" },
              { name: "Gallery", path: "/gallery" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Profile & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu (Hamburger) */}
            <div className="dropdown dropdown-end md:hidden">
              <button tabIndex={0} className="btn btn-ghost text-xl">☰</button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-lg shadow-lg mt-3 w-48 p-2 border border-gray-200"
              >
                {[
                  { name: "Home", path: "/" },
                  { name: "Events", path: "/events" },
                  { name: "Community", path: "/community" },
                  { name: "Gallery", path: "/gallery" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full hover:scale-105 transition-transform duration-300">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-lg shadow-lg mt-3 w-52 p-2 border border-gray-200"
              >
                <li><Link to="/profile" className="flex justify-between hover:bg-black hover:text-white">Profile</Link></li>
                <li><Link to="/settings" className="hover:bg-black hover:text-white">Settings</Link></li>
                <li><button className="hover:bg-black hover:text-white" onClick={() => setIsModalOpen(true)}>Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

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
