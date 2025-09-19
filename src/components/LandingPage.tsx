
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
  <div className="min-h-screen w-full bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f] text-white font-sans relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-end gap-8 px-10 py-6 text-base font-medium bg-transparent z-10">
        <Link to="/" className="hover:text-[#2563eb]">Home</Link>
        <Link to="/explore" className="hover:text-[#2563eb]">Explore</Link>
        <Link to="/configure/buy-bot" className="hover:text-[#2563eb]">Configure</Link>
        <a href="https://streamdotfun.gitbook.io/streamdotfun" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">Documentation</a>
        <a href="https://t.me/streamdotfun_entry" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]"> <span className="inline-block align-middle">&#9993;</span> </a>
        <a href="https://x.com/streamdotfun" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]"> <span className="inline-block align-middle">&#10005;</span> </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[60vh] pt-10 pb-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[56px] md:text-[80px] font-bold tracking-widest mb-2" style={{fontFamily: 'monospace', color: '#2563eb', letterSpacing: '0.1em'}}>STREAMDOTPLAY</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Top <span className="text-[#2563eb]">pump.fun</span> Creator Toolkit
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200">Show live market data, handle donations, and engage your audience like never before.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/configure/buy-bot" className="bg-[#2563eb] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1d4ed8] transition text-lg">Get Started</Link>
            <a href="https://streamdotfun.gitbook.io/streamdotfun" target="_blank" rel="noopener noreferrer" className="border border-[#2563eb] text-[#2563eb] px-8 py-3 rounded-lg font-semibold hover:bg-[#2563eb] hover:text-white transition text-lg">View Documentation</a>
          </div>
        </div>
      </section>

      {/* Widgets Section */}
  <section id="widgets" className="py-16 px-4 bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f]">
        <h2 className="text-3xl font-bold text-center mb-12">Available Widgets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Widget Card Example */}
          <WidgetCard
            title="Buy Bot"
            description="Real-time buy alerts with customizable animations."
            link="/configure/buy-bot"
            as={Link}
            color="#2563eb"
          />
          <WidgetCard
            title="Market Cap"
            description="Live market cap display with custom goals."
            link="/configure/market-cap"
            as={Link}
            color="#2563eb"
          />
          <WidgetCard
            title="Chat Widget"
            description="Real-time chat integration for your stream."
            link="/configure/chat"
            as={Link}
            color="#2563eb"
          />
          <WidgetCard
            title="Donations"
            description="Donation system with alerts and text-to-speech."
            link="/configure/donations"
            as={Link}
            color="#2563eb"
          />
          <WidgetCard
            title="Burn Goals"
            description="Token burn tracking with custom goals."
            link="/configure/burn"
            as={Link}
            color="#2563eb"
          />
          <WidgetCard
            title="Subathon"
            description="Subathon style timer reacting to buys and sells."
            link="/configure/subathon"
            as={Link}
            color="#2563eb"
          />
        </div>
      </section>

      {/* Why Choose Section */}
  <section className="py-16 px-4 bg-gradient-to-b from-[#0a2540] via-[#1e3a5c] to-[#23272f]">
  <h2 className="text-3xl font-bold text-center mb-12">Why Choose streamdotplay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <WhyCard
            title="Real-time Updates"
            description="All widgets update in real-time, keeping your audience engaged with live data."
          />
          <WhyCard
            title="Easy Integration"
            description="Simple URL-based widgets that work with any streaming software."
          />
          <WhyCard
            title="pump.fun Native"
            description="Built for the pump.fun ecosystem with ease of use in mind."
          />
        </div>
        <div className="text-center mt-12 text-lg text-gray-400">
          <span className="font-semibold">COMING SOON</span> A new era for creators: more control, more insight, more style.<br />
          2022 Creators Dashboard &bull; Stream performance trackers &bull; Savable widget presets &bull; Fully customisable widget looks
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#23272f] text-center">
        <div className="flex flex-col items-center gap-2">
          <img src="https://streamdotfun.com/images/logo_white.png" alt="streamdotplay small logo" className="h-8 mb-2" />
          <div className="flex gap-4 justify-center mb-2">
            <a href="https://streamdotfun.gitbook.io/streamdotfun" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">Documentation</a>
            <a href="https://t.me/streamdotfun_entry" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">Telegram</a>
            <a href="https://x.com/streamdotfun" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb]">Twitter</a>
          </div>
          <div className="text-gray-500 text-sm">© 2025 streamdotplay</div>
        </div>
      </footer>
    </div>
  );
};

// Widget Card Component
const WidgetCard = ({ title, description, link, as: Component = 'a', color = '#2563eb' }: { title: string; description: string; link: string; as?: any; color?: string }) => (
  <div className="bg-[#181c23] rounded-xl p-6 flex flex-col items-center shadow-lg border border-[#23272f]">
    <div className="h-20 w-20 bg-[#23272f] rounded-full mb-4 flex items-center justify-center">
      {/* Placeholder for widget icon */}
      <span className="text-2xl">🎛️</span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 text-center">{description}</p>
    <Component to={link} href={link} className="bg-[#2563eb] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1d4ed8] transition">Configure Widget</Component>
  </div>
);

// Why Card Component
const WhyCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-[#23272f] rounded-xl p-6 flex flex-col items-center shadow-md border border-[#181c23]">
    <div className="h-16 w-16 bg-[#181c23] rounded-full mb-4 flex items-center justify-center">
      {/* Placeholder for why icon */}
      <span className="text-2xl">✨</span>
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-400 text-center">{description}</p>
  </div>
);

export default LandingPage;
