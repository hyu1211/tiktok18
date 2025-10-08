"use client";
import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    disabled && styles.buttonDisabled,
    variant === "secondary" && styles.buttonVariantSecondary,
    variant === "outline" && styles.buttonVariantOutline,
    size === "small" && styles.buttonSizeSmall,
    size === "large" && styles.buttonSizeLarge,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
