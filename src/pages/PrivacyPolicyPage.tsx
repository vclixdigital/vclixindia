import Breadcrumb from '../components/ui/Breadcrumb';

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="container-custom">
          <Breadcrumb className="mb-6 text-primary-200" />
          <h1 className="text-display-md md:text-display-lg font-bold">
            Privacy Policy
          </h1>
          <p className="text-primary-100 mt-4">Last updated: January 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Introduction</h2>
            <p>
              Vclix ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name when you contact us or subscribe to our newsletter.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes:</p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To communicate with you about our services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>

            <h2>Your Rights</h2>
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Delete your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Cookies are small text files stored on your device. We use cookies to remember your preferences, understand how you use our website, and improve your experience. You can configure your browser to refuse cookies, but some features may not function properly.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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
