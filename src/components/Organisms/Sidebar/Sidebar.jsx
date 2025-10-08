// src/components/Organisms/Sidebar/Sidebar.jsx
"use client";
import React from "react";
import { VideoAction } from "@/components/Molecules/VideoAction/VideoAction";

const sidebarStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const Sidebar = ({ likes, comments, onLike, onComment, isLiked }) => {
  // onComment を props で受け取る
  return (
    <div style={sidebarStyle}>
      <VideoAction
        iconName="heart"
        count={likes}
        onClick={onLike}
        isLiked={isLiked}
      />
      <VideoAction
        iconName="comment"
        count={comments}
        onClick={onComment} // コメントアイコンのクリック時に onComment を実行
      />
    </div>
  );
};
