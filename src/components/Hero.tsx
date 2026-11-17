import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const linkedin = 'https://www.linkedin.com/in/muhammad-ibrahim-4a855838b/';

const Hero = () => {
  const scrollToSection = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4">QA Automation Engineer · Islamabad, Pakistan</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Muhammad<span className="block gradient-text">Ibrahim</span></h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Playwright · JavaScript · API & End-to-End Testing</h2>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">I help teams release reliable web and mobile products through thoughtful test planning, hands-on quality assurance, and maintainable automation. I’ve built and maintained 1,000+ automated test scenarios across SaaS, AI, telecom, and mobile products.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={() => scrollToSection('#projects')} className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8">Explore Projects</Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('#contact')} className="border-border hover:bg-secondary font-medium px-8">Contact Me</Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="mailto:baadshahibu143@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-muted" aria-label="Email"><Mail size={20} /></a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-muted" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-box">
              <img src={profilePhoto} alt="Muhammad Ibrahim, QA Automation Engineer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('#about')} className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground hover:text-primary" aria-label="Scroll to About section"><ArrowDown size={24} /></button>
      </div>
    </section>
  );
};

export default Hero;
