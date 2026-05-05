import { SectionHeading } from './About'
import { ChevronRightIcon } from './Icons'

const courses = [
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu, Developer & Lead Instructor',
    details: [
      'Hands-on Python track covering fundamentals through practical projects',
      'Focus on automation, scripting, data handling, & API integration',
      'Builds strong problem-solving habits with daily coding practice',
    ],
    topics: ['Python', 'Automation', 'APIs'],
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu, Developer & Lead Instructor',
    details: [
      'End-to-end web development path from frontend UI to backend services',
      'Covers modern JavaScript workflows with Node.js, Express, & databases',
      'Emphasizes real project building & deployment-ready development',
    ],
    topics: ['HTML/CSS/JS', 'Node & Express', 'Databases'],
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-20 sm:py-32 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={5} title="Courses" />
        <div className="flex flex-col gap-5">
          {courses.map((course) => (
            <article
              key={course.title}
              className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:border-violet-500/25 hover:shadow-violet-500/5"
            >
              <div className="mb-6">
                <div>
                  <h3 className="text-white text-xl font-bold leading-tight mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{course.instructor}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {course.details.map((point) => (
                  <li key={point} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-violet-500/80 shrink-0 mt-0.5">
                      <ChevronRightIcon className="w-4 h-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-md"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


