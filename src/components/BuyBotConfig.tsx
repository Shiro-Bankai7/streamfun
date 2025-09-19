

import React, { useState } from 'react';

const BuyBotConfig = () => {
  const [tier, setTier] = useState(1);
  const [address, setAddress] = useState("");
  const [preview, setPreview] = useState(false);
  const [colorStyle, setColorStyle] = useState('Light');
  const [audio, setAudio] = useState('Off');

  return (
    <div className="min-h-screen h-screen w-full flex flex-col bg-gradient-to-br from-[#0a2540] via-[#1e3a5c] to-[#23272f] relative text-white overflow-x-hidden" style={{background: 'radial-gradient(ellipse at 20% 40%, #2563eb33 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #2563eb22 0%, transparent 70%), linear-gradient(120deg, #0a2540 0%, #1e3a5c 60%, #23272f 100%)'}}>
  <main className="flex-1 flex flex-col gap-10 p-4 ml-[0px] min-h-0 w-full">
        {/* Top Section: Preview & Widget URL */}
  <div className="flex flex-col lg:flex-row gap-8 mb-8 min-h-0 w-full">
          {/* Preview */}
          <div className="flex-1 min-w-[320px] max-w-full">
            <div className="border-2 border-blue-500 rounded-xl p-6 bg-[#183a6c]/60">
              <h2 className="font-semibold text-xl mb-4">Preview</h2>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3].map((t) => (
                  <button
                    key={t}
                    className={`px-8 py-2 rounded border font-semibold text-base transition-colors ${
                      tier === t
                        ? "border-blue-500 text-white bg-[#18141c]"
                        : "border-gray-600 text-gray-300 bg-[#18141c]"
                    }`}
                    onClick={() => setTier(t)}
                  >
                    Tier {t}
                  </button>
                ))}
              </div>
              <div className="h-80 flex flex-col justify-center items-center">
                <span className="text-green-200 text-2xl font-bold mb-2">{['Yje2ax','💎','🚀','🦄','🔥','🎉','🐳','🦈','🧊','👑'][tier]}</span>
                <span className="text-white text-lg flex items-center gap-2">
                  {tier === 1 && <span>💸</span>}
                  {tier === 2 && <span>🤑</span>}
                  {tier === 3 && <span>💰</span>}
                  bought 
                  {tier ==1 && <span className="text-yellow-200 font-bold">1.00 sol(170$)</span> }
                  {tier ==2 && <span className="text-yellow-200 font-bold">5.00 sol(850$)</span> }
                  {tier ==3 && <span className="text-yellow-200 font-bold">10.00 sol(1700$)</span> }
                  {tier === 1 && <span>✨</span>}
                  {tier === 2 && <span>🌊</span>}
                  {tier === 3 && <span>🚀</span>}
                </span>
              </div>
            </div>
          </div>
          {/* Widget URL */}
          <div className="flex-1 min-w-[320px] max-w-full">
            <div className="border-2 border-blue-500 rounded-xl p-6 bg-[#183a6c]/60">
              <h2 className="font-semibold text-xl mb-4">Widget URL</h2>
              <input
                className="w-full bg-black border border-gray-700 rounded px-4 py-3 mb-4 text-white font-mono"
                placeholder="Enter your token address."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={preview}
                  onChange={() => setPreview(!preview)}
                  className="accent-blue-500"
                />
                <span>Generate temporary preview link</span>
              </label>
              <p className="text-xs text-gray-400">
                The preview link will cycle through all tiers indefinitely instead of reacting to live trades.
              </p>
            </div>
          </div>
        </div>


        {/* Configuration Section */}
  <section className="bg-transparent rounded-2xl border border-blue-500 p-8 mt-8 w-full" style={{ marginTop: '420px' }}>
          <h1 className="text-3xl font-bold mb-8 text-center">Buy Bot Widget Configuration</h1>
          <ol className="space-y-8">
            {/* 1. Enter token's CA */}
            <li>
              <div className="font-bold text-lg mb-2">1. Enter token's CA</div>
              <input type="text" placeholder="e.g., 9hAv86Yo..." className="w-full bg-transparent border border-[#2563eb] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
            </li>
            {/* 2. Select buy size for each tier */}
            <li>
              <div className="font-bold text-lg mb-2">2. Select the buy size for each tier</div>
              <div className="flex gap-4">
                <input type="text" placeholder="$500" className="flex-1 bg-transparent border border-[#2563eb] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
                <input type="text" placeholder="$1000" className="flex-1 bg-transparent border border-[#2563eb] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
                <input type="text" placeholder="$2000" className="flex-1 bg-transparent border border-[#2563eb] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#2563eb]" />
              </div>
            </li>
            {/* 3. Choose Color & Style */}
            <li>
              <div className="font-bold text-lg mb-2">3. Choose Color & Style</div>
              <div className="flex gap-4 mb-2">
                {['Light','Dark','Bright'].map(style => (
                  <button
                    key={style}
                    className={`flex-1 py-3 rounded-lg border text-base font-semibold transition-colors ${colorStyle===style ? 'bg-[#2563eb] text-white border-[#2563eb]' : 'bg-transparent text-[#fff] border-[#2563eb]'}`}
                    onClick={()=>setColorStyle(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#2563eb]" />
                <span className="text-sm">Add background opacity</span>
              </label>
            </li>
            {/* 4. Choose your animation */}
            <li>
              <div className="font-bold text-lg mb-2">4. Choose your animation</div>
              <div className="flex gap-4 mb-4">
                {[1,2,3].map(tier => (
                  <div key={tier} className="flex-1 min-h-[120px] bg-black/60 border-2 border-[#2563eb] rounded-lg flex flex-col items-center justify-center">
                    <div className="font-bold mb-2">Tier {tier} GIF:</div>
                    <span className="text-xs text-gray-400">Click a GIF below to assign</span>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {['All','Animals','Dance','Memes','Money','NSFW','Pepe','Trump','Collabs'].map(cat => (
                    <button key={cat} className="px-4 py-1 rounded-lg border border-[#2563eb] text-sm font-medium text-white bg-[#2563eb]/10 hover:bg-[#2563eb]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb]">{cat}</button>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {/* Example GIFs */}
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <div key={i} className="aspect-square bg-black/60 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">🐱</span>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            {/* 5. Choose audio */}
            <li>
              <div className="font-bold text-lg mb-2">5. Choose audio</div>
              <div className="flex gap-4">
                {['Off','Clean','Brainrot','Anime girl'].map(opt => (
                  <button
                    key={opt}
                    className={`flex-1 py-3 rounded-lg border text-base font-semibold transition-colors ${audio===opt ? 'bg-[#2563eb] text-white border-[#2563eb]' : 'bg-transparent text-[#fff] border-[#2563eb]'}`}
                    onClick={()=>setAudio(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default BuyBotConfig;
