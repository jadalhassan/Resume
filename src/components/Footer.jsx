import { ArrowRightIcon, GithubMarkIcon, LinkedinMarkIcon, MailLineIcon, PhoneLineIcon } from './Icons'

export default function Footer() {
  return (
    <footer id="contact" className="relative py-14 sm:py-20 mt-10 border-t border-white/5 scroll-mt-24">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p data-reveal className="text-2xl sm:text-3xl font-black text-white mb-3">Let&apos;s work together.</p>
        <p data-reveal style={{ '--reveal-delay': '90ms' }} className="text-slate-500 mb-8 sm:mb-10 max-w-sm mx-auto">
          I&apos;m actively looking for internship & project opportunities. My inbox is always open.
        </p>
        <a
          data-reveal
          style={{ '--reveal-delay': '160ms' }}
          href="mailto:jadalhassan.ja034@gmail.com"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 mb-10 sm:mb-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
        >
          Contact Me <ArrowRightIcon />
        </a>
        <div data-reveal style={{ '--reveal-delay': '240ms' }} className="flex items-center justify-center gap-5 sm:gap-7 text-slate-500 text-sm mb-8 flex-wrap">
          <a
            href="https://github.com/jadalhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            <GithubMarkIcon className="w-[15px] h-[15px]" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jad-alhassan-377061339/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            <LinkedinMarkIcon className="w-[15px] h-[15px]" />
            LinkedIn
          </a>
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            <MailLineIcon className="w-[15px] h-[15px]" />
            Email
          </a>
          <a
            href="tel:+96181665911"
            className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            <PhoneLineIcon className="w-[15px] h-[15px]" />
            +961 81 665 911
          </a>
        </div>
        <p data-reveal style={{ '--reveal-delay': '300ms' }} className="text-slate-700 text-xs">Designed & built by Jad Al Hassan - 2026</p>
      </div>
    </footer>
  )
}
