import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { PHONE_LINK, EMAIL_LINK, WHATSAPP_LINK } from '../../lib/utils';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: 'primary' | 'light';
}

export default function CTASection({
  title = "Ready to Grow Your Business Online?",
  description = "Get a free SEO consultation and discover how we can help you achieve top rankings and drive more qualified leads.",
  primaryCTA = { text: "Get Free Consultation", href: "/contact" },
  secondaryCTA = { text: "Request Free Audit", href: "/contact" },
  variant = "primary",
}: CTASectionProps) {
  const isPrimary = variant === "primary";

  return (
    <section className={isPrimary ? "section-padding bg-gradient-to-br from-primary-600 to-primary-700" : "section-padding bg-white"}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-display-md md:text-display-lg font-bold mb-4 ${isPrimary ? "text-white" : "text-secondary-900"}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${isPrimary ? "text-primary-100" : "text-secondary-600"}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to={primaryCTA.href}
              className={isPrimary ? "btn-white btn-lg" : "btn-primary btn-lg"}
            >
              {primaryCTA.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to={secondaryCTA.href}
              className={isPrimary ? "btn bg-white/10 text-white border border-white/30 hover:bg-white/20 btn-lg" : "btn-secondary btn-lg"}
            >
              {secondaryCTA.text}
            </Link>
          </div>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 ${isPrimary ? "text-white" : "text-secondary-700"}`}>
            <a href={PHONE_LINK} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+91 6382939779</span>
            </a>
            <a href={EMAIL_LINK} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-5 h-5" />
              <span className="font-medium">vclixdigital@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
