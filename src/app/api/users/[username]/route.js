// src/app/api/users/[username]/route.js
import { NextResponse } from "next/server";

// ユーザーデータのモックデータ
const users = {
  default_user: {
    id: 1,
    name: "default_user",
    displayName: "デフォルトユーザー",
    avatarUrl: "https://i.pravatar.cc/150?u=default",
    bio: "こんにちは！動画を投稿しています。",
    stats: {
      following: 245,
      followers: 1234,
      likes: 5678,
    },
    videos: [
      {
        id: 1,
        videoUrl: "/videos/sample1.mp4",
        thumbnailUrl: "/thumbnails/sample1.jpg",
        likes: 123,
        comments: 45,
      },
      {
        id: 2,
        videoUrl: "/videos/sample2.mp4",
        thumbnailUrl: "/thumbnails/sample2.jpg",
        likes: 89,
        comments: 23,
      },
      {
        id: 3,
        videoUrl: "/videos/sample3.mp4",
        thumbnailUrl: "/thumbnails/sample3.jpg",
        likes: 234,
        comments: 67,
      },
    ],
  },
  test_user: {
    id: 2,
    name: "test_user",
    displayName: "テストユーザー",
    avatarUrl: "https://i.pravatar.cc/150?u=test",
    bio: "テスト用のアカウントです。",
    stats: {
      following: 123,
      followers: 567,
      likes: 2345,
    },
    videos: [
      {
        id: 4,
        videoUrl: "/videos/sample4.mp4",
        thumbnailUrl: "/thumbnails/sample4.jpg",
        likes: 56,
        comments: 12,
      },
    ],
  },
};

export async function GET(request, { params }) {
  const { username } = params;

  try {
    const userData = users[username];

    if (!userData) {
      return NextResponse.json(
        { error: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json(userData);
  } catch (error) {
    console.error("ユーザーデータの取得エラー:", error);
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
