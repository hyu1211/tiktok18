// src/components/Molecules/Comment/Comment.jsx
import React from "react";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Typography } from "@/components/Atoms/Typography/Typography";
import styles from "./Comment.module.css";

export const Comment = ({ comment }) => {
  if (!comment.user) {
    return null;
  }

  return (
    <div className={styles.comment}>
      <Avatar src={comment.user.avatarUrl} alt={comment.user.name} size={40} />
      <div className={styles.commentContent}>
        <Typography variant="body" className={styles.commentUserName}>
          {comment.user.name}
        </Typography>
        <Typography variant="body" className={styles.commentText}>
          {comment.text}
        </Typography>
      </div>
    </div>
  );
};
