import React from "react";
import { InputProps } from "../../types/Todo";

export const Input = ({
  className,
  type,
  value,
  disabled,
  checked,
  onChange,
  onBlur,
  onKeyDown,
}: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    />
  );
};
