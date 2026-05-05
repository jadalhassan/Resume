import { Suspense, lazy, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { initAnalytics } from './lib/analytics'

const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Courses = lazy(() => import('./components/Courses'))
const Skills = lazy(() => import('./components/Skills'))
const Activities = lazy(() => import('./components/Activities'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observed = new WeakSet()

    const revealImmediately = (el) => {
      el.classList.add('is-visible')
    }

    const observer = prefersReducedMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            })
          },
          { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
        )

    const observeRevealElements = (root) => {
      if (!root || !(root instanceof Element || root instanceof Document)) return
      const elements = root.querySelectorAll('[data-reveal]')
      elements.forEach((el) => {
        if (observed.has(el)) return
        observed.add(el)
        if (prefersReducedMotion) {
          revealImmediately(el)
          return
        }
        observer.observe(el)
      })
    }

    observeRevealElements(document)

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.matches('[data-reveal]')) {
            if (prefersReducedMotion) {
              revealImmediately(node)
            } else if (!observed.has(node)) {
              observed.add(node)
              observer.observe(node)
            }
          }
          observeRevealElements(node)
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      mutationObserver.disconnect()
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#050508] text-slate-400 relative overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-violet-600 focus:text-white focus:font-semibold"
      >
        Skip to main content
      </a>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(139,92,246,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="h-20" aria-hidden="true" />}>
          <Education />
          <Experience />
          <Projects />
          <Courses />
          <Skills />
          <Activities />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-16" aria-hidden="true" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

