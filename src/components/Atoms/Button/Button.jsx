"use client";
import React from "react";

const buttonStyles = {
  padding: "10px 20px",
  borderRadius: "24px",
  border: "none",
  backgroundColor: "#FF3B5C",
  color: "white",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "600",
  outline: "none",
  transition: "all 0.2s ease",
};

export const Button = ({ children, onClick, style, disabled, ...props }) => {
  const finalStyle = {
    ...buttonStyles,
    ...style,
    ...(disabled && {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
      opacity: 0.6,
    }),
  };

  return (
    <button
      onClick={onClick}
      style={finalStyle}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = "#E6355A";
          e.target.style.transform = "scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.target.style.backgroundColor = "#FF3B5C";
          e.target.style.transform = "scale(1)";
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
