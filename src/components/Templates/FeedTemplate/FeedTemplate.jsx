// src/components/Templates/FeedTemplate/FeedTemplate.jsx
import React from "react";
import styles from "./FeedTemplate.module.css";

export const FeedTemplate = ({ headerContent, children }) => {
  return (
    <div className={styles.feedTemplate}>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>{headerContent}</h2>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
