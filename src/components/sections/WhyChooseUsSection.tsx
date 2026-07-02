import { Shield, Target, Wallet, FileBarChart, CheckCircle, Users, TrendingUp, Headphones, BarChart2, RefreshCw } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { whyChooseUs } from '../../data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet,
  Target,
  Shield,
  FileBarChart,
  CheckCircle,
  Users,
  TrendingUp,
  Headphones,
  BarChart2,
  RefreshCw,
};

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          tagline="Why Choose Vclix"
          title="Why Businesses Trust Us for SEO Success"
          highlight="Trust Us"
          description="We deliver results through ethical practices, transparent communication, and strategies tailored to your unique business needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Shield;
            return (
              <div
                key={item.title}
                className="group text-center p-6 rounded-2xl bg-secondary-50 hover:bg-primary-600 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-soft group-hover:bg-white/10 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-secondary-900 mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary-600 group-hover:text-primary-100 transition-colors">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
