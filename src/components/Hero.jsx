import { ExternalLinkIcon } from './Icons'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-24 w-full">
        <h1 className="font-black tracking-tight leading-none mb-5 sm:mb-6">
          <span className="block text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Jad Al Hassan.
          </span>
        </h1>

        <p className="text-lg sm:text-2xl text-slate-300 font-medium mb-3 sm:mb-4 max-w-2xl">
          Full-Stack Developer and CS Student at LAU
        </p>

        <p className="text-slate-500 text-base sm:text-lg mb-10 sm:mb-12 max-w-xl">
          Based in Beirut, Lebanon.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            Email <ExternalLinkIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jad-alhassan-377061339/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            LinkedIn <ExternalLinkIcon />
          </a>
          <a
            href="https://github.com/jadalhassan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            GitHub <ExternalLinkIcon />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-10 mt-12 sm:mt-16 pt-10 sm:pt-16 border-t border-white/5">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-white">3+</p>
            <p className="text-slate-500 text-sm mt-1">Projects Built</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-white">7+</p>
            <p className="text-slate-500 text-sm mt-1">Technologies</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-black text-white leading-tight">+961 81 665 911</p>
            <p className="text-slate-500 text-sm mt-1">Phone</p>
          </div>
        </div>
      </div>
    </section>
  )
}
