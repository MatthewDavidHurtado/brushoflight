import React from 'react';
import { Briefcase, Download, FileText, Mail, Phone, X, Printer } from 'lucide-react';

const PartnerResources = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="min-h-screen bg-stone-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
          <div className="bg-stone-900 text-white p-8 md:p-12 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Briefcase className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-4xl font-bold serif">Partner Resources</h1>
                <p className="text-stone-400 text-sm mt-1">Essential tools and documents for our partners</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            <section>
              <div className="mb-8">
                <h2 className="text-3xl font-bold serif mb-3">Welcome, Partner</h2>
                <p className="text-stone-600 leading-relaxed">
                  This page contains all the resources you need to seamlessly integrate Brush of Light memorial art services with your funeral home. Below you'll find downloadable forms, contact information, and essential materials for client interactions.
                </p>
              </div>
            </section>

            <section className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Client Contact Consent Form</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    This optional form allows families to express interest in Brush of Light memorial art services. Simply provide this form to interested families, and we'll handle all follow-up communication directly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>No obligation:</strong> Families can request information without commitment</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>Privacy protected:</strong> Contact information used solely for service inquiry response</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p><strong>Your workflow protected:</strong> We handle all client consultations and logistics</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://drive.google.com/uc?export=download&id=1er-vOmEsUjg9hfBas49LgtTQh6ikmUDS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-stone-900 text-white py-4 px-6 rounded-2xl font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  <Download size={20} />
                  Download PDF Form
                </a>
                <a
                  href="https://drive.google.com/file/d/1er-vOmEsUjg9hfBas49LgtTQh6ikmUDS/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-stone-900 border-2 border-stone-300 py-4 px-6 rounded-2xl font-bold hover:border-stone-900 transition-all flex items-center justify-center gap-3"
                >
                  <Printer size={20} />
                  View & Print
                </a>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Mail className="text-amber-700" size={24} />
                  How to Use the Form
                </h3>
                <ol className="space-y-3 text-stone-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">1.</span>
                    <span>Print the consent form and keep copies available at your facility</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">2.</span>
                    <span>Offer the form to families who express interest in memorial art services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">3.</span>
                    <span>Collect the completed form from interested families</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-amber-700 flex-shrink-0">4.</span>
                    <span>Email or call us with the contact details - we handle everything from there</span>
                  </li>
                </ol>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Phone className="text-amber-700" size={24} />
                  Quick Reference Guide
                </h3>
                <div className="space-y-4 text-stone-700">
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1 uppercase tracking-wide">Service Fee</p>
                    <p className="text-lg font-semibold">$400 per completed service</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1 uppercase tracking-wide">Your Role</p>
                    <p>Inform families of the option and share contact information</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1 uppercase tracking-wide">Our Role</p>
                    <p>All consultation, coordination, artwork creation, and delivery</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-stone-900 mb-1 uppercase tracking-wide">Timeline</p>
                    <p>Completed artwork delivered within 2-3 weeks of service</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-stone-900 text-white p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 serif">Need Assistance?</h3>
              <p className="text-stone-300 mb-6 leading-relaxed">
                We're here to support you and answer any questions about the partnership, forms, or services. Reach out anytime.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Email</p>
                  <a
                    href="mailto:ezelle@ezelleart.com"
                    className="text-lg hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Mail size={20} />
                    ezelle@ezelleart.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Phone</p>
                  <a
                    href="tel:+13176672409"
                    className="text-lg hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Phone size={20} />
                    317-667-2409
                  </a>
                </div>
              </div>
            </section>

            <div className="text-center pt-6 border-t border-stone-200">
              <button
                onClick={onClose}
                className="text-stone-500 hover:text-stone-800 font-bold transition-colors uppercase tracking-widest text-xs"
              >
                Return to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerResources;
