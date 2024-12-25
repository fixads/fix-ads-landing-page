import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-red-500 animate-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264305-7e2764da873b?auto=format&fit=crop&q=80')] opacity-10 bg-center bg-cover" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center min-h-[90vh] py-8 md:py-12">
          <div className="relative z-20 text-white space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in">
              Digital Agency for
              <span className="block text-yellow-400 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Performance Marketing
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              We implement marketing strategies with a clear purpose: to achieve your goals and drive meaningful results.
            </p>
            <div className="flex justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-medium text-blue-600 bg-white rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="relative mt-4 lg:mt-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="relative z-10 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500">
              <img
                src="/laptop-social.png"
                alt="Social Media Marketing"
                className="w-full h-auto drop-shadow-2xl animate-float"
                style={{
                  transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;