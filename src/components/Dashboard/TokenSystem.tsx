import React, { useState } from 'react';
import { Coins, Flame, Gift, Crown, Zap } from 'lucide-react';

export function TokenSystem() {
  const [userTokens, setUserTokens] = useState(1250);
  const [burnHistory, setBurnHistory] = useState([
    { id: 1, user: 'StreamFan99', amount: 50, action: 'VIP Badge', timestamp: new Date() },
    { id: 2, user: 'GameMaster', amount: 100, action: 'Custom Emote', timestamp: new Date() },
    { id: 3, user: 'CoolViewer123', amount: 25, action: 'Chat Highlight', timestamp: new Date() },
  ]);

  const tokenRewards = [
    {
      id: 1,
      name: 'Chat Highlight',
      description: 'Make your message stand out',
      cost: 25,
      icon: Zap,
      color: 'bg-yellow-500',
    },
    {
      id: 2,
      name: 'VIP Badge',
      description: '24h VIP status',
      cost: 50,
      icon: Crown,
      color: 'bg-purple-500',
    },
    {
      id: 3,
      name: 'Custom Emote',
      description: 'Unlock exclusive emote',
      cost: 100,
      icon: Gift,
      color: 'bg-pink-500',
    },
    {
      id: 4,
      name: 'Song Request',
      description: 'Add song to queue',
      cost: 75,
      icon: Flame,
      color: 'bg-orange-500',
    },
  ];

  const handleBurnTokens = (reward: typeof tokenRewards[0]) => {
    if (userTokens >= reward.cost) {
      setUserTokens(prev => prev - reward.cost);
      setBurnHistory(prev => [
        {
          id: prev.length + 1,
          user: 'You',
          amount: reward.cost,
          action: reward.name,
          timestamp: new Date(),
        },
        ...prev.slice(0, 9),
      ]);
    }
  };

  const totalTokensBurned = burnHistory.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Coins className="w-5 h-5 text-yellow-400" />
          <h2 className="text-xl font-bold">Token System</h2>
        </div>
        
        <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg">
          <Coins className="w-4 h-4 text-yellow-400" />
          <span className="font-bold text-yellow-400">{userTokens.toLocaleString()}</span>
          <span className="text-gray-400 text-sm">tokens</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Token Rewards */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Burn Tokens For Rewards</h3>
          <div className="space-y-3">
            {tokenRewards.map((reward) => {
              const Icon = reward.icon;
              const canAfford = userTokens >= reward.cost;
              
              return (
                <div
                  key={reward.id}
                  className={`p-4 rounded-lg border ${
                    canAfford
                      ? 'bg-gray-700 border-gray-600 hover:border-gray-500'
                      : 'bg-gray-800 border-gray-700 opacity-50'
                  } transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${reward.color}`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{reward.name}</h4>
                        <p className="text-sm text-gray-400">{reward.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-yellow-400 font-bold">
                        <Flame className="w-3 h-3" />
                        <span>{reward.cost}</span>
                      </div>
                      <button
                        onClick={() => handleBurnTokens(reward)}
                        disabled={!canAfford}
                        className={`mt-1 px-3 py-1 rounded text-xs font-medium transition-colors ${
                          canAfford
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? 'Burn' : 'Not Enough'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Burn History & Stats */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-400">{totalTokensBurned}</div>
              <div className="text-sm text-gray-400">Total Burned</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <Gift className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">{burnHistory.length}</div>
              <div className="text-sm text-gray-400">Rewards Claimed</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Recent Burns</h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {burnHistory.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <span className="font-medium text-white">{item.user}</span>
                    <p className="text-sm text-gray-400">{item.action}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-orange-400">
                      <Flame className="w-3 h-3" />
                      <span className="font-bold">{item.amount}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Earn Tokens */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-2">How to Earn Tokens</h4>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• Watch streams: +5 tokens every 15 minutes</p>
              <p>• Chat activity: +2 tokens per message</p>
              <p>• Follow streamers: +25 tokens</p>
              <p>• Subscribe: +100 tokens</p>
              <p>• Donate: +10 tokens per $1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}