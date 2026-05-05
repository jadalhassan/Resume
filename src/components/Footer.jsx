export default function Footer() {
  return (
    <footer className="relative py-20 mt-10 border-t border-white/5">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-3xl font-black text-white mb-3">Let's work together.</p>
        <p className="text-slate-500 mb-10 max-w-sm mx-auto">
          I'm actively looking for internship and project opportunities. My inbox is always open.
        </p>
        <a
          href="mailto:jadalhassan.ja034@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 mb-14"
        >
          Say Hello →
        </a>
        <div className="flex items-center justify-center gap-6 text-slate-600 text-sm mb-8 flex-wrap">
          <a href="#" className="hover:text-violet-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-violet-400 transition-colors">LinkedIn</a>
          <a href="mailto:jadalhassan.ja034@gmail.com" className="hover:text-violet-400 transition-colors">
            jadalhassan.ja034@gmail.com
          </a>
        </div>
        <p className="text-slate-700 text-xs">
          Designed &amp; built by Jad Al Hassan · 2026
        </p>
      </div>
    </footer>
  )
}
