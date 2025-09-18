import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Settings, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  TrendingUp,
  MessageSquare,
  Coins
} from 'lucide-react';
import { ChatPanel } from './ChatPanel';
import { DonationGoals } from './DonationGoals';
import { SubathonTimer } from './SubathonTimer';
import { TokenSystem } from './TokenSystem';
import { StreamAnalytics } from './StreamAnalytics';

export function StreamerDashboard() {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const [streamTitle, setStreamTitle] = useState('');
  const [streamCategory, setStreamCategory] = useState('');
  const [donationGoal, setDonationGoal] = useState(500);
  const [subathonActive, setSubathonActive] = useState(false);
  const [subathonEndTime, setSubathonEndTime] = useState<Date | null>(null);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setViewerCount(prev => Math.max(0, prev + Math.floor(Math.random() * 10 - 4)));
      
      // Simulate donations
      if (Math.random() < 0.1) {
        const amount = Math.floor(Math.random() * 50) + 5;
        setTotalDonations(prev => prev + amount);
        
        // Extend subathon if active
        if (subathonActive && subathonEndTime) {
          const extensionMinutes = Math.floor(amount / 5);
          setSubathonEndTime(new Date(subathonEndTime.getTime() + extensionMinutes * 60000));
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isLive, subathonActive, subathonEndTime]);

  const handleGoLive = () => {
    if (!streamTitle || !streamCategory) {
      alert('Please set a stream title and category before going live!');
      return;
    }
    setIsLive(true);
    setViewerCount(1);
  };

  const handleStartSubathon = () => {
    const duration = 60; // minutes
    setSubathonEndTime(new Date(Date.now() + duration * 60000));
    setSubathonActive(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">StreamPro Dashboard</h1>
              <p className="text-gray-400">Manage your live stream</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg">
              <Users className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-medium">{viewerCount.toLocaleString()} viewers</span>
            </div>
            
            <button
              onClick={isLive ? () => setIsLive(false) : handleGoLive}
              className={`px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 ${
                isLive
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isLive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isLive ? 'End Stream' : 'Go Live'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stream Setup */}
          {!isLive && (
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Stream Setup</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Stream Title
                  </label>
                  <input
                    type="text"
                    value={streamTitle}
                    onChange={(e) => setStreamTitle(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your stream title..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={streamCategory}
                    onChange={(e) => setStreamCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a category...</option>
                    <option value="gaming">Gaming</option>
                    <option value="music">Music</option>
                    <option value="talk">Talk Show</option>
                    <option value="creative">Creative</option>
                    <option value="education">Education</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Live Stream Controls */}
          {isLive && (
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-green-400">🔴 LIVE</h2>
                <div className="flex items-center space-x-4">
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Play className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-400">Live Stream Preview</p>
                  <p className="text-sm text-gray-500">{streamTitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <Users className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{viewerCount.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Viewers</div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">${totalDonations}</div>
                  <div className="text-sm text-gray-400">Donations</div>
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <MessageSquare className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">127</div>
                  <div className="text-sm text-gray-400">Messages</div>
                </div>
              </div>
            </div>
          )}

          {/* Donation Goals */}
          <DonationGoals
            currentAmount={totalDonations}
            goalAmount={donationGoal}
            onUpdateGoal={setDonationGoal}
          />

          {/* Subathon Timer */}
          {isLive && (
            <SubathonTimer
              isActive={subathonActive}
              endTime={subathonEndTime}
              onStart={handleStartSubathon}
              onEnd={() => {
                setSubathonActive(false);
                setSubathonEndTime(null);
              }}
            />
          )}

          {/* Token System */}
          <TokenSystem />

          {/* Analytics */}
          {isLive && <StreamAnalytics />}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Chat Panel */}
          {isLive && <ChatPanel />}

          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Create Poll
              </button>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Start Giveaway
              </button>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                Add Alert
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="text-sm">
                  <span className="font-medium text-green-400">+$25</span> from CoolViewer123
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="text-sm">
                  <span className="font-medium">StreamFan99</span> followed you
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="text-sm">
                  <span className="font-medium">GameMaster</span> used 50 tokens
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}