import React, { useState, useEffect } from 'react';
import { Shield, Globe, Mail } from 'lucide-react';
import { getUserCountry, isArabicSpeakingCountry, getBlockedMessageArabic } from '../utils/geoBlocking';

interface ArabicGeoBlockerProps {
  children: React.ReactNode;
}

const ArabicGeoBlocker: React.FC<ArabicGeoBlockerProps> = ({ children }) => {
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

        const allowed = isArabicSpeakingCountry(country);
        setIsBlocked(!allowed);

        if (!allowed && country) {
          console.log(`Access to Arabic content blocked for country: ${country}`);
        }
      } catch (err) {
        console.error('Geo-blocking check failed:', err);
        setError('Unable to verify location');
        setIsBlocked(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkGeoLocation();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-center text-white" dir="rtl">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">جاري التحقق من الوصول...</p>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center p-4" dir="rtl">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">الوصول مقيد</h1>
            <p className="text-gray-600">
              {getBlockedMessageArabic(countryCode)}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Globe className="w-5 h-5 text-gray-500 ml-2" />
              <span className="text-sm text-gray-600">
                الموقع المكتشف: {countryCode || 'غير معروف'}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              هذه الصفحة متاحة فقط للدول الناطقة باللغة العربية وألمانيا وإسرائيل
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-4">
              للاستفسارات يرجى التواصل معنا:
            </p>
            <a
              href="mailto:sari@fixads.xyz"
              className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4 ml-2" />
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.warn('Geo-blocking error:', error);
  }

  return <>{children}</>;
};

export default ArabicGeoBlocker;
