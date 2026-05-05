import { useEffect, useState } from 'react'
import { SectionHeading } from './About'
import { ChevronRightIcon, GithubMarkIcon, SparkleIcon } from './Icons'
import { trackEvent } from '../lib/analytics'

function formatHost(url) {
  if (!url) return 'local-preview'
  try { return new URL(url).host } catch { return 'live-preview' }
}

// ── Iframe (live site scaled down) ──────────────────────────────────────────
function IframePreview({ url }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: 'calc(100% / 0.36)', height: 'calc(100% / 0.36)',
        transform: 'scale(0.36)', transformOrigin: 'top left',
      }}>
        <iframe
          src={url}
          title="Live preview"
          loading="lazy"
          style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#0b0f1a] to-transparent pointer-events-none" />
    </div>
  )
}

// ── Animated proxy terminal ──────────────────────────────────────────────────
const PROXY_LINES = [
  { text: '$ proxy --port 8080 --target 203.0.113.5:80', cls: 'text-slate-500' },
  { text: 'Proxy listening on 0.0.0.0:8080 …', cls: 'text-emerald-400' },
  { text: '', cls: '' },
  { text: '[CLIENT]  GET /api/courses HTTP/1.1', cls: 'text-cyan-300' },
  { text: '[PROXY ]  → forwarding to 203.0.113.5:80', cls: 'text-violet-300' },
  { text: '[SERVER]  ← 200 OK  (14 ms)', cls: 'text-emerald-400' },
  { text: '[PROXY ]  ← relaying to client', cls: 'text-violet-300' },
  { text: '[CLIENT]  ✓ response received', cls: 'text-cyan-300' },
  { text: '', cls: '' },
  { text: '[CLIENT]  POST /login HTTP/1.1', cls: 'text-cyan-300' },
  { text: '[PROXY ]  → forwarding to 203.0.113.5:80', cls: 'text-violet-300' },
  { text: '[SERVER]  ← 401 Unauthorized  (8 ms)', cls: 'text-rose-400' },
]

function TerminalDemo() {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown >= PROXY_LINES.length) {
      const t = setTimeout(() => setShown(0), 2500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setShown(s => s + 1), shown === 0 ? 300 : 420)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div className="p-4 font-mono text-[11px] leading-[1.85] overflow-hidden h-full">
      {PROXY_LINES.slice(0, shown).map((line, i) =>
        line.text
          ? <div key={i} className={line.cls}>{line.text}</div>
          : <div key={i} className="h-[1.85em]" />
      )}
      {shown < PROXY_LINES.length && (
        <span className="text-slate-400 animate-pulse">▌</span>
      )}
    </div>
  )
}

// ── Esports SQL leaderboard ──────────────────────────────────────────────────
const ESPORTS_ROWS = [
  { rank: 1, name: 'QuantumX',   kda: '4.21', wins: 147 },
  { rank: 2, name: 'ShadowByte', kda: '3.87', wins: 132 },
  { rank: 3, name: 'Nexviper',   kda: '3.65', wins: 119 },
  { rank: 4, name: 'ProStrike',  kda: '3.12', wins:  98 },
  { rank: 5, name: 'AceHunter', kda: '2.94', wins:  84 },
]

function EsportsDemo() {
  return (
    <div className="p-4 h-full flex flex-col gap-2.5 overflow-hidden">
      <p className="text-[10px] text-violet-300 font-mono uppercase tracking-widest shrink-0">
        SELECT player, AVG(kda), COUNT(wins) …
      </p>
      <div className="flex-1 overflow-hidden rounded border border-white/10 min-h-0">
        <table className="w-full text-[11px] font-mono">
          <thead>
            <tr className="bg-white/5 border-b border-white/10">
              <th className="px-2 py-1.5 text-left text-slate-500 font-normal">#</th>
              <th className="px-2 py-1.5 text-left text-slate-500 font-normal">Player</th>
              <th className="px-2 py-1.5 text-right text-slate-500 font-normal">KDA</th>
              <th className="px-2 py-1.5 text-right text-slate-500 font-normal">Wins</th>
            </tr>
          </thead>
          <tbody>
            {ESPORTS_ROWS.map(row => (
              <tr key={row.rank} className="border-b border-white/5">
                <td className="px-2 py-1.5 text-slate-500">{row.rank}</td>
                <td className={`px-2 py-1.5 ${row.rank === 1 ? 'text-amber-300' : 'text-slate-300'}`}>
                  {row.rank === 1 && <span className="mr-1">🥇</span>}{row.name}
                </td>
                <td className="px-2 py-1.5 text-right text-cyan-300">{row.kda}</td>
                <td className="px-2 py-1.5 text-right text-slate-300">{row.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Animated A* maze ─────────────────────────────────────────────────────────
// 0 = open, 1 = wall
const MAZE_GRID = [
  [1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,1],
  [1,1,1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,1],
  [1,0,1,1,1,0,1,0,1],
  [1,0,0,0,1,0,0,0,1],
  [1,1,1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1,1],
]
// A* optimal path from S[1,1] to E[7,7]
const MAZE_PATH = [
  [1,1],[1,2],[1,3],[2,3],[3,3],[3,4],[3,5],[4,5],[5,5],[5,6],[5,7],[6,7],[7,7],
]
const S = [1, 1]
const E = [7, 7]

function MazeDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step >= MAZE_PATH.length) {
      const reset = setTimeout(() => setStep(0), 1800)
      return () => clearTimeout(reset)
    }
    const t = setTimeout(() => setStep(s => s + 1), 200)
    return () => clearTimeout(t)
  }, [step])

  const revealed = new Set(MAZE_PATH.slice(0, step).map(([r, c]) => `${r},${c}`))

  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="inline-block border border-white/10 rounded overflow-hidden">
        {MAZE_GRID.map((row, r) => (
          <div key={r} className="flex">
            {row.map((cell, c) => {
              const key = `${r},${c}`
              const isS = r === S[0] && c === S[1]
              const isE = r === E[0] && c === E[1]
              const isPath = revealed.has(key) && !isS && !isE
              const isDone = step >= MAZE_PATH.length
              return (
                <div
                  key={c}
                  className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold transition-colors duration-150 ${
                    cell === 1
                      ? 'bg-slate-800'
                      : isS
                        ? 'bg-cyan-500 text-slate-900'
                        : isE
                          ? isDone ? 'bg-violet-400 text-white' : 'bg-slate-700 text-slate-400'
                          : isPath
                            ? 'bg-cyan-400/40'
                            : 'bg-slate-900'
                  }`}
                >
                  {isS ? 'S' : isE ? 'E' : null}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <p className="text-[10px] font-mono text-slate-500">
        {step < MAZE_PATH.length ? `A* exploring… step ${step}/${MAZE_PATH.length - 1}` : 'Optimal path found ✓'}
      </p>
    </div>
  )
}

// ── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Course Management System',
    context: 'Academic Full-Stack Project',
    period: '2026',
    featured: true,
    demoType: 'iframe',
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
    demoType: 'iframe',
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
    demoType: 'terminal',
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
    demoType: 'esports',
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
    demoType: 'maze',
    highlights: [
      'Developed an interactive maze game in Python Turtle with timers and difficulty levels',
      'Integrated A* pathfinding for hints, solution rendering, and optimal path guidance',
      'Tracked player metrics and exported session data to CSV with pandas for analysis',
    ],
    tech: ['Python', 'Turtle', 'A* Pathfinding', 'Pandas', 'CSV Analytics'],
    codeUrl: 'https://github.com/jadalhassan/Maze-Game',
  },
]

function ProjectDemo({ project }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a]">
      {/* Browser chrome */}
      <div className="h-11 px-3 flex items-center gap-2 border-b border-white/10 bg-[#0a0d16]">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
        <span className="ml-2 text-[11px] text-slate-500 font-mono truncate">
          {formatHost(project.liveUrl || project.codeUrl)}
        </span>
      </div>
      {/* Demo content */}
      <div className="relative min-h-[210px] sm:min-h-[260px] overflow-hidden">
        {project.demoType === 'iframe' && <IframePreview url={project.liveUrl} />}
        {project.demoType === 'terminal' && <TerminalDemo />}
        {project.demoType === 'esports' && <EsportsDemo />}
        {project.demoType === 'maze' && <MazeDemo />}
      </div>
    </div>
  )
}

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
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <ProjectDemo project={project} />

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
