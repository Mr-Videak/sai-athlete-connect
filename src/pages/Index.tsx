import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginModal from "@/components/LoginModal";
import Dashboard from "@/components/Dashboard";

interface User {
  name: string;
  email: string;
  role: 'athlete' | 'coach' | 'admin';
  location?: string;
  sports?: string[];
}

const Index = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'athlete' | 'coach' | 'admin' | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLoginClick = (role: 'athlete' | 'coach' | 'admin') => {
    setSelectedRole(role);
    setLoginModalOpen(true);
  };

  const handleLogin = (role: 'athlete' | 'coach' | 'admin', credentials: { email: string; password: string }) => {
    // Mock user data based on role and credentials
    let userData: User;
    
    if (role === 'athlete' && credentials.email === 'athlete1@sai.in') {
      userData = {
        name: 'Rahul Sharma',
        email: credentials.email,
        role: 'athlete',
        location: 'Mumbai, Maharashtra',
        sports: ['Sprint', 'Long Jump']
      };
    } else if (role === 'coach' && credentials.email === 'coach1@sai.in') {
      userData = {
        name: 'Priya Patel',
        email: credentials.email,
        role: 'coach',
        location: 'Bangalore, Karnataka'
      };
    } else if (role === 'admin' && credentials.email === 'admin@sai.in') {
      userData = {
        name: 'Dr. Suresh Kumar',
        email: credentials.email,
        role: 'admin',
        location: 'New Delhi'
      };
    } else {
      // Default user for any other credentials
      userData = {
        name: 'Demo User',
        email: credentials.email,
        role: role,
        location: 'India'
      };
    }

    setCurrentUser(userData);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedRole(null);
  };

  const handleGetStarted = () => {
    handleLoginClick('athlete');
  };

  // If user is logged in, show dashboard
  if (currentUser) {
    return <Dashboard user={currentUser} onLogout={handleLogout} />;
  }

  // Otherwise show landing page
  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={handleLoginClick} />
      <HeroSection onGetStarted={handleGetStarted} />
      
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        role={selectedRole}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
