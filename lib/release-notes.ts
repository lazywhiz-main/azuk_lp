import fs from 'fs'
import path from 'path'

export interface ReleaseNote {
  version: string
  content: string
  releaseDate?: string
  summary?: string
}

const RELEASE_NOTES_DIR = path.join(process.cwd(), 'release-notes')

/**
 * バージョン文字列を比較してソート用の数値を返す
 */
function compareVersions(a: string, b: string): number {
  const aParts = a.replace('v', '').split('.').map(Number)
  const bParts = b.replace('v', '').split('.').map(Number)

  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const aPart = aParts[i] || 0
    const bPart = bParts[i] || 0
    if (aPart !== bPart) {
      return bPart - aPart // 新しい順（降順）
    }
  }
  return 0
}

/**
 * Markdownファイルからサマリーを抽出
 */
function extractSummary(content: string): string {
  // 「主な変更点」のセクションを探す
  const mainChangesMatch = content.match(/## 主な変更点\s*\n\s*\n([\s\S]+?)(?=\n---|\n##|$)/)
  if (mainChangesMatch) {
    const changesContent = mainChangesMatch[1].trim()
    // リスト項目を抽出して結合
    const listItems = changesContent
      .split('\n')
      .filter((line) => line.trim().startsWith('-'))
      .map((line) => {
        // Markdownのリスト記号と絵文字を除去してテキストのみ抽出
        return line
          .replace(/^-\s*/, '')
          .replace(/\*\*/g, '') // 太字記号を除去
          .trim()
      })
      .filter((item) => item.length > 0)
    
    if (listItems.length > 0) {
      return listItems.join('、')
    }
    return changesContent
  }

  // フォールバック: 「短い説明（App Store用）」のセクションを探す
  const shortDescMatch = content.match(/## 短い説明（App Store用）\s*\n\s*\n([\s\S]+?)(?=\n---|\n##|$)/)
  if (shortDescMatch) {
    return shortDescMatch[1].trim()
  }

  // 見つからない場合は最初の段落を使用
  const firstParagraph = content.split('\n\n').find((line) => line.trim() && !line.startsWith('#') && !line.startsWith('**'))
  return firstParagraph?.trim() || ''
}

/**
 * Markdownファイルからリリース日を抽出
 */
function extractReleaseDate(content: string): string | undefined {
  const dateMatch = content.match(/\*\*リリース日\*\*:\s*(.+?)(?=\n|$)/)
  return dateMatch ? dateMatch[1].trim() : undefined
}

/**
 * すべてのリリースノートのバージョン一覧を取得
 */
export function getAllReleaseNoteVersions(): string[] {
  if (!fs.existsSync(RELEASE_NOTES_DIR)) {
    return []
  }

  const files = fs.readdirSync(RELEASE_NOTES_DIR)
  const versions = files
    .filter((file) => file.endsWith('.md') && file.startsWith('v') && file !== 'README.md' && file !== 'AGENT_INSTRUCTIONS.md')
    .map((file) => file.replace('.md', ''))
    .sort(compareVersions)

  return versions
}

/**
 * リリースノート一覧を取得（メタデータのみ）
 */
export function getReleaseNotesList(): Omit<ReleaseNote, 'content'>[] {
  const versions = getAllReleaseNoteVersions()

  return versions.map((version) => {
    const filePath = path.join(RELEASE_NOTES_DIR, `${version}.md`)
    const content = fs.readFileSync(filePath, 'utf-8')

    return {
      version,
      releaseDate: extractReleaseDate(content),
      summary: extractSummary(content),
    }
  })
}

/**
 * 特定のバージョンのリリースノートを取得
 */
export function getReleaseNote(version: string): ReleaseNote | null {
  const filePath = path.join(RELEASE_NOTES_DIR, `${version}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const content = fs.readFileSync(filePath, 'utf-8')

  return {
    version,
    content,
    releaseDate: extractReleaseDate(content),
    summary: extractSummary(content),
  }
}

