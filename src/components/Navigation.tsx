import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AuthDialog from "./AuthDialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authDialog, setAuthDialog] = useState<{ isOpen: boolean; defaultTab: "login" | "signup" }>({
    isOpen: false,
    defaultTab: "login"
  });
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Know About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

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
          <Link to="/" className="hover-lift">
            <h2 className="text-xl font-medium tracking-tight text-foreground">
              Aaryan Pawar
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`fade-in transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3 ml-4">
              <Button 
                variant="outline" 
                className="hover-lift"
                onClick={() => setAuthDialog({ isOpen: true, defaultTab: "login" })}
              >
                Login
              </Button>
              <Button 
                className="hover-lift"
                onClick={() => setAuthDialog({ isOpen: true, defaultTab: "signup" })}
              >
                Get Started
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
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`fade-in transition-colors duration-200 py-2 ${
                    isActive(item.path)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 mt-4">
                <Button 
                  variant="outline" 
                  className="hover-lift w-fit"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setAuthDialog({ isOpen: true, defaultTab: "login" });
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="hover-lift w-fit"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setAuthDialog({ isOpen: true, defaultTab: "signup" });
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <AuthDialog 
        isOpen={authDialog.isOpen}
        onClose={() => setAuthDialog({ ...authDialog, isOpen: false })}
        defaultTab={authDialog.defaultTab}
      />
    </nav>
  );
};

export default Navigation;