const skills = ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Redux Toolkit', 'RTK Query', 'React Query', 'Node.js', 'MongoDB', 'GraphQL', 'Tailwind CSS', 'Jest'];

const projects = [
  { title: 'Insights v2', type: 'Product engineering', description: 'A scalable analytics experience with interactive dashboards, DORA metrics, custom views, exports and AI-assisted workflows.', tags: ['React', 'TypeScript', 'RTK Query', 'Charts'], href: 'https://github.com/ravikumarsankar/visuals' },
  { title: 'Task Dashboard', type: 'Frontend architecture', description: 'A focused dashboard experience demonstrating reusable UI patterns, state management and responsive data presentation.', tags: ['React', 'TypeScript', 'UI'], href: 'https://github.com/ravikumarsankar/task-dashboard' },
  { title: 'Office Add-in', type: 'Integration', description: 'Excel-focused integrations using the Office JavaScript API, Microsoft Graph and authentication flows.', tags: ['Office.js', 'MS Graph', 'MSAL'], href: 'https://github.com/ravikumarsankar/Office-Add-in-samples' },
];

const experience = [
  { company: 'Opsera', role: 'Frontend Engineer / Frontend Lead', period: 'Recent experience', points: ['Built and maintained complex React and TypeScript product experiences.', 'Delivered Insights v2 dashboard enhancements, DORA metric views, custom dashboards and export workflows.', 'Worked across state management, API integration, performance optimization, RBAC and AI-assisted product workflows.', 'Reviewed PRs, mentored engineers and collaborated with DevOps through release cycles.'] },
];

export default function Home() {
  return (
    <main>
      <nav className="nav container"><a className="brand" href="#top">RK<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>

      <section id="top" className="hero container">
        <div className="eyebrow">Senior Frontend Engineer · React · TypeScript</div>
        <h1>Building fast, scalable interfaces that feel <em>effortless.</em></h1>
        <p className="hero-copy">I&apos;m Ravi Kumar, a frontend engineer focused on high-quality product experiences, frontend architecture and performance.</p>
        <div className="actions"><a className="button primary" href="#work">View my work <span>↗</span></a><a className="button secondary" href="#contact">Let&apos;s talk</a></div>
        <div className="availability"><span className="dot" /> Open to Senior Frontend / React opportunities</div>
      </section>

      <section id="work" className="section container">
        <div className="section-head"><div><span className="kicker">01 / SELECTED WORK</span><h2>Things I&apos;ve built</h2></div><p>Product work, engineering challenges and hands-on experiments.</p></div>
        <div className="project-grid">{projects.map((project, index) => <a className="project" key={project.title} href={project.href} target="_blank" rel="noreferrer"><div className="project-number">0{index + 1}</div><div className="project-content"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><span className="arrow">↗</span></a>)}</div>
      </section>

      <section id="experience" className="section experience-section"><div className="container"><div className="section-head"><div><span className="kicker">02 / EXPERIENCE</span><h2>Where I&apos;ve made an impact</h2></div><p>Hands-on ownership from implementation to shipping.</p></div><div className="timeline">{experience.map(item => <article className="experience" key={item.company}><div className="timeline-marker" /><div className="experience-main"><div className="experience-top"><div><h3>{item.role}</h3><span>{item.company}</span></div><span className="period">{item.period}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></div></section>

      <section id="skills" className="section skills-section"><div className="container"><div className="section-head"><div><span className="kicker">03 / TOOLKIT</span><h2>My stack</h2></div><p>Tools I use to turn product ideas into maintainable software.</p></div><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div></section>

      <section id="about" className="section container about"><div><span className="kicker">04 / ABOUT</span><h2>Engineering with product thinking.</h2></div><div className="about-copy"><p>With 4+ years of frontend experience, I work across the full lifecycle: understanding product needs, designing component architecture, building polished interfaces, improving performance and shipping reliably.</p><p>I enjoy solving complex UI problems, working with APIs and data-heavy experiences, reviewing code and helping teams raise their engineering bar.</p><div className="stats"><div><strong>4+</strong><span>Years experience</span></div><div><strong>React</strong><span>Primary expertise</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div></section>

      <section id="contact" className="contact"><div className="container contact-inner"><span className="kicker">05 / CONTACT</span><h2>Have a product worth building?</h2><p>Let&apos;s talk about frontend engineering, product challenges or your next big idea.</p><div className="actions"><a className="button primary" href="https://github.com/ravikumarsankar" target="_blank" rel="noreferrer">GitHub ↗</a><a className="button secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><p className="contact-note">Add your professional email and LinkedIn URL to make this section fully production-ready.</p></div></section>

      <footer className="footer container"><span>© 2026 Ravi Kumar</span><span>Designed & built with Next.js</span></footer>
    </main>
  );
}
