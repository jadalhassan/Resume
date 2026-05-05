import { SectionHeading } from './About'

const bullets = [
  'Provided technical support for staff, troubleshooting hardware and software issues in a fast-paced environment',
  'Maintained computer systems, printers, and network infrastructure ensuring minimal downtime',
  'Resolved system issues efficiently, improving operational reliability in a critical healthcare setting',
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number={2} title="Experience" />
        <div className="relative pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent" />
          <div className="absolute left-0 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-[#050508] shadow-lg shadow-violet-500/60" />
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-300">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">IT Support Intern</h3>
                <p className="text-violet-400 font-medium mt-1">Al Zahra Hospital</p>
                <p className="text-slate-500 text-sm mt-0.5">Beirut, Lebanon</p>
              </div>
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm font-mono">
                Summer 2025
              </span>
            </div>
            <ul className="space-y-4">
              {bullets.map((point, i) => (
                <li key={i} className="flex gap-4 text-slate-400 leading-relaxed">
                  <span className="text-violet-500 shrink-0 mt-0.5">▹</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
