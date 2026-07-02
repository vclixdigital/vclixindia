import { useState } from 'react';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionTitle from '../components/ui/SectionTitle';
import Accordion from '../components/ui/Accordion';
import CTASection from '../components/sections/CTASection';
import { faqs } from '../data/content';

const categories = ['All', ...new Set(faqs.map((f) => f.category))];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <div className="max-w-4xl">
            <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Find answers to common questions about our SEO services, pricing, process, and what to expect when working with Vclix.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="mb-4">
                <div className="bg-secondary-50 rounded-xl px-6">
                  <Accordion items={[{ question: faq.question, answer: faq.answer }]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-display-sm font-bold text-secondary-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-secondary-600 mb-8">
              Can't find the answer you are looking for? Our team is here to help you with any specific questions about your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+916382939779" className="btn-primary">
                Call Us: +91 6382939779
              </a>
              <a href="https://wa.me/916382939779" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 text-white hover:bg-green-600">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
