import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
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
              <span className="block">Terms of Service</span>
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
                Welcome to Inflency. These Terms of Service ("Terms") govern your access to and use of the Inflency website, mobile applications, and services (collectively, the "Services"). Please read these Terms carefully before using our Services.
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
              </p>

              <h2>Definitions</h2>
              <p>
                Throughout these Terms, the following definitions apply:
              </p>
              <ul>
                <li><strong>"Inflency,"</strong> "we," "our," or "us" refers to Inflency, Inc., the company that operates the Services.</li>
                <li><strong>"User,"</strong> "you," or "your" refers to any individual or entity that accesses or uses our Services.</li>
                <li><strong>"Influencer"</strong> refers to a User who creates content and has a following on social media platforms.</li>
                <li><strong>"Brand"</strong> refers to a User who seeks to collaborate with Influencers for marketing purposes.</li>
                <li><strong>"Content"</strong> refers to any text, images, videos, audio, or other material that is posted, uploaded, or otherwise made available through our Services.</li>
              </ul>

              <h2>Account Registration</h2>
              <p>
                To access certain features of our Services, you must register for an account. When you register, you agree to provide accurate, current, and complete information about yourself. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p>
                You must be at least 18 years old to create an account. By creating an account, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>
              <p>
                We reserve the right to suspend or terminate your account if we have reason to believe that you have violated these Terms or if we determine, in our sole discretion, that your use of the Services poses a risk to the Services or other Users.
              </p>

              <h2>User Conduct</h2>
              <p>
                You agree not to use the Services to:
              </p>
              <ul>
                <li>Violate any applicable law, regulation, or third-party rights</li>
                <li>Post, upload, or transmit Content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                <li>Engage in any activity that interferes with or disrupts the Services or the servers and networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to the Services, other User accounts, or computer systems or networks connected to the Services</li>
                <li>Collect or store personal data about other Users without their express consent</li>
                <li>Use the Services for any commercial purpose not expressly permitted by these Terms</li>
                <li>Engage in any fraudulent activity or deceptive practices</li>
              </ul>

              <h2>Content</h2>
              <h3>User Content</h3>
              <p>
                You retain ownership of any Content that you post, upload, or otherwise make available through our Services. By posting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such Content in connection with providing and promoting the Services.
              </p>
              <p>
                You represent and warrant that:
              </p>
              <ul>
                <li>You own or have the necessary rights to use and authorize us to use your Content as described in these Terms</li>
                <li>Your Content does not violate any third-party rights, including intellectual property rights and privacy rights</li>
                <li>Your Content complies with these Terms and all applicable laws and regulations</li>
              </ul>

              <h3>Prohibited Content</h3>
              <p>
                You may not post, upload, or otherwise make available any Content that:
              </p>
              <ul>
                <li>Is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Infringes any patent, trademark, trade secret, copyright, or other intellectual property or proprietary right of any party</li>
                <li>Contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment</li>
                <li>Constitutes unauthorized or unsolicited advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation</li>
                <li>Contains personal or identifying information about another person without that person's explicit consent</li>
                <li>Impersonates any person or entity, including any of our employees or representatives</li>
              </ul>

              <h3>Content Removal</h3>
              <p>
                We reserve the right, but not the obligation, to monitor, review, and remove any Content that we determine, in our sole discretion, violates these Terms or is otherwise objectionable. We may remove such Content without notice.
              </p>

              <h2>Influencer-Brand Relationships</h2>
              <p>
                Our Services facilitate connections between Influencers and Brands for potential collaborations. We are not a party to any agreement between Influencers and Brands and are not responsible for any actions or omissions of Users in connection with these relationships.
              </p>
              <p>
                Users are solely responsible for:
              </p>
              <ul>
                <li>Negotiating and entering into agreements with other Users</li>
                <li>Ensuring that their agreements comply with all applicable laws and regulations, including disclosure requirements for sponsored content</li>
                <li>Fulfilling their obligations under these agreements</li>
                <li>Resolving any disputes that may arise in connection with these agreements</li>
              </ul>

              <h2>Fees and Payment</h2>
              <p>
                We may charge fees for certain features or services. When you purchase a paid subscription or service, you agree to pay all fees and charges associated with your account on a timely basis and in accordance with the pricing and payment terms disclosed to you at the time of purchase.
              </p>
              <p>
                All payments are non-refundable unless otherwise specified in our refund policy or required by law. You are responsible for paying all taxes associated with your purchase.
              </p>
              <p>
                We may change our fees and payment terms at any time by posting the changes on our website or notifying you directly. Your continued use of the paid features or services after the fee change becomes effective constitutes your agreement to pay the changed amount.
              </p>

              <h2>Intellectual Property</h2>
              <h3>Our Intellectual Property</h3>
              <p>
                The Services and all content and materials included on the Services, including, but not limited to, text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, are the property of Inflency or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Services for their intended purposes, subject to these Terms. You may not:
              </p>
              <ul>
                <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content or materials from the Services</li>
                <li>Use any data mining, robots, or similar data gathering and extraction methods on the Services</li>
                <li>Use the Services or any content or materials for any commercial purpose not expressly permitted by these Terms</li>
                <li>Remove any copyright, trademark, or other proprietary notices from the Services or any content or materials</li>
              </ul>

              <h3>Trademarks</h3>
              <p>
                "Inflency" and all related logos, product and service names, designs, and slogans are trademarks of Inflency or our affiliates or licensors. You may not use such marks without our prior written permission.
              </p>

              <h2>Third-Party Links and Services</h2>
              <p>
                The Services may contain links to third-party websites or services that are not owned or controlled by Inflency. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              <p>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p>
                INFLENCY, ITS SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT WARRANT THAT:
              </p>
              <ul>
                <li>THE SERVICES WILL FUNCTION UNINTERRUPTED, SECURE, OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION</li>
                <li>ANY ERRORS OR DEFECTS WILL BE CORRECTED</li>
                <li>THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</li>
                <li>THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL INFLENCY, ITS AFFILIATES, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICES.
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INFLENCY ASSUMES NO LIABILITY OR RESPONSIBILITY FOR:
              </p>
              <ul>
                <li>ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT</li>
                <li>PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES</li>
                <li>ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN</li>
                <li>ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES</li>
                <li>ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY</li>
                <li>ANY CONTENT OR CONDUCT OF ANY THIRD PARTY ON THE SERVICES</li>
              </ul>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO INFLENCY IN THE LAST SIX (6) MONTHS, OR, IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO INFLENCY, ONE HUNDRED DOLLARS ($100).
              </p>

              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Inflency, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services, including, but not limited to, your User Content, any use of the Services' content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Services.
              </p>

              <h2>Governing Law and Jurisdiction</h2>
              <p>
                These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provision or rule.
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, in each case located in the City of San Francisco and County of San Francisco. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
              </p>

              <h2>Arbitration</h2>
              <p>
                At our sole discretion, we may require you to submit any disputes arising from these Terms or your use of the Services, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the American Arbitration Association applying California law.
              </p>

              <h2>Waiver and Severability</h2>
              <p>
                No waiver by Inflency of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Inflency to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
              <p>
                If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
              </p>

              <h2>Entire Agreement</h2>
              <p>
                These Terms, our Privacy Policy, and any other agreements expressly incorporated by reference herein constitute the sole and entire agreement between you and Inflency regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p>
                Email: legal@inflency.com<br />
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
