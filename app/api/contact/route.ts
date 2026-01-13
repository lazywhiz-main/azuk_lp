import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// 環境変数が設定されている場合のみResendインスタンスを作成
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }
  return new Resend(apiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'すべての項目を入力してください。' },
        { status: 400 }
      )
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください。' },
        { status: 400 }
      )
    }

    // 件名のマッピング
    const subjectMap: Record<string, string> = {
      general: '一般的なお問い合わせ',
      bug: '不具合の報告',
      feature: '機能要望',
      account: 'アカウントに関するお問い合わせ',
      billing: '課金・プランに関するお問い合わせ',
      other: 'その他',
    }

    const subjectText = subjectMap[subject] || subject

    // Resendインスタンスの取得
    const resend = getResend()
    if (!resend) {
      return NextResponse.json(
        { error: 'メール送信機能が設定されていません。' },
        { status: 500 }
      )
    }

    // 送信先メールアドレス（環境変数から取得、デフォルトはcontact_azuk@lazywhiz.io）
    const toEmail = process.env.CONTACT_EMAIL || 'contact_azuk@lazywhiz.io'

    // Resendでメール送信
    const { data, error } = await resend.emails.send({
      from: 'azuk <noreply@lazywhiz.io>', // 送信元（Resendで設定したドメイン）
      to: [toEmail],
      replyTo: email,
      subject: `[azuk お問い合わせ] ${subjectText} - ${name}様`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subjectText}</p>
        <hr>
        <h3>お問い合わせ内容:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      text: `
お問い合わせ内容

お名前: ${name}
メールアドレス: ${email}
件名: ${subjectText}

お問い合わせ内容:
${message}
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'メールの送信に失敗しました。' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。' },
      { status: 500 }
    )
  }
}

