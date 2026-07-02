import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Map, Settings, FileSearch, Key, FileEdit, Gauge, Share2, Palette, Target } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/content';
import Badge from '../components/ui/Badge';

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

export default function ServicesPage() {
  return (
    <>
      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO and Digital Marketing Services',
        provider: {
          '@type': 'Organization',
          name: 'Vclix',
        },
        areaServed: 'India',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'SEO Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
      })}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <div className="max-w-4xl">
            <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
              SEO Services That Drive Business Growth
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Comprehensive SEO and digital marketing services designed to increase your online visibility, attract qualified leads, and deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            tagline="Our Services"
            title="Complete Digital Marketing Solutions"
            highlight="Digital Marketing"
            description="From technical SEO to social media management, we offer everything you need to succeed online."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Search;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="group card-hover p-6 md:p-8"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-secondary-500">
                        <ArrowRight className="w-4 h-4 text-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary-600 font-medium gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </div>
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
