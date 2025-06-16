import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  UserIcon, 
  BriefcaseIcon, 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  CogIcon, 
  BellIcon
} from '@heroicons/react/24/outline';

// Dashboard layout with sidebar navigation
export default function Dashboard() {
  const { currentUser, userProfile, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3); // Mock notification count
  
  // Determine if user is influencer or brand
  const userType = userProfile?.userType || 'influencer';
  const isInfluencer = userType === 'influencer';

  // Mock data for dashboard
  const mockData = {
    influencer: {
      stats: {
        campaigns: 12,
        earnings: '$4,250',
        engagement: '8.7%',
        followers: '24.5K'
      },
      opportunities: [
        { id: 1, brand: 'TechGiant', title: 'Product Launch Campaign', compensation: '$1,200', deadline: '2025-06-15' },
        { id: 2, brand: 'EcoFriendly', title: 'Sustainability Awareness', compensation: '$800', deadline: '2025-06-22' },
        { id: 3, brand: 'FashionNova', title: 'Summer Collection Promotion', compensation: '$1,500', deadline: '2025-06-10' }
      ]
    },
    brand: {
      stats: {
        campaigns: 8,
        influencers: 34,
        engagement: '12.3%',
        roi: '215%'
      },
      influencers: [
        { id: 1, name: 'Alex Morgan', niche: 'Tech & Gaming', followers: '125K', engagement: '4.8%' },
        { id: 2, name: 'Sophia Chen', niche: 'Lifestyle & Fashion', followers: '450K', engagement: '3.2%' },
        { id: 3, name: 'Marcus Johnson', niche: 'Fitness & Health', followers: '210K', engagement: '5.7%' }
      ]
    }
  };

  // Get relevant data based on user type
  const userData = isInfluencer ? mockData.influencer : mockData.brand;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-900 to-purple-800 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold">Inflency</h2>
          <p className="text-sm opacity-75 mt-1">{isInfluencer ? 'Influencer Dashboard' : 'Brand Dashboard'}</p>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 py-2">
            <p className="text-xs uppercase tracking-wider opacity-50 font-semibold">Main</p>
          </div>
          
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center px-6 py-3 text-sm ${activeTab === 'overview' ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <HomeIcon className="h-5 w-5 mr-3" />
            Overview
          </button>
          
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center px-6 py-3 text-sm ${activeTab === 'profile' ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <UserIcon className="h-5 w-5 mr-3" />
            {isInfluencer ? 'My Profile' : 'Brand Profile'}
          </button>
          
          <button 
            onClick={() => setActiveTab(isInfluencer ? 'opportunities' : 'campaigns')}
            className={`w-full flex items-center px-6 py-3 text-sm ${activeTab === (isInfluencer ? 'opportunities' : 'campaigns') ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <BriefcaseIcon className="h-5 w-5 mr-3" />
            {isInfluencer ? 'Opportunities' : 'Campaigns'}
          </button>
          
          <button 
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center px-6 py-3 text-sm ${activeTab === 'messages' ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3" />
            Messages
          </button>
          
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center px-6 py-3 text-sm ${activeTab === 'analytics' ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <ChartBarIcon className="h-5 w-5 mr-3" />
            Analytics
          </button>
          
          <div className="px-4 py-2 mt-6">
            <p className="text-xs uppercase tracking-wider opacity-50 font-semibold">Account</p>
          </div>
          
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center px-6 py-3 text-sm ${activeTab === 'settings' ? 'bg-white/10' : 'hover:bg-white/5'}`}
          >
            <CogIcon className="h-5 w-5 mr-3" />
            Settings
          </button>
          
          <button 
            onClick={logout}
            className="w-full flex items-center px-6 py-3 text-sm hover:bg-white/5 text-red-300 hover:text-red-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'profile' && (isInfluencer ? 'My Profile' : 'Brand Profile')}
              {activeTab === 'opportunities' && 'Available Opportunities'}
              {activeTab === 'campaigns' && 'Campaign Management'}
              {activeTab === 'messages' && 'Messages'}
              {activeTab === 'analytics' && 'Analytics & Insights'}
              {activeTab === 'settings' && 'Account Settings'}
            </h1>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <BellIcon className="h-6 w-6" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center transform -translate-y-1/2 translate-x-1/2">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                  {currentUser?.displayName?.charAt(0) || 'U'}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{currentUser?.displayName}</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        {isInfluencer ? 'Active Campaigns' : 'Total Campaigns'}
                      </h3>
                      <p className="text-2xl font-semibold text-gray-900">{userData.stats.campaigns}</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        {isInfluencer ? 'Total Earnings' : 'Active Influencers'}
                      </h3>
                      <p className="text-2xl font-semibold text-gray-900">
                        {isInfluencer ? userData.stats.earnings : userData.stats.influencers}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">Engagement Rate</h3>
                      <p className="text-2xl font-semibold text-gray-900">{userData.stats.engagement}</p>
                    </div>
                  </div>
                </div>
                
                {/* Card 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        {isInfluencer ? 'Total Followers' : 'ROI'}
                      </h3>
                      <p className="text-2xl font-semibold text-gray-900">
                        {isInfluencer ? userData.stats.followers : userData.stats.roi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Activity Section */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h3 className="text-lg font-medium text-gray-900">
                    {isInfluencer ? 'Recent Opportunities' : 'Top Performing Influencers'}
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {isInfluencer ? (
                    // Influencer opportunities
                    userData.opportunities.map(opportunity => (
                      <div key={opportunity.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                        <div>
                          <p className="font-medium text-gray-900">{opportunity.title}</p>
                          <p className="text-sm text-gray-500">by {opportunity.brand}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{opportunity.compensation}</p>
                          <p className="text-sm text-gray-500">Due {new Date(opportunity.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Brand influencers
                    userData.influencers.map(influencer => (
                      <div key={influencer.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                            {influencer.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <p className="font-medium text-gray-900">{influencer.name}</p>
                            <p className="text-sm text-gray-500">{influencer.niche}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{influencer.followers}</p>
                          <p className="text-sm text-gray-500">{influencer.engagement} engagement</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View all {isInfluencer ? 'opportunities' : 'influencers'} →
                  </button>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md p-6 text-white">
                  <h3 className="text-lg font-medium">Complete Your Profile</h3>
                  <p className="mt-2 text-blue-100">Enhance your visibility by completing your profile information.</p>
                  <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50">
                    Update Profile
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-md p-6 text-white">
                  <h3 className="text-lg font-medium">
                    {isInfluencer ? 'Browse Opportunities' : 'Create Campaign'}
                  </h3>
                  <p className="mt-2 text-purple-100">
                    {isInfluencer 
                      ? 'Find new collaboration opportunities with top brands.' 
                      : 'Launch a new campaign to find the perfect influencers.'}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-md text-sm font-medium hover:bg-purple-50">
                    {isInfluencer ? 'View Opportunities' : 'Create Campaign'}
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-teal-500 to-green-600 rounded-xl shadow-md p-6 text-white">
                  <h3 className="text-lg font-medium">
                    {isInfluencer ? 'Upload Portfolio' : 'Analytics Dashboard'}
                  </h3>
                  <p className="mt-2 text-teal-100">
                    {isInfluencer 
                      ? 'Showcase your best work to attract more brands.' 
                      : 'Get insights into your campaign performance.'}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-white text-teal-600 rounded-md text-sm font-medium hover:bg-teal-50">
                    {isInfluencer ? 'Manage Portfolio' : 'View Analytics'}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Other tabs would be implemented here */}
          {activeTab !== 'overview' && (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Coming Soon</h3>
              <p className="mt-2 text-gray-500">
                This feature is currently under development. Check back soon!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
