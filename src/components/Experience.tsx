import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  { company: 'Najoomi Technology', role: 'QA Engineer', period: 'January 2026 – Present', location: 'Islamabad, Pakistan', current: true, responsibilities: ['Plan test coverage from requirements and create detailed test scenarios and cases.', 'Build and maintain Playwright end-to-end automation using JavaScript, POM, fixtures, and reusable utilities.', 'Developed and maintained 1,000+ automated scenarios across products and critical business workflows.', 'Perform functional, smoke, sanity, regression, integration, UI, and API testing.', 'Validate REST APIs with Postman, Swagger, and Playwright; verify data using SQL queries.', 'Track defects in Jira and work with developers and product teams through sprint and release cycles.'] },
  { company: 'OctaLoop', role: 'QA Engineer', period: '2025 · 8 months', location: 'Mobile applications', current: false, responsibilities: ['Tested Android and iOS applications with functional, regression, smoke, and UI test cases.', 'Checked compatibility and usability across devices using BrowserStack and Firebase Test Lab.', 'Reported and tracked defects in Jira, then verified fixes through retesting and regression cycles.', 'Partnered with developers and product teams during release testing to support production readiness.'] },
];

const Experience = () => (
  <section id="experience" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16"><p className="text-primary font-medium mb-2">Work Experience</p><h2 className="section-title font-display">My QA <span className="gradient-text">Journey</span></h2><p className="section-subtitle mx-auto mt-4">Quality engineering across web platforms and mobile applications</p></div>
      <div className="max-w-3xl mx-auto"><div className="relative"><div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        {experiences.map((exp, index) => <div key={exp.company} className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10" />
          <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}><div className="p-6 bg-card rounded-xl border border-border card-hover">
            <div className="flex items-start justify-between gap-4 mb-4"><div><div className="flex items-center gap-2 mb-1"><Briefcase size={18} className="text-primary" /><h3 className="font-display font-semibold text-lg">{exp.role}</h3></div><p className="text-primary font-medium">{exp.company}</p></div>{exp.current && <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Current</span>}</div>
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground"><div className="flex items-center gap-1"><Calendar size={14} /><span>{exp.period}</span></div><div className="flex items-center gap-1"><MapPin size={14} /><span>{exp.location}</span></div></div>
            <ul className="space-y-2">{exp.responsibilities.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" /><span>{item}</span></li>)}</ul>
          </div></div><div className="hidden md:block md:w-1/2" />
        </div>)}
      </div></div>
    </div>
  </section>
);

export default Experience;
