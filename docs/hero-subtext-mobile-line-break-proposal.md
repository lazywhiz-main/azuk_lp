# ヒーローセクション サブコピー モバイル改行提案

## 📱 現状分析

### 現在のサブコピー
```
自分の「今日」が病気の情報に支配されてしまわないように。
情報の荷を解き、本来の自分を取り巻く「静寂」を確保するための
Life Design Logistics（ライフデザイン・ロジスティクス）
```

### 現在の実装
```tsx
<p className="text-base md:text-lg font-normal text-left md:text-center z-10 px-6 max-w-[700px] mx-auto leading-[1.7] md:leading-relaxed text-slate-400 mt-6">
  自分の「今日」が病気の情報に支配されてしまわないように。<br />
  情報の荷を解き、本来の自分を取り巻く「静寂」を確保するための<br />
  Life Design Logistics（ライフデザイン・ロジスティクス）
</p>
```

### 問題点
- モバイル表示では、PCと同じ改行位置を使用している
- モバイルの画面幅（約375px〜414px）では、改行位置が最適でない可能性がある
- 長い行が画面からはみ出る可能性がある

## 💡 改行位置の検討

### テキストの構造
1. **1行目**: `自分の「今日」が病気の情報に支配されてしまわないように。`（約30文字）
2. **2行目**: `情報の荷を解き、本来の自分を取り巻く「静寂」を確保するための`（約30文字）
3. **3行目**: `Life Design Logistics（ライフデザイン・ロジスティクス）`（約30文字）

### モバイル画面幅の考慮
- **iPhone SE (375px)**: 約20-25文字/行が適切
- **iPhone 12/13/14 (390px)**: 約22-27文字/行が適切
- **iPhone 14 Pro Max (430px)**: 約24-30文字/行が適切

## 🎯 提案

### オプション1: 意味のまとまりで改行（推奨）
```tsx
<p className="text-base md:text-lg font-normal text-left md:text-center z-10 px-6 max-w-[700px] mx-auto leading-[1.7] md:leading-relaxed text-slate-400 mt-6">
  自分の「今日」が<br className="md:hidden" />
  病気の情報に支配されてしまわないように。<br />
  情報の荷を解き、<br className="md:hidden" />
  本来の自分を取り巻く「静寂」を確保するための<br />
  Life Design Logistics<br className="md:hidden" />
  （ライフデザイン・ロジスティクス）
</p>
```

**改行位置**:
- `自分の「今日」が` の後（約8文字）
- `情報の荷を解き、` の後（約8文字）
- `Life Design Logistics` の後（約20文字）

### オプション2: より細かく改行
```tsx
<p className="text-base md:text-lg font-normal text-left md:text-center z-10 px-6 max-w-[700px] mx-auto leading-[1.7] md:leading-relaxed text-slate-400 mt-6">
  自分の「今日」が<br className="md:hidden" />
  病気の情報に<br className="md:hidden" />
  支配されてしまわないように。<br />
  情報の荷を解き、<br className="md:hidden" />
  本来の自分を取り巻く<br className="md:hidden" />
  「静寂」を確保するための<br />
  Life Design Logistics<br className="md:hidden" />
  （ライフデザイン・ロジスティクス）
</p>
```

**改行位置**:
- より細かく、読みやすさを重視

### オプション3: 最小限の改行
```tsx
<p className="text-base md:text-lg font-normal text-left md:text-center z-10 px-6 max-w-[700px] mx-auto leading-[1.7] md:leading-relaxed text-slate-400 mt-6">
  自分の「今日」が病気の情報に<br className="md:hidden" />
  支配されてしまわないように。<br />
  情報の荷を解き、本来の自分を取り巻く<br className="md:hidden" />
  「静寂」を確保するための<br />
  Life Design Logistics<br className="md:hidden" />
  （ライフデザイン・ロジスティクス）
</p>
```

**改行位置**:
- 最小限の改行で、自然な読みやすさを確保

## 📊 比較表

| オプション | 改行数 | 1行あたりの文字数 | 読みやすさ | 視覚的な印象 |
|-----------|--------|------------------|-----------|------------|
| **現状** | 2箇所 | 約30文字 | 普通 | やや長め |
| **オプション1** | 3箇所 | 約15-20文字 | 良い | バランス良い |
| **オプション2** | 5箇所 | 約10-15文字 | 非常に良い | 細かめ |
| **オプション3** | 2箇所 | 約20-25文字 | 良い | シンプル |

## 🎯 推奨

**オプション1（意味のまとまりで改行）を推奨**

### 理由
1. **意味のまとまり**: 文の意味を保ちながら改行
2. **読みやすさ**: 1行あたり15-20文字で読みやすい
3. **視覚的なバランス**: 過度に細かくなく、適度な改行
4. **実装の簡潔さ**: `md:hidden`でモバイルのみに適用

### 実装例
```tsx
<p className="text-base md:text-lg font-normal text-left md:text-center z-10 px-6 max-w-[700px] mx-auto leading-[1.7] md:leading-relaxed text-slate-400 mt-6">
  自分の「今日」が<br className="md:hidden" />
  病気の情報に支配されてしまわないように。<br />
  情報の荷を解き、<br className="md:hidden" />
  本来の自分を取り巻く「静寂」を確保するための<br />
  Life Design Logistics<br className="md:hidden" />
  （ライフデザイン・ロジスティクス）
</p>
```

## 🔍 注意点

- `md:hidden`を使用することで、モバイルのみに改行を適用
- PC表示では既存の改行位置を維持
- 意味のまとまりを考慮した改行位置を選択


