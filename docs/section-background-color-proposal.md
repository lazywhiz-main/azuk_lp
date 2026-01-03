# セクション背景色の提案

## 新しいLP構成での背景色パターン

### 新しいLP（lp_updated_20260103.html）の背景色
1. **Hero**: 鉄紺（`var(--color-primary)`）
2. **Narrative**: 白（`var(--color-surface)`）
3. **Logistics (3ステップ)**: 生成り（`var(--color-background)`）
4. **Functional (機能説明)**: 白（`var(--color-surface)`）
5. **Philosophy**: 鉄紺（`var(--color-primary)`）
6. **Footer**: 生成り（`var(--color-background)`）

### 現在の実装の背景色
1. **Hero**: 鉄紺（`bg-primary`）
2. **BrandStory**: 生成り → 白（2セクション）
3. **Feature**: 生成り（各セクション）
4. **Security**: 白（`bg-surface`）
5. **Plan**: 生成り（`bg-background`）
6. **FAQ**: 白（`bg-surface`）
7. **Footer**: 鉄紺（`bg-primary`）

---

## 提案: 新しい構成での背景色パターン

### パターンA: 新しいLPに完全準拠（推奨）

```
1. Hero: 鉄紺（bg-primary）
2. Narrative: 白（bg-surface）
3. Logistics (3ステップ): 生成り（bg-background）
4. Functional (機能説明): 白（bg-surface）
5. Philosophy: 鉄紺（bg-primary）
6. Security: 生成り（bg-background）← 維持
7. Plan: 白（bg-surface）← 維持
8. FAQ: 生成り（bg-background）← 維持
9. Footer: 生成り（bg-background）← 新しいLPに合わせて変更
```

**メリット:**
- 新しいLPの視覚的なリズムを維持
- 暗い背景（鉄紺）→ 明るい背景（白）→ 中間（生成り）のリズムが自然
- Philosophyセクションが暗い背景で目立つ

**デメリット:**
- Footerが鉄紺から生成りに変わる（現在の実装と異なる）

---

### パターンB: Footerのみ鉄紺を維持

```
1. Hero: 鉄紺（bg-primary）
2. Narrative: 白（bg-surface）
3. Logistics (3ステップ): 生成り（bg-background）
4. Functional (機能説明): 白（bg-surface）
5. Philosophy: 鉄紺（bg-primary）
6. Security: 生成り（bg-background）
7. Plan: 白（bg-surface）
8. FAQ: 生成り（bg-background）
9. Footer: 鉄紺（bg-primary）← 現在の実装を維持
```

**メリット:**
- Footerの視覚的な重みを維持
- 現在の実装との一貫性

**デメリット:**
- 新しいLPのデザインと異なる

---

### パターンC: 交互パターン（視覚的なリズム重視）

```
1. Hero: 鉄紺（bg-primary）
2. Narrative: 白（bg-surface）
3. Logistics (3ステップ): 生成り（bg-background）
4. Functional (機能説明): 白（bg-surface）
5. Philosophy: 鉄紺（bg-primary）
6. Security: 生成り（bg-background）
7. Plan: 白（bg-surface）
8. FAQ: 生成り（bg-background）
9. Footer: 鉄紺（bg-primary）
```

**メリット:**
- 交互のリズムで視覚的に整理されている
- 暗いセクション（Hero, Philosophy, Footer）が強調される

---

## 推奨: パターンA（新しいLPに完全準拠）

**理由:**
1. 新しいLPのデザイン意図を尊重
2. Philosophyセクションが暗い背景で目立つ（CTAボタンが目立つ）
3. Footerが生成りで軽やか（新しいLPの意図）
4. 全体的な視覚的なリズムが自然

**実装時の注意:**
- Footerのテキスト色を鉄紺から生成り背景に合わせて調整（白または鉄紺）

---

## 最終的な背景色パターン（推奨）

| セクション | 背景色 | Tailwindクラス | 理由 |
|-----------|--------|---------------|------|
| Hero | 鉄紺 | `bg-primary` | 新しいLPに準拠 |
| Narrative | 白 | `bg-surface` | 新しいLPに準拠 |
| Logistics (3ステップ) | 生成り | `bg-background` | 新しいLPに準拠 |
| Functional (機能説明) | 白 | `bg-surface` | 新しいLPに準拠 |
| Philosophy | 鉄紺 | `bg-primary` | 新しいLPに準拠、CTAを強調 |
| Security | 生成り | `bg-background` | 維持、リズムを保つ |
| Plan | 白 | `bg-surface` | 維持、リズムを保つ |
| FAQ | 生成り | `bg-background` | 維持、リズムを保つ |
| Footer | 生成り | `bg-background` | 新しいLPに準拠 |

