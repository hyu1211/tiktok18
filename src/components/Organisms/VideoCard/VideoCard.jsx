// src/components/Organisms/VideoCard/VideoCard.jsx
"use client";
import React, { useState } from "react";
import { UserInfo } from "@/components/Molecules/UserInfo/UserInfo";
import { Typography } from "@/components/Atoms/Typography/Typography";
import { Sidebar } from "@/components/Organisms/Sidebar/Sidebar";
import { CommentSection } from "@/components/Organisms/CommentSection/CommentSection";
import styles from "./VideoCard.module.css";

// 現在ログインしているユーザーのダミーデータ
const currentUser = {
  name: "current_user",
  avatarUrl: "https://i.pravatar.cc/150?u=c",
};

export const VideoCard = ({ videoData }) => {
  // いいね機能の状態
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(videoData.likes);

  // コメント機能の状態 - 初期状態は閉じた状態
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comments, setComments] = useState(videoData.comments);

  // ブックマーク機能の状態
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarksCount, setBookmarksCount] = useState(
    videoData.bookmarks || 0
  );

  // 共有機能の状態
  const [sharesCount, setSharesCount] = useState(videoData.shares || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleToggleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setBookmarksCount(isBookmarked ? bookmarksCount - 1 : bookmarksCount + 1);
  };

  const handleShare = () => {
    // 共有機能の実装（ブラウザの共有APIやクリップボードへのコピーなど）
    if (navigator.share) {
      navigator
        .share({
          title: videoData.description,
          text: videoData.description,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // フォールバック: URLをクリップボードにコピー
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("動画のURLをクリップボードにコピーしました！");
        })
        .catch(() => {
          alert("動画を共有しました！");
        });
    }
    setSharesCount(sharesCount + 1);
  };

  const handleAddNewComment = (newCommentText) => {
    const newComment = {
      id: Date.now(),
      text: newCommentText,
      user: currentUser,
    };
    setComments([...comments, newComment]);
  };

  const overlayClasses = [
    styles.overlay,
    isCommentOpen ? styles.overlay.commentsOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const sidebarContainerClasses = [
    styles.sidebarContainer,
    isCommentOpen
      ? styles.sidebarContainer.commentsOpen
      : styles.sidebarContainer.commentsClosed,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.videoCard}>
      <video
        src={videoData.videoUrl}
        className={styles.video}
        controls
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div className={overlayClasses}>
        <UserInfo user={videoData.user} />
        <Typography variant="body" className={styles.description}>
          {videoData.description}
        </Typography>
      </div>

      <div className={sidebarContainerClasses}>
        <Sidebar
          likes={likesCount}
          comments={comments.length}
          bookmarks={bookmarksCount}
          shares={sharesCount}
          isLiked={isLiked}
          isBookmarked={isBookmarked}
          onLike={handleLike}
          onComment={handleToggleComment}
          onBookmark={handleBookmark}
          onShare={handleShare}
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
