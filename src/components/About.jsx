export function SectionHeading({ number, title }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="text-violet-400/60 font-mono text-xs tracking-[0.3em] uppercase mb-3">
        {String(number).padStart(2, '0')}.
      </p>
      <h2 className="text-3xl sm:text-4xl font-black text-white">{title}</h2>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={1} title="About" />
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 hover:border-violet-500/30 hover:bg-white/[7%] transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/5">
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-slate-300 leading-relaxed">
              I am a Full-Stack Developer & Computer Science student at LAU, focused on building practical,
              user-friendly products with clean architecture.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I enjoy combining frontend polish with backend reliability, and I am currently looking for internship
              opportunities where I can ship real features & keep growing.
            </p>
          </div>
          <div className="pt-6 mt-6 border-t border-white/5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-slate-500 text-xs font-mono">Location</p>
              <p className="text-white font-semibold mt-1">Beirut, Lebanon</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-slate-500 text-xs font-mono">Focus</p>
              <p className="text-white font-semibold mt-1">Full-Stack Web Development</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-slate-500 text-xs font-mono">Status</p>
              <p className="text-white font-semibold mt-1">Open to Internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

