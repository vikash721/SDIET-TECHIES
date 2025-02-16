import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation();
  
  // Use key-value pairs to define route names
  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Community", path: "/community" },
    { name: "Gallery", path: "/gallery" },
    { name: "Manage Events", path: "/manage-events" }, // ✅ Correct path
  ];

  return (
    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
      {links.map(({ name, path }) => (
        <Link
          key={name}
          to={path}
          className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 ${
            location.pathname === path ||
            (location.pathname === "/" && path === "/") // Ensure Home is correctly highlighted
              ? "text-indigo-600 border-indigo-400"
              : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
          } transition duration-150 ease-in-out`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
