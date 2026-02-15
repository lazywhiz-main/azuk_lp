# リリースノート実装提案

## 📋 実装方針

Next.js 15のApp Routerを使用した**SSG（Static Site Generation）**による実装を提案します。

### 推奨アプローチ

**Next.jsの動的ルート + SSG（推奨）**

- `/release-notes` - 一覧ページ
- `/release-notes/[version]` - 詳細ページ（動的ルート）
- ビルド時にMarkdownファイルを読み込んで静的生成
- パフォーマンスが高く、SEOにも有利

## 📁 ファイル構造

```
azuk_lp/
├── app/
│   ├── release-notes/
│   │   ├── page.tsx              # 一覧ページ
│   │   └── [version]/
│   │       └── page.tsx          # 詳細ページ（動的ルート）
│   └── ...
├── release-notes/                # Markdownファイル格納ディレクトリ
│   ├── v1.0.1.md
│   ├── v1.0.2.md
│   └── ...
└── lib/
    └── release-notes.ts          # リリースノート読み込みユーティリティ
```

## 🛠️ 実装手順

### 1. 必要なパッケージのインストール

```bash
npm install marked
npm install --save-dev @types/marked
```

または、Reactコンポーネントとして使いたい場合：

```bash
npm install react-markdown remark-gfm
```

### 2. リリースノート読み込みユーティリティ

`lib/release-notes.ts`を作成して、Markdownファイルを読み込む関数を実装。

### 3. 一覧ページの実装

`app/release-notes/page.tsx`で、すべてのリリースノートを一覧表示。

### 4. 詳細ページの実装

`app/release-notes/[version]/page.tsx`で、動的ルートを使用して各バージョンの詳細を表示。

## 🎨 デザインシステム

既存のazukのデザインシステム（Tailwind CSS）を使用：
- カラーパレット: `primary`, `background`, `surface`, `text-sub`, `border`
- タイポグラフィ: Noto Sans JP
- レイアウト: Containerコンポーネントを使用

## 📝 実装のポイント

1. **Markdown変換**
   - `marked`または`react-markdown`を使用
   - コードブロック、リスト、見出しなどを適切にスタイリング

2. **メタデータ抽出**
   - Markdownファイルからバージョン、日付、サマリーを抽出
   - フロントマター（YAML）を使用するか、ファイル名から抽出

3. **ソート**
   - バージョン番号で新しい順にソート
   - セマンティックバージョニングに対応

4. **エラーハンドリング**
   - 存在しないバージョンへのアクセス時は404を表示

## 🔄 データフロー

```
アプリプロジェクト
    ↓ (コピー)
release-notes/*.md
    ↓ (ビルド時読み込み)
Next.js App Router
    ↓ (SSG)
静的HTML生成
```

## ✅ メリット

1. **パフォーマンス**: ビルド時に静的生成されるため高速
2. **SEO**: 静的HTMLなので検索エンジンに最適
3. **管理が簡単**: Markdownファイルを追加するだけで自動的にページが生成
4. **既存システムとの統合**: Next.jsのApp Routerを使用しているため、既存のデザインシステムと統一

## 🚀 次のステップ

実装を進める場合は、以下を確認してください：

1. Markdownファイルの配置場所（`release-notes/`ディレクトリ）
2. メタデータの形式（フロントマター or ファイル名から抽出）
3. スタイリングの詳細（既存のデザインシステムとの統合）

