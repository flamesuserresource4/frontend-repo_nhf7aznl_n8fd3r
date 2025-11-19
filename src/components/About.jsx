export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1612014449419-ac12de2f2181?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYXRhbWl8ZW58MHwwfHx8MTc2MzU4MjcxNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tatami" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">自己紹介</h2>
          <p className="mt-4 sm:mt-6 text-white/80 leading-relaxed">
            フロントエンド開発者として、ユーザー体験を最優先に考えたデザインと実装を得意としています。日本の伝統美からヒントを得た、静かで洗練されたUIを追求しています。
          </p>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: '職種', value: 'フロントエンド' },
              { label: '拠点', value: '東京' },
              { label: '関心', value: 'UI/UX・動き' },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-white/60 text-sm">{item.label}</div>
                <div className="text-white font-semibold mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
