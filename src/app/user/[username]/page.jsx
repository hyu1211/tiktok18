// src/app/user/[username]/page.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Typography } from "@/components/Atoms/Typography/Typography";
import { Button } from "@/components/Atoms/Button/Button";
import styles from "./profile.module.css";

const UserProfilePage = () => {
  const router = useRouter();
  const params = useParams();
  const { username } = params;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        setLoading(true);
        const res = await fetch(`/api/users/${decodeURIComponent(username)}`);
        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        }
        setLoading(false);
      };
      fetchUserData();
    }
  }, [username]);

  if (loading) {
    return (
      <div className={styles.centeredPage}>
        <p>読み込み中...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className={styles.centeredPage}>
        <p>ユーザーが見つかりません。</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={() => router.back()} className={styles.backButton}>
          ←
        </button>
        <Typography
          variant="h3"
          weight="bold"
          style={{ color: "#ffffff", fontSize: "1.25rem" }}
        >
          {userData.displayName}
        </Typography>
      </header>

      <main className={styles.main}>
        <section className={styles.profileSection}>
          <Avatar
            src={userData.avatarUrl}
            alt={userData.displayName}
            size={96}
            border
          />
          <Typography variant="h2" weight="bold" className={styles.username}>
            @{userData.name}
          </Typography>

          {userData.bio && (
            <Typography variant="body" className={styles.bio}>
              {userData.bio}
            </Typography>
          )}

          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <Typography
                variant="h3"
                weight="bold"
                className={styles.statNumber}
              >
                {userData.stats.following.toLocaleString()}
              </Typography>
              <Typography variant="caption" className={styles.statLabel}>
                フォロー中
              </Typography>
            </div>
            <div className={styles.statItem}>
              <Typography
                variant="h3"
                weight="bold"
                className={styles.statNumber}
              >
                {userData.stats.followers.toLocaleString()}
              </Typography>
              <Typography variant="caption" className={styles.statLabel}>
                フォロワー
              </Typography>
            </div>
            <div className={styles.statItem}>
              <Typography
                variant="h3"
                weight="bold"
                className={styles.statNumber}
              >
                {userData.stats.likes.toLocaleString()}
              </Typography>
              <Typography variant="caption" className={styles.statLabel}>
                いいね
              </Typography>
            </div>
          </div>

          <button className={styles.followButton}>フォロー</button>
        </section>

        <section className={styles.videoGrid}>
          {userData.videos.map((video) => (
            <div key={video.id} className={styles.videoThumbnail}>
              <video src={video.videoUrl} muted />
              <div className={styles.thumbnailOverlay}>
                <span className={styles.playIcon}>▶</span>
                <span className={styles.likesCount}>
                  {video.likes.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default UserProfilePage;
