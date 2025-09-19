
import React, { useState } from 'react';

const SubathonTimer = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [addPerBuy, setAddPerBuy] = useState('');
  const [removePerSell, setRemovePerSell] = useState('');
  const [minTx, setMinTx] = useState('');
  const [colorStyle, setColorStyle] = useState('Light');
  const [opacity, setOpacity] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      {/* Preview and Widget URL */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Preview */}
        <div className="flex-1 bg-transparent rounded-xl p-8 border border-white/20">
          <h2 className="font-semibold text-xl mb-4 text-white">Preview</h2>
          <div className="flex items-center justify-center min-h-[320px]">
            <div className="w-80 h-80 flex flex-col items-center justify-center border-2 border-blue-500 rounded-xl">
              <span className="text-white text-xl font-bold mb-2 tracking-widest">TIME LEFT</span>
              <span className="text-green-200 text-5xl font-mono font-bold">00:00:00</span>
            </div>
          </div>
        </div>
        {/* Widget URL */}
        <div className="flex-1 bg-transparent rounded-xl p-8 border border-white/20">
          <h2 className="font-semibold text-xl mb-4 text-white">Widget URL</h2>
          <input
            className="w-full bg-black border border-white/20 rounded px-4 py-3 mb-2 text-white font-mono"
            placeholder="Enter the token address."
            value={tokenAddress}
            onChange={e => setTokenAddress(e.target.value)}
          />
        </div>
      </div>

      {/* Configuration Section */}
      <div className="bg-transparent rounded-2xl border border-white/20 p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Subathon Timer Widget Configuration</h1>
        <ol className="space-y-8">
          {/* 1. Enter Token's CA */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">1. Enter Token's CA</div>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white mb-2" placeholder="e.g., 9hAv86Yo..." value={tokenAddress} onChange={e => setTokenAddress(e.target.value)} />
            <span className="text-red-400 text-sm">Token address is required.</span>
          </li>
          {/* 2. Set Initial Timer Duration */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">2. Set Initial Timer Duration</div>
            <div className="flex gap-4 mb-1">
              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Hours</label>
                <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="e.g., 12" value={hours} onChange={e => setHours(e.target.value)} />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Minutes</label>
                <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="e.g., 30" value={minutes} onChange={e => setMinutes(e.target.value)} />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-400 mb-1">Seconds</label>
                <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="e.g., 0" value={seconds} onChange={e => setSeconds(e.target.value)} />
              </div>
            </div>
            <span className="text-red-400 text-sm">Initial duration must be greater than 0 seconds.</span>
            <p className="text-xs text-gray-400 mt-1">Set the starting time for the subathon timer. At least one field must be greater than 0.</p>
          </li>
          {/* 3. Set Time Added per Buy */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">3. Set Time Added per Buy</div>
            <label className="block text-xs text-gray-400 mb-1">Seconds added per 1 SOL buy</label>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="e.g., 60" value={addPerBuy} onChange={e => setAddPerBuy(e.target.value)} />
            <span className="text-red-400 text-sm">Seconds per SOL buy must be a non-negative number.</span>
            <p className="text-xs text-gray-400 mt-1">Specify how many seconds to add to the timer for each 1 SOL worth of tokens purchased.</p>
          </li>
          {/* 4. Set Time Removed per Sell */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">4. Set Time Removed per Sell</div>
            <label className="block text-xs text-gray-400 mb-1">Seconds removed per 1 SOL sell</label>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="0" value={removePerSell} onChange={e => setRemovePerSell(e.target.value)} />
            <p className="text-xs text-gray-400 mt-1">Specify how many seconds to remove from the timer for each 1 SOL worth of tokens sold. Leave blank or set to 0 if sells should not affect the timer.</p>
          </li>
          {/* 5. Set Minimum Transaction Value */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">5. Set Minimum Transaction Value</div>
            <label className="block text-xs text-gray-400 mb-1">Minimum SOL transaction to affect timer</label>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="0" value={minTx} onChange={e => setMinTx(e.target.value)} />
            <p className="text-xs text-gray-400 mt-1">Only buys and sells greater than or equal to this SOL value will affect the timer. Leave blank or set to 0 to include all transactions.</p>
          </li>
          {/* 6. Choose Color & Style */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">6. Choose Color & Style</div>
            <div className="flex gap-4 mb-2">
              {['Light','Dark','Bright'].map(style => (
                <button
                  key={style}
                  className={`flex-1 py-3 rounded-lg border-2 text-base font-semibold transition-colors ${colorStyle===style ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent text-white border-white/20'}`}
                  onClick={()=>setColorStyle(style)}
                >
                  {style}
                  {colorStyle===style && <span className="ml-2">✓</span>}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" checked={opacity} onChange={()=>setOpacity(!opacity)} />
              <span className="text-sm text-white">Add background opacity</span>
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SubathonTimer;