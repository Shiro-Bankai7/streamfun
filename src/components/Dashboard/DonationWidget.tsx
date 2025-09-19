import React, { useState } from 'react';

const DonationWidget: React.FC = () => {
  const [wallet, setWallet] = useState('');
  const [token, setToken] = useState('');
  const [minDonation, setMinDonation] = useState('0.01');
  const [urlName, setUrlName] = useState('');
  const [colorStyle, setColorStyle] = useState('Light');
  const [opacity, setOpacity] = useState(false);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      {/* Preview and URLs */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Preview */}
        <div className="flex-1 bg-transparent rounded-xl p-8 border border-white/20">
          <h2 className="font-semibold text-xl mb-4 text-white">Preview</h2>
          <div className="flex items-center justify-center min-h-[320px]">
            <div className="w-80 h-80 flex flex-col items-center justify-center border-2 border-blue-500 rounded-xl">
              <span className="text-green-200 text-2xl font-bold mb-2">Hq7b2u <span className="text-lime-300">donated <span className="font-bold">0.25 SOL</span></span></span>
              <span className="text-gray-200 italic mt-2">Here's some SOL for the grind</span>
            </div>
          </div>
        </div>
        {/* Widget URLs */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-transparent rounded-xl p-6 border border-white/20">
            <div className="font-bold text-lg mb-2 text-white">1. Donation Widget URL (for streaming)</div>
            <input
              className="w-full bg-black border border-white/20 rounded px-4 py-3 mb-2 text-white font-mono"
              value={wallet ? `https://streamdotplay.com/widget/${wallet}` : ''}
              placeholder="Developer Wallet address is required."
              readOnly
            />
          </div>
          <div className="bg-transparent rounded-xl p-6 border border-white/20">
            <div className="font-bold text-lg mb-2 text-white">2. Donate Me Page URL (for sharing)</div>
            <input
              className="w-full bg-black border border-white/20 rounded px-4 py-3 mb-2 text-white font-mono"
              value={wallet ? `https://streamdotplay.com/donate/${wallet}` : ''}
              placeholder="Developer Wallet address is required."
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Configuration Section */}
      <div className="bg-transparent rounded-2xl border border-white/20 p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Donation Widget Configuration</h1>
        <ol className="space-y-8">
          {/* 1. Configure Your Details */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">1. Configure Your Details</div>
            <button className="mb-4 px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold">Select Wallet</button>
            <div className="bg-blue-900/60 border border-blue-500 rounded-lg p-4 mb-4">
              <div className="font-bold text-white mb-1">Important Information</div>
              <p className="text-sm text-blue-100">To generate a donation widget, we ask you to connect your wallet so we can verify you're the creator of the token. We only check your public wallet address to prevent impersonation.<br/>The connection request is handled securely through Phantom's verified wallet adapter, and we'll never ask for your private keys.</p>
            </div>
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white mb-4" placeholder="Connect your wallet to set the wallet address" value={wallet} readOnly />
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white mb-4" placeholder="Connect wallet to see your tokens" value={token} readOnly />
            <input type="number" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white mb-4" placeholder="0.01" value={minDonation} onChange={e => setMinDonation(e.target.value)} />
            <input type="text" className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white mb-4" placeholder="Connect your wallet to set the donation token name" value={urlName} onChange={e => setUrlName(e.target.value)} />
            <button className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold">Save Settings</button>
          </li>
          {/* 2. Choose Color & Style */}
          <li>
            <div className="font-bold text-lg mb-2 text-white">2. Choose Color & Style</div>
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

export default DonationWidget;
