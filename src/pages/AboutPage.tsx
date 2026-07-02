import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Users, Lightbulb, Heart, TrendingUp, Briefcase } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/sections/CTASection';

const values = [
  { icon: Shield, title: 'Integrity', description: 'We uphold the highest ethical standards in all our practices, using only White Hat SEO techniques.' },
  { icon: Target, title: 'Results-Focused', description: 'Every strategy we implement is designed to deliver measurable, sustainable results.' },
  { icon: Users, title: 'Client-First', description: 'Your success is our success. We prioritize your goals in every decision we make.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We stay updated with the latest SEO trends and adapt our strategies accordingly.' },
  { icon: Heart, title: 'Passion', description: 'We are passionate about helping businesses succeed in the digital landscape.' },
  { icon: TrendingUp, title: 'Growth Mindset', description: 'We believe in continuous improvement and learning for ourselves and our clients.' },
];

const milestones = [
  { year: '2024', title: 'Founded', description: 'Vclix was established with a mission to help businesses grow online.' },
  { year: '2024', title: 'First 25 Clients', description: 'Reached our first milestone of satisfied clients across industries.' },
  { year: '2025', title: 'Growing', description: 'Expanding our services and helping more businesses succeed online.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <div className="max-w-4xl">
            <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
              About Vclix: Your Partner in Digital Growth
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Learn about our mission and the team dedicated to helping your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-soft-lg w-full aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white">
                <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Your Growth Partner</p>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Our Mission
              </div>
              <h2 className="text-display-md font-bold mb-6 text-secondary-900">
                Empowering Businesses to{' '}
                <span className="gradient-text">Succeed Online</span>
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                To help businesses grow online through ethical, data-driven, result-oriented digital marketing strategies that deliver long-term business growth.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-6">
                Our expertise combines technical SEO, strategic content optimization, Local SEO, Google Business Profile Optimization, website performance improvements, and creative digital marketing. Instead of relying on shortcuts, we implement ethical White Hat SEO strategies aligned with Google's latest algorithm updates.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Every business has unique goals, which is why we create customized SEO strategies based on detailed research, competitor analysis, user intent, and industry trends. Our approach focuses on delivering sustainable rankings, higher organic traffic, improved user experience, and long-term return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <SectionTitle
            tagline="Our Values"
            title="The Principles That Guide Us"
            highlight="Guide Us"
            description="Our core values define who we are and how we work with clients to achieve their digital marketing goals."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            tagline="Our Journey"
            title="Milestones Along the Way"
            highlight="Milestones"
            description="From our founding to today, see how Vclix has grown and evolved to serve clients better."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200" />

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-primary-600 font-semibold mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{milestone.title}</h3>
                  <p className="text-secondary-600">{milestone.description}</p>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-soft" />

                <div className="md:hidden pl-12">
                  <div className="text-primary-600 font-semibold mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">{milestone.title}</h3>
                  <p className="text-secondary-600">{milestone.description}</p>
                </div>

                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom">
          <SectionTitle
            tagline="Why Vclix"
            title="Why Businesses Choose Us"
            highlight="Choose Us"
            description="We deliver results through proven strategies, transparent communication, and dedicated support."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '1.5+', description: 'Years Experience' },
              { title: '10+', description: 'Happy Clients' },
              { title: '200+', description: 'Keywords Ranked' },
              { title: '90%', description: 'Client Retention Rate' },
            ].map((stat) => (
              <div key={stat.title} className="text-center p-6 bg-secondary-800 rounded-2xl">
                <div className="text-4xl font-bold text-primary-400 mb-2">{stat.title}</div>
                <div className="text-secondary-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
