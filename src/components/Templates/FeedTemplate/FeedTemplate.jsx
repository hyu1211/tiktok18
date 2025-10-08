// src/components/4_templates/FeedTemplate.jsx
import React from "react";

const containerStyle = {
  width: "100%",
  maxWidth: "450px", // スマホ画面のような幅に固定
  margin: "0 auto",
  height: "100vh",
  overflowY: "scroll", // 縦スクロールを有効に
  scrollSnapType: "y mandatory", // 縦方向のスクロールスナップを強制
  position: "relative",
  scrollbarWidth: "none", // Firefox用
  msOverflowStyle: "none", // IE/Edge用
};

const headerStyle = {
  position: "sticky",
  top: 0,
  left: 0,
  width: "100%",
  textAlign: "center",
  padding: "16px",
  zIndex: 2,
  color: "white",
  backgroundColor: "rgba(0,0,0,0.8)",
  backdropFilter: "blur(10px)",
};

// Webkitブラウザ用のスクロールバー非表示
const scrollbarHideStyle = `
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const FeedTemplate = ({ headerContent, children }) => {
  return (
    <div>
      <style>{scrollbarHideStyle}</style>
      <header style={headerStyle}>
        <h2>{headerContent}</h2>
      </header>
      <main style={containerStyle}>{children}</main>
    </div>
  );
};
