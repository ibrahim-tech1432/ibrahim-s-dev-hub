import { GraduationCap, Briefcase, Heart, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">About Me</p>
          <h2 className="section-title font-display">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Bachelor of Science in Computer Science</span> graduate 
              from Federal Urdu University of Arts, Sciences & Technology (2024). My journey into technology has been 
              fueled by a passion for creating digital experiences that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a background in teaching, I've developed strong communication and organizational skills that 
              translate well into collaborative development environments. I believe in writing clean, maintainable 
              code and creating interfaces that users love to interact with.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise lies in <span className="text-primary">HTML, CSS, JavaScript, React, and React Native</span>. 
              I'm constantly learning and exploring new technologies to stay at the forefront of front-end development.
            </p>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border card-hover">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Islamabad, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border card-hover">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Passion</p>
                  <p className="font-medium">UI/UX & Mobile Apps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience Preview */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="p-6 bg-card rounded-xl border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Education</h3>
                  <p className="font-medium mb-1">BS in Computer Science</p>
                  <p className="text-muted-foreground text-sm mb-2">
                    Federal Urdu University of Arts, Sciences & Technology
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    Graduated 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Preview Card */}
            <div className="p-6 bg-card rounded-xl border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">Experience</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Mobile Development Intern</p>
                      <p className="text-muted-foreground text-sm">OctaLoop Technology • 2025 - Feb 2026</p>
                    </div>
                    <div>
                      <p className="font-medium">Data Entry Operator</p>
                      <p className="text-muted-foreground text-sm">Connect X • Aug - Oct 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl md:text-3xl font-display font-bold gradient-text">1+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl md:text-3xl font-display font-bold gradient-text">3+</p>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <p className="text-2xl md:text-3xl font-display font-bold gradient-text">80%</p>
                <p className="text-sm text-muted-foreground">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
