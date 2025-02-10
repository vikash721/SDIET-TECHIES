import { Link, useLocation } from "react-router-dom"

const NavLinks = () => {
  const location = useLocation()
  const links = ["Home", "Events", "Community", "Gallery"]

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {links.map((name) => (
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
  )
}

export default NavLinks
