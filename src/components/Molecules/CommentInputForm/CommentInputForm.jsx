// src/components/Molecules/CommentInputForm/CommentInputForm.jsx
"use client";
import React, { useState } from "react";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Input } from "@/components/Atoms/Input/Input";
import { Button } from "@/components/Atoms/Button/Button";

const formStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: "12px 0",
  borderTop: "1px solid #f0f0f0",
};

export const CommentInputForm = ({ currentUser, onSubmit }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment(""); // 送信後にフォームをクリア
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size={36} />
      <Input
        placeholder="コメントを追加..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ flexGrow: 1 }}
      />
      <Button type="submit" disabled={!comment.trim()}>
        送信
      </Button>
    </form>
  );
};
