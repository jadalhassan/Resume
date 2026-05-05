import { SectionHeading } from './About'

const activities = [
  {
    role: 'President',
    org: 'LAU Chess Club',
    period: 'Fall 2025 – Spring 2026',
  },
  {
    role: 'Treasurer',
    org: 'LAU Football Fans Club',
    period: 'Fall 2025 – Spring 2026',
  },
  {
    role: 'Member',
    org: 'Computer Science Club',
    period: 'Fall 2024 – Present',
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Activities" />
        <div className="grid gap-4 sm:grid-cols-3">
          {activities.map((a, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-violet-500/40 transition-colors"
            >
              <p className="text-violet-400 font-semibold mb-1">{a.role}</p>
              <p className="text-white font-medium mb-2">{a.org}</p>
              <p className="text-slate-400 text-sm">{a.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
