export const links = {
  github: '[ADD GITHUB URL]', linkedin: '[linkedin.com/in/aneesunisa-t-a-245a623b6]', resume: '[ADD RESUME FILE]',
  email: 'aneesunisat@gmail.com',
}
export const isUrl = (v) => /^https?:\/\//.test(v) || v.startsWith('/')
export const heroTech = ['AWS','Azure','Kubernetes','Terraform','Argo CD','Docker','Python','FastAPI','Prometheus','Grafana']
export const experience = [
  { role:'Cloud DevOps Intern', org:'Quantum Learnings ', when:'Apr 2026 – Jun 2026 | ', featured:true,
    points:['Took ownership of designing and delivering a multi-cloud Kubernetes platform spanning AWS EKS and Azure AKS.','Defined architecture and made infrastructure decisions; coordinated implementation across cloud environments.','Worked toward zero service interruption during deployments.','Planned and executed GitOps automation using Argo CD, establishing the deployment workflow from GitHub to production.','Implemented drift detection and automated rollback.','Set up Prometheus, Grafana, Loki, and Jaeger.','Validated platform resilience through Chaos Engineering.','Managed infrastructure lifecycle using Terraform: provisioned, updated, and maintained cloud resources reproducibly.'],
    tags:['AWS EKS','Azure AKS','Kubernetes','Argo CD','Terraform','Prometheus','Grafana','Loki','Jaeger','Chaos Engineering','GitOps'] },
  { role:'R&D CoE Intern', org:'Imagine Marketing Ltd. (boAt)', when:'Sep 2025 – Dec 2025 | Bengaluru',
    points:['Designed and delivered a Python FastAPI backend service working with real-time audio data streams.','Made architectural decisions around data processing, storage, and API design.','Took ownership of production stability and resolved 3 live production incidents through structured root cause analysis, targeted fixes, and automation to prevent recurrence.','Worked on testing requirements and built Python and Bash automation scripts.','Maintained technical and operational documentation, translating system behaviour into clear documentation.'],
    tags:['Python','FastAPI','Real-Time Audio','PostgreSQL','Bash','Automation','Production Debugging','Root Cause Analysis'] },
  { role:'Web Development Intern', org:'BigWelt Infotech', when:'Mar 2024 – May 2024',
    points:['Delivered responsive web applications through the development lifecycle.','Contributed to testing, debugging, and production releases.','Worked in a collaborative development environment.'], tags:[] },
]
export const skills = {
  'Cloud': [
    'AWS',
    'AWS EKS',
    'Azure',
    'Azure AKS'
  ],

  'DevOps & Infrastructure': [
    'Kubernetes',
    'Docker',
    'Terraform',
    'GitHub Actions',
    'Argo CD',
    'Helm',
    'GitOps',
    'CI/CD'
  ],

  'Service Mesh & Resilience': [
    'Istio',
    'mTLS',
    'Chaos Engineering',
    'LitmusChaos',
    'HPA',
    'Cluster Autoscaler'
  ],

  'Observability': [
    'Prometheus',
    'Grafana',
    'Loki',
    'Jaeger'
  ],

  'Programming & Scripting': [
    'Python',
    'JavaScript',
    'Bash',
    'SQL'
  ],

  'Backend & APIs': [
    'FastAPI',
    'Flask',
    'Node.js',
    'Express.js',
    'REST APIs'
  ],

  'Databases': [
    'PostgreSQL',
    'MySQL'
  ],

  'Web Technologies': [
    'HTML',
    'CSS',
    'JavaScript'
  ],

  'Tools & Platforms': [
    'Git',
    'GitHub',
    'Postman',
    'VS Code',
    'Linux',
    'AWS',
    'Azure',
    'GCP'
  ]
}
export const certs = [
  ['Microsoft Certified: Azure AI Fundamentals','AI-900','/certificates/azure-ai.pdf'],
  ['Microsoft Certified: Azure Fundamentals','AZ-900','/certificates/azure-fundamental.pdf'],
  ['Microsoft Certified: Security, Compliance, and Identity Fundamentals','SC-900','/certificates/azure-secure.pdf'],
  ['Microsoft Certified: Azure Data Fundamentals','DP-900','/certificates/azure-data-fundamental.pdf'],
]
export const activities = [
  ['Kannada Club',['Co-organised Karnataka Rajyotsava cultural event.']],
  ['Data Science Club',['Active member; data-driven research and technology discussions.','Tableau workshop and club website work.']],
  ['NSS',['Selected as one of 4 college representatives for a 7-day residential NSS camp in Kalaburagi.','Community service and teamwork.']],
]
export const evidence = ['AWS EKS screenshot','Azure AKS screenshot','Argo CD screenshot','Grafana dashboard','Prometheus','Loki','Jaeger','Chaos Engineering result','Terraform structure']
