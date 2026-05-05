import { GithubMarkIcon, LinkedinMarkIcon, MailLineIcon, PhoneLineIcon } from './Icons'

export default function Hero() {
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

        <div
          data-reveal
          style={{ '--reveal-delay': '300ms' }}
          className="mt-8 flex items-center justify-center flex-wrap gap-x-5 gap-y-3 text-slate-500 text-sm"
        >
          <a
            href="https://github.com/jadalhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors"
          >
            <GithubMarkIcon className="w-[15px] h-[15px]" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jad-alhassan-377061339/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors"
          >
            <LinkedinMarkIcon className="w-[15px] h-[15px]" />
            LinkedIn
          </a>
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="inline-flex items-center gap-2 tracking-wide uppercase hover:text-violet-300 transition-colors"
          >
            <MailLineIcon className="w-[15px] h-[15px]" />
            Email
          </a>
          <a href="tel:+96181665911" className="inline-flex items-center gap-2 hover:text-violet-300 transition-colors">
            <PhoneLineIcon className="w-[15px] h-[15px]" />
            +961 81 665 911
          </a>
        </div>
      </div>
    </section>
  )
}

