import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import ThemeSwitcher from './components/ThemeSwitcher'
import LoadingSpinner from './components/LoadingSpinner'
import Newsletter from './components/Newsletter'
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
const Testimonials = React.lazy(() => import('./components/Testimonials'))
const GitHubGraph = React.lazy(() => import('./components/GitHubGraph'))
const Contact = React.lazy(() => import('./components/Contact'))
const Timeline = React.lazy(() => import('./components/Timeline'))

function App() {
  return (
    <ThemeProvider>
      <div className='overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900'
           style={{ color: 'var(--text-color)', backgroundColor: 'var(--background-color)' }}>
        <ScrollProgress />
        <ThemeSwitcher />
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
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
              <section id="timeline" className="pt-20">
                <Timeline />
              </section>
              <section id="projects" className="pt-20">
                <BrowserRouter>
                  <Project />
                </BrowserRouter>
              </section>
              {/* <section id="testimonials" className="pt-20">
                <Testimonials />
              </section> */}
              <section id="github" className="pt-20">
                <GitHubGraph />
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
