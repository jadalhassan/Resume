import { SectionHeading } from './About'
import { ChevronRightIcon, GithubMarkIcon, SparkleIcon } from './Icons'
import { trackEvent } from '../lib/analytics'

function formatHost(url) {
  if (!url) return 'local-preview'
  try {
    return new URL(url).host
  } catch {
    return 'live-preview'
  }
}

const projects = [
  {
    title: 'Course Management System',
    context: 'Academic Full-Stack Project',
    period: '2026',
    featured: true,
    highlights: [
      'Built a responsive UI with React & Tailwind using reusable components and clean routing',
      'Integrated Node.js/Express APIs with MongoDB for enrollment, browsing, and course management flows',
      'Implemented JWT auth with protected routes and deployed backend services on Render',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://khaliya-3a-allah.github.io/course-management-system/',
    codeUrl: 'https://github.com/Khaliya-3a-Allah/course-management-system',
  },
  {
    title: 'Sports Goods Store Management System',
    context: 'Software Engineering Project',
    period: '2026',
    highlights: [
      'Designed a web system for product listings, order management, and inventory workflows',
      'Documented requirements with IEEE SRS and modeled behavior using UML diagrams',
      'Applied MVC & client-server architecture for modular and scalable structure',
    ],
    tech: ['MVC', 'UML', 'IEEE SRS', 'Client-Server Architecture'],
    liveUrl: 'https://jer-s-eys.vercel.app/',
    codeUrl: 'https://github.com/SE-Pr0/jerSEys',
  },
  {
    title: 'Networks Proxy Server',
    context: 'Computer Networks Project',
    period: '2026',
    highlights: [
      'Implemented a proxy server to mediate client-server communication over network sockets',
      'Handled request forwarding and response relaying with attention to protocol behavior',
      'Strengthened debugging and traffic analysis skills through practical networking scenarios',
    ],
    tech: ['Computer Networks', 'Sockets', 'Proxy Server', 'Client-Server'],
    codeUrl: 'https://github.com/jadalhassan/Networks-Proxy-Server',
  },
  {
    title: 'Esports Performance Tracker',
    context: 'Database Systems Project',
    period: '2025',
    hideDemo: true,
    highlights: [
      'Designed a relational schema with ER modeling and normalization best practices',
      'Created analytical SQL queries using joins, aggregations, and nested subqueries',
      'Implemented triggers & views to automate reporting and ensure data consistency',
    ],
    tech: ['SQL', 'ER Modeling', 'Normalization', 'Triggers & Views'],
    codeUrl: 'https://github.com/jadalhassan/Esports-Team-Performance-Tracker',
  },
  {
    title: 'AI Maze Game',
    context: 'Python + AI Logic Project',
    period: '2025',
    highlights: [
      'Developed an interactive maze game in Python Turtle with timers and difficulty levels',
      'Integrated A* pathfinding for hints, solution rendering, and optimal path guidance',
      'Tracked player metrics and exported session data to CSV with pandas for analysis',
    ],
    tech: ['Python', 'Turtle', 'A* Pathfinding', 'Pandas', 'CSV Analytics'],
    codeUrl: 'https://github.com/jadalhassan/Maze-Game',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading number={3} title="Projects" />
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-reveal
              style={{ '--reveal-delay': `${80 + i * 90}ms` }}
              className={`relative group bg-white/5 border rounded-2xl p-6 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 ${
                project.featured
                  ? 'border-violet-500/25 hover:border-violet-500/50 hover:shadow-violet-500/10'
                  : 'border-white/10 hover:border-violet-500/25 hover:shadow-violet-500/5'
              }`}
            >
              <div className={project.hideDemo ? '' : 'grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]'}>
                {!project.hideDemo && (
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a]">
                    <div className="h-11 px-3 flex items-center gap-2 border-b border-white/10 bg-[#0a0d16]">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
                      <span className="ml-2 text-[11px] text-slate-500 font-mono truncate">{formatHost(project.liveUrl || project.codeUrl)}</span>
                    </div>
                    <div className="relative min-h-[210px] sm:min-h-[260px] p-5 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-400/20">
                      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(148,163,184,0.2) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                      <div className="relative h-full rounded-lg border border-white/15 bg-black/30 p-4 flex flex-col justify-between">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.12em] text-cyan-200/80">Mini Demo</p>
                          <p className="mt-2 text-white font-semibold leading-snug">{project.title}</p>
                          <p className="mt-2 text-xs text-slate-300">{project.context}</p>
                        </div>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('project_live_demo_click', { project: project.title, source: 'mini_preview' })}
                            className="inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md transition-colors"
                          >
                            Open Preview
                          </a>
                        ) : (
                          <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 text-xs font-semibold bg-white/10 border border-white/15 text-slate-200 rounded-md">
                            Demo Not Available
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-4 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-mono">
                      <SparkleIcon className="w-3.5 h-3.5" /> Featured
                    </span>
                  )}
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300 break-words">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm sm:text-base">{project.context}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-mono text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs sm:text-sm font-mono">
                      {project.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {project.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-violet-500/80 shrink-0 mt-0.5">
                          <ChevronRightIcon className="w-4 h-4" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 pt-5 border-t border-white/5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_live_demo_click', { project: project.title })}
                        aria-label={`Open live demo for ${project.title}`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('project_github_click', { project: project.title })}
                      aria-label={`Open GitHub repository for ${project.title}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-[#161b22] hover:bg-[#1f2630] border border-[#30363d] text-[#f0f6fc] rounded-lg transition-colors"
                    >
                      <GithubMarkIcon className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



