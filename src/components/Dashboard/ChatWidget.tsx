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

export function ChatWidget() {
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
      const usernames = ['DiamondHands', 'cryptoChad', 'MoonLambo', 'BagHolder', 'PumpKing'];
      const sampleMessages = [
        'Paper hands get rekt.',
        'This project is absolutely going to the moon! I have never been more bullish.',
        'Wen Lambo?',
        'Buy the dip!',
        'Diamond hands only.',
        'To the moon! 🚀',
        'HODL!',
        'FOMO is real.',
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
    <div className="max-w-2xl mx-auto bg-transparent border border-white/10 rounded-2xl shadow-lg p-0 overflow-hidden mt-12">
      <div className="bg-transparent px-8 py-6 border-b border-white/10 text-center">
        <h2 className="text-3xl font-bold text-white">Chat Widget Configuration</h2>
      </div>
      <div className="px-8 py-6 space-y-8">
        <div>
          <div className="font-bold text-lg mb-2">1. Enter Token's CA</div>
          <input type="text" placeholder="e.g., 9hAv86Yo..." className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <div className="font-bold text-lg mb-2">2. TTS Configuration</div>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Enable Text-to-Speech</span>
          </label>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">3. Select Style</div>
          <div className="flex gap-4">
            <button className="flex-1 py-4 rounded-xl border-2 border-blue-500 bg-blue-900/30 text-white font-semibold text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 relative">
              Pump Fun
              <span className="absolute top-2 right-2 w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center text-white">✓</span>
            </button>
            <button className="flex-1 py-4 rounded-xl border-2 border-white/10 bg-transparent text-white font-semibold text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Classic
            </button>
          </div>
          <label className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Remove Avatars</span>
          </label>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">4. Widget Dimensions <span className="text-gray-400 text-base">(optional)</span></div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Width (px)</label>
              <input type="number" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={600} />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1">Height (px)</label>
              <input type="number" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={600} />
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-lg mb-2">5. Blacklisted Words <span className="text-gray-400 text-base">(optional)</span></div>
          <input type="text" placeholder="e.g., badword, anotherbadword..." className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <p className="text-xs text-gray-400 mt-1">Words are filtered if they appear in a message. Case-insensitive.</p>
        </div>
      </div>
      <div className="px-8 py-6 border-t border-white/10">
        <div className="font-bold text-lg mb-2">Widget URL</div>
        <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white font-mono mb-2" placeholder="Enter the token address to generate the widget link." />
      </div>
      <div className="px-8 py-6 border-t border-white/10">
        <div className="font-bold text-lg mb-2">Preview</div>
  <div className="bg-white rounded-xl border-2 border-blue-500 p-4 min-h-[180px]">
          {/* Chat messages preview */}
          <div className="h-40 overflow-y-auto space-y-2">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`font-bold text-sm ${
                      msg.isModerator ? 'text-green-400' : 
                      msg.isSubscriber ? 'text-purple-400' : 'text-blue-400'
                    }`}>
                      {msg.username}
                    </span>
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
                  <p className="text-sm text-black break-words">{msg.message}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
