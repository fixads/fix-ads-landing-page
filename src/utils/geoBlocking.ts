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
    // Method 2: Fallback to ip-api.com
    const response = await fetch('http://ip-api.com/json/?fields=countryCode');
    
    if (response.ok) {
      const data = await response.json();
      return data.countryCode || null;
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

export const getBlockedMessage = (countryCode: string | null): string => {
  return `Sorry, this service is not available in your region${countryCode ? ` (${countryCode})` : ''} 🛑`;
};