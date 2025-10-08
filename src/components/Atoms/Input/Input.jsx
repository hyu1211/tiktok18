// src/components/Atoms/Input/Input.jsx
import React from "react";
import styles from "./Input.module.css";

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) => {
  const inputClasses = [styles.input, className].filter(Boolean).join(" ");

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClasses}
      {...props}
    />
  );
};
