export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <p className="text-violet-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hello, I'm
        </p>
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          Jad Al Hassan
        </h1>
        <h2 className="text-2xl sm:text-3xl text-slate-400 mb-8 font-light">
          Computer Science Student &amp; Full-Stack Developer
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-10">
          Based in Beirut, Lebanon — studying Computer Science at LAU and building
          web applications with React, Node.js, and modern tooling.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-700 hover:border-violet-500 hover:text-white text-slate-300 rounded-lg font-medium transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-700 hover:border-violet-500 hover:text-white text-slate-300 rounded-lg font-medium transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
