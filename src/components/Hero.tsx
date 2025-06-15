import React, { useState, useEffect } from 'react';
import StatsCard from './results/StatsCard';
import ClientShowcase from './results/ClientShowcase';
import GooglePartnerModal from './modals/GooglePartnerModal';
import GrowthSection from './results/GrowthSection';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Extract video IDs from URLs
  const mobileVideoId = 'wCcNrVndCg8'; // From shorts URL
  const desktopVideoId = '9N6Wk3x9w_8'; // From regular URL

  const currentVideoId = isMobile ? mobileVideoId : desktopVideoId;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#366B83' }}>
      {/* Animated background splashes */}
      <div className="absolute inset-0">
        {/* Blue splashes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Red splashes - increased quantity and size */}
        <div className="absolute top-1/3 left-1/3 w-52 h-52 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-20 right-10 w-44 h-44 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-float" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-10 left-10 w-38 h-38 bg-red-500 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-46 h-46 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-55 animate-float" style={{ animationDelay: '4.5s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-34 h-34 bg-red-600 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-16 left-1/2 w-42 h-42 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-float" style={{ animationDelay: '6.5s' }} />
        
        {/* Additional accent splashes */}
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float" style={{ animationDelay: '6s' }} />
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-cyan-400 rounded-full mix-blend-multiply filter blur-lg opacity-60 animate-float" style={{ animationDelay: '7s' }} />
        <div className="absolute bottom-1/2 right-10 w-26 h-26 bg-orange-400 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-float" style={{ animationDelay: '8s' }} />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[90vh] py-8 md:py-12 space-y-12">
          <div className="relative z-20 text-white text-center max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Digital Agency for
              <span className="block text-yellow-400 mt-2">
                Performance Marketing
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto">
              We implement marketing strategies with a clear purpose: to achieve your goals and drive meaningful results.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="relative z-20 w-full max-w-4xl">
            <div className={`relative ${isMobile ? 'aspect-[9/16]' : 'aspect-video'} rounded-lg overflow-hidden shadow-2xl`}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&mute=1&loop=1&playlist=${currentVideoId}&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=${window.location.origin}`}
                title="FixAds Marketing Video"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

          {/* Results Section - Now positioned after the video */}
          <div className="relative z-20 w-full">
            <div className="text-center text-white">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
                We deliver results
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl mb-8">
                  With our expert team and partnerships, including{' '}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="text-yellow-400 hover:text-yellow-300 font-medium underline"
                  >
                    Google Ads
                  </button>
                  , we help businesses achieve remarkable growth and profitability.
                </p>
              </div>
              
              {/* Centered stats cards on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 justify-items-center">
                <StatsCard value="2×" label="More Money Back per Ad €" index={0} />
                <StatsCard value="45% Less" label="Cost for Every Sale" index={1} />
                <StatsCard value="6 Weeks" label="From Kick-Off to Profit" index={2} />
              </div>

              <GrowthSection />
              <ClientShowcase />
            </div>
          </div>
        </div>
      </div>

      <GooglePartnerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;