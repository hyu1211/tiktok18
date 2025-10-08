// src/components/Organisms/Sidebar/Sidebar.jsx
"use client";
import React from "react";
import { VideoAction } from "@/components/Molecules/VideoAction/VideoAction";

const sidebarStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const Sidebar = ({
  likes,
  comments,
  shares = 0,
  bookmarks = 0,
  onLike,
  onComment,
  onShare,
  onBookmark,
  isLiked,
  isBookmarked,
}) => {
  return (
    <div style={sidebarStyle}>
      <VideoAction
        iconName="heart"
        count={likes}
        onClick={onLike}
        isLiked={isLiked}
      />
      <VideoAction iconName="comment" count={comments} onClick={onComment} />
      <VideoAction
        iconName="bookmark"
        count={bookmarks}
        onClick={onBookmark}
        isLiked={isBookmarked}
      />
      <VideoAction iconName="share" count={shares} onClick={onShare} />
    </div>
  );
};
