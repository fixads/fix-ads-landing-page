import React from 'react';
import SEO from '../components/layout/SEO';
import { Shield, AlertCircle } from 'lucide-react';

const MetaAdsAPI = () => {
  return (
    <>
      <SEO
        title="Meta Ads API Privacy Policy - FixAds"
        description="Privacy policy for Meta Ads API usage, GDPR and CCPA compliance information."
      />

      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full mb-6">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                PRIVACY POLICY
              </h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Last Updated: [Date]
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6 mb-8 md:mb-12 rounded-r-lg">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="ml-3">
                <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2">DISCLAIMER</h3>
                <p className="text-sm sm:text-base text-yellow-700 leading-relaxed">
                  I am an AI, not a lawyer. The following is a comprehensive template based on current General Data Protection Regulation (GDPR) and USA (CCPA/CPRA) standards. Because you are using the Meta Ads API to collect and process user data for marketing campaigns, you face strict legal liabilities. You must have this document reviewed by a qualified attorney to ensure it matches your specific technical implementation.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            <section className="mb-8 md:mb-12">
              <p className="text-gray-600 mb-4">
                <strong>Effective Date:</strong> [Date]
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to <strong>Meet Pads API</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Insert Website URL] and use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to collecting and utilizing data to the fullest extent permitted by applicable laws, including the <strong>General Data Protection Regulation (GDPR)</strong> and United States privacy laws (including the <strong>CCPA</strong> and <strong>CPRA</strong>).
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To provide our services and optimize our marketing campaigns via the Meta Ads API, we collect "Personal Data" (GDPR) and "Personal Information" (USA) in the following categories:
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-6">A. Information You Provide Directly</h3>
              <ul className="space-y-2 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Identity Data:</strong> First name, last name, username, or similar identifiers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Contact Data:</strong> Email address, telephone number, billing address, and shipping address.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Profile Data:</strong> Your interests, preferences, feedback, and survey responses.</span>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-6">B. Information We Collect Automatically</h3>
              <ul className="space-y-2 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, time zone setting, browser plug-in types, operating system, and platform.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Usage Data:</strong> Information about how you use our website, products, and services (e.g., pages visited, time spent, clicks).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Device Data:</strong> Unique device identifiers (e.g., MAID, IDFA) and mobile network information.</span>
                </li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 mt-6">C. Information from Third Parties (Meta/Facebook)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may receive data about you from third parties, specifically <strong>Meta Platforms, Inc.</strong> (Facebook/Instagram), through the use of the <strong>Meta Ads API</strong>, <strong>Meta Pixel</strong>, and <strong>Conversions API</strong>. This includes:
              </p>
              <ul className="space-y-2 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Ad interaction data (clicks, impressions).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Demographic data (age, gender, location).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span>Cross-platform behavioral data.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the data we collect for the following purposes, based on the legal grounds of <strong>Consent</strong>, <strong>Contractual Necessity</strong>, and <strong>Legitimate Business Interests</strong>:
              </p>
              <ol className="space-y-3 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold flex-shrink-0">1.</span>
                  <span><strong>Service Delivery:</strong> To provide and maintain our services, manage your account, and process transactions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold flex-shrink-0">2.</span>
                  <div>
                    <strong>Marketing & Advertising (Meta Ads API):</strong>
                    <ul className="space-y-2 mt-2 ml-4">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>To run advanced advertising campaigns using the <strong>Meta Ads API</strong>.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>To create <strong>Custom Audiences</strong> and <strong>Lookalike Audiences</strong> for retargeting.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>To send hashed customer lists (e.g., email addresses) to Meta for matching purposes to serve you relevant ads.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>To track conversion events (e.g., "Add to Cart," "Purchase") using the Meta Conversions API (Server-Side API).</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold flex-shrink-0">3.</span>
                  <span><strong>Future Data Usage:</strong> To build a database of user behavior and preferences to train future algorithms, optimize ad spend, and develop new products.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold flex-shrink-0">4.</span>
                  <span><strong>Legal Compliance:</strong> To comply with applicable laws, including GDPR and CCPA/CPRA obligations.</span>
                </li>
              </ol>
            </section>

            <section className="mb-8 md:mb-12 bg-blue-50 p-6 md:p-8 rounded-xl border-l-4 border-blue-600">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">4. Meta Ads API & Data Sharing</h2>
              <p className="text-gray-700 font-semibold mb-4">
                <strong>This section is critical for our operations.</strong> We expressly disclose that we share your Personal Data with Meta Platforms, Inc. for marketing purposes.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Meta Pixel & Conversions API:</strong> We use these tools to track your actions on our website and send this data directly to Meta's servers. This allows us to measure the effectiveness of our advertising and show you ads that are relevant to your interests.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Advanced Matching:</strong> We may share hashed personal information (such as your email address or phone number) with Meta to match you with your profile on Facebook or Instagram. This process is secure and irreversible.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Opt-Out of Meta Tracking:</strong> You can control your advertising preferences directly through your Facebook settings <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">here</a>.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">5. Legal Basis for Processing (GDPR - Europe)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA) or UK, we process your data under the following legal bases:
              </p>
              <ul className="space-y-3 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Consent:</strong> We ask for your explicit consent (via our Cookie Banner) before placing tracking pixels or using the Meta Ads API for marketing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Legitimate Interest:</strong> We process data for fraud prevention and to improve our API security.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Contract:</strong> Processing is necessary to fulfill our service agreement with you.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">6. Your Privacy Rights (USA - CCPA/CPRA)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are a resident of California or other US states with privacy laws, you have specific rights regarding your data:
              </p>
              <ul className="space-y-3 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Right to Know:</strong> You may request details about the categories of personal information we collect, the sources, and the specific pieces of data we hold.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Right to Delete:</strong> You may request that we delete your personal information, subject to certain legal exceptions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <div>
                    <strong>Right to Opt-Out of Sale/Sharing:</strong> We "share" data with Meta for cross-context behavioral advertising. You have the right to opt-out of this sharing.
                    <p className="mt-2 italic">To exercise this right, click the "Do Not Sell or Share My Personal Info" link on our footer.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">7. International Data Transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We are a global service. Your information may be transferred to, stored, and processed in the United States or other countries where our servers or Meta's servers are located.
              </p>
              <ul className="space-y-3 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>GDPR Compliance:</strong> For transfers from the EU to the US, we rely on the <strong>Data Privacy Framework (DPF)</strong> or <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission to ensure your data remains protected.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">8. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
              </p>
              <ul className="space-y-3 text-gray-600 ml-4 sm:ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Marketing Data:</strong> Retained until you withdraw consent or opt-out.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Transaction Data:</strong> Retained for [Insert Number, e.g., 7] years for tax and accounting purposes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span><strong>Technical Data:</strong> Retained for [Insert Number, e.g., 24] months for security logs.</span>
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">9. Security of Your Information</h2>
              <p className="text-gray-600 leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">10. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions or comments about this policy, or if you wish to exercise your rights (GDPR or CCPA), you may contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Company Name:</strong> Meet Pads API</li>
                  <li><strong>Email:</strong> [Insert Email Address]</li>
                  <li><strong>Address:</strong> [Insert Physical Address]</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 md:mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              This template should be reviewed by a qualified attorney to ensure compliance with your specific technical implementation and jurisdictional requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaAdsAPI;
