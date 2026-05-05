import { SectionHeading } from './About'
import { DotsVerticalIcon, StarOutlineIcon } from './Icons'

const courses = [
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu, Developer and Lead Instructor',
    completion: '8% complete',
    accent: 'from-indigo-600 via-fuchsia-500 to-amber-300',
    tag: 'Python',
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu, Developer and Lead Instructor',
    completion: '10% complete',
    accent: 'from-blue-600 via-violet-500 to-cyan-300',
    tag: 'Web Dev',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-32 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={4} title="Courses" />
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${course.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25)_0,rgba(255,255,255,0)_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.2)_0,rgba(255,255,255,0)_35%)]" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold text-white">
                  {course.tag}
                </span>
                <button
                  type="button"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-800"
                  aria-label="Course actions"
                >
                  <DotsVerticalIcon />
                </button>
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
