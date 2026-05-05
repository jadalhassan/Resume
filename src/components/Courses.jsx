import { SectionHeading } from './About'
import { StarOutlineIcon } from './Icons'

const courses = [
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu, Developer & Lead Instructor',
    completion: '8% complete',
    accent: 'from-indigo-600 via-fuchsia-500 to-amber-300',
    tag: 'Python',
    overview: 'Hands-on Python track covering fundamentals through real projects.',
    learns: ['Python basics', 'Automation scripts', 'API usage'],
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu, Developer & Lead Instructor',
    completion: '10% complete',
    accent: 'from-blue-600 via-violet-500 to-cyan-300',
    tag: 'Web Dev',
    overview: 'End-to-end web development path from frontend to backend deployment.',
    learns: ['HTML/CSS/JS', 'Node & Express', 'Databases'],
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-32 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={5} title="Courses" />
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className={`p-5 sm:p-6 bg-gradient-to-br ${course.accent}`}>
                <span className="inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold text-white mb-3">
                  {course.tag}
                </span>
                <p className="text-white/90 text-sm leading-relaxed mb-3">{course.overview}</p>
                <div className="flex flex-wrap gap-2">
                  {course.learns.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-semibold text-white bg-black/20 border border-white/20 rounded-full px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-white text-xl font-bold leading-tight mb-2">{course.title}</h3>
                <p className="text-slate-400 text-sm mb-5">{course.instructor}</p>
                <div className="h-px bg-violet-400/30 mb-3" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-cyan-300 text-sm font-medium">{course.completion}</span>
                  <span className="inline-flex items-center text-amber-300">
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                    <StarOutlineIcon />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


