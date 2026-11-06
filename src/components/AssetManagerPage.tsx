import React, { useState } from 'react';
import { Download, Copy, Check, FileArchive, FileText, ExternalLink, Image, Search, Filter } from 'lucide-react';

interface AssetItem {
  page: number;
  fileName: string;
  path: string;
  title: string;
  project: string;
  category: string;
  drawingType: string;
}

const ALL_ASSETS: AssetItem[] = [
  { page: 1, fileName: 'p01.jpg', path: '/assets/portfolio/p01.jpg', title: 'Cover: Vaidehi Dhumal Architectural Portfolio', project: 'Portfolio Cover', category: 'Cover', drawingType: 'Cover' },
  { page: 2, fileName: 'p02.jpg', path: '/assets/portfolio/p02.jpg', title: 'Thesis: Visava: A Resting Place Hero Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 3, fileName: 'p03.jpg', path: '/assets/portfolio/p03.jpg', title: 'Visava Introduction: Climate, Sun & Wind, Site Brief', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 4, fileName: 'p04.jpg', path: '/assets/portfolio/p04.jpg', title: 'Visava Master Site Plan & 17-Zone Legend', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 5, fileName: 'p05.jpg', path: '/assets/portfolio/p05.jpg', title: 'Administration & Healthcare Plans & Longitudinal Section AA', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 6, fileName: 'p06.jpg', path: '/assets/portfolio/p06.jpg', title: 'Administration & Healthcare 3D Sunlit Perspective', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 7, fileName: 'p07.jpg', path: '/assets/portfolio/p07.jpg', title: 'Treatment Rooms: Female (Ground, 1st, 2nd Floor Plans)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 8, fileName: 'p08.jpg', path: '/assets/portfolio/p08.jpg', title: 'Female Treatment: Axonometric View, Section & Pebble/Physio Renders', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Axonometric' },
  { page: 9, fileName: 'p09.jpg', path: '/assets/portfolio/p09.jpg', title: 'Treatment Rooms: Male (Floor Plans, Front Elevation & Section AA)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Elevation' },
  { page: 10, fileName: 'p10.jpg', path: '/assets/portfolio/p10.jpg', title: 'Male Treatment: Double-Height Courtyard & Stepwell Renders', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 11, fileName: 'p11.jpg', path: '/assets/portfolio/p11.jpg', title: 'Single Occupancy Rooms (Floor Plans, Section & Elevation)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 12, fileName: 'p12.jpg', path: '/assets/portfolio/p12.jpg', title: 'Single Occupancy Dusk Architectural Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 13, fileName: 'p13.jpg', path: '/assets/portfolio/p13.jpg', title: 'Double Occupancy Rooms (Plans, Axonometric, Section & Interior Render)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Axonometric' },
  { page: 14, fileName: 'p14.jpg', path: '/assets/portfolio/p14.jpg', title: 'Dorm Rooms (Floor Plan, Section AA, Elevation & Bunk Room Render)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 15, fileName: 'p15.jpg', path: '/assets/portfolio/p15.jpg', title: 'Dorm Rooms Clustered in Landscape Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 16, fileName: 'p16.jpg', path: '/assets/portfolio/p16.jpg', title: 'Dining Hall (Ground Floor Plan, Elevation, Exterior & Interior Renders)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Plan' },
  { page: 17, fileName: 'p17.jpg', path: '/assets/portfolio/p17.jpg', title: 'Private Villa Architecture (Plans, Section AA, Elevation & Axonometric)', project: 'Visava Wellness Center', category: 'Thesis', drawingType: 'Axonometric' },
  { page: 18, fileName: 'p18.jpg', path: '/assets/portfolio/p18.jpg', title: 'Villa Garden Cluster & Central Gazebo Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 19, fileName: 'p19.jpg', path: '/assets/portfolio/p19.jpg', title: 'Visava Coastal Bird\'s Eye Panorama Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 20, fileName: 'p20.jpg', path: '/assets/portfolio/p20.jpg', title: 'Visava Central Pedestrian Avenue Towards Sea Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 21, fileName: 'p21.jpg', path: '/assets/portfolio/p21.jpg', title: 'Visava Jogging & Walking Trail Under Coconut Canopy Render', project: 'Visava Wellness Center', category: 'Thesis', drawingType: '3D Render' },
  { page: 22, fileName: 'p22.jpg', path: '/assets/portfolio/p22.jpg', title: 'Internship Work Cover (Yashoda Joshi Architects)', project: 'Professional Work', category: 'Cover', drawingType: 'Cover' },
  { page: 23, fileName: 'p23.jpg', path: '/assets/portfolio/p23.jpg', title: 'Kalashree 2nd Floor Terrace MS Railing Fabrication Drawing & Site Photos', project: 'Kalashree Villa', category: 'Working Drawings', drawingType: 'Detail' },
  { page: 24, fileName: 'p24.jpg', path: '/assets/portfolio/p24.jpg', title: 'Kalashree Internal Staircase Detailing & On-Site Fabrication Photos', project: 'Kalashree Villa', category: 'Working Drawings', drawingType: 'Detail' },
  { page: 25, fileName: 'p25.jpg', path: '/assets/portfolio/p25.jpg', title: 'Kalashree North-West Villa Elevation Drawing with Brick Jali', project: 'Kalashree Villa', category: 'Working Drawings', drawingType: 'Elevation' },
  { page: 26, fileName: 'p26.jpg', path: '/assets/portfolio/p26.jpg', title: 'Kalashree Villa Contextual Urban Streetscape 3D Render', project: 'Kalashree Villa', category: 'Working Drawings', drawingType: '3D Render' },
  { page: 27, fileName: 'p27.jpg', path: '/assets/portfolio/p27.jpg', title: 'Vaishwik Arts 2nd Floor & Terrace Demolition Working Plans', project: 'Vaishwik Arts & Environment', category: 'Adaptive Reuse', drawingType: 'Plan' },
  { page: 28, fileName: 'p28.jpg', path: '/assets/portfolio/p28.jpg', title: 'Vaishwik Arts Proposed 2nd Floor Gallery & Terrace Plans', project: 'Vaishwik Arts & Environment', category: 'Adaptive Reuse', drawingType: 'Plan' },
  { page: 29, fileName: 'p29.jpg', path: '/assets/portfolio/p29.jpg', title: 'Vaishwik Arts Structural Sections A, B, C & D (Timber & Steel Columns)', project: 'Vaishwik Arts & Environment', category: 'Adaptive Reuse', drawingType: 'Section' },
  { page: 30, fileName: 'p30.jpg', path: '/assets/portfolio/p30.jpg', title: 'Vaishwik Arts Massing Models: Existing Shell vs External Steel Lift Tower', project: 'Vaishwik Arts & Environment', category: 'Adaptive Reuse', drawingType: 'Axonometric' },
  { page: 31, fileName: 'p31.jpg', path: '/assets/portfolio/p31.jpg', title: 'Amravati Bungalow Ground Floor & First Floor Plans', project: 'Amravati Bungalow', category: 'Residential', drawingType: 'Plan' },
  { page: 32, fileName: 'p32.jpg', path: '/assets/portfolio/p32.jpg', title: 'Amravati Bungalow Second Floor & Terrace Floor Plans', project: 'Amravati Bungalow', category: 'Residential', drawingType: 'Plan' },
  { page: 33, fileName: 'p33.jpg', path: '/assets/portfolio/p33.jpg', title: 'Amravati Bungalow 4 Photorealistic Exterior 3D Perspective Renders', project: 'Amravati Bungalow', category: 'Residential', drawingType: '3D Render' },
  { page: 34, fileName: 'p34.jpg', path: '/assets/portfolio/p34.jpg', title: 'Krushnakunj Ground Floor Toilet Working Detail Plans (1:25 Scale)', project: 'Krushnakunj Toilet Detailing', category: 'Working Drawings', drawingType: 'Detail' },
  { page: 35, fileName: 'p35.jpg', path: '/assets/portfolio/p35.jpg', title: 'Krushnakunj Toilet Sections AA & BB with Sanitary Fixture Heights (1:25)', project: 'Krushnakunj Toilet Detailing', category: 'Working Drawings', drawingType: 'Section' },
  { page: 36, fileName: 'p36.jpg', path: '/assets/portfolio/p36.jpg', title: 'Balcony Elevation & MS Grill Door Details with Pleated Mesh Options', project: 'Balcony & Joinery Detailing', category: 'Working Drawings', drawingType: 'Detail' },
  { page: 37, fileName: 'p37.jpg', path: '/assets/portfolio/p37.jpg', title: 'Kitchen Renovation Project Completed Site Photography & Joinery', project: 'Kitchen Renovation', category: 'Interior', drawingType: 'Site Photo' },
  { page: 38, fileName: 'p38.jpg', path: '/assets/portfolio/p38.jpg', title: 'Swan Lake Apartment Toilet Working Plan & Sanitary Fixture Schedule (1:25)', project: 'Swan Lake Apartment', category: 'Interior', drawingType: 'Plan' },
  { page: 39, fileName: 'p39.jpg', path: '/assets/portfolio/p39.jpg', title: 'Swan Lake Apartment Toilet Longitudinal Section & Dado Tile Elevations', project: 'Swan Lake Apartment', category: 'Interior', drawingType: 'Section' },
  { page: 40, fileName: 'p40.jpg', path: '/assets/portfolio/p40.jpg', title: 'Swan Lake Bathroom Renovation Completed Photos & 3D Axonometric Model', project: 'Swan Lake Apartment', category: 'Interior', drawingType: 'Site Photo' },
  { page: 41, fileName: 'p41.jpg', path: '/assets/portfolio/p41.jpg', title: 'Swan Lake Secondary Toilet Plan & Sections (Innova Azul & Blanco Tiles)', project: 'Swan Lake Apartment', category: 'Interior', drawingType: 'Section' },
  { page: 42, fileName: 'p42.jpg', path: '/assets/portfolio/p42.jpg', title: 'Swan Lake Master Electrical Layout & Switchboard Schedules (SB01 to SB10)', project: 'Swan Lake Apartment', category: 'Interior', drawingType: 'Electrical' },
  { page: 43, fileName: 'p43.jpg', path: '/assets/portfolio/p43.jpg', title: 'Completed Apartment Handover Site Photos (Bathroom & Bedroom)', project: 'Swan Lake Apartment', category: 'Interior', drawingType: 'Site Photo' },
];

export const AssetManagerPage: React.FC = () => {
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(window.location.origin + path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  const filteredAssets = ALL_ASSETS.filter((item) => {
    const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter || item.project === selectedFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-10 max-w-7xl mx-auto py-6">
      {/* Top Banner & Quick Download Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 text-neutral-100 dark:bg-neutral-900 border border-neutral-800 space-y-6 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              <span>Source Media Repository</span>
              <span aria-hidden="true">·</span>
              <span>43 High-Resolution JPEG Files</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              Portfolio Image Asset Library
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
              Every architectural sheet, floor plan, elevation, section, 3D visualization, and on-site construction photo from your updated portfolio (<span className="font-mono text-xs">web_port_ab212422.pdf</span>) is extracted, organized, and available for download.
            </p>
          </div>

          {/* Action Download Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/assets/vaidehi_dhumal_portfolio_assets.zip"
              download="vaidehi_dhumal_all_portfolio_assets.zip"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-white text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer shadow-sm"
            >
              <FileArchive className="w-4 h-4 text-neutral-900" />
              <span>Download All 43 Assets (.ZIP)</span>
            </a>

            <a
              href="/assets/aistudio/web_port_ab212422.pdf"
              download="Vaidehi_Dhumal_Updated_Portfolio.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg border border-neutral-700 text-neutral-200 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Full PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
          {['all', 'Thesis', 'Residential', 'Interior', 'Working Drawings', 'Adaptive Reuse'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
              }`}
            >
              {cat === 'all' ? 'All Files (43)' : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search sheets, plans, files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
      </div>

      {/* Grid of All Asset Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAssets.map((asset) => (
          <div
            key={asset.page}
            className="group flex flex-col justify-between bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs"
          >
            {/* Image Preview Box */}
            <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
              <img
                src={asset.path}
                alt={asset.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2.5 left-2.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950/80 text-white backdrop-blur-xs">
                  Page {String(asset.page).padStart(2, '0')}
                </span>
              </div>
              <div className="absolute top-2.5 right-2.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950/80 text-neutral-300 backdrop-blur-xs">
                  {asset.drawingType}
                </span>
              </div>
            </div>

            {/* Asset Metadata */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1 truncate">
                  {asset.project}
                </div>
                <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-2 leading-snug">
                  {asset.title}
                </h3>
              </div>

              {/* Actions: Download Single Image & Copy URL */}
              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-neutral-400">
                  {asset.fileName}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyPath(asset.path)}
                    title="Copy Image URL"
                    className="p-1.5 rounded text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    {copiedPath === asset.path ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={asset.path}
                    download={`Vaidehi_Dhumal_${asset.fileName}`}
                    title="Download High-Res Image"
                    className="p-1.5 rounded text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={asset.path}
                    target="_blank"
                    rel="noreferrer"
                    title="Open Fullscreen in New Tab"
                    className="p-1.5 rounded text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
