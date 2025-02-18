import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaShare, FaUsers } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const EventDetails = () => {
  const event = {
    name: "Tech Conference 2025",
    description:
      "An annual technology conference covering AI, Cloud Computing, and DevOps trends.",
    location: "New Delhi, India",
    date: "2025-03-15",
    time: "10:00 AM - 5:00 PM",
    eventBanner:
      "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    logo: "https://randomuser.me/api/portraits/men/41.jpg",
    participants: 500,
    socialLinks: {
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  };

  return (
    <motion.div
      className="relative w-full bg-base-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Event Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={event.eventBanner}
          alt="Event Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
      </div>

      {/* Event Logo */}
      <div className="absolute left-4 md:left-10 top-36 md:top-48 z-10">
        <div className="w-28 h-28 md:w-36 md:h-36 bg-base-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-base-100">
          <img
            src={event.logo}
            className="w-full h-full object-cover"
            alt="Event Logo"
          />
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-base-200">
        <div className="container mx-auto px-4">
          <div className="pt-20 md:pt-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:ml-44">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black">
                  {event.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-700 mt-1">
                  <FaUsers className="w-5 h-5 text-primary" />
                  <span>{event.participants} Participants Joined</span>
                </div>
                <div className="flex gap-4 mt-3">
                  {event.socialLinks?.linkedin && (
                    <a
                      href={event.socialLinks.linkedin}
                      className="transition-transform transform hover:scale-110"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-6 h-6 text-indigo-500" />
                    </a>
                  )}
                  {event.socialLinks?.instagram && (
                    <a
                      href={event.socialLinks.instagram}
                      className="transition-transform transform hover:scale-110"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-6 h-6 text-indigo-500" />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <button className="btn btn-outline btn-sm md:btn-md border-gray-400 hover:border-primary gap-2">
                  <FaShare className="w-4 h-4 text-primary" />
                  Share
                </button>
                <button className="btn btn-primary btn-sm md:btn-md">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-20 bg-base-100 shadow-md rounded-b-2xl overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="md:hidden py-3">
            <button className="btn btn-ghost w-full justify-between items-center">
              <span className="font-medium text-primary">Navigation Menu</span>
              <HiMenuAlt3 className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventDetails;


