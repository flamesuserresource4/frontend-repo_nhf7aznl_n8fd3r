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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <button onClick={() => scrollToId('home')} className="group inline-flex items-center gap-2" aria-label="ホームへ戻る">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 flex items-center justify-center text-white shadow ring-1 ring-white/20">
            <JapanYen className="w-5 h-5" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-white font-bold tracking-widest text-sm">和風</div>
            <div className="text-white/70 text-[10px] -mt-0.5 tracking-[0.3em]">PORTFOLIO</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        <div className="hidden md:flex items-center gap-2">
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact')}} className="inline-flex items-center gap-2 text-sm text-white/90 bg-rose-600 hover:bg-rose-500 px-3 py-2 rounded-md transition-colors">
            <Mail className="w-4 h-4" /> 相談する
          </a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white p-2"><Github className="w-5 h-5"/></a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white p-2"><Linkedin className="w-5 h-5"/></a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(v=>!v)}
          aria-label="メニュー"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="md:hidden px-4 sm:px-6 pb-6 space-y-2 bg-slate-900/95 backdrop-blur border-t border-white/10">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { scrollToId(item.id); setOpen(false) }}
              className="block w-full text-left text-white/90 py-3 text-base"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToId('contact');setOpen(false)}} className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-white/90 bg-rose-600 hover:bg-rose-500 px-4 py-3 rounded-md transition-colors">
              <Mail className="w-4 h-4" /> 相談する
            </a>
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white p-3 rounded-md bg-white/5 border border-white/10"><Github className="w-5 h-5"/></a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white p-3 rounded-md bg-white/5 border border-white/10"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      )}
    </header>
  )
}
