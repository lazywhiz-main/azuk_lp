# azuk ランディングページ

azukアプリのランディングページです。

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm start
```

## プロジェクト構造

```
azuk_lp/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   └── globals.css        # グローバルスタイル
├── components/
│   ├── icons/             # アイコンコンポーネント
│   │   ├── tab-bar/       # タブバーアイコン
│   │   └── actions/       # アクションアイコン
│   ├── sections/          # セクションコンポーネント
│   ├── ui/                # UIコンポーネント
│   └── animations/        # アニメーションコンポーネント
├── lib/                   # ユーティリティ
└── docs/                  # デザインサンプル（参考用）
```

## デザインシステム

### カラーパレット

- **Primary**: `#1B222E` (鉄紺)
- **Background**: `#FAF9F6` (生成り)
- **Surface**: `#FFFFFF` (白練)
- **Accent**: `#C25E40` (土器色)
- **Secondary**: `#D99F59` (琥珀)
- **Text Sub**: `#64748B` (鉛色)
- **Border**: `#E2E8F0` (薄墨)

### タイポグラフィ

- **フォント**: Noto Sans JP
- **見出し1**: 32px (h1)
- **見出し2**: 24px (h2)
- **見出し3**: 20px (h3)
- **本文**: 16px (p)

## セクション

1. **HeroSection**: 重力エリア（情報ノイズアニメーション付き）
2. **FeatureSection**: 3つの主要機能紹介（アイコン統合）
3. **SecuritySection**: セキュリティとプライバシー
4. **PlanSection**: Free/Premiumプラン比較
5. **FAQSection**: よくある質問
6. **Footer**: フッター

## デプロイ

Vercelへのデプロイを推奨します。

```bash
npm install -g vercel
vercel
```

## ライセンス

© 2025 azuk. All rights reserved.




