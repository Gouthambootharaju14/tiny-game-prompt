import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/20 border-t border-border/50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-black neon-text">TinyGames</div>
            <p className="text-muted-foreground">
              Discover incredible games that pack huge experiences into tiny file sizes.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h3 className="font-bold">Games</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-primary cursor-pointer transition-colors">Action Games</div>
              <div className="hover:text-primary cursor-pointer transition-colors">RPG Games</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Racing Games</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Puzzle Games</div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-bold">Resources</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-primary cursor-pointer transition-colors">Developer API</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Game Guides</div>
              <div className="hover:text-primary cursor-pointer transition-colors">System Requirements</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Support</div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-bold">Company</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="hover:text-primary cursor-pointer transition-colors">About Us</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Terms of Service</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Contact</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 TinyGames. All rights reserved. Play Big, Store Small.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;