export const metadata = {
  title: "InspireUp - 動画共有プラットフォーム",
  description:
    "ダンス、料理、ペット、フィットネス、メイクなどの動画を共有・発見できるプラットフォーム。みんなのクリエイティビティをインスパイアしよう！",
  keywords: [
    "動画",
    "共有",
    "ダンス",
    "料理",
    "ペット",
    "フィットネス",
    "メイク",
    "クリエイティブ",
  ],
  authors: [{ name: "InspireUpチーム" }],
  creator: "InspireUp",
  publisher: "InspireUp",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InspireUp - 動画共有プラットフォーム",
    description:
      "ダンス、料理、ペット、フィットネス、メイクなどの動画を共有・発見できるプラットフォーム",
    url: "/",
    siteName: "InspireUp",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InspireUp - 動画共有プラットフォーム",
    description:
      "ダンス、料理、ペット、フィットネス、メイクなどの動画を共有・発見できるプラットフォーム",
    creator: "@inspireup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    background-color: #000;
    color: #fff;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    height: 100%;
  }

  /* タップ時のハイライト効果を削除 */
  * {
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  /* テキストは選択可能に */
  p, span, h1, h2, h3, h4, h5, h6 {
    user-select: text;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <style>{globalStyles}</style>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
