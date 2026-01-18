import { 
  Code2, 
  Smartphone, 
  FileCode, 
  Palette, 
  Database, 
  Users, 
  FileText,
  Layers
} from 'lucide-react';

const frontEndSkills = [
  { name: 'HTML', level: 95, icon: FileCode },
  { name: 'CSS', level: 90, icon: Palette },
  { name: 'JavaScript', level: 85, icon: Code2 },
  { name: 'React.js', level: 80, icon: Layers },
  { name: 'Angular', level: 40, icon: Code2, note: 'Basic' },
];

const mobileSkills = [
  { name: 'React Native', level: 75, icon: Smartphone },
];

const additionalSkills = [
  { name: 'Data Handling', icon: Database },
  { name: 'Communication', icon: Users },
  { name: 'Microsoft Office', icon: FileText },
  { name: 'Content Management', icon: Layers },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Skills</p>
          <h2 className="section-title font-display">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my technical skills and proficiency levels in various technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Front-End Skills */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Code2 size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold">Front-End Web Development</h3>
            </div>

            <div className="space-y-5">
              {frontEndSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={18} className="text-primary" />
                      <span className="font-medium">{skill.name}</span>
                      {skill.note && (
                        <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                          {skill.note}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Additional Skills */}
          <div className="space-y-8">
            {/* Mobile Development */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Smartphone size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">Mobile Development</h3>
              </div>

              <div className="space-y-5">
                {mobileSkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className="text-primary" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Skills */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Layers size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold">Additional Skills</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {additionalSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border card-hover"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon size={20} className="text-primary" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
