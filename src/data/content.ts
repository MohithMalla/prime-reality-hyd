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
}

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
    locations: ["Shankarpally Corridor", "Mokila & Chevella Belt", "Kompally & Medchal", "Maheshwaram & Shamshabad", "Adibatla & Sagar Highway"],
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
    locations: ["Kokapet & Gandipet", "Tellapur & Kollur", "Mokila Villa Belt", "Appa Junction & Rajendra Nagar", "Bowenpally & Kompally"],
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
    locations: ["Financial District & Gachibowli", "Nanakramguda & Khajaguda", "Kondapur & Hitec City", "Miyapur & Nizampet", "Bachupally & Pragathi Nagar"],
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
    locations: ["Chevella & Vikarabad Belt", "Shadnagar & Balanagar", "Sangareddy & Zaheerabad Corridor", "Yadagirigutta & Bhongir", "Ibrahimpatnam Belt"],
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
    locations: ["Financial District & Knowledge City", "Madhapur & Jubilee Hills Road 36/45", "Kukatpally & Miyapur Main Corridors", "Kompally Highway Strip", "Uppal & LB Nagar Commercial Belts"],
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
