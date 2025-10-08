// src/components/Organisms/VideoCard/VideoCard.jsx
import React from "react";
import { UserInfo } from "@/components/Molecules/UserInfo/UserInfo";
import { Typography } from "@/components/Atoms/Typography/Typography";
import { Sidebar } from "@/components/Organisms/Sidebar/Sidebar";

const cardStyle = {
  position: "relative", // 子要素を絶対配置するための基準
  width: "100%",
  height: "100vh", // ビューポートの高さに合わせて調整
  backgroundColor: "black",
  scrollSnapAlign: "start", // スクロール時にピタッと止まるように
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
};

const overlayStyle = {
  position: "absolute",
  bottom: "20px",
  left: "20px",
  color: "white",
  zIndex: 1,
};

const sidebarContainerStyle = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  zIndex: 1,
};

export const VideoCard = ({ videoData }) => {
  return (
    <div style={cardStyle}>
      <video
        src={videoData.videoUrl}
        style={videoStyle}
        controls
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div style={overlayStyle}>
        <UserInfo user={videoData.user} />
        <Typography variant="body" style={{ marginTop: "8px", color: "white" }}>
          {videoData.description}
        </Typography>
      </div>

      <div style={sidebarContainerStyle}>
        <Sidebar likes={videoData.likes} comments={videoData.comments.length} />
      </div>
    </div>
  );
};
