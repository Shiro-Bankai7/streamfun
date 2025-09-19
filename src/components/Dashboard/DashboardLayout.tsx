import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Play, DollarSign, MessageSquare, Flame, Target, ChevronLeft, ChevronsLeftRight } from 'lucide-react';

const navLinks = [

  { to: '/configure/buy-bot', label: 'Buy Bot', icon: <Play className="w-5 h-5" /> },
  { to: '/configure/market-cap', label: 'Market Cap', icon: <DollarSign className="w-5 h-5" /> },
  { to: '/configure/chat', label: 'Chat Widget', icon: <MessageSquare className="w-5 h-5" /> },
  { to: '/configure/donations', label: 'Donations', icon: <DollarSign className="w-5 h-5" /> },
  { to: '/configure/burn', label: 'Burn Goals', icon: <Flame className="w-5 h-5" /> },
  { to: '/configure/subathon', label: 'Subathon', icon: <Target className="w-5 h-5" /> },
];


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen h-screen w-screen flex bg-gradient-to-br from-[#0a2540] via-[#1e3a5c] to-[#23272f] text-white overflow-hidden" style={{background: 'radial-gradient(ellipse at 20% 40%, #a21caf33 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #a21caf22 0%, transparent 70%), linear-gradient(120deg, #0a2540 0%, #1e3a5c 60%, #23272f 100%)'}}>
      {/* Fixed Sidebar */}
      <aside className={`fixed left-0 top-0 h-full ${collapsed ? 'w-16 min-w-16' : 'w-56 min-w-48'} flex flex-col bg-transparent border-r border-blue-500 px-2 py-6 z-30 transition-all duration-200`}>
        <div className="mb-8 flex items-center gap-2 px-2 justify-between">
          {!collapsed && <img src="https://streamdotfun.com/images/logo_wide.png" alt="logo" className="h-8" />}
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded hover:bg-blue-500/20 transition-colors"
              title="Back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCollapsed(c => !c)}
              className="p-2 rounded hover:bg-blue-500/20 transition-colors"
              title="Collapse Sidebar"
            >
              <ChevronsLeftRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {!collapsed && <>
          <div className="uppercase text-xs text-gray-400 font-bold mb-2 mt-2">Configure</div>
          <nav className="flex flex-col gap-1 mb-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                  location.pathname === link.to
                    ? 'bg-transparent bg-opacity-20 border border-blue-500 text-[#fff]'
                    : 'hover:bg-[#23272f] text-white'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
          <div className="uppercase text-xs text-gray-400 font-bold mb-2 mt-4">Resources</div>
          <nav className="flex flex-col gap-1">
            <a href="https://streamdotfun.gitbook.io/streamdotfun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white">Documentation</a>
            <a href="https://t.me/streamdotfun_entry" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white">Telegram</a>
            <a href="https://x.com/streamdotfun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white">Twitter</a>
          </nav>
        </>}
      </aside>
      {/* Main Content with sidebar space */}
      <main className={`flex-1 h-full bg-transparent ${collapsed ? 'ml-16' : 'ml-56'} overflow-y-auto transition-all duration-200`}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
