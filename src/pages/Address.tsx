import React from 'react';
import SEO from '../components/layout/SEO';
import { MapPin, Phone, Mail, Clock, AlertCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Address = () => {
  return (
    <>
      <SEO 
        title="Our Location" 
        description="Visit FixAds at our office in Berlin. Get directions and contact information."
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Visit Our Office</h1>
              <p className="text-blue-100">Schedule an appointment to discuss how we can help your business grow.</p>
            </div>

            <div className="p-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <div className="flex items-center text-blue-700">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p className="font-medium">All visits are by appointment only. Please call or email us to schedule a meeting.</p>
                </div>
              </div>

              <div className="max-w-2xl mx-auto">
                {/* Berlin Office */}
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-blue-600 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-900">Berlin Office</h2>
                  </div>

                  <div 
                    className="h-48 rounded-lg overflow-hidden bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80')"
                    }}
                  />

                  <div>
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold">Address</h3>
                    </div>
                    <p className="text-gray-600">
                      Schönhauser Allee 108<br />
                      10439 Berlin, Germany
                    </p>
                    <Link 
                      to="/impressum"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
                    >
                      Impressum
                    </Link>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold">Business Hours</h3>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <p>Monday - Friday: 9:00 - 18:00 (By appointment)</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Phone className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold">Phone</h3>
                    </div>
                    <a 
                      href="tel:+4917478107350" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +49 174 7810735
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Email */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center mb-3">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <a 
                  href="mailto:info@fixads.xyz" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@fixads.xyz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;