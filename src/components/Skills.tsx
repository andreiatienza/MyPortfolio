import './Skills.css'
import htmlIcon from '../assets/images/html.png'
import cssIcon from '../assets/images/css.png'
import jsIcon from '../assets/images/js.png'
import phpIcon from '../assets/images/php.png'
import reactIcon from '../assets/images/react.png'
import nodejsIcon from '../assets/images/nodejs.png'
import bootstrapIcon from '../assets/images/bootstrap.png'
import githubIcon from '../assets/images/github.png'
import githubIconLight from '../assets/images/github2.png'
import pythonIcon from '../assets/images/python.png'
import figmaIcon from '../assets/images/figma.png'
import mysqlIcon from '../assets/images/mysql.png'

interface SkillsProps {
  theme: 'light' | 'dark'
}

const Skills = ({ theme }: SkillsProps) => {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Github', icon: theme === 'light' ? githubIconLight : githubIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'MySQL', icon: mysqlIcon }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="skills-description">
          A collection of technologies and tools I work with to build modern, scalable, and efficient web applications.
        </p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} className="skill-icon-image" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

