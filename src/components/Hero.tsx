import { useState, useEffect } from 'react'
import './Hero.css'
import HeroPortrait from '../assets/images/Pic.png'

const ROLES = ['Aspiring Web Developer']

const socialLinks = [
  {
    href: 'https://www.facebook.com/bonandrei.atienza',
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.5 8.5V6.75c0-.6.4-.75.68-.75H15V3.25h-2.1c-2.32 0-3.4 1.72-3.4 3.42V8.5H8v2.5h1.5V20h3.25v-9h2.15l.35-2.5h-2.5Z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/bonandrei_atienza?igsh=bHcyeGZxN211aGJz',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 3.5h8a4.5 4.5 0 0 1 4.5 4.5v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm0 2A2.5 2.5 0 0 0 5.5 8v8A2.5 2.5 0 0 0 8 18.5h8a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 16 5.5Zm4 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.25-2.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/andreiatienza',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9.94 9.94 0 0 0-3.15 19.4c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2a2.65 2.65 0 0 0-1.1-1.45c-.9-.63.07-.62.07-.62.98.07 1.5 1.02 1.5 1.02.88 1.51 2.31 1.07 2.88.82a2.1 2.1 0 0 1 .63-1.32c-2.22-.26-4.55-1.11-4.55-4.93a3.86 3.86 0 0 1 1-2.7 3.57 3.57 0 0 1 .1-2.66s.84-.27 2.75 1.02a9.2 9.2 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.37.84.41 1.8.1 2.66a3.86 3.86 0 0 1 1 2.7c0 3.84-2.34 4.66-4.57 4.91.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A9.94 9.94 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/bon-andrei-atienza-41343537b',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.3 9H3.8v12h2.5Zm.2-3.75a1.55 1.55 0 1 0-3.1 0 1.55 1.55 0 0 0 3.1 0ZM20.5 14.5c0-3.36-1.8-4.93-4.2-4.93a3.62 3.62 0 0 0-3.3 1.8h-.1V9H10.6v12h2.5v-6.4c0-1.7.32-3.34 2.4-3.34s2 1.9 2 3.45V21h2.5Z" />
      </svg>
    ),
  },
]

const Hero = () => {
  const [displayedRole, setDisplayedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 2000

  useEffect(() => {
    const currentRole = ROLES[currentIndex]

    if (!isDeleting && charIndex === currentRole.length) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting && charIndex === 0) {
      const resetTimer = setTimeout(() => {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % ROLES.length)
      }, pauseTime / 2)
      return () => clearTimeout(resetTimer)
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedRole(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        setDisplayedRole(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting animate-fade-in">Hello, I'm</span>
            <h1 className="hero-name animate-slide-in-left">Bon Andrei</h1>
            <div className="hero-role-container animate-fade-in-delay">
              <span className="hero-role">
                {displayedRole}
                <span className="typing-cursor">|</span>
              </span>
            </div>
            <p className="hero-description animate-fade-in-delay-2">
              I'm a passionate developer with expertise in building modern web applications. 
              I love creating beautiful, functional, and user-friendly experiences that make a difference.
            </p>
            <div className="hero-buttons animate-fade-in-delay-3">
              <a
                href="#contact"
                className="btn btn-primary btn-pulse"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                Get In Touch
              </a>
              <a
                href="/Bon-Andrei-Atienza-CV.pdf"
                className="btn btn-secondary"
                download
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
            <div className="hero-socials animate-fade-in-delay-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-image animate-slide-in-right">
            <div className="hero-image-placeholder">
              <div className="image-glow"></div>
              <img src={HeroPortrait} alt="Bon Andrei portrait" className="hero-portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

