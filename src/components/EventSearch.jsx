import React, { useState, useEffect } from "react";

const EventSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const messages = [
    "🚀 InnovateX Hackathon - 23rd March.",
        "🥳 College Fest - 27th Feb",
        "🏂🏻 Sports Event - 12th Feb",
        "🎤 Coding Bootcamp - 15th March",
        "🌱 Green Earth Drive - 10th March"
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenTexts = 1000;

    const handleTyping = () => {
      const fullText = messages[messageIndex];

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
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, messageIndex]);

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      {/* Typewriter Effect Text */}
      <div className="text-xl text-black font-semibold">
        <span>{currentMessage}</span>
        <span className="blinking-cursor">|</span>
      </div>

      {/* Centered Search Bar with Search Button */}
      <label className="flex items-center gap-2 bg-white rounded-lg shadow-lg px-3 py-2 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for events..."
          className="text-lg text-black bg-white h-10 w-full border-none focus:outline-none focus:ring-0 font-semibold"
        />
        {/* Search Button */}
        <button className="bg-black text-white text-lg font-semibold rounded-lg px-6 py-2 ml-2 hover:bg-[#444] transition-colors duration-300 cursor-pointer hover:scale-101">
          Search
        </button>
      </label>
    </div>
  );
};

export default EventSearch;
