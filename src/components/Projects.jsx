import { SectionHeading } from './About'

const projects = [
  {
    title: 'Course Management System',
    description: [
      'Developed a responsive, mobile-first UI using React and Tailwind CSS with a structured component-based architecture',
      'Built dynamic pages for course browsing, enrollment, and management with client-side routing and state handling',
      'Integrated frontend with a Node.js and Express.js backend using RESTful APIs and MongoDB for persistent data',
      'Implemented authentication flows with JWT and protected routes, with backend deployed on Render',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Sports Goods Store Management System',
    description: [
      'Designed a web-based system for managing product listings, orders, and inventory workflows',
      'Defined system requirements using IEEE SRS standards and modeled workflows with UML diagrams',
      'Applied MVC and client-server architecture principles for scalable system design',
    ],
    tech: ['MVC', 'UML', 'IEEE SRS', 'Client-Server Architecture'],
  },
  {
    title: 'Esports Performance Tracker',
    description: [
      'Designed a relational database using ER modeling and normalization techniques',
      'Developed complex SQL queries with joins, aggregation, and subqueries',
      'Implemented triggers and views to automate performance analytics',
    ],
    tech: ['SQL', 'ER Modeling', 'Normalization', 'Triggers & Views'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading title="Projects" />
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-violet-500/40 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {project.description.map((point, j) => (
                  <li key={j} className="flex gap-3 text-slate-400 text-sm">
                    <span className="text-violet-500 mt-0.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full"
                  >
                    {t}
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
