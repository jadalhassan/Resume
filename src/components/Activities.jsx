import { SectionHeading } from './About'
import { TrophyIcon, WalletIcon, TerminalIcon } from './Icons'

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
    Icon: WalletIcon,
  },
  {
    role: 'Member',
    org: 'Computer Science Club',
    period: 'Fall 2024 - Present',
    Icon: TerminalIcon,
  },
]

export default function Activities() {
  return (
    <section id="activities" className="py-20 sm:py-32 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={6} title="Activities" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map(({ role, org, period, Icon }) => (
            <div
              key={`${role}-${org}`}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-violet-300 mb-5">
                <Icon />
              </div>
              <p className="text-violet-400 font-semibold text-sm mb-1">{role}</p>
              <p className="text-white font-bold mb-3">{org}</p>
              <p className="text-slate-500 text-xs font-mono">{period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


