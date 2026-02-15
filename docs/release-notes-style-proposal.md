# リリースノート詳細ページ スタイル提案

## 📊 現状分析

### 現在のリリースノート詳細ページ
- **本文（`p`）**: `text-text-sub`（グレー #64748B）
- **リスト（`ul`, `ol`）**: `text-text-sub`（グレー #64748B）
- **見出し（`h1`, `h2`, `h3`）**: `text-primary`（黒 #1B222E）
- **強調（`strong`）**: `text-primary`（黒 #1B222E）

### terms/privacyページ（参考）
- **本文（`p`）**: 色指定なし（デフォルトの`text-primary` = 黒 #1B222E）
- **リスト（`ol`, `ul`）**: 色指定なし（デフォルトの`text-primary` = 黒 #1B222E）
- **見出し（`h2`）**: `text-2xl font-semibold`（色指定なし = 黒 #1B222E）
- **強調（`strong`）**: 色指定なし（デフォルトの`text-primary` = 黒 #1B222E）

## 🎨 デザインシステムの定義

### カラー用途
- **`text-primary` (#1B222E)**: 主要テキスト、重要ボタン
- **`text-text-sub` (#64748B)**: 補足情報、日付

## 💡 提案

### スタイル統一の方針

terms/privacyページと同様に、**本文も見出しも`text-primary`（黒）を使用**し、`text-text-sub`（グレー）は補足情報（日付など）にのみ使用する。

### 具体的な変更案

#### 1. 本文（`p`）
```tsx
// 変更前
p: ({ children }) => (
  <p className="text-base leading-relaxed mb-4 text-text-sub">{children}</p>
)

// 変更後
p: ({ children }) => (
  <p className="text-base leading-relaxed mb-4 text-primary">{children}</p>
)
```

#### 2. リスト（`ul`, `ol`）
```tsx
// 変更前
ul: ({ children }) => (
  <ul className="list-disc list-inside mb-4 space-y-2 text-text-sub">{children}</ul>
)
ol: ({ children }) => (
  <ol className="list-decimal list-inside mb-4 space-y-2 text-text-sub">{children}</ol>
)

// 変更後
ul: ({ children }) => (
  <ul className="list-disc list-inside mb-4 space-y-2 text-primary">{children}</ul>
)
ol: ({ children }) => (
  <ol className="list-decimal list-inside mb-4 space-y-2 text-primary">{children}</ol>
)
```

#### 3. リスト項目（`li`）
```tsx
// 変更前
li: ({ children }) => (
  <li className="text-base leading-relaxed">{children}</li>
)

// 変更後（色指定を追加）
li: ({ children }) => (
  <li className="text-base leading-relaxed text-primary">{children}</li>
)
```

#### 4. 見出し（`h1`, `h2`, `h3`）
現状のままで問題なし（既に`text-primary`を使用）

#### 5. 強調（`strong`）
現状のままで問題なし（既に`text-primary`を使用）

#### 6. 日付（リリース日）
```tsx
// 現状（適切）
{releaseNote.releaseDate && (
  <p className="text-base text-text-sub">{releaseNote.releaseDate}</p>
)}
```
→ `text-text-sub`のまま（補足情報として適切）

## 📋 変更後のスタイル一覧

| 要素 | 色 | フォントサイズ | フォントウェイト | 行間 |
|------|-----|---------------|----------------|------|
| `h1` | `text-primary` | `text-3xl` | `font-bold` | - |
| `h2` | `text-primary` | `text-2xl` | `font-semibold` | - |
| `h3` | `text-primary` | `text-xl` | `font-semibold` | - |
| `p` | `text-primary` | `text-base` | 通常 | `leading-relaxed` |
| `ul`, `ol` | `text-primary` | - | 通常 | - |
| `li` | `text-primary` | `text-base` | 通常 | `leading-relaxed` |
| `strong` | `text-primary` | - | `font-semibold` | - |
| 日付 | `text-text-sub` | `text-base` | 通常 | - |

## ✅ 期待される効果

1. **視認性の向上**: 本文が黒になることで、読みやすさが向上
2. **一貫性の確保**: terms/privacyページと統一されたスタイル
3. **デザインシステムの適切な使用**: `text-text-sub`は補足情報（日付）にのみ使用

## 🔍 注意点

- `text-text-sub`は補足情報（リリース日など）にのみ使用
- 本文やリストは`text-primary`を使用して、読みやすさを確保
- terms/privacyページと同様のスタイルで統一感を出す


