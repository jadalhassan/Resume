import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Footer from './components/Footer'

function App() {
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
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Activities />
      </main>
      <Footer />
    </div>
  )
}

export default App
