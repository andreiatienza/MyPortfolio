import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setIsLoading(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      {isLoading ? (
        <Loader theme={theme} progress={progress} />
      ) : (
        <div className="app">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Skills theme={theme} />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

