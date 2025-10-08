// src/components/Molecules/CommentInputForm/CommentInputForm.jsx
import React, { useState } from "react";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Input } from "@/components/Atoms/Input/Input";
import { Button } from "@/components/Atoms/Button/Button";
import styles from "./CommentInputForm.module.css";

export const CommentInputForm = ({ currentUser, onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentInputForm}>
      <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size={40} />
      <Input
        placeholder="コメントを追加..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.commentInput}
      />
      <Button type="submit" className={styles.commentSubmitButton}>
        送信
      </Button>
    </form>
  );
};
