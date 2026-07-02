import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Search, MapPin, Map, Settings, FileSearch, Key, FileEdit, Gauge, Share2, Palette, Target } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import Badge from '../components/ui/Badge';
import Accordion from '../components/ui/Accordion';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  MapPin,
  Map,
  Settings,
  FileSearch,
  Key,
  FileEdit,
  Gauge,
  Share2,
  Palette,
  Target,
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-display-md font-bold mb-4">Service Not Found</h1>
        <p className="text-secondary-600 mb-6">The service you are looking for does not exist.</p>
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Search;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Vclix',
      url: 'https://vclix.com',
    },
    areaServed: 'India',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-sm font-semibold mb-6">
                {service.shortTitle}
              </div>
              <h1 className="text-display-md md:text-display-lg font-bold mb-6">
                {service.heroTitle}
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed mb-8">
                {service.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-white btn-lg">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20 btn-lg">
                  Request Free Audit
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-40 h-40 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <IconComponent className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            tagline="Benefits"
            title={`Benefits of ${service.title}`}
            alignment="left"
            className="lg:text-left"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-start gap-3 p-4 bg-secondary-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-secondary-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <SectionTitle
            tagline="What We Offer"
            title="Features of Our Service"
            description="Everything included in our comprehensive service package."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary-600 font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-secondary-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            tagline="Our Process"
            title="How We Deliver Results"
            description="A structured approach to ensure your success with our services."
          />

          <div className="max-w-4xl mx-auto">
            {service.process.map((step, index) => (
              <div
                key={step.step}
                className="flex gap-6 mb-8 last:mb-0 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="w-0.5 h-full bg-primary-200 my-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">{step.step}</h3>
                  <p className="text-secondary-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-display-xs font-bold text-secondary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-secondary-600 mb-6">
                Have more questions? Contact us for personalized answers.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="lg:col-span-2">
              <Accordion items={service.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            tagline="Related Services"
            title="Explore More Services"
            description="Discover other ways we can help grow your business."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] || Search;
              return (
                <Link
                  key={related.id}
                  to={`/services/${related.id}`}
                  className="group card-hover p-6"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                    <RelatedIcon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-secondary-600 text-sm">{related.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
