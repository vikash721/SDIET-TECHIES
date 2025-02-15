import React, { useEffect } from "react";
import useEventStore from "../store/useEventStore";
import TypingEffect from "../components/effects/TypingEffect";

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
  const { searchQuery, setSearchQuery, filterEvents, filteredEvents } = useEventStore();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    filterEvents();
  };

  useEffect(() => {
    filterEvents();
  }, []);

  const messages = filteredEvents.map((event) => {
    const emoji = badgeEmojiMap[event.badge] || "✨";
    const formattedDate = new Date(event.date).toDateString();
    return `${emoji} ${event.name} - ${formattedDate}`;
  });

  return (
    <div className="flex flex-col items-center w-full">
      {/* ✅ Typing Effect (Now Centered & Smaller) */}
      <div className="w-full max-w-xl px-4 mb-4 text-center">
        <TypingEffect messages={messages} className="text-lg font-medium" />
      </div>

      {/* ✅ Search Bar (Now Matches EventCard) */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for events..."
          className="w-full py-2.5 px-5 text-base bg-white border border-gray-300 
                     rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 
                     transition-shadow duration-200 shadow-md"
        />
      </div>
    </div>
  );
};

export default EventSearch;
