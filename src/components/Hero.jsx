import { useState } from 'react'
import { ArrowRightIcon, GithubMarkIcon, LinkedinMarkIcon, MailLineIcon, PhoneLineIcon } from './Icons'
import { trackEvent } from '../lib/analytics'

export default function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jadalhassan.ja034@gmail.com')
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 1800)
    } catch {
      setEmailCopied(false)
    }
  }

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText('+96181665911')
      setPhoneCopied(true)
      window.setTimeout(() => setPhoneCopied(false), 1800)
    } catch {
      setPhoneCopied(false)
    }
  }

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24 w-full text-center">
        <h1 data-reveal className="font-black tracking-tight leading-none mb-5 sm:mb-6">
          <span className="block text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Jad Al Hassan.
          </span>
        </h1>

        <p data-reveal style={{ '--reveal-delay': '90ms' }} className="text-lg sm:text-2xl text-slate-300 font-medium mb-3 sm:mb-4 max-w-2xl mx-auto">
          Full-Stack Developer & CS Student at LAU
        </p>

        <p data-reveal style={{ '--reveal-delay': '160ms' }} className="text-slate-500 text-base sm:text-lg mb-10 sm:mb-12 max-w-xl mx-auto">
          Based in Beirut, Lebanon.
        </p>

        <p
          data-reveal
          style={{ '--reveal-delay': '230ms' }}
          className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          I build clean, practical web applications with strong frontend experiences and reliable backend systems. I
          enjoy turning complex ideas into products that are simple to use and easy to maintain.
        </p>

        <div data-reveal style={{ '--reveal-delay': '280ms' }} className="mt-8 flex items-center justify-center flex-wrap gap-3 sm:gap-4">
          <a
            href="#projects"
            onClick={() => trackEvent('projects_cta_click', { source: 'hero' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            View Projects <ArrowRightIcon />
          </a>
          <a
            href="#contact"
            onClick={() => trackEvent('contact_click', { source: 'hero' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            Contact Me
          </a>
        </div>

        <div
          data-reveal
          style={{ '--reveal-delay': '340ms' }}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-slate-500 text-xs sm:text-sm max-w-full"
        >
          <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-5 gap-y-3">
            <a
              href="https://github.com/jadalhassan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile"
              onClick={() => trackEvent('github_click', { source: 'hero' })}
              className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors"
            >
              <GithubMarkIcon className="w-[15px] h-[15px]" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jad-alhassan-377061339/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              onClick={() => trackEvent('linkedin_click', { source: 'hero' })}
              className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors"
            >
              <LinkedinMarkIcon className="w-[15px] h-[15px]" />
              LinkedIn
            </a>
            <a
              href="mailto:jadalhassan.ja034@gmail.com"
              aria-label="Send email to Jad Al Hassan"
              onClick={() => trackEvent('email_click', { source: 'hero' })}
              className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors"
            >
              <MailLineIcon className="w-[15px] h-[15px]" />
              Email
            </a>
            <a
              href="tel:+96181665911"
              aria-label="Call +961 81 665 911"
              onClick={() => trackEvent('phone_click', { source: 'hero' })}
              className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors break-all sm:break-normal"
            >
              <PhoneLineIcon className="w-[15px] h-[15px]" />
              +961 81 665 911
            </a>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                trackEvent('copy_email_click', { source: 'hero' })
                copyEmail()
              }}
              aria-label="Copy email address"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              {emailCopied ? 'Copied' : 'Copy Email'}
            </button>
            <button
              type="button"
              onClick={() => {
                trackEvent('copy_phone_click', { source: 'hero' })
                copyPhone()
              }}
              aria-label="Copy phone number"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              {phoneCopied ? 'Copied' : 'Copy Phone'}
            </button>
          </div>
          <span className="sr-only" aria-live="polite">
            {emailCopied ? 'Email copied to clipboard.' : phoneCopied ? 'Phone number copied to clipboard.' : ''}
          </span>
        </div>
      </div>
    </section>
  )
}

