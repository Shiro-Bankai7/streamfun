import React from 'react';
import { Link } from 'react-router-dom';

const trendingTokens = [
  {
    id: 1,
    image: 'https://streamdotfun.com/images/token1.png', // Placeholder, replace with real image
    viewers: 57,
    marketCap: '64.1K',
    title: 'PRÉ LANÇAMENTO - OPR -...',
    subtitle: 'OPR | OPRESSOR',
    user: '@drcripto',
    followers: 40,
    description: 'FUN TOKEN DA COMUNIDADE MAIS OPRESSORA DO MERCADO CRIPTO',
    livestream: '5h 28m ago',
    stats: [
      { icon: '🌐' }, { icon: '❌' }, { icon: '🔼' }, { icon: '🛡️' }, { icon: '👤' }, { icon: '🪙' }, { icon: 'CA' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
  },
  {
    id: 2,
    image: 'https://streamdotfun.com/images/token2.png',
    viewers: 115,
    marketCap: '494.7K',
    title: 'Axle crash out sleep stream',
    subtitle: 'AUSBAGWORK | AUSSIE BAG WORKERS',
    user: '@ausbagwork',
    followers: 254,
    description: 'AUSSIE BAG WORKER',
    livestream: '5h 34m ago',
    stats: [
      { icon: '🌐' }, { icon: '❌' }, { icon: '🔼' }, { icon: '🛡️' }, { icon: '👤' }, { icon: '🪙' }, { icon: 'CA' }
    ],
    viewersChange: '↑',
    marketCapChange: '↑',
  },
  {
    id: 3,
    image: 'https://streamdotfun.com/images/token3.png',
    viewers: 12,
    marketCap: '20.1K',
    title: 'DIRTYCOIN',
    subtitle: 'DIRTY | DIRTYCOIN',
    user: '@durtychuckd',
    followers: 4,
    description: 'My name is DirtyChuck and I am going to do whatever it takes to become the...',
    livestream: '3h 9m ago',
    stats: [
      { icon: '🌐' }, { icon: '❌' }, { icon: '🔼' }, { icon: '🛡️' }, { icon: '👤' }, { icon: '🪙' }, { icon: 'CA' }
    ],
    viewersChange: '↓',
    marketCapChange: '↑',
  },
  {
    id: 4,
    image: 'https://streamdotfun.com/images/token4.png',
    viewers: 99,
    marketCap: '433.2K',
    title: 'FLEX',
    subtitle: 'FLEX | flex',
    user: '@d33dsl',
    followers: 10,
    description: `Supercars. girls. watches. energy on max. if you're here, you're part of the flex`,
    livestream: '1h 9m ago',
    stats: [
      { icon: '🌐' }, { icon: '❌' }, { icon: '🔼' }, { icon: '🛡️' }, { icon: '👤' }, { icon: '🪙' }, { icon: 'CA' }
    ],
    viewersChange: '↑',
    marketCapChange: '↓',
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a001a] via-[#1a001a] to-black text-white font-sans relative overflow-x-hidden">
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
            <div key={token.id} className="bg-black/60 rounded-2xl border border-[#23272f] shadow-lg flex flex-col overflow-hidden">
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
                <div className="text-xs text-gray-400 mb-2">{token.user} <span className="ml-2">{token.followers} followers</span></div>
                <div className="flex gap-2 mb-2">
                  {token.stats.map((stat, i) => (
                    <span key={i} className="text-gray-300 text-lg">{stat.icon}</span>
                  ))}
                </div>
                <div className="text-xs text-gray-300 mb-2 line-clamp-2">{token.description}</div>
                <div className="text-xs text-gray-500 mb-2">Livestream started {token.livestream}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Footer bar */}
        <div className="fixed bottom-0 left-0 w-full bg-black/90 text-white text-xs flex items-center justify-between px-8 py-2 border-t border-[#23272f] z-20">
          <div className="flex gap-4 items-center">
            <span className="font-bold">$STREAM</span>
            <span>MC 1.3M</span>
            <span>CA</span>
          </div>
          <div className="flex gap-8 items-center">
            <span>ACTIVE STREAMS <span className="text-green-400 font-bold">816 ↑</span></span>
            <span>TOTAL VIEWERS <span className="text-green-400 font-bold">7052 ↑</span></span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
