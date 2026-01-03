import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: 'プライバシーポリシー | azuk',
  description: 'azukのプライバシーポリシーです。',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-sub hover:text-primary transition-colors mb-8"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M12.5 5l-5 5 5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ホームに戻る
          </Link>

          <h1 className="text-4xl font-bold mb-8">azuk プライバシーポリシー</h1>

          <div className="bg-surface rounded-xl shadow-md p-8 space-y-8">
            <section>
              <p className="text-base leading-relaxed mb-6">
                株式会社LAZYWHIZ（以下「当社」といいます。）は、当社が提供するサービス「azuk」（以下「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第1条（個人情報および要配慮個人情報の定義）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報を指します。
                </li>
                <li>
                  <strong>「要配慮個人情報」</strong>とは、本人の病歴、診療記録、障害の有無、健康診断の結果、医師による指導内容、服薬情報等、その取扱いに特に配慮を要するものとして法令で定められた記述等が含まれる個人情報を指します。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第2条（収集する情報と取得方法）</h2>
              <p className="text-base leading-relaxed mb-4">
                当社は、本サービスの提供にあたり、以下の情報を適法かつ公正な手段により取得します。なお、<strong>要配慮個人情報の取得にあたっては、ユーザーの明示的な同意（本サービス上の同意ボタンのクリック等）を得るものとします。</strong>
              </p>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  <strong>ユーザー登録情報</strong>：氏名、メールアドレス、性別、生年月日、パスワード等
                </li>
                <li>
                  <strong>サービス利用情報</strong>：がんの種類、ステージ、治療履歴、服薬情報、副作用の記録、日々の体調メモ、自由記述テキスト等
                </li>
                <li>
                  <strong>端末・ログ情報</strong>：IPアドレス、利用端末情報、OSバージョン、Cookie、利用ログ等
                </li>
                <li>
                  <strong>決済情報</strong>：購入履歴、チケット残高（※クレジットカード情報等は決済代行会社が管理し、当社は保持しません）
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第3条（利用目的）</h2>
              <p className="text-base leading-relaxed mb-4">
                当社が個人情報を収集・利用する目的は、以下のとおりです。
              </p>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>本サービスの提供・運営のため（ユーザー認証、データの保存・表示等）</li>
                <li><strong>AI機能の提供のため</strong>（ユーザーが入力したテキスト等の解析、カテゴリー分類、情報の整理）</li>
                <li><strong>レコメンド機能の提供のため</strong>（ユーザーの興味・関心、病状や健康状態に合わせたおすすめ情報、記事、商品またはサービスの案内を表示すること）</li>
                <li>本サービスの利用料金、チケット購入代金の請求のため</li>
                <li>ユーザーからのお問い合わせへの対応のため</li>
                <li>本サービスの改善、新機能の開発、および<strong>AIエンジンの精度向上・学習のため</strong>（ただし、特定の個人を識別できない形式に加工したデータに限ります）</li>
                <li>個人を特定できない形式に加工した統計データを作成し、マーケティング、学会発表、研究、または第三者（製薬会社、医療研究機関等）への提供を行うため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第4条（第三者提供）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報（要配慮個人情報を含みます）を提供することはありません。
                  <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                    <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                  </ul>
                </li>
                <li>
                  前項の定めにかかわらず、次に掲げる場合は第三者への提供には該当しないものとします。
                  <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合（サーバーホスティング、決済処理、カスタマーサポート等）</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第5条（外部モジュールおよびAIサービスの利用）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  当社は、本サービスの提供にあたり、AI解析やアクセス解析のために第三者が提供するツールやAPI（以下「外部ツール」といいます。）を利用する場合があります。
                </li>
                <li>
                  外部ツールの利用に伴い、ユーザーの入力情報の一部（テキストデータ等）が、当該外部ツールの提供者に送信され、処理されることがあります。当社は、外部ツールの選定にあたり、セキュリティおよびプライバシー保護の観点から適切な事業者を厳選します。
                </li>
                <li>
                  当社が利用する主な外部ツールおよび送信される情報の詳細は、別途サービス内の「外部送信ポリシー」または設定画面等にて公表します。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第6条（統計データの利用）</h2>
              <p className="text-base leading-relaxed">
                当社は、取得した個人情報をもとに、特定の個人を識別できないように加工した統計データまたは匿名加工情報を作成することがあります。個人を識別できない統計データについては、当社は何ら制限なく利用（第三者への提供、出版、市場調査、新商品開発への活用等を含みます。）することができるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第7条（個人情報の開示・訂正・利用停止等）</h2>
              <p className="text-base leading-relaxed">
                ユーザーは、当社が保有する自己の個人情報について、開示、訂正、追加、削除、利用停止、消去、第三者提供の停止を求めることができます。請求があった場合、当社は本人確認を行った上で、法令の定めに従い速やかに対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第8条（安全管理措置）</h2>
              <p className="text-base leading-relaxed">
                当社は、個人情報の漏洩、滅失または毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置（通信のSSL暗号化、アクセス制限、データベースのセキュリティ対策等）を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第9条（プライバシーポリシーの変更）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。
                </li>
                <li>
                  当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトまたは本サービス内に掲載したときから効力を生じるものとします。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第10条（お問い合わせ窓口）</h2>
              <p className="text-base leading-relaxed mb-4">
                本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>社名：株式会社LAZYWHIZ</li>
                <li>担当部署：azuk 問い合わせ窓口</li>
                <li>Eメールアドレス：contact_azuk@lazywhiz.io</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-base leading-relaxed font-semibold mb-2">以上</p>
              <div className="text-sm text-text-sub">
                <p className="font-semibold mb-2">附則</p>
                <p>2025年12月9日 制定・施行</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
