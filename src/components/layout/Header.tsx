import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { cn, PHONE_LINK, EMAIL_LINK } from '../../lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Search Engine Optimization', href: '/services/search-engine-optimization' },
      { name: 'Local SEO', href: '/services/local-seo' },
      { name: 'Google Business Profile', href: '/services/google-business-profile-optimization' },
      { name: 'Technical SEO', href: '/services/technical-seo' },
      { name: 'Website SEO Audit', href: '/services/website-seo-audit' },
      { name: 'Keyword Research', href: '/services/keyword-research' },
      { name: 'Content Optimization', href: '/services/content-optimization' },
      { name: 'Website Speed Optimization', href: '/services/website-speed-optimization' },
      { name: 'Social Media Management', href: '/services/social-media-management' },
      { name: 'Graphic Design', href: '/services/graphic-design' },
      { name: 'Digital Marketing Strategy', href: '/services/digital-marketing-strategy' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary-900 text-white py-2">
        <div className="container-custom flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-primary-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 6382939779</span>
            </a>
            <a href={EMAIL_LINK} className="flex items-center gap-2 hover:text-primary-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>vclixdigital@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-secondary-300">Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-soft'
            : 'bg-white border-b border-secondary-100'
        )}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-soft-md transition-shadow">
                <span className="text-white font-bold text-xl font-heading">V</span>
              </div>
              <span className="text-2xl font-heading font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                Vclix
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-base font-medium transition-all duration-200',
                      location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          activeDropdown === item.name && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="bg-white rounded-xl shadow-soft-lg border border-secondary-100 py-2 min-w-[280px] max-h-[400px] overflow-y-auto custom-scrollbar">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={cn(
                              'block px-4 py-2.5 mx-2 rounded-lg text-sm transition-colors',
                              location.pathname === child.href
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-[calc(100vh-80px)]' : 'max-h-0'
          )}
        >
          <div className="container-custom py-4 space-y-2 border-t border-secondary-100">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:bg-secondary-50'
                  )}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={cn(
                          'block px-4 py-2 rounded-lg text-sm transition-colors',
                          location.pathname === child.href
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-secondary-500 hover:text-primary-600 hover:bg-primary-50'
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-secondary-100">
              <Link to="/contact" className="btn-primary w-full">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
