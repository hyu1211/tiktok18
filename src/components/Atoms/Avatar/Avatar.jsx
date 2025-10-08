// src/components/1_atoms/Avatar.jsx
"use client";
import React from "react";
import styles from "./Avatar.module.css";

export const Avatar = ({
  src,
  alt,
  size = 48,
  border = false,
  className = "",
}) => {
  const getSizeClass = (size) => {
    if (size <= 32) return styles.avatarSizeSmall;
    if (size <= 48) return styles.avatarSizeMedium;
    if (size <= 64) return styles.avatarSizeLarge;
    return styles.avatarSizeXLarge;
  };

  const sizeClass = getSizeClass(size);
  const avatarClasses = [
    styles.avatar,
    sizeClass,
    border && styles.avatarBorder,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src={src}
      alt={alt}
      className={avatarClasses}
      width={size}
      height={size}
    />
  );
};
