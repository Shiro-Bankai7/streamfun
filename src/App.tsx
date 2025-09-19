import BurnGoalsWidget from './components/Dashboard/BurnGoalsWidget';
  

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Explore from './components/Explore';

import BuyBotConfig from './components/BuyBotConfig';
import { ChatWidget } from './components/Dashboard/ChatWidget';
import DonationWidget from './components/Dashboard/DonationWidget';
import SubathonTimer from './components/Dashboard/SubathonTimer';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import MarketCap from './components/Dashboard/MarketCap';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/configure/buy-bot" element={<DashboardLayout><BuyBotConfig /></DashboardLayout>} />
        <Route path="/configure/market-cap" element={<DashboardLayout><MarketCap /></DashboardLayout>} />
  <Route path="/configure/chat" element={<DashboardLayout><ChatWidget /></DashboardLayout>} />
        <Route path="/configure/donations" element={<DashboardLayout><DonationWidget /></DashboardLayout>} />
  <Route path="/configure/burn" element={<DashboardLayout><DonationWidget /></DashboardLayout>} />
        <Route path="/configure/subathon" element={<DashboardLayout><SubathonTimer  /></DashboardLayout>} />
     <Route path="/configure/burn-goals" element={<DashboardLayout><BurnGoalsWidget /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;