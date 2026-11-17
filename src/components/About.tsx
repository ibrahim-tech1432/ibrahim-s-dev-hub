import { GraduationCap, Briefcase, MapPin, Bug } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16"><p className="text-primary font-medium mb-2">About Me</p><h2 className="section-title font-display">Quality in Every <span className="gradient-text">Release</span></h2></div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">I’m a QA Automation Engineer with a BS in Computer Science and one year of experience testing web and mobile applications across SaaS, AI, telecom, and enterprise products.</p>
          <p className="text-muted-foreground leading-relaxed">I work across the testing lifecycle: analyzing requirements, planning coverage, writing test cases, validating APIs and data, automating critical user journeys, and helping teams catch defects before release.</p>
          <p className="text-muted-foreground leading-relaxed">My automation work uses <span className="text-primary">Playwright with JavaScript and TypeScript</span>, including Page Object Model, fixtures, reusable utilities, and cross-browser checks. I’ve contributed to more than 1,000 automated scenarios and collaborate with product and development teams in Agile/Scrum.</p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border card-hover"><div className="p-2 bg-primary/10 rounded-lg"><MapPin size={20} className="text-primary" /></div><div><p className="text-sm text-muted-foreground">Location</p><p className="font-medium">Islamabad, Pakistan</p></div></div>
            <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border card-hover"><div className="p-2 bg-primary/10 rounded-lg"><Bug size={20} className="text-primary" /></div><div><p className="text-sm text-muted-foreground">Focus</p><p className="font-medium">Quality Engineering</p></div></div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-card rounded-xl border border-border card-hover"><div className="flex items-start gap-4"><div className="p-3 bg-primary/10 rounded-xl"><GraduationCap size={28} className="text-primary" /></div><div><h3 className="text-xl font-display font-semibold mb-2">Education</h3><p className="font-medium mb-1">BS in Computer Science</p><p className="text-muted-foreground text-sm mb-2">Federal Urdu University of Arts, Sciences & Technology</p><span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Graduated 2024</span></div></div></div>
          <div className="p-6 bg-card rounded-xl border border-border card-hover"><div className="flex items-start gap-4"><div className="p-3 bg-primary/10 rounded-xl"><Briefcase size={28} className="text-primary" /></div><div><h3 className="text-xl font-display font-semibold mb-3">Current Role</h3><p className="font-medium">QA Engineer · Najoomi Technology</p><p className="text-muted-foreground text-sm">January 2026 – Present</p><p className="text-sm text-muted-foreground mt-3">Web, SaaS, AI, and enterprise quality assurance with Playwright automation.</p></div></div></div>
          <div className="grid grid-cols-2 gap-4"><div className="text-center p-4 bg-card rounded-lg border border-border"><p className="text-2xl md:text-3xl font-display font-bold gradient-text">1,000+</p><p className="text-sm text-muted-foreground">Automated Scenarios</p></div><div className="text-center p-4 bg-card rounded-lg border border-border"><p className="text-2xl md:text-3xl font-display font-bold gradient-text">1 year</p><p className="text-sm text-muted-foreground">QA Experience</p></div></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
