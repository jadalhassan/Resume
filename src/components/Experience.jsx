import { SectionHeading } from './About'

const bullets = [
  'Provided technical support for staff, troubleshooting hardware and software issues in a fast-paced environment',
  'Maintained computer systems, printers, and network infrastructure ensuring minimal downtime',
  'Resolved system issues efficiently, improving operational reliability in a critical healthcare setting',
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Experience" />
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800"></div>
          <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-violet-500 -translate-x-[5px]"></div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white">IT Support Intern</h3>
                <p className="text-violet-400 mt-1">Al Zahra Hospital · Beirut</p>
              </div>
              <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                Summer 2025
              </span>
            </div>
            <ul className="space-y-3">
              {bullets.map((point, i) => (
                <li key={i} className="flex gap-3 text-slate-400">
                  <span className="text-violet-500 mt-0.5 shrink-0">▹</span>
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
