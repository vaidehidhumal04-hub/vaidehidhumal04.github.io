import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Download, ExternalLink, Compass } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface ProjectLightboxProps {
  project: PortfolioProject;
  initialSheetIndex?: number;
  onClose: () => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  initialSheetIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialSheetIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSheet = project.sheets[currentIndex] || project.sheets[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentIndex, project.sheets.length]);

  const handleNext = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev + 1) % project.sheets.length);
  };

  const handlePrev = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev - 1 + project.sheets.length) % project.sheets.length);
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.75 : 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-neutral-950/95 backdrop-blur-lg text-neutral-100 animate-fadeIn">
      {/* Lightbox Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800 bg-neutral-950/80">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
              Sheet {String(currentIndex + 1).padStart(2, '0')} / {String(project.sheets.length).padStart(2, '0')}
            </span>
            <span className="hidden sm:inline-block text-xs font-medium px-2 py-0.5 rounded border border-neutral-700 text-neutral-300">
              {currentSheet.drawingType}
            </span>
          </div>
          <div className="truncate">
            <span className="text-xs font-mono uppercase text-neutral-400 mr-2">{project.title}</span>
            <span className="text-sm font-semibold text-white truncate hidden md:inline">
              — {currentSheet.title}
            </span>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleZoom}
            title={zoomLevel === 1 ? 'Zoom in' : 'Reset zoom'}
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
          >
            {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
          </button>
          <a
            href={currentSheet.image}
            download={`${project.id}-sheet-${currentIndex + 1}.jpg`}
            title="Download high-res sheet image"
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            aria-label="Close viewer"
            className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden select-none">
        {/* Navigation Arrow Left */}
        {project.sheets.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Previous sheet"
            className="absolute left-3 sm:left-6 z-10 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Active Sheet Image */}
        <div
          className={`relative max-h-full max-w-full flex items-center justify-center transition-transform duration-200 cursor-${
            zoomLevel > 1 ? 'zoom-out' : 'zoom-in'
          }`}
          onClick={toggleZoom}
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={currentSheet.image}
            alt={`${project.title} - ${currentSheet.title}`}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] md:max-h-[80vh] w-auto max-w-full object-contain rounded shadow-2xl border border-neutral-800"
          />
        </div>

        {/* Navigation Arrow Right */}
        {project.sheets.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Next sheet"
            className="absolute right-3 sm:right-6 z-10 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom Sheet Information & Thumbnail Ribbon */}
      <div className="bg-neutral-950 border-t border-neutral-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-white">{currentSheet.title}</h4>
              <span className="text-neutral-500 text-xs">·</span>
              <span className="text-xs text-neutral-400">{project.typology}</span>
            </div>
            <p className="text-xs text-neutral-400 max-w-3xl leading-relaxed">
              {currentSheet.description}
            </p>
            {currentSheet.specs && currentSheet.specs.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-[11px] text-neutral-500">
                {currentSheet.specs.map((spec, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-neutral-600" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Miniature Thumbnail Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full md:max-w-md shrink-0">
            {project.sheets.map((sheet, index) => (
              <button
                key={index}
                onClick={() => {
                  setZoomLevel(1);
                  setCurrentIndex(index);
                }}
                className={`relative shrink-0 w-12 h-9 rounded overflow-hidden border transition-all cursor-pointer ${
                  currentIndex === index
                    ? 'border-white ring-1 ring-white/50 scale-105'
                    : 'border-neutral-800 opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={sheet.image}
                  alt={`Thumbnail ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
