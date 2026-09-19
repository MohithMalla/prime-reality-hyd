export interface NavLink {
  label: string;
  href: string;
}

export const BRAND = {
  name: "Prime Realty Hyderabad",
  shortName: "Prime Realty",
  tagline: "your choice our service",
  positioning: "Your Trusted Real Estate Growth Partner",
  phone: "7901324546",
  formattedPhone: "+91 79013 24546",
  email: "primerealtyhyderabad25@gmail.com",
  address: {
    line1: "Plot No. 147/A, Avanthi Nagar Thota",
    line2: "Erragadda, Motinagar",
    city: "Hyderabad",
    pincode: "500018",
    full: "Plot No. 147/A, Avanthi Nagar Thota, Erragadda, Motinagar, Hyderabad - 500018",
  },
  social: {
    facebook: "https://www.facebook.com/share/18PZkxuaUU/",
    instagram: "https://www.instagram.com/prime_realty_hyderabad?stkn=MXNxODgzNW83dDRiOQ==",
  },
  hours: [
    { days: "Monday – Friday", hours: "9:00 AM – 9:00 PM" },
    { days: "Saturday", hours: "6:00 AM – 10:00 PM" },
    { days: "Sunday", hours: "6:00 AM – 9:00 PM" },
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Property Solutions", href: "/property-solutions" },
  { label: "Why Prime Realty", href: "/why-prime-realty" },
  { label: "Contact Us", href: "/contact" },
];

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "property-sales",
    title: "Property Sales",
    shortDesc: "Strategic advisory and representation for verified plots, premium villas, apartments, and commercial assets.",
    fullDesc: "We facilitate seamless property acquisition by presenting only strictly verified, legally vetted properties across Hyderabad's prime growth corridors. Our sales assistance focuses on transparent transactions, correct pricing, and complete peace of mind.",
    iconName: "Home",
    features: ["Title-verified listings", "Clear pricing transparency", "Micro-market rate benchmarking", "Developer credibility verification"],
  },
  {
    id: "investment-advisory",
    title: "Investment Advisory",
    shortDesc: "Informed, research-backed real estate portfolio advisory tailored to your capital and horizon goals.",
    fullDesc: "Real estate investment requires analytical rigor. We evaluate infrastructure timelines, Outer Ring Road connectivity, master plans, and corridor development trajectories to recommend assets suited for steady long-term appreciation without unrealistic promises.",
    iconName: "TrendingUp",
    features: ["Corridor growth trajectory analysis", "Infrastructure readiness assessment", "Asset diversification strategies", "Risk mitigation due diligence"],
  },
  {
    id: "property-consultation",
    title: "Property Consultation",
    shortDesc: "One-on-one professional consultation to clarify requirements, budget allocations, and property types.",
    fullDesc: "Whether you are a first-time homebuyer or an experienced investor looking to expand into plotted developments or commercial spaces, our advisory sessions offer objective guidance tailored to your specific family and business needs.",
    iconName: "Users",
    features: ["Goal-oriented requirement mapping", "Budget & cashflow suitability check", "Comparative option evaluation", "Zero-obligation consultation"],
  },
  {
    id: "site-visit-assistance",
    title: "Site Visit Assistance",
    shortDesc: "Accompanied, organized property site inspections with on-ground neighborhood and infrastructure briefing.",
    fullDesc: "Seeing is understanding. We coordinate organized, private site visits to selected developments, highlighting access roads, municipal water & electrical provisions, proximity to growth nodes, and neighborhood development.",
    iconName: "Compass",
    features: ["Chauffeured site visits upon request", "Direct on-ground physical inspection", "Boundary & survey demarcation review", "Surrounding infrastructure briefing"],
  },
  {
    id: "property-selection-support",
    title: "Property Selection Support",
    shortDesc: "Analytical filtering from hundreds of options to identify the top 3-4 properties matching your criteria.",
    fullDesc: "Avoid information overload. Our team evaluates your lifestyle preferences, commuting requirements, Vastu considerations, and development quality to present a refined shortlist of genuinely suitable properties.",
    iconName: "CheckSquare",
    features: ["Unbiased comparative analysis", "Master plan & layout verification", "Amenities & builder track-record check", "Value-for-money assessment"],
  },
  {
    id: "documentation-assistance",
    title: "Documentation Assistance",
    shortDesc: "Comprehensive assistance through title documents, encumbrance certificates, and registration procedures.",
    fullDesc: "Property transactions demand legal precision. We assist clients in understanding link documents, HMDA/RERA/DTCP approvals, patta passbooks, encumbrance certificates, and coordinate smoothly with legal counsels and registration authorities.",
    iconName: "FileText",
    features: ["Approval status verification (HMDA/RERA/DTCP)", "Encumbrance certificate (EC) review", "Sale deed & agreement drafting guidance", "Sub-registrar office coordination"],
  },
  {
    id: "channel-partner-support",
    title: "Channel Partner Support",
    shortDesc: "Professional collaboration with top-tier Hyderabad developers and licensed institutional builders.",
    fullDesc: "We maintain direct, ethical channel partner relationships with Hyderabad's most reputed real estate developers, securing verified inventory, transparent pre-launch insights, and priority unit selection for our clients.",
    iconName: "Handshake",
    features: ["Direct developer tie-ups", "Exclusive inventory access", "Transparent developer payment plans", "RERA-compliant builder projects"],
  },
  {
    id: "after-sales-support",
    title: "After-Sales Support",
    shortDesc: "Dedicated post-purchase assistance including boundary demarcation, mutation, and ongoing advisory.",
    fullDesc: "Our relationship does not end at registration. We guide buyers through mutation procedures, property tax setup, physical possession checks, fencing coordination for plots, and ongoing advisory whenever you choose to review your portfolio.",
    iconName: "ShieldCheck",
    features: ["Mutation & revenue record updates", "Physical possession guidance", "Utility connection advisory", "Long-term portfolio reviews"],
  },
];

export interface PropertyCategory {
  id: string;
  title: string;
  tag: string;
  image: string;
  summary: string;
  description: string;
  highlights: string[];
  keyConsiderations: string[];
  locations: string[];
  highways: string[];
}

export interface HighwayCorridor {
  id: string;
  name: string;
  highwayCode: string;
  direction: string;
  headline: string;
  keyAreas: string[];
  propertyTypes: string[];
  growthDrivers: string;
}

export interface CityZone {
  id: string;
  zone: string;
  tagline: string;
  majorAreas: string[];
  description: string;
}

export const NATIONAL_HIGHWAYS: HighwayCorridor[] = [
  {
    id: "mumbai-highway",
    name: "Mumbai Highway",
    highwayCode: "NH-65",
    direction: "North-West Corridor",
    headline: "Hyderabad – Mumbai Economic Growth Corridor",
    keyAreas: [
      "Miyapur",
      "Chandanagar",
      "Beeramguda",
      "Patancheru",
      "Isnapur",
      "Rudraram",
      "Kandi (IIT Hyderabad)",
      "Sangareddy",
      "Sadashivpet",
      "Zaheerabad NIMZ Belt"
    ],
    propertyTypes: ["Residential Plots", "Gated Communities", "Industrial & Commercial Hubs", "Farm Lands"],
    growthDrivers: "IIT Hyderabad, NIMZ Zaheerabad, Patancheru Industrial Belt, ORR Exit 3 & upcoming Regional Ring Road (RRR) connectivity.",
  },
  {
    id: "bengaluru-highway",
    name: "Bengaluru Highway",
    highwayCode: "NH-44",
    direction: "South Corridor",
    headline: "Hyderabad – Bengaluru Aerotropolis & Logistics Corridor",
    keyAreas: [
      "Shamshabad",
      "Gaganpahad",
      "Thimmapur",
      "Kothur",
      "Nandigama",
      "Shadnagar",
      "Farooqnagar",
      "Balanagar",
      "Jadcherla SEZ"
    ],
    propertyTypes: ["HMDA Plotted Developments", "Luxury Villas", "Aviation Logistics Land", "Weekend Farm Plots"],
    growthDrivers: "Rajiv Gandhi International Airport (RGIA), Amazon Fulfilment Centre, Aerospace & Defence Park, Multi-Modal Logistics Hubs & RRR South Loop.",
  },
  {
    id: "shankarpally-vikarabad",
    name: "Shankarpally & Vikarabad",
    highwayCode: "SH / NH Connectivity",
    direction: "West Eco-Residential Corridor",
    headline: "Western Greenery, Premium Villas & Fast-Appreciating Open Land",
    keyAreas: [
      "Mokila",
      "Shankarpally",
      "Chevella",
      "Janwada",
      "Tangatur",
      "Vikarabad",
      "Ananthagiri Hills Belt",
      "Mominpet",
      "Pudur"
    ],
    propertyTypes: ["Luxury Gated Villas", "HMDA Villa Plots", "Weekend Farm Plots", "Resort & Eco-Landholdings"],
    growthDrivers: "Immediate signal-free drive to Neopolis/Financial District, picturesque green belts, luxury villa township developments, and tourist eco-circuit.",
  },
  {
    id: "srisailam-highway",
    name: "Srisailam Highway",
    highwayCode: "NH-765",
    direction: "South-East Corridor",
    headline: "Pharma City, Aerospace & Southern Growth Hub",
    keyAreas: [
      "Tukkuguda (ORR Exit 14)",
      "Maheshwaram",
      "Mansanpally",
      "Mankhal",
      "Fab City",
      "Kandukur",
      "Kadthal",
      "Muchintal (Statue of Equality)",
      "Amangal",
      "Kalwakurthy"
    ],
    propertyTypes: ["HMDA & RERA Approved Plots", "Gated Villa Communities", "Pharma & Industrial Enclaves", "High-Yield Land Parcels"],
    growthDrivers: "Hardware Park, E-City, Ratan Tata Innovation Hubs, Hyderabad Pharma City corridor, and direct airport connectivity via ORR Exit 14.",
  },
  {
    id: "vijayawada-highway",
    name: "Vijayawada Highway",
    highwayCode: "NH-65",
    direction: "East Corridor",
    headline: "Hyderabad – Vijayawada High-Volume Commercial & Plotted Belt",
    keyAreas: [
      "LB Nagar",
      "Hayathnagar",
      "Pedda Amberpet (ORR Exit 11)",
      "Ramoji Film City Belt",
      "Batasingaram Logistics Park",
      "Choutuppal",
      "Gundrampally",
      "Panthangi"
    ],
    propertyTypes: ["Residential Open Plots", "Commercial Strip Land", "Warehousing & Logistics Hubs", "Independent Houses"],
    growthDrivers: "Batasingaram Fruit & Logistics Market, Industrial clusters at Choutuppal, 6-lane National Highway expansion, and strong commuter density.",
  },
  {
    id: "warangal-highway",
    name: "Warangal Highway",
    highwayCode: "NH-163",
    direction: "North-East Corridor",
    headline: "Hyderabad – Warangal Industrial & Temple City Corridor",
    keyAreas: [
      "Uppal",
      "Boduppal",
      "Peerzadiguda",
      "Narapally",
      "Pocharam (Infosys SEZ)",
      "Ghatkesar (ORR Exit 9)",
      "Bibinagar (AIIMS)",
      "Bhongir",
      "Yadagirigutta (Sri Lakshmi Narasimha Swamy Temple Belt)",
      "Aler"
    ],
    propertyTypes: ["HMDA Approved Layouts", "IT Corridor Apartments", "Spiritual & Temple City Land", "Industrial Parks"],
    growthDrivers: "Infosys SEZ at Pocharam, AIIMS Bibinagar, Yadadri Temple City development corridor, MMTS Phase 2 rail link, and multi-lane expressway.",
  },
  {
    id: "medchal-highway",
    name: "Medchal Highway",
    highwayCode: "NH-44",
    direction: "North Corridor",
    headline: "Hyderabad – Nagpur / Medchal Institutional & Residential Artery",
    keyAreas: [
      "Bowenpally",
      "Suchitra Circle",
      "Kompally",
      "Dulapally",
      "Gundlapochampally",
      "Kandlakoya IT Park (Gateway IT Park)",
      "Medchal Town (ORR Exit 6)",
      "Medchal Checkpost",
      "Kallakal Industrial Area",
      "Toopran",
      "Chegunta"
    ],
    propertyTypes: ["High-End Gated Villas", "Modern High-Rise Apartments", "HMDA Approved Layouts", "Warehousing & Logistics"],
    growthDrivers: "Kandlakoya Gateway IT Park, Kompally entertainment and healthcare infrastructure, 6-lane elevated corridors, and major educational institutions.",
  },
  {
    id: "shamirpet-highway",
    name: "Shamirpet Highway",
    highwayCode: "Rajiv Rahadari / SH-1",
    direction: "North-North-East Corridor",
    headline: "Biotech Valley & Karimnagar High-Speed Expressway",
    keyAreas: [
      "Karkhana",
      "Alwal",
      "Bolarum",
      "Hakimpet",
      "Thumkunta",
      "Shamirpet (ORR Exit 7)",
      "Genome Valley",
      "Aliabad",
      "Mulkaloor",
      "Pragnapur",
      "Siddipet Road"
    ],
    propertyTypes: ["HMDA Residential Plots", "Luxury Eco-Retreat Villas", "Bio-Tech Employee Housing", "Managed Farmlands"],
    growthDrivers: "Genome Valley (India's premier Life Sciences & Biotech hub), BITS Pilani Hyderabad campus, Shamirpet Lake eco-tourism, and ORR Exit 7 connectivity.",
  },
];

export const HYDERABAD_ZONES: CityZone[] = [
  {
    id: "west-hyderabad",
    zone: "West Hyderabad (IT & Financial Powerhouse)",
    tagline: "Corporate Headquarters, High-Rise Enclaves & Luxury Villa Belts",
    majorAreas: [
      "Hitec City",
      "Gachibowli",
      "Financial District",
      "Madhapur",
      "Kondapur",
      "Kokapet (Neopolis)",
      "Nanakramguda",
      "Tellapur",
      "Kollur",
      "Narsingi",
      "Puppalguda",
      "Manikonda",
      "Khajaguda",
      "Kavuri Hills",
      "Jubilee Hills Extension"
    ],
    description: "The economic heart of modern Hyderabad. Characterized by Grade-A IT parks, the Neopolis high-density growth node, international schools, metro lines, and premier high-rise residential towers.",
  },
  {
    id: "north-hyderabad",
    zone: "North Hyderabad (Institutional & Gated Living)",
    tagline: "Lush Green Spaces, Commercial Corridors & Established Towns",
    majorAreas: [
      "Kompally",
      "Medchal",
      "Bachupally",
      "Pragathi Nagar",
      "Nizampet",
      "Kukatpally (KPHB)",
      "Miyapur",
      "Bowenpally",
      "Alwal",
      "Sainikpuri",
      "Yapral",
      "Shamirpet",
      "Gundlapochampally",
      "Suchitra"
    ],
    description: "A fast-growing residential favorite offering superior educational hubs, spacious gated villa enclaves, Kandlakoya Gateway IT Park, and seamless connectivity via NH-44 and Rajiv Rahadari.",
  },
  {
    id: "central-hyderabad",
    zone: "Central Hyderabad (Heritage & Elite Urban Living)",
    tagline: "Premier High-Street Addresses & High-Catchment Hubs",
    majorAreas: [
      "Banjara Hills",
      "Jubilee Hills",
      "Somajiguda",
      "Begumpet",
      "Ameerpet",
      "Erragadda (Prime Realty Office)",
      "Motinagar",
      "Sanathnagar",
      "SR Nagar",
      "Panjagutta",
      "Himayatnagar",
      "Secunderabad Cantonment"
    ],
    description: "The classic luxury core of the city. Encompasses high-end commercial retail streets, diplomatic and corporate offices, healthcare institutions, and established luxury residences.",
  },
  {
    id: "east-south-hyderabad",
    zone: "East & South Hyderabad (Aerospace, Pharma & Logistics)",
    tagline: "Rapidly Expanding Industrial, Aero & Plotted Corridors",
    majorAreas: [
      "Uppal",
      "LB Nagar",
      "Nagole",
      "Dilsukhnagar",
      "Boduppal",
      "Peerzadiguda",
      "Pocharam",
      "Ghatkesar",
      "Shamshabad",
      "Rajendra Nagar",
      "Attapur",
      "Adibatla (Tata Aerospace)",
      "Tukkuguda",
      "Maheshwaram"
    ],
    description: "Home to Rajiv Gandhi International Airport, hardware and aerospace parks, TCS Adibatla, Pocharam Infosys campus, and expansive HMDA plotted developments along NH-65 and NH-765.",
  },
];

export const PROPERTY_CATEGORIES: PropertyCategory[] = [
  {
    id: "residential-plots",
    title: "Residential Plots",
    tag: "Plotted Communities",
    image: "/images/residential-plots.jpg",
    summary: "HMDA & RERA-approved plotted developments in well-planned gated communities with blacktop roads and utilities.",
    description: "Plotted land ownership in Hyderabad remains one of the most resilient and flexible real estate decisions. We focus exclusively on legally clear, approved layouts located in master-planned growth corridors, featuring underground cabling, avenue plantation, stormwater drainage, and clear demarcation.",
    highlights: [
      "100% clear titles & bank-loan approvable layouts",
      "HMDA, DTCP, or RERA regulatory approvals",
      "Underground drainage, electricity, and blacktop BT roads",
      "Immediate construction readiness or long-term landholding",
    ],
    keyConsiderations: [
      "Verify master plan zoning and layout approval number",
      "Examine link documents spanning minimum 30 years",
      "Assess road widening proposals and arterial connectivity",
      "Inspect municipal water supply and underground infrastructure",
    ],
    locations: [
      "Shankarpally & Mokila Corridor",
      "Mumbai Highway (Patancheru, Kandi, Sangareddy, Sadashivpet)",
      "Bengaluru Highway (Shamshabad, Kothur, Shadnagar)",
      "Srisailam Highway (Tukkuguda, Maheshwaram, Kadthal)",
      "Vijayawada Highway (Hayathnagar, Pedda Amberpet, Choutuppal)",
      "Warangal Highway (Ghatkesar, Bibinagar, Bhongir, Yadagirigutta)",
      "Medchal Highway (Kompally, Kandlakoya, Medchal)",
      "Shamirpet Highway (Genome Valley, Thumkunta)",
      "Adibatla & Sagar Highway Corridor"
    ],
    highways: [
      "Mumbai Highway (NH-65)",
      "Bengaluru Highway (NH-44)",
      "Shankarpally & Vikarabad Belt",
      "Srisailam Highway (NH-765)",
      "Vijayawada Highway (NH-65)",
      "Warangal Highway (NH-163)",
      "Medchal Highway (NH-44)",
      "Shamirpet Highway (Rajiv Rahadari)"
    ],
  },
  {
    id: "villas",
    title: "Luxury Villas",
    tag: "Independent Living",
    image: "/images/luxury-villa.jpg",
    summary: "Contemporary architectural villas within private, secure gated enclaves offering exclusivity and refined lifestyle.",
    description: "Designed for discerning homeowners seeking privacy, spacious living, and bespoke craftsmanship. Hyderabad's villa market offers expansive layouts, double-height living spaces, private gardens, and clubhouse amenities within serene, low-density communities.",
    highlights: [
      "Triplex and duplex layouts with private garden terraces",
      "Low-density gated communities with 24/7 security",
      "World-class clubhouse amenities, pools, and sports courts",
      "Sustainable design with solar provisions and rainwater harvesting",
    ],
    keyConsiderations: [
      "Quality of structural materials and finishes",
      "Undivided share of land (UDS) versus independent plot title",
      "Clubhouse maintenance fees and community association setup",
      "Travel commute time to major workplace hubs",
    ],
    locations: [
      "Kokapet & Gandipet",
      "Tellapur, Kollur & Osman Nagar",
      "Mokila & Shankarpally Luxury Villa Belt",
      "Appa Junction & Rajendra Nagar",
      "Medchal Highway (Kompally & Gundlapochampally)",
      "Mumbai Highway (Patancheru & Isnapur Enclaves)",
      "Bengaluru Highway (Shamshabad & Kothur Gated Belts)",
      "Shamirpet & Alwal Green Retreats"
    ],
    highways: [
      "Shankarpally & Vikarabad Corridor",
      "Mumbai Highway (NH-65)",
      "Bengaluru Highway (NH-44)",
      "Medchal Highway (NH-44)",
      "Shamirpet Highway"
    ],
  },
  {
    id: "apartments",
    title: "Modern Apartments",
    tag: "High-Rise Urban Living",
    image: "/images/modern-apartment.jpg",
    summary: "Premium high-rise residences with panoramic views, modern smart amenities, and unmatched city connectivity.",
    description: "Modern apartment communities in Hyderabad blend urban convenience with resort-style living. From compact 2 & 3 BHK residences for young professionals to sprawling 4 BHK sky villas, we guide you to vetted developments with proven delivery records.",
    highlights: [
      "High-rise towers with panoramic skyline views",
      "State-of-the-art fitness centers, co-working spaces, and lounges",
      "Multi-tier security systems and vehicular-free podiums",
      "Prime positioning near metro stations, IT corridors, and reputed schools",
    ],
    keyConsiderations: [
      "Carpet area ratio and efficiency of floor plan layout",
      "Builder track record on construction speed and quality",
      "Number of units per floor and high-speed elevator ratios",
      "Approvals from municipal bodies (GHMC/HMDA) and RERA compliance",
    ],
    locations: [
      "Financial District, Gachibowli & Nanakramguda",
      "Hitec City, Madhapur & Kondapur",
      "Miyapur, Chandanagar & Kukatpally",
      "Bachupally, Nizampet & Pragathi Nagar",
      "Begumpet, Ameerpet, Erragadda & Motinagar (Central Hyd)",
      "Medchal Highway (Suchitra, Kompally)",
      "Warangal Highway (Uppal, Boduppal, Pocharam)",
      "Vijayawada Highway (LB Nagar, Nagole, Hayathnagar)"
    ],
    highways: [
      "Mumbai Highway (NH-65)",
      "Medchal Highway (NH-44)",
      "Warangal Highway (NH-163)",
      "Vijayawada Highway (NH-65)",
      "Bengaluru Highway (NH-44)"
    ],
  },
  {
    id: "farm-plots",
    title: "Farm Plots",
    tag: "Aspirational Land & Retreats",
    image: "/images/farm-plots.jpg",
    summary: "Spacious green agricultural plots and managed farmland retreats situated in picturesque suburban environments.",
    description: "For families yearning for weekend getaways, natural living, and tangible agricultural landholding. We curate farm plots near Hyderabad that offer clear revenue titles, managed plantation (such as Sandalwood, Teak, and Fruit orchards), and accessible road infrastructure.",
    highlights: [
      "Large parcel sizes suitable for weekend cottages and family retreats",
      "Managed plantation services with drip irrigation systems",
      "Serene natural surroundings away from urban pollution",
      "Proximity to regional ring road (RRR) expansion belts",
    ],
    keyConsiderations: [
      "Clarity of Dharani portal records and Passbook verification",
      "Access road width and public right-of-way legitimacy",
      "Groundwater availability and electrical connection feasibility",
      "Clear understanding of agricultural land regulations in Telangana",
    ],
    locations: [
      "Shankarpally, Chevella & Vikarabad Belt (Ananthagiri Hills)",
      "Bengaluru Highway (Shadnagar, Balanagar, Jadcherla)",
      "Mumbai Highway (Sangareddy, Sadashivpet, Zaheerabad)",
      "Srisailam Highway (Kadthal, Amangal, Kalwakurthy)",
      "Warangal Highway (Bhongir, Yadagirigutta, Aler)",
      "Vijayawada Highway (Choutuppal, Gundrampally)",
      "Shamirpet & Siddipet Highway Belt"
    ],
    highways: [
      "Shankarpally & Vikarabad Route",
      "Bengaluru Highway (NH-44)",
      "Mumbai Highway (NH-65)",
      "Srisailam Highway (NH-765)",
      "Warangal Highway (NH-163)",
      "Vijayawada Highway (NH-65)",
      "Shamirpet Highway"
    ],
  },
  {
    id: "commercial-properties",
    title: "Commercial Properties",
    tag: "Strategic Retail & Office",
    image: "/images/commercial-property.jpg",
    summary: "High-visibility retail spaces, corporate offices, and commercial land parcels in thriving economic corridors.",
    description: "Position your business or capital where footfall and corporate momentum converge. We evaluate commercial properties across Hyderabad's business hubs, ensuring optimal frontage, Grade-A building specifications, parking ratios, and zoning compliance.",
    highlights: [
      "Strategic high-visibility road frontage",
      "Grade-A commercial construction with modern elevator banks",
      "Adequate dedicated basement parking and power backup",
      "High daytime catchment and corporate density",
    ],
    keyConsiderations: [
      "Footfall traffic counts and catchment demographics",
      "Efficiency of floor plate and ceiling clearance heights",
      "Compliance with commercial fire safety and parking norms",
      "Leaseability and business tenant profile suitability",
    ],
    locations: [
      "Financial District & Knowledge City",
      "Madhapur & Jubilee Hills Road 36/45",
      "Kukatpally & Miyapur Commercial Belts (Mumbai Highway)",
      "Kompally Highway Commercial Strip (Medchal Highway)",
      "Uppal & LB Nagar Commercial Hubs (Warangal & Vijayawada Highways)",
      "Shamshabad Airport Corridor (Bengaluru Highway)",
      "Ameerpet, Erragadda & Punjagutta Prime Retail Strips"
    ],
    highways: [
      "Mumbai Highway (NH-65)",
      "Medchal Highway (NH-44)",
      "Bengaluru Highway (NH-44)",
      "Vijayawada Highway (NH-65)",
      "Warangal Highway (NH-163)"
    ],
  },
];

export const CLIENT_JOURNEY = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "We start by listening attentively to your lifestyle aspirations, financial parameters, preferred corridors, and investment horizon.",
  },
  {
    step: "02",
    title: "Property Shortlisting",
    desc: "Our research team filters the market to identify the top 3-4 properties that authentically meet your legal, financial, and spatial criteria.",
  },
  {
    step: "03",
    title: "Property Evaluation",
    desc: "We conduct a thorough evaluation examining title legitimacy, master plan compliance, builder track record, and micro-market pricing.",
  },
  {
    step: "04",
    title: "Site Visit",
    desc: "We accompany you on organized, private site inspections to inspect on-ground reality, approach roads, and neighborhood growth.",
  },
  {
    step: "05",
    title: "Documentation",
    desc: "We assist with link document verification, RERA checks, draft sale agreements, and legal consultations for complete peace of mind.",
  },
  {
    step: "06",
    title: "Purchase Support",
    desc: "We facilitate transparent negotiations, transaction structuring, and smooth registration coordination at the sub-registrar office.",
  },
  {
    step: "07",
    title: "After-Sales Assistance",
    desc: "Our partnership continues with mutation guidance, physical handover inspection, utility setup, and long-term portfolio advisory.",
  },
];

export const TRUST_FACTORS = [
  {
    title: "Genuine & Carefully Selected Properties",
    desc: "We do not list hundreds of arbitrary properties. Every layout, villa, and apartment in our portfolio has undergone strict initial screening.",
    iconName: "Shield",
  },
  {
    title: "High-Growth Locations",
    desc: "We focus on Hyderabad's strategic growth corridors driven by the Outer Ring Road, IT clusters, and planned infrastructure expansions.",
    iconName: "Compass",
  },
  {
    title: "Professional Property Guidance",
    desc: "Our advice is rooted in real-world micro-market data, comparative valuation, and unbiased consultative analysis.",
    iconName: "Award",
  },
  {
    title: "Transparent Communication",
    desc: "No hidden charges, no exaggerated claims, and no pressure tactics. We present clear facts so you can decide with confidence.",
    iconName: "Eye",
  },
  {
    title: "Dedicated Client Support",
    desc: "You have a dedicated advisor handling your queries from the first conversation through to post-registration formalities.",
    iconName: "HeartHandshake",
  },
  {
    title: "End-to-End Assistance",
    desc: "From the initial requirement conversation to physical possession, mutation, and long-term advice, we walk every step with you.",
    iconName: "Layers",
  },
];

export const HOW_WE_HELP_CHOOSE = [
  {
    title: "Location & Connectivity",
    desc: "Proximity to the Outer Ring Road, metro lines, radial roads, and primary workplace clusters.",
  },
  {
    title: "Budget & Cashflow",
    desc: "Structured evaluation ensuring the purchase is sustainable, whether self-funded or through bank financing.",
  },
  {
    title: "Development Potential",
    desc: "Analysis of government master plans, regional zoning, and scheduled arterial road expansions.",
  },
  {
    title: "Amenities & Infrastructure",
    desc: "Underground drainage, power grids, water lines, clubhouse quality, and internal road widths.",
  },
  {
    title: "Intended Use",
    desc: "Distinguishing between immediate self-use, phased construction, or long-term generational asset holding.",
  },
  {
    title: "Investment Objectives",
    desc: "Tailoring choices to your target horizon, liquidity requirements, and risk preference.",
  },
];
