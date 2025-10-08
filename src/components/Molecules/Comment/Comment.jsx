// src/components/Molecules/Comment/Comment.jsx
"use client";
import React from "react";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Typography } from "@/components/Atoms/Typography/Typography";

const commentContainerStyle = {
  display: "flex",
  gap: "12px",
  marginBottom: "20px",
  alignItems: "flex-start",
};

const commentBodyStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

export const Comment = ({ comment }) => {
  // ユーザー情報がない場合は何も表示しない
  if (!comment.user) {
    return null;
  }

  return (
    <div style={commentContainerStyle}>
      <Avatar src={comment.user.avatarUrl} alt={comment.user.name} size={36} />
      <div style={commentBodyStyle}>
        <Typography
          variant="body"
          style={{
            color: "#1a1a1a",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {comment.user.name}
        </Typography>
        <Typography
          variant="body"
          style={{
            color: "#333",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          {comment.text}
        </Typography>
      </div>
    </div>
  );
};
