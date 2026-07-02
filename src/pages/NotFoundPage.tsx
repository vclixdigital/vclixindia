import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-secondary-50">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-[200px] md:text-[280px] font-bold text-secondary-100 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center animate-float">
                <Search className="w-12 h-12 text-primary-600" />
              </div>
            </div>
          </div>

          <h1 className="text-display-sm md:text-display-md font-bold text-secondary-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-secondary-600 mb-8">
            Oops! The page you are looking for does not exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="btn-primary btn-lg">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link to="/contact" className="btn-secondary btn-lg">
              <Phone className="w-5 h-5" />
              Contact Support
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-6 shadow-soft">
            <h3 className="font-semibold text-secondary-900 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link to="/services" className="text-primary-600 hover:underline">Services</Link>
              <Link to="/portfolio" className="text-primary-600 hover:underline">Portfolio</Link>
              <Link to="/blog" className="text-primary-600 hover:underline">Blog</Link>
              <Link to="/faq" className="text-primary-600 hover:underline">FAQ</Link>
              <Link to="/contact" className="text-primary-600 hover:underline">Contact</Link>
              <Link to="/about" className="text-primary-600 hover:underline">About Us</Link>
              <Link to="/services/search-engine-optimization" className="text-primary-600 hover:underline">SEO Services</Link>
              <Link to="/services/local-seo" className="text-primary-600 hover:underline">Local SEO</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
