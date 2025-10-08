// src/app/api/videos/route.js
import { NextResponse } from "next/server";

// より現実的な動画データ
const mockVideoData = [
  {
    id: 1,
    user: {
      name: "田中花子",
      avatarUrl: "https://i.pravatar.cc/150?u=tanaka_hanako",
      verified: true,
    },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description:
      "今日のダンス練習！みんなも一緒に踊ろう💃 #ダンス #練習 #楽しい",
    likes: 15420,
    bookmarks: 3420,
    shares: 1280,
    comments: [
      {
        id: 1,
        text: "かっこいい！✨",
        user: {
          name: "ダンス好き",
          avatarUrl: "https://i.pravatar.cc/150?u=dance_lover1",
        },
        createdAt: "2024-01-15T10:30:00Z",
      },
      {
        id: 2,
        text: "ステップ教えてください！",
        user: {
          name: "初心者ダンサー",
          avatarUrl: "https://i.pravatar.cc/150?u=beginner_dancer",
        },
        createdAt: "2024-01-15T11:15:00Z",
      },
      {
        id: 3,
        text: "毎日見てます！",
        user: {
          name: "ファン",
          avatarUrl: "https://i.pravatar.cc/150?u=fan1",
        },
        createdAt: "2024-01-15T12:00:00Z",
      },
    ],
    createdAt: "2024-01-15T09:00:00Z",
    musicTitle: "オリジナルミュージック",
    location: "東京スタジオ",
  },
  {
    id: 2,
    user: {
      name: "山田太郎",
      avatarUrl: "https://i.pravatar.cc/150?u=yamada_taro",
      verified: false,
    },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "新しいレシピに挑戦！激辛カレーを作ってみた🔥 辛すぎて涙目😂 #料理 #カレー #スパイシー",
    likes: 8234,
    bookmarks: 1850,
    shares: 720,
    comments: [
      {
        id: 1,
        text: "美味しそう！レシピ教えて！",
        user: {
          name: "料理好き",
          avatarUrl: "https://i.pravatar.cc/150?u=cooking_lover",
        },
        createdAt: "2024-01-14T15:20:00Z",
      },
      {
        id: 2,
        text: "辛そうだけど挑戦したい😋",
        user: {
          name: "スパイス好き",
          avatarUrl: "https://i.pravatar.cc/150?u=spice_lover",
        },
        createdAt: "2024-01-14T16:45:00Z",
      },
    ],
    createdAt: "2024-01-14T14:00:00Z",
    musicTitle: "スパイシーBGM",
    location: "自宅キッチン",
  },
  {
    id: 3,
    user: {
      name: "佐藤美咲",
      avatarUrl: "https://i.pravatar.cc/150?u=sato_misaki",
      verified: true,
    },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description:
      "ペットのうさぎが可愛すぎる🥺 今日も元気いっぱい！#うさぎ #ペット #可愛い",
    likes: 25680,
    bookmarks: 4850,
    shares: 2150,
    comments: [
      {
        id: 1,
        text: "可愛すぎます💕",
        user: {
          name: "動物好き",
          avatarUrl: "https://i.pravatar.cc/150?u=animal_lover1",
        },
        createdAt: "2024-01-13T18:30:00Z",
      },
      {
        id: 2,
        text: "私も飼いたい！",
        user: {
          name: "ペット候補",
          avatarUrl: "https://i.pravatar.cc/150?u=pet_candidate",
        },
        createdAt: "2024-01-13T19:15:00Z",
      },
      {
        id: 3,
        text: "耳がピクピクしてて可愛い😍",
        user: {
          name: "うさぎファン",
          avatarUrl: "https://i.pravatar.cc/150?u=rabbit_fan",
        },
        createdAt: "2024-01-13T20:00:00Z",
      },
    ],
    createdAt: "2024-01-13T17:00:00Z",
    musicTitle: "可愛いBGM",
    location: "リビング",
  },
  {
    id: 4,
    user: {
      name: "鈴木健一",
      avatarUrl: "https://i.pravatar.cc/150?u=suzuki_kenichi",
      verified: false,
    },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    description:
      "筋トレの成果が出始めました！継続は力なり💪 皆さんも一緒に頑張りましょう！#筋トレ #フィットネス #継続",
    likes: 12340,
    bookmarks: 2890,
    shares: 1450,
    comments: [
      {
        id: 1,
        text: "素晴らしい！モチベーション上がります！",
        user: {
          name: "筋トレ仲間",
          avatarUrl: "https://i.pravatar.cc/150?u=workout_buddy",
        },
        createdAt: "2024-01-12T08:00:00Z",
      },
      {
        id: 2,
        text: "どんなメニューやってるんですか？",
        user: {
          name: "トレーニング初心者",
          avatarUrl: "https://i.pravatar.cc/150?u=beginner_trainer",
        },
        createdAt: "2024-01-12T09:30:00Z",
      },
    ],
    createdAt: "2024-01-12T07:00:00Z",
    musicTitle: "ワークアウトミュージック",
    location: "ジム",
  },
  {
    id: 5,
    user: {
      name: "高橋あかり",
      avatarUrl: "https://i.pravatar.cc/150?u=takahashi_akari",
      verified: true,
    },
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    description:
      "新しいメイクに挑戦！春っぽいカラーで気分も上がる🌸 #メイク #コスメ #春メイク",
    likes: 18750,
    bookmarks: 3650,
    shares: 1890,
    comments: [
      {
        id: 1,
        text: "この色味可愛い！どこのコスメですか？",
        user: {
          name: "メイク好き",
          avatarUrl: "https://i.pravatar.cc/150?u=makeup_lover",
        },
        createdAt: "2024-01-11T14:20:00Z",
      },
      {
        id: 2,
        text: "マネしてみます！",
        user: {
          name: "フォロワー",
          avatarUrl: "https://i.pravatar.cc/150?u=follower1",
        },
        createdAt: "2024-01-11T15:45:00Z",
      },
    ],
    createdAt: "2024-01-11T13:00:00Z",
    musicTitle: "ポップミュージック",
    location: "メイクスペース",
  },
];

export async function GET(request) {
  try {
    // リクエストヘッダーを確認して、キャッシュ制御を行う
    const userAgent = request.headers.get("user-agent") || "";

    // ランダムな遅延を追加してより現実的にする（0-500ms）
    const delay = Math.floor(Math.random() * 500);
    await new Promise((resolve) => setTimeout(resolve, delay));

    // ランダムにエラーを発生させてエラーハンドリングをテストする（開発時のみ）
    if (process.env.NODE_ENV === "development" && Math.random() < 0.1) {
      throw new Error("シミュレートされたサーバーエラー");
    }

    return NextResponse.json({
      success: true,
      data: mockVideoData,
      total: mockVideoData.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("動画データの取得エラー:", error);

    return NextResponse.json(
      {
        success: false,
        error: "動画データの取得に失敗しました",
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "サーバーエラーが発生しました",
      },
      { status: 500 }
    );
  }
}
