import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: '利用規約 | azuk',
  description: 'azukの利用規約です。',
}

export default function TermsPage() {
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

          <h1 className="text-4xl font-bold mb-8">azuk 利用規約</h1>

          <div className="bg-surface rounded-xl shadow-md p-8 space-y-8">
            <section>
              <p className="text-base leading-relaxed mb-6">
                この利用規約（以下「本規約」といいます。）は、株式会社LAZYWHIZ（以下「当社」といいます。）が提供するがん患者向け情報整理サービス「azuk」（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆様（以下「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第1条（適用）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</li>
                <li>当社が本サービス上で掲載するルール、ガイドライン、通知等は、本規約の一部を構成するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第2条（定義）</h2>
              <p className="text-base leading-relaxed mb-4">
                本規約において使用する用語の定義は、以下のとおりとします。
              </p>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>「本サービス」とは、当社が提供する情報整理・記録アプリおよびWebサービス「azuk」をいいます。</li>
                <li>「ユーザー」とは、第4条に基づき本サービスの利用登録を行った個人をいいます。</li>
                <li>「有料会員」とは、ユーザーのうち、第6条に定める有料プラン（プレミアムサービス）に登録した者をいいます。</li>
                <li>「チケット」とは、本サービス内において特定のAI機能等を利用するために消費される電子的仮想通貨（ポイント）をいいます。</li>
                <li>「共有閲覧者」とは、第8条に基づきユーザーが指定し、当該ユーザーの記録情報の閲覧を許可された第三者（家族等）をいいます。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第3条（本サービスの性質と非医療行為の確認）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  <strong>（非医療行為）</strong> 本サービスは、ユーザー自身の通院履歴、服薬状況、体調記録等の情報を整理・管理することを支援するものであり、<strong>医師法に基づく医療行為（診断、治療、投薬指導等）を提供するものではありません。</strong>
                </li>
                <li>
                  <strong>（医師の判断の優先）</strong> 本サービスにより提供または推奨される情報は、医師や専門家の助言に代わるものではありません。ユーザーは、身体に不調を感じた場合や医学的判断が必要な場合は、必ず医療機関を受診し、主治医の指示に従ってください。
                </li>
                <li>
                  <strong>（情報の正確性）</strong> 当社は、本サービスに入力された情報の正確性、完全性、特定の目的への適合性について保証するものではありません。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第4条（利用登録）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>本サービスの利用を希望する者は、本規約に同意の上、当社の定める方法により利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。</li>
                <li>ユーザーは、登録にあたり、真実かつ正確な情報を提供するものとします。</li>
                <li>未成年者が利用する場合は、親権者等の法定代理人の同意を得た上で利用登録を行うものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第5条（IDおよびパスワードの管理）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>ユーザーは、自己の責任において、本サービスのIDおよびパスワードを適切に管理するものとします。</li>
                <li>ユーザーは、いかなる場合にも、IDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当社は、IDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのIDを登録しているユーザー自身による利用とみなします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第6条（有料サービスおよびチケット）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  <strong>（有料プラン）</strong> 本サービスの一部は有料（以下「プレミアムサービス」といいます。）で提供されます。有料会員は、当社が定める利用料金を、当社指定の決済手段により支払うものとします。
                </li>
                <li>
                  <strong>（サブスクリプションの更新）</strong> プレミアムサービスは、ユーザー自身が所定の期間内に解約手続きを行わない限り、契約期間満了時に従前と同一の内容・条件で自動的に更新されるものとします。
                </li>
                <li>
                  <strong>（チケットの購入と利用）</strong> ユーザーは、本サービス内で使用可能なチケットを追加購入することができます。チケットは、本サービス内の特定のAI分析機能等を利用する際に消費されます。
                </li>
                <li>
                  <strong>（チケットの有効期限）</strong> チケットの有効期限は、<strong>購入日から180日間</strong>とします。有効期限を経過したチケットは自動的に失効し、ユーザーはこれを利用することはできません。なお、失効したチケットについて、当社は払戻し等の義務を負いません。
                </li>
                <li>
                  <strong>（返金・払い戻しの禁止）</strong> 法令により義務付けられる場合を除き、当社は、一度支払われた利用料金および購入されたチケットについて、理由の如何を問わず返金または払い戻しを行いません。
                </li>
                <li>
                  <strong>（利用停止時の扱い）</strong> ユーザーが本サービスを退会した場合、または利用停止処分を受けた場合、保有しているチケットおよびプレミアムサービスの利用権は直ちに消滅するものとします。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第7条（AI機能、対話機能およびレコメンド情報の性質）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  <strong>（AIの特性）</strong> 本サービスには、AI（人工知能）技術を用いたテキスト分析機能、情報レコメンド機能、および<strong>キャラクターによる対話機能</strong>（以下総称して「AI機能」といいます。）が含まれます。ユーザーは、AI技術の特性上、分析結果、カテゴリー分類、<strong>キャラクターの発言内容</strong>、レコメンドされる情報の正確性、完全性、最新性が常に保証されるものではないことを理解し、これに同意するものとします。
                </li>
                <li>
                  <strong>（対話機能の性質）</strong> 本サービスが提供するキャラクターとの対話は、<strong>AIプログラムによる自動生成であり、実在の医師、看護師、カウンセラー、または人間のオペレーターによる対応ではありません。</strong>当該機能は、ユーザーの精神的サポートや情報整理の補助を目的としており、医学的助言や緊急時の対応を行うものではありません。
                </li>
                <li>
                  <strong>（レコメンドの免責）</strong> AI機能により表示されるおすすめ情報、記事、商品紹介等は、ユーザーの入力情報に基づく統計的な傾向を示唆するものであり、特定の治療法や医薬品の有効性を保証するものでも、特定の商品の購入を強制するものでもありません。
                </li>
                <li>
                  <strong>（責任の所在）</strong> 当社は、AI機能の誤作動、誤分類、<strong>不適切な発言の生成</strong>、またはAI機能に基づきユーザーが行った判断および行動の結果について、一切の責任を負いません。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第8条（情報の共有機能）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  <strong>（共有の仕組み）</strong> ユーザーは、本サービスの機能を利用して、自己の登録情報を共有閲覧者に閲覧させることができます。
                </li>
                <li>
                  <strong>（ユーザーの責任）</strong> ユーザーは、自己の責任において共有閲覧者を招待・設定するものとします。誤った宛先に招待を送ったこと、または共有閲覧者が情報を第三者に漏洩したこと等によりユーザーに生じた損害について、当社は一切の責任を負いません。
                </li>
                <li>
                  <strong>（共有閲覧者の権限）</strong> 共有閲覧者は、本サービス上の情報を閲覧することのみが可能であり、当該情報への書き込み、編集、または本サービス内での双方向のコミュニケーション機能は有しないものとします。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第9条（禁止事項）</h2>
              <p className="text-base leading-relaxed mb-4">
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base leading-relaxed ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社、他のユーザー、または第三者の知的財産権、プライバシー、名誉、その他の権利を侵害する行為</li>
                <li>本サービスを通じて得た情報を、当社の許可なく商業的に利用する行為</li>
                <li>虚偽の情報を登録または投稿する行為</li>
                <li>他のユーザーに対する誹謗中傷、または精神的な苦痛を与える行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li><strong>AI機能に対し、暴力的な表現、性的な表現、差別的な表現、または自殺・自傷行為を誘引する表現を含む入力を意図的に行う行為</strong></li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第10条（本サービスの提供の停止等）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                  </ul>
                </li>
                <li>
                  当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第11条（免責事項）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>
                  当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
                </li>
                <li>
                  消費者契約法等の適用により当社が損害賠償責任を負う場合であっても、その責任の範囲は、ユーザーに現実に生じた通常かつ直接の損害に限られ、かつ、ユーザーが過去6ヶ月間に当社に支払った利用料金（チケット購入代金を含みます。）の総額を上限とします。
                </li>
                <li>
                  本サービス内のデータ（記録、画像等）が、システム障害、通信回線の不具合、第三者による攻撃等により消失した場合であっても、当社はその復旧や損害賠償の責任を負わないものとします。ユーザーは、重要なデータについては自らの責任でバックアップを行うものとします。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第12条（利用規約の変更）</h2>
              <p className="text-base leading-relaxed">
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">第13条（準拠法・裁判管轄）</h2>
              <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4">
                <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する地方裁判所を専属的合意管轄とします。</li>
              </ol>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-base leading-relaxed font-semibold mb-2">附則</p>
              <p className="text-sm text-text-sub">2025年12月9日 制定・施行</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
