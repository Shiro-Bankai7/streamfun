import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { AuthForm } from './components/Auth/AuthForm';
import { StreamerDashboard } from './components/Dashboard/StreamerDashboard';
import { ViewerInterface } from './components/Viewer/ViewerInterface';
import { Leaderboard } from './components/Leaderboard/Leaderboard';
import { 
  Radio, 
  Users, 
  Trophy, 
  Settings, 
  LogOut,
  Play,
  Eye
} from 'lucide-react';

type View = 'dashboard' | 'viewer' | 'leaderboard';

function App() {
  const { user, loading, signOut } = useAuth();
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [showAuthForm, setShowAuthForm] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm onSuccess={() => setShowAuthForm(false)} />;
  }

  const navigation = [
    { id: 'dashboard', label: 'Streamer Dashboard', icon: Play },
    { id: 'viewer', label: 'Viewer Mode', icon: Eye },
    { id: 'leaderboard', label: 'Leaderboards', icon: Trophy },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <StreamerDashboard />;
      case 'viewer':
        return <ViewerInterface />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <StreamerDashboard />;
    }
  };

  // If viewing a specific component, render it without navigation
  if (currentView === 'dashboard' || currentView === 'viewer' || currentView === 'leaderboard') {
    return (
      <div className="min-h-screen bg-gray-900">
        {/* Top Navigation Bar */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Radio className="w-8 h-8 text-purple-500" />
                <span className="text-xl font-bold text-white">StreamPro</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id as View)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentView === item.id
                          ? 'bg-purple-500 text-white'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                Welcome, <span className="text-white font-medium">{user.email}</span>
              </div>
              
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-gray-400" />
              </button>
              
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-3 flex space-x-1 overflow-x-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id as View)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    currentView === item.id
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {renderCurrentView()}
      </div>
    );
  }

  return renderCurrentView();
}

export default App;