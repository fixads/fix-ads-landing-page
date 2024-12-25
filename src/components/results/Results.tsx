import React from 'react';
import StatsCard from './StatsCard';
import ClientShowcase from './ClientShowcase';
import { TrendingUp } from 'lucide-react';

const Results = () => {
  return (
    <section id="results" className="pb-0 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            We deliver results
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              With our expert team and partnerships, including{' '}
              <a 
                href="https://www.google.com/partners/agency?id=6132910524" 
                className="text-blue-600 hover:text-blue-800 font-medium underline decoration-2 decoration-blue-600/30 hover:decoration-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads
              </a>
              , we've driven a{' '}
              <span className="font-semibold text-blue-600">30% average ROI increase</span>{' '}
              for clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatsCard value="30%" label="Average ROI Increase" />
            <StatsCard value="90%" label="Customer Satisfaction" />
            <StatsCard value="3 Months" label="See Results" />
          </div>

          <div className="mt-8 mb-4 inline-flex items-center text-blue-600 bg-blue-50 px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
            <TrendingUp className="w-5 h-5 mr-2" />
            <span className="font-medium">Growing businesses since 2020</span>
          </div>

          <ClientShowcase />
        </div>
      </div>
    </section>
  );
};

export default Results;