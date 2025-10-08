// src/components/1_atoms/Typography.jsx
"use client";
import React from "react";

const baseStyle = {
  margin: 0,
  padding: 0,
};

const variants = {
  h1: { fontSize: "24px", fontWeight: "bold" },
  h2: { fontSize: "20px", fontWeight: "bold" },
  body: { fontSize: "16px", fontWeight: "normal" },
  caption: { fontSize: "12px", color: "#666" },
};

export const Typography = ({ variant = "body", children, style, ...props }) => {
  const Component = ["h1", "h2"].includes(variant) ? variant : "p";

  const textStyle = {
    ...baseStyle,
    ...variants[variant],
    ...style,
  };

  return (
    <Component style={textStyle} {...props}>
      {children}
    </Component>
  );
};
