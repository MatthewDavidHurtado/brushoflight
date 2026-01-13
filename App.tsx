
import React, { useState } from 'react';
import {
  DollarSign,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Heart,
  Palette,
  HandHeart,
  X,
  Printer,
  Mail,
  CheckCircle2,
  User,
  Building2,
  RotateCcw,
  Menu
} from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import PartnerResources from './PartnerResources';

// --- Types ---
type OnboardingStep = 'IDENTIFY' | 'WELCOME' | 'AGREEMENT' | 'SUCCESS';
type PageView = 'HOME' | 'PRIVACY' | 'TERMS' | 'RESOURCES';

interface UserData {
  name: string;
  businessName: string;
  signature: string;
}

// --- Helper Components ---

const Section = ({ children, className = "", id = "" }: { children?: React.Node, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const dimensions = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-32 h-32 md:w-40 md:h-40"
  };
  return (
    <div className={`${dimensions[size]} rounded-full overflow-hidden shadow-2xl border-2 border-white/50 flex-shrink-0 bg-stone-900 relative`}>
      <img 
        src="https://i.imgur.com/97pR8zg.png" 
        alt="Brush of Light Logo" 
        className="w-full h-full object-cover scale-110"
      />
    </div>
  );
};

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:shadow-md hover:-translate-y-1">
    <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 text-amber-700">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-stone-600 leading-relaxed">{description}</p>
  </div>
);

// --- Onboarding Portal Component ---

const OnboardingPortal = ({ isOpen, onClose, onNavigateResources }: { isOpen: boolean, onClose: () => void, onNavigateResources: () => void }) => {
  const [step, setStep] = useState<OnboardingStep>('IDENTIFY');
  const [userData, setUserData] = useState<UserData>({ name: '', businessName: '', signature: '' });

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setUserData({ name: '', businessName: '', signature: '' });
    setStep('IDENTIFY');
  };

  const handleEmailPrompt = () => {
    const subject = encodeURIComponent(`Signed Partnership Agreement - ${userData.businessName}`);
    const body = encodeURIComponent(`Hi Ezelle,\n\nPlease find the signed partnership agreement for ${userData.businessName} attached to this email.\n\nBest regards,\n${userData.name}`);
    window.location.href = `mailto:ezelle@ezelleart.com?subject=${subject}&body=${body}`;
  };

  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 portal-root">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-md no-print" onClick={onClose} />
      
      {/* Main Portal UI */}
      <div className="relative bg-white w-full max-w-4xl h-full max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 no-print">
        {/* Header */}
        <div className="p-6 md:px-12 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <h2 className="text-xl font-bold serif text-stone-800">Partner Onboarding</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-50 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          
          {step === 'IDENTIFY' && (
            <div className="max-w-md mx-auto py-10">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700 mx-auto mb-6">
                  <User size={32} />
                </div>
                <h3 className="text-3xl font-bold serif mb-3">Welcome to the Portal</h3>
                <p className="text-stone-500">Please provide your details to begin personalizing your partnership documents.</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                    <input 
                      type="text" 
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
                      placeholder="e.g. John Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Organization / Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300" size={18} />
                    <input 
                      type="text" 
                      value={userData.businessName}
                      onChange={(e) => setUserData({ ...userData, businessName: e.target.value })}
                      className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all"
                      placeholder="e.g. Oakwood Memorial Chapel"
                    />
                  </div>
                </div>
                <button
                  disabled={!userData.name || !userData.businessName}
                  onClick={() => setStep('WELCOME')}
                  className="w-full bg-stone-900 text-white font-bold py-5 rounded-2xl hover:bg-stone-800 transition-all disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
                >
                  Generate Portal Experience
                  <ArrowRight size={20} />
                </button>
                <p className="text-center text-xs text-stone-500 mt-4">
                  Already Completed This Step?{' '}
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateResources();
                    }}
                    className="text-amber-700 hover:text-amber-800 font-bold transition-colors underline"
                  >
                    Go to Partner Resources Instead
                  </button>
                </p>
              </div>
            </div>
          )}

          {step === 'WELCOME' && (
            <div className="max-w-3xl mx-auto space-y-12 py-6">
              <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100">
                <h3 className="text-3xl font-bold serif mb-6">Welcome, {userData.name}.</h3>
                <div className="prose prose-stone leading-relaxed text-stone-600 space-y-4">
                  <p>It is a pleasure to formally welcome you to the <strong>Brush of Light</strong> family. By exploring this partnership for <strong>{userData.businessName}</strong>, you are demonstrating a commitment to the families you serve that goes far beyond traditional care.</p>
                  <p>We believe that memorialization should be as vivid and luminous as the lives we celebrate. This portal contains your personalized script and legal documents to get us started immediately.</p>
                </div>
              </div>

              <div>
                <span className="text-amber-700 font-bold tracking-widest uppercase text-xs mb-4 block">Personalized Partnership Script</span>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 italic font-serif text-xl text-stone-800 leading-relaxed relative">
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg bg-stone-100">
                    <img src="https://i.imgur.com/98pL3Ua.png" alt="Ezelle Geldenhuis" className="w-full h-full object-cover" />
                  </div>
                  "Hi {userData.name}, Listen, I am excited to connect with you and {userData.businessName}, I'm Ezelle. My business is called Brush of Light. I am offering to add a premium option for {userData.businessName} that increases revenue per service by $400. I offer families a premium keepsake they will thank you for. You don't manage it. Your team does nothing. You earn more without selling. I handle 100% of it for you. I show up, paint live, and deliver the keepsake. I add an extra $400 per service without adding any work for your staff. And the best part is; extra profit for {userData.businessName} with no headaches, premium results with no risk - I handle the entire process, they thank you for the results."
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => setStep('AGREEMENT')}
                  className="bg-stone-900 text-white px-12 py-5 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl flex items-center gap-3 group"
                >
                  Proceed to Onboarding Agreement
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {step === 'AGREEMENT' && (
            <div className="max-w-3xl mx-auto py-6">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold serif mb-3">Collaboration Agreement</h3>
                <p className="text-stone-500">Please review and sign your agreement to complete the onboarding.</p>
              </div>

              <div className="bg-stone-50 p-1 md:p-4 rounded-3xl border border-stone-200 mb-12">
                <div className="bg-white p-8 md:p-16 text-stone-800 text-sm leading-relaxed shadow-inner font-serif">
                  <div className="text-center mb-12">
                    <h4 className="font-bold text-xl uppercase tracking-widest mb-1">BRUSH OF LIGHT</h4>
                    <p className="font-bold uppercase tracking-widest text-stone-400">REFERRAL & MEMORIAL ART COLLABORATION AGREEMENT</p>
                  </div>
                  <p className="mb-8">This Referral & Memorial Art Collaboration Agreement (“Agreement”) is entered into as of <strong>{today}</strong> by and between:</p>
                  <p className="mb-4"><strong>Ezelle Art LLC, D.B.A. “Touch of Light”</strong>, operated by Ezelle Geldenhuis (“Artist”), and</p>
                  <p className="mb-8"><strong>{userData.businessName}</strong> (“Referral Partner”), a funeral home or related service provider.</p>
                  <div className="space-y-6 text-justify">
                    <p><strong>1. Purpose</strong><br />Artist provides a memorial fine art service in which a painting is created live, quietly and respectfully, during a viewing or memorial service, then completed in the studio and delivered to the family as a lasting artwork. The service is an optional, independent adjunct to Referral Partner’s services and is contracted directly with families.</p>
                    <p><strong>2. Independent Contractor Status</strong><br />Artist operates as an independent contractor. Nothing in this Agreement creates an employment, partnership, or agency relationship. Referral Partner does not control artistic execution, pricing, scheduling, or delivery.</p>
                    <p><strong>3. Non-Solicitation & Client Protection</strong><br />Artist agrees not to solicit Referral Partner’s families except through direct referral or family-initiated inquiry, not to offer competing services, and not to represent Brush of Light as a replacement for Referral Partner’s offerings.</p>
                    <p><strong>4. Referral Process</strong><br />Referral Partner’s role is limited to informing families of the service, providing Artist materials, and sharing contact information with family consent. Artist handles all consultations, contracts, artwork, and delivery.</p>
                    <p><strong>5. Live Service Presence</strong><br />Artist will maintain a professional, discreet presence during services and coordinate independently without disruption or staff involvement.</p>
                    <p><strong>6. Referral Collaboration Fee</strong><br />Artist agrees to pay a Referral Collaboration Fee of <strong>$400</strong> for each completed artwork resulting from a Referral Partner introduction. Fees are paid within 30 days of artwork delivery and full payment.</p>
                    <p><strong>7. Confidentiality</strong><br />Both Parties agree to maintain confidentiality regarding families, memorial content, and business practices. This obligation survives termination.</p>
                    <p><strong>8. Intellectual Property</strong><br />All artwork and creative processes remain the sole property of Artist. Referral Partner may not reproduce artwork without permission.</p>
                    <p><strong>9. Liability & Indemnification</strong><br />Artist assumes responsibility for artwork creation and delivery and agrees to indemnify Referral Partner from claims arising solely from Artist services.</p>
                    <p><strong>10. Non-Exclusivity</strong><br />This Agreement is non-exclusive for both Parties.</p>
                    <p><strong>11. Termination</strong><br />Either Party may terminate this Agreement at any time. Termination does not affect fees owed for completed referrals.</p>
                    <p><strong>12. Governing Law</strong><br />This Agreement shall be governed by the laws of the State of <strong>Wisconsin</strong>.</p>
                  </div>

                  <div className="mt-20 grid grid-cols-2 gap-10">
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase text-stone-400">Artist Signature</p>
                      <div className="border-b border-stone-800 py-4 italic serif text-2xl">Ezelle Geldenhuis</div>
                      <p className="mt-2 text-[10px] text-stone-400">Date: {today}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase text-stone-400">Referral Partner Signature</p>
                      <div className="border-b border-stone-800 py-2">
                        <input 
                          type="text" 
                          value={userData.signature}
                          onChange={(e) => setUserData({ ...userData, signature: e.target.value })}
                          placeholder="Type full name to sign"
                          className="w-full bg-transparent border-none outline-none italic serif text-2xl placeholder:text-stone-200"
                        />
                      </div>
                      <p className="mt-2 text-[10px] text-stone-400">Date: {today}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  disabled={!userData.signature}
                  onClick={() => setStep('SUCCESS')}
                  className="bg-stone-900 text-white px-14 py-5 rounded-full font-bold hover:bg-stone-800 transition-all shadow-xl flex items-center gap-3 disabled:opacity-50 group"
                >
                  Finalize & Complete Onboarding
                  <CheckCircle2 className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {step === 'SUCCESS' && (
            <div className="max-w-2xl mx-auto py-12 text-center">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-4xl font-bold serif mb-4">Onboarding Complete!</h3>
              <p className="text-stone-600 mb-12 leading-relaxed">
                Thank you, {userData.name}. Your agreement for <strong>{userData.businessName}</strong> is now finalized. Please use the options below to activate your partnership.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
                <button 
                  onClick={handleEmailPrompt}
                  className="bg-stone-900 text-white py-6 rounded-2xl font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <Mail size={22} />
                  Email to Ezelle
                </button>
                
                <button 
                  onClick={handlePrint}
                  className="bg-white text-stone-900 border-2 border-stone-200 py-6 rounded-2xl font-bold hover:border-stone-900 transition-all flex items-center justify-center gap-3 shadow-md"
                >
                  <Printer size={22} />
                  Print / Save as PDF
                </button>
              </div>
              
              <div className="mt-6 space-y-1">
                <p className="text-xs text-stone-400 uppercase tracking-widest font-black">ezelle@ezelleart.com</p>
                <p className="text-xs text-stone-400 uppercase tracking-widest font-black">317-667-2409</p>
              </div>
              
              <div className="mt-20 pt-10 border-t border-stone-100 flex flex-col items-center gap-6">
                <button 
                  onClick={onClose}
                  className="text-stone-400 hover:text-stone-600 font-bold transition-colors uppercase tracking-widest text-[10px]"
                >
                  Return to Home Page
                </button>
                <button 
                  onClick={handleReset}
                  className="flex items-center gap-2 text-amber-700/60 hover:text-amber-700 font-bold transition-colors uppercase tracking-widest text-[10px]"
                >
                  <RotateCcw size={14} />
                  Reset & Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 
          OFF-SCREEN PRINT SOURCE
          This container is the MASTER for printing.
      */}
      <div className="print-document">
          <div className="print-page-wrapper">
              <div style={{ textAlign: 'center', marginBottom: '40pt' }}>
                  <h1 style={{ fontSize: '32pt', margin: '0', fontFamily: 'serif' }}>BRUSH OF LIGHT</h1>
                  <h2 style={{ fontSize: '14pt', margin: '5pt 0 0 0', letterSpacing: '3pt', color: '#444' }}>REFERRAL & MEMORIAL ART COLLABORATION AGREEMENT</h2>
              </div>
              
              <p style={{ marginBottom: '20pt', fontSize: '11pt' }}>This Referral & Memorial Art Collaboration Agreement is entered into as of <strong>{today}</strong> by and between:</p>
              <p style={{ marginBottom: '10pt', fontSize: '11pt' }}><strong>Ezelle Art LLC, D.B.A. “Touch of Light”</strong>, operated by Ezelle Geldenhuis (“Artist”), and</p>
              <p style={{ marginBottom: '30pt', fontSize: '11pt' }}><strong>{userData.businessName || '[Company Name]'}</strong> (“Referral Partner”), a funeral home or related service provider.</p>
              
              <div className="agreement-text" style={{ textAlign: 'justify', fontSize: '11pt', lineHeight: '1.6' }}>
                  <p><strong>1. Purpose</strong>: Artist provides a memorial fine art service in which a painting is created live during a viewing or memorial service, then completed in the studio and delivered to the family as a lasting artwork. The service is an independent adjunct to Referral Partner’s services.</p>
                  <p><strong>2. Independent Contractor Status</strong>: Artist operates as an independent contractor. Nothing in this Agreement creates an employment, partnership, or agency relationship.</p>
                  <p><strong>3. Non-Solicitation & Client Protection</strong>: Artist agrees not to solicit Referral Partner’s families except through direct referral or family-initiated inquiry, and not to represent Brush of Light as a replacement for Referral Partner’s offerings.</p>
                  <p><strong>4. Referral Process</strong>: Referral Partner’s role is limited to informing families of the service and sharing contact information with family consent. Artist handles all consultations, contracts, and delivery.</p>
                  <p><strong>5. Live Service Presence</strong>: Artist will maintain a professional, discreet presence during services and coordinate independently without disruption or staff involvement.</p>
                  <p><strong>6. Referral Collaboration Fee</strong>: Artist agrees to pay a Referral Collaboration Fee of <strong>$400</strong> for each completed artwork resulting from a Referral Partner introduction. Fees are paid within 30 days of artwork delivery.</p>
                  <p><strong>7. Confidentiality</strong>: Both Parties agree to maintain confidentiality regarding families, memorial content, and business practices. This obligation survives termination.</p>
                  <p><strong>8. Liability & Indemnification</strong>: Artist assumes responsibility for artwork creation and delivery and agrees to indemnify Referral Partner from claims arising solely from Artist services.</p>
                  <p><strong>9. Termination</strong>: Either Party may terminate this Agreement at any time. Termination does not affect fees owed for completed referrals.</p>
                  <p><strong>10. Governing Law</strong>: This Agreement shall be governed by the laws of the State of Wisconsin.</p>
              </div>

              <div style={{ marginTop: '60pt', display: 'flex', justifyContent: 'space-between', gap: '50pt' }}>
                  <div style={{ flex: '1' }}>
                      <p style={{ fontWeight: 'bold', fontSize: '9pt', textTransform: 'uppercase', marginBottom: '5pt' }}>Artist Signature</p>
                      <div style={{ borderBottom: '1px solid black', padding: '10pt 0', fontFamily: 'serif', fontSize: '24pt', fontStyle: 'italic' }}>Ezelle Geldenhuis</div>
                      <p style={{ fontSize: '9pt', marginTop: '5pt' }}>Date: {today}</p>
                  </div>
                  <div style={{ flex: '1' }}>
                      <p style={{ fontWeight: 'bold', fontSize: '9pt', textTransform: 'uppercase', marginBottom: '5pt' }}>Referral Partner Signature</p>
                      <div style={{ borderBottom: '1px solid black', padding: '10pt 0', fontFamily: 'serif', fontSize: '24pt', fontStyle: 'italic', minHeight: '40pt' }}>
                          {userData.signature}
                      </div>
                      <p style={{ fontSize: '9pt', marginTop: '5pt' }}>Date: {today}</p>
                  </div>
              </div>
          </div>
      </div>

      <style>{`
        /* Master styles for Print - This is what ensures NO trimming and multi-page support */
        .print-document {
          display: none;
        }

        @media print {
          /* 1. Force the root and all ancestors to be visible and non-limiting */
          html, body, #root, .portal-root {
            position: static !important;
            display: block !important;
            height: auto !important;
            width: 100% !important;
            overflow: visible !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* 2. Hide everything that is not the document */
          body > *:not(.portal-root), 
          .portal-root > *:not(.print-document) {
            display: none !important;
            visibility: hidden !important;
          }

          /* 3. Make the document MASTER visible */
          .print-document {
            display: block !important;
            visibility: visible !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
          }

          .print-page-wrapper {
            padding: 2.5cm !important; /* Proper printing margins */
            visibility: visible !important;
          }

          .print-page-wrapper * {
            visibility: visible !important;
          }

          @page {
            size: auto;
            margin: 0; /* Let .print-page-wrapper handle internal margins */
          }
        }
      `}</style>
    </div>
  );
};

const Navbar = ({ onOpenPortal, onNavigate }: { onOpenPortal: () => void, onNavigate: (page: PageView) => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-stone-200/50 no-print">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-xl md:text-2xl font-semibold serif tracking-tight">Brush of Light</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold text-stone-600 uppercase tracking-widest">
            <a href="#benefits" className="hover:text-amber-800 transition-colors">The Opportunity</a>
            <a href="#how-it-works" className="hover:text-amber-800 transition-colors">Our Process</a>
            <button
              onClick={() => onNavigate('RESOURCES')}
              className="hover:text-amber-800 transition-colors"
            >
              Partner Resources
            </button>
            <button
              onClick={onOpenPortal}
              className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-lg"
            >
              Partner Portal
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden no-print">
          <div
            className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-stone-200 shadow-2xl">
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
              <a
                href="#benefits"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-bold text-stone-700 hover:text-amber-800 transition-colors uppercase tracking-widest py-3 border-b border-stone-100"
              >
                The Opportunity
              </a>
              <a
                href="#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-bold text-stone-700 hover:text-amber-800 transition-colors uppercase tracking-widest py-3 border-b border-stone-100"
              >
                Our Process
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate('RESOURCES');
                }}
                className="w-full text-left text-sm font-bold text-stone-700 hover:text-amber-800 transition-colors uppercase tracking-widest py-3 border-b border-stone-100"
              >
                Partner Resources
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full bg-stone-900 text-white px-6 py-4 rounded-2xl hover:bg-stone-800 transition-all shadow-lg font-bold uppercase tracking-widest text-sm"
              >
                Partner Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('HOME');

  if (currentPage === 'PRIVACY') {
    return <PrivacyPolicy onClose={() => setCurrentPage('HOME')} />;
  }

  if (currentPage === 'TERMS') {
    return <TermsOfUse onClose={() => setCurrentPage('HOME')} />;
  }

  if (currentPage === 'RESOURCES') {
    return <PartnerResources onClose={() => setCurrentPage('HOME')} />;
  }

  return (
    <div className="min-h-screen selection:bg-amber-100 selection:text-amber-900">
      <Navbar onOpenPortal={() => setIsPortalOpen(true)} onNavigate={setCurrentPage} />

      <OnboardingPortal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
        onNavigateResources={() => setCurrentPage('RESOURCES')}
      />

      {/* Landing Page Content */}
      <div className="no-print">
        <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.imgur.com/DACt3Vk.png" 
              alt="Artistic Light Texture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center py-20">
            <div className="flex justify-center mb-10"><Logo size="lg" /></div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-amber-200/50 text-amber-900 px-6 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-[0.3em]">
              <TrendingUp size={14} className="text-amber-600" />
              <span>Premium B2B Partnership Program</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 serif">Deliver <span className="italic text-amber-800">Legacy</span>. <br /> Earn <span className="text-stone-900 relative inline-block"> $400 <span className="absolute bottom-1 left-0 w-full h-4 bg-amber-400/20 -z-10"></span></span> Per Call.</h1>
            <p className="text-lg md:text-2xl text-stone-700 max-w-3xl mx-auto mb-12 font-light">Brush of Light integrates high-end live memorial painting into your chapel services. We provide the artist and logistics; you provide the premium space and collect the margin.</p>
            <button onClick={() => setIsPortalOpen(true)} className="bg-stone-900 text-white text-lg px-12 py-5 rounded-full hover:bg-stone-800 transition-all shadow-2xl flex items-center justify-center gap-3 group mx-auto">Get Your Partnership Kit <ArrowRight size={20} className="group-hover:translate-x-1" /></button>
          </div>
        </header>

        <Section className="bg-stone-50 border-y border-stone-100">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 serif">The Modern Funeral <br />Director's Dilemma.</h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">Families are demanding more "meaningful" experiences, yet staffing costs and administrative overhead make adding new services a logistical nightmare.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"><div className="w-2 h-2 bg-amber-600 rounded-full"></div></div>
                  <div>
                    <span className="block font-bold text-stone-900 mb-1">Revenue Leakage</span>
                    <span className="text-stone-600 text-sm">Standard services are becoming commoditized and price-shopped.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0"><div className="w-2 h-2 bg-amber-600 rounded-full"></div></div>
                  <div>
                    <span className="block font-bold text-stone-900 mb-1">Operational Fatigue</span>
                    <span className="text-stone-600 text-sm">Your staff is too busy to manage 'one more vendor' or complex logistics.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-stone-100 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50"></div>
              <div className="flex items-center justify-center gap-4 mb-8">
                <DollarSign className="text-green-600" size={40} />
                <h4 className="font-bold text-3xl">+$400 Margin</h4>
              </div>
              <p className="text-stone-400 uppercase tracking-widest text-xs font-bold">Pure Net Profit Share per Service</p>
              <div className="mt-8 pt-8 border-t border-stone-100">
                 <p className="text-stone-500 italic">"The easiest menu item we've ever added."</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="benefits">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 serif italic text-amber-800">The "Pure Partnership" Model</h2>
            <p className="text-stone-500 uppercase tracking-[0.3em] font-bold text-xs">Built Specifically for High-End Chapels</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <BenefitCard icon={Palette} title="Premium Live Artistry" description="Ezelle brings a sophisticated aesthetic to your service. We don't just paint; we curate a reverent atmosphere." />
            <BenefitCard icon={ShieldCheck} title="Liability Free" description="We are fully insured and handle all client communications post-service. Your staff maintains their workflow." />
            <BenefitCard icon={Heart} title="Family Gratitude" description="Families attribute the beauty of the live painting to YOUR home. It cements your reputation." />
          </div>
        </Section>

        <Section id="how-it-works" className="bg-stone-900 text-white rounded-[3.5rem] mx-4 md:mx-12 overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20"><img src="https://i.imgur.com/8Pc3PyI.png" className="w-full h-full object-cover" /></div>
          <div className="py-12 px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 serif text-center">Presell Legacy, Deliver Magic.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { s: "01", t: "Menu Integration", d: "Add us to your service menu. We provide luxury cards." },
                { s: "02", t: "Instant Booking", d: "Notify us when selected; we handle scheduling." },
                { s: "03", d: "We setup quietly and leave no cleanup behind.", t: "Invisible Setup" },
                { s: "04", d: "You collect total bill; we invoice our fee. Pure profit.", t: "Automated Profit" }
              ].map((it, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-amber-500 font-bold text-3xl mb-4">{it.s}</div>
                  <h4 className="font-bold mb-2 text-xl">{it.t}</h4>
                  <p className="text-sm text-stone-400 leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="bg-white text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 serif">Gallery of Tributes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"><img src="https://i.imgur.com/TGFtxrZ.png" className="w-full h-full object-cover" /></div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"><img src="https://i.imgur.com/cNxBLiq.png" className="w-full h-full object-cover" /></div>
          </div>
        </Section>

        <Section className="bg-stone-50 border-y border-stone-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="https://i.imgur.com/98pL3Ua.png" alt="Ezelle Geldenhuis" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="text-amber-700 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Behind the Canvas</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 serif">Meet The Artist: Ezelle</h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
                <p>I’m Ezelle Geldenhuis, and painting has become the way I connect with the world on a deeper level. My work is intuitive and energy-led. I’m drawn to the quiet strength in people, the emotion in their eyes, and the stories that sit just beneath the surface.</p>
                <p>Art started as a personal outlet in one of the hardest seasons of my life, but over time it grew into something much bigger—a calling, a way of understanding myself, and a way of offering something meaningful to others.</p>
                <p>My work blends realism with expressive movement and layered texture. I paint the feeling behind a moment, the energy held in a portrait, and the beauty in the transitions we all experience.</p>
              </div>
              <div className="mt-10 pt-10 border-t border-stone-100 flex items-center gap-6">
                <HandHeart className="text-amber-600" size={32} />
                <div>
                  <p className="text-sm font-bold text-stone-900 uppercase tracking-widest leading-none mb-1">Compassionate Care</p>
                  <p className="text-xs text-stone-400">Hospice Volunteer & Dedicated Memorial Artist</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="bg-stone-900 text-stone-500 py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
             <div className="flex justify-center mb-12"><Logo size="md" /></div>
             <h2 className="text-white text-4xl font-bold mb-8 serif">Grow Your Business With Beauty.</h2>
             <button onClick={() => setIsPortalOpen(true)} className="bg-white text-stone-900 px-14 py-6 rounded-full font-bold hover:bg-stone-100 shadow-2xl transition-all">Secure Your Territory</button>
             <div className="mt-20 pt-10 border-t border-white/5">
                <div className="mb-8 space-y-2">
                  <p className="text-xs text-stone-400">
                    <a href="mailto:ezelle@ezelleart.com" className="hover:text-amber-400 transition-colors">ezelle@ezelleart.com</a>
                  </p>
                  <p className="text-xs text-stone-400">
                    <a href="tel:+13176672409" className="hover:text-amber-400 transition-colors">317-667-2409</a>
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  <button
                    onClick={() => setCurrentPage('RESOURCES')}
                    className="text-[11px] uppercase tracking-widest font-bold hover:text-amber-400 transition-colors"
                  >
                    Partner Resources
                  </button>
                  <span className="text-white/20">|</span>
                  <button
                    onClick={() => setCurrentPage('PRIVACY')}
                    className="text-[11px] uppercase tracking-widest font-bold hover:text-amber-400 transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <span className="text-white/20">|</span>
                  <button
                    onClick={() => setCurrentPage('TERMS')}
                    className="text-[11px] uppercase tracking-widest font-bold hover:text-amber-400 transition-colors"
                  >
                    Terms of Use
                  </button>
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold">
                  &copy; {new Date().getFullYear()} Brush of Light | Ezelle Art LLC. Wisconsin, USA.
                </div>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
