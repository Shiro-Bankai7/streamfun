import React, { useState } from 'react';
import { Trophy, Crown, Star, TrendingUp, Users, DollarSign, Flame, MessageSquare } from 'lucide-react';

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<'streamers' | 'viewers'>('streamers');

  const topStreamers = [
    {
      rank: 1,
      username: 'ProStreamer',
      avatar: '🎮',
      totalDonations: 12500,
      followers: 45000,
      avgViewers: 2500,
      tokensEarned: 125000,
      badge: 'legendary',
    },
    {
      rank: 2,
      username: 'MusicMaster',
      avatar: '🎵',
      totalDonations: 8900,
      followers: 32000,
      avgViewers: 1800,
      tokensEarned: 89000,
      badge: 'epic',
    },
    {
      rank: 3,
      username: 'ArtCreator',
      avatar: '🎨',
      totalDonations: 7200,
      followers: 28000,
      avgViewers: 1500,
      tokensEarned: 72000,
      badge: 'epic',
    },
    {
      rank: 4,
      username: 'TechTalker',
      avatar: '💻',
      totalDonations: 5500,
      followers: 25000,
      avgViewers: 1200,
      tokensEarned: 55000,
      badge: 'rare',
    },
    {
      rank: 5,
      username: 'FitnessGuru',
      avatar: '💪',
      totalDonations: 4300,
      followers: 22000,
      avgViewers: 1000,
      tokensEarned: 43000,
      badge: 'rare',
    },
  ];

  const topViewers = [
    {
      rank: 1,
      username: 'SuperSupporter',
      avatar: '👑',
      totalDonated: 2500,
      tokensSpent: 15000,
      streamsWatched: 450,
      chatMessages: 12000,
      badge: 'legendary',
    },
    {
      rank: 2,
      username: 'StreamFan99',
      avatar: '⭐',
      totalDonated: 1800,
      tokensSpent: 12000,
      streamsWatched: 380,
      chatMessages: 9500,
      badge: 'epic',
    },
    {
      rank: 3,
      username: 'LoyalViewer',
      avatar: '💎',
      totalDonated: 1500,
      tokensSpent: 10000,
      streamsWatched: 320,
      chatMessages: 8200,
      badge: 'epic',
    },
    {
      rank: 4,
      username: 'ChatMaster',
      avatar: '💬',
      totalDonated: 1200,
      tokensSpent: 8500,
      streamsWatched: 290,
      chatMessages: 15000,
      badge: 'rare',
    },
    {
      rank: 5,
      username: 'TokenBurner',
      avatar: '🔥',
      totalDonated: 900,
      tokensSpent: 20000,
      streamsWatched: 250,
      chatMessages: 6800,
      badge: 'rare',
    },
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'legendary': return 'text-yellow-400 bg-yellow-400/10';
      case 'epic': return 'text-purple-400 bg-purple-400/10';
      case 'rare': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Trophy className="w-6 h-6 text-gray-300" />;
    if (rank === 3) return <Trophy className="w-6 h-6 text-orange-400" />;
    return <span className="text-2xl font-bold text-gray-400">#{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f] text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Leaderboards</h1>
              <p className="text-gray-400">Discover top streamers and most active viewers</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('streamers')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'streamers'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Top Streamers
            </button>
            <button
              onClick={() => setActiveTab('viewers')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'viewers'
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Top Viewers
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Top 3 Podium */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">🏆 Hall of Fame</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(activeTab === 'streamers' ? topStreamers : topViewers).slice(0, 3).map((user, idx) => (
              <div
                key={user.username}
                className={`relative bg-gray-800 rounded-xl p-6 text-center border-2 ${
                  idx === 0 ? 'border-yellow-400 transform scale-105' :
                  idx === 1 ? 'border-gray-400' : 'border-orange-400'
                }`}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    idx === 0 ? 'bg-yellow-400' :
                    idx === 1 ? 'bg-gray-400' : 'bg-orange-400'
                  }`}>
                    <span className="text-white font-bold text-sm">#{user.rank}</span>
                  </div>
                </div>

                <div className="text-4xl mb-4">{user.avatar}</div>
                <h3 className="text-xl font-bold mb-2">{user.username}</h3>
                
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${getBadgeColor(user.badge)}`}>
                  <Star className="w-4 h-4 mr-1" />
                  {user.badge.toUpperCase()}
                </div>

                <div className="space-y-2">
                  {activeTab === 'streamers' ? (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Total Donations:</span>
                        <span className="text-green-400 font-bold">${user.totalDonations.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Followers:</span>
                        <span className="text-blue-400 font-bold">{user.followers.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Avg Viewers:</span>
                        <span className="text-purple-400 font-bold">{user.avgViewers.toLocaleString()}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Total Donated:</span>
                        <span className="text-green-400 font-bold">${user.totalDonated.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Tokens Spent:</span>
                        <span className="text-orange-400 font-bold">{user.tokensSpent.toLocaleString()}🔥</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Streams Watched:</span>
                        <span className="text-purple-400 font-bold">{user.streamsWatched}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
            <h3 className="text-xl font-bold flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>Full Rankings</span>
            </h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {(activeTab === 'streamers' ? topStreamers : topViewers).map((user) => (
                <div
                  key={user.username}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(user.rank)}
                    </div>
                    
                    <div className="text-3xl">{user.avatar}</div>
                    
                    <div>
                      <h4 className="font-bold text-lg">{user.username}</h4>
                      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(user.badge)}`}>
                        {user.badge.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    {activeTab === 'streamers' ? (
                      <>
                        <div>
                          <div className="flex items-center space-x-1 text-green-400 mb-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-bold">${user.totalDonations.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Donations</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 text-blue-400 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="font-bold">{user.followers.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Followers</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 text-purple-400 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="font-bold">{user.avgViewers.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Avg Viewers</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                            <Flame className="w-4 h-4" />
                            <span className="font-bold">{user.tokensEarned.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Tokens</div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <div className="flex items-center space-x-1 text-green-400 mb-1">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-bold">${user.totalDonated.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Donated</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 text-orange-400 mb-1">
                            <Flame className="w-4 h-4" />
                            <span className="font-bold">{user.tokensSpent.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Tokens Spent</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 text-purple-400 mb-1">
                            <Users className="w-4 h-4" />
                            <span className="font-bold">{user.streamsWatched}</span>
                          </div>
                          <div className="text-xs text-gray-400">Streams</div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-1 text-blue-400 mb-1">
                            <MessageSquare className="w-4 h-4" />
                            <span className="font-bold">{user.chatMessages.toLocaleString()}</span>
                          </div>
                          <div className="text-xs text-gray-400">Messages</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}