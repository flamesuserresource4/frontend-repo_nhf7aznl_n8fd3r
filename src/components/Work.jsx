export default function Work() {
  const projects = [
    {
      title: '禅 UI キット',
      desc: '静けさと余白を大切にしたコンポーネント集',
      tags: ['React', 'Tailwind', 'Framer'],
      image: 'https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: '茶室ランディング',
      desc: '和モダンの世界観を伝える LP デザイン',
      tags: ['Design', 'Next.js', 'SEO'],
      image: 'https://images.unsplash.com/photo-1644300502181-66211901f482?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRTglOEMlQjYlRTUlQUUlQTQlRTMlODMlQTklRTMlODMlQjMlRTMlODMlODclRTMlODIlQTMlRTMlODMlQjMlRTMlODIlQjB8ZW58MHwwfHx8MTc2MzU4MjcxNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      title: '筆文字ジェネレーター',
      desc: '毛筆の質感を再現するジェネレーティブアプリ',
      tags: ['Canvas', 'Noise', 'Shader'],
      image: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=80&w=2070&auto=format&fit=crop'
    }
  ]

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">作品</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-white/70 mt-1 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
