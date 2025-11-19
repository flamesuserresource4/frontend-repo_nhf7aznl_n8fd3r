import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Subtle backdrop */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,.08),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(251,191,36,.08),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,.08),transparent_35%)]"/>
      </div>

      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} 和風ポートフォリオ</p>
          <div className="text-white/60 text-sm">静けさ・余白・侘び寂び</div>
        </div>
      </footer>
    </div>
  )
}

export default App
