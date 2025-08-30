import { Card } from "@/components/ui/card";
import { Zap, Sword, Car, Wifi, WifiOff, Puzzle } from "lucide-react";

const categories = [
  {
    icon: Zap,
    name: "Action",
    count: "120+ games",
    description: "Fast-paced thrills",
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Sword,
    name: "RPG",
    count: "85+ games", 
    description: "Epic adventures",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Car,
    name: "Racing",
    count: "60+ games",
    description: "Speed demons",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: WifiOff,
    name: "Offline",
    count: "200+ games",
    description: "Play anywhere",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Wifi,
    name: "Online",
    count: "150+ games",
    description: "Multiplayer fun",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Puzzle,
    name: "Puzzle",
    count: "90+ games",
    description: "Mind benders",
    gradient: "from-indigo-500/20 to-purple-500/20"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Game <span className="neon-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Find your perfect gaming experience by genre
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className={`p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-to-br ${category.gradient} border border-border/50 hover:border-primary/30 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-xl bg-background/50">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{category.count}</p>
                <p className="text-xs text-muted-foreground">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;