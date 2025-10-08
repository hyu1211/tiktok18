// src/app/page.jsx
"use client"; // クライアントコンポーネントとして指定

import React, { useState, useEffect } from "react";
import { FeedTemplate } from "@/components/Templates/FeedTemplate/FeedTemplate";
import { VideoCard } from "@/components/Organisms/VideoCard/VideoCard";

export default function HomePage() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("/api/videos");
      const data = await response.json();
      setVideoData(data);
    };

    fetchVideos();
  }, []);

  return (
    <FeedTemplate headerContent="おすすめ">
      {videoData.map((video) => (
        <VideoCard key={video.id} videoData={video} />
      ))}
    </FeedTemplate>
  );
}