// src/app/api/videos/route.js
import { NextResponse } from "next/server";

const mockVideoData = [
  {
    id: 1,
    user: { name: "user_a", avatarUrl: "https://i.pravatar.cc/150?u=a" },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "This is a great video! #awesome",
    likes: 1234,
    comments: [{ id: 1, text: "cool!" }],
  },
  {
    id: 2,
    user: { name: "user_b", avatarUrl: "https://i.pravatar.cc/150?u=b" },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Check this out!",
    likes: 5678,
    comments: [
      { id: 1, text: "wow" },
      { id: 2, text: "amazing" },
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(mockVideoData);
}