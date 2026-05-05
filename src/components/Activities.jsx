import { SectionHeading } from './About'

const activities = [
  {
    role: 'President',
    org: 'LAU Chess Club',
    period: 'Fall 2025 – Spring 2026',
    icon: '♟',
  },
  {
    role: 'Treasurer',
    org: 'LAU Football Fans Club',
    period: 'Fall 2025 – Spring 2026',
    icon: '⚽',
  },
  {
    role: 'Member',
    org: 'Computer Science Club',
    period: 'Fall 2024 – Present',
    icon: '💻',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number={5} title="Activities" />
        <div className="grid gap-4 sm:grid-cols-3">
          {activities.map((a, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-5">{a.icon}</div>
              <p className="text-violet-400 font-semibold text-sm mb-1">{a.role}</p>
              <p className="text-white font-bold mb-3">{a.org}</p>
              <p className="text-slate-500 text-xs font-mono">{a.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
