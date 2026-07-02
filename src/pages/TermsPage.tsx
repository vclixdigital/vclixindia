import Breadcrumb from '../components/ui/Breadcrumb';

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <h1 className="text-display-md md:text-display-lg font-bold">
            Terms of Service
          </h1>
          <p className="text-primary-100 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Vclix ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you do not have permission to access our services.
            </p>

            <h2>Services</h2>
            <p>
              Vclix provides SEO, digital marketing, and related services to businesses seeking to improve their online presence. Our services include but are not limited to search engine optimization, local SEO, technical SEO, content optimization, social media management, and website audits.
            </p>

            <h2>Client Obligations</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information necessary for our services</li>
              <li>Respond to our requests in a timely manner</li>
              <li>Pay for services as agreed in your contract</li>
              <li>Not engage in any illegal or unethical marketing practices</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment terms will be outlined in your service agreement. Unless otherwise specified, payment is due upon receipt of invoice. Late payments may result in suspension of services.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content, strategies, and deliverables created by Vclix remain our intellectual property until full payment is received. Upon full payment, you will receive appropriate rights to use the deliverables as agreed.
            </p>

            <h2>Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during the course of our engagement. This includes business strategies, customer data, and any other sensitive information.
            </p>

            <h2>No Guarantees</h2>
            <p>
              While we strive to deliver excellent results, SEO and digital marketing results cannot be guaranteed. Search engine algorithms are controlled by third parties, and rankings can fluctuate. We commit to using best practices and ethical techniques to achieve optimal results.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Vclix shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services. Our total liability shall not exceed the amount paid for services in the preceding 12 months.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate the service agreement with written notice as specified in your contract. Upon termination, you will be responsible for payment of services rendered up to the termination date.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Vclix from any claims, damages, or expenses arising from your use of our services or violation of these terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be resolved in the courts of Tamil Nadu, India.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: vclixdigital@gmail.com</li>
              <li>Phone: +91 6382939779</li>
              <li>Address: Dharmapuri, Tamilnadu, India - 636810</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
