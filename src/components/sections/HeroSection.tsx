import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  'White Hat SEO',
  'Transparent Reporting',
  'Affordable Packages',
  'Dedicated Support',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Grow Your Business with Vclix
            </div>

            <h1 className="text-display-lg md:text-display-xl lg:text-display-2xl font-bold mb-6 leading-tight animate-fade-in-up">
              SEO Service Provider in India That Delivers{' '}
              <span className="text-primary-300">Real Business Growth</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-6 text-2xl md:text-3xl font-heading font-semibold">
              <span className="animate-fade-in animate-delay-100">Increase Rankings.</span>
              <span className="text-accent-400 animate-fade-in animate-delay-200">Drive Organic Traffic.</span>
              <span className="text-primary-300 animate-fade-in animate-delay-300">Generate More Leads.</span>
            </div>

            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-xl leading-relaxed animate-fade-in-up animate-delay-300">
              Vclix helps startups, local businesses, and growing brands dominate Google Search with strategic SEO, Local SEO, Technical SEO, and Google Business Profile Optimization designed for sustainable growth.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up animate-delay-400">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-primary-200">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-500">
              <Link to="/contact" className="btn-white btn-lg">
                Get Free SEO Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 btn-lg">
                Request Free Website Audit
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up animate-delay-600">
              <div>
                <div className="text-3xl md:text-4xl font-bold">10+</div>
                <div className="text-primary-200 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">200+</div>
                <div className="text-primary-200 text-sm">Keywords Ranked</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">1.5+</div>
                <div className="text-primary-200 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:block relative animate-fade-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-700 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-primary-200">Watch Our Story</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-12 top-1/4 bg-white rounded-2xl shadow-soft-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-900">+180%</div>
                    <div className="text-sm text-secondary-500">Traffic Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-soft-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-900">#1</div>
                    <div className="text-sm text-secondary-500">Google Rankings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
