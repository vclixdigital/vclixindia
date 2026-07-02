import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Users, Target, CheckCircle } from 'lucide-react';

const stats = [
  { value: '1.5+', label: 'Years Experience', icon: Briefcase },
  { value: '10+', label: 'Happy Clients', icon: Users },
  { value: '200+', label: 'Keywords Ranked', icon: Target },
  { value: '90%', label: 'Client Retention', icon: CheckCircle },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-soft-lg w-full aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Your Growth Partner</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 rounded-2xl p-6 shadow-soft-lg text-white max-w-xs hidden md:block">
              <div className="text-3xl font-bold mb-1">1.5+ Years</div>
              <div className="text-primary-100">Helping businesses grow online</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              About Vclix
            </div>

            <h2 className="text-display-md md:text-display-lg font-bold mb-6 text-secondary-900">
              Your Trusted Partner for{' '}
              <span className="gradient-text">Digital Growth</span>
            </h2>

            <div className="space-y-4 text-secondary-600 leading-relaxed mb-8">
              <p>
                At Vclix, we believe every business deserves to be found online. We are a results-driven SEO and Digital Marketing agency committed to helping businesses improve their visibility, attract qualified customers, and achieve measurable online growth.
              </p>
              <p>
                Our expertise combines technical SEO, strategic content optimization, Local SEO, Google Business Profile Optimization, and creative digital marketing. We implement ethical White Hat SEO strategies aligned with Google's latest algorithm updates.
              </p>
              <p>
                Every business has unique goals, which is why we create customized SEO strategies based on detailed research, competitor analysis, user intent, and industry trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <stat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                    <div className="text-sm text-secondary-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
