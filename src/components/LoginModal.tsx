import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, User, Shield, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'athlete' | 'coach' | 'admin' | null;
  onLogin: (role: 'athlete' | 'coach' | 'admin', credentials: { email: string; password: string }) => void;
}

const LoginModal = ({ isOpen, onClose, role, onLogin }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const roleConfig = {
    athlete: {
      icon: Trophy,
      title: "Athlete Login",
      description: "Access your performance dashboard and track your progress",
      color: "saffron",
      sampleCredentials: {
        email: "athlete1@sai.in",
        password: "Pass@123"
      }
    },
    coach: {
      icon: User,
      title: "Coach Login", 
      description: "Manage your athletes and provide guidance",
      color: "green",
      sampleCredentials: {
        email: "coach1@sai.in",
        password: "Pass@123"
      }
    },
    admin: {
      icon: Shield,
      title: "SAI Admin Login",
      description: "Full system access and analytics",
      color: "primary",
      sampleCredentials: {
        email: "admin@sai.in",
        password: "Admin@123"
      }
    }
  };

  if (!role) return null;

  const config = roleConfig[role];
  const Icon = config.icon;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin(role, { email, password });
      setLoading(false);
      toast({
        title: "Login Successful",
        description: `Welcome to your ${config.title.toLowerCase()} dashboard`,
      });
      onClose();
    }, 1000);
  };

  const useSampleCredentials = () => {
    setEmail(config.sampleCredentials.email);
    setPassword(config.sampleCredentials.password);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className={`w-5 h-5 text-${config.color}`} />
            {config.title}
          </DialogTitle>
        </DialogHeader>

        <Card>
          <CardHeader className="pb-4">
            <CardDescription>{config.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full text-xs"
                  onClick={useSampleCredentials}
                >
                  Use Sample Credentials (Demo)
                </Button>
              </div>

              <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
                <strong>Demo Credentials:</strong><br />
                Email: {config.sampleCredentials.email}<br />
                Password: {config.sampleCredentials.password}
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;