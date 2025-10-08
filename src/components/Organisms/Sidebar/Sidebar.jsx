// src/components/Organisms/Sidebar/Sidebar.jsx
import React from "react";
import { VideoAction } from "@/components/Molecules/VideoAction/VideoAction";
import styles from "./Sidebar.module.css";

export const Sidebar = ({
  likes,
  comments,
  bookmarks,
  shares,
  onLike,
  onComment,
  onBookmark,
  onShare,
  isLiked,
  isBookmarked,
}) => {
  return (
    <div className={styles.sidebar}>
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
