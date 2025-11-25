import brandLogo from '../assets/images/Blogo.png'
import './Loader.css'

interface LoaderProps {
  theme: 'light' | 'dark'
  progress: number
}

const Loader = ({ theme, progress }: LoaderProps) => {
  return (
    <div className={`loader ${theme}`}>
      <div className="loader-card">
        <div className="loader-logo-glow">
          <img src={brandLogo} alt="Bon Andrei Logo" className="loader-logo" />
        </div>
        <p className="loader-name">Bon Andrei Atienza</p>
        <p className="loader-role">Aspiring Web Developer</p>
        <div className="loader-progress-text">{progress}%</div>
        <div className="loader-line">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

export default Loader


