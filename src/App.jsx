import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PodcastPage from './components/PodcastPage';
import ForInfluencers from './components/ForInfluencers';
import ForBrands from './components/ForBrands';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import HelpCenter from './components/HelpCenter';
import Contact from './components/Contact';
import Analytics from './components/Analytics';
import Community from './components/Community';
import Careers from './components/Careers';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import CookiePolicy from './components/CookiePolicy';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/for-influencers" element={<ForInfluencers />} />
          <Route path="/for-brands" element={<ForBrands />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/community" element={<Community />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
