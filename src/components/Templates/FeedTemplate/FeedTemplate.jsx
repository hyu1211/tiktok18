// src/components/4_templates/FeedTemplate.jsx
"use client";
import React from "react";

const wrapperStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "450px",
  margin: "0 auto",
  height: "100vh",
  overflow: "hidden",
};

const containerStyle = {
  width: "100%",
  height: "100vh",
  overflowY: "scroll", // 縦スクロールを有効に
  scrollSnapType: "y mandatory", // 縦方向のスクロールスナップを強制
  scrollbarWidth: "none", // Firefox用
  msOverflowStyle: "none", // IE/Edge用
};

const headerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  textAlign: "center",
  padding: "16px",
  zIndex: 10,
  color: "white",
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)",
  pointerEvents: "none", // ヘッダーの下の要素をクリック可能に
};

// Webkitブラウザ用のスクロールバー非表示
const scrollbarHideStyle = `
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FeedTemplate = ({ headerContent, children }) => {
  return (
    <div style={wrapperStyle}>
      <style>{scrollbarHideStyle}</style>
      <header style={headerStyle}>
        <h2
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)",
          }}
        >
          {headerContent}
        </h2>
      </header>
      <main style={containerStyle}>{children}</main>
    </div>
  );
};
