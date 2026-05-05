import { SectionHeading } from './About'

const projects = [
  {
    title: 'Course Management System',
    featured: true,
    description: [
      'Responsive, mobile-first UI with React and Tailwind CSS using a structured component-based architecture',
      'Dynamic pages for course browsing, enrollment, and management with client-side routing and state handling',
      'RESTful API integration with Node.js/Express.js backend and MongoDB for persistent data storage',
      'JWT authentication with protected routes; backend deployed on Render',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Sports Goods Store Management System',
    description: [
      'Web-based system for managing product listings, orders, and inventory workflows',
      'System requirements defined with IEEE SRS standards and workflows modeled with UML diagrams',
      'Applied MVC and client-server architecture principles for scalable system design',
    ],
    tech: ['MVC', 'UML', 'IEEE SRS', 'Client-Server Architecture'],
  },
  {
    title: 'Esports Performance Tracker',
    description: [
      'Relational database designed with ER modeling and normalization techniques',
      'Complex SQL queries with joins, aggregation, and subqueries for analytics',
      'Triggers and views implemented to automate performance reporting',
    ],
    tech: ['SQL', 'ER Modeling', 'Normalization', 'Triggers & Views'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading number={3} title="Projects" />
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative group bg-white/5 border rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 ${
                project.featured
                  ? 'border-violet-500/25 hover:border-violet-500/50 hover:shadow-violet-500/10'
                  : 'border-white/10 hover:border-violet-500/25 hover:shadow-violet-500/5'
              }`}
            >
              {project.featured && (
                <span className="absolute top-6 right-6 px-2.5 py-1 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-mono">
                  ★ Featured
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-5 group-hover:text-violet-300 transition-colors duration-300 pr-24">
                {project.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {project.description.map((point, j) => (
                  <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-violet-500/70 shrink-0 mt-0.5">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-md"
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
