import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Download, Clock, Gamepad2 } from "lucide-react";

const featuredGames = [
  {
    id: 1,
    title: "Neon Runners",
    size: "45MB",
    rating: 4.9,
    downloads: "2.3M",
    genre: "Action",
    platform: "PC, Mobile",
    description: "Fast-paced cyberpunk racing with stunning visuals",
    image: "🏎️",
    playtime: "2-4 hours"
  },
  {
    id: 2,
    title: "Pixel Dungeon",
    size: "12MB",
    rating: 4.7,
    downloads: "5.1M",
    genre: "RPG",
    platform: "All Platforms",
    description: "Classic roguelike with infinite replayability",
    image: "🗡️",
    playtime: "10+ hours"
  },
  {
    id: 3,
    title: "Sky Drift",
    size: "89MB",
    rating: 4.8,
    downloads: "1.8M",
    genre: "Adventure",
    platform: "PC, Mobile",
    description: "Relaxing aerial exploration game",
    image: "✈️",
    playtime: "5-8 hours"
  }
];

const FeaturedGames = () => {
  return (
    <section className="py-20 gaming-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Featured</span> Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked games that prove size doesn't matter when it comes to amazing gameplay
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <div 
              key={game.id} 
              className="game-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Game Image/Icon */}
              <div className="text-6xl mb-6 text-center bg-gradient-to-br from-muted/50 to-muted rounded-xl py-8">
                {game.image}
              </div>
              
              {/* Game Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <Badge className="storage-badge">{game.size}</Badge>
                </div>
                
                <p className="text-muted-foreground">{game.description}</p>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    {game.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {game.downloads}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {game.playtime}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">{game.genre}</Badge>
                  <Badge variant="outline">{game.platform}</Badge>
                </div>
                
                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;