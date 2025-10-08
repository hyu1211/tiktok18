// src/components/1_atoms/Input.jsx
"use client";
import React from "react";

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "24px",
  border: "1px solid #e0e0e0",
  fontSize: "14px",
  outline: "none",
  backgroundColor: "#f5f5f5",
  transition: "all 0.2s ease",
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
      onFocus={(e) => {
        e.target.style.backgroundColor = "#fff";
        e.target.style.borderColor = "#FF3B5C";
      }}
      onBlur={(e) => {
        e.target.style.backgroundColor = "#f5f5f5";
        e.target.style.borderColor = "#e0e0e0";
      }}
      {...props}
    />
  );
};
