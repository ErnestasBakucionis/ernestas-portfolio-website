"use client";
import React, { useEffect, useState } from "react";
import DisplayedText from "./DisplayedText";

const MessageDisplay: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (currentIndex < text.length) {
      const randomInterval = Math.floor(Math.random() * (100 - 10 + 1)) + 10; // Generates a random number between 10 and 40
      interval = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, randomInterval);
    }

    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <DisplayedText text={displayedText} />
    </div>
  );
};

export default MessageDisplay;
