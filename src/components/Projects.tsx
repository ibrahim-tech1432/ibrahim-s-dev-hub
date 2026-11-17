import { ArrowUpRight, Bug, CheckCircle2 } from 'lucide-react';

const projects = [
  { name: 'Xperia', domain: 'SaaS & AI', platform: 'Web Platform', summary: 'Quality assurance and Playwright automation for critical SaaS and AI product workflows.', coverage: ['Requirements analysis & test planning', 'Functional, regression, smoke, UI & API testing', 'Playwright end-to-end automation with Page Object Model', 'Reusable regression suites and Jira defect verification'] },
  { name: 'QuickTalk', domain: 'Telecom & SaaS', platform: 'Web Platform', summary: 'Continuous testing of telecom and SaaS workflows to support dependable releases.', coverage: ['Functional, UI, smoke & release testing', 'API checks and backend validation', 'Playwright end-to-end scenarios', 'Fix verification with development teams'] },
];

const Projects = () => (
  <section id="projects" className="py-20 md:py-32"><div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-16"><p className="text-primary font-medium mb-2">Project Experience</p><h2 className="section-title font-display">Quality Work Across <span className="gradient-text">Real Products</span></h2><p className="section-subtitle mx-auto mt-4">Testing and automation contributions from SaaS, AI, and telecom products</p></div>
    <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">{projects.map((project) => <article key={project.name} className="p-6 md:p-8 bg-card rounded-xl border border-border card-hover"><div className="flex items-start justify-between gap-4 mb-6"><div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl"><Bug size={28} className="text-primary" /></div><span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">{project.platform}</span></div><p className="text-sm text-primary font-medium mb-2">{project.domain}</p><h3 className="text-2xl font-display font-semibold mb-3">{project.name}<ArrowUpRight size={18} className="inline ml-2 text-primary" /></h3><p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p><h4 className="font-medium mb-3">QA contributions</h4><ul className="space-y-3">{project.coverage.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" /><span>{item}</span></li>)}</ul></article>)}</div>
  </div></section>
);

export default Projects;
