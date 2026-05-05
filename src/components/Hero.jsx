export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 w-full">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/50 animate-pulse" />
          Open to internship opportunities
        </div>

        {/* Name */}
        <h1 className="font-black tracking-tight leading-none mb-6">
          <span className="block text-4xl sm:text-6xl text-slate-300 mb-3 font-semibold">
            Hi, I'm
          </span>
          <span className="block text-6xl sm:text-8xl bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent pb-2">
            Jad Al Hassan.
          </span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-6">
          Full-Stack Developer &amp; CS Student at LAU
        </p>

        {/* Bio */}
        <p className="text-slate-500 max-w-xl text-base sm:text-lg leading-relaxed mb-12">
          I build fast, polished web applications — from intuitive React frontends
          to solid Node.js backends. Based in Beirut, Lebanon.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            View My Work
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 text-slate-400 hover:text-white rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            GitHub ↗
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-16 pt-16 border-t border-white/5">
          <div>
            <p className="text-4xl font-black text-white">3+</p>
            <p className="text-slate-500 text-sm mt-1">Projects Built</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white">7+</p>
            <p className="text-slate-500 text-sm mt-1">Technologies</p>
          </div>
          <div>
            <p className="text-4xl font-black text-white">2026</p>
            <p className="text-slate-500 text-sm mt-1">Seeking Internship</p>
          </div>
        </div>
      </div>
    </section>
  )
}
