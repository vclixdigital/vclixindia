import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';
import { faqs } from '../../data/content';

export default function FAQSection() {
  const featuredFaqs = faqs.slice(0, 5);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: featuredFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle
              tagline="FAQ"
              title="Frequently Asked Questions"
              highlight="Asked Questions"
              description="Have questions about our SEO services? Find answers to common questions below or contact us for more information."
              alignment="left"
            />
            <Link to="/faq" className="btn-secondary">
              View All FAQs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div>
            <Accordion items={featuredFaqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
}
