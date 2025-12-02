import React from 'react';
import SEO from '../components/layout/SEO';
import { Code, Zap, Target, TrendingUp, Cpu, BarChart3, Lightbulb, Rocket } from 'lucide-react';

const AppAPI = () => {
  return (
    <>
      <SEO 
        title="App API - The Fixads Story" 
        description="Building the future of AI-driven Google Ads optimization with advanced automation and intelligent campaign management."
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }} />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-12 h-12 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">App API</h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              The Fixads Story
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Building the Future of AI-Driven Google Ads Optimization
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Origin Story */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The Origin</h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Fixads started with a simple observation: companies waste enormous amounts of money on Google Ads not because their products are bad, but because manual campaign management cannot keep up with how fast the advertising ecosystem moves.
                </p>
                <p className="mb-4">
                  One day your keywords convert — the next day they don't. One headline gets traction for a week — and then performance collapses. Agencies try to fix this with endless reporting, experiments, and "best practices," but the truth is that humans alone can't optimize at the speed modern advertising demands.
                </p>
                <p className="font-semibold text-blue-600 text-lg">
                  That's where the idea behind Fixads was born.
                </p>
              </div>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 md:p-12 border border-red-100">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  As a Google Ads specialist working with multiple brands across Europe and the U.S., I saw patterns: repeated mistakes, wasted budgets, ad fatigue, slow reactions, and the painful gap between what Google Ads should deliver and what businesses actually get.
                </p>
                <blockquote className="border-l-4 border-red-400 pl-6 italic text-lg text-red-700 my-6">
                  "Why can't this be automated? Why can't a system look at the data, learn which assets perform better, and automatically rewrite and optimize everything in real time?"
                </blockquote>
                <p className="font-semibold">
                  So instead of waiting for someone else to solve it, I decided to build the solution myself.
                </p>
              </div>
            </div>
          </section>

          {/* Evolution */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Rocket className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">From Freelance Work to an AI-Powered Platform</h3>
              </div>
              <div className="text-gray-700 leading-relaxed mb-8">
                <p className="mb-6">
                  Fixads began as a one-person project, but the vision quickly became bigger than that. I realized that if I could connect directly to the Google Ads API, gather asset-level performance data, and feed it into an intelligent engine that identifies patterns, rewrites creative, and pushes improved assets back into campaigns — I could automate the "impossible."
                </p>
              </div>
              
              {/* Technology Stack */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Technology Stack</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Google Ads API v22+ for deep campaign data',
                    'Python microservices for automation',
                    'AI/LLM modules to rewrite headlines and descriptions',
                    'Data pipelines analyzing historical performance',
                    'Campaign health scoring',
                    'Optimization loops running daily',
                    'A UI dashboard for clients to see their live improvements'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <p className="text-lg font-semibold text-center text-gray-800">
                  Fixads was no longer a "service." <br />
                  <span className="text-blue-600">It was evolving into a product — a real optimization engine.</span>
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 md:p-12 border border-green-200">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The Vision: Smarter Ads, Less Work, More Profit</h3>
              </div>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-xl font-semibold text-center text-gray-800 mb-4">
                  Fixads is built around one core belief:
                </p>
                <p className="text-lg text-center text-blue-600 font-medium">
                  Every business deserves Google Ads that actually work — without wasting money, without complicated setups, and without needing an entire team to manage them.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Our System Features:</h4>
                  <div className="space-y-2">
                    {[
                      'Detect under-performing assets in real time',
                      'Rewrite headlines and descriptions using AI',
                      'Suggest new angles, hooks, and value propositions',
                      'Shift budgets between ad groups based on performance'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Optimization Goals:</h4>
                  <div className="space-y-2">
                    {[
                      'Identify wasted spend',
                      'Improve Quality Score and CTR',
                      'Reduce CPA and increase ROAS',
                      'Use AI to optimize at impossible scale and speed'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Development */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <Cpu className="w-8 h-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">We Are Building Fixads Right Now</h3>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <p className="text-lg font-semibold text-center text-blue-800">
                  This is not a future dream. <br />
                  <span className="text-blue-600">This is an active project, under development right now.</span>
                </p>
              </div>

              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">
                  Fixads is being built as a full AI-driven optimization platform with:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'A microservices architecture',
                  'Daily automated analysis pipelines',
                  'Auto-generated headlines, descriptions, and long headlines',
                  'A system that learns from your past conversions',
                  'Smart performance predictions',
                  'A dashboard for full transparency',
                  'And a hands-off mode where users let AI handle the heavy lifting'
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <p className="text-center font-medium">
                  Every week, new components go live — from backend structure to data engines to early UI prototypes. We are shaping a product that will become an essential tool for advertisers who want more than just "campaign maintenance."
                </p>
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 md:p-12 border border-purple-200">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Why Fixads Matters</h3>
              </div>
              
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="mb-4">Marketing is changing. Ad platforms are becoming more automated every year. Yet advertisers still struggle — because automation without intelligence is not enough.</p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-center text-gray-900">
                  Fixads sits at the intersection of:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'AI-powered creative generation',
                    'Smart budgeting algorithms',
                    'Deep data analysis from Google Ads API',
                    'Predictive optimization'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
                <p className="text-center font-medium">
                  We are building the tool that we wish existed — a system that uses real performance data to make ads better every single day, without extra workload, without expensive agencies, without guesswork.
                </p>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">The Future</h3>
              </div>
              
              <div className="text-gray-700 leading-relaxed mb-6">
                <p className="text-lg mb-4">
                  The long-term vision is to scale Fixads into a fully autonomous advertising engine:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Performance Max optimization',
                  'Cross-platform integration (Meta, TikTok, Microsoft Ads)',
                  'Automated testing & rotation',
                  'Advanced dashboards',
                  'Real-time alerts',
                  'Marketplace-specific optimization (Shopify, WooCommerce, Amazon)'
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AppAPI;