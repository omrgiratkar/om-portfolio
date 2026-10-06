import { about, experience, projects, skills, education, certifications, profile } from '../data'
import { Card, Reveal, Section, Tags } from './Reveal'

export const About = () => (
  <Section id="about" eyebrow="About" title="Backend depth, full-stack reach.">
    <div className="grid g3">{about.map(([t, d], i) => <Card key={t} delay={i * 0.06}><div className="big">{t}</div><p>{d}</p></Card>)}</div>
  </Section>
)

export const Experience = () => (
  <Section id="experience" eyebrow="Experience" title="Where I've worked.">
    <div className="tl">
      {experience.map(x => (
        <Card key={x.company}>
          <div className="meta">{x.dates}</div><h3>{x.role} · {x.company}</h3>
          <ul>{x.points.map(p => <li key={p}>{p}</li>)}</ul><Tags items={x.tags} />
        </Card>
      ))}
    </div>
  </Section>
)

export const Projects = () => (
  <Section id="projects" eyebrow="Projects" title="Selected work.">
    <div className="grid g2">
      {projects.map(p => (
        <Card key={p.name} className="proj">
          <div className="meta">{p.kind}</div><h3>{p.name}</h3>
          <p style={{ marginTop: 12 }}>{p.summary}</p><Tags items={p.tags} />
          <details><summary>Contribution &amp; details</summary><p>{p.detail}</p></details>
        </Card>
      ))}
    </div>
  </Section>
)

export const Skills = () => (
  <Section id="skills" eyebrow="Skills" title="Toolbox.">
    <div className="grid g3">{Object.entries(skills).map(([g, items]) => <Card key={g}><h3>{g}</h3><Tags items={items} /></Card>)}</div>
  </Section>
)

export const Education = () => (
  <Section id="education" eyebrow="Education & Certifications" title="Learning path.">
    <div className="grid g3">
      {education.map(e => <Card key={e.title}><div className="meta">{e.dates}</div><h3>{e.title}</h3><p>{e.sub}</p></Card>)}
      <Card><div className="meta">Certifications</div><h3>Credentials</h3><ul>{certifications.map(c => <li key={c}>{c}</li>)}</ul></Card>
    </div>
  </Section>
)

export const Contact = () => (
  <section id="contact">
    <div className="eyebrow">Contact</div>
    <Reveal><h2>Let's build something meaningful.</h2></Reveal>
    <Reveal><p className="lead" style={{ margin: 'auto' }}>Open to Java Full Stack Developer opportunities.</p>
      <div className="links">
        <a className="btn p" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <a className="btn" href="/Om_Giratkar_Resume.pdf" download>Download Resume</a>
    </Reveal>
  </section>
)
