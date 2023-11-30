import React from "react";

export const Title: React.FC<{ text: string }> = ({ text }) => {
  return <h3>{text}</h3>;
};
