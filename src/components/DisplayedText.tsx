import React, { useEffect, useState } from "react";

const DisplayedText: React.FC<{ text: string }> = ({ text }) => {
  const [blinkVisible, setBlinkVisible] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p className="text-lg md:text-4xl font-mono">
      <span className="text-green-400">{text}</span>
      <span
        style={{ opacity: blinkVisible ? 1 : 0 }}
        className="text-green-400"
      >
        |
      </span>
    </p>
  );
};

export default DisplayedText;
