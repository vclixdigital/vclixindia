import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { PHONE_LINK, EMAIL_LINK, WHATSAPP_LINK, BUSINESS_ADDRESS } from '../lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Vclix',
    description: 'Get in touch with Vclix for SEO and digital marketing services.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Vclix',
      telephone: '+91-6382939779',
      email: 'vclixdigital@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dharmapuri',
        addressLocality: 'Dharmapuri',
        addressRegion: 'Tamilnadu',
        postalCode: '636810',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <div className="max-w-4xl">
            <h1 className="text-display-lg md:text-display-xl font-bold mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Ready to grow your business online? Contact us for a free SEO consultation or website audit. Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-secondary-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <a href={PHONE_LINK} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                      <Phone className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500">Phone</div>
                      <div className="font-medium text-secondary-900 group-hover:text-primary-600 transition-colors">
                        +91 6382939779
                      </div>
                    </div>
                  </a>

                  <a href={EMAIL_LINK} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                      <Mail className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500">Email</div>
                      <div className="font-medium text-secondary-900 group-hover:text-primary-600 transition-colors">
                        vclixdigital@gmail.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500">Location</div>
                      <div className="font-medium text-secondary-900">{BUSINESS_ADDRESS}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-secondary-500">Business Hours</div>
                      <div className="font-medium text-secondary-900">Mon - Sat: 9AM - 6PM</div>
                    </div>
                  </div>
                </div>

                <hr className="my-6 border-secondary-200" />

                <div>
                  <p className="text-secondary-600 mb-4">Quick connect via WhatsApp</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-500 text-white hover:bg-green-600 w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-secondary-50 rounded-2xl p-4 aspect-square">
                <iframe
                  title="Vclix Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124423.35356801467!2d78.0956!3d12.1365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac24fb3c3d6f89%3A0x8c7b5c6e8f8bd8!2sDharmapuri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-secondary-200 rounded-2xl p-6 md:p-10 shadow-soft">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                      Thank You for Contacting Us!
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      We have received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      Book Your Free SEO Consultation Today
                    </h3>
                    <p className="text-secondary-600 mb-8">
                      Fill out the form below and our team will contact you within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="input-field"
                            placeholder="+91 XXXXXXXXXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="input-field"
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          <option value="seo">Search Engine Optimization</option>
                          <option value="local-seo">Local SEO</option>
                          <option value="gbp">Google Business Profile</option>
                          <option value="technical-seo">Technical SEO</option>
                          <option value="website-audit">Website SEO Audit</option>
                          <option value="social-media">Social Media Management</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="textarea-field"
                          placeholder="Tell us about your project and goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary btn-lg w-full"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-xs text-secondary-500 text-center">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy-policy" className="text-primary-600 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
