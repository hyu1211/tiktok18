// src/components/Organisms/Sidebar/Sidebar.jsx
import React from "react";
import { VideoAction } from "@/components/Molecules/VideoAction/VideoAction";

const sidebarStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export const Sidebar = ({ likes, comments, onLike, onComment }) => {
  return (
    <div style={sidebarStyle}>
      <VideoAction iconName="heart" count={likes} onClick={onLike} />
      <VideoAction iconName="comment" count={comments} onClick={onComment} />
      {/* 他のアクション（シェアなど）もここに追加 */}
    </div>
  );
};
