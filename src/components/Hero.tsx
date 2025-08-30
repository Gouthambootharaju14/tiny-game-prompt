import { Button } from "@/components/ui/button";
import { PlayCircle, Download, Star } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Gaming setup" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="neon-text">Play Big</span>
            <br />
            <span className="text-foreground">Store Small</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover incredible games that pack huge experiences into tiny file sizes. 
            Premium gaming without the storage bloat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="btn-hero group">
              <PlayCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Browse Games
            </Button>
            
            <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 py-4 px-8 rounded-xl">
              <Download className="mr-3 h-5 w-5" />
              Featured This Week
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-float">
              <div className="text-3xl font-bold neon-text mb-2">500+</div>
              <div className="text-muted-foreground">Curated Games</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold neon-text mb-2">&lt;100MB</div>
              <div className="text-muted-foreground">Average Size</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold neon-text mb-2 flex items-center justify-center gap-1">
                4.8 <Star className="h-6 w-6 fill-accent text-accent" />
              </div>
              <div className="text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;