import './About.css'

const highlights = [
  '3+ years practicing modern web technologies',
  'Focus on minimal, high-performing user interfaces',
  'Experience collaborating with remote product teams',
  'Comfortable shipping design systems and component libraries',
]

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-grid about-reveal">
        <div className="about-card about-intro fade-in-up">
          <p className="about-label">Story</p>
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I’m Bon Andrei, an aspiring full stack developer who enjoys blending clean UI with thoughtful
            engineering. I build modern web apps that feel fast, intentional, and human. Every project I
            touch aims to be simple, accessible, and memorable.
          </p>
        </div>
        <div className="about-card about-details fade-in-up delay-1">
          <p className="about-label">Highlights</p>
          <ul className="about-list">
            {highlights.map(item => (
              <li key={item} className="about-list-item">
                <span className="bullet" aria-hidden>
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="about-quote fade-in-up delay-2">
            <span className="quote-mark">“</span>
            Building with purpose, curiosity, and a bit of boldness.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

