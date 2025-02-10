import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaShare, FaUsers } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import CenteredContainer from "../CenteredContainer";
import About from "./eventnavigations/About";
import Schedule from "./eventnavigations/Schedule";
import Guidelines from "./eventnavigations/Guidelines";
import Announcements from "./eventnavigations/Announcements";
import ContactPage from "./eventnavigations/ContactPage";
import Faq from "./eventnavigations/Faq";
import useEventStore from '../../store/useEventStore';
import { useParams, useNavigate, useLocation } from "react-router-dom";

const ViewEventDetails = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const event = useEventStore((state) => state.events.find((event) => event.id === parseInt(eventId)));

  useEffect(() => {
    if (location.pathname.split("/").length < 4) {
      navigate(`/events/${eventId}/about`);
    }
  }, [location, navigate, eventId]);

  if (!event) return <div>Event not found</div>;

  const { name, participants, eventBanner, logo, socialLinks } = event;

  const tabs = [
    { id: "about", label: "About" },
    { id: "schedule", label: "Schedule" },
    { id: "guidelines", label: "Guidelines" },
    { id: "announcements", label: "Announcements" },
    { id: "contact", label: "Contact" },
    { id: "faq", label: "FAQ" },
  ];

  const activeTab = location.pathname.split("/").pop();

  const handleTabClick = (tabId) => {
    navigate(`/events/${eventId}/${tabId}`);
    setIsMenuOpen(false); // Close the menu on tab click
  };

  return (
    <CenteredContainer>
      <div className="relative w-full bg-base-100">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img src={eventBanner} alt="Event Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>

        <div className="absolute left-4 md:left-10 top-36 md:top-48 z-10">
          <div className="w-28 h-28 md:w-36 md:h-36 bg-base-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-base-100">
            <img src={logo} className="w-full h-full object-cover" alt="Event Logo" />
          </div>
        </div>

        <div className="bg-base-200">
          <div className="container mx-auto px-4">
            <div className="pt-20 md:pt-6 pb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:ml-44">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-black">{name}</h1>
                  <div className="flex items-center gap-2 text-gray-700 mt-1">
                    <FaUsers className="w-5 h-5 text-primary" />
                    <span>{participants} Participants Joined</span>
                  </div>
                  <div className="flex gap-4 mt-3">
                    {socialLinks?.linkedin && (
                      <a href={socialLinks.linkedin} className="transition-transform transform hover:scale-110" aria-label="LinkedIn">
                        <FaLinkedin className="w-6 h-6 text-indigo-500" />
                      </a>
                    )}
                    {socialLinks?.instagram && (
                      <a href={socialLinks.instagram} className="transition-transform transform hover:scale-110" aria-label="Instagram">
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
                  <button className="btn btn-primary btn-sm md:btn-md">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-20 bg-base-100 shadow-md rounded-b-2xl overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="md:hidden py-3">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost w-full justify-between items-center">
                <span className="font-medium text-primary">Navigation Menu</span>
                <HiMenuAlt3 className="w-6 h-6 text-primary" />
              </button>
            </div>

            <nav className={`${isMenuOpen ? "block" : "hidden md:block"}`}>
              <ul className="flex flex-col md:flex-row -mb-px">
                {tabs.map((tab) => (
                  <li key={tab.id} className="md:mr-1">
                    <button
                      onClick={() => handleTabClick(tab.id)}
                      className={`cursor-pointer w-full md:w-auto px-6 py-4 text-sm font-semibold transition-all duration-200 ease-in-out border-b-2 hover:text-primary
                        ${activeTab === tab.id ? "border-primary text-primary" : "border-transparent text-gray-500 hover:border-primary/50"}`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <div className="prose max-w-none mt-2">
            {activeTab === "about" && <About event={event} />}
            {activeTab === "schedule" && <Schedule event={event} />}
            {activeTab === "guidelines" && <Guidelines event={event} />}
            {activeTab === "announcements" && <Announcements event={event} />}
            {activeTab === "contact" && <ContactPage event={event} />}
            {activeTab === "faq" && <Faq event={event} />}
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
};

export default ViewEventDetails;
