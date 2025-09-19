import React from 'react';
import { TrendingUp, Users, DollarSign, MessageSquare, Eye, Calendar } from 'lucide-react';

export function StreamAnalytics() {
  const analytics = {
    todayStats: {
      viewers: 1247,
      peakViewers: 1589,
      chatMessages: 2341,
      donations: 285,
      newFollowers: 47,
      streamDuration: '3h 45m',
    },
    weeklyStats: {
      totalViews: 8930,
      avgViewers: 892,
      totalDonations: 1250,
      totalFollowers: 234,
    },
    topChatters: [
      { username: 'StreamFan99', messages: 127 },
      { username: 'GameMaster', messages: 98 },
      { username: 'CoolViewer123', messages: 84 },
      { username: 'ProPlayer', messages: 73 },
    ],
    topDonators: [
      { username: 'GenerousViewer', amount: 50 },
      { username: 'StreamSupporter', amount: 35 },
      { username: 'CoolViewer123', amount: 25 },
      { username: 'FanNumber1', amount: 20 },
    ],
  };

  return (
  <div className="bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f] rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="w-5 h-5 text-blue-400" />
        <h2 className="text-xl font-bold">Stream Analytics</h2>
      </div>

      <div className="space-y-6">
        {/* Today's Performance */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Today's Performance</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-gray-400">Current Viewers</span>
              </div>
              <div className="text-2xl font-bold text-white">{analytics.todayStats.viewers.toLocaleString()}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Eye className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-400">Peak Viewers</span>
              </div>
              <div className="text-2xl font-bold text-white">{analytics.todayStats.peakViewers.toLocaleString()}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400">Donations</span>
              </div>
              <div className="text-2xl font-bold text-white">${analytics.todayStats.donations}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-400">Chat Messages</span>
              </div>
              <div className="text-2xl font-bold text-white">{analytics.todayStats.chatMessages.toLocaleString()}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">New Followers</span>
              </div>
              <div className="text-2xl font-bold text-white">{analytics.todayStats.newFollowers}</div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-400">Stream Time</span>
              </div>
              <div className="text-2xl font-bold text-white">{analytics.todayStats.streamDuration}</div>
            </div>
          </div>
        </div>

        {/* Weekly Overview */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">This Week</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-green-400">{analytics.weeklyStats.totalViews.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Total Views</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-blue-400">{analytics.weeklyStats.avgViewers}</div>
              <div className="text-sm text-gray-400">Avg Viewers</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-green-400">${analytics.weeklyStats.totalDonations}</div>
              <div className="text-sm text-gray-400">Total Donations</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-purple-400">+{analytics.weeklyStats.totalFollowers}</div>
              <div className="text-sm text-gray-400">New Followers</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Chatters */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Most Active Chatters</h3>
            <div className="space-y-2">
              {analytics.topChatters.map((chatter, idx) => (
                <div key={chatter.username} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      idx === 0 ? 'bg-yellow-500' : 
                      idx === 1 ? 'bg-gray-400' : 
                      idx === 2 ? 'bg-orange-600' : 'bg-gray-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className="font-medium">{chatter.username}</span>
                  </div>
                  <span className="text-yellow-400 font-bold">{chatter.messages}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Donators */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Top Donators</h3>
            <div className="space-y-2">
              {analytics.topDonators.map((donator, idx) => (
                <div key={donator.username} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      idx === 0 ? 'bg-yellow-500' : 
                      idx === 1 ? 'bg-gray-400' : 
                      idx === 2 ? 'bg-orange-600' : 'bg-gray-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className="font-medium">{donator.username}</span>
                  </div>
                  <span className="text-green-400 font-bold">${donator.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}