// src/components/Organisms/VideoCard/VideoCard.jsx
"use client";
import React, { useState } from "react";
import { UserInfo } from "@/components/Molecules/UserInfo/UserInfo";
import { Typography } from "@/components/Atoms/Typography/Typography";
import { Sidebar } from "@/components/Organisms/Sidebar/Sidebar";

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
  zIndex: 1,
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6)",
  maxWidth: "calc(100% - 120px)", // サイドバーと重ならないように
};

const sidebarContainerStyle = {
  position: "absolute",
  bottom: "20px",
  right: "20px",
  zIndex: 1,
};

const loadingStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
};

const spinnerStyle = {
  width: "48px",
  height: "48px",
  border: "4px solid rgba(255, 255, 255, 0.3)",
  borderTop: "4px solid #FF3B5C",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const playPauseIconStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80px",
  height: "80px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  pointerEvents: "none",
  zIndex: 3,
};

export const VideoCard = ({ videoData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likesCount, setLikesCount] = useState(videoData.likes);
  const [sharesCount, setSharesCount] = useState(videoData.shares || 234);
  const [bookmarksCount, setBookmarksCount] = useState(
    videoData.bookmarks || 89
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setBookmarksCount(isBookmarked ? bookmarksCount - 1 : bookmarksCount + 1);
  };

  const handleShare = () => {
    setSharesCount(sharesCount + 1);
    // 実際のシェア機能はここに実装
    if (navigator.share) {
      navigator
        .share({
          title: videoData.description,
          url: window.location.href,
        })
        .catch(() => {});
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [showPlayIcon, setShowPlayIcon] = useState(false);

  const handleVideoClick = () => {
    togglePlayPause();
    setShowPlayIcon(true);
    setTimeout(() => setShowPlayIcon(false), 500);
  };

  return (
    <div style={cardStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 0.9; }
          }
        `}
      </style>

      {isLoading && (
        <div style={loadingStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}

      <div
        style={{
          ...playPauseIconStyle,
          opacity: showPlayIcon ? 0.9 : 0,
          animation: showPlayIcon ? "fadeIn 0.3s ease" : "none",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
          {isPlaying ? (
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          ) : (
            <path d="M8 5v14l11-7z" />
          )}
        </svg>
      </div>

      <video
        ref={videoRef}
        src={videoData.videoUrl}
        style={videoStyle}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={handleLoadedData}
        onClick={handleVideoClick}
      />

      <div style={overlayStyle}>
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
          comments={videoData.comments.length}
          shares={sharesCount}
          bookmarks={bookmarksCount}
          isLiked={isLiked}
          isBookmarked={isBookmarked}
          onLike={handleLike}
          onBookmark={handleBookmark}
          onShare={handleShare}
        />
      </div>
    </div>
  );
};
