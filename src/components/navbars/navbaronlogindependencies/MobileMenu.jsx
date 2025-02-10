import { useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import useUserStore from "../../../store/useUserStore";


const MobileMenu = ({ isMenuOpen, setIsMenuOpen, setIsModalOpen }) => {
  const menuRef = useRef(null)
  const location = useLocation() // Get the current location
  const { userData } = useUserStore();

  return (
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
                <div className="text-base font-medium leading-6 text-gray-800">{userData.name}</div>
                <div className="text-sm font-medium leading-5 text-gray-500">{userData.email}</div>
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
  )
}

export default MobileMenu
