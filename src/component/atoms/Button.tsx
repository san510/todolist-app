import React from "react";

type Props = {
  label?: string;
  className?: string;
  onClick: () => void;
};
export const Button = ({ label, className, onClick }: Props) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
