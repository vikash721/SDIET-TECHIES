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
      <nav className="bg-[#e9e7e7] text-black shadow-md w-full">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left Side - Brand Name */}
          <div>
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
          <motion.dialog
            open
            className="modal modal-open"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="modal-box bg-white shadow-lg rounded-lg">
              <h3 className="font-bold text-lg">Confirm Logout</h3>
              <p className="py-4 text-gray-600">Are you sure you want to log out?</p>
              <div className="flex justify-end gap-4">
                <button onClick={handleLogout} className="btn bg-black hover:scale-105 transition-transform duration-300">Logout</button>
                <button onClick={() => setIsModalOpen(false)} className="btn btn-ghost hover:scale-105 transition-transform duration-300">Cancel</button>
              </div>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarOnLogin;
