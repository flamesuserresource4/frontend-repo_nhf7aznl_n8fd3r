import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 10%, #fb7185 0 2px, transparent 2px), radial-gradient(circle at 80% 30%, #f59e0b 0 2px, transparent 2px), radial-gradient(circle at 50% 80%, #22d3ee 0 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-10 items-center w-full">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
          >
            侘び寂びの美学で彩る<br/>
            あなたのポートフォリオ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80"
          >
            静けさ、簡素、そして温かい余白。和のデザインにインスパイアされたミニマルなサイトで、あなたの仕事を美しく伝えます。
          </motion.p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="px-5 py-3 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors text-center">作品を見る</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors text-center">連絡する</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-md md:max-w-none mx-auto w-full"
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-rose-500/20 via-amber-400/20 to-cyan-400/20 border border-white/10 backdrop-blur p-2">
            <div className="w-full h-full rounded-2xl bg-slate-900/70 flex items-center justify-center text-white/80">
              <div className="text-center p-6">
                <div className="text-5xl sm:text-6xl">日</div>
                <div className="mt-2 tracking-[0.6em] text-xs sm:text-sm">WA-MODERN</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 sm:w-28 h-24 sm:h-28 rounded-xl bg-rose-500/20 blur-2xl" />
          <div className="absolute -top-6 -right-6 w-24 sm:w-28 h-24 sm:h-28 rounded-xl bg-cyan-400/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
