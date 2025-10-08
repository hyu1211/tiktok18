# InspireUp - 動画共有プラットフォーム 🎥

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg)](https://tailwindcss.com/)

ダンス、料理、ペット、フィットネス、メイクなどの動画を共有・発見できる革新的な動画共有プラットフォームです。みんなのクリエイティビティをインスパイアしよう！

## ✨ 特徴

- 🎬 **多様なコンテンツ**: ダンス、料理、ペット、フィットネス、メイクなど様々なカテゴリの動画
- 📱 **モダンな UI**: TikTok 風の直感的で美しいユーザーインターフェース
- 🔄 **リアルタイム更新**: コメントといいねのリアルタイム更新機能
- 🌟 **認証バッジ**: 人気クリエイターの認証バッジシステム
- 📍 **位置情報**: 動画の撮影場所情報表示
- 🎵 **BGM 情報**: 動画で使用された音楽情報

## 🚀 技術スタック

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, CSS Modules
- **Development**: ESLint, PostCSS
- **Deployment**: Vercel (推奨)

## 🛠️ 開発環境セットアップ

### 前提条件

- Node.js 18.x 以上
- npm, yarn, pnpm, または bun

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/inspireup.git
cd inspireup

# 依存関係のインストール
npm install
# または
yarn install
# または
pnpm install
# または
bun install
```

### 開発サーバーの起動

```bash
# 開発サーバーの起動
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認してください。

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API ルート
│   │   └── videos/        # 動画データ API
│   ├── layout.tsx         # ルートレイアウト
│   └── page.jsx           # メインページ
├── components/            # React コンポーネント
│   ├── Atoms/            # 基本コンポーネント
│   │   ├── Avatar/       # アバターコンポーネント
│   │   ├── Button/       # ボタンコンポーネント
│   │   ├── Input/        # 入力コンポーネント
│   │   └── Typography/   # テキストコンポーネント
│   ├── Molecules/        # 複合コンポーネント
│   │   ├── Comment/      # コメントコンポーネント
│   │   ├── CommentInputForm/ # コメント入力フォーム
│   │   └── UserInfo/     # ユーザー情報コンポーネント
│   ├── Organisms/        # 大きなコンポーネント
│   │   ├── CommentSection/ # コメントセクション
│   │   ├── Sidebar/      # サイドバーパネル
│   │   └── VideoCard/    # 動画カード
│   └── Templates/        # テンプレートコンポーネント
│       └── FeedTemplate/ # フィードテンプレート
└── globals.css           # グローバルスタイル
```

## 🎯 使用方法

1. **動画視聴**: ホーム画面で動画をスクロールして視聴できます
2. **いいね機能**: ハートアイコンをタップしていいねできます
3. **コメント機能**: コメントアイコンをタップしてコメントセクションを開き、コメントを投稿できます
4. **ユーザー情報**: 動画投稿者のプロフィール情報と認証バッジを確認できます

## 🔧 カスタマイズ

### 新しい動画の追加

`src/app/api/videos/route.js` を編集して新しい動画データを追加できます：

```javascript
{
  id: 6,
  user: {
    name: "新しいクリエイター",
    avatarUrl: "https://i.pravatar.cc/150?u=new_creator",
    verified: false
  },
  videoUrl: "動画のURL",
  description: "動画の説明文",
  likes: 1000,
  comments: [...],
  createdAt: "作成日時",
  musicTitle: "使用音楽",
  location: "撮影場所"
}
```

### スタイリングのカスタマイズ

各コンポーネントの `*.module.css` ファイルを編集してスタイルをカスタマイズできます。

## 🚀 デプロイ

### Vercel へのデプロイ（推奨）

1. [Vercel アカウント](https://vercel.com)を作成
2. リポジトリをインポート
3. 自動デプロイ設定

```bash
# 本番環境用のビルド確認
npm run build
npm run preview
```

### その他のプラットフォーム

他のプラットフォームへのデプロイも可能です：

```bash
# 静的ファイルのエクスポート（静的ホスティング用）
npm run build
npm run export
```

## 🤝 貢献

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - React フレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSS フレームワーク
- [Vercel](https://vercel.com/) - デプロイプラットフォーム
- [Google Fonts](https://fonts.google.com/) - フォント
- [Pravatar](https://pravatar.cc/) - アバター画像

## 📞 連絡先

ご質問や提案がありましたら、以下のいずれかでお気軽にご連絡ください：

- 📧 Email: contact@inspireup.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/inspireup/issues)
- 🐦 Twitter: [@inspireup](https://twitter.com/inspireup)

---

⭐️ 私たちのプラットフォームを気に入っていただけたら、スターを付けていただけると嬉しいです！
