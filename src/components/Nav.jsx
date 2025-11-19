import { useState, useEffect } from 'react'
import { Menu, X, JapanYen, Mail, Github, Linkedin } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'ホーム' },
  { id: 'about', label: '私について' },
  { id: 'work', label: '作品' },
  { id: 'contact', label: '連絡先' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollToId('home')} className="group inline-flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow ring-1 ring-white/20">
            <JapanYen className="w-5 h-5" />
          </div>
          <div className="text-left">
            <div className="text-white font-bold tracking-widest text-sm">和風</div>
            <div className="text-white/70 text-[10px] -mt-0.5 tracking-[0.3em]">PORTFOLIO</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="text-white/80 hover:text-white tracking-wide transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact')}} className="inline-flex items-center gap-2 text-sm text-white/90 bg-rose-600 hover:bg-rose-500 px-3 py-2 rounded-md transition-colors">
            <Mail className="w-4 h-4" /> 相談する
          </a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github className="w-5 h-5"/></a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin className="w-5 h-5"/></a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v=>!v)}>
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-2 bg-slate-900/90 backdrop-blur border-t border-white/10">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { scrollToId(item.id); setOpen(false) }}
              className="block w-full text-left text-white/90 py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
