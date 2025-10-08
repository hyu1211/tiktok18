// src/components/Organisms/CommentSection/CommentSection.jsx
"use client";
import React from "react";
import { Comment } from "@/components/Molecules/Comment/Comment";
import { CommentInputForm } from "@/components/Molecules/CommentInputForm/CommentInputForm";
import { Typography } from "@/components/Atoms/Typography/Typography";

const sectionStyle = {
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  maxWidth: "450px",
  height: "50vh",
  backgroundColor: "white",
  borderTopLeftRadius: "24px",
  borderTopRightRadius: "24px",
  padding: "24px",
  paddingTop: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  zIndex: 15,
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
};

const handleBarStyle = {
  width: "40px",
  height: "4px",
  backgroundColor: "#e0e0e0",
  borderRadius: "2px",
  margin: "0 auto 16px",
};

const closeButtonStyle = {
  position: "absolute",
  top: "16px",
  right: "20px",
  background: "none",
  border: "none",
  fontSize: "28px",
  cursor: "pointer",
  color: "#666",
  padding: "4px",
  transition: "color 0.2s ease",
  lineHeight: "1",
};

const commentListStyle = {
  flexGrow: 1,
  overflowY: "auto",
  marginBottom: "16px",
  paddingRight: "4px",
};

export const CommentSection = ({
  comments,
  currentUser,
  onClose,
  onSubmit,
  isOpen,
}) => {
  const openStyle = {
    transform: "translateX(-50%) translateY(0)",
  };

  const closedStyle = {
    transform: "translateX(-50%) translateY(100%)",
  };

  return (
    <div style={{ ...sectionStyle, ...(isOpen ? openStyle : closedStyle) }}>
      <div style={handleBarStyle} />
      <button
        onClick={onClose}
        style={closeButtonStyle}
        onMouseEnter={(e) => (e.target.style.color = "#333")}
        onMouseLeave={(e) => (e.target.style.color = "#666")}
      >
        &times;
      </button>
      <Typography
        variant="h2"
        style={{
          color: "#1a1a1a",
          marginBottom: "20px",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        {comments.length}件のコメント
      </Typography>

      <div style={commentListStyle}>
        {comments.length === 0 ? (
          <Typography
            variant="body"
            style={{ color: "#999", textAlign: "center", marginTop: "40px" }}
          >
            まだコメントがありません
          </Typography>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </div>

      <CommentInputForm currentUser={currentUser} onSubmit={onSubmit} />
    </div>
  );
};
