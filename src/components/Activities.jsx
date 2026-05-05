import { SectionHeading } from './About'
import { CodeIcon, MountainIcon, SoccerBallIcon, TrophyIcon } from './Icons'

const activities = [
  {
    role: 'President',
    org: 'LAU Chess Club',
    period: 'Fall 2025 - Spring 2026',
    Icon: TrophyIcon,
  },
  {
    role: 'Treasurer',
    org: 'LAU Football Fans Club',
    period: 'Fall 2025 - Spring 2026',
    Icon: SoccerBallIcon,
  },
  {
    role: 'Member',
    org: 'Computer Science Club',
    period: 'Fall 2024 - Present',
    Icon: CodeIcon,
  },
  {
    role: 'Participant',
    org: 'Hiking',
    period: '2022 - Present',
    Icon: MountainIcon,
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-24 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={6} title="Activities" />
        <div className="grid gap-4 sm:grid-cols-2">
          {activities.map(({ role, org, period, Icon }, i) => (
            <div
              key={`${role}-${org}`}
              data-reveal
              style={{ '--reveal-delay': `${80 + i * 90}ms` }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="text-violet-300">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-400 text-xs font-mono">
                  {period}
                </span>
              </div>
              <p className="text-violet-400 font-semibold text-sm mb-1">{role}</p>
              <p className="text-white font-bold">{org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


