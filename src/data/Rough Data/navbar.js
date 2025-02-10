

import { useState, useRef, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import useAuthStore from "../store/useAuthStore"

const NavbarOnLogin = () => {
  const { logout } = useAuthStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest(".profile-dropdown")) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isProfileOpen])

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">SDIETTechies</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {["Home", "Events", "Community", "Gallery"].map((name) => (
              <Link
                key={name}
                to={`/${name.toLowerCase()}`}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 ${
                  location.pathname === `/${name.toLowerCase()}` || (location.pathname === "/" && name.toLowerCase() === "home")
                    ? "text-indigo-600 border-indigo-400"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                } transition duration-150 ease-in-out`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative profile-dropdown">
              <div>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User avatar"
                  />
                </button>
              </div>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg profile-dropdown"
                  >
                    <div className="rounded-md bg-white shadow-xs">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Settings
                        </Link>
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 transition duration-150 ease-in-out"
                          role="menuitem"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={isMenuOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isMenuOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {["Home", "Events", "Community", "Gallery"].map((name) => (
                <Link
                  key={name}
                  to={`/${name.toLowerCase()}`}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    location.pathname === `/${name.toLowerCase()}` || (location.pathname === "/" && name.toLowerCase() === "home")
                      ? "text-indigo-600 border-indigo-400"
                      : "text-gray-600 border-transparent hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                  } transition duration-150 ease-in-out`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    alt="User avatar"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-6 text-gray-800">User Name</div>
                  <div className="text-sm font-medium leading-5 text-gray-500">user@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition duration-150 ease-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition duration-150 ease-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    setIsModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-base font-medium text-red-600 hover:text-red-800 hover:bg-red-100 transition duration-150 ease-in-out"
                >
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
              </span>
              <motion.div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Confirm Logout</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to log out? You'll need to log in again to access your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleLogout}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-150 ease-in-out"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-150 ease-in-out"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default NavbarOnLogin



