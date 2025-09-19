import React, { useState, useEffect, useRef } from 'react';
import { Send, Coins, Flame, Crown, Shield } from 'lucide-react';

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  isSubscriber: boolean;
  isModerator: boolean;
  isVip: boolean;
  tokensBurned?: number;
  highlighted?: boolean;
}

interface ViewerChatProps {
  userTokens: number;
  onTokensChange: (tokens: number) => void;
}

export function ViewerChat({ userTokens, onTokensChange }: ViewerChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [highlightNext, setHighlightNext] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Simulate chat messages
  useEffect(() => {
    const simulateMessages = () => {
      const usernames = [
        'StreamFan99', 'GameMaster', 'ProPlayer', 'CoolViewer123', 
        'ChatBot', 'LoyalFollower', 'NewViewer', 'RegularWatcher'
      ];
      const sampleMessages = [
        'This is so cool!', 'Great gameplay!', 'How did you do that?',
        'First time watching, love it!', 'That was insane!',
        'Can you show that trick again?', 'Amazing stream as always',
        'Just followed!', 'This game looks fun', 'Nice moves!'
      ];

      const interval = setInterval(() => {
        if (Math.random() < 0.4) {
          const username = usernames[Math.floor(Math.random() * usernames.length)];
          const message = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
          
          const newMsg: ChatMessage = {
            id: Date.now().toString(),
            username,
            message,
            timestamp: new Date(),
            isSubscriber: Math.random() < 0.3,
            isModerator: Math.random() < 0.1,
            isVip: Math.random() < 0.15,
            tokensBurned: Math.random() < 0.05 ? Math.floor(Math.random() * 50) + 25 : undefined,
            highlighted: Math.random() < 0.05,
          };
          
          setMessages(prev => [...prev.slice(-49), newMsg]);
        }
      }, 1500);

      return () => clearInterval(interval);
    };

    return simulateMessages();
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const tokensToSpend = highlightNext ? 25 : 0;
    
    if (tokensToSpend > userTokens) {
      alert('Not enough tokens for highlight!');
      return;
    }

    const message: ChatMessage = {
      id: Date.now().toString(),
      username: 'You',
      message: newMessage,
      timestamp: new Date(),
      isSubscriber: true,
      isModerator: false,
      isVip: false,
      highlighted: highlightNext,
      tokensBurned: tokensToSpend || undefined,
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
    
    if (tokensToSpend > 0) {
      onTokensChange(userTokens - tokensToSpend);
      setHighlightNext(false);
    }
  };

  const toggleHighlight = () => {
    if (userTokens >= 25) {
      setHighlightNext(!highlightNext);
    } else {
      alert('You need at least 25 tokens to highlight your message!');
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-800">
      {/* Chat Header */}
      <div className="bg-gray-700 px-4 py-3 border-b border-gray-600">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-white">Stream Chat</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>1,247 chatting</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-900">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`p-2 rounded hover:bg-gray-800 transition-colors ${
              msg.highlighted ? 'bg-yellow-500/10 border-l-4 border-yellow-500' : ''
            }`}
          >
            <div className="flex items-center space-x-2 mb-1">
              <span className={`font-bold text-sm ${
                msg.isModerator ? 'text-green-400' : 
                msg.isVip ? 'text-purple-400' :
                msg.isSubscriber ? 'text-blue-400' : 'text-gray-300'
              }`}>
                {msg.username}
              </span>
              
              {/* Badges */}
              {msg.isModerator && (
                <Shield className="w-3 h-3 text-green-400" />
              )}
              {msg.isVip && (
                <Crown className="w-3 h-3 text-purple-400" />
              )}
              {msg.isSubscriber && (
                <span className="text-xs bg-blue-500 text-white px-1.5 py-0.5 rounded font-bold">
                  SUB
                </span>
              )}
              
              {msg.tokensBurned && (
                <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded flex items-center space-x-1">
                  <Flame className="w-2 h-2" />
                  <span>{msg.tokensBurned}</span>
                </span>
              )}
              
              <span className="text-xs text-gray-500">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <p className="text-sm text-white break-words">{msg.message}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Token Actions */}
      <div className="bg-gray-700 px-3 py-2 border-t border-gray-600">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Coins className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold">{userTokens} tokens</span>
          </div>
          
          <button
            onClick={toggleHighlight}
            className={`px-3 py-1 rounded text-xs font-medium flex items-center space-x-1 transition-colors ${
              highlightNext
                ? 'bg-yellow-500 text-black'
                : userTokens >= 25
                ? 'bg-gray-600 hover:bg-gray-500 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
            disabled={userTokens < 25 && !highlightNext}
          >
            <Flame className="w-3 h-3" />
            <span>{highlightNext ? 'Highlighting ON' : 'Highlight (25🔥)'}</span>
          </button>
        </div>
      </div>

      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="border-t border-gray-600 p-3 bg-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className={`flex-1 px-3 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
              highlightNext 
                ? 'bg-yellow-500/10 border border-yellow-500/30' 
                : 'bg-gray-700 border border-gray-600'
            }`}
            placeholder={highlightNext ? "Highlighted message (25 tokens)..." : "Type your message..."}
            maxLength={500}
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
          <span>{newMessage.length}/500</span>
          {highlightNext && (
            <span className="text-yellow-400">🔥 Message will be highlighted</span>
          )}
        </div>
      </form>
    </div>
  );
}