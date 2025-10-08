// src/components/Templates/FeedTemplate/FeedTemplate.jsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/Atoms/Icon/Icon";
import styles from "./FeedTemplate.module.css";

export const FeedTemplate = ({ children }) => {
  const router = useRouter();

  const handleNavigation = (destination) => {
    switch (destination) {
      case "home":
        // ホームは現在のページなので何もしないか、ルートに戻る
        router.push("/");
        break;
      case "search":
        // 検索ページ（まだ実装されていないので、仮実装）
        console.log("検索ページに遷移します");
        // router.push("/search"); // 実装後に有効化
        break;
      case "message":
        // メッセージページ（まだ実装されていないので、仮実装）
        console.log("メッセージページに遷移します");
        // router.push("/messages"); // 実装後に有効化
        break;
      case "post":
        // 動画投稿ページ（まだ実装されていないので、仮実装）
        console.log("動画投稿ページに遷移します");
        // router.push("/post"); // 実装後に有効化
        break;
      case "profile":
        // プロフィールページに遷移（デフォルトユーザーを使用）
        router.push("/user/default_user");
        break;
      default:
        console.log(`未実装のナビゲーション: ${destination}`);
    }
  };

  return (
    <div className={styles.feedTemplate}>
      <main className={styles.main}>{children}</main>
      <nav className={styles.navbar}>
        <button
          className={`${styles.navButton} ${styles.navButtonActive}`}
          onClick={() => handleNavigation("home")}
        >
          <Icon name="home" size="medium" color="white" />
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("search")}
        >
          <Icon name="search" size="medium" color="white" />
        </button>
        <button
          className={`${styles.navButton} ${styles.navButtonCenter}`}
          onClick={() => handleNavigation("post")}
        >
          <Icon name="plus" size="large" color="white" />
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("message")}
        >
          <Icon name="message" size="medium" color="white" />
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("profile")}
        >
          <Icon name="user" size="medium" color="white" />
        </button>
      </nav>
    </div>
  );
};
