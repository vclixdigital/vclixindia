import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
} from 'lucide-react';
import {
  PHONE_LINK,
  EMAIL_LINK,
  WHATSAPP_LINK,
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
} from '../../lib/utils';
import { useState } from 'react';

const footerNavigation = {
  services: [
    { name: 'Search Engine Optimization', href: '/services/search-engine-optimization' },
    { name: 'Local SEO', href: '/services/local-seo' },
    { name: 'Google Business Profile', href: '/services/google-business-profile-optimization' },
    { name: 'Technical SEO', href: '/services/technical-seo' },
    { name: 'Website SEO Audit', href: '/services/website-seo-audit' },
    { name: 'Social Media Management', href: '/services/social-media-management' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Free SEO Audit', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-secondary-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-display-sm md:text-display-md font-bold mb-2">
                Let's Turn Clicks Into Customers
              </h2>
              <p className="text-primary-100 text-lg">
                Ready to grow your business with result-driven SEO? Get your free consultation today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-white btn-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-500 text-white hover:bg-green-600 btn-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-heading">V</span>
              </div>
              <span className="text-3xl font-heading font-bold">{BUSINESS_NAME}</span>
            </Link>
            <p className="text-secondary-300 mb-6 max-w-md">
              {BUSINESS_NAME} is a professional SEO and Digital Marketing agency helping businesses improve search rankings, increase website traffic, and generate qualified leads through proven strategies.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href={PHONE_LINK} className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 6382939779</span>
              </a>
              <a href={EMAIL_LINK} className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>vclixdigital@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-300">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>{BUSINESS_ADDRESS}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary-800 flex items-center justify-center text-secondary-400 hover:bg-primary-600 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-secondary-400 text-sm mb-4">
              Get SEO tips, industry insights, and growth strategies delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="bg-primary-600/20 border border-primary-500/30 rounded-xl p-4 text-primary-300 text-sm">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-secondary-800 border border-secondary-700 text-white placeholder:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-secondary-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-secondary-500 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
