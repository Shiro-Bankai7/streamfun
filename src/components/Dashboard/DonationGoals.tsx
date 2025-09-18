import React, { useState } from 'react';
import { Target, Edit3, Check, TrendingUp } from 'lucide-react';

interface DonationGoalsProps {
  currentAmount: number;
  goalAmount: number;
  onUpdateGoal: (amount: number) => void;
}

export function DonationGoals({ currentAmount, goalAmount, onUpdateGoal }: DonationGoalsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newGoal, setNewGoal] = useState(goalAmount.toString());

  const progress = Math.min((currentAmount / goalAmount) * 100, 100);
  const remaining = Math.max(goalAmount - currentAmount, 0);

  const handleSaveGoal = () => {
    const amount = parseInt(newGoal);
    if (!isNaN(amount) && amount > 0) {
      onUpdateGoal(amount);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Target className="w-5 h-5 text-green-400" />
          <h2 className="text-xl font-bold">Donation Goal</h2>
        </div>
        
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Goal Amount */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Target Amount:</span>
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                className="w-20 px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm"
                min="1"
              />
              <button
                onClick={handleSaveGoal}
                className="p-1 bg-green-500 hover:bg-green-600 rounded transition-colors"
              >
                <Check className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <span className="text-white font-bold">${goalAmount.toLocaleString()}</span>
          )}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-white font-medium">{progress.toFixed(1)}%</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {progress > 20 && (
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        {/* Current Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-700 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">${currentAmount}</div>
            <div className="text-xs text-gray-400">Raised</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-orange-400">${remaining}</div>
            <div className="text-xs text-gray-400">Remaining</div>
          </div>
        </div>

        {/* Goal Achievement */}
        {progress >= 100 && (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="font-bold">Goal Achieved!</span>
            </div>
            <p className="text-sm text-gray-300">
              Congratulations! You've reached your donation goal of ${goalAmount.toLocaleString()}!
            </p>
          </div>
        )}

        {/* Recent Donations */}
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-400 mb-2">Recent Donations</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <span className="text-sm font-medium">CoolViewer123</span>
              <span className="text-green-400 font-bold">$25</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <span className="text-sm font-medium">StreamFan99</span>
              <span className="text-green-400 font-bold">$50</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
              <span className="text-sm font-medium">Anonymous</span>
              <span className="text-green-400 font-bold">$10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}