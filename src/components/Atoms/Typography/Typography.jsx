// src/components/1_atoms/Typography.jsx
"use client";
import React from "react";
import styles from "./Typography.module.css";

const getTypographyClasses = (
  variant,
  color,
  align,
  weight,
  underline,
  lineThrough
) => {
  const baseClass = styles.typography;

  const variantClass =
    {
      h1: styles.typographyH1,
      h2: styles.typographyH2,
      h3: styles.typographyH3,
      body: styles.typographyBody,
      "body-large": styles.typographyBodyLarge,
      caption: styles.typographyCaption,
      small: styles.typographySmall,
    }[variant] || styles.typographyBody;

  const colorClass =
    {
      primary: styles.typographyColorPrimary,
      secondary: styles.typographyColorSecondary,
      white: styles.typographyColorWhite,
      error: styles.typographyColorError,
    }[color] || styles.typographyColorPrimary;

  const alignClass =
    {
      center: styles.typographyAlignCenter,
      right: styles.typographyAlignRight,
      left: styles.typographyAlignLeft,
    }[align] || "";

  const weightClass =
    {
      light: styles.typographyWeightLight,
      normal: styles.typographyWeightNormal,
      medium: styles.typographyWeightMedium,
      semibold: styles.typographyWeightSemibold,
      bold: styles.typographyWeightBold,
    }[weight] || "";

  const decorationClass = underline ? styles.typographyUnderline : "";
  const lineThroughClass = lineThrough ? styles.typographyLineThrough : "";

  return [
    baseClass,
    variantClass,
    colorClass,
    alignClass,
    weightClass,
    decorationClass,
    lineThroughClass,
  ]
    .filter(Boolean)
    .join(" ");
};

export const Typography = ({
  variant = "body",
  children,
  color = "primary",
  align = "left",
  weight = "normal",
  underline = false,
  lineThrough = false,
  className = "",
  ...props
}) => {
  const Component = ["h1", "h2", "h3"].includes(variant) ? variant : "p";

  const typographyClasses = [
    getTypographyClasses(variant, color, align, weight, underline, lineThrough),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={typographyClasses} {...props}>
      {children}
    </Component>
  );
};
