import { useState } from 'react'
import { links, isUrl, heroTech, experience, skills, certs, activities, evidence } from './data/content.js'

const Tags = ({ items }) => items.length ? <ul className="tags">{items.map(t => <li key={t}>{t}</li>)}</ul> : null
const Btn = ({ href, children, primary }) => isUrl(href)
  ? <a className={'btn' + (primary ? ' primary' : '')} href={href} target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined} rel="noreferrer">{children}</a>
  : <span className="btn todo" title="Placeholder: add the real link in src/data/content.js">{children} <code>{href}</code></span>
const Flow = ({ steps, label }) => (
  <ol className="flow" aria-label={label}>{steps.map(s => <li key={s}>{s}</li>)}</ol>
)
const Section = ({ id, title, children }) => (
  <section id={id} aria-labelledby={id + '-h'}><h2 id={id + '-h'}>{title}</h2>{children}</section>
)

function Projects() {
  const [open, setOpen] = useState(false)

  return (
    <Section id="projects" title="Projects">
      <article className="card hero-project">
        <h3>Zero-Downtime Multi-Cloud Kubernetes Platform</h3>
        <p>
          A Kubernetes platform across AWS EKS and Azure AKS that needed to stay
          operational during releases, with zero tolerance for service interruption.
        </p>
        <Tags
          items={[
            'AWS EKS',
            'Azure AKS',
            'Kubernetes',
            'Terraform',
            'Argo CD',
            'Istio',
            'Prometheus',
            'Grafana',
            'Loki',
            'Jaeger',
            'Chaos Engineering'
          ]}
        />
        <Flow
          label="Platform architecture"
          steps={[
            'User traffic',
            'Multi-cloud environment',
            'AWS EKS + Azure AKS',
            'Kubernetes workloads',
            'GitOps / Argo CD',
            'Observability'
          ]}
        />
        

        {open && (
          <div id="case" className="case">
            <h4>Problem</h4>
            <p>
              The platform needed to remain operational during releases across
              multiple cloud providers with zero tolerance for service interruption.
            </p>

            <h4>Infrastructure</h4>
            <p>
              Terraform Infrastructure as Code managed the lifecycle of cloud
              resources, so they could be provisioned, updated, and maintained
              reproducibly.
            </p>

            <h4>GitOps</h4>
            <Flow
              label="GitOps flow"
              steps={['GitHub', 'Argo CD', 'Kubernetes', 'Deployment']}
            />
            <p>
              Argo CD drives deployments from GitHub, with drift detection and
              automated rollback.
            </p>

            <h4>Observability</h4>
            <Tags items={['Prometheus', 'Grafana', 'Loki', 'Jaeger']} />

            <h4>Resilience</h4>
            <p>
              Platform resilience was validated through Chaos Engineering.
            </p>

            <h4>Evidence</h4>
            <div className="evidence">
              {evidence.map(e => (
                <div key={e} className="ph">
                  <span>[ADD SCREENSHOT]</span>
                  {e}
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      <div className="grid2">
        <article className="card">
          <h3>QDevOps — Cloud CI/CD Pipeline with Automated Testing</h3>
          <p>
            A pipeline that ran 7 structured test cases on every commit. Includes
            a documented dependency version mismatch, with root cause analysis,
            fix, and verification.
          </p>
          <Tags
            items={[
              'Python',
              'Flask',
              'GitHub Actions',
              'CI/CD',
              'Automated Testing'
            ]}
          />
          <Flow
            label="CI/CD workflow"
            steps={[
              'Commit',
              'GitHub',
              'GitHub Actions',
              '7 automated tests',
              'Pass / Fail',
              'Deployment'
            ]}
          />
          
        </article>
               <article className="card">
          <h3>Quick Attendance System</h3>
          <p>
            A QR code-based student attendance system that provides digital,
            touchless attendance using QR codes, GPS-based location validation,
            and cloud-backed storage.
          </p>

          <Tags
            items={[
              'Python',
              'Flask',
              'PostgreSQL',
              'HTML/CSS/JavaScript',
              'QR Code',
              'GPS',
              'Neon',
              'Render',
              'Gunicorn',
              'Flask-Mail'
            ]}
          />

          <Flow
            label="Attendance workflow"
            steps={[
              'Teacher Login',
              'Generate QR',
              'Student Scans QR',
              'Submit Attendance',
              'GPS Validation',
              'Attendance Record'
            ]}
          />

        
          
        </article>
        <article className="card">
          <h3>Post-Quantum Secure Voting System</h3>
          <p>
            A security-focused full-stack application. The associated research
            was published in IJIRT in 2025.
          </p>
          <Tags
            items={[
              'Node.js',
              'MySQL',
              'AES-256',
              'OTP Authentication',
              'JWT'
            ]}
          />
         
        </article>

       
      </div>
    </Section>
  )
}

export default function App() {
  const nav = [['about','About'],['experience','Experience'],['projects','Projects'],['skills','Skills'],['certifications','Certifications'],['research','Research'],['education','Education'],['contact','Contact']]
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav"><a href="#home" className="brand">Aneesunisa T.A</a>
        <nav aria-label="Primary"><ul>{nav.map(([id, l]) => <li key={id}><a href={'#' + id}>{l}</a></li>)}</ul></nav></header>
      <main id="main">
        <section id="home" className="hero">
          <h1>ANEESUNISA T.A</h1>
          <p className="role">Cloud Engineer | DevOps | Cloud Infrastructure</p>
          <p className="lead">I specialize in cloud infrastructure, multi-cloud Kubernetes, and DevOps automation, with hands-on experience building platforms across AWS EKS and Azure AKS using Terraform and GitOps. My experience also includes production troubleshooting, observability, and cloud-native backend systems.</p>
          <div className="row">
            <a className="btn primary" href="#projects">View projects</a>
            <Btn href={links.resume}>Download resume</Btn>
            <Btn href={links.linkedin}>LinkedIn</Btn><a className="btn" href="#contact">Contact me</a>
          </div>
          <ul className="strip" aria-label="Core technologies">{heroTech.map(t => <li key={t}>{t}</li>)}</ul>
        </section>

        <Section id="about" title="About">
              <p className="prose">
                I am a Computer Science professional specializing in Cloud Computing,
                DevOps, and cloud infrastructure, with hands-on experience across
                multi-cloud Kubernetes environments, cloud-native deployment, and backend
                engineering. Through my internships, I have worked on AWS EKS and Azure AKS
                infrastructure, GitOps-based deployments, observability, infrastructure
                automation, and production backend systems. I have also resolved live
                production incidents, developed automation scripts, and contributed to
                technical documentation. In addition to engineering, I have published
                research on safeguarding e-voting systems in the quantum era.
              </p>
        </Section>

        <Section id="experience" title="Professional experience">
          {experience.map(e => (
            <article key={e.role} className={'card' + (e.featured ? ' featured' : '')}>
              <h3>{e.role}</h3><p className="org">{e.org}</p><p className="when">{e.when}</p>
              <ul className="points">{e.points.map(p => <li key={p}>{p}</li>)}</ul><Tags items={e.tags} />
            </article>
          ))}
        </Section>

        <Projects />

        <Section id="skills" title="Technical skills">
          <div className="grid3">{Object.entries(skills).map(([k, v]) => <div key={k} className="card"><h3>{k}</h3><Tags items={v} /></div>)}</div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid2">{certs.map(([n, c, file]) => <div key={c} className="card"><h3>{n}</h3><p className="org">{c}</p><Btn href={file}>View certificate (PDF)</Btn></div>)}</div>
        </Section>

        <Section id="research" title="Research publication">
          <div className="card"><h3>Safeguarding E-Voting in the Quantum Era: A Modular Cloud-Based Security Framework</h3>
            <p className="org">IJIRT — 2025</p><Btn href="[https://ijirt.org/article?manuscript=182694]">Read publication</Btn></div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid2">
            <div className="card"><h3>Yenepoya (Deemed to be University), Bengaluru</h3><p>M.Sc. Computer Science — Cloud Computing with Minor in DevOps</p></div>
            <div className="card"><h3>Reva University, Bengaluru</h3><p>B.Sc. (Hons) Computer Science — Cloud Computing and Big Data</p></div>
          </div>
        </Section>

        <Section id="activities" title="Leadership & activities">
          <div className="grid3 small">{activities.map(([n, p]) => <div key={n} className="card"><h3>{n}</h3><ul className="points">{p.map(x => <li key={x}>{x}</li>)}</ul></div>)}</div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="grid2">
            <div className="card"><p><a href={'mailto:' + links.email}>{links.email}</a></p><p>Bengaluru, India</p>
              <div className="row"><Btn href={links.linkedin}>LinkedIn</Btn></div></div>
            
          </div>
        </Section>
      </main>
      <footer>© Aneesunisa T.A.</footer>
    </>
  )
}
