// List of allowed countries (ISO-3166-1 alpha-2 codes)
const ALLOWED_COUNTRIES = new Set([
  // North America
  'US', 'CA',
  // EU-27
  'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU',
  'IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE',
  // EFTA / UK
  'NO','IS','LI','CH','GB',
  // Middle East
  'IL', // Israel
  // Other developed economies
  'AU','NZ','JP','KR','SG','HK'
]);

// German-speaking countries for Impressum access
const GERMAN_SPEAKING_COUNTRIES = new Set([
  'DE', // Germany
  'AT', // Austria
  'CH', // Switzerland
  'LI', // Liechtenstein
]);

// Arabic-speaking countries for /sa page (plus Germany and Israel)
const ARABIC_SPEAKING_COUNTRIES = new Set([
  'SA', // Saudi Arabia
  'AE', // United Arab Emirates
  'KW', // Kuwait
  'QA', // Qatar
  'BH', // Bahrain
  'OM', // Oman
  'JO', // Jordan
  'LB', // Lebanon
  'EG', // Egypt
  'IQ', // Iraq
  'YE', // Yemen
  'SY', // Syria
  'MA', // Morocco
  'DZ', // Algeria
  'TN', // Tunisia
  'LY', // Libya
  'SD', // Sudan
  'PS', // Palestine
  'DE', // Germany
  'IL', // Israel
]);

export interface GeoLocation {
  country?: string;
  region?: string;
  city?: string;
}

// Get user's country using multiple fallback methods
export const getUserCountry = async (): Promise<string | null> => {
  try {
    // Method 1: Try ipapi.co (free tier)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.country_code || null;
    }
  } catch (error) {
    console.warn('Primary geo service failed, trying fallback...');
  }

  try {
    // Method 2: Fallback to ipwho.is (HTTPS-compatible free service)
    const response = await fetch('https://ipwho.is/?fields=country_code');

    if (response.ok) {
      const data = await response.json();
      return data.country_code || null;
    }
  } catch (error) {
    console.warn('Fallback geo service failed');
  }

  // Method 3: Use browser's timezone as a rough indicator
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const countryFromTimezone = getCountryFromTimezone(timezone);
    return countryFromTimezone;
  } catch (error) {
    console.warn('Timezone detection failed');
  }

  return null;
};

// Basic timezone to country mapping (not 100% accurate but better than nothing)
const getCountryFromTimezone = (timezone: string): string | null => {
  const timezoneMap: Record<string, string> = {
    'America/New_York': 'US',
    'America/Los_Angeles': 'US',
    'America/Chicago': 'US',
    'America/Denver': 'US',
    'America/Toronto': 'CA',
    'America/Vancouver': 'CA',
    'Europe/London': 'GB',
    'Europe/Berlin': 'DE',
    'Europe/Paris': 'FR',
    'Europe/Rome': 'IT',
    'Europe/Madrid': 'ES',
    'Europe/Amsterdam': 'NL',
    'Europe/Stockholm': 'SE',
    'Europe/Oslo': 'NO',
    'Europe/Copenhagen': 'DK',
    'Europe/Helsinki': 'FI',
    'Europe/Warsaw': 'PL',
    'Europe/Prague': 'CZ',
    'Europe/Vienna': 'AT',
    'Europe/Zurich': 'CH',
    'Asia/Jerusalem': 'IL', // Israel timezone
    'Asia/Tokyo': 'JP',
    'Asia/Seoul': 'KR',
    'Asia/Singapore': 'SG',
    'Asia/Hong_Kong': 'HK',
    'Australia/Sydney': 'AU',
    'Australia/Melbourne': 'AU',
    'Pacific/Auckland': 'NZ',
  };

  return timezoneMap[timezone] || null;
};

export const isCountryAllowed = (countryCode: string | null): boolean => {
  if (!countryCode) {
    // If we can't determine the country, allow access (fail open)
    return true;
  }

  return ALLOWED_COUNTRIES.has(countryCode.toUpperCase());
};

export const isGermanSpeakingCountry = (countryCode: string | null): boolean => {
  if (!countryCode) {
    // If we can't determine the country, allow access (fail open)
    return true;
  }

  return GERMAN_SPEAKING_COUNTRIES.has(countryCode.toUpperCase());
};

export const isArabicSpeakingCountry = (countryCode: string | null): boolean => {
  if (!countryCode) {
    // If we can't determine the country, allow access (fail open)
    return true;
  }

  return ARABIC_SPEAKING_COUNTRIES.has(countryCode.toUpperCase());
};

export const getBlockedMessage = (countryCode: string | null): string => {
  return `Sorry, this service is not available in your region${countryCode ? ` (${countryCode})` : ''}`;
};

export const getBlockedMessageArabic = (countryCode: string | null): string => {
  return `عذراً، هذه الخدمة غير متاحة في منطقتك${countryCode ? ` (${countryCode})` : ''}`;
};

export const getBlockedMessageGerman = (countryCode: string | null): string => {
  return `Entschuldigung, dieser Dienst ist in Ihrer Region nicht verfügbar${countryCode ? ` (${countryCode})` : ''}`;
};