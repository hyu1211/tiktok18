// src/app/page.jsx
"use client"; // クライアントコンポーネントとして指定

import React, { useState, useEffect } from "react";
import { FeedTemplate } from "@/components/Templates/FeedTemplate/FeedTemplate";
import { VideoCard } from "@/components/Organisms/VideoCard/VideoCard";

export default function HomePage() {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/videos");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || "APIエラー");
        }

        setVideoData(result.data);
      } catch (err) {
        console.error("動画データの取得に失敗しました:", err);
        setError("動画の読み込みに失敗しました。後でもう一度お試しください。");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    // 同じuseEffectが再実行されるので、明示的に再フェッチする必要はない
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">動画を読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">😵</div>
          <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            再試行
          </button>
        </div>
      </div>
    );
  }

  return (
    <FeedTemplate headerContent="おすすめ">
      {videoData.length > 0 ? (
        videoData.map((video) => <VideoCard key={video.id} videoData={video} />)
      ) : (
        <div className="flex items-center justify-center h-screen text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">📹</div>
            <p className="text-xl">動画がありません</p>
          </div>
        </div>
      )}
    </FeedTemplate>
  );
}
