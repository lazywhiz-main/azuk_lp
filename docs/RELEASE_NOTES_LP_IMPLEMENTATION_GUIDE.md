# LPプロジェクト向け: リリースノート実装ガイド

**対象**: LPプロジェクト開発者  
**作成日**: 2026年1月13日  
**目的**: リリースノートページの実装指示

---

## 📋 目次

1. [概要](#概要)
2. [要件](#要件)
3. [ファイル構造](#ファイル構造)
4. [デザイン要件](#デザイン要件)
5. [実装方法](#実装方法)
6. [Markdown変換](#markdown変換)
7. [実装例](#実装例)

---

## 🎯 概要

### 目的

アプリ内からWebViewで表示されるリリースノートページを実装します。

### URL

- **本番環境**: `https://www.azuk.jp/release-notes`
- **開発環境**: 適宜設定

### データソース

アプリプロジェクトから以下のディレクトリに`.md`ファイルがコピーされます：
```
lp-project/release-notes/
├── v1.0.1.md
├── v1.0.2.md
└── ...
```

---

## 📝 要件

### 機能要件

1. **リリースノート一覧ページ**
   - バージョン一覧を表示（新しい順）
   - 各バージョンのサマリーを表示
   - 各バージョンの詳細ページへのリンク

2. **リリースノート詳細ページ**
   - 各バージョンのリリースノート全文を表示
   - Markdown形式のコンテンツをHTMLに変換して表示

3. **レスポンシブ対応**
   - モバイル（アプリ内WebView）対応
   - デスクトップ対応

### 非機能要件

1. **パフォーマンス**
   - ページ読み込み速度の最適化
   - 画像の最適化（必要に応じて）

2. **アクセシビリティ**
   - 適切な見出し構造
   - スクリーンリーダー対応

3. **SEO**
   - 適切なメタタグ設定（オプション）

---

## 📁 ファイル構造

### 推奨構造

```
lp-project/
├── release-notes/
│   ├── index.html          # リリースノート一覧
│   ├── v1.0.1.html         # v1.0.1の詳細ページ
│   ├── v1.0.2.html         # v1.0.2の詳細ページ
│   └── ...
├── release-notes/
│   ├── v1.0.1.md           # アプリプロジェクトからコピーされたMarkdown
│   ├── v1.0.2.md           # アプリプロジェクトからコピーされたMarkdown
│   └── ...
└── scripts/
    └── build-release-notes.js  # MarkdownをHTMLに変換するスクリプト（オプション）
```

### 代替構造（動的生成）

```
lp-project/
├── release-notes/
│   ├── index.html          # リリースノート一覧（動的生成）
│   └── [version].html       # 各バージョンの詳細ページ（動的生成）
├── release-notes/
│   ├── v1.0.1.md
│   ├── v1.0.2.md
│   └── ...
└── scripts/
    └── build-release-notes.js  # MarkdownをHTMLに変換するスクリプト
```

---

## 🎨 デザイン要件

### azukのデザインシステム

**トーン**: 「ドライだけど暖かい（Neutral Kindness）」

#### カラーパレット

```css
/* プライマリカラー */
--color-primary: #556AAB;
--color-primary-dark: #445588;

/* テキストカラー */
--color-text-primary: #1B222E;
--color-text-secondary: #4A5568;
--color-text-tertiary: #718096;

/* 背景カラー */
--color-bg-base: #FFFFFF;
--color-bg-secondary: #FAF9F6;
--color-bg-tertiary: #F7FAFC;

/* ボーダーカラー */
--color-border: #E2E8F0;

/* アクセントカラー */
--color-accent: #556AAB;
```

#### タイポグラフィ

```css
/* 見出し */
h1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text-primary);
  margin-top: 32px;
  margin-bottom: 12px;
}

h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text-primary);
  margin-top: 24px;
  margin-bottom: 8px;
}

/* 本文 */
body {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-primary);
}

p {
  margin-bottom: 16px;
}

/* リスト */
ul, ol {
  margin-bottom: 16px;
  padding-left: 24px;
}

li {
  margin-bottom: 8px;
}
```

#### レイアウト

```css
/* コンテナ */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 16px;
}

/* カード */
.card {
  background: var(--color-bg-base);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}

/* 余白 */
.section {
  margin-bottom: 32px;
}
```

### デザイン原則

1. **余白を残す**: 適切な余白で読みやすさを確保
2. **事実のみを提示**: 過度な装飾や誘導を避ける
3. **シンプルな構造**: 明確な階層構造
4. **モバイルファースト**: アプリ内WebViewでの表示を優先

---

## 💻 実装方法

### オプション1: 静的HTML生成（推奨）

**メリット**:
- パフォーマンスが高い
- SEO対応が容易
- デプロイが簡単

**実装手順**:
1. ビルド時にMarkdownをHTMLに変換
2. 静的HTMLファイルを生成
3. デプロイ

### オプション2: 動的生成（SSR/SSG）

**メリット**:
- 更新が容易
- 管理が簡単

**実装手順**:
1. リクエスト時にMarkdownを読み込んでHTMLに変換
2. キャッシュを活用

### オプション3: クライアントサイド変換

**メリット**:
- 実装が簡単
- リアルタイム変換

**デメリット**:
- パフォーマンスがやや劣る
- SEO対応が難しい

---

## 📄 Markdown変換

### 使用ライブラリ（推奨）

#### Node.js環境（ビルド時変換）

**marked**:
```bash
npm install marked
```

**markdown-it**:
```bash
npm install markdown-it
```

#### ブラウザ環境（クライアントサイド変換）

**marked**:
```bash
npm install marked
```

**markdown-it**:
```bash
npm install markdown-it
```

### 変換例（marked使用）

```javascript
const { marked } = require('marked');
const fs = require('fs');

// Markdownファイルを読み込む
const markdown = fs.readFileSync('release-notes/v1.0.1.md', 'utf8');

// HTMLに変換
const html = marked(markdown);

// HTMLファイルに書き込む
fs.writeFileSync('release-notes/v1.0.1.html', html);
```

---

## 📝 実装例

### リリースノート一覧ページ（index.html）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>リリースノート - azuk</title>
  <style>
    /* azukのデザインシステムに準拠したスタイル */
    :root {
      --color-primary: #556AAB;
      --color-text-primary: #1B222E;
      --color-text-secondary: #4A5568;
      --color-text-tertiary: #718096;
      --color-bg-base: #FFFFFF;
      --color-bg-secondary: #FAF9F6;
      --color-border: #E2E8F0;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: var(--color-text-primary);
      background: var(--color-bg-secondary);
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 24px 16px;
    }

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 32px;
      color: var(--color-text-primary);
    }

    .release-item {
      background: var(--color-bg-base);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 16px;
      transition: all 0.2s ease;
    }

    .release-item:hover {
      border-color: var(--color-primary);
    }

    .release-item a {
      text-decoration: none;
      color: inherit;
    }

    .release-version {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-primary);
      margin-bottom: 8px;
    }

    .release-date {
      font-size: 14px;
      color: var(--color-text-tertiary);
      margin-bottom: 12px;
    }

    .release-summary {
      font-size: 16px;
      color: var(--color-text-secondary);
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>リリースノート</h1>

    <div class="release-item">
      <a href="v1.0.1.html">
        <div class="release-version">azuk v1.0.1</div>
        <div class="release-date">2026年1月13日</div>
        <div class="release-summary">
          記録、ロードマップ、家族共有機能を追加しました。
        </div>
      </a>
    </div>

    <!-- 他のバージョンも同様に追加 -->
  </div>
</body>
</html>
```

### リリースノート詳細ページ（v1.0.1.html）

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>azuk v1.0.1 リリースノート</title>
  <style>
    /* azukのデザインシステムに準拠したスタイル */
    :root {
      --color-primary: #556AAB;
      --color-text-primary: #1B222E;
      --color-text-secondary: #4A5568;
      --color-text-tertiary: #718096;
      --color-bg-base: #FFFFFF;
      --color-bg-secondary: #FAF9F6;
      --color-border: #E2E8F0;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: var(--color-text-primary);
      background: var(--color-bg-secondary);
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 24px 16px;
    }

    .content {
      background: var(--color-bg-base);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px 24px;
    }

    h1 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--color-text-primary);
    }

    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-top: 32px;
      margin-bottom: 12px;
      color: var(--color-text-primary);
    }

    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-top: 24px;
      margin-bottom: 8px;
      color: var(--color-text-primary);
    }

    p {
      margin-bottom: 16px;
      color: var(--color-text-secondary);
    }

    ul, ol {
      margin-bottom: 16px;
      padding-left: 24px;
      color: var(--color-text-secondary);
    }

    li {
      margin-bottom: 8px;
    }

    .back-link {
      display: inline-block;
      margin-bottom: 24px;
      color: var(--color-primary);
      text-decoration: none;
      font-size: 14px;
    }

    .back-link:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <a href="index.html" class="back-link">← リリースノート一覧に戻る</a>

    <div class="content">
      <!-- Markdownから変換されたHTMLをここに挿入 -->
      <h1>azuk v1.0.1</h1>
      <p>記録、ロードマップ、家族共有機能を追加しました。</p>

      <h2>主な変更点</h2>
      <ul>
        <li>記録機能を追加</li>
        <li>ロードマップ機能を追加</li>
        <li>家族共有機能を追加</li>
        <li>ステップの編集・追加・削除機能を追加</li>
      </ul>
    </div>
  </div>
</body>
</html>
```

---

## 🔧 ビルドスクリプト例

### Node.js + marked使用

**ファイル**: `scripts/build-release-notes.js`

```javascript
const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

// 設定
const SOURCE_DIR = path.join(__dirname, '../release-notes');
const OUTPUT_DIR = path.join(__dirname, '../release-notes');

// Markdownの設定
marked.setOptions({
  breaks: true,
  gfm: true,
});

// リリースノート一覧を生成
function buildIndex() {
  const files = fs.readdirSync(SOURCE_DIR)
    .filter(file => file.endsWith('.md'))
    .sort()
    .reverse(); // 新しい順

  const releases = files.map(file => {
    const version = file.replace('.md', '');
    const content = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
    const summary = content.split('\n')[2] || ''; // 3行目をサマリーとして使用

    return {
      version,
      summary,
      file: `${version}.html`,
    };
  });

  // HTMLを生成
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>リリースノート - azuk</title>
  <!-- スタイルは上記の実装例を参照 -->
</head>
<body>
  <div class="container">
    <h1>リリースノート</h1>
    ${releases.map(release => `
      <div class="release-item">
        <a href="${release.file}">
          <div class="release-version">azuk ${release.version}</div>
          <div class="release-summary">${release.summary}</div>
        </a>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), html);
}

// 各バージョンの詳細ページを生成
function buildDetailPages() {
  const files = fs.readdirSync(SOURCE_DIR)
    .filter(file => file.endsWith('.md'));

  files.forEach(file => {
    const version = file.replace('.md', '');
    const markdown = fs.readFileSync(path.join(SOURCE_DIR, file), 'utf8');
    const html = marked(markdown);

    const pageHtml = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>azuk ${version} リリースノート</title>
  <!-- スタイルは上記の実装例を参照 -->
</head>
<body>
  <div class="container">
    <a href="index.html" class="back-link">← リリースノート一覧に戻る</a>
    <div class="content">
      ${html}
    </div>
  </div>
</body>
</html>`;

    fs.writeFileSync(path.join(OUTPUT_DIR, `${version}.html`), pageHtml);
  });
}

// 実行
buildIndex();
buildDetailPages();
console.log('リリースノートのビルドが完了しました');
```

**package.jsonに追加**:
```json
{
  "scripts": {
    "build-release-notes": "node scripts/build-release-notes.js"
  }
}
```

---

## ✅ チェックリスト

### 実装前

- [ ] ファイル構造を決定
- [ ] Markdown変換ライブラリを選択
- [ ] デザインシステムを確認

### 実装中

- [ ] リリースノート一覧ページを作成
- [ ] リリースノート詳細ページを作成
- [ ] Markdown変換を実装
- [ ] スタイリングを実装
- [ ] レスポンシブ対応

### 実装後

- [ ] アプリ内WebViewで表示確認
- [ ] デスクトップブラウザで表示確認
- [ ] パフォーマンステスト
- [ ] アクセシビリティテスト

---

## 🔗 関連ファイル

- `docs/RELEASE_NOTES/public/v1.0.1.md` - リリースノートのサンプル
- `docs/designsystem/brandsystem.md` - azukのデザインシステム

---

## 📞 質問・相談

実装に関する質問や相談がある場合は、アプリプロジェクトの開発者に連絡してください。

---

**最終更新**: 2026年1月13日  
**ステータス**: 📋 LPプロジェクト向け実装ガイド完成

