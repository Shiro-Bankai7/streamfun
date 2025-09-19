import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const trendingTokens = [
  {
    id: 1,
    image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_xqc-440x248.jpg',
    viewers: 57000,
    marketCap: '64.1M',
    title: 'xQc - Just Chatting',
    subtitle: 'Twitch',
    user: '@xQc',
    followers: 12000000,
    description: 'The juicer himself, live with chat and games.',
    livestream: 'Live now',
    stats: [
      { icon: '🌐' }, { icon: '🟣' }, { icon: '👤' }, { icon: '🪙' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
    link: 'https://www.twitch.tv/xqc',
  },
  {
    id: 2,
    image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_pokimane-440x248.jpg',
    viewers: 25000,
    marketCap: '32.4M',
    title: 'Pokimane - Variety',
    subtitle: 'Twitch',
    user: '@pokimanelol',
    followers: 9000000,
    description: 'Chill streams, games, and more with Poki!',
    livestream: 'Live now',
    stats: [
      { icon: '🌐' }, { icon: '🟣' }, { icon: '👤' }, { icon: '🪙' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
    link: 'https://www.twitch.tv/pokimane',
  },
  {
    id: 3,
    image: 'https://i.ytimg.com/vi/21X5lGlDOfg/hqdefault_live.jpg',
    viewers: 12000,
    marketCap: '20.1M',
    title: 'NASA Live: Earth From Space',
    subtitle: 'YouTube',
    user: '@nasa',
    followers: 11000000,
    description: 'Live views from the International Space Station.',
    livestream: 'Live now',
    stats: [
      { icon: '🌐' }, { icon: '🔴' }, { icon: '👤' }, { icon: '🪙' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
    link: 'https://www.youtube.com/watch?v=21X5lGlDOfg',
  },
  {
    id: 4,
    image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_nickmercs-440x248.jpg',
    viewers: 18000,
    marketCap: '43.2M',
    title: 'Nickmercs - Warzone',
    subtitle: 'Twitch',
    user: '@NICKMERCS',
    followers: 4000000,
    description: 'FPS action and community vibes.',
    livestream: 'Live now',
    stats: [
      { icon: '🌐' }, { icon: '🟣' }, { icon: '👤' }, { icon: '🪙' }
    ],
    viewersChange: '↑',
    marketCapChange: '↓',
    link: 'https://www.twitch.tv/nickmercs',
  },
  {
    id: 5,
    image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_amouranth-440x248.jpg',
    viewers: 9000,
    marketCap: '12.2M',
    title: 'Amouranth - IRL',
    subtitle: 'Twitch',
    user: '@Amouranth',
    followers: 6000000,
    description: 'IRL, ASMR, and more.',
    livestream: 'Live now',
    stats: [
      { icon: '🌐' }, { icon: '🟣' }, { icon: '👤' }, { icon: '🪙' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
    link: 'https://www.twitch.tv/amouranth',
  },
  {
    id: 6,
    image: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_trainwreckstv-440x248.jpg',
    viewers: 8000,
    marketCap: '9.8M',
    title: 'Trainwreckstv - Slots',
    subtitle: 'Kick',
    user: '@Trainwreckstv',
    followers: 2000000,
    description: 'Slots, casino, and high stakes.',
    livestream: 'Live now',
    stats: [
      { icon: '🌐' }, { icon: '🟢' }, { icon: '👤' }, { icon: '🪙' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
    link: 'https://kick.com/trainwreckstv',
  },
];
function DynamicFooter() {
  const [activeStreams, setActiveStreams] = useState(800 + Math.floor(Math.random() * 100));
  const [totalViewers, setTotalViewers] = useState(7000 + Math.floor(Math.random() * 1000));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStreams(prev => {
        let next = prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5);
        if (next < 700) next = 700;
        if (next > 900) next = 900;
        return next;
      });
      setTotalViewers(prev => {
        let next = prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 20);
        if (next < 6000) next = 6000;
        if (next > 9000) next = 9000;
        return next;
      });
    }, 2000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 text-white text-xs flex items-center justify-between px-8 py-2 border-t border-[#23272f] z-20">
      <div className="flex gap-4 items-center">
        <span className="font-bold">$STREAM</span>
        <span>MC 1.3M</span>
        <span>CA</span>
      </div>
      <div className="flex gap-8 items-center">
        <span>ACTIVE STREAMS <span className="text-green-400 font-bold">{activeStreams} {activeStreams > 800 ? '↑' : '↓'}</span></span>
        <span>TOTAL VIEWERS <span className="text-green-400 font-bold">{totalViewers} {totalViewers > 7000 ? '↑' : '↓'}</span></span>
      </div>
    </div>
  );
}
const Explore = () => {
  return (
  <div className="min-h-screen w-full bg-gradient-to-br from-[#0a2540] via-[#1e3a5c] to-[#23272f] text-white font-sans relative overflow-x-hidden">
      {/* Header */}
      <nav className="w-full flex items-center justify-end gap-8 px-10 py-6 text-base font-medium bg-black border-b border-[#222] z-10">
        <Link to="/" className="hover:text-[#a21caf]">Home</Link>
        <Link to="/explore" className="hover:text-[#a21caf] text-white">Explore</Link>
        <Link to="/configure/buy-bot" className="hover:text-[#a21caf]">Configure</Link>
        <a href="https://streamdotfun.gitbook.io/streamdotfun" target="_blank" rel="noopener noreferrer" className="hover:text-[#a21caf]">Documentation</a>
        <a href="https://t.me/streamdotfun_entry" target="_blank" rel="noopener noreferrer" className="hover:text-[#a21caf]">✉️</a>
        <a href="https://x.com/streamdotfun" target="_blank" rel="noopener noreferrer" className="hover:text-[#a21caf]">✖️</a>
      </nav>
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <h1 className="text-5xl font-extrabold text-center mt-12 mb-10">Live Tokens</h1>
        <h2 className="text-2xl font-bold mb-6">Trending now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingTokens.map(token => (
            <a key={token.id} href={token.link} target="_blank" rel="noopener noreferrer" className="bg-black/60 rounded-2xl border border-[#23272f] shadow-lg flex flex-col overflow-hidden hover:scale-[1.025] transition-transform">
              <div className="relative">
                <img src={token.image} alt={token.title} className="w-full h-40 object-cover" />
                <div className="absolute top-2 left-2 flex gap-2">
                  <span className="bg-black/80 px-3 py-1 rounded text-xs flex items-center gap-1">
                    {token.viewers} <span className="ml-1">{token.viewersChange === '↑' ? '↑' : '↓'}</span>
                  </span>
                </div>
                <div className="absolute top-2 right-2 flex gap-2">
                  <span className="bg-black/80 px-3 py-1 rounded text-xs flex items-center gap-1">
                    {token.marketCap} <span className="ml-1">{token.marketCapChange === '↑' ? '↑' : '↓'}</span>
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="font-bold text-lg leading-tight mb-1">{token.title}</div>
                <div className="text-xs text-gray-400 mb-1">{token.subtitle}</div>
                <div className="text-xs text-gray-400 mb-2">{token.user} <span className="ml-2">{token.followers.toLocaleString()} followers</span></div>
                <div className="flex gap-2 mb-2">
                  {token.stats.map((stat, i) => (
                    <span key={i} className="text-gray-300 text-lg">{stat.icon}</span>
                  ))}
                </div>
                <div className="text-xs text-gray-300 mb-2 line-clamp-2">{token.description}</div>
                <div className="text-xs text-gray-500 mb-2">{token.livestream}</div>
              </div>
            </a>
          ))}
        </div>
        {/* Footer bar */}
        <DynamicFooter />
// Dynamic footer bar for active streams and viewers


 
      </main>
    </div>
  );
};

export default Explore;
