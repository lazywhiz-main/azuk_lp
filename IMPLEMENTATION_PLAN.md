# azuk ランディングページ実装計画

## 1. 現状分析

### 現在のデザインサンプルの構成
- **重力エリア（ヒーローセクション）**: 情報ノイズが降り注ぐアニメーション付き
- **機能セクション**: 3つの主要機能（記録、治療の流れ、家族共有）
- **セキュリティセクション**: プライバシーとセキュリティの説明
- **プランセクション**: Free/Premiumプランの比較
- **FAQセクション**: よくある質問
- **フッター**: リンクとコピーライト

### 技術的な特徴
- CSS変数によるデザインシステム（brandsystem.md準拠）
- レスポンシブデザイン対応
- アニメーション（重力エフェクト、ノイズ要素）
- シングルHTMLファイル構成

## 2. 実装アプローチの選択肢

### オプションA: モダンなフレームワーク（推奨）
**Next.js + TypeScript + Tailwind CSS**

**メリット:**
- コンポーネント化による保守性向上
- TypeScriptによる型安全性
- SEO最適化（SSR/SSG）
- パフォーマンス最適化
- デプロイが容易（Vercel等）

**構成:**
```
azuk_lp/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx      # 重力エリア
│   │   ├── FeatureSection.tsx   # 機能セクション
│   │   ├── SecuritySection.tsx  # セキュリティ
│   │   ├── PlanSection.tsx      # プラン
│   │   ├── FAQSection.tsx      # FAQ
│   │   └── Footer.tsx           # フッター
│   ├── styles/
│   │   ├── globals.css          # グローバルスタイル
│   │   └── design-tokens.css    # デザイントークン
│   ├── hooks/
│   │   └── useGravityAnimation.ts # 重力アニメーション
│   ├── lib/
│   │   └── constants.ts         # 定数（ノイズデータ等）
│   └── app/
│       └── page.tsx             # メインページ
├── public/
│   └── images/                   # スクリーンショット等
├── package.json
└── next.config.js
```

### オプションB: 軽量な静的サイト
**Vite + React + CSS Modules**

**メリット:**
- 軽量で高速
- シンプルな構成
- ビルドが速い

**デメリット:**
- SEO最適化は手動で対応が必要
- デプロイ設定がやや複雑

### オプションC: 純粋なHTML/CSS/JS（現状維持）
**HTML + CSS + Vanilla JavaScript**

**メリット:**
- 依存関係なし
- シンプル
- 高速

**デメリット:**
- 保守性が低い
- コンポーネント化が困難
- スケーラビリティが低い

## 3. 推奨実装計画（オプションA: Next.js）

### フェーズ1: プロジェクトセットアップ
1. Next.js 14（App Router）プロジェクトの初期化
2. TypeScript設定
3. Tailwind CSS導入（またはCSS Modules）
4. ESLint/Prettier設定
5. Gitリポジトリ初期化

### フェーズ2: デザインシステムの実装
1. CSS変数（デザイントークン）の移行
   - カラーパレット
   - タイポグラフィ
   - スペーシング
   - シャドウ
2. **アイコンシステムの統合**
   - `icon-showcase.html`からアイコンコンポーネントを抽出
   - TypeScript化と型定義
   - 再利用可能なアイコンコンポーネントライブラリの構築
   - ランディングページでの活用箇所の特定
3. 共通コンポーネントの作成
   - Button
   - Container
   - Section
   - Icon（アイコンラッパー）

### フェーズ3: セクション別実装
1. **HeroSection（重力エリア）**
   - ノイズアニメーションのReact化
   - パフォーマンス最適化（requestAnimationFrame）
   - レスポンシブ対応

2. **FeatureSection**
   - 3つの機能セクションをコンポーネント化
   - **アイコン統合**:
     - 機能1「記録を残す」: `RecordIcon`を使用
     - 機能2「治療の流れを把握する」: `LibraryIcon`を使用
     - 機能3「家族と情報を共有する」: `ShareIcon`を使用
   - 画像プレースホルダーの実装
   - アニメーション（スクロール時フェードイン等）

3. **SecuritySection**
   - シンプルなテキストセクション

4. **PlanSection**
   - プランカードコンポーネント
   - ボタンリンクの実装

5. **FAQSection**
   - アコーディオン機能（オプション）
   - または静的表示

6. **Footer**
   - リンクの実装
   - コピーライト

### フェーズ4: 最適化と改善
1. **パフォーマンス最適化**
   - 画像の最適化（Next.js Image）
   - コード分割
   - フォント最適化（Noto Sans JP）

2. **SEO最適化**
   - メタタグの設定
   - Open Graph対応
   - 構造化データ（JSON-LD）

3. **アクセシビリティ**
   - ARIA属性の追加
   - キーボードナビゲーション
   - スクリーンリーダー対応

4. **アニメーション改善**
   - prefers-reduced-motion対応
   - パフォーマンス最適化

### フェーズ5: コンテンツの追加
1. スクリーンショット画像の追加
2. App Store/Google Playリンクの実装
3. 実際のリンクURLの設定

### フェーズ6: テストとデプロイ
1. クロスブラウザテスト
2. レスポンシブテスト
3. パフォーマンステスト
4. デプロイ（Vercel推奨）

## 4. 技術スタック詳細

### コア
- **Next.js 14**: Reactフレームワーク（App Router）
- **TypeScript**: 型安全性
- **React 18**: UIライブラリ

### スタイリング
- **Tailwind CSS**: ユーティリティファースト（推奨）
  - または **CSS Modules**: スコープ付きCSS
- **PostCSS**: CSS処理

### アニメーション
- **Framer Motion**: 複雑なアニメーション（オプション）
- **Vanilla JavaScript**: 重力アニメーション（軽量）

### 開発ツール
- **ESLint**: コード品質
- **Prettier**: コードフォーマット
- **Husky**: Gitフック

### デプロイ
- **Vercel**: 推奨（Next.js最適化）
- **Netlify**: 代替案

## 5. ファイル構造（詳細）

```
azuk_lp/
├── .next/                    # Next.jsビルド出力
├── public/
│   ├── images/
│   │   ├── feature-1.png     # 機能1のスクリーンショット
│   │   ├── feature-2.png     # 機能2のスクリーンショット
│   │   └── feature-3.png     # 機能3のスクリーンショット
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx        # ルートレイアウト
│   │   ├── page.tsx          # メインページ
│   │   └── globals.css       # グローバルスタイル
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── Container.tsx
│   │   ├── icons/
│   │   │   ├── index.ts              # アイコンエクスポート
│   │   │   ├── tab-bar/
│   │   │   │   ├── HomeIcon.tsx
│   │   │   │   ├── RecordIcon.tsx
│   │   │   │   ├── LibraryIcon.tsx
│   │   │   │   └── SettingsIcon.tsx
│   │   │   ├── header/
│   │   │   │   ├── NotificationIcon.tsx
│   │   │   │   ├── BackIcon.tsx
│   │   │   │   └── MenuIcon.tsx
│   │   │   ├── category/
│   │   │   │   ├── HospitalCategoryIcon.tsx
│   │   │   │   ├── HealthCategoryIcon.tsx
│   │   │   │   ├── MoodCategoryIcon.tsx
│   │   │   │   ├── LifestyleCategoryIcon.tsx
│   │   │   │   └── MedicineCategoryIcon.tsx
│   │   │   └── actions/
│   │   │       ├── AddIcon.tsx
│   │   │       ├── EditIcon.tsx
│   │   │       ├── DeleteIcon.tsx
│   │   │       └── ShareIcon.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── SecuritySection.tsx
│   │   │   ├── PlanSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── Footer.tsx
│   │   └── animations/
│   │       └── NoiseItem.tsx
│   ├── hooks/
│   │   └── useGravityAnimation.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── docs/
│   └── lp.html               # 元のデザインサンプル（参考用）
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## 6. 実装の優先順位

### 高優先度（MVP）
1. ✅ プロジェクトセットアップ
2. ✅ アイコンシステムの統合（`icon-showcase.html`から抽出）
3. ✅ デザインシステムの移行
4. ✅ HeroSection（重力エリア）
5. ✅ FeatureSection（3つ + アイコン統合）
6. ✅ PlanSection
7. ✅ Footer

### 中優先度
1. SecuritySection
2. FAQSection
3. スクリーンショット画像の追加
4. SEO最適化

### 低優先度（改善）
1. アニメーションの強化
2. インタラクティブな要素（アコーディオン等）
3. パフォーマンス最適化
4. A/Bテスト対応

## 7. アイコンシステムの活用

### ランディングページでのアイコン使用箇所

1. **FeatureSection（機能紹介）**
   - **機能1「記録を残す」**: `RecordIcon`を大きく表示（サイズ48-64px）
   - **機能2「治療の流れを把握する」**: `LibraryIcon`を大きく表示
   - **機能3「家族と情報を共有する」**: `ShareIcon`を大きく表示
   - 各アイコンは機能説明の視覚的な補助として配置

2. **HeroSection（オプション）**
   - アプリの主要機能を表すアイコンを装飾的に配置可能
   - `HomeIcon`, `RecordIcon`, `LibraryIcon`を背景装飾として使用

3. **PlanSection（オプション）**
   - プランカードに機能アイコンを追加して視覚的に分かりやすく

4. **Footer（オプション）**
   - ソーシャルリンクやお問い合わせアイコンとして使用

### アイコン実装の詳細

**アイコンコンポーネントの仕様:**
```typescript
interface IconProps {
  size?: number;        // デフォルト: 24
  active?: boolean;      // アクティブ状態（タブバー用）
  darkMode?: boolean;    // ダークモード対応
  className?: string;   // 追加のスタイル
}
```

**カラーパレット（アイコン用）:**
- Primary: `#1B222E` (鉄紺)
- Accent: `#C25E40` (土器色) - アクティブ時
- Bonfire: `#D97D54` - ダークモード時のアクティブ
- Moonlight: `#E2E8F0` - ダークモード時の非アクティブ
- Disabled: `#94A3B8` - 無効状態

**実装方針:**
1. `icon-showcase.html`からSVGパスを抽出
2. ReactコンポーネントとしてTypeScript化
3. プロップスでサイズ・色・状態を制御可能に
4. ランディングページ用に最適化（大きなサイズ対応）

## 8. 考慮事項

### パフォーマンス
- 重力アニメーションの最適化（大量のDOM要素）
- 画像の遅延読み込み
- フォントの最適化
- **アイコンの最適化**: SVGインライン化でHTTPリクエスト削減

### アクセシビリティ
- アニメーションの無効化オプション
- 適切なコントラスト比
- キーボードナビゲーション
- **アイコンのアクセシビリティ**: `aria-label`や`role="img"`の適切な使用

### SEO
- メタタグの最適化
- Open Graph対応
- 構造化データ
- サイトマップ

### 保守性
- コンポーネントの再利用性
- 型定義の充実
- ドキュメント化
- **アイコンシステムの一元管理**: 一箇所で管理し、全プロジェクトで共有可能に

## 9. 次のステップ

1. **技術スタックの決定**: Next.js推奨
2. **プロジェクト初期化**: `npx create-next-app@latest`
3. **アイコンシステムの移行**: `icon-showcase.html`からアイコンコンポーネントを抽出・TypeScript化
4. **デザインシステムの移行**: CSS変数からTailwind設定へ
5. **コンポーネント実装**: セクションごとに実装（アイコン統合含む）
6. **テストとデプロイ**: Vercelへのデプロイ

## 10. 参考リソース

- Next.js公式ドキュメント: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercelデプロイ: https://vercel.com/docs
- SVG to React Component: https://react-svgr.com/

