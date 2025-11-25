import { useState, useEffect } from 'react'
import './Projects.css'

type ProjectSlide = {
  title: string
  description: string
  image: string
}

type Project = {
  title: string
  year: string
  description: string
  tags: string[]
  image: string
  slides: ProjectSlide[]
}

const projects: Project[] = [
  {
    title: 'Sustainable Assessment Tool: SDG Monitoring System',
    year: '2025',
    description:
      'Built for BSU-TNEU campuses, this system tracks and monitors sustainability metrics so organizations can evaluate their progress toward the UN SDGs.',
    tags: ['HTML', 'CSS', 'PHP', 'JavaScript', 'phpMyAdmin'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    slides: [
      {
        title: 'Dashboard Experience',
        description: 'An immersive analytics dashboard with live data widgets and modular sections tailored per user role.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Collaboration Flow',
        description: 'Real-time collaboration with in-app comments, mentions, and task assignments directly from the interface.',
        image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Performance Insights',
        description: 'Automated performance insights with exportable PDF reports and email scheduling.',
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    title: 'Barangay Connect: Community Reporting, Ranting and Announcement',
    year: '2024',
    description:
      'A barangay-wide platform built for Brgy. San Lucas that lets residents report issues, share feedback, and receive official announcements in real time.',
    tags: ['HTML', 'CSS', 'PHP', 'phpMyAdmin'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    slides: [
      {
        title: 'API First Architecture',
        description: 'Typed REST API with versioning, role-based access control, and automated testing pipeline.',
        image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Custom CMS Tools',
        description: 'Drag-and-drop content builder with block templates and instant preview.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Deployment Insights',
        description: 'Automated deployment insights with health checks, logs, and rollback options.',
        image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    title: 'Project Three',
    year: '2022',
    description: 'Mobile-responsive website with smooth animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    slides: [
      {
        title: 'Hero Animations',
        description: 'Layered hero animation with parallax scroll, SVG morphing, and dynamic copy.',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Micro Interactions',
        description: 'Micro animations triggered on scroll and click to highlight interactive elements.',
        image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Content Modules',
        description: 'Reusable content modules allowing marketing teams to reorder sections without dev time.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
]

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    document.body.style.overflow = activeProjectIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProjectIndex])

  const openModal = (index: number) => {
    setActiveProjectIndex(index)
    setCurrentSlide(0)
  }

  const closeModal = () => {
    setActiveProjectIndex(null)
  }

  const handleNext = () => {
    if (activeProjectIndex === null) return
    const slides = projects[activeProjectIndex].slides
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    if (activeProjectIndex === null) return
    const slides = projects[activeProjectIndex].slides
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null
  const activeSlide =
    activeProject && activeProject.slides.length > 0
      ? activeProject.slides[currentSlide]
      : null

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">
            These are the builds I enjoyed crafting the most—interfaces, APIs, and experiences I shaped end-to-end to solve real problems.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
                <div className="project-content">
                  <div>
                    <div className="project-meta">
                      <span className="project-year">{project.year}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="project-cta" onClick={() => openModal(index)}>
                    View walkthrough
                    <span aria-hidden>➜</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && activeSlide && (
        <div className="project-modal" role="dialog" aria-modal="true">
          <div className="modal-backdrop" onClick={closeModal} />
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <div className="modal-carousel">
              <div
                className="carousel-image"
                style={{ backgroundImage: `url(${activeSlide.image})` }}
                aria-hidden
              />
              <div className="carousel-info">
                <span className="carousel-step">
                  {currentSlide + 1}/{activeProject.slides.length}
                </span>
                <h3 className="carousel-title">{activeProject.title}</h3>
                <h4 className="carousel-slide-title">{activeSlide.title}</h4>
                <p className="carousel-description">{activeSlide.description}</p>
                <div className="project-tags">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="carousel-controls">
                  <button type="button" className="carousel-btn" onClick={handlePrev}>
                    ← Prev
                  </button>
                  <button type="button" className="carousel-btn" onClick={handleNext}>
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects

