import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Target, Users, BarChart3, Star, Medal } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Assessment",
      description: "Advanced technology analyzes your performance and provides instant feedback"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Track progress with detailed analytics and benchmark comparisons"
    },
    {
      icon: Trophy,
      title: "Talent Recognition",
      description: "Get discovered by SAI coaches and unlock your athletic potential"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Connect with certified coaches for personalized training recommendations"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Athletes Registered", icon: Users },
    { number: "500+", label: "Coaches Active", icon: Star },
    { number: "28", label: "States Covered", icon: Medal },
    { number: "15+", label: "Sports Categories", icon: Trophy }
  ];

  return (
    <section id="home" className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Indian athletes in training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Indian Flag Colors Accent */}
          <div className="flex justify-center mb-6">
            <div className="flex space-x-1">
              <div className="w-16 h-1 bg-saffron rounded" />
              <div className="w-16 h-1 bg-white rounded" />
              <div className="w-16 h-1 bg-green rounded" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover India's
            <span className="block text-saffron">Athletic Champions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Official AI-powered talent assessment portal by Sports Authority of India. 
            Register, track your performance, and unlock your sporting potential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-saffron hover:bg-saffron/90 text-saffron-foreground text-lg px-8 py-3"
              onClick={onGetStarted}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Get Started as Athlete
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-saffron" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empowering Athletes Across India
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge AI technology with expert coaching 
              to identify and nurture sporting talent nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;