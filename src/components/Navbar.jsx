import { useState, useEffect } from 'react'
import { CloseIcon, MenuIcon } from './Icons'
import { trackEvent } from '../lib/analytics'

const links = [
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Courses', href: '#courses' },
  { label: 'Skills', href: '#skills' },
  { label: 'Activities', href: '#activities' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('education')
  const resumeUrl = `${import.meta.env.BASE_URL}JadAlHassanCV.pdf`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map(({ href }) => href.replace('#', ''))
    const observedSet = new Set()

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
    )

    const tryObserve = () => {
      sectionIds.forEach((id) => {
        if (observedSet.has(id)) return
        const el = document.getElementById(id)
        if (el) {
          observedSet.add(id)
          io.observe(el)
        }
      })
    }

    tryObserve()

    const mo = new MutationObserver(tryObserve)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(2,6,23,0.55)]'
          : 'bg-[#050508]/65 backdrop-blur-md border-b border-white/8 shadow-[0_8px_24px_rgba(2,6,23,0.4)]'
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#main-content"
          aria-label="Back to top"
          onClick={() => trackEvent('nav_top_click')}
          className="font-bold text-white text-lg tracking-tight rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
        >
          <span className="text-violet-400">&lt;</span>
          JAH
          <span className="text-violet-400">/&gt;</span>
        </a>

        <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 bg-white/[0.04] border border-white/10 rounded-full px-3 py-2 backdrop-blur-md shadow-[0_8px_24px_rgba(3,8,20,0.35)]">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => trackEvent('nav_section_click', { section: href.replace('#', '') })}
              aria-current={activeSection === href.replace('#', '') ? 'page' : undefined}
              className={`text-xs tracking-[0.08em] uppercase font-semibold text-center transition-all duration-200 rounded-full px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] ${
                activeSection === href.replace('#', '')
                  ? 'text-white bg-violet-500/30 border border-violet-400/50 shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in a new tab"
            onClick={() => trackEvent('resume_click', { source: 'navbar_desktop' })}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-xs tracking-[0.08em] uppercase font-semibold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => trackEvent('contact_click', { source: 'navbar_desktop' })}
            className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-white/10 text-slate-200 text-xs tracking-[0.08em] uppercase font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            Contact Me
          </a>
        </div>

        <button
          className="lg:hidden min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-white/5 px-4 sm:px-6 py-5 flex flex-col gap-3 bg-[#050508]/95 backdrop-blur-xl text-center"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setOpen(false)
                trackEvent('nav_section_click', { section: href.replace('#', ''), source: 'navbar_mobile' })
              }}
              aria-current={activeSection === href.replace('#', '') ? 'page' : undefined}
              className={`transition-all py-2 text-sm tracking-[0.08em] uppercase font-semibold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508] ${
                activeSection === href.replace('#', '')
                  ? 'text-white bg-violet-500/30 border border-violet-400/50 shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                  : 'text-slate-200 hover:text-white border border-transparent'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href={resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              setOpen(false)
              trackEvent('resume_click', { source: 'navbar_mobile' })
            }}
            aria-label="Open resume in a new tab"
            className="w-full sm:w-fit self-center text-center px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => {
              setOpen(false)
              trackEvent('contact_click', { source: 'navbar_mobile' })
            }}
            className="w-full sm:w-fit self-center text-center px-5 py-3 bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            Contact Me
          </a>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent" />
    </nav>
  )
}


