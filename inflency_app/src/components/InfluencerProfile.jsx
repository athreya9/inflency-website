import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function InfluencerProfile() {
  const { currentUser, userType } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isPaidMember, setIsPaidMember] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: 'Alex Johnson',
    username: 'alexcreates',
    bio: 'Lifestyle and travel content creator with a passion for sustainable living. I help brands connect with eco-conscious millennials and Gen-Z audiences.',
    location: 'Portland, OR',
    categories: ['Lifestyle', 'Travel', 'Sustainability'],
    followers: {
      instagram: 45600,
      tiktok: 78900,
      youtube: 32400
    },
    engagement: {
      rate: 3.8,
      avgLikes: 2340,
      avgComments: 187
    },
    portfolio: [
      { id: 1, title: 'Eco-friendly Product Review', image: 'portfolio1.jpg', likes: 3200, comments: 245 },
      { id: 2, title: 'Travel Vlog: Costa Rica', image: 'portfolio2.jpg', likes: 4100, comments: 312 },
      { id: 3, title: 'Sustainable Fashion Haul', image: 'portfolio3.jpg', likes: 2800, comments: 196 }
    ],
    previousCollaborations: [
      { id: 1, brand: 'EcoWear', campaign: 'Summer Collection Launch', year: 2024 },
      { id: 2, brand: 'TravelRight', campaign: 'Sustainable Tourism Initiative', year: 2023 },
      { id: 3, brand: 'GreenLife', campaign: 'Home Products Showcase', year: 2023 }
    ],
    rateCard: {
      instagram: {
        post: '$800',
        story: '$400',
        reel: '$1,200'
      },
      tiktok: {
        video: '$1,000'
      },
      youtube: {
        video: '$2,500'
      }
    },
    contactInfo: {
      email: 'alex@example.com',
      phone: '+1 (555) 123-4567',
      socialLinks: {
        instagram: 'https://instagram.com/alexcreates',
        tiktok: 'https://tiktok.com/@alexcreates',
        youtube: 'https://youtube.com/alexcreates'
      }
    }
  });

  // Simulate checking if user is a paid member
  useEffect(() => {
    // This would be replaced with an actual API call to check subscription status
    const checkPaidStatus = async () => {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsPaidMember(true); // For demo purposes, set to true
    };
    
    checkPaidStatus();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    // Would normally save to database
    setIsEditing(false);
    // Show success message
    alert('Profile updated successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  // Function to determine if content should be hidden based on paid status
  const shouldHideContent = (viewerType, contentOwnerType) => {
    // If viewing own profile, show everything
    if (currentUser && currentUser.uid === profileData.id) return false;
    
    // If viewer is paid member, show everything
    if (isPaidMember) return false;
    
    // Otherwise, hide sensitive information
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inflency</Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Home</Link>
              <Link to="/for-influencers" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">For Influencers</Link>
              <Link to="/for-brands" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">For Brands</Link>
              <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Services</Link>
              <Link to="/podcast" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Podcast</Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">About</Link>
              <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-gray-900">Dashboard</Link>
              <div className="ml-3 relative">
                <div>
                  <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                      A
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Influencer Profile</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and platform statistics.</p>
            </div>
            {currentUser && currentUser.uid === profileData.id && (
              <button
                onClick={handleEditToggle}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            )}
          </div>
          
          <div className="border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 sm:h-48"></div>
            <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row">
              <div className="-mt-16 sm:-mt-24">
                <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full ring-4 ring-white bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white text-4xl font-bold">
                  {profileData.displayName.charAt(0)}
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{profileData.displayName}</h2>
                    <p className="text-sm text-gray-500">@{profileData.username}</p>
                  </div>
                  {isPaidMember && (
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      <svg className="-ml-1 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Paid Member
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-700">{profileData.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profileData.categories.map((category, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Stats and Info */}
          <div className="lg:col-span-1">
            {/* Social Stats */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Platform Statistics</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Follower counts and engagement metrics.</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Followers</h4>
                    <div className="mt-2 grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Instagram</p>
                        <p className="text-lg font-semibold text-gray-900">{shouldHideContent() ? '***' : profileData.followers.instagram.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">TikTok</p>
                        <p className="text-lg font-semibold text-gray-900">{shouldHideContent() ? '***' : profileData.followers.tiktok.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">YouTube</p>
                        <p className="text-lg font-semibold text-gray-900">{shouldHideContent() ? '***' : profileData.followers.youtube.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Engagement</h4>
                    <div className="mt-2 grid grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Rate</p>
                        <p className="text-lg font-semibold text-gray-900">{shouldHideContent() ? '***' : `${profileData.engagement.rate}%`}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Avg. Likes</p>
                        <p className="text-lg font-semibold text-gray-900">{shouldHideContent() ? '***' : profileData.engagement.avgLikes.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500">Avg. Comments</p>
                        <p className="text-lg font-semibold text-gray-900">{shouldHideContent() ? '***' : profileData.engagement.avgComments.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rate Card */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Rate Card</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Pricing for different content types.</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                {shouldHideContent() ? (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Rate information hidden</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Upgrade to a paid membership to view pricing information.
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Upgrade Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Instagram</h4>
                      <div className="mt-2 grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Post</p>
                          <p className="text-lg font-semibold text-gray-900">{profileData.rateCard.instagram.post}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Story</p>
                          <p className="text-lg font-semibold text-gray-900">{profileData.rateCard.instagram.story}</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Reel</p>
                          <p className="text-lg font-semibold text-gray-900">{profileData.rateCard.instagram.reel}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">TikTok</h4>
                      <div className="mt-2 grid grid-cols-1 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Video</p>
                          <p className="text-lg font-semibold text-gray-900">{profileData.rateCard.tiktok.video}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">YouTube</h4>
                      <div className="mt-2 grid grid-cols-1 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-500">Video</p>
                          <p className="text-lg font-semibold text-gray-900">{profileData.rateCard.youtube.video}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Get in touch for collaborations.</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                {shouldHideContent() ? (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Contact information hidden</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Upgrade to a paid membership to view contact details.
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Upgrade Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-900">{profileData.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-900">{profileData.contactInfo.phone}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">Social Links</h4>
                      <div className="flex space-x-4">
                        <a href={profileData.contactInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Instagram</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href={profileData.contactInfo.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">TikTok</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                          </svg>
                        </a>
                        <a href={profileData.contactInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">YouTube</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Portfolio and Collaborations */}
          <div className="lg:col-span-2">
            {/* Portfolio */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Portfolio</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">Showcase of recent content.</p>
                </div>
                {isEditing && (
                  <button
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                  >
                    Add Item
                  </button>
                )}
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {profileData.portfolio.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          {item.likes.toLocaleString()}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                          {item.comments.toLocaleString()}
                        </div>
                        {isEditing && (
                          <div className="mt-4 flex justify-end space-x-2">
                            <button className="text-sm text-blue-600 hover:text-blue-800">Edit</button>
                            <button className="text-sm text-red-600 hover:text-red-800">Remove</button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Previous Collaborations */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Previous Collaborations</h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">History of brand partnerships.</p>
                </div>
                {isEditing && (
                  <button
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                  >
                    Add Collaboration
                  </button>
                )}
              </div>
              <div className="border-t border-gray-200">
                {shouldHideContent() ? (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Collaboration history hidden</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Upgrade to a paid membership to view previous collaborations.
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Upgrade Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-hidden overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Brand
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Campaign
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Year
                          </th>
                          {isEditing && (
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {profileData.previousCollaborations.map((collab) => (
                          <tr key={collab.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {collab.brand}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {collab.campaign}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {collab.year}
                            </td>
                            {isEditing && (
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                                <button className="text-red-600 hover:text-red-900">Delete</button>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Save Button when Editing */}
            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSaveProfile}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
