import React from 'react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50">Login</Link>
              <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Cookie Policy</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Last Updated: May 15, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-indigo">
              <h2>Introduction</h2>
              <p>
                This Cookie Policy explains how Inflency ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website or use our platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              <p>
                This Cookie Policy should be read together with our Privacy Policy and Terms of Service.
              </p>

              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p>
                Cookies set by the website owner (in this case, Inflency) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>

              <h2>Why Do We Use Cookies?</h2>
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website and platform. Third parties serve cookies through our website for advertising, analytics, and other purposes.
              </p>

              <h2>Types of Cookies We Use</h2>
              <p>
                The specific types of first and third-party cookies served through our website and the purposes they perform are described below:
              </p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our website functions.
              </p>
              <ul>
                <li><strong>Session Cookies:</strong> These cookies are temporary and expire once you close your browser.</li>
                <li><strong>Persistent Cookies:</strong> These cookies remain on your device until you delete them or they expire.</li>
                <li><strong>Authentication Cookies:</strong> These cookies help us identify you when you log in to our platform.</li>
                <li><strong>Security Cookies:</strong> These cookies help us detect and prevent security risks.</li>
              </ul>

              <h3>Performance and Functionality Cookies</h3>
              <p>
                These cookies are used to enhance the performance and functionality of our website but are non-essential to its use. However, without these cookies, certain functionality may become unavailable.
              </p>
              <ul>
                <li><strong>Preference Cookies:</strong> These cookies remember your settings and preferences to enhance your experience.</li>
                <li><strong>Language Cookies:</strong> These cookies remember your language preference.</li>
                <li><strong>Customization Cookies:</strong> These cookies allow us to personalize content for you.</li>
              </ul>

              <h3>Analytics and Customization Cookies</h3>
              <p>
                These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> We use Google Analytics to collect information about how visitors use our website. These cookies collect information in an anonymous form, including the number of visitors to the website, where visitors have come to the website from, and the pages they visited.</li>
                <li><strong>Hotjar:</strong> We use Hotjar to better understand our users' needs and to optimize this service and experience. Hotjar is a technology service that helps us better understand our users' experience (e.g., how much time they spend on which pages, which links they choose to click, what users do and don't like, etc.) and this enables us to build and maintain our service with user feedback.</li>
                <li><strong>Mixpanel:</strong> We use Mixpanel to track user interactions with our platform to improve user experience and product features.</li>
              </ul>

              <h3>Advertising Cookies</h3>
              <p>
                These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
              </p>
              <ul>
                <li><strong>Facebook Pixel:</strong> We use the Facebook Pixel to deliver targeted advertisements to users who have visited our website.</li>
                <li><strong>Google Ads:</strong> We use Google Ads cookies to track conversions and serve targeted advertisements across the Google advertising network.</li>
                <li><strong>LinkedIn Insight Tag:</strong> We use the LinkedIn Insight Tag to enable detailed campaign reporting and unlock insights about visitors who may convert into leads.</li>
              </ul>

              <h3>Social Media Cookies</h3>
              <p>
                These cookies are used to enable you to share pages and content that you find interesting on our website through third-party social networking and other websites. These cookies may also be used for advertising purposes.
              </p>
              <ul>
                <li><strong>Facebook:</strong> We use Facebook cookies to allow you to share content on Facebook and to track how users interact with our content on Facebook.</li>
                <li><strong>Twitter:</strong> We use Twitter cookies to allow you to share content on Twitter and to track how users interact with our content on Twitter.</li>
                <li><strong>LinkedIn:</strong> We use LinkedIn cookies to allow you to share content on LinkedIn and to track how users interact with our content on LinkedIn.</li>
                <li><strong>Instagram:</strong> We use Instagram cookies to allow you to share content on Instagram and to track how users interact with our content on Instagram.</li>
              </ul>

              <h2>How Can You Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie table above.
              </p>
              <p>
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
              </p>
              <p>
                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" className="text-indigo-600 hover:text-indigo-500">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" className="text-indigo-600 hover:text-indigo-500">http://www.youronlinechoices.com</a>.
              </p>

              <h3>Browser Controls</h3>
              <p>
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org/" className="text-indigo-600 hover:text-indigo-500">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org/" className="text-indigo-600 hover:text-indigo-500">www.allaboutcookies.org</a>.
              </p>
              <p>
                Find out how to manage cookies on popular browsers:
              </p>
              <ul>
                <li><a href="https://support.google.com/accounts/answer/61416" className="text-indigo-600 hover:text-indigo-500">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-indigo-600 hover:text-indigo-500">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-indigo-600 hover:text-indigo-500">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" className="text-indigo-600 hover:text-indigo-500">Microsoft Edge</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-indigo-600 hover:text-indigo-500">Microsoft Internet Explorer</a></li>
                <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" className="text-indigo-600 hover:text-indigo-500">Opera</a></li>
              </ul>
              <p>
                To find information relating to other browsers, visit the browser developer's website.
              </p>

              <h2>Do Not Track</h2>
              <p>
                Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. These features are not yet uniform, so we are currently not set up to respond to such signals.
              </p>

              <h2>Cookies That Have Been Set in the Past</h2>
              <p>
                If you have disabled one or more cookies, we may still use information collected from cookies prior to your disabled preference being set; however, we will stop using the disabled cookie to collect any further information.
              </p>

              <h2>Data Retention</h2>
              <p>
                The length of time a cookie will remain on your device depends on whether it is a "persistent" or "session" cookie. Session cookies will remain on your device until you stop browsing. Persistent cookies remain on your device until they expire or are deleted.
              </p>

              <h2>Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p>
                Email: privacy@inflency.com<br />
                Address: 123 Innovation Drive, Suite 400, San Francisco, CA 94103<br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <span className="text-2xl font-bold text-white">Inflency</span>
              <p className="text-gray-300 text-base">
                Connecting influencers and brands for powerful collaborations that drive results.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/for-influencers" className="text-base text-gray-300 hover:text-white">For Influencers</Link>
                    </li>
                    <li>
                      <Link to="/for-brands" className="text-base text-gray-300 hover:text-white">For Brands</Link>
                    </li>
                    <li>
                      <Link to="/services" className="text-base text-gray-300 hover:text-white">Agency Services</Link>
                    </li>
                    <li>
                      <Link to="/analytics" className="text-base text-gray-300 hover:text-white">Analytics</Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/help-center" className="text-base text-gray-300 hover:text-white">Help Center</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="text-base text-gray-300 hover:text-white">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/faq" className="text-base text-gray-300 hover:text-white">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/community" className="text-base text-gray-300 hover:text-white">Community</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/about" className="text-base text-gray-300 hover:text-white">About</Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-base text-gray-300 hover:text-white">Blog</Link>
                    </li>
                    <li>
                      <Link to="/podcast" className="text-base text-gray-300 hover:text-white">Podcast</Link>
                    </li>
                    <li>
                      <Link to="/careers" className="text-base text-gray-300 hover:text-white">Careers</Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/privacy" className="text-base text-gray-300 hover:text-white">Privacy</Link>
                    </li>
                    <li>
                      <Link to="/terms" className="text-base text-gray-300 hover:text-white">Terms</Link>
                    </li>
                    <li>
                      <Link to="/cookie-policy" className="text-base text-gray-300 hover:text-white">Cookie Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 Inflency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
