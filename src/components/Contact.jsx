import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('送信中...')
    const form = Object.fromEntries(new FormData(e.currentTarget))

    try {
      // No backend requirement from user; mimic success
      await new Promise(r => setTimeout(r, 700))
      setStatus('✅ 送信しました。追ってご連絡します。')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('❌ エラーが発生しました。もう一度お試しください。')
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">連絡先</h2>
        <p className="mt-3 text-white/70">お仕事のご依頼・ご相談は以下のフォームからお気軽にご連絡ください。</p>

        <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-1">お名前</label>
            <input name="name" required className="w-full px-3 py-2 rounded bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70 mb-1">メール</label>
            <input name="email" type="email" required className="w-full px-3 py-2 rounded bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70 mb-1">メッセージ</label>
            <textarea name="message" rows="5" required className="w-full px-3 py-2 rounded bg-white/5 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button className="px-5 py-3 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors">送信</button>
            {status && <span className="text-white/80 text-sm">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
