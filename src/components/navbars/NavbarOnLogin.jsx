"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import useAuthStore from "../../store/useAuthStore"
import NavLinks from "./navbar-on-login-dependencies/NavLinks"
import ProfileDropdown from "./navbar-on-login-dependencies/ProfileDropdown"
import MobileMenu from "./navbar-on-login-dependencies/MobileMenu"
import LogoutModal from "./navbar-on-login-dependencies/LogoutModal"

const NavbarOnLogin = () => {
  const { logout } = useAuthStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="bg-white  border-b border-gray-300">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">SDIET</span><span className="text-2xl font-bold text-orange-600">Techies</span>
            </Link>
          </div>

          <NavLinks />

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <ProfileDropdown isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen} setIsModalOpen={setIsModalOpen} />
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path className={isMenuOpen ? "hidden" : "inline-flex"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                <path className={isMenuOpen ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsModalOpen={setIsModalOpen} menuRef={menuRef} />
      <LogoutModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} logout={logout} />
    </nav>
  )
}

export default NavbarOnLogin
