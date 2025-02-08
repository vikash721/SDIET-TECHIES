import React, { useState, useEffect } from "react";
import useEventStore from "../store/useEventStore"; // ✅ Correct import

// Map event badges to corresponding emojis
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

const TypingEffect = ({ events }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenTexts = 1000;

    const handleTyping = () => {
      const fullText = events[messageIndex];

      if (!isDeleting) {
        setCurrentMessage(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setCurrentMessage(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }

      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % events.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, messageIndex, events]);

  return (
    <div className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-semibold mb-4">
      <span className="text-gray-900">{currentMessage}</span>
      <span className="blinking-cursor">|</span>
    </div>
  );
};

const EventSearch = () => {
  const { events, searchQuery, setSearchQuery, filterEvents } = useEventStore();  // Access events from the store

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update the query in the store
    filterEvents(); // Trigger filtering of events
  };

  // Create dynamic messages using event data and badges
  const messages = events.map((event) => {
    const emoji = badgeEmojiMap[event.badge] || "✨"; // Default emoji if badge is not found
    return `${emoji} ${event.name} - ${event.date}`;
  });

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* Typing Effect Component with dynamic messages */}
      <TypingEffect events={messages} />

      {/* Sleek and clean Search Bar with Floating Icon */}
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
