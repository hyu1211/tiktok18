// src/components/Organisms/CommentSection/CommentSection.jsx
import React from "react";
import { Comment } from "@/components/Molecules/Comment/Comment";
import { CommentInputForm } from "@/components/Molecules/CommentInputForm/CommentInputForm";
import { Typography } from "@/components/Atoms/Typography/Typography";
import styles from "./CommentSection.module.css";

export const CommentSection = ({
  comments,
  currentUser,
  onClose,
  onSubmit,
  isOpen,
}) => {
  // isOpenがfalseの場合は何もレンダリングしない
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.commentSection}>
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
      <Typography variant="h2" className={styles.commentTitle}>
        {comments.length}件のコメント
      </Typography>

      <div className={styles.commentsContainer}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      <CommentInputForm currentUser={currentUser} onSubmit={onSubmit} />
    </div>
  );
};
