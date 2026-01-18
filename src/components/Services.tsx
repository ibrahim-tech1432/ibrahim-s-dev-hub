import { Globe, Smartphone, Code2, Palette } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Front-End Web Development',
    description:
      'Building responsive, modern, and user-friendly web interfaces using HTML, CSS, JavaScript, and React.js.',
    features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimized', 'Cross-browser Compatible'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Creating cross-platform mobile applications for Android and iOS using React Native and modern frameworks.',
    features: ['Cross-Platform', 'Native Performance', 'Intuitive UX', 'App Store Ready'],
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description:
      'Translating design mockups into pixel-perfect, interactive user interfaces with smooth animations.',
    features: ['Pixel Perfect', 'Smooth Animations', 'Interactive Elements', 'Design Systems'],
  },
  {
    icon: Code2,
    title: 'Code Quality & Maintenance',
    description:
      'Writing clean, maintainable, and well-documented code following best practices and industry standards.',
    features: ['Clean Code', 'Documentation', 'Best Practices', 'Version Control'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Offer</p>
          <h2 className="section-title font-display">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Professional services tailored to bring your digital ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 md:p-8 bg-card rounded-xl border border-border card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
