import React from 'react';
import { Scale, AlertTriangle, FileCheck, Shield, Mail, X } from 'lucide-react';

const TermsOfUse = ({ onClose }: { onClose: () => void }) => {
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
              <Scale className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold serif">Terms of Use</h1>
              <p className="text-stone-400 text-sm mt-1">Last Updated: January 13, 2026</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-8 text-stone-800 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileCheck className="text-amber-700" size={24} />
              Agreement to Terms
            </h2>
            <p className="mb-4">
              These Terms of Use ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and <strong>Ezelle Art LLC</strong>, doing business as <strong>Brush of Light</strong> ("Company," "we," "us," or "our"), operated by Ezelle Geldenhuis, governing your access to and use of our website, services, and all related content.
            </p>
            <p className="mb-4">
              By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must immediately discontinue use of our services.
            </p>
            <p className="font-medium text-amber-800">
              These Terms apply to all users, including business partners, service clients, website visitors, and any other individuals or entities engaging with Ezelle Art LLC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Eligibility and User Representations</h2>
            <p className="mb-3">By using our services, you represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li>You are at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>You have the legal capacity and authority to enter into binding agreements</li>
              <li>If representing a business entity, you have authority to bind that entity to these Terms</li>
              <li>All information you provide is accurate, current, and complete</li>
              <li>You will use our services in compliance with all applicable laws and regulations</li>
              <li>You will not use our services for any unlawful or prohibited purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Services Description</h2>
            <p className="mb-3">
              Ezelle Art LLC provides premium memorial art services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li>Live painting services at memorial and funeral services</li>
              <li>Custom memorial artwork creation and delivery</li>
              <li>Business-to-business partnership programs for funeral homes and memorial service providers</li>
              <li>Related artistic and memorial services as offered</li>
            </ul>
            <p className="mt-3">
              We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We are not liable for any modification, suspension, or discontinuation of services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Ownership</h3>
                <p>
                  All content, artwork, designs, logos, text, graphics, images, photographs, videos, software, and other materials on our website and created through our services ("Content") are the exclusive property of Ezelle Art LLC and Ezelle Geldenhuis and are protected by United States and international copyright, trademark, and intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Limited License</h3>
                <p className="mb-2">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our website and services for their intended purpose. This license does not include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
                  <li>Reproduction, duplication, copying, or resale of any Content</li>
                  <li>Commercial use of Content without express written permission</li>
                  <li>Modification, adaptation, or creation of derivative works</li>
                  <li>Use of automated systems to access or scrape our website</li>
                  <li>Removal or alteration of copyright notices or proprietary markings</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Artwork Ownership</h3>
                <p>
                  Commissioned memorial artwork remains the intellectual property of Ezelle Art LLC until full payment is received. Upon full payment, physical ownership transfers to the client, but Ezelle Art LLC retains copyright and reproduction rights. Clients may not reproduce, distribute, or create derivative works without written permission.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Obligations and Prohibited Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li>Violate any applicable local, state, national, or international law or regulation</li>
              <li>Infringe upon the intellectual property rights of Ezelle Art LLC or any third party</li>
              <li>Transmit any harmful, offensive, defamatory, or inappropriate content</li>
              <li>Use our services for fraudulent, deceptive, or malicious purposes</li>
              <li>Interfere with or disrupt the operation of our website or services</li>
              <li>Attempt to gain unauthorized access to our systems, networks, or user accounts</li>
              <li>Collect or harvest personal information from other users without consent</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Use our services to compete with or harm our business interests</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of our website or services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Terms and Refund Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Payment</h3>
                <p>
                  All services require payment as specified in service agreements or invoices. Prices are subject to change without notice. You agree to provide accurate billing information and authorize charges for services rendered. Late payments may incur additional fees and interest as permitted by Wisconsin law.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Refunds and Cancellations</h3>
                <p className="mb-2">
                  Due to the custom nature of our services, refund policies are determined on a case-by-case basis. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
                  <li>Deposits are non-refundable once work has commenced</li>
                  <li>Cancellations must be made in writing with reasonable notice</li>
                  <li>Completed work is non-refundable</li>
                  <li>Refund requests must be submitted in writing with detailed justification</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-red-50 p-6 rounded-2xl border border-red-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="text-red-700" size={24} />
              Disclaimers and Limitations of Liability
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2 text-red-900">No Warranties</h3>
                <p className="mb-2 uppercase font-bold text-sm tracking-wide">
                  OUR SERVICES AND WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
                </p>
                <p>
                  We do not warrant that our services will be uninterrupted, error-free, secure, or free from viruses or harmful components. We make no guarantees about the quality, accuracy, or reliability of any content or services.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-red-900">Limitation of Liability</h3>
                <p className="mb-2 uppercase font-bold text-sm tracking-wide">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EZELLE ART LLC, EZELLE GELDENHUIS, AND THEIR AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING FROM YOUR USE OR INABILITY TO USE OUR SERVICES.
                </p>
                <p className="mt-2">
                  In no event shall our total liability exceed the amount you paid for services in the twelve months preceding the claim, or $100, whichever is greater.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="text-amber-700" size={24} />
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Ezelle Art LLC, Ezelle Geldenhuis, and all affiliated parties from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700 mt-3">
              <li>Your use or misuse of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your breach of any representation or warranty</li>
              <li>Any content you submit or provide through our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Dispute Resolution and Governing Law</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Governing Law</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of <strong>Wisconsin</strong>, United States of America, without regard to conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Wisconsin, and you hereby consent to personal jurisdiction and venue therein.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Informal Resolution</h3>
                <p>
                  In the event of any dispute, controversy, or claim arising out of or relating to these Terms, the parties agree to first attempt to resolve the matter through good faith negotiation and informal discussion.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Arbitration</h3>
                <p>
                  If informal resolution fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Wisconsin. The arbitrator's decision shall be final and binding. You waive any right to a jury trial or to participate in a class action lawsuit.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="mb-3">
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause, with or without notice, for any reason including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-stone-700">
              <li>Violation of these Terms</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Extended periods of inactivity</li>
              <li>At our sole discretion for any reason</li>
            </ul>
            <p className="mt-3">
              Upon termination, your right to use our services immediately ceases. Provisions of these Terms that by their nature should survive termination shall survive, including ownership, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data collection and use practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
            <p>
              We reserve the right to modify, amend, or update these Terms at any time at our sole discretion. Changes will be effective immediately upon posting to our website with a revised "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically. If you do not agree to modified Terms, you must discontinue use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Severability and Waiver</h2>
            <p className="mb-3">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalidity of any provision shall not affect the validity of the remaining provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of Ezelle Art LLC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other legal notices or agreements published by us, constitute the entire agreement between you and Ezelle Art LLC concerning your use of our services and supersede all prior or contemporaneous communications and proposals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Assignment</h2>
            <p>
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign or transfer these Terms or our rights hereunder to any third party without restriction or notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Force Majeure</h2>
            <p>
              Ezelle Art LLC shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, governmental actions, or technical failures.
            </p>
          </section>

          <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Mail className="text-amber-700" size={24} />
              Contact Information
            </h2>
            <p className="mb-4">
              If you have questions, concerns, or require clarification regarding these Terms of Use, please contact us:
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
            <p className="text-sm text-stone-500 mb-3">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
            <p className="text-xs text-stone-400 uppercase tracking-widest font-bold">
              LEGALLY BINDING AGREEMENT - PLEASE READ CAREFULLY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
