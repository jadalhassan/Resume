import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#050508]/80 backdrop-blur-xl border-b border-white/5'
          : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-white text-lg tracking-tight">
          <span className="text-violet-400">&lt;</span>
          JAH
          <span className="text-violet-400">/&gt;</span>
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Hire Me
          </a>
        </div>

        <button
          className="sm:hidden text-slate-400 hover:text-white text-xl p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-white/5 px-6 py-5 flex flex-col gap-4 bg-[#050508]/95 backdrop-blur-xl">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="w-fit px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
