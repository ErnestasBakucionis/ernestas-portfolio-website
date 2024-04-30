import React, { useState, useEffect } from "react";

const BlinkingCursor: React.FC = () => {
  const [blinkVisible, setBlinkVisible] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span style={{ opacity: blinkVisible ? 1 : 0 }} className="text-green-400">
      |
    </span>
  );
};

export default BlinkingCursor;
