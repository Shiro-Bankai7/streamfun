import React, { useState, useEffect } from 'react';
import { Clock, Plus, Play, Pause, RotateCcw } from 'lucide-react';

interface SubathonTimerProps {
  isActive: boolean;
  endTime: Date | null;
  onStart: () => void;
  onEnd: () => void;
}

export function SubathonTimer({ isActive, endTime, onStart, onEnd }: SubathonTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState('00:00:00');
  const [totalExtensions, setTotalExtensions] = useState(0);
  const [recentExtensions, setRecentExtensions] = useState<Array<{ amount: number, reason: string, timestamp: Date }>>([]);

  useEffect(() => {
    if (!isActive || !endTime) {
      setTimeRemaining('00:00:00');
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      } else {
        setTimeRemaining('00:00:00');
        onEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, endTime, onEnd]);

  // Simulate extensions based on donations
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 3 seconds
        const extensionMinutes = Math.floor(Math.random() * 15) + 5;
        const reasons = ['Donation Goal Reached', 'New Subscriber', 'Bits Cheered', 'Follower Milestone'];
        const reason = reasons[Math.floor(Math.random() * reasons.length)];
        
        setTotalExtensions(prev => prev + extensionMinutes);
        setRecentExtensions(prev => [
          { amount: extensionMinutes, reason, timestamp: new Date() },
          ...prev.slice(0, 4)
        ]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStartSubathon = () => {
    setTotalExtensions(0);
    setRecentExtensions([]);
    onStart();
  };

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-orange-400" />
          <h2 className="text-xl font-bold">Subathon Timer</h2>
        </div>
        
        <div className="flex items-center space-x-2">
          {!isActive ? (
            <button
              onClick={handleStartSubathon}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Start Subathon</span>
            </button>
          ) : (
            <button
              onClick={onEnd}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Pause className="w-4 h-4" />
              <span>End Subathon</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {/* Timer Display */}
        <div className="text-center">
          <div className={`text-6xl font-mono font-bold mb-2 ${
            isActive ? 'text-orange-400' : 'text-gray-500'
          }`}>
            {timeRemaining}
          </div>
          <p className="text-gray-400">
            {isActive ? 'Time Remaining' : 'No Active Subathon'}
          </p>
        </div>

        {/* Stats */}
        {isActive && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{totalExtensions}</div>
              <div className="text-sm text-gray-400">Minutes Added</div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{recentExtensions.length}</div>
              <div className="text-sm text-gray-400">Recent Extensions</div>
            </div>
          </div>
        )}

        {/* Recent Extensions */}
        {recentExtensions.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-400">Recent Extensions</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {recentExtensions.map((extension, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 bg-gray-700 rounded animate-pulse">
                  <div>
                    <span className="text-sm font-medium text-white">+{extension.amount} minutes</span>
                    <p className="text-xs text-gray-400">{extension.reason}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {extension.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* How It Works */}
        {!isActive && (
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium mb-2">How Subathon Works</h4>
            <div className="text-sm text-gray-400 space-y-1">
              <p>• Viewers can extend the stream by donating, subscribing, or following</p>
              <p>• Each action adds time to the countdown timer</p>
              <p>• Stream continues as long as there's time remaining</p>
              <p>• Create exciting marathon streams with community participation</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}