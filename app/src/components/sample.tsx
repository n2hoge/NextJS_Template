import React from "react";

type TextDisplayProps = {
  text: string;
};

const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default TextDisplay;
