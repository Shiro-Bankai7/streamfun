import React, { useState, useEffect, useRef } from 'react';
import { Send, Shield, Clock, Filter, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  isSubscriber: boolean;
  isModerator: boolean;
  tokensBurned?: number;
  badges: string[];
}

export function ChatPanel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [chatSettings, setChatSettings] = useState({
    slowMode: false,
    slowModeDelay: 30,
    subscribersOnly: false,
    enableBots: true,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Simulate chat messages
  useEffect(() => {
    const simulateMessages = () => {
      const usernames = ['CoolViewer123', 'StreamFan99', 'GameMaster', 'ProPlayer', 'ChatBot'];
      const sampleMessages = [
        'Great stream!',
        'This is amazing!',
        'How do you do that?',
        'First time here, loving it!',
        'Can you play my song request?',
        'Donated! Keep it up!',
        'This game looks fun',
        'What settings are you using?',
      ];

      const interval = setInterval(() => {
        if (Math.random() < 0.3) {
          const username = usernames[Math.floor(Math.random() * usernames.length)];
          const message = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
          
          const newMsg: ChatMessage = {
            id: Date.now().toString(),
            username,
            message,
            timestamp: new Date(),
            isSubscriber: Math.random() < 0.3,
            isModerator: Math.random() < 0.1,
            tokensBurned: Math.random() < 0.1 ? Math.floor(Math.random() * 100) + 10 : undefined,
            badges: Math.random() < 0.2 ? ['vip'] : [],
          };
          
          setMessages(prev => [...prev.slice(-49), newMsg]);
        }
      }, 2000);

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

    const message: ChatMessage = {
      id: Date.now().toString(),
      username: 'Streamer',
      message: newMessage,
      timestamp: new Date(),
      isSubscriber: true,
      isModerator: true,
      badges: ['streamer'],
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  return (
  <div className="bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f] rounded-xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gray-700 px-4 py-3 flex items-center justify-between">
        <h3 className="font-bold text-white">Stream Chat</h3>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setChatSettings(prev => ({ ...prev, slowMode: !prev.slowMode }))}
            className={`p-1.5 rounded ${chatSettings.slowMode ? 'bg-yellow-500' : 'bg-gray-600'} hover:bg-opacity-80 transition-colors`}
            title="Slow Mode"
          >
            <Clock className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setChatSettings(prev => ({ ...prev, subscribersOnly: !prev.subscribersOnly }))}
            className={`p-1.5 rounded ${chatSettings.subscribersOnly ? 'bg-purple-500' : 'bg-gray-600'} hover:bg-opacity-80 transition-colors`}
            title="Subscribers Only"
          >
            <Shield className="w-4 h-4" />
          </button>
          <button className="p-1.5 bg-gray-600 rounded hover:bg-gray-500 transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="h-80 overflow-y-auto p-3 space-y-2 bg-gray-900">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start space-x-2 hover:bg-gray-800 p-1 rounded">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className={`font-bold text-sm ${
                  msg.isModerator ? 'text-green-400' : 
                  msg.isSubscriber ? 'text-purple-400' : 'text-blue-400'
                }`}>
                  {msg.username}
                </span>
                
                {/* Badges */}
                {msg.badges.map((badge, idx) => (
                  <span key={idx} className="text-xs bg-yellow-500 text-black px-1.5 py-0.5 rounded font-bold">
                    {badge.toUpperCase()}
                  </span>
                ))}
                
                {msg.isModerator && (
                  <Shield className="w-3 h-3 text-green-400" />
                )}
                
                {msg.tokensBurned && (
                  <span className="text-xs bg-orange-500 text-white px-1.5 py-0.5 rounded">
                    🔥 {msg.tokensBurned} tokens
                  </span>
                )}
                
                <span className="text-xs text-gray-500">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-white break-words">{msg.message}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Settings Bar */}
      {(chatSettings.slowMode || chatSettings.subscribersOnly) && (
        <div className="bg-yellow-500/10 border-t border-yellow-500/20 px-3 py-2">
          <div className="flex items-center space-x-4 text-xs text-yellow-400">
            {chatSettings.slowMode && (
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>Slow mode: {chatSettings.slowModeDelay}s</span>
              </div>
            )}
            {chatSettings.subscribersOnly && (
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>Subscribers only</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chat Input */}
      <form onSubmit={handleSendMessage} className="border-t border-gray-700 p-3">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your message..."
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
          <div className="flex items-center space-x-2">
            <Bot className="w-3 h-3" />
            <span>Bots: {chatSettings.enableBots ? 'ON' : 'OFF'}</span>
          </div>
        </div>
      </form>
    </div>
  );
}