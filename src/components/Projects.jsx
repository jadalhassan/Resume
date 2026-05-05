import { SectionHeading } from './About'
import { ChevronRightIcon, GithubMarkIcon, SparkleIcon } from './Icons'
import { trackEvent } from '../lib/analytics'

function formatHost(url) {
  if (!url) return 'local-preview'
  try { return new URL(url).host } catch { return 'live-preview' }
}

// ── Syntax tokenizer (left-to-right, no regex conflicts) ────────────────────
const PY_KWS  = new Set(['def','return','while','if','for','else','elif','import','from','in','not','and','or','break','class','self','True','False','None','with','as','raise','pass','float','inf'])
const SQL_KWS = new Set(['CREATE','FUNCTION','RETURNS','BEGIN','DECLARE','SELECT','INTO','FROM','WHERE','UPDATE','SET','IF','ELSE','RETURN','END','TRIGGER','AFTER','INSERT','ON','FOR','EACH','ROW','THEN','DEFAULT','INT','VARCHAR','DECIMAL','AND','OR','NOT','NULL','IS','JOIN','INNER','ORDER','BY','ASC'])
const JS_KWS  = new Set(['const','let','var','function','return','if','else','throw','try','catch','finally','async','await','export','import','new','for','of','while','true','false','null','undefined','this','class','extends','typeof','instanceof'])

const C = {
  kw:   '#22d3ee',
  fn:   '#fde047',
  str:  '#fcd34d',
  num:  '#c4b5fd',
  cmt:  '#64748b',
  tx:   '#cbd5e1',
  punc: '#94a3b8',
}

function tokenizeLine(line, lang) {
  const kws = lang === 'python' ? PY_KWS : lang === 'js' ? JS_KWS : SQL_KWS
  const toks = []
  let i = 0

  const trimmed = line.trimStart()
  if ((lang === 'python' && trimmed.startsWith('#')) ||
      (lang === 'sql'    && trimmed.startsWith('--'))) {
    return [{ text: line, color: C.cmt }]
  }

  while (i < line.length) {
    const ch = line[i]

    // line comment
    if (lang === 'python' && ch === '#') { toks.push({ text: line.slice(i), color: C.cmt }); break }
    if (lang === 'sql' && ch === '-' && line[i+1] === '-') { toks.push({ text: line.slice(i), color: C.cmt }); break }
    if (lang === 'js'  && ch === '/' && line[i+1] === '/') { toks.push({ text: line.slice(i), color: C.cmt }); break }

    // string / template literal / byte string
    const isBS = (ch === 'b' || ch === 'B') && (line[i+1] === '"' || line[i+1] === "'")
    if (ch === '"' || ch === "'" || ch === '`' || isBS) {
      const start = i
      const q = isBS ? line[++i] : ch
      i++
      while (i < line.length && line[i] !== q) { if (line[i] === '\\') i++; i++ }
      toks.push({ text: line.slice(start, i + 1), color: C.str })
      i++
      continue
    }

    // identifier / keyword / function call
    if (/[a-zA-Z_$]/.test(ch)) {
      let j = i
      while (j < line.length && /[\w$]/.test(line[j])) j++
      const word = line.slice(i, j)
      toks.push({ text: word, color: kws.has(word) ? C.kw : line[j] === '(' ? C.fn : C.tx })
      i = j
      continue
    }

    // number
    if (/\d/.test(ch)) {
      let j = i
      while (j < line.length && /[\d.]/.test(line[j])) j++
      toks.push({ text: line.slice(i, j), color: C.num })
      i = j
      continue
    }

    toks.push({ text: ch, color: /[()[\]{},;]/.test(ch) ? C.punc : C.tx })
    i++
  }

  return toks
}

function CodeDemo({ code, lang }) {
  const lines = code.split('\n')
  const tokenized = lines.map(l => tokenizeLine(l, lang))

  return (
    <div
      className="overflow-auto h-full p-3 font-mono leading-[1.75]"
      style={{ fontSize: '10.5px', tabSize: 4 }}
    >
      {tokenized.map((lineToks, li) => (
        <div key={li} className="flex gap-2.5 min-h-[1.75em]">
          <span style={{ color: '#334155', userSelect: 'none', minWidth: '1.4em', textAlign: 'right', flexShrink: 0 }}>
            {li + 1}
          </span>
          <span>
            {lineToks.map((tok, ti) => (
              <span key={ti} style={{ color: tok.color }}>{tok.text}</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}

// ── Actual code snippets from each repo ─────────────────────────────────────

// github.com/Khaliya-3a-Allah/course-management-system — server/middleware/authPlaceholder.js
const CMS_CODE = `\
export const authenticateRequest = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer "))
    throw new ApiError(401, "Authentication required.");
  let decoded;
  try {
    decoded = jwt.verify(authHeader.split(" ")[1], env.JWT_SECRET);
  } catch {
    throw new ApiError(401, "Invalid or expired token.");
  }
  const user = await findById("users", decoded.id);
  if (!user) throw new ApiError(401, "User no longer exists.");
  if (user.isDeleted) throw new ApiError(403, "Account disabled.");
  req.user = user;
  next();
});

export function authorizeRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role))
      throw new ApiError(403, "Permission denied.");
    next();
  };
}`

// github.com/SE-Pr0/jerSEys — backend/src/controllers/orderController.js
const JERSEYS_CODE = `\
const createOrder = async (req, res, next) => {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.beginTransaction();
    const [items] = await conn.execute(
      \`SELECT ci.quantity, p.name, p.price, p.stock
       FROM cart_items ci JOIN products p ON p.id = ci.product_id
       WHERE ci.user_id = ? FOR UPDATE\`, [req.user.id]);
    if (!items.length) throw createError("Cart is empty", 400);
    let total = 0;
    for (const item of items) {
      if (item.stock < item.quantity)
        throw createError(\`Out of stock: \${item.name}\`, 400);
      total += Number(item.price) * item.quantity;
    }
    await conn.execute(
      \`INSERT INTO orders (user_id, total_price) VALUES (?, ?)\`,
      [req.user.id, total.toFixed(2)]);
    await conn.commit();
  } catch (e) { if (conn) await conn.rollback(); next(e); }
  finally { conn?.release(); }
};`

// github.com/jadalhassan/Networks-Proxy-Server — proxy_server.py
const PROXY_CODE = `\
def handle_https_tunnel(client_socket, parsed):
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.connect((parsed["host"], parsed["port"]))
    client_socket.sendall(b"HTTP/1.1 200 Connection Established\\r\\n\\r\\n")
    client_socket.setblocking(False)
    server_socket.setblocking(False)
    while True:
        readable, _, err = select.select(
            [client_socket, server_socket], [],
            [client_socket, server_socket], 30
        )
        if err or not readable:
            break
        for sock in readable:
            data = sock.recv(4096)
            if not data:
                raise ConnectionResetError("Connection closed")
            other = server_socket if sock is client_socket else client_socket
            other.sendall(data)`

// github.com/jadalhassan/Esports-Team-Performance-Tracker — SQL queries.sql
const ESPORTS_CODE = `\
CREATE FUNCTION PlayerKDA(p_id VARCHAR(10))
RETURNS DECIMAL(6,2)
BEGIN
    DECLARE k, a, d INT DEFAULT 0;
    SELECT SUM(Kills)   INTO k FROM PlayerMatchStats
    WHERE PlayerID = p_id;
    SELECT SUM(Assists) INTO a FROM PlayerMatchStats
    WHERE PlayerID = p_id;
    SELECT SUM(Deaths)  INTO d FROM PlayerMatchStats
    WHERE PlayerID = p_id;
    RETURN IF(d = 0, k + a, (k + a) / d);
END//

CREATE TRIGGER mark_player_active
AFTER INSERT ON PlayerMatchStats FOR EACH ROW
BEGIN
    UPDATE Player SET Status = 'Active'
    WHERE PlayerID = NEW.PlayerID;
END//`

// github.com/jadalhassan/Maze-Game — Main.py
const MAZE_CODE = `\
def find_path(start, end):
    heap, came_from, g = [(0, start)], {}, {start: 0}
    while heap:
        _, cur = heapq.heappop(heap)
        if cur == end:
            path = []
            while cur in came_from:
                path.append(cur)
                cur = came_from[cur]
            return path[::-1]
        for dx, dy in [(0,1),(1,0),(0,-1),(-1,0)]:
            nb = (cur[0]+dx, cur[1]+dy)
            if maze[nb[1]][nb[0]] == 0:
                g_new = g.get(cur, float('inf')) + 1
                if g_new < g.get(nb, float('inf')):
                    came_from[nb] = cur
                    g[nb] = g_new
                    f = g_new + abs(nb[0]-end[0]) + abs(nb[1]-end[1])
                    heapq.heappush(heap, (f, nb))`

// ── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'Course Management System',
    context: 'Academic Full-Stack Project',
    period: '2026',
    featured: true,
    demo: { type: 'code', code: CMS_CODE, lang: 'js' },
    highlights: [
      'Built a responsive UI with React & Tailwind using reusable components and clean routing',
      'Integrated Node.js/Express APIs with MongoDB for enrollment, browsing, and course management flows',
      'Implemented JWT auth middleware with role-based access control and soft-delete enforcement',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    liveUrl: 'https://khaliya-3a-allah.github.io/course-management-system/',
    codeUrl: 'https://github.com/Khaliya-3a-Allah/course-management-system',
  },
  {
    title: 'Sports Goods Store Management System',
    context: 'Software Engineering Project',
    period: '2026',
    demo: { type: 'code', code: JERSEYS_CODE, lang: 'js' },
    highlights: [
      'Designed a web system for product listings, order management, and inventory workflows',
      'Built transactional order creation with FOR UPDATE row-locking and atomic rollback',
      'Applied MVC & client-server architecture for modular and scalable structure',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'MVC', 'Transactions'],
    liveUrl: 'https://jer-s-eys.vercel.app/',
    codeUrl: 'https://github.com/SE-Pr0/jerSEys',
  },
  {
    title: 'Networks Proxy Server',
    context: 'Computer Networks Project',
    period: '2026',
    demo: { type: 'code', code: PROXY_CODE, lang: 'python' },
    highlights: [
      'Implemented a proxy server to mediate client-server communication over network sockets',
      'Handled HTTPS CONNECT tunneling with non-blocking select() for bidirectional relay',
      'Strengthened debugging and traffic analysis skills through practical networking scenarios',
    ],
    tech: ['Python', 'Sockets', 'HTTP/HTTPS', 'select()', 'Proxy Server'],
    codeUrl: 'https://github.com/jadalhassan/Networks-Proxy-Server',
  },
  {
    title: 'Esports Performance Tracker',
    context: 'Database Systems Project',
    period: '2025',
    demo: { type: 'code', code: ESPORTS_CODE, lang: 'sql' },
    highlights: [
      'Designed a relational schema with ER modeling and normalization best practices',
      'Built a stored function to compute KDA ratios and a trigger to auto-update player status',
      'Created analytical SQL queries using joins, aggregations, and nested subqueries',
    ],
    tech: ['SQL', 'ER Modeling', 'Stored Functions', 'Triggers & Views'],
    codeUrl: 'https://github.com/jadalhassan/Esports-Team-Performance-Tracker',
  },
  {
    title: 'AI Maze Game',
    context: 'Python + AI Logic Project',
    period: '2025',
    demo: { type: 'code', code: MAZE_CODE, lang: 'python' },
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
  const { demo, liveUrl, codeUrl } = project
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0b0f1a]">
      <div className="h-11 px-3 flex items-center gap-2 border-b border-white/10 bg-[#0a0d16]">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
        <span className="ml-2 text-[11px] text-slate-500 font-mono truncate">
          {formatHost(liveUrl || codeUrl)}
        </span>
      </div>
      <div className="relative min-h-[210px] sm:min-h-[260px] overflow-hidden">
        {demo.type === 'code' && <CodeDemo code={demo.code} lang={demo.lang} />}
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
                          <span key={t} className="px-2.5 py-1 text-xs font-mono text-violet-300 bg-violet-500/10 border border-violet-500/20 rounded-md">
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
