import { useState, useEffect } from 'react'
import './Navbar.css'
import BrandLogo from '../assets/images/Blogo.png'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isPastHero, setIsPastHero] = useState(false)
  const [showGlow, setShowGlow] = useState(
    typeof window !== 'undefined' ? window.location.hash !== '#projects' : true,
  )
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.4
      setIsPastHero(window.scrollY > heroThreshold)

      const sections = navLinks
        .map(link => {
          const section = document.querySelector(link.href)
          if (!section) return null
          const rect = section.getBoundingClientRect()
          return { id: link.href, offset: Math.abs(rect.top) }
        })
        .filter(Boolean) as { id: string; offset: number }[]

      if (sections.length > 0) {
        const current = sections.reduce((prev, curr) =>
          curr.offset < prev.offset ? curr : prev,
        )
        setActiveSection(current.id)
      }
    }

    const handleHashChange = () => {
      setShowGlow(window.location.hash !== '#projects')
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isPastHero ? 'scrolled' : ''}`}>
      {showGlow && !isPastHero && <div className="navbar-glow" aria-hidden></div>}
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <img src={BrandLogo} alt="Bon Andrei Logo" className="navbar-logo-image" />
          <div className="navbar-logo-text">
            <span className="logo-name">Bon Andrei</span>
            <span className="logo-tagline">Portfolio</span>
          </div>
        </a>
        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className="navbar-item nav-animate"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <a
                href={link.href}
                className={`navbar-link ${activeSection === link.href ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="navbar-item navbar-theme-toggle">
            <button 
              className={`theme-switch ${theme === 'dark' ? 'dark' : 'light'}`}
              onClick={toggleTheme} 
              aria-label="Toggle theme"
            >
              <span className="theme-switch-track">
                <span className="theme-switch-slider">
                  <span className="theme-emoticon">{theme === 'light' ? '☼' : '☾'}</span>
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

