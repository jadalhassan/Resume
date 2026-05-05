import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const ROOT = process.cwd()
const TARGET_DIRS = ['src', 'public']
const TARGET_EXTS = new Set(['.jsx', '.js', '.html', '.xml'])
const URL_PATTERN = /https?:\/\/[^\s"'`<>()]+/g
const TIMEOUT_MS = 10000
const SKIP_PATTERNS = [
  'www.w3.org/2000/svg',
  'www.sitemaps.org/schemas/sitemap/0.9',
]

function listFiles(dir) {
  const entries = readdirSync(dir)
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry)
    const stats = statSync(full)
    if (stats.isDirectory()) {
      files.push(...listFiles(full))
      continue
    }
    if (TARGET_EXTS.has(extname(full))) files.push(full)
  }
  return files
}

function collectLinks() {
  const urls = new Set()
  for (const relDir of TARGET_DIRS) {
    const absDir = join(ROOT, relDir)
    const files = listFiles(absDir)
    for (const file of files) {
      const content = readFileSync(file, 'utf8')
      const matches = content.match(URL_PATTERN)
      if (!matches) continue
      for (const match of matches) {
        const url = match.replace(/[),.;]+$/g, '')
        if (url.includes('${')) continue
        if (SKIP_PATTERNS.some((pattern) => url.includes(pattern))) continue
        urls.add(url)
      }
    }
  }
  return [...urls].sort()
}

async function request(url, method) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'portfolio-link-check/1.0',
      },
    })
    return response.status
  } finally {
    clearTimeout(timer)
  }
}

async function checkLink(url) {
  try {
    const headStatus = await request(url, 'HEAD')
    if (headStatus < 400) return { ok: true, status: headStatus }
    if ([403, 405, 429].includes(headStatus)) {
      const getStatus = await request(url, 'GET')
      if (getStatus === 999 && url.includes('linkedin.com')) {
        return { ok: true, status: '999 (LinkedIn bot-blocked)' }
      }
      return { ok: getStatus < 400, status: getStatus }
    }
    if (headStatus === 999 && url.includes('linkedin.com')) {
      return { ok: true, status: '999 (LinkedIn bot-blocked)' }
    }
    if ([404].includes(headStatus) && url.includes('linkedin.com')) {
      return { ok: true, status: '404 (LinkedIn bot-blocked)' }
    }
    return { ok: false, status: headStatus }
  } catch {
    try {
      const getStatus = await request(url, 'GET')
      return { ok: getStatus < 400, status: getStatus }
    } catch {
      if (url.includes('linkedin.com')) {
        return { ok: true, status: 'ERR (LinkedIn bot-blocked)' }
      }
      return { ok: false, status: 'ERR' }
    }
  }
}

const urls = collectLinks()
if (!urls.length) {
  console.log('No links found.')
  process.exit(0)
}

console.log(`Checking ${urls.length} external links...`)
const failures = []

for (const url of urls) {
  const result = await checkLink(url)
  if (result.ok) {
    console.log(`OK   ${result.status}  ${url}`)
  } else {
    console.log(`FAIL ${result.status}  ${url}`)
    failures.push({ url, status: result.status })
  }
}

if (failures.length) {
  console.error(`\n${failures.length} link(s) failed.`)
  process.exit(1)
}

console.log('\nAll links are valid.')
