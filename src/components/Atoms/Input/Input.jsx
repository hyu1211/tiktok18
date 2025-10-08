// src/components/1_atoms/Input.jsx
import React from "react";

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  style,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...inputStyle, ...style }}
      {...props}
    />
  );
};
