import React from 'react';
import SEO from '../components/layout/SEO';
import { MapPin, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

const Address = () => {
  return (
    <>
      <SEO 
        title="Our Location" 
        description="Visit FixAds at our Phoenix office. Get directions and contact information."
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

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-semibold">Address</h2>
                    </div>
                    <p className="text-gray-600">
                      15615 N 35th Ave<br />
                      Phoenix, AZ 85053<br />
                      United States
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-semibold">Business Hours</h2>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM (By appointment)</p>
                      <p>Saturday: By appointment only</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Phone className="w-5 h-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-semibold">Phone</h2>
                    </div>
                    <a 
                      href="tel:+13074760649" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +1 (307) 476-0649
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-semibold">Email</h2>
                    </div>
                    <a 
                      href="mailto:anton@fixads.xyz" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      anton@fixads.xyz
                    </a>
                  </div>
                </div>

                <div 
                  className="h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;