import React, { useState } from 'react';
import { X, Heart, Gift, DollarSign } from 'lucide-react';

interface DonationModalProps {
  onClose: () => void;
  streamerName: string;
}

export function DonationModal({ onClose, streamerName }: DonationModalProps) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [processing, setProcessing] = useState(false);

  const quickAmounts = [5, 10, 25, 50, 100];

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) < 1) return;

    setProcessing(true);
    
    // Simulate donation processing
    setTimeout(() => {
      alert(`Thank you! Your $${amount} donation has been sent to ${streamerName}!`);
      setProcessing(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Gift className="w-6 h-6 text-green-400" />
            <h2 className="text-xl font-bold text-white">Support {streamerName}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleDonate} className="space-y-6">
          {/* Quick Amount Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Quick Select
            </label>
            <div className="grid grid-cols-5 gap-2">
              {quickAmounts.map((quickAmount) => (
                <button
                  key={quickAmount}
                  type="button"
                  onClick={() => setAmount(quickAmount.toString())}
                  className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                    amount === quickAmount.toString()
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                >
                  ${quickAmount}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Custom Amount
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter amount..."
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message (Optional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              rows={3}
              placeholder="Say something nice..."
              maxLength={200}
            />
            <div className="text-xs text-gray-400 mt-1">
              {message.length}/200 characters
            </div>
          </div>

          {/* Anonymous Option */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="w-4 h-4 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-500 focus:ring-2"
            />
            <label htmlFor="anonymous" className="text-sm text-gray-300">
              Donate anonymously
            </label>
          </div>

          {/* Donation Impact */}
          {amount && parseFloat(amount) > 0 && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <Heart className="w-4 h-4" />
                <span className="font-medium">Your Impact</span>
              </div>
              <div className="text-sm text-gray-300 space-y-1">
                <p>• Supports {streamerName}'s content creation</p>
                <p>• You'll earn {Math.floor(parseFloat(amount) * 10)} tokens</p>
                {parseFloat(amount) >= 10 && <p>• Triggers donation alert on stream</p>}
                {parseFloat(amount) >= 25 && <p>• Message will be highlighted</p>}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!amount || parseFloat(amount) < 1 || processing}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {processing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Gift className="w-5 h-5 mr-2" />
                Donate ${amount || '0'}
              </div>
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400">
            Donations are processed securely. You can cancel recurring donations anytime.
          </p>
        </div>
      </div>
    </div>
  );
}