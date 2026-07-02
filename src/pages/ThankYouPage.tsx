import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { PHONE_LINK, WHATSAPP_LINK } from '../lib/utils';

export default function ThankYouPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
            <CheckCircle className="w-12 h-12 text-accent-600" />
          </div>

          <h1 className="text-display-sm md:text-display-md font-bold text-secondary-900 mb-4">
            Thank You for Contacting Us!
          </h1>
          <p className="text-lg text-secondary-600 mb-8">
            We have received your message and our team will get back to you within 24 hours. We look forward to helping you achieve your digital marketing goals.
          </p>

          {/* What's Next */}
          <div className="bg-secondary-50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-secondary-900 mb-4">What Happens Next?</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">1</span>
                <span className="text-secondary-600">Our team will review your inquiry and prepare relevant information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">2</span>
                <span className="text-secondary-600">A dedicated SEO specialist will contact you to discuss your needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">3</span>
                <span className="text-secondary-600">We will provide a customized strategy tailored to your business goals.</span>
              </li>
            </ol>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={PHONE_LINK} className="btn-primary btn-lg">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-500 text-white hover:bg-green-600 btn-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Additional Links */}
          <div className="text-secondary-500">
            While you wait, explore more about our services:
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Link to="/services" className="text-primary-600 hover:underline font-medium">
              View Our Services
            </Link>
            <Link to="/portfolio" className="text-primary-600 hover:underline font-medium">
              See Our Work
            </Link>
            <Link to="/blog" className="text-primary-600 hover:underline font-medium">
              Read Our Blog
            </Link>
            <Link to="/faq" className="text-primary-600 hover:underline font-medium">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
