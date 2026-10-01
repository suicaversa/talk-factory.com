# 検定ビルダー ランディングページ

あなたのオリジナル検定を簡単に作成・運営できるプラットフォーム「検定ビルダー」のランディングページです。

## 🚀 デプロイ

### Cloudflare Pages

このプロジェクトはCloudflare Pages用に最適化されています。

#### 自動デプロイ（推奨）

1. GitHubリポジトリにプッシュ
2. [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project
3. GitHubリポジトリを接続
4. 以下の設定を入力：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18` または `20`

#### 手動デプロイ

```bash
npm run build
# distフォルダの内容をCloudflare Pagesにアップロード
```

### 設定ファイル

- `_headers`: セキュリティヘッダーとキャッシュ設定
- `_redirects`: HTTPSリダイレクトとSPAフォールバック
- `robots.txt`: SEO用
- `sitemap.xml`: サイトマップ
- `manifest.json`: PWA対応

## 🛠 開発

### 必要な環境

- Node.js 18以上
- npm

### セットアップ

```bash
npm install
npm run dev
```

開発サーバーが `http://localhost:3001` で起動します。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

### コード品質

```bash
npm run lint    # ESLintチェック
npm run format  # Prettierフォーマット
```

## 📁 プロジェクト構造

```
kentei-builder.com/
├── public/                 # 静的ファイル
│   ├── assets/
│   │   └── videos/
│   │       └── demo.mp4   # デモ動画
│   │   └── images/
│   │       └── kentei-builder-logo.png   # ロゴ画像
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── 404.html
├── src/                   # ソースファイル
│   ├── styles/
│   │   └── main.css      # TailwindCSSスタイル
│   └── scripts/
│       └── main.js       # JavaScript
├── index.html            # メインHTML
├── _headers              # Cloudflare Pages設定
├── _redirects            # Cloudflare Pages設定
├── package.json
├── vite.config.js        # Viteビルド設定
├── tailwind.config.js    # TailwindCSS設定
└── postcss.config.js     # PostCSS設定
```

## 🎨 技術スタック

- **フレームワーク**: Vite
- **CSS**: TailwindCSS
- **JavaScript**: ES6+ (Vanilla)
- **フォント**: Google Fonts (Noto Sans JP)
- **アイコン**: Font Awesome
- **デプロイ**: Cloudflare Pages

## 📱 機能

- ✅ レスポンシブデザイン
- ✅ SEO最適化
- ✅ アクセシビリティ対応
- ✅ PWA対応
- ✅ パフォーマンス最適化
- ✅ セキュリティヘッダー

## 🔧 カスタマイズ

### カラーパレット

`tailwind.config.js` でカスタムカラーを設定済み：

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... 他の色
  }
}
```

### アニメーション

カスタムアニメーションは `src/styles/main.css` で定義。

## 📄 ライセンス

© 2025 合同会社グラウス (Grouse LLC). All rights reserved.

## 📞 お問い合わせ

- ウェブサイト: https://kentei-builder.com
- メール: info@kentei-builder.com 