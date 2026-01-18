import { Folder, ExternalLink, Github, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="section-title font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of my professional and academic projects
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 md:p-12 bg-card rounded-2xl border border-border overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" 
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                  backgroundSize: '32px 32px',
                }} 
              />
            </div>

            <div className="relative text-center">
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6">
                <Rocket size={40} className="text-primary" />
              </div>

              <h3 className="text-2xl font-display font-semibold mb-4">
                Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
                I'm currently building professional and academic projects. Stay tuned for exciting 
                web and mobile applications that showcase my skills and creativity.
              </p>

              {/* Placeholder Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-4 bg-secondary/50 rounded-xl border border-border/50 group hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg mb-3 mx-auto">
                      <Folder size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="h-2 bg-muted rounded-full w-3/4 mx-auto mb-2" />
                    <div className="h-2 bg-muted/50 rounded-full w-1/2 mx-auto" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-border hover:bg-secondary"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github size={18} className="mr-2" />
                  View GitHub
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ExternalLink size={18} className="mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
