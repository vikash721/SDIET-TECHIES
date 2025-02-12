import React, { useState, useEffect } from "react";

const TypingEffect = ({ messages }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenTexts = 1500;

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
  }, [charIndex, isDeleting, messageIndex, messages]);

  return (
    <div className="text-lg font-semibold">
      <span>{currentMessage}</span>
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingEffect;
