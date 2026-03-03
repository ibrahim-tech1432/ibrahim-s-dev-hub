import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Hello, I'm
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Muhammad
              <span className="block gradient-text">Ibrahim</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Front-End Web & Mobile Developer
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
              BS Computer Science graduate with experience in building user-friendly web and mobile interfaces. 
              Passionate about creating intuitive, efficient, and visually appealing digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              >
                View Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-border hover:bg-secondary font-medium px-8"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="mailto:baadshahibu143@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-2xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-box">
                <img
                  src={profilePhoto}
                  alt="Muhammad Ibrahim - Front-End Developer"
                  className="w-full h-full object-cover "
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
