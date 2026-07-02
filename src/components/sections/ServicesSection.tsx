import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Map, Settings, FileSearch, Key, FileEdit, Gauge, Share2, Palette, Target } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/content';

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

export default function ServicesSection() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <SectionTitle
          tagline="Our Services"
          title="Comprehensive SEO Services to Grow Your Business"
          highlight="Grow Your Business"
          description="From keyword research to technical optimization, we offer complete SEO solutions tailored to your business needs and designed to deliver measurable results."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Search;
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group card-hover p-6 md:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                  <IconComponent className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 font-medium gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary btn-lg">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
