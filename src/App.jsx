import React, { Suspense } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import ThemeSwitcher from './components/ThemeSwitcher'
import LoadingSpinner from './components/LoadingSpinner'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

// Lazy load components for better performance
const Navbar = React.lazy(() => import('./components/Navbar'))
const Hero = React.lazy(() => import('./components/Hero'))
const About = React.lazy(() => import('./components/About'))
const Technologies = React.lazy(() => import('./components/Technologies'))
const SkillsSection = React.lazy(() => import('./components/SkillsSection'))
const Project = React.lazy(() => import('./components/Project'))
const Timeline = React.lazy(() => import('./components/Timeline'))

function App() {
  return (
    <ThemeProvider>
      <div className='min-h-screen overflow-x-hidden antialiased selection:bg-emerald-300 selection:text-slate-950'
           style={{ color: 'var(--text-color)', backgroundColor: 'var(--background-color)' }}>
        <ScrollProgress />
        <ThemeSwitcher />
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(6,78,59,0.55),rgba(15,23,42,0.98))]"
               style={{ backgroundColor: 'var(--background-color)' }}></div>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <main className="relative">
            <Navbar />
            <section id="home" className="pt-24">
              <Hero />
            </section>
            <div className='container mx-auto px-8'>
              <section id="about" className="pt-20">
                <About />
              </section>
            <section id="skills" className="pt-20">
              <Technologies />
              <SkillsSection />
            </section>
              <section id="process" className="pt-20">
                <Timeline />
              </section>
              <section id="projects" className="pt-20">
                <Project />
              </section>
            </div>
          </main>
        </Suspense>
        <BackToTop />
        <section id="contact">
          <Footer />
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App
