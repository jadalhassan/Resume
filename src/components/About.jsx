const coursework = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Software Engineering',
  'Web Development',
  'Computer Networks',
]

function SectionHeading({ title }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-3">{title}</h2>
      <div className="w-12 h-0.5 bg-violet-500 rounded-full"></div>
    </div>
  )
}

export { SectionHeading }

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Education" />
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 transition-colors">
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Lebanese American University (LAU)
              </h3>
              <p className="text-violet-400 mt-1">
                Bachelor of Science in Computer Science
              </p>
            </div>
            <div className="text-right text-sm text-slate-400 shrink-0">
              <p>Aug. 2024 – Present</p>
              <p className="text-slate-300 font-medium mt-1">
                Expected: Spring 2027
              </p>
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-xs mb-3 font-medium uppercase tracking-widest">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
