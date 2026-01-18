import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'OctaLoop Technology',
    role: 'Mobile Development Intern',
    period: 'Sep 2025 – Present',
    location: 'Remote',
    type: 'Internship',
    current: true,
    responsibilities: [
      'Assisting in Android and iOS app development',
      'Writing clean, maintainable code',
      'Testing and debugging mobile applications',
      'Implementing new features and improving user experience',
    ],
  },
  {
    company: 'Connect X',
    role: 'Data Entry Operator',
    period: 'Aug 2025 – Nov2025',
    location: 'Remote',
    type: 'Contract',
    current: false,
    responsibilities: [
      'Accurate data collection and management',
      'Website content updates and data consistency',
      'Data verification and discrepancy resolution',
      'Collaboration with web developers for smooth data integration',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Work Experience</p>
          <h2 className="section-title font-display">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A timeline of my professional experiences and contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10">
                  {exp.current && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 bg-card rounded-xl border border-border card-hover">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={18} className="text-primary" />
                          <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
