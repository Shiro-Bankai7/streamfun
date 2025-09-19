import React, { useState } from 'react';
import { 
  Heart, 
  Share, 
  Gift, 
  Users, 
  Settings,
  Volume2,
  VolumeX,
  Maximize,
  MessageSquare,
  Coins,
  Crown
} from 'lucide-react';
import { ViewerChat } from './ViewerChat';
import { DonationModal } from './DonationModal';

export function ViewerInterface() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [userTokens, setUserTokens] = useState(750);
  
  const streamInfo = {
    title: "Epic Gaming Session - New Game Release!",
    streamer: "ProStreamer",
    category: "Gaming",
    viewers: 1247,
    followers: 12500,
    isLive: true,
    donationGoal: 500,
    currentDonations: 285,
    subathonActive: true,
    subathonTimeLeft: "2:34:17",
  };

  return (
  <div className="min-h-screen bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f] text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">StreamPro</h1>
              <p className="text-gray-400">Live Streaming Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">{userTokens}</span>
            </div>
            
            <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Stream Area */}
        <div className="flex-1 p-6">
          {/* Stream Player */}
          <div className="bg-[#181c23] rounded-xl overflow-hidden mb-6 relative group">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f]">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white/70" />
                </div>
                <p className="text-xl font-medium text-white/90">Live Stream</p>
                <p className="text-white/60">{streamInfo.title}</p>
              </div>
            </div>
            
            {/* Stream Controls Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="bg-black/50 px-3 py-1 rounded-lg text-sm">
                    🔴 LIVE • {streamInfo.viewers.toLocaleString()} viewers
                  </div>
                  
                  <button className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stream Info */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{streamInfo.title}</h2>
                <div className="flex items-center space-x-4 text-gray-400 mb-4">
                  <span>👤 {streamInfo.streamer}</span>
                  <span>🎮 {streamInfo.category}</span>
                  <span>👥 {streamInfo.followers.toLocaleString()} followers</span>
                </div>
                
                {/* Donation Goal Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Donation Goal</span>
                    <span className="text-white font-medium">
                      ${streamInfo.currentDonations} / ${streamInfo.donationGoal}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${(streamInfo.currentDonations / streamInfo.donationGoal) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Subathon Timer */}
                {streamInfo.subathonActive && (
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400 font-bold">🔥 SUBATHON ACTIVE</span>
                      <span className="text-white font-mono text-lg">{streamInfo.subathonTimeLeft}</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Donations extend the stream! Every $5 = +5 minutes
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-3 ml-6">
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all ${
                    isFollowing
                      ? 'bg-gray-600 hover:bg-gray-500 text-white'
                      : 'bg-purple-500 hover:bg-purple-600 text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFollowing ? 'fill-current' : ''}`} />
                  <span>{isFollowing ? 'Following' : 'Follow'}</span>
                </button>

                <button
                  onClick={() => setShowDonationModal(true)}
                  className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center space-x-2 transition-colors"
                >
                  <Gift className="w-4 h-4" />
                  <span>Donate</span>
                </button>

                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <Share className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Viewer Engagement */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Support the Stream</h3>
              <div className="space-y-3">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors">
                  Subscribe for $4.99/month
                </button>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Cheer with Bits
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Buy Gift Sub
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Token Rewards</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                  <span className="text-sm">Chat Highlight</span>
                  <span className="text-yellow-400 font-bold">25🔥</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                  <span className="text-sm">VIP Badge (24h)</span>
                  <span className="text-yellow-400 font-bold">50🔥</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                  <span className="text-sm">Song Request</span>
                  <span className="text-yellow-400 font-bold">75🔥</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Leaderboard</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Top Donator</span>
                </div>
                <p className="text-sm text-gray-400">GenerousViewer - $125</p>
                
                <div className="flex items-center space-x-2 mt-3">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Most Active</span>
                </div>
                <p className="text-sm text-gray-400">ChatMaster - 247 messages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div className="w-80 border-l border-gray-700">
          <ViewerChat userTokens={userTokens} onTokensChange={setUserTokens} />
        </div>
      </div>

      {/* Donation Modal */}
      {showDonationModal && (
        <DonationModal
          onClose={() => setShowDonationModal(false)}
          streamerName={streamInfo.streamer}
        />
      )}
    </div>
  );
}