import React, { useState } from 'react';
import { Layers, ArrowRight, Compass, Maximize2, FileText, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS, CATEGORIES, PortfolioProject } from '../data/portfolioData';

interface ProjectGridProps {
  onSelectProject: (project: PortfolioProject, sheetIndex?: number) => void;
  onNavigateToResume: () => void;
  onNavigateToContact: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  onSelectProject,
  onNavigateToResume,
  onNavigateToContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'projects' | 'sheets'>('projects');

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  // Flatten sheets if sheet view mode is selected
  const allSheets = filteredProjects.flatMap((project) =>
    project.sheets.map((sheet, idx) => ({
      ...sheet,
      project,
      sheetIndex: idx,
    }))
  );

  return (
    <div className="space-y-16">
      {/* Editorial Architectural Hero Header */}
      <section className="relative pt-6 sm:pt-12 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl">
          {/* Unboxed natural editorial kicker */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
            <span>Architectural Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Selected Works 2020 – 2025</span>
            <span aria-hidden="true">·</span>
            <span>Pune, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 font-['Outfit'] leading-[1.1] text-balance">
            Versatile spatial design rooted in vernacular context & construction rigor.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
            Vaidehi Dhumal is an architecture graduate and Junior Architect at Yashoda Joshi Architects.
            Specializing in climate-responsive healthcare retreats, technical working documentation,
            interior joinery, adaptive reuse, and tactile physical form exploration.
          </p>

          {/* Quick Metrics Bar (Adjacent claim to proof) */}
          <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-neutral-100">
                06
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Core Architectural Typologies
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-neutral-100">
                40+
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Technical Sheets & Renders
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-neutral-100">
                MMCOA
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                B.Arch (2020 – 2025)
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono tabular-nums text-neutral-900 dark:text-neutral-100">
                YJA
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Junior Architect & Intern
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar & View Mode Segmented Controls */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Category Filters (Clean Segmented Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold shadow-xs'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-200/70 dark:hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* View Switcher: Complete Projects vs Granular Sheets */}
        <div className="flex items-center gap-1 p-1 bg-neutral-200/60 dark:bg-neutral-900 rounded-lg self-start sm:self-auto shrink-0">
          <button
            onClick={() => setViewMode('projects')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              viewMode === 'projects'
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xs'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            Project Volumes ({filteredProjects.length})
          </button>
          <button
            onClick={() => setViewMode('sheets')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              viewMode === 'sheets'
                ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-xs'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
            }`}
          >
            All Drawings & Sheets ({allSheets.length})
          </button>
        </div>
      </section>

      {/* Main Project Bento Gallery */}
      {viewMode === 'projects' ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            // First project gets wide prominent Bento prominence
            const isFeatured = index === 0 && selectedCategory === 'all';
            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between bg-white dark:bg-neutral-900/70 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 shadow-xs hover:shadow-md ${
                  isFeatured ? 'md:col-span-12 lg:grid lg:grid-cols-12 lg:gap-8' : 'md:col-span-6'
                }`}
              >
                {/* Visual Thumbnail Showcase */}
                <div
                  className={`relative overflow-hidden bg-neutral-100 dark:bg-neutral-950 cursor-pointer ${
                    isFeatured ? 'lg:col-span-7 h-72 sm:h-96 lg:h-full min-h-[320px]' : 'h-64 sm:h-72'
                  }`}
                  onClick={() => onSelectProject(project, 0)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Sheet Count Pill & Quick Zoom Icon */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-950/80 text-white backdrop-blur-xs border border-white/10">
                      {project.sheets.length} Sheets
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                      {project.typology}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Inspect Drawings</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div
                  className={`p-6 sm:p-8 flex flex-col justify-between ${
                    isFeatured ? 'lg:col-span-5' : ''
                  }`}
                >
                  <div>
                    {/* Unboxed Metadata Line (Zero-Pill discipline) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 mb-2">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                    </div>

                    <h2
                      onClick={() => onSelectProject(project, 0)}
                      className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 font-['Outfit'] hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer transition-colors"
                    >
                      {project.title}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    {/* Software & Tools */}
                    <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                        Drafting & Modeling Stack
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-neutral-600 dark:text-neutral-300">
                        {project.software.map((sw, i) => (
                          <span key={i} className="flex items-center gap-1.5">
                            {i > 0 && <span className="text-neutral-400">/</span>}
                            <span>{sw}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Sheet Preview Ribbon */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1 overflow-x-auto py-1">
                      {project.sheets.slice(0, 4).map((sheet, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => onSelectProject(project, sIdx)}
                          title={`Sheet ${sIdx + 1}: ${sheet.title}`}
                          className="shrink-0 w-10 h-8 rounded border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:ring-2 hover:ring-neutral-400 cursor-pointer"
                        >
                          <img
                            src={sheet.image}
                            alt={sheet.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                      {project.sheets.length > 4 && (
                        <span className="text-[11px] font-mono text-neutral-400 pl-1">
                          +{project.sheets.length - 4} more
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectProject(project, 0)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 cursor-pointer whitespace-nowrap shrink-0 group/btn"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Sheet-by-Sheet Granular Minimalist Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSheets.map((sheet, index) => (
            <div
              key={index}
              onClick={() => onSelectProject(sheet.project, sheet.sheetIndex)}
              className="group bg-white dark:bg-neutral-900/60 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all cursor-pointer shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
                <img
                  src={sheet.image}
                  alt={sheet.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-950/80 text-white backdrop-blur-xs">
                    {sheet.drawingType}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 rounded bg-neutral-950/80 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                  {sheet.project.title}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                  {sheet.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                  {sheet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Editorial Monograph Section: About the Practice & Design Philosophy */}
      <section className="mt-20 pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              01. Architectural Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-neutral-900 dark:text-neutral-50">
              From foundational detailing to bioclimatic master planning.
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Architecture thrives at the intersection of tactile material reality and human well-being.
              Whether detailing a 10mm solid mild steel railing on a fair-faced brick balcony or resolving
              the microclimatic ventilation of a coastal wellness retreat, every project reflects careful
              spatial proportion and rigorous on-site coordination.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onNavigateToResume}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                View Complete Resume
              </button>
              <button
                onClick={onNavigateToContact}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Inquire for Collaboration
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Technical Working Drawings
              </h4>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Precise AutoCAD and Revit schedules covering joinery, door/window details, staircases,
                electrical layouts, and structural demolition plans executed in live projects with Yashoda Joshi Architects.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Sustainable Vernacular Design
              </h4>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Passive cooling strategies, perforated brick jali screens, natural lighting courtyards,
                and locally sourced masonry suited to India’s varied tropical microclimates.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Site Supervision & Execution
              </h4>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Active on-site coordination with contractors, fabricators, and carpenters from
                substructure foundation works through finished interior handovers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                Physical & 3D Visualization
              </h4>
              <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Proficiency bridging handcrafted foam topographic contour models with high-fidelity
                Enscape and Blue Moon AI architectural renderings for client presentations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
