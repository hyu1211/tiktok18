// src/components/Molecules/VideoAction/VideoAction.jsx
"use client";
import React from "react";
import { Icon } from "@/components/Atoms/Icon/Icon";
import { Typography } from "@/components/Atoms/Typography/Typography";

// 数値をフォーマットする関数（1234 → 1.2K）
const formatCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  }
  return count.toString();
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  cursor: "pointer",
  transition: "transform 0.2s ease",
};

const iconWrapperStyle = (isLiked) => ({
  padding: "10px",
  borderRadius: "50%",
  backgroundColor: isLiked ? "rgba(255, 59, 92, 0.2)" : "rgba(50, 50, 50, 0.7)",
  backdropFilter: "blur(8px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  border: isLiked
    ? "2px solid rgba(255, 59, 92, 0.5)"
    : "2px solid rgba(255, 255, 255, 0.2)",
});

export const VideoAction = ({ iconName, count, onClick, isLiked }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        ...containerStyle,
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconWrapperStyle(isLiked)}>
        <Icon
          name={iconName}
          size={28}
          color={isLiked ? "#FF3B5C" : "white"}
          isFilled={isLiked}
        />
      </div>
      <Typography
        variant="caption"
        style={{
          fontSize: "13px",
          fontWeight: "600",
          color: "white",
          textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)",
        }}
      >
        {formatCount(count)}
      </Typography>
    </div>
  );
};
