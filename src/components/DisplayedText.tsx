import BlinkingCursor from "./BlinkingCursor";

const DisplayedText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <p className="text-lg md:text-4xl font-mono">
      <span className="text-green-400">{text}</span>
      <BlinkingCursor />
    </p>
  );
};

export default DisplayedText;
