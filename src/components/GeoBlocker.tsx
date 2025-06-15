import React, { useState, useEffect } from 'react';
import { Shield, Globe, Mail } from 'lucide-react';
import { getUserCountry, isCountryAllowed, getBlockedMessage } from '../utils/geoBlocking';

interface GeoBlockerProps {
  children: React.ReactNode;
}

const GeoBlocker: React.FC<GeoBlockerProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkGeoLocation = async () => {
      try {
        setIsLoading(true);
        const country = await getUserCountry();
        setCountryCode(country);
        
        const allowed = isCountryAllowed(country);
        setIsBlocked(!allowed);
        
        if (!allowed && country) {
          console.log(`Access blocked for country: ${country}`);
        }
      } catch (err) {
        console.error('Geo-blocking check failed:', err);
        setError('Unable to verify location');
        // Fail open - allow access if geo check fails
        setIsBlocked(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkGeoLocation();
  }, []);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Verifying access...</p>
        </div>
      </div>
    );
  }

  // Show blocked message
  if (isBlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Restricted</h1>
            <p className="text-gray-600">
              {getBlockedMessage(countryCode)}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Globe className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">
                Detected Location: {countryCode || 'Unknown'}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              This service is currently available only in select regions due to regulatory requirements.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-4">
              If you believe this is an error, please contact us:
            </p>
            <a 
              href="mailto:info@fixads.xyz"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Show error state but allow access
  if (error) {
    console.warn('Geo-blocking error:', error);
  }

  // Allow access
  return <>{children}</>;
};

export default GeoBlocker;