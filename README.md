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

### 環境変数の設定

お問い合わせフォームのメール送信機能を使用するには、ResendのAPIキーが必要です。

1. **Resendアカウントの作成とAPIキーの取得**
   - [Resend](https://resend.com) にアクセスしてアカウントを作成
   - [API Keys](https://resend.com/api-keys) ページからAPIキーを取得
   - APIキーは `re_` で始まる文字列です

2. **環境変数ファイルの作成**
   
   プロジェクトルートに `.env.local` ファイルを作成し、以下の内容を追加してください：

   ```bash
   # Resend API Key
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

   # Contact Email (optional)
   # お問い合わせメールの送信先（デフォルト: contact_azuk@lazywhiz.io）
   CONTACT_EMAIL=contact_azuk@lazywhiz.io
   ```

3. **Vercelなどの本番環境での設定**
   
   Vercelにデプロイする場合、Vercelのダッシュボードで環境変数を設定してください：
   - Settings → Environment Variables
   - `RESEND_API_KEY` と `CONTACT_EMAIL` を追加

**注意**: `.env.local` ファイルは `.gitignore` に含まれているため、Gitにはコミットされません。

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




