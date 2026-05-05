import { SectionHeading } from './About'
import { ChevronRightIcon } from './Icons'

const experiences = [
  {
    period: 'SUMMER 2025',
    title: 'IT Support Intern',
    org: 'Al Zahra Hospital',
    location: 'Beirut, Lebanon',
    highlights: [
      'Provided technical support for staff, troubleshooting hardware & software issues in a fast-paced environment',
      'Maintained computer systems, printers, & network infrastructure ensuring minimal downtime',
      'Resolved system issues efficiently, improving operational reliability in a critical healthcare setting',
    ],
  },
  {
    period: 'APR 2025 - AUG 2025',
    title: "Summer of Code '25",
    org: 'Lebanese American University',
    highlights: [
      'Completed an intensive coding program focused on algorithms & C++ development',
      'Deepened fundamentals in data structures & competitive programming techniques',
      'Strengthened problem-solving speed through consistent coding practice',
    ],
  },
  {
    period: 'MAR 2025 - JUN 2025',
    title: 'Cybersecurity CTF Competitor',
    org: 'Semicolon Academy',
    highlights: [
      'Participated in a university-level cybersecurity competition & training program',
      'Gained hands-on experience with CTF challenges across web, binary, & crypto categories',
      'Improved analysis and debugging workflow under timed challenge constraints',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={2} title="Experience" />

        <div className="flex flex-col gap-5">
          {experiences.map((item, i) => (
            <article
              key={`${item.title}-${item.period}`}
              data-reveal
              style={{ '--reveal-delay': `${80 + i * 90}ms` }}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:border-violet-500/25 hover:shadow-violet-500/5"
            >
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base">{item.org}</p>
                  {item.location && <p className="text-slate-500 text-sm mt-1">{item.location}</p>}
                </div>
                <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs sm:text-sm font-mono">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-4">
                {item.highlights.map((point, hIndex) => (
                  <li
                    key={point}
                    data-reveal
                    style={{ '--reveal-delay': `${170 + i * 90 + hIndex * 55}ms` }}
                    className="flex gap-3 text-slate-400 leading-relaxed text-sm sm:text-base"
                  >
                    <span className="text-violet-500/80 shrink-0 mt-0.5">
                      <ChevronRightIcon className="w-4 h-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
