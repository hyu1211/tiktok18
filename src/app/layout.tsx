export const metadata = {
  title: "TikTok風動画アプリ",
  description: "簡易的な動画再生アプリ",
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
