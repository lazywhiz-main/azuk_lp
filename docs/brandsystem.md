azuk Design System Guidelines

Version 1.2

1. Brand Philosophy / ブランド哲学

Service Name

azuk （アズク）

Tagline

迷ってもいい、預けてもいい。歩く速さは、あなたのペースで。

Design Concept

「Neutral Kindness（ドライだけど、暖かい）」

azukのデザインは、ユーザーを過剰に励ましたり、感情に踏み込んだりしない。
静かな「書斎」や「金庫」のように、常に整然とそこに在り、事実を淡々と預かる。
ユーザーがアプリを閉じた後、日常（母屋）へ戻るための「離れ」として機能する。

2. Color System / 色彩設計

「静寂（Blue）」と「生活（Ecru）」をベースに、「命（Amber）」を灯す。
昼は上質な紙の質感、夜は夜明け前の海の静けさを表現する。

2.1 Color Palette (Light Mode)

日常に溶け込む、眩しくない配色。

Role

Color Name

Hex Code

Usage

Primary

鉄紺 (Tetsu-Kon)

#1B222E

ロゴ、主要テキスト、重要ボタン。黒ではなく、深い青みのあるスレート色。

Background

生成り (Ecru)

#FAF9F6

アプリ背景。真っ白（#FFF）は避け、目に優しい紙の質感を出す。

Surface

白練 (Shiro-Neri)

#FFFFFF

カード（箱）、入力エリアの背景。

Accent

土器色 (Terracotta)

#C25E40

アクションボタン、強調アイコン。警告色（赤）の代わりに使う「体温」の色。

Secondary

琥珀 (Amber)

#D99F59

補助的なアクセント、イラストレーション。

Text Sub

鉛色 (Lead)

#64748B

補足情報、日付。

Border

薄墨 (Usu-Zumi)

#E2E8F0

区切り線、カードの枠線。

2.2 Color Palette (Dark Mode)

眠りを妨げない、瞳に優しい闇。

Role

Color Name

Hex Code

Usage

Primary

月光 (Moonlight)

#E2E8F0

主要テキスト、ロゴ。白（#FFF）ではなく、少しグレーを落とした色。

Background

深海 (Deep Sea)

#0B111A

アプリ背景。漆黒（#000）ではなく、鉄紺を極限まで暗くした色。

Surface

夜凪 (Night Calm)

#151D29

カード背景。背景色よりわずかに明るいスレート。

Accent

篝火 (Bonfire)

#D97D54

アクションボタン。闇の中で沈まないよう、Light Modeより明度を上げている。

Text Sub

灰 (Ash)

#94A3B8

補足情報。

Border

夜霧 (Night Fog)

#1E293B

区切り線。コントラストを低く保つ。

3. Typography / 文字設計

「Modern & Clean」
明朝体（Serif）は使用せず、ゴシック体（Sans-serif）のみで構成する。
情緒は「フォントの種類」ではなく、「文字サイズ」「余白」「ウェイト」で表現する。

3.1 Font Family

ゴシック体 (Sans-serif)

Font: Noto Sans JP, Hiragino Kaku Gothic ProN, Inter (英数)

Policy: 癖のない、可読性重視のモダンなゴシック体で統一する。

3.2 Typography Usage

Headings / Tagline:

ウェイト: Bold (700)

文字間: 少し広め (tracking-tight 〜 normal) で堂々とした印象に。

明朝体は使用しない。 メッセージの重さは言葉そのもので伝える。

Body:

ウェイト: Regular (400)

行間: 広め (leading-relaxed) に取り、息継ぎしやすいリズムを作る。

3.3 Logo Guidelines

Typeface: 小文字 azuk

Rule:

決して大文字（AZUK）にしないこと。「威圧感」を与えないため。

k のアセンダー（縦棒）を強調し、鍵や道具のようなシルエットを作る。

4. Components & Shape / 形状と振る舞い

4.1 The Box (Container)

azukのUIの基本単位は「箱」である。情報はページに散らばるのではなく、箱に「格納」される。

Appearance:

背景色（Surface）を持ち、わずかなBorderとShadowで浮き上がらせる。

Corner Radius: 8px

家具やスマホ本体のような、手に馴染むアール。鋭すぎず、丸すぎない。

4.2 Buttons

Primary Button:

背景：鉄紺（Dark Mode時は白練に近いグレー、または篝火色）

テキスト：白

Radius: 8px

Shadow: 控えめなドロップシャドウ

Interaction:

Active State: 押下時に scale(0.98) 程度縮小し、物理的なスイッチを押したような触感を与える。

5. Micro-Copy & UX / 言葉と体験

5.1 Feedback Message

システム的な完了通知ではなく、ユーザーの行為に対する「応答」を返す。

❌ 保存しました / 送信完了

⭕ 預かりました / 箱に入れました

5.2 Empty State (データがない時)

ユーザーを責めたり、急かしたりしない。

❌ データがありません。入力をしてください。

⭕ まだ何もありません。ゆっくり始めましょう。 / ここは空っぽです。手ぶらで過ごせていますね。

5.3 Tone of Voice

No Guidance: 「〜しましょう」「頑張りましょう」と導かない。

Objectivity: 事実を淡々と記す。

Silence: 不要な通知やポップアップで、ユーザーの静寂を乱さない。

6. Implementation Notes / 実装メモ for Engineers

Tailwind Config:

font-sans: ['Noto Sans JP', 'Inter', ...]

font-serif: 使用しない (Remove or disable default serif stack to prevent accidental usage)

Dark Mode Strategy:

class="dark" をルートに付与することで、CSS変数が切り替わる設計にすること。

System設定への追従をデフォルトとし、アプリ内で手動切り替えも可能にする（夜の病室での利用を想定）。

Contrast Ratio:

テキストのコントラスト比は 4.5:1 (WCAG AA) を確保すること。特に生成り背景上のグレー文字に注意。

Motion:

アニメーションは 200ms 〜 300ms の ease-out を基本とする。

派手な動きは避け、フェードやスライドなど「静かな」トランジションに徹する。

Created by the azuk Brand Team