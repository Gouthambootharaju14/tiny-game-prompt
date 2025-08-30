import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedGames from "@/components/FeaturedGames";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedGames />
      <Footer />
    </div>
  );
};

export default Index;
