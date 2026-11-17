import { ClipboardCheck, Code2, Globe, Database } from 'lucide-react';

const services = [
  { icon: ClipboardCheck, title: 'Manual & Functional Testing', description: 'Structured test planning and execution to validate product requirements and core user journeys.', features: ['Test Plans & Cases', 'Functional Testing', 'Regression', 'UAT'] },
  { icon: Code2, title: 'Playwright Automation', description: 'Maintainable end-to-end automation for critical workflows, built with reusable patterns and reliable fixtures.', features: ['Playwright', 'JavaScript / TypeScript', 'Page Object Model', 'Cross-browser'] },
  { icon: Globe, title: 'Web & Mobile QA', description: 'Quality checks across web applications and Android/iOS devices, including compatibility and release testing.', features: ['UI Testing', 'Mobile Testing', 'BrowserStack', 'Firebase Test Lab'] },
  { icon: Database, title: 'API & Data Validation', description: 'Verify REST API behavior and backend data consistency to uncover issues beyond the user interface.', features: ['Postman', 'Swagger', 'API Testing', 'SQL Validation'] },
];

const Services = () => (
  <section id="services" className="py-20 md:py-32 bg-card/50"><div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-16"><p className="text-primary font-medium mb-2">Quality Assurance</p><h2 className="section-title font-display">How I Help Teams <span className="gradient-text">Ship with Confidence</span></h2><p className="section-subtitle mx-auto mt-4">Practical testing support from requirements through release</p></div>
    <div className="grid md:grid-cols-2 gap-6">{services.map((service) => <div key={service.title} className="group p-6 md:p-8 bg-card rounded-xl border border-border card-hover"><div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl mb-6"><service.icon size={28} className="text-primary" /></div><h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3><p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p><div className="flex flex-wrap gap-2">{service.features.map((feature) => <span key={feature} className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full">{feature}</span>)}</div></div>)}</div>
  </div></section>
);

export default Services;
