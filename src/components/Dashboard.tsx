import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Target, 
  TrendingUp,
  Users,
  Medal,
  BarChart3,
  Star,
  Calendar,
  MapPin,
  User,
  LogOut
} from "lucide-react";

interface User {
  name: string;
  email: string;
  role: 'athlete' | 'coach' | 'admin';
  location?: string;
  sports?: string[];
}

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const Dashboard = ({ user, onLogout }: DashboardProps) => {
  const athleteData = {
    totalTests: 12,
    avgScore: 87,
    rank: 15,
    badges: ["Speed Demon", "Consistent Performer", "Rising Star"],
    recentTests: [
      { name: "100m Sprint", score: 92, benchmark: "Above Average", date: "2024-01-20" },
      { name: "Long Jump", score: 78, benchmark: "Average", date: "2024-01-15" },
      { name: "Sit-ups", score: 95, benchmark: "Excellent", date: "2024-01-10" }
    ]
  };

  const coachData = {
    athletesCount: 25,
    pendingReviews: 8,
    avgImprovement: 15,
    topAthletes: [
      { name: "Rahul Kumar", sport: "Sprint", score: 94 },
      { name: "Priya Singh", sport: "Long Jump", score: 91 },
      { name: "Arjun Patel", sport: "High Jump", score: 89 }
    ]
  };

  const adminData = {
    totalAthletes: 50000,
    totalCoaches: 500,
    statesCovered: 28,
    testsThisMonth: 15000,
    topPerformingStates: [
      { state: "Maharashtra", athletes: 8500, avgScore: 85 },
      { state: "Karnataka", athletes: 6200, avgScore: 83 },
      { state: "Tamil Nadu", athletes: 5800, avgScore: 82 }
    ]
  };

  const renderAthleteView = () => (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Tests</p>
                <p className="text-2xl font-bold">{athleteData.totalTests}</p>
              </div>
              <Target className="w-8 h-8 text-saffron" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold">{athleteData.avgScore}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">State Rank</p>
                <p className="text-2xl font-bold">#{athleteData.rank}</p>
              </div>
              <Medal className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Your Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {athleteData.badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {athleteData.recentTests.map((test, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h4 className="font-medium">{test.name}</h4>
                  <p className="text-sm text-muted-foreground">{test.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{test.score}%</p>
                  <Badge variant={test.benchmark === "Excellent" ? "default" : test.benchmark === "Above Average" ? "secondary" : "outline"}>
                    {test.benchmark}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCoachView = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Athletes</p>
                <p className="text-2xl font-bold">{coachData.athletesCount}</p>
              </div>
              <Users className="w-8 h-8 text-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
                <p className="text-2xl font-bold">{coachData.pendingReviews}</p>
              </div>
              <Calendar className="w-8 h-8 text-saffron" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Improvement</p>
                <p className="text-2xl font-bold">+{coachData.avgImprovement}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Athletes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coachData.topAthletes.map((athlete, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{athlete.name}</h4>
                    <p className="text-sm text-muted-foreground">{athlete.sport}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{athlete.score}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAdminView = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Athletes</p>
                <p className="text-2xl font-bold">{adminData.totalAthletes.toLocaleString()}</p>
              </div>
              <Trophy className="w-8 h-8 text-saffron" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Coaches</p>
                <p className="text-2xl font-bold">{adminData.totalCoaches}</p>
              </div>
              <Users className="w-8 h-8 text-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">States Covered</p>
                <p className="text-2xl font-bold">{adminData.statesCovered}</p>
              </div>
              <MapPin className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Tests This Month</p>
                <p className="text-2xl font-bold">{adminData.testsThisMonth.toLocaleString()}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing States</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adminData.topPerformingStates.map((state, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h4 className="font-medium">{state.state}</h4>
                  <p className="text-sm text-muted-foreground">{state.athletes.toLocaleString()} athletes</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{state.avgScore}%</p>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                {user.role === 'athlete' && 'Athlete Dashboard'}
                {user.role === 'coach' && 'Coach Dashboard'}
                {user.role === 'admin' && 'SAI Admin Dashboard'}
              </h1>
              <p className="text-primary-foreground/80">Welcome back, {user.name}</p>
            </div>
            <Button variant="outline" onClick={onLogout} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {user.role === 'athlete' && renderAthleteView()}
        {user.role === 'coach' && renderCoachView()}
        {user.role === 'admin' && renderAdminView()}
      </div>
    </div>
  );
};

export default Dashboard;