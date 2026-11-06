import React, { useState } from 'react';
import { Download, ExternalLink, Mail, Phone, MapPin, Building, GraduationCap, CheckCircle2, FileText, Eye } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumePageProps {
  onNavigateToContact: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onNavigateToContact }) => {
  const [showOriginalDocument, setShowOriginalDocument] = useState(false);

  return (
    <div className="space-y-12 max-w-5xl mx-auto py-6">
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-1">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>Architectural Practice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
            {RESUME_DATA.name}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
            {RESUME_DATA.title} · MMCOA B.Arch (2020 – 2025)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowOriginalDocument(!showOriginalDocument)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>{showOriginalDocument ? 'Hide Original Document' : 'View Original Document'}</span>
          </button>

          <a
            href={RESUME_DATA.pdfPath}
            download="Vaidehi_Dhumal_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white transition-colors cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>

      {/* Optional Side-by-Side Original Document Preview Toggle */}
      {showOriginalDocument && (
        <div className="p-4 sm:p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Scanned Official Document Preview
            </span>
            <a
              href={RESUME_DATA.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:underline flex items-center gap-1"
            >
              <span>Open raw PDF</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex justify-center bg-white dark:bg-neutral-950 p-2 sm:p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-inner">
            <img
              src="/assets/resume/resume_p01.jpg"
              alt="Vaidehi Dhumal Resume Document"
              referrerPolicy="no-referrer"
              className="max-w-full sm:max-w-2xl h-auto rounded shadow-sm"
            />
          </div>
        </div>
      )}

      {/* Structured Minimalist Architectural CV */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Bio, Contact, Competencies & Software (4 Cols) */}
        <div className="md:col-span-4 space-y-8">
          {/* Contact Coordinates */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Direct Coordinates
            </h3>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span className="truncate">{RESUME_DATA.email}</span>
              </a>
              <a
                href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{RESUME_DATA.phone}</span>
              </a>
              <div className="flex items-center gap-2.5 text-neutral-700 dark:text-neutral-300">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>{RESUME_DATA.location}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800">
              <button
                onClick={onNavigateToContact}
                className="w-full py-2 text-xs font-semibold uppercase tracking-wider text-center rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Software Proficiency */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Software & Digital Tools
            </h3>
            <div className="space-y-3">
              {RESUME_DATA.software.map((sw, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {sw.name}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400">{sw.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-neutral-800 dark:bg-neutral-200 rounded-full transition-all duration-500"
                      style={{ width: `${sw.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies (Zero-pill clean unboxed list) */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Core Competencies
            </h3>
            <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
              {RESUME_DATA.coreCompetencies.map((comp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                  <span>{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Languages
            </h3>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {RESUME_DATA.languages.join(' · ')}
            </div>
          </div>
        </div>

        {/* Right Column: Career Objective, Experience, Education (8 Cols) */}
        <div className="md:col-span-8 space-y-10">
          {/* Career Objective */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              01. Career Objective & Profile
            </h2>
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed">
                {RESUME_DATA.careerObjective}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {RESUME_DATA.bio}
              </p>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              02. Professional Experience
            </h2>

            <div className="space-y-6">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50 font-['Outfit']">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        <Building className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{exp.company}</span>
                        <span aria-hidden="true">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:self-start">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-neutral-400 dark:text-neutral-600 mt-1">―</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              03. Education & Academic Background
            </h2>

            <div className="space-y-4">
              {RESUME_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50 font-['Outfit']">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        <GraduationCap className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{edu.institution}</span>
                        <span aria-hidden="true">·</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:self-start">
                      {edu.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-neutral-400 dark:text-neutral-600 mt-1">―</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
