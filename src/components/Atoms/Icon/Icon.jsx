// src/components/Atoms/Icon/Icon.jsx
"use client";
import React from "react";
import styles from "./Icon.module.css";

// アイコンのSVGデータを一元管理
const ICONS = {
  heart: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
  comment: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  ),
  bookmark: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  share: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  ),
  home: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5L12 3l9 6.5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9,22 9,12 15,12 15,22"></polyline>
    </svg>
  ),
  search: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
  ),
  plus: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
  user: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  message: (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
};

// 動的なアイコンコンポーネントを生成する関数
const createIconComponent = (name) => {
  return ({
    size = "medium",
    color = "primary",
    isFilled = false,
    className = "",
    style,
    ...props
  }) => {
    const iconSvg = ICONS[name];
    if (!iconSvg) {
      return null;
    }

    const sizeClass =
      {
        small: styles.iconSizeSmall,
        medium: styles.iconSizeMedium,
        large: styles.iconSizeLarge,
      }[size] || styles.iconSizeMedium;

    const colorClass =
      {
        primary: styles.iconColorPrimary,
        secondary: styles.iconColorSecondary,
        white: styles.iconColorWhite,
        red: styles.iconColorRed,
        error: styles.iconColorError,
        success: styles.iconColorSuccess,
      }[color] || styles.iconColorPrimary;

    const iconClasses = [
      styles.icon,
      sizeClass,
      colorClass,
      isFilled ? styles.iconFilled : styles.iconOutlined,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // SVGにisFilledプロパティを渡すためにReact.cloneElementを使用
    const svgWithProps = React.cloneElement(iconSvg, {
      ...iconSvg.props,
      ...props,
    });

    return (
      <div className={iconClasses} style={style}>
        {svgWithProps}
      </div>
    );
  };
};

// 個別のアイコンコンポーネントを作成
const HeartIcon = createIconComponent("heart");
const CommentIcon = createIconComponent("comment");
const BookmarkIcon = createIconComponent("bookmark");
const ShareIcon = createIconComponent("share");
const HomeIcon = createIconComponent("home");
const SearchIcon = createIconComponent("search");
const PlusIcon = createIconComponent("plus");
const UserIcon = createIconComponent("user");
const MessageIcon = createIconComponent("message");

export const Icon = ({ name, ...props }) => {
  switch (name) {
    case "heart":
      return <HeartIcon {...props} />;
    case "comment":
      return <CommentIcon {...props} />;
    case "bookmark":
      return <BookmarkIcon {...props} />;
    case "share":
      return <ShareIcon {...props} />;
    case "home":
      return <HomeIcon {...props} />;
    case "search":
      return <SearchIcon {...props} />;
    case "plus":
      return <PlusIcon {...props} />;
    case "user":
      return <UserIcon {...props} />;
    case "message":
      return <MessageIcon {...props} />;
    default:
      return null;
  }
};
