import { SectionHeading } from './About'
import { CodeIcon, WrenchIcon, LightbulbIcon } from './Icons'

const skillGroups = [
  {
    category: 'Languages',
    Icon: CodeIcon,
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks and Tools',
    Icon: WrenchIcon,
    items: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB'],
  },
  {
    category: 'Core Concepts',
    Icon: LightbulbIcon,
    items: ['OOP', 'REST APIs', 'Authentication', 'Data Structures', 'Debugging'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={4} title="Skills" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ category, Icon, items }) => (
            <div
              key={category}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-violet-500/30 hover:bg-white/[7%] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-violet-400">
                  <Icon />
                </span>
                <p className="text-white font-semibold text-sm">{category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 text-slate-300 rounded-lg text-xs sm:text-sm border border-white/10 hover:border-violet-500/40 hover:text-violet-300 hover:bg-violet-500/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
