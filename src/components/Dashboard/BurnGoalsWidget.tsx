import React, { useState } from 'react';

const BurnGoalsWidget: React.FC = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [progressStart, setProgressStart] = useState('');
  const [ignoreBurned, setIgnoreBurned] = useState('');
  const [goals, setGoals] = useState([
    { goal: '', text: '' },
    { goal: '', text: '' },
    { goal: '', text: '' },
    { goal: '', text: '' },
    { goal: '', text: '' },
  ]);
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
              <span className="text-white text-2xl font-bold mb-2">Tokens Burnt: 500.0K</span>
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
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Token Burn Widget Configuration</h1>
        <ol className="space-y-8">
          {/* 1. Enter Token's CA */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">1. Enter Token's CA</div>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white mb-2" placeholder="e.g., 9hAv86Yo..." value={tokenAddress} onChange={e => setTokenAddress(e.target.value)} />
            <span className="text-red-400 text-sm">Token address is required.</span>
          </li>
          {/* 2. Progress Bar Start Value */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">2. Progress Bar Start Value <span className="text-gray-400 text-base">(Optional)</span></div>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="e.g., 500000" value={progressStart} onChange={e => setProgressStart(e.target.value)} />
          </li>
          {/* 3. Amount of Previously Burned Tokens to Ignore */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">3. Amount of Previously Burned Tokens to Ignore <span className="text-gray-400 text-base">(Optional)</span></div>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white" placeholder="e.g., 1000000" value={ignoreBurned} onChange={e => setIgnoreBurned(e.target.value)} />
          </li>
          {/* 4. Set Token Burn Goals */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">4. Set Token Burn Goals</div>
            <p className="text-sm text-gray-400 mb-2">Set up to five token burn goals and optional custom text for each. Higher tier goals must be greater than lower ones.</p>
            {goals.map((g, i) => (
              <div className="flex gap-4 mb-2" key={i}>
                <input
                  type="text"
                  className="flex-1 bg-black border border-white/20 rounded-lg px-4 py-3 text-white"
                  placeholder={`Burn goal ${i + 1}`}
                  value={g.goal}
                  onChange={e => {
                    const newGoals = [...goals];
                    newGoals[i].goal = e.target.value;
                    setGoals(newGoals);
                  }}
                />
                <input
                  type="text"
                  className="flex-1 bg-black border border-white/20 rounded-lg px-4 py-3 text-white"
                  placeholder={`Custom text ${i + 1}`}
                  value={g.text}
                  onChange={e => {
                    const newGoals = [...goals];
                    newGoals[i].text = e.target.value;
                    setGoals(newGoals);
                  }}
                />
              </div>
            ))}
          </li>
          {/* 5. Choose Color & Style */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">5. Choose Color & Style</div>
            <div className="flex gap-4 mb-2">
              {['Light','Dark','Bright','Basedd'].map(style => (
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

export default BurnGoalsWidget;
