export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'thesis' | 'residential' | 'renovation' | 'details' | 'electrical';
  categoryLabel: string;
  year: string;
  firmOrContext: string;
  location: string;
  typology: string;
  software: string[];
  thumbnail: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
  shortDesc: string;
  fullDesc: string;
  sheets: {
    title: string;
    description: string;
    image: string;
    drawingType: 'Plan' | 'Section' | 'Elevation' | 'Axonometric' | '3D Render' | 'Detail' | 'Site Photo' | 'Electrical';
    specs?: string[];
  }[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'thesis', label: 'Thesis: Visava Retreat' },
  { id: 'residential', label: 'Residential Architecture (Amravati & Kalashree)' },
  { id: 'renovation', label: 'Flat & Kitchen Renovations' },
  { id: 'details', label: 'Plumbing & Construction Detailing' },
  { id: 'electrical', label: 'Electrical Layouts & Working Drawings' },
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'visava-wellness-center',
    title: 'Visava : The Wellness Center',
    subtitle: 'A Serene Coastal Healing & Wellness Retreat',
    category: 'thesis',
    categoryLabel: 'Thesis / Wellness & Hospitality',
    year: '2024 – 2025',
    firmOrContext: 'B.Arch Thesis Project (MMCOA)',
    location: 'Diveagar, Shrivardhan, Raigad, Maharashtra',
    typology: 'Healthcare, Hospitality & Holistic Wellness',
    software: ['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop', 'Blue Moon AI'],
    thumbnail: '/assets/portfolio/p02.jpg',
    aspectRatio: 'wide',
    shortDesc: 'A comprehensive wellness retreat in coastal Diveagar designed to provide holistic therapy, relaxation, and reconnection with nature through earth-brick vernacular and courtyards.',
    fullDesc: 'Located along the coast of Diveagar, Visava offers a tranquil escape from urban stresses. Surrounded by betel nut groves, coconut palms, and maritime breezes, the design incorporates climate-responsive passive cooling, natural ventilation through light shafts and courtyards, local brick construction, and earthen vernacular aesthetics. The master plan weaves healthcare facilities, gender-specific therapy complexes, communal dining, amphitheaters, and distinct lodging types along winding green avenues.',
    sheets: [
      {
        title: 'Arrival & Village Atmosphere',
        description: 'Atmospheric perspective showing guest pathways weaving between brick cottage clusters and native coastal flora.',
        image: '/assets/portfolio/p02.jpg',
        drawingType: '3D Render',
        specs: ['Pitched Mangalore tile roofs', 'Red exposed brickwork', 'Lush coconut grove setting']
      },
      {
        title: 'Context, Climate & Site Analysis',
        description: 'Regional accessibility connecting Mumbai and Pune, local transport routes, microclimatic sun path, wind patterns, and native flora study.',
        image: '/assets/portfolio/p03.jpg',
        drawingType: 'Plan',
        specs: ['Site: Diveagar village', 'Flora: Betel nut, Coconut, Mango', 'Proximity: 2km to Diveagar Beach']
      },
      {
        title: 'Master Site Plan',
        description: 'Overall layout featuring 17 distinct functional zones connected along an 18m primary axis with walking paths, amphitheatre, and central pool.',
        image: '/assets/portfolio/p04.jpg',
        drawingType: 'Plan',
        specs: ['Scale: 1:500 Master Plan', 'Zoning: Treatment, Dining, Accommodation, Recreation', 'Pedestrian-friendly green spine']
      },
      {
        title: 'Administration & Healthcare Center Plans & Section',
        description: 'Ground and first floor architectural layouts with longitudinal Section AA illustrating double-height reception and consulting suites.',
        image: '/assets/portfolio/p05.jpg',
        drawingType: 'Plan',
        specs: ['Admin Area: 290 sq.m', 'Healthcare Area: 310 sq.m', 'Section AA with 6m roof level']
      },
      {
        title: 'Admin & Healthcare Center Exterior Perspective',
        description: 'Sunlit approach to the administration wing showcasing exposed brick facades, clay tile hipped roofs, and landscaped entry plaza.',
        image: '/assets/portfolio/p06.jpg',
        drawingType: '3D Render',
        specs: ['Terracotta tiled veranda', 'Courtyard fountain', 'Native royal palms']
      },
      {
        title: 'Female Treatment Complex Floor Plans',
        description: 'Multi-level architectural plans featuring dedicated rooms for acupressure, acupuncture, hydrotherapy, spinal baths, steam, sauna, and central courtyard.',
        image: '/assets/portfolio/p07.jpg',
        drawingType: 'Plan',
        specs: ['Total Area: 847 sq.m', 'Ground, First & Second Floor Plans', 'Courtyard-centric layout']
      },
      {
        title: 'Female Treatment Center Axonometric & Interior Renders',
        description: 'Exploded three-story axonometric drawing alongside cross-section AA and renders of the tactile pebble walking room and physiotherapy studio.',
        image: '/assets/portfolio/p08.jpg',
        drawingType: 'Axonometric',
        specs: ['Exploded structural levels', 'Pebble sensory therapy zone', 'Natural skylight integration']
      },
      {
        title: 'Male Treatment Center Plans, Elevation & Section',
        description: 'Architectural documentation showing functional zoning, internal circulation stairs, front elevation, and section highlighting central air shaft.',
        image: '/assets/portfolio/p09.jpg',
        drawingType: 'Elevation',
        specs: ['Area: 847 sq.m', 'Pitched roof with glass skylight', 'Masonry loadbearing structure']
      },
      {
        title: 'Internal Atrium & Green Courtyards',
        description: 'Double-height sunken courtyard views with stepped brick seating, natural turf lawn, and overhead clerestory illumination.',
        image: '/assets/portfolio/p10.jpg',
        drawingType: '3D Render',
        specs: ['Warm exposed brick finishes', 'Sunken meditation stepwell', 'Filtered indirect daylighting']
      },
      {
        title: 'Single Occupancy Cottages',
        description: 'Floor plans, cross section, and elevation for individual guest retreats featuring staggered massing and private verandas.',
        image: '/assets/portfolio/p11.jpg',
        drawingType: 'Plan',
        specs: ['Area: 200 sq.m per block', 'Duplex staggered massing', 'Cross-ventilation layout']
      },
      {
        title: 'Single Occupancy Exterior Dusk View',
        description: 'Warm evening visualization highlighting the rhythm of brick volumes, recessed entries, and deep eaves.',
        image: '/assets/portfolio/p12.jpg',
        drawingType: '3D Render',
        specs: ['Dusk lighting simulation', 'Pedestrian pathway lighting', 'Integrated tree canopy']
      },
      {
        title: 'Double Occupancy Rooms',
        description: 'Floor plans, exploded axonometric volume, elevation, and warm interior bedroom visualization for couples and families.',
        image: '/assets/portfolio/p13.jpg',
        drawingType: 'Axonometric',
        specs: ['Area: 225 sq.m', 'Central lobby with dual suites', 'Interior wood & brick bedroom finish']
      },
      {
        title: 'Dormitory Units',
        description: 'Compact 150 sq.m communal lodge designed for retreat groups, complete with bunk bed spatial layouts, cross-section, and interior render.',
        image: '/assets/portfolio/p14.jpg',
        drawingType: 'Plan',
        specs: ['Area: 150 sq.m', 'Cross ventilation section', 'Group living spatial planning']
      },
      {
        title: 'Dormitory Clusters in Landscape',
        description: 'Curved concrete walkway winding past vernacular red-tile cottages under coastal coconut trees.',
        image: '/assets/portfolio/p15.jpg',
        drawingType: '3D Render',
        specs: ['Low-rise massing', 'Generous setback greens', 'Local climate-responsive roof eaves']
      },
      {
        title: 'Dining Hall & Communal Gathering',
        description: '420 sq.m open dining hall layout with commercial kitchen, elevation, exterior view, and sun-drenched interior dining render.',
        image: '/assets/portfolio/p16.jpg',
        drawingType: 'Plan',
        specs: ['Area: 420 sq.m', 'Capacity: 80+ guests', 'Full-height daylight apertures']
      },
      {
        title: 'Private Villa Architecture',
        description: 'Two-story private luxury villa plans, section, elevation, and exploded axonometric breakdown.',
        image: '/assets/portfolio/p17.jpg',
        drawingType: 'Axonometric',
        specs: ['Area: 60 sq.m footprint', 'Two-tier bedroom layout', 'Private rear garden access']
      },
      {
        title: 'Villa Garden Cluster & Central Gazebo',
        description: 'Clustered villa arrangement centered on a landscaped garden gazebo where guests gather in the evening.',
        image: '/assets/portfolio/p18.jpg',
        drawingType: '3D Render',
        specs: ['Community gazebo hub', 'Flowering shrubbery borders', 'Pedestrian-only inner sanctuary']
      },
      {
        title: 'Coastal Bird\'s Eye Panorama',
        description: 'Aerial perspective overlooking the entire Visava complex sloping down towards the Arabian Sea horizon.',
        image: '/assets/portfolio/p19.jpg',
        drawingType: '3D Render',
        specs: ['Comprehensive master view', 'Integrated solar roof elements', 'Coastal dune proximity']
      },
      {
        title: 'Central Avenue Towards the Sea',
        description: 'Axial pedestrian vista framed by mirrored treatment facilities looking through towards the western coast.',
        image: '/assets/portfolio/p20.jpg',
        drawingType: '3D Render',
        specs: ['Axial sightline design', 'Natural boulder landscaping', 'Low-profile bollard lighting']
      },
      {
        title: 'Wellness Jogging Trail & Canopy',
        description: 'Lush tree-shaded perimeter trail designed for morning jogging, walking meditation, and coastal jogging.',
        image: '/assets/portfolio/p21.jpg',
        drawingType: '3D Render',
        specs: ['Coconut grove understory', 'Permeable pavement', 'Active wellness amenity']
      }
    ]
  },
  {
    id: 'amravati-bungalow',
    title: 'Amravati Bungalow',
    subtitle: 'Multi-Storey Private Residence & 3D Visualization',
    category: 'residential',
    categoryLabel: 'Residential / Bungalow Planning',
    year: '2024 – Present',
    firmOrContext: 'Yashoda Joshi Architects (Junior Architect)',
    location: 'Amravati / Maharashtra',
    typology: 'Private Residence & Spatial Planning',
    software: ['AutoCAD', 'SketchUp', 'Enscape'],
    thumbnail: '/assets/portfolio/p33.jpg',
    aspectRatio: 'square',
    shortDesc: 'Comprehensive architectural planning for a multi-level contemporary bungalow featuring staggered cantilevered balconies, terracotta accents, open terrace lounges, and detailed functional zoning.',
    fullDesc: 'Amravati Bungalow is a multi-level residential design tailored to contemporary family living while responding to local climatic demands. The layout organizes open-plan living and dining spaces, an interconnected modular kitchen with backyard utility, ground and upper-floor en-suite bedrooms, open-air garden terraces, and integrated parking. The massing features crisp white volumes accented by bold terracotta red boundary walls, deep-set shaded apertures, and landscaped terrace gardens.',
    sheets: [
      {
        title: 'Ground Floor & First Floor Plans',
        description: 'Comprehensive architectural layouts detailing living & dining hall, kitchen with backyard utilities, Bedroom I & II, parking bay, and underground septic provisions.',
        image: '/assets/portfolio/p31.jpg',
        drawingType: 'Plan',
        specs: ['Ground Level: +0.45m & +0.75m', 'Living & Dining: 14\'x12\'7"', 'Integrated staircase storage']
      },
      {
        title: 'Second Floor & Terrace Floor Plans',
        description: 'Upper floor spatial layouts including master bedroom suite, dual terraces (100 sq.ft & 300 sq.ft), and overhead covered water tank structure.',
        image: '/assets/portfolio/p32.jpg',
        drawingType: 'Plan',
        specs: ['Terrace I: 100 SQFT', 'Terrace II: 300 SQFT lounge', 'North-oriented ventilation']
      },
      {
        title: 'Photorealistic Exterior 3D Visualizations',
        description: 'Four multi-angle architectural perspective renders highlighting geometric volumetric setbacks, warm terracotta boundary treatments, and balcony railings.',
        image: '/assets/portfolio/p33.jpg',
        drawingType: '3D Render',
        specs: ['Staggered cubic massing', 'Terracotta masonry perimeter', 'Outdoor shaded balconies']
      }
    ]
  },
  {
    id: 'swan-lake-apartment-renovation',
    title: 'Swan Lake Apartment Renovation',
    subtitle: 'Interior Transformation, Sanitary Detailing & Electrical Layout',
    category: 'renovation',
    categoryLabel: 'Interior Renovation & Execution',
    year: '2024',
    firmOrContext: 'Yashoda Joshi Architects (Junior Architect)',
    location: 'Pune, Maharashtra',
    typology: 'Residential Interior & Technical Retrofit',
    software: ['AutoCAD', 'Electrical Schedules', 'Site Supervision', '3D BIM'],
    thumbnail: '/assets/portfolio/p40.jpg',
    aspectRatio: 'square',
    shortDesc: 'End-to-end residential flat renovation encompassing full sanitary fixture details, tiling layouts, false ceilings, electrical switchboard schedules, and completed site photos.',
    fullDesc: 'The Swan Lake Apartment project entailed a full-scope interior renovation and technical overhaul of an urban apartment. Responsibilities included designing millimeter-accurate bathroom layouts at 1:25 scale specifying Jaquar CP fittings and Kajaria tiles, preparing comprehensive electrical switchboard layouts (SB 01 to SB 10), modeling 3D axonometric room views, and supervising the execution on site through to final delivery.',
    sheets: [
      {
        title: 'Master Bathroom Working Plan & Fixture Schedule',
        description: 'Detailed 1:25 scale floor plan and sanitary layout with Kajaria 600x1200 antiskid Lisob brown tiles, Hindware Elegance Aura WC, Jaquar mixer, and sliding flush doors.',
        image: '/assets/portfolio/p38.jpg',
        drawingType: 'Plan',
        specs: ['1:25 Scale Working Drawing', 'Kajaria 600x1200 Lisob Brown antiskid', 'Jaquar Multiflow overhead shower']
      },
      {
        title: 'Bathroom Longitudinal Section & Dado Elevation',
        description: 'Section A illustrating wall dado transitions from Lisob brown to Marfil matt, granite counter frame, and exact plumbing fixture heights (450mm from FFL).',
        image: '/assets/portfolio/p39.jpg',
        drawingType: 'Section',
        specs: ['Dado height: 2100mm', 'Steel grey granite frame', 'Hindware Mario half pedestal basin']
      },
      {
        title: 'Bathroom Renovation Site Photos & 3D Axonometric',
        description: 'Completed site execution photographs showing wall-hung sanitary ware, concealed cistern, LED illuminated mirror, and 3D axonometric views of the suite.',
        image: '/assets/portfolio/p40.jpg',
        drawingType: 'Site Photo',
        specs: ['On-site completed installation', 'LED backlit mirror integration', 'Father\'s room 3D spatial model']
      },
      {
        title: 'Secondary Bathroom Plan & Sections (Innova Azul & Blanco)',
        description: 'Working drawings and Sections A & B detailing Kajaria Innova azul matt and Blanco nieve tiles, PVC modular false ceiling, and tile-insert shower drains.',
        image: '/assets/portfolio/p41.jpg',
        drawingType: 'Section',
        specs: ['Kajaria Innova azul 600x600', 'PVC modular false ceiling', 'Ruhe tile-insert drain channel']
      },
      {
        title: 'Master Electrical Layout & Switchboard Schedules',
        description: 'Comprehensive electrical working drawing detailing switchboards SB01 through SB10, two-way wall points, fan positions, 15A water heater sockets, and lighting layouts.',
        image: '/assets/portfolio/p42.jpg',
        drawingType: 'Electrical',
        specs: ['Schedules for SB 01 to SB 10', 'Two-way lighting controls', '15A heavy appliance points']
      },
      {
        title: 'Finished Apartment Site Photography',
        description: 'Actual completed site photographs of the modern tiled bathroom with chrome hardware and the newly renovated bedroom with lilac feature wall.',
        image: '/assets/portfolio/p43.jpg',
        drawingType: 'Site Photo',
        specs: ['Blue & neutral tile finish', 'Modern chrome shower fittings', 'Completed bedroom handover']
      }
    ]
  },
  {
    id: 'krushnakunj-toilet-detailing',
    title: 'Krushnakunj Toilet Detailing',
    subtitle: '1:25 Plumbing Working Drawings, Tile Laying & Sections',
    category: 'details',
    categoryLabel: 'Sanitary Detailing & Plumbing',
    year: '2024',
    firmOrContext: 'Yashoda Joshi Architects',
    location: 'Pune / Maharashtra',
    typology: 'Plumbing & Technical Detailing',
    software: ['AutoCAD', 'Working Drawings'],
    thumbnail: '/assets/portfolio/p34.jpg',
    aspectRatio: 'square',
    shortDesc: 'Millimeter-precise 1:25 scale ground floor toilet layouts and cross sections specifying slope gradients, tile layouts (Kajaria salmon tiles), and Parryware sanitary ware.',
    fullDesc: 'Technical working drawing set for the Krushnakunj residence specifying precise plumbing and tile-laying layouts. Includes starting tile grid alignment, slope gradients towards CP nahni traps, Parryware wall-hung WC with flush tanks, wall mixer hand-shower brackets, and Hindware Amanda wall-hung washbasins.',
    sheets: [
      {
        title: 'Ground Floor Toilet Working Plan (Details 1 & 2)',
        description: '1:25 scale floor plans detailing tile start points, floor slope lines, Kajaria salmon 300x300 floor tiles, and sanitary fixture centerlines.',
        image: '/assets/portfolio/p34.jpg',
        drawingType: 'Detail',
        specs: ['Scale 1:25', 'Kajaria salmon 300x300 floor tiles', 'CP finish nahni trap (Jaquar)']
      },
      {
        title: 'Toilet Sections AA & BB',
        description: 'Cross-sectional working drawings detailing Kajaria salmon dark 300x600 skirting and light wall tiles, wall mixer heights, and flush tank provisions.',
        image: '/assets/portfolio/p35.jpg',
        drawingType: 'Section',
        specs: ['Scale 1:25 Section AA & BB', 'Parryware wall-hung WC UNO', 'Wall mixer FUS-CHR-29267 code']
      }
    ]
  },
  {
    id: 'kitchen-balcony-details',
    title: 'Kitchen Renovation & Balcony Metalwork',
    subtitle: 'Custom Cabinetry, MS Grill Fabrication & Pleated Mesh Door',
    category: 'details',
    categoryLabel: 'Joinery & Metalwork Detailing',
    year: '2024',
    firmOrContext: 'Yashoda Joshi Architects',
    location: 'Maharashtra, India',
    typology: 'Residential Interior & Metal Fabrication',
    software: ['AutoCAD', 'Joinery Drawings', 'Site Supervision'],
    thumbnail: '/assets/portfolio/p37.jpg',
    aspectRatio: 'square',
    shortDesc: 'Working details for a custom balcony MS grill door with pleated aluminium mesh alongside executed on-site photos of a contemporary modular kitchen and custom crockery unit.',
    fullDesc: 'This project combines millimeter-precise metalwork detailing with finished residential interior execution. Drawings specify a 50x40mm MS pipe frame with 10x10mm solid bars, Bison board top cladding, and integrated pleated mesh screen doors. The accompanying site photographs show completed kitchen cabinetry, quartz counters, chimney installation, and custom timber crockery display units.',
    sheets: [
      {
        title: 'Balcony MS Grill Door & Pleated Mesh Working Detail',
        description: 'Garden elevation and structural fixing sections (Option 1 & Option 2) for custom MS grill security doors with integrated aluminium pleated mesh.',
        image: '/assets/portfolio/p36.jpg',
        drawingType: 'Detail',
        specs: ['50x40mm MS pipe frame with PU paint', '10x10mm MS solid bars', '1"x1.5" Aluminium frame with pleated mesh']
      },
      {
        title: 'Kitchen Renovation Completed Site Photography',
        description: 'Photographic documentation of the completed modular kitchen, polished granite breakfast counter, utility washing area, and custom wood-and-fluted-glass crockery unit.',
        image: '/assets/portfolio/p37.jpg',
        drawingType: 'Site Photo',
        specs: ['Custom wood & fluted glass joinery', 'Modular kitchen counter & chimney', 'Pleated mesh sliding screen installed']
      }
    ]
  },
  {
    id: 'kalashree-villa',
    title: 'Kalashree Villa — Architectural Details',
    subtitle: 'Technical Railings, Staircases & North-West Elevation',
    category: 'residential',
    categoryLabel: 'Residential / Working Drawings',
    year: '2024',
    firmOrContext: 'Yashoda Joshi Architects (Junior Architect)',
    location: 'Maharashtra, India',
    typology: 'High-End Residential Documentation',
    software: ['AutoCAD', 'Working Drawings', 'Site Supervision'],
    thumbnail: '/assets/portfolio/p23.jpg',
    aspectRatio: 'square',
    shortDesc: 'Detailed working drawings for custom mild steel terrace railings, internal staircase fabrication, North-West villa elevation with brick jali, and streetscape 3D visualization.',
    fullDesc: 'Kalashree Villa showcases meticulous attention to architectural detail, moving seamlessly from 2D drafting to physical on-site realization. As part of Yashoda Joshi Architects, Vaidehi produced fabrication drawings for custom MS terrace railings, staircase balustrades, brick jali solar shading screens, and coordinated construction directly with on-site fabricators.',
    sheets: [
      {
        title: 'Terrace Railing Fabrication Details (Second Floor)',
        description: 'Complete technical working drawing specifying 50x25mm MS pipe top rail, 10x10mm vertical MS bars, and 10x5mm flat sections paired with actual site installation photos.',
        image: '/assets/portfolio/p23.jpg',
        drawingType: 'Detail',
        specs: ['50x25mm MS Pipe Top Rail', '10x10mm Solid MS Bars', 'Granite coping base mounting']
      },
      {
        title: 'Internal Staircase Construction Detailing',
        description: 'Staircase section and plan drawings detailing tread-riser interface, intermediate landings, MS balustrades, and finished wooden handrail on site.',
        image: '/assets/portfolio/p24.jpg',
        drawingType: 'Detail',
        specs: ['Overall Height: 3150mm', 'Floor to First Slab: +4.05m', 'Smooth welded joints & black enamel finish']
      },
      {
        title: 'North-West Villa Elevation',
        description: 'Full architectural working elevation showing perforated brick jali screens, red metal accent louvers, and staggered window openings.',
        image: '/assets/portfolio/p25.jpg',
        drawingType: 'Elevation',
        specs: ['Architectural drawing at 1:100', 'Brick jali solar shading screen', 'Red MS balcony accents']
      },
      {
        title: 'Kalashree Villa Contextual Street View',
        description: 'Urban contextual 3D visualization showing how the residence integrates with the vibrant neighborhood streetscape in Maharashtra.',
        image: '/assets/portfolio/p26.jpg',
        drawingType: '3D Render',
        specs: ['Terracotta red boundary wall', 'Cantilevered balcony elements', 'Urban residential context']
      }
    ]
  },
  {
    id: 'vaishwik-arts-renovation',
    title: 'Vaishwik Arts & Environment',
    subtitle: 'Adaptive Reuse, Demolition Plans & Structural Expansion',
    category: 'renovation',
    categoryLabel: 'Adaptive Reuse & Cultural',
    year: '2024',
    firmOrContext: 'Yashoda Joshi Architects',
    location: 'Pune / Maharashtra',
    typology: 'Art Gallery & Structural Retrofit',
    software: ['AutoCAD', 'SketchUp', 'Sections'],
    thumbnail: '/assets/portfolio/p30.jpg',
    aspectRatio: 'square',
    shortDesc: 'Structural intervention and adaptive reuse of a commercial building into an art gallery, featuring demolition plans, external steel elevator tower, and timber terrace canopy.',
    fullDesc: 'Vaishwik Arts & Environment involved retrofitting an existing curved commercial structure into a dynamic arts gallery and workshop space. The design called for selective demolition of interior partitions, adding a distinct external red steel elevator tower to provide barrier-free access, and transforming an open terrace into a sheltered multipurpose event pavilion framed with timber columns and mild steel rafters.',
    sheets: [
      {
        title: 'Second Floor & Terrace Demolition Plans',
        description: 'Technical demolition documentation identifying walls, floor slabs, skylights, and weather chajjas marked for careful structural removal.',
        image: '/assets/portfolio/p27.jpg',
        drawingType: 'Plan',
        specs: ['Demolition boundary markers', 'Curved masonry wall removal', 'Structural slab openings for vertical circulation']
      },
      {
        title: 'Proposed Second Floor & Terrace Plans',
        description: 'New architectural layout showing open art exhibition bays, movable display panels, accessible lift shaft, and timber-pergola terrace.',
        image: '/assets/portfolio/p28.jpg',
        drawingType: 'Plan',
        specs: ['Curved panoramic gallery front', 'Terrace canopy with 230x230mm base plates', 'Sloped metal & glass skylight']
      },
      {
        title: 'Structural Sections (A, B, C, D)',
        description: 'Transverse and longitudinal sections detailing timber columns (150x150mm), MS cross plates, overhead water tank, and lift mechanism.',
        image: '/assets/portfolio/p29.jpg',
        drawingType: 'Section',
        specs: ['Sections A, B, C & D', 'Timber-to-steel connection plates', 'Clear gallery floor-to-ceiling heights']
      },
      {
        title: 'Massing Studies: Existing vs External Steel Lift',
        description: 'Axonometric massing models demonstrating the existing curved concrete volume and the bold proposed external steel elevator tower.',
        image: '/assets/portfolio/p30.jpg',
        drawingType: 'Axonometric',
        specs: ['Structural steel skeletal tower', 'Red architectural paint finish', 'External universal access route']
      }
    ]
  }
];

export const RESUME_DATA = {
  name: 'Vaidehi Dhumal',
  title: 'Architect & Spatial Designer',
  email: 'vaidehidhumal04@gmail.com',
  phone: '+91 8007019966',
  location: 'Pune, Maharashtra, India',
  portfolioUrl: 'https://ais-dev-2ffeibsjcs3caetrsecwia-943187978326.asia-southeast1.run.app',
  pdfPath: '/assets/aistudio/Resume_b9b07854.pdf',
  portfolioPdfPath: '/assets/aistudio/web_port_ab212422.pdf',
  careerObjective: 'Motivated Architecture Graduate seeking to contribute design and technical expertise to innovative architectural projects. Aiming to apply creative problem solving and software proficiency to enhance spatial design and project efficiency.',
  bio: 'Architect passionate about versatile design. Looking for a platform where I can apply my dedication and fast-learning nature to real-world projects. Open to all typologies and ready to contribute from day one.',
  education: [
    {
      degree: 'Bachelor of Architecture (B.Arch.)',
      institution: "Marathwada Mitra Mandal's College of Architecture (MMCOA)",
      location: 'Pune, Maharashtra',
      period: '2020 – 2025',
      highlights: [
        'Graduated with strong foundations in architectural drafting, sustainable design, and structural planning.',
        'Thesis project focused on coastal wellness architecture and vernacular passive cooling in Diveagar.',
        'Hands-on physical modeling, topographic analysis, and digital 3D visualization.'
      ]
    }
  ],
  experience: [
    {
      role: 'Junior Architect',
      company: 'Yashoda Joshi Architects',
      period: 'Present',
      location: 'Pune, India',
      points: [
        'Worked on residential renovation and toilet construction projects, including construction from the foundation stage.',
        'Prepared technical documentation and architectural working drawings for residential projects.',
        'Developed 3D models to visualize design concepts and project details.',
        'Conducted regular site visits to monitor construction progress and coordinate with on-site teams.',
        'Worked on electrical layouts to plan lighting points, switches, and electrical provisions.',
        'Prepared material layouts to support material planning and execution at the site. Coordinated with contractors during the selection and finalization process.',
        'Prepared quantity estimates and material calculations to support project costing and procurement.',
        'Ongoing projects: Residential Bungalow planning and Studio Renovation; Independent Residential Interior project (3BHK apartment).'
      ]
    },
    {
      role: 'Architectural Intern',
      company: 'Yashoda Joshi Architects',
      period: 'June 2024 – November 2024',
      location: 'Pune, India',
      points: [
        'Built a strong foundation in architectural design, drafting, and 3D visualization.',
        'Contributed to prominent firm projects including Vaishwik Art Gallery and Kalashree Villa.',
        'Produced detail drawings for joinery, door/window schedules, railings, and structural retrofits.',
        'Demonstrated rapid growth and technical precision, progressing directly to a Junior Architect role within the same firm.'
      ]
    }
  ],
  software: [
    { name: 'AutoCAD', level: 95, category: '2D Drafting & Working Drawings' },
    { name: 'SketchUp', level: 90, category: '3D Modeling & Massing' },
    { name: 'Revit (BIM)', level: 85, category: 'BIM & Construction Docs' },
    { name: 'Enscape', level: 90, category: 'Real-time Architectural Rendering' },
    { name: 'Blue Moon AI Rendering', level: 85, category: 'AI Visual Generation & Atmosphere' },
    { name: 'Adobe Creative Suite (Photoshop/InDesign)', level: 85, category: 'Post-Production & Portfolio Presentation' },
    { name: 'MS Office Suite', level: 90, category: 'Costing, BOQ & Documentation' }
  ],
  coreCompetencies: [
    'Technical Drawings & Working Drawings',
    'Construction Documentation & Detailing',
    '3D Architectural Modeling & BIM',
    'Interior Design & Joinery Detailing',
    'Space Planning & Master Layouts',
    'Material Selection & BOQ Estimation',
    'Site Coordination & Contractor Liaison',
    'Sustainable Vernacular Architecture'
  ],
  languages: ['English', 'Hindi', 'Marathi']
};
