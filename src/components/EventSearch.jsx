import React, { useEffect } from "react";
import useEventStore from "../store/useEventStore";
import TypingEffect from "../components/effects/TypingEffect"; // ✅ Import the updated component

const badgeEmojiMap = {
  Tech: "💻",
  Cultural: "🎭",
  Sports: "🏆",
  Business: "💼",
  Music: "🎶",
  Dance: "💃",
  Debate: "🗣️",
  Hackathon: "🚀",
  Gaming: "🎮",
  Quiz: "❓",
  Workshop: "🛠️",
  Seminar: "🎓",
  Startup: "🚀",
  Art: "🎨",
  Photography: "📸",
};

const EventSearch = () => {
  const { events, searchQuery, setSearchQuery, filterEvents, filteredEvents } = useEventStore();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    filterEvents();
  };

  // Execute filterEvents on initial render to populate filteredEvents
  useEffect(() => {
    filterEvents();
  }, []);

  // ✅ Format date as "Day Date Month Year"
  const messages = filteredEvents.map((event) => {
    const emoji = badgeEmojiMap[event.badge] || "✨";
    const formattedDate = new Date(event.date).toDateString(); // Converts to "Day Date Month Year"
    return `${emoji} ${event.name} - ${formattedDate}`;
  });

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* ✅ Typing Effect Component with emojis */}
      <TypingEffect messages={messages} />

      {/* ✅ Search Bar */}
      <div className="relative w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for events..."
          className="w-full py-3 px-6 text-lg text-gray-900 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out shadow-sm"
        />
      </div>
    </div>
  );
};

export default EventSearch;