import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, X } from 'lucide-react';

const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="min-h-screen bg-stone-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
        <div className="bg-stone-900 text-white p-8 md:p-12 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <Shield className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold serif">Privacy Policy</h1>
              <p className="text-stone-400 text-sm mt-1">Last Updated: January 13, 2026</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-8 text-stone-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileText className="text-amber-700" size={24} />
              Introduction
            </h2>
            <p className="mb-4">
              This Privacy Policy governs the collection, use, and protection of personal information by <strong>Ezelle Art LLC</strong>, doing business as <strong>Brush of Light</strong> ("we," "us," "our," or "Company"), operated by Ezelle Geldenhuis. We are committed to protecting your privacy and handling your personal information with care and respect.
            </p>
            <p>
              This Privacy Policy applies to all services, website interactions, and business relationships conducted by Ezelle Art LLC. By engaging with our services or providing us with personal information, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Eye className="text-amber-700" size={24} />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Personal Information</h3>
                <p className="mb-2">We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address, and business name</li>
                  <li><strong>Business Information:</strong> Company name, job title, organization details for B2B partnerships</li>
                  <li><strong>Financial Information:</strong> Billing address and payment details processed through secure third-party payment processors</li>
                  <li><strong>Service Information:</strong> Details about memorial services, artwork preferences, and related service requests</li>
                  <li><strong>Communications:</strong> Messages, emails, and other correspondence with our team</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Sensitive Personal Information</h3>
                <p className="mb-2">
                  Due to the nature of our memorial art services, we may receive sensitive information about deceased individuals, including names, dates, biographical details, and photographs. We treat this information with the highest level of confidentiality and respect.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Automatically Collected Information</h3>
                <p className="mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Lock className="text-amber-700" size={24} />
              How We Use Your Information
            </h2>
            <p className="mb-3">We use collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li><strong>Service Delivery:</strong> To create memorial artwork, coordinate with partner organizations, and deliver completed products</li>
              <li><strong>Business Operations:</strong> To process payments, manage partnerships, and fulfill contractual obligations</li>
              <li><strong>Communication:</strong> To respond to inquiries, provide service updates, and maintain professional relationships</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
              <li><strong>Quality Improvement:</strong> To enhance our services, website functionality, and customer experience</li>
              <li><strong>Marketing:</strong> To send promotional materials and service updates, with your consent and ability to opt-out</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell, rent, or trade your personal information. We may share information only in the following limited circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li><strong>Partner Organizations:</strong> With funeral homes and memorial service providers with whom we have formal partnership agreements, solely for service coordination</li>
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist with payment processing, website hosting, or business operations, under strict confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, subpoena, or to protect our legal rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets, with continued protection of your information</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information for a specific purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security and Protection</h2>
            <p className="mb-3">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li>Secure data storage and encrypted transmission protocols</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
              <li>Secure disposal of information no longer needed</li>
            </ul>
            <p className="mt-3 text-stone-600 italic">
              While we strive to protect your information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Memorial service information and artwork details may be retained for archival and legal purposes. Upon request, we will delete or anonymize your personal information, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="mb-3">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restriction:</strong> Request limitation on how we use your information</li>
              <li><strong>Data Portability:</strong> Request transfer of your information to another service provider where technically feasible</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-3">
              Our website may use cookies and similar technologies to enhance user experience and analyze website performance. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or business operations. Updates will be posted on this page with a revised "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of the State of <strong>Wisconsin</strong>, United States of America, without regard to its conflict of law provisions. Any disputes arising from this Privacy Policy shall be resolved in the courts of Wisconsin.
            </p>
          </section>

          <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Mail className="text-amber-700" size={24} />
              Contact Information
            </h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-stone-800">
              <p><strong>Ezelle Art LLC</strong></p>
              <p>DBA Brush of Light</p>
              <p>Operated by Ezelle Geldenhuis</p>
              <p>Email: <a href="mailto:ezelle@ezelleart.com" className="text-amber-700 hover:underline font-medium">ezelle@ezelleart.com</a></p>
              <p className="text-sm text-stone-600 mt-4">We will respond to all inquiries within 10 business days.</p>
            </div>
          </section>

          <div className="pt-8 border-t border-stone-200 text-center">
            <p className="text-sm text-stone-500">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
