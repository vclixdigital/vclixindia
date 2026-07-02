import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, X } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_LINK } from '../../lib/utils';

export default function FloatingCTAs() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitPopupDismissed, setExitPopupDismissed] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (exitPopupDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !exitPopupDismissed) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitPopupDismissed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dismissExitPopup = () => {
    setShowExitPopup(false);
    setExitPopupDismissed(true);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full bg-secondary-800 text-white shadow-soft-lg hover:bg-secondary-700 transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-green-500 text-white shadow-soft-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse-slow"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Phone */}
        <a
          href={PHONE_LINK}
          className="p-4 rounded-full bg-primary-600 text-white shadow-soft-lg hover:bg-primary-700 hover:scale-110 transition-all duration-300"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Mobile Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-secondary-100 shadow-soft-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn bg-green-500 text-white hover:bg-green-600 mx-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={PHONE_LINK}
            className="flex-1 btn-primary mx-1"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm"
            onClick={dismissExitPopup}
          />
          <div className="relative bg-white rounded-2xl shadow-soft-lg max-w-md w-full p-6 md:p-8 animate-scale-in">
            <button
              onClick={dismissExitPopup}
              className="absolute top-4 right-4 p-1 rounded-lg text-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-display-xs font-bold mb-2">
                Wait! Don't Leave Empty-Handed
              </h3>
              <p className="text-secondary-600">
                Get a FREE comprehensive SEO audit for your website. Discover opportunities to grow your organic traffic.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-500 text-white hover:bg-green-600 w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free SEO Audit on WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="btn-secondary w-full"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
