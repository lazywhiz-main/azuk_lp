import { notFound } from 'next/navigation'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { getReleaseNote, getAllReleaseNoteVersions } from '@/lib/release-notes'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PageProps {
  params: Promise<{ version: string }>
}

export async function generateStaticParams() {
  const versions = getAllReleaseNoteVersions()
  return versions.map((version) => ({
    version,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { version } = await params
  const releaseNote = getReleaseNote(version)

  if (!releaseNote) {
    return {
      title: 'リリースノートが見つかりません | azuk',
    }
  }

  return {
    title: `azuk ${version} リリースノート | azuk`,
    description: releaseNote.summary || `azuk ${version}のリリースノートです。`,
  }
}

export default async function ReleaseNoteDetailPage({ params }: PageProps) {
  const { version } = await params
  const releaseNote = getReleaseNote(version)

  if (!releaseNote) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/release-notes"
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
            リリースノート一覧に戻る
          </Link>

          <div className="bg-surface rounded-xl shadow-md p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">azuk {releaseNote.version}</h1>
              {releaseNote.releaseDate && (
                <p className="text-base text-text-sub">{releaseNote.releaseDate}</p>
              )}
            </div>

            <div className="prose prose-slate max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mb-4 mt-8 text-primary">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mb-3 mt-6 text-primary">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold mb-2 mt-4 text-primary">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-base leading-relaxed mb-4 text-primary">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-primary">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2 text-primary">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-base leading-relaxed text-primary">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-primary">{children}</strong>
                  ),
                  hr: () => <hr className="my-6 border-border" />,
                  code: ({ children, className }) => {
                    const isInline = !className
                    return isInline ? (
                      <code className="bg-background px-1.5 py-0.5 rounded text-sm text-accent">
                        {children}
                      </code>
                    ) : (
                      <code className={className}>{children}</code>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="bg-background p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
                  ),
                }}
              >
                {releaseNote.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

