import React from "react";

export const Heading: React.FC<{ text: string }> = ({ text }) => {
  return <h2>{text}</h2>;
};
