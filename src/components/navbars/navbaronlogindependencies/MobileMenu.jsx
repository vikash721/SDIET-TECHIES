import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, setIsModalOpen, menuRef }) => {
  const links = ["Home", "Events", "Community", "Gallery"]

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div ref={menuRef} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {links.map((name) => (
              <Link key={name} to={`/${name.toLowerCase()}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                {name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
