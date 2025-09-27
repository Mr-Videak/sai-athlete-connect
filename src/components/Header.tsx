import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Shield, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onLoginClick: (role: 'athlete' | 'coach' | 'admin') => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  const loginOptions = [
    { 
      role: 'athlete' as const, 
      label: "Athlete Login",
      icon: Trophy,
      description: "Track your performance"
    },
    { 
      role: 'coach' as const, 
      label: "Coach Login",
      icon: User,
      description: "Manage athletes"
    },
    { 
      role: 'admin' as const, 
      label: "SAI Admin",
      icon: Shield,
      description: "Full access"
    },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Athlete Connect</h1>
              <p className="text-xs text-muted-foreground">Sports Authority of India</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Login Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {loginOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Button
                  key={option.role}
                  variant={option.role === 'admin' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => onLoginClick(option.role)}
                  className={cn(
                    "flex items-center space-x-2",
                    option.role === 'athlete' && "border-saffron text-saffron hover:bg-saffron hover:text-saffron-foreground",
                    option.role === 'coach' && "border-green text-green hover:bg-green hover:text-green-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-3">Login Options</p>
                {loginOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Button
                      key={option.role}
                      variant="ghost"
                      className="w-full justify-start mb-2"
                      onClick={() => {
                        onLoginClick(option.role);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-muted-foreground">{option.description}</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;