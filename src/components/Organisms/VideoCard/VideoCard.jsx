// src/components/Organisms/VideoCard/VideoCard.jsx
"use client";
import React, { useState } from "react";
import { UserInfo } from "@/components/Molecules/UserInfo/UserInfo";
import { Typography } from "@/components/Atoms/Typography/Typography";
import { Sidebar } from "@/components/Organisms/Sidebar/Sidebar";
import { CommentSection } from "@/components/Organisms/CommentSection/CommentSection";

const cardStyle = {
  position: "relative",
  width: "100%",
  height: "100vh",
  backgroundColor: "black",
  scrollSnapAlign: "start",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  cursor: "pointer",
};

const overlayStyle = {
  position: "absolute",
  bottom: "20px",
  left: "20px",
  color: "white",
  zIndex: 5,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)",
  maxWidth: "calc(100% - 120px)",
  transition: "bottom 0.3s ease-in-out",
};

// 現在ログインしているユーザーのダミーデータ
const currentUser = {
  name: "current_user",
  avatarUrl: "https://i.pravatar.cc/150?u=c",
};

export const VideoCard = ({ videoData }) => {
  // いいね機能の状態
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(videoData.likes);

  // コメント機能の状態
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comments, setComments] = useState(videoData.comments);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleToggleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const handleAddNewComment = (newCommentText) => {
    const newComment = {
      id: Date.now(),
      text: newCommentText,
      user: currentUser,
    };
    setComments([...comments, newComment]);
  };

  const sidebarContainerStyle = {
    position: "absolute",
    bottom: isCommentOpen ? "52vh" : "20px",
    right: "20px",
    zIndex: 5,
    transition: "bottom 0.3s ease-in-out",
  };

  return (
    <div style={cardStyle}>
      <video
        src={videoData.videoUrl}
        style={videoStyle}
        controls
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div
        style={{
          ...overlayStyle,
          bottom: isCommentOpen ? "52vh" : "20px",
        }}
      >
        <UserInfo user={videoData.user} />
        <Typography
          variant="body"
          style={{
            marginTop: "8px",
            color: "white",
            lineHeight: "1.5",
          }}
        >
          {videoData.description}
        </Typography>
      </div>

      <div style={sidebarContainerStyle}>
        <Sidebar
          likes={likesCount}
          comments={comments.length}
          isLiked={isLiked}
          onLike={handleLike}
          onComment={handleToggleComment}
        />
      </div>

      <CommentSection
        isOpen={isCommentOpen}
        onClose={handleToggleComment}
        comments={comments}
        currentUser={currentUser}
        onSubmit={handleAddNewComment}
      />
    </div>
  );
};
