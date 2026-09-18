export const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about-sec" },
  { label: "SERVICES", href: "#service-sec" },
  { label: "NEWS", href: "#blog-sec" },
  { label: "CONTACT", href: "/contact", isRoute: true },
];

export const siteIcons = {
  contact: {
    location: "/04_location.png",
    phone: "/01_phone.png",
    email: "/02_email.png",
    website: "/03_website.png",
  },
  abrasives: "/09_abrasives.png",
  services: {
    "industrial-paints": "/05_industrial_paints.png",
    "marine-paints": "/06_marine_coatings.png",
    "fireproof-intumescent": "/07_intumescent_fireproofing.png",
    "floor-coatings": "/08_industrial_flooring.png",
    "blasting-equipment": "/10_blasting_equipments.png",
    "spray-equipment": "/11_spray_equipments.png",
    "coating-application": "/12_application_services.png",
    "coating-inspection": "/13_coating_inspection.png",
  },
};

export const siteContent = {
  brand: {
    name: "AGH Coating360",
    shortName: "AGH COATING360",
    tagline: "Protecting What You Build",
    description:
      "Complete Solutions for Industrial and Marine Paints, Intumescent Fireproof Coatings, Industrial Flooring, Spray Equipment, Abrasives, Blasting Equipment, Industrial Application Services & Coating Inspection.",
    logo: "/coating360-logo.png",
    footerLogo: "/coating360-logo.png",
    logoWhite: "/coating360-logo.png",
    favicon: "/favicon-32.png",
    website: "www.aghcoating360.com",
  },
  images: {
    heroBackground: "/assets/img/hero/hero_bg_1_1.png",
    heroSlides: [
      "/assets/coating-images/marine painting.png",
      "/assets/coating-images/fireproof painting.png",
      "/assets/coating-images/floor coating.png",
    ],
    about: "/assets/coating-images/industrial painting.png",
    whyChoose: "/assets/coating-images/machine service.png",
    processBackground: "/assets/coating-images/floor coating (1).png",
    cta: "/assets/coating-images/SERVICES.png",
    contact: "/assets/coating-images/machine service 2.png",
    contactBackground: "/assets/coating-images/ChatGPT Image Sep 4, 2026, 02_35_40 PM.png",
    serviceCards: [
      "/assets/coating-images/1.INDUSTRIAL PAINT.png",
      "/assets/coating-images/2.MARINE COATING.png",
      "/assets/coating-images/3.INTUMESCENT FIREPROOFING.png",
      "/assets/coating-images/4.INDUSTRIAL FLOORING.png",
      "/assets/coating-images/5.ABRASIVES.png",
      "/assets/coating-images/7.SPRAYER EQUIPMENTS.png",
      "/assets/coating-images/8.PAINTING SERVICES.png",
      "/assets/coating-images/9.INSPECTION SERVICES.png",
    ],
    abrasiveSamples: [
      { label: "Garnet", image: "/assets/coating-images/5.ABRASIVES.png" },
      { label: "Aluminum Oxide", image: "/assets/coating-images/6.BLASTING EQUIPMENT.png" },
      { label: "Copper Slag", image: "/assets/coating-images/7.png" },
      { label: "Steel Shot", image: "/assets/coating-images/8.png" },
    ],
    news: [
      "/assets/coating-images/ChatGPT Image Sep 4, 2026, 02_35_40 PM.png",
      "/assets/coating-images/marine painting.png",
      "/assets/coating-images/industrial painting image.png",
    ],
    decorative: [
      "/assets/coating-images/1.png",
      "/assets/coating-images/2.png",
      "/assets/coating-images/3.png",
      "/assets/coating-images/4.png",
      "/assets/coating-images/6.png",
      "/assets/coating-images/7.png",
      "/assets/coating-images/8.png",
      "/assets/coating-images/9.png",
    ],
  },
  contact: {
    phones: ["9894586563", "9095067767"],
    salesEmail: "sales@aghcoating360.com",
    serviceEmail: "service@coating360.com",
    address: {
      line1: "Door No: 1A, ST-14",
      line2: "Anaimalaiamman Kovil Street",
      line3: "L&T Bypass Road, Vellalore Post",
      city: "Coimbatore-641111",
      full: "Door No: 1A, ST-14, Anaimalaiamman Kovil Street, L&T Bypass Road, Vellalore Post, Coimbatore-641111",
    },
    hours: "Mon - Sat: 10:00am to 07:30pm",
  },
  heroSlides: [
    {
      title: "AGH COATING360 — Protecting What You Build",
      text: "Complete Solutions for Industrial and Marine Paints, Intumescent Fireproof Coatings, Industrial Flooring, Spray Equipment, Abrasives, Blasting Equipment, Industrial Application Services & Coating Inspection.",
    },
    {
      title: "From Surface Preparation to Long-Term Protection",
      text: "AGH COATING360 is an industrial coating and surface protection solutions company providing comprehensive products and professional services to the Industrial, Marine, Energy, Infrastructure and Construction sectors.",
    },
    {
      title: "Your Complete Partner for Industrial Surface Protection",
      text: "From surface preparation to final coating inspection, our experienced team delivers reliable, technically driven solutions designed to protect steel, concrete, equipment and critical infrastructure.",
    },
  ],
  about: {
    subtitle: "ABOUT US",
    title: "Your Complete Partner for Industrial Surface Protection",
    text: "AGH COATING360 is an industrial coating and surface protection solutions company providing comprehensive products and professional services to the Industrial, Marine, Energy, Infrastructure and Construction sectors.",
    checklist: [
      "Industrial Paints, Marine Coatings, Intumescent Fireproof Coatings & Industrial Flooring",
      "Blasting Abrasives, Blasting Equipment, Coating Spray Equipment & Application Services",
    ],
    mission: {
      title: "Our Mission",
      text: "To provide technically appropriate, reliable and cost-effective surface protection solutions that help extend the service life of assets and structures.",
    },
    vision: {
      title: "Our Vision",
      text: "To be the trusted one-stop partner for industrial surface protection — from preparation and application to inspection and long-term protection.",
    },
    approach: {
      title: "PREPARE. PROTECT. PRESERVE.",
      text: "We believe that long-lasting protection starts with proper surface preparation and continues through the selection of the right coating system, professional application and systematic inspection.",
    },
  },
  services: [
    {
      id: "01",
      slug: "industrial-paints",
      title: "Industrial Paints",
      text: "High-performance protective coating systems for demanding industrial environments.",
      icon: "ri-paint-brush-fill",
      iconImage: siteIcons.services["industrial-paints"],
    },
    {
      id: "02",
      slug: "marine-paints",
      title: "Marine Coatings",
      text: "Advanced protection for vessels and marine environments in the toughest conditions.",
      icon: "ri-ship-fill",
      iconImage: siteIcons.services["marine-paints"],
    },
    {
      id: "03",
      slug: "fireproof-intumescent",
      title: "Intumescent Fireproofing",
      text: "Passive fire protection solutions that enhance safety and structural integrity.",
      icon: "ri-fire-fill",
      iconImage: siteIcons.services["fireproof-intumescent"],
    },
    {
      id: "04",
      slug: "floor-coatings",
      title: "Industrial Flooring",
      text: "Durable, high-performance flooring systems for industrial and commercial facilities.",
      icon: "ri-layout-grid-fill",
      iconImage: siteIcons.services["floor-coatings"],
    },
    {
      id: "05",
      slug: "blasting-equipment",
      title: "Blasting & Abrasives",
      text: "Premium blasting abrasives and equipment for superior surface preparation.",
      icon: "ri-settings-3-fill",
      iconImage: siteIcons.services["blasting-equipment"],
    },
    {
      id: "06",
      slug: "spray-equipment",
      title: "Spray Equipment",
      text: "Professional spray equipment for precise and efficient coating application.",
      icon: "ri-contrast-drop-2-fill",
      iconImage: siteIcons.services["spray-equipment"],
    },
    {
      id: "07",
      slug: "coating-application",
      title: "Coating Application",
      text: "Professional blasting, surface preparation and industrial coating application services.",
      icon: "ri-brush-fill",
      iconImage: siteIcons.services["coating-application"],
    },
    {
      id: "08",
      slug: "coating-inspection",
      title: "Coating Inspection",
      text: "Comprehensive inspection services to ensure coating quality, compliance and long-term performance.",
      icon: "ri-search-eye-fill",
      iconImage: siteIcons.services["coating-inspection"],
    },
  ],
  whyChoose: {
    subtitle: "Why Choose Us",
    title: "One Partner. Complete Coating Solutions.",
    items: [
      {
        title: "Technical Expertise",
        text: "Experience in industrial protective coatings, blasting and coating application.",
      },
      {
        title: "Complete Product Range",
        text: "Abrasives, blasting equipment, paints, protective coatings and spray equipment.",
      },
      {
        title: "Professional Application",
        text: "Experienced teams for industrial painting, fireproofing and flooring applications.",
      },
      {
        title: "Inspection & Quality Control",
        text: "Inspection support throughout surface preparation and coating application.",
      },
      {
        title: "Project-Based Solutions",
        text: "Solutions developed according to substrate, environment, coating specification and project requirements.",
      },
      {
        title: "After-Sales Support",
        text: "Equipment service, technical support and application assistance.",
      },
    ],
  },
  process: {
    subtitle: "Turnkey Coating Solutions",
    title: "From Surface Preparation to Final Inspection",
    steps: [
      {
        number: "01",
        title: "Surface Preparation & Abrasive Blasting",
        text: "Effective surface preparation is the foundation of a high-performance coating system.",
      },
      {
        number: "02",
        title: "Primer & Coating Application",
        text: "Professional application of primer, intermediate and finish coats per project specifications.",
      },
      {
        number: "03",
        title: "Specialised Coatings",
        text: "Intumescent fireproofing, marine coatings, tank linings and industrial floor systems.",
      },
      {
        number: "04",
        title: "Inspection & Final Handover",
        text: "Quality inspection, documentation and handover to ensure coating compliance and performance.",
      },
    ],
  },
  news: [
    {
      title: "Complete Industrial Surface Protection Under One Roof",
      category: "Coating Solutions",
      text: "AGH Coating360 supports projects with industrial paints, marine coatings, fireproofing, flooring, blasting equipment and coating inspection.",
      date: "27 AUG 2026",
    },
    {
      title: "From Surface Preparation to Final Inspection",
      category: "Turnkey Services",
      text: "Our turnkey coating cycle covers abrasive blasting, primer, intermediate coat, finish coat, specialised coatings and quality inspection.",
      date: "20 AUG 2026",
    },
    {
      title: "Protecting What You Build Across Key Industries",
      category: "Industries",
      text: "We serve infrastructure, oil & gas, marine, manufacturing, power plants, pipelines, storage tanks and commercial industrial projects.",
      date: "12 AUG 2026",
    },
  ],
  cta: {
    subtitle: "GET FREE QUOTE",
    title: "Let's Protect What You Build",
    text: "Whether you need industrial paints, marine coatings, abrasives, blasting equipment, spray equipment, coating inspection, painting services, intumescent fireproofing or industrial flooring, AGH Coating360 is ready to support your project.",
  },
};

export default siteContent;
