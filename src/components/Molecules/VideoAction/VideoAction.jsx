// src/components/Molecules/VideoAction/VideoAction.jsx
import React from "react";
import { Icon } from "@/components/Atoms/Icon/Icon";
import { Typography } from "@/components/Atoms/Typography/Typography";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  cursor: "pointer",
};

// クリック可能な領域を広げるためのラッパー
const iconWrapperStyle = {
  padding: "8px",
  borderRadius: "50%",
  backgroundColor: "#f0f0f0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const VideoAction = ({ iconName, count, onClick }) => {
  return (
    <div onClick={onClick} style={containerStyle}>
      <div style={iconWrapperStyle}>
        <Icon name={iconName} size={28} color="#333" />
      </div>
      <Typography
        variant="caption"
        style={{ fontSize: "14px", fontWeight: "bold" }}
      >
        {count}
      </Typography>
    </div>
  );
};
