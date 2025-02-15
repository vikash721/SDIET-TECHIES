import React, { useState } from "react";
import { Calendar, Filter, ChevronDown } from "lucide-react";

// Sample Events Data
const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "2025-03-12T17:00:00",
    role: "Coordinator",
    description: "Explore the latest trends in modern web technologies and development best practices.",
    image: "https://img.freepik.com/free-vector/abstract-technology-conference-template_1361-1213.jpg",
  },
  {
    id: 2,
    title: "AI & ML Summit",
    date: "2025-04-20T15:30:00",
    role: "Speaker",
    description: "Discover the latest in AI & Machine Learning with top industry speakers.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQbqxou8zLVr-IQN5iX7ojSZAWt7yBH6a_A&s",
  },
  {
    id: 3,
    title: "Cybersecurity Bootcamp",
    date: "2024-12-10T10:00:00",
    role: "Participant",
    description: "An interactive session on ethical hacking, security threats, and network defense strategies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YDW61Ogel-_lkEbqK0S5GCKQ7H23XdE_2w&s",
  },
  {
    id: 4,
    title: "Blockchain & Web3 Meetup",
    date: "2024-07-30T18:00:00",
    role: "Organizer",
    description: "A deep dive into blockchain technology, cryptocurrency, and smart contract development.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyxYpcaSenUh2-YDKVzKOJmYVDBXlxqb3lxw&s",
  },
];

const MyEvents = () => {
  const [filter, setFilter] = useState("All"); // State to manage selected filter
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to filter events based on selection
  const getFilteredEvents = () => {
    const currentDate = new Date();
    if (filter === "Upcoming Events") {
      return events.filter((event) => new Date(event.date) > currentDate);
    } else if (filter === "Past Events") {
      return events.filter((event) => new Date(event.date) < currentDate);
    }
    return events; // Show all events by default
  };

  return (
    <div className="max-w-4xl bg-white p-6 md:p-8 rounded-xl md:shadow-lg border border-gray-200">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Events</h1>

        {/* Filter Button */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition flex items-center"
          >
            <Filter className="w-5 h-5 mr-2" />
            {filter}
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              {["All", "Upcoming Events", "Past Events"].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFilter(option);
                    setShowDropdown(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${filter === option ? "font-semibold bg-gray-200" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {getFilteredEvents().length > 0 ? (
          getFilteredEvents().map((event) => (
            <div key={event.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Image Section */}
                <div className="bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={event.image}
                    alt="Event Banner"
                    className="w-full h-40 md:h-40 object-cover"
                  />
                </div>


                {/* Event Details */}
                <div className="p-4 md:col-span-2">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-gray-700 text-sm">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{new Date(event.date).toLocaleString()}</span>
                    </div>
                    {getRoleBadge(event.role)}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">{event.title}</h2>
                  <p className="text-gray-800 text-sm md:text-base">{event.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No events found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default MyEvents;

// Role Badge Component
const getRoleBadge = (role) => {
  const roleStyles = {
    Participant: "bg-blue-200 text-blue-900 border border-blue-300",
    Attendee: "bg-gray-200 text-gray-900 border border-gray-300",
    Volunteer: "bg-yellow-200 text-yellow-900 border border-yellow-300",
    Coordinator: "bg-green-200 text-green-900 border border-green-300",
    Speaker: "bg-purple-200 text-purple-900 border border-purple-300",
    Organizer: "bg-red-200 text-red-900 border border-red-300",
  };

  return (
    <div className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${roleStyles[role] || "bg-gray-200 text-gray-900 border border-gray-300"}`}>
      {role}
    </div>
  );
};
