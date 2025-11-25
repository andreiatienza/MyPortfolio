import './ThemeToggle.css'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  )
}

export default ThemeToggle

