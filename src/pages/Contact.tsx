import React from 'react';
import SEO from '../components/layout/SEO';
import ContactHero from '../components/contact/ContactHero';
import LeadForm from '../components/contact/LeadForm';
import SuccessStory from '../components/contact/SuccessStory';
import StatsGrid from '../components/contact/StatsGrid';
import { CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with FixAds for innovative digital marketing solutions and business growth strategies."
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Lead Form Section - Moved to top */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Quick Response Guaranteed</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Start Your Success Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Join hundreds of businesses that have transformed their digital presence with FixAds. 
                  Get your personalized strategy today!
                </p>
                <LeadForm />

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {['GDPR Compliant', 'Secure Data', '24/7 Support', 'No Obligations'].map((item, index) => (
                      <div key={index} className="text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mx-auto mb-1" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <ContactHero />
            </div>
          </div>

          {/* Stats Grid */}
          <StatsGrid />

          {/* Success Story */}
          <div className="max-w-2xl mx-auto">
            <SuccessStory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;