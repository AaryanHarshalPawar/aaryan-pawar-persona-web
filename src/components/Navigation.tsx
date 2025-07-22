import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Courses", action: () => scrollToSection('courses-section') },
    { name: "About Me", action: () => scrollToSection('about-section') },
    { name: "Contact", action: () => scrollToSection('contact-section') },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="hover-lift cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h2 className="text-xl font-medium tracking-tight text-foreground">
              Aaryan Pawar
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="fade-in transition-colors duration-200 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center space-x-3 ml-4">
              <Button 
                variant="outline" 
                className="glow-button"
                onClick={() => scrollToSection('contact-section')}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover-lift"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="fade-in transition-colors duration-200 py-2 text-muted-foreground hover:text-foreground text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                <Button 
                  variant="outline" 
                  className="glow-button w-fit"
                  onClick={() => scrollToSection('contact-section')}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;