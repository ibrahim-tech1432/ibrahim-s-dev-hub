import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Muhammad Ibrahim. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
