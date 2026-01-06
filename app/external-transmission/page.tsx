import Container from '@/components/ui/Container'
import Link from 'next/link'

export const metadata = {
  title: '外部送信ポリシー | azuk',
  description: 'azukの外部送信ポリシーです。',
}

export default function ExternalTransmissionPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/privacy"
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
            プライバシーポリシーに戻る
          </Link>

          <h1 className="text-4xl font-bold mb-8">azuk 外部送信ポリシー</h1>

          <div className="bg-surface rounded-xl shadow-md p-8 space-y-8">
            <section>
              <p className="text-base leading-relaxed mb-6">
                株式会社LAZYWHIZ（以下「当社」といいます。）は、当社が提供するサービス「azuk」（以下「本サービス」といいます。）の提供にあたり、機能の実現、品質向上、および利便性の向上のため、外部のサービスやツールを利用し、ユーザーの端末から当該ツール提供者へ情報を送信（外部送信）する場合があります。
              </p>
              <p className="text-base leading-relaxed">
                電気通信事業法に基づき、送信先および送信される情報の詳細を以下のとおり公表いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">1. 外部送信先一覧</h2>
              <p className="text-base leading-relaxed mb-6">
                本サービスにおいて情報を送信している主な外部サービスは以下のとおりです。
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-background">
                      <th className="border border-border p-4 text-left font-semibold">送信先事業者名</th>
                      <th className="border border-border p-4 text-left font-semibold">サービス名</th>
                      <th className="border border-border p-4 text-left font-semibold">送信される情報の項目</th>
                      <th className="border border-border p-4 text-left font-semibold">利用目的</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">Supabase, Inc.</td>
                      <td className="border border-border p-4">Supabase</td>
                      <td className="border border-border p-4">
                        氏名、メールアドレス、ログイン識別子、アプリ内の利用ログ、保存された健康データ一式
                      </td>
                      <td className="border border-border p-4">
                        データの保存、本人確認（認証）、およびサーバーインフラの提供のため
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">OpenAI, Inc.</td>
                      <td className="border border-border p-4">OpenAI API</td>
                      <td className="border border-border p-4">
                        ユーザーが入力した体調メモ、相談内容、がんの種類・ステージ等のテキスト情報
                      </td>
                      <td className="border border-border p-4">
                        生成AIによる情報の整理・要約、カテゴリー分類、および回答生成のため
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">2. データの取り扱いと安全性について</h2>
              <p className="text-base leading-relaxed mb-6">
                当社は、外部ツールへの情報送信にあたり、以下の安全管理措置を講じています。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">AIサービス（OpenAI）における情報の保護</h3>
                  <p className="text-base leading-relaxed">
                    当社は、OpenAI社の提供するAPI（Application Programming Interface）を利用しています。OpenAIの規約に基づき、API経由で送信されたデータがAIモデルの学習に二次利用されることはありません。
                    入力された情報は、解析および回答生成のみに使用され、一定期間（不正監視用ログとして30日間）保持された後、適切に削除されます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">データの保存（Supabase）における保護</h3>
                  <p className="text-base leading-relaxed">
                    本サービスで扱うデータは、Supabaseの提供する暗号化されたデータベースに保存されます。通信はすべてSSL/TLSにより暗号化されており、第三者による盗聴や改ざんを防止しています。また、データ保存先のリージョン（サーバー所在地）については、日本の法令およびセキュリティ基準を考慮し選定しています。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. 本ポリシーの改定</h2>
              <p className="text-base leading-relaxed">
                当社は、利用するツールの変更や追加、または法令の改正等に伴い、本ポリシーを適宜改定することがあります。最新の内容については、本ページにて随時ご確認ください。
              </p>
            </section>

            <section className="pt-8 border-t border-border">
              <div className="text-sm text-text-sub">
                <p>施行日：2025年12月9日</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}

