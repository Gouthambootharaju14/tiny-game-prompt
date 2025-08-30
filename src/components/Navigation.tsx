import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-black neon-text">TinyGames</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Games</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Download className="mr-2 h-4 w-4" />
              Get App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Games</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <div className="flex space-x-2 pt-4">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button className="bg-gradient-to-r from-primary to-secondary flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Get App
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