import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, FileText } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface FooterProps {
  setActiveTab: (tab: 'portfolio' | 'resume' | 'contact' | 'code' | 'assets') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-base font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50 tracking-tight uppercase">
              Vaidehi Dhumal
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm leading-relaxed">
              Junior Architect passionate about sustainable spatial planning, millimeter-accurate
              technical documentation, and climate-responsive vernacular architecture.
            </p>
            <div className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
              MMCOA (B.Arch 2020–2025) · Yashoda Joshi Architects
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
              Sections
            </div>
            <div className="flex flex-col space-y-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <button
                onClick={() => {
                  setActiveTab('portfolio');
                  scrollToTop();
                }}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 text-left cursor-pointer transition-colors"
              >
                Selected Architectural Portfolio
              </button>
              <button
                onClick={() => {
                  setActiveTab('resume');
                  scrollToTop();
                }}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 text-left cursor-pointer transition-colors"
              >
                Curriculum Vitae & Experience
              </button>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  scrollToTop();
                }}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 text-left cursor-pointer transition-colors"
              >
                Inquiries & Contact Studio
              </button>
              <button
                onClick={() => {
                  setActiveTab('assets');
                  scrollToTop();
                }}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 text-left cursor-pointer transition-colors"
              >
                Source Image Assets & ZIP (43)
              </button>
              <button
                onClick={() => {
                  setActiveTab('code');
                  scrollToTop();
                }}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 text-left cursor-pointer transition-colors"
              >
                Download HTML & CSS Source
              </button>
            </div>
          </div>

          {/* Coordinates & Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
              Direct Contact
            </div>
            <div className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
              <div>{RESUME_DATA.email}</div>
              <div>{RESUME_DATA.phone}</div>
              <div>Pune, Maharashtra, India</div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white cursor-pointer transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 dark:text-neutral-500">
          <div>
            © {new Date().getFullYear()} Vaidehi Dhumal. All drawings, plans & photographs copyright.
          </div>
          <div className="flex items-center gap-3">
            <span>Fast Load Times</span>
            <span>·</span>
            <span>Minimalist Grid Architecture</span>
            <span>·</span>
            <span>Fully Responsive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
