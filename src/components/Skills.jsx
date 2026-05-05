import { SectionHeading } from './About'

const skillGroups = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MongoDB'],
  },
  {
    category: 'Core Concepts',
    items: [
      'Object-Oriented Programming',
      'REST APIs',
      'Authentication',
      'Debugging',
      'Data Structures',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Skills" />
        <div className="grid gap-6 sm:grid-cols-3">
          {skillGroups.map(({ category, items }) => (
            <div
              key={category}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
            >
              <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 hover:border-violet-500/50 hover:text-violet-300 transition-colors cursor-default"
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
