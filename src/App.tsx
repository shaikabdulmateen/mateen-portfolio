
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import './App.css'

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
  'React.js', 'Bootstrap', 'jQuery', 'Python',
  'Django', 'PostgreSQL', 'Java', 'Spring Boot',
  'REST APIs', 'Git & GitHub', 'DSA',
]

const projects = [
  {
    number: '01',
    name: 'SmartCart',
    category: 'E-COMMERCE PLATFORM',
    description:
      'An e-commerce web application with a React frontend and Django backend, backed by PostgreSQL. Includes product browsing, authentication, cart management and order processing.',
    tags: ['React', 'Django', 'PostgreSQL'],
    icon: '🛍️',
    color: 'purple',
    liveUrl: "https://smartcart-9o6qdulj0-mateen8.vercel.app/",
    githubUrl: "https://github.com/shaikabdulmateen/smartcart",
  },
  {
    number: '02',
    name: 'Chatter',
    category: 'SOCIAL MEDIA APPLICATION',
    description:
      'A Twitter-inspired application where users can explore a social-style interface and create tweets, powered by React and Django.',
    tags: ['React', 'Django', 'Python'],
    icon: '💬',
    color: 'blue',
    liveUrl: "https://chatter-j1tw.onrender.com/",
    githubUrl: "https://github.com/shaikabdulmateen/Chatter",
  },
  {
    number: '03',
    name: 'Note Minde AI',
    category: 'AI-POWERED NOTES',
    description:
      'A notes application built with React, featuring an AI mode and browser local storage to keep notes available between visits.',
    tags: ['React', 'JavaScript', 'Local Storage'],
    icon: '🧠',
    color: 'pink',
    liveUrl: "https://notemind-ai-sigma.vercel.app",
    githubUrl: "https://github.com/shaikabdulmateen/notemind-ai",
  },
]

const education = [
  {
    course: 'Master of Computer Applications (MCA)',
    institution: 'Omega Institute of Science and Technology',
    date: 'Currently pursuing · 3rd Semester',
  },
  {
    course: 'Bachelor of Computer Applications (BCA)',
    institution: 'Ark Degree and PG College · Osmania University',
    date: '2022 – 2025',
  },
  {
    course: 'Intermediate',
    institution: 'Sri Sai Co-op Junior College',
    date: '2019 – 2021',
  },
  {
    course: 'SSC',
    institution: 'Millat-e-Islamia High School, Utkoor',
    date: '2018 – 2019',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSending(true)
    setFormStatus(null)

    try {
      // Replace YOUR_FORM_ID with the form ID provided by Formspree.
      const response = await fetch('https://formspree.io/f/xgaojkdq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Portfolio message: ${formData.subject}`,
        }),
      })

      if (!response.ok) {
        throw new Error('The message could not be sent.')
      }

      setFormStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent. I’ll get back to you soon.',
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Message not sent yet. Please check the form setup or email me directly using the address below.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="portfolio">
      <header className="navbar">
        <nav className="container nav-inner" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Mateen home">
            Shaik Abdul Mateen<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a className="button button-primary nav-cta" href="#contact">
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="container hero" id="home">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="eyebrow" variants={itemVariants}>
              <span className="status-dot" />
              MCA Student · Python Full Stack Developer
            </motion.div>

            <motion.h1 variants={itemVariants}>
              Building digital
              <br />
              experiences that
              <br />
              <span className="gradient-text">make an impact.</span>
            </motion.h1>

            <motion.p className="hero-description" variants={itemVariants}>
              Hey, I’m Mateen — a passionate developer who enjoys turning
              ideas into responsive, user-friendly web applications with
              React, Python and Django.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <a className="button button-primary" href="#projects">
                Explore My Work <ArrowRight size={17} />
              </a>
              <a
                className="button button-secondary"
                href="../public/Shaik Abdul Mateen"
                download
              >
                Download Resume <Download size={17} />
              </a>
            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="#contact">
                <Mail size={18} /> Contact
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="portrait-frame">
              <img
                src="../src/assets/mateen.png"
                alt="Temporary profile portrait"
              />
            </div>

            <div className="float-card float-card-one">
              <div className="float-card-icon">
                <Code2 size={22} />
              </div>
              <div>
                <strong>Full Stack</strong>
                <small>Web Development</small>
              </div>
            </div>

            <div className="float-card float-card-two">
              <div className="float-card-icon">
                <Sparkles size={22} />
              </div>
              <div>
                <strong>Always Learning</strong>
                <small>Building better every day</small>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">A little about me</span>
              <h2>Code with purpose. <span className="gradient-text">Grow with passion.</span></h2>
              <p>
                I’m currently pursuing my MCA and have completed a Full Stack
                Python development course at Ace Academy. I enjoy developing
                practical web applications, learning new technologies and
                solving problems through code.
              </p>
            </motion.div>

            <div className="cards-grid">
              <motion.div
                className="panel project-card"
                whileHover={{ y: -6 }}
              >
                <span className="project-number">01 / BUILD</span>
                <h3>Practical Projects</h3>
                <p>
                  Turning what I learn into working applications, from
                  e-commerce experiences to social and productivity tools.
                </p>
              </motion.div>

              <motion.div
                className="panel project-card"
                whileHover={{ y: -6 }}
              >
                <span className="project-number">02 / LEARN</span>
                <h3>Keep Improving</h3>
                <p>
                  Strengthening my full stack development skills while
                  exploring better coding practices and problem-solving.
                </p>
              </motion.div>

              <motion.div
                className="panel project-card"
                whileHover={{ y: -6 }}
              >
                <span className="project-number">03 / CREATE</span>
                <h3>User-Focused Design</h3>
                <p>
                  Building responsive interfaces that are easy to use,
                  accessible and designed to work across different screens.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">My toolkit</span>
              <h2>Technologies I <span className="gradient-text">work with.</span></h2>
              <p>
                Technologies I’ve studied and used in my learning and
                development projects.
              </p>
            </motion.div>

            <motion.div
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {skills.map((skill) => (
                <motion.div
                  className="panel skill-card"
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <span><Code2 size={25} /></span>
                  <strong>{skill}</strong>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Selected work</span>
              <h2>Projects built with <span className="gradient-text">curiosity.</span></h2>
              <p>
                A few applications from my full stack development journey.
              </p>
            </motion.div>

            
<div className="cards-grid">
  {projects.map((project, index) => (
    <motion.article
      className={`panel project-card project-${project.color}`}
      key={project.number}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -7 }}
    >
      <span className="project-number">
        {project.number} / PROJECT
      </span>

      <div className="project-art" aria-hidden="true">
        <span>{project.icon}</span>
        <span className="project-art-code">&lt; / &gt;</span>
      </div>

      <span className="project-category">{project.category}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="project-links">
        <a
          className="project-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo <ArrowUpRight size={17} />
        </a>

        <a
          className="project-link"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.article>
  ))}
</div>

          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <motion.div
              className="section-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">My journey</span>
              <h2>Education & <span className="gradient-text">learning.</span></h2>
              <p>The academic journey that brought me into software development.</p>
            </motion.div>

            <div className="timeline">
              {education.map((item, index) => (
                <motion.div
                  className="panel timeline-item"
                  key={item.course}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="timeline-date">{item.date}</span>
                  <h3>{item.course}</h3>
                  <p>{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <motion.div
              className="panel contact-panel"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Have an opportunity?</span>
              <h2>Let’s build something <span className="gradient-text">great.</span></h2>
              <p>
                Interested in working together? Send me a message using the form
                below. I’ll get back to you as soon as I can.
              </p>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="contact-form-row">
                  <label className="contact-field">
                    <span>Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleFormChange}
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="contact-field">
                    <span>Your email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className="contact-field">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Job opportunity / Project inquiry"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>Message</span>
                  <textarea
                    name="message"
                    placeholder="Tell me a little about your opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  />
                </label>

                <button className="button button-primary contact-submit" type="submit" disabled={isSending}>
                  <Mail size={18} />
                  {isSending ? 'Sending message...' : 'Send Message'}
                  <ArrowUpRight size={17} />
                </button>

                {formStatus && (
                  <p className={`contact-status ${formStatus.type}`} role="status" aria-live="polite">
                    {formStatus.message}
                  </p>
                )}
              </form>

              <a
                className="contact-email-link"
                href="mailto:shaikabdulmateenmateen@gmail.com"
              >
                <Mail size={16} /> shaikabdulmateenmateen@gmail.com
              </a>
              <p className="contact-location">
                <MapPin size={16} /> Hyderabad, India
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Designed & built with care by Shaik Abdul Mateen · © {new Date().getFullYear()}</p>
          <a href="#home" className="back-to-top">
            Back to top <ArrowDown size={15} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
