import Container from '@/components/ui/Container'
import Link from 'next/link'
import { getReleaseNotesList } from '@/lib/release-notes'

export const metadata = {
  title: 'リリースノート | azuk',
  description: 'azukのリリースノート一覧です。',
}

export default function ReleaseNotesPage() {
  const releaseNotes = getReleaseNotesList()

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

          <h1 className="text-4xl font-bold mb-8">リリースノート</h1>

          <div className="space-y-4">
            {releaseNotes.length === 0 ? (
              <div className="bg-surface rounded-xl shadow-md p-8 text-center text-text-sub">
                リリースノートはまだありません。
              </div>
            ) : (
              releaseNotes.map((releaseNote) => (
                <Link
                  key={releaseNote.version}
                  href={`/release-notes/${releaseNote.version}`}
                  className="block"
                >
                  <div className="bg-surface rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-border hover:border-accent">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-2xl font-semibold text-accent">
                        azuk {releaseNote.version}
                      </h2>
                      {releaseNote.releaseDate && (
                        <span className="text-sm text-text-sub whitespace-nowrap ml-4">
                          {releaseNote.releaseDate}
                        </span>
                      )}
                    </div>
                    {releaseNote.summary && (
                      <p className="text-base text-text-sub leading-relaxed">
                        {releaseNote.summary}
                      </p>
                    )}
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </Container>
    </main>
  )
}

