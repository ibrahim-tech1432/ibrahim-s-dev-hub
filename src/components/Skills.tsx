import { Bug, Code2, Globe, Database, Wrench, ClipboardCheck } from 'lucide-react';

const groups = [
  { title: 'Automation', icon: Code2, items: ['Playwright', 'JavaScript', 'TypeScript', 'Selenium', 'Cypress', 'Page Object Model', 'Fixtures & Utilities', 'Cross-browser Testing'] },
  { title: 'Testing Methods', icon: Bug, items: ['Functional & Regression', 'Smoke & Sanity', 'UI & End-to-End', 'API & Integration', 'Mobile App Testing', 'UAT & Usability'] },
  { title: 'API & Data', icon: Database, items: ['Postman', 'Swagger', 'Playwright API', 'SQL Queries', 'Database Validation', 'Data Consistency'] },
  { title: 'Tools & Platforms', icon: Wrench, items: ['Jira', 'TestRail', 'Git & GitHub', 'GitLab', 'Jenkins', 'GitHub Actions', 'BrowserStack', 'Firebase Test Lab', 'Linux'] },
];

const Skills = () => (
  <section id="skills" className="py-20 md:py-32 bg-card/50">
    <div className="container mx-auto px-4 md:px-6"><div className="text-center mb-16"><p className="text-primary font-medium mb-2">My Skills</p><h2 className="section-title font-display">Quality Engineering <span className="gradient-text">Toolkit</span></h2><p className="section-subtitle mx-auto mt-4">Methods, frameworks, and tools I use to test software across the stack</p></div>
      <div className="grid md:grid-cols-2 gap-6">{groups.map((group) => <div key={group.title} className="p-6 md:p-8 bg-card rounded-xl border border-border"><div className="flex items-center gap-3 mb-6"><div className="p-3 bg-primary/10 rounded-xl"><group.icon size={24} className="text-primary" /></div><h3 className="text-xl font-display font-semibold">{group.title}</h3></div><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="px-3 py-2 text-sm bg-secondary text-muted-foreground rounded-lg">{item}</span>)}</div></div>)}</div>
      <div className="mt-6 p-6 bg-card rounded-xl border border-border"><div className="flex items-center gap-3 mb-4"><ClipboardCheck size={22} className="text-primary" /><h3 className="text-lg font-display font-semibold">Development Knowledge</h3></div><div className="flex flex-wrap gap-2">{['JavaScript', 'TypeScript', 'HTML/CSS', 'Web Application Architecture', 'Frontend & Backend Testing'].map((item) => <span key={item} className="px-3 py-2 text-sm bg-secondary text-muted-foreground rounded-lg">{item}</span>)}</div></div>
    </div>
  </section>
);

export default Skills;
