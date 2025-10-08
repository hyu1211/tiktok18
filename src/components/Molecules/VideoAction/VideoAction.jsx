// src/components/Molecules/VideoAction/VideoAction.jsx
import React from "react";
import { Icon } from "@/components/Atoms/Icon/Icon";
import { Typography } from "@/components/Atoms/Typography/Typography";
import styles from "./VideoAction.module.css";

export const VideoAction = ({ iconName, count, onClick, isLiked }) => {
  const actionClasses = [styles.videoAction, isLiked && styles.actionLiked]
    .filter(Boolean)
    .join(" ");

  return (
    <div onClick={onClick} className={actionClasses}>
      <div className={styles.actionButton}>
        <Icon
          name={iconName}
          size="large"
          color={isLiked ? "red" : "white"}
          isFilled={isLiked}
        />
      </div>
      <Typography variant="caption" className={styles.actionCount}>
        {count}
      </Typography>
    </div>
  );
};
