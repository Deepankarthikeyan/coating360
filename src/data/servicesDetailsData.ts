import { siteIcons } from "./siteContent";

export interface ServiceHighlight {
  title: string;
  text: string;
}

export interface ServiceSection {
  title: string;
  items: string[];
}

export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  text: string;
  iconImage: string;
  heroImage: string;
  secondaryImage: string;
  intro: string;
  highlights: ServiceHighlight[];
  sections: ServiceSection[];
  closingText?: string;
}

export const servicesDetails: ServiceDetail[] = [
  {
    slug: "industrial-paints",
    id: "01",
    title: "Industrial Paints – Protective Coatings",
    shortTitle: "Industrial Paints",
    text: "High-performance protective coating systems for demanding industrial environments.",
    iconImage: siteIcons.services["industrial-paints"],
    heroImage: "/assets/coating-images/1.png",
    secondaryImage: "/assets/coating-images/industrial painting image.png",
    intro:
      "We supply a comprehensive range of industrial protective coating systems for new construction, maintenance, refurbishment and repair projects across demanding industrial environments. Our coating solutions are formulated and selected to provide reliable protection against atmospheric corrosion, chemical exposure, abrasion, moisture, marine environments and high-temperature service conditions.",
    highlights: [
      {
        title: "Corrosion Protection",
        text: "Reliable protection against atmospheric corrosion, chemical exposure and aggressive industrial environments.",
      },
      {
        title: "High-Performance Systems",
        text: "Zinc-rich, epoxy, polyurethane and specialty coatings engineered for long-term asset protection.",
      },
      {
        title: "Technical Selection",
        text: "Expert guidance to select the right coating system for substrate, environment and performance requirements.",
      },
    ],
    sections: [
      {
        title: "Protection Against",
        items: [
          "Atmospheric Corrosion",
          "Chemical Exposure",
          "Abrasion and Mechanical Wear",
          "Moisture and Humidity",
          "Marine and Offshore Environments",
          "Industrial and Aggressive Environments",
          "High-Temperature Service Conditions",
        ],
      },
      {
        title: "Our Product Range Includes",
        items: [
          "Zinc-Rich Silicate & Epoxy Coatings",
          "High-Build Epoxy & MIO Coatings",
          "Polyurethane & Polysiloxane Topcoats",
          "Abrasion-Resistant & Modified Epoxy Coatings",
          "Food-Grade Epoxy Coatings",
          "Silicone Aluminium & Silicone Acrylic Coatings",
          "High-Temperature Resistant (HR) Epoxy Coatings",
          "CUI (Corrosion Under Insulation) Coatings",
          "Inert Polymeric Matrix Coatings",
          "Epoxy Phenolic Coatings",
          "Epoxy Tank Linings",
          "Direct-to-Metal (DTM) & Primer-Cum-Finish Coatings",
          "Anti-Fouling Coatings",
          "Zinc Phosphate Primers",
          "Alkyd & Enamel Coatings",
        ],
      },
      {
        title: "Applications & Industries",
        items: [
          "Structural Steel & Steel Fabrication",
          "Valves & Process Equipment",
          "Wind Energy Structures & Components",
          "Oil & Gas Facilities",
          "Pipelines & Pipeline Infrastructure",
          "Storage & Process Tanks",
          "Industrial Machinery & Equipment",
          "Power & Energy Projects",
          "Infrastructure Projects",
          "Pre-Engineered Buildings (PEB)",
          "Marine & Offshore Assets",
        ],
      },
    ],
    closingText:
      "Our technical approach helps customers select the right coating system for the substrate, service environment, operating conditions and required performance, supporting long-term asset protection and reduced lifecycle maintenance costs.",
  },
  {
    slug: "marine-paints",
    id: "02",
    title: "Marine Paints & Coatings",
    shortTitle: "Marine Coatings",
    text: "Advanced protection for vessels and marine environments in the toughest conditions.",
    iconImage: siteIcons.services["marine-paints"],
    heroImage: "/assets/coating-images/2.png",
    secondaryImage: "/assets/coating-images/marine painting.png",
    intro:
      "Marine environments demand high-performance coating systems capable of handling severe corrosion conditions. AGH Coating360 provides marine paints and protective coating solutions for applications exposed to seawater, humidity, salt spray and aggressive marine environments.",
    highlights: [
      {
        title: "Marine-Grade Protection",
        text: "Coating systems engineered to withstand seawater, salt spray and aggressive marine corrosion.",
      },
      {
        title: "Shipyard & Offshore",
        text: "Solutions for shipyards, offshore structures, port infrastructure and coastal steel assets.",
      },
      {
        title: "Long-Term Durability",
        text: "High-performance systems that protect marine structures and extend service life in harsh conditions.",
      },
    ],
    sections: [
      {
        title: "Applications",
        items: [
          "Marine structures",
          "Shipyards",
          "Offshore structures",
          "Port and harbour infrastructure",
          "Marine equipment",
          "Steel structures exposed to coastal environments",
        ],
      },
    ],
    closingText:
      "From ship hulls to offshore platforms, we deliver marine coating solutions that provide reliable protection in the most demanding saltwater and coastal environments.",
  },
  {
    slug: "fireproof-intumescent",
    id: "03",
    title: "Fireproof & Intumescent Coatings",
    shortTitle: "Intumescent Fireproofing",
    text: "Passive fire protection solutions that enhance safety and structural integrity.",
    iconImage: siteIcons.services["fireproof-intumescent"],
    heroImage: "/assets/coating-images/3.png",
    secondaryImage: "/assets/coating-images/fireproof painting.png",
    intro:
      "Structural steel requires specialised protection when fire resistance is critical. AGH Coating360 provides fireproof and intumescent coating application services for structural steel and other suitable applications.",
    highlights: [
      {
        title: "Fire-Rated Protection",
        text: "Water-based and solvent-based intumescent coatings for structural steel fire protection.",
      },
      {
        title: "Thickness-Controlled Application",
        text: "Precise application based on steel section, section factor and required fire rating.",
      },
      {
        title: "Quality Monitoring",
        text: "Inspection and quality monitoring to achieve manufacturer-approved fire protection performance.",
      },
    ],
    sections: [
      {
        title: "Our Services Include",
        items: [
          "Water-based intumescent coatings",
          "Solvent-based intumescent coatings",
          "Structural steel fire protection",
          "Fire-rated coating application",
          "Thickness-controlled application",
          "Inspection and quality monitoring",
        ],
      },
    ],
    closingText:
      "The required coating thickness is determined based on factors such as steel section, section factor, required fire rating and manufacturer's approved system. We work with project specifications and manufacturer recommendations to achieve the required fire protection performance.",
  },
  {
    slug: "floor-coatings",
    id: "04",
    title: "Industrial & Commercial Floor Coatings",
    shortTitle: "Industrial Flooring",
    text: "Durable, high-performance flooring systems for industrial and commercial facilities.",
    iconImage: siteIcons.services["floor-coatings"],
    heroImage: "/assets/coating-images/4.png",
    secondaryImage: "/assets/coating-images/floor coating.png",
    intro:
      "We provide complete industrial and commercial flooring solutions designed for demanding environments. Our floor coating systems can provide resistance to traffic, chemicals, abrasion, impact and industrial operating conditions.",
    highlights: [
      {
        title: "Heavy-Duty Performance",
        text: "Epoxy and PU flooring systems built to withstand industrial traffic, chemicals and abrasion.",
      },
      {
        title: "Complete Solutions",
        text: "From warehouses and factories to workshops and commercial facilities.",
      },
      {
        title: "System Selection",
        text: "Recommendations based on substrate condition, traffic, chemical exposure and performance requirements.",
      },
    ],
    sections: [
      {
        title: "Solutions Include",
        items: [
          "Epoxy flooring",
          "PU flooring",
          "Heavy-duty industrial flooring",
          "Commercial floor coatings",
          "Chemical-resistant flooring",
          "Warehouse flooring",
          "Factory flooring",
          "Workshop flooring",
          "Maintenance and refurbishment flooring",
        ],
      },
    ],
    closingText:
      "We recommend the appropriate system based on substrate condition, traffic, chemical exposure, operating environment and performance requirements.",
  },
  {
    slug: "blasting-equipment",
    id: "05",
    title: "Blasting Equipment & Abrasives",
    shortTitle: "Blasting & Abrasives",
    text: "Premium blasting abrasives and equipment for superior surface preparation.",
    iconImage: siteIcons.services["blasting-equipment"],
    heroImage: "/assets/coating-images/5.png",
    secondaryImage: "/assets/coating-images/6.BLASTING EQUIPMENT.png",
    intro:
      "Effective surface preparation is the foundation of a high-performance coating system. AGH COATING360 supplies a comprehensive range of abrasive blasting equipment, blasting accessories and industrial abrasives for surface preparation across industrial, marine, infrastructure and maintenance applications.",
    highlights: [
      {
        title: "Industrial Abrasives",
        text: "Copper slag, steel grit, steel shot, aluminium oxide, glass beads and application-specific abrasives.",
      },
      {
        title: "Blasting Equipment",
        text: "Blast pots, hoses, nozzles, air preparation equipment and abrasive recovery systems.",
      },
      {
        title: "Standards Compliance",
        text: "Solutions supporting NACE, SSPC and ISO surface preparation standards per project specifications.",
      },
    ],
    sections: [
      {
        title: "Industrial Abrasives",
        items: [
          "Copper Slag",
          "Steel Grit",
          "Steel Shot",
          "Aluminium Oxide",
          "Glass Beads",
          "Other Application-Specific Abrasives",
        ],
      },
      {
        title: "Blasting & Surface Preparation Equipment",
        items: [
          "Abrasive Blast Pots",
          "Blast Hoses & Couplings",
          "Blast Nozzles & Holders",
          "Air Preparation Equipment",
          "Moisture Separators",
          "Abrasive Recovery & Handling Equipment",
          "Blasting Accessories & Safety Equipment",
        ],
      },
    ],
    closingText:
      "We help customers select the right blasting equipment, abrasive and surface preparation method based on the substrate, specified coating system, required surface profile, cleanliness grade and applicable project standards. From Abrasive Selection to Surface Preparation — We Help You Build the Right Foundation for Long-Lasting Protection.",
  },
  {
    slug: "spray-equipment",
    id: "06",
    title: "Paint Spray Equipment – Sales & Services",
    shortTitle: "Spray Equipment",
    text: "Professional spray equipment for precise and efficient coating application.",
    iconImage: siteIcons.services["spray-equipment"],
    heroImage: "/assets/coating-images/6.png",
    secondaryImage: "/assets/coating-images/machine service.png",
    intro:
      "We supply and support professional paint spraying equipment for industrial and protective coating applications. Our services help contractors and industrial customers improve coating productivity, finish quality and application efficiency.",
    highlights: [
      {
        title: "Airless Spray Systems",
        text: "Industrial spray equipment and accessories for protective coating applications.",
      },
      {
        title: "Maintenance & Servicing",
        text: "Equipment troubleshooting, maintenance, servicing and repair support.",
      },
      {
        title: "Technical Guidance",
        text: "Equipment selection and technical guidance to optimise application efficiency.",
      },
    ],
    sections: [
      {
        title: "Our Services Include",
        items: [
          "Airless spray equipment",
          "Industrial spray equipment",
          "Spray accessories",
          "Pumps and spare parts",
          "Equipment troubleshooting",
          "Maintenance and servicing",
          "Repair support",
          "Equipment selection and technical guidance",
        ],
      },
    ],
    closingText:
      "We help contractors and industrial customers improve coating productivity, finish quality and application efficiency.",
  },
  {
    slug: "coating-application",
    id: "07",
    title: "Paint Blasting & Coating Application Services",
    shortTitle: "Coating Application",
    text: "Professional blasting, surface preparation and industrial coating application services.",
    iconImage: siteIcons.services["coating-application"],
    heroImage: "/assets/coating-images/7.png",
    secondaryImage: "/assets/coating-images/SERVICES.png",
    intro:
      "AGH COATING360 provides professional abrasive blasting, surface preparation and industrial coating application services for new construction, maintenance, refurbishment and asset protection projects. Our experienced application teams execute coating systems in accordance with project specifications, coating manufacturer recommendations and applicable international standards, with a strong focus on safety, quality and productivity.",
    highlights: [
      {
        title: "Full Application Capabilities",
        text: "Structural steel blasting and painting from C1 to CX environments, tank linings, pipelines and offshore structures.",
      },
      {
        title: "Quality-Focused Process",
        text: "Surface preparation verification, WFT/DFT control, environmental monitoring and final inspection.",
      },
      {
        title: "Industry Experience",
        text: "Oil & gas, petrochemical, power, marine, pharmaceutical and infrastructure project expertise.",
      },
    ],
    sections: [
      {
        title: "Our Application Capabilities Include",
        items: [
          "Structural Steel Blasting & Painting – C1 to CX environments",
          "Industrial & High-Performance Coating Systems",
          "Tank Internal & External Lining",
          "Pipeline & Process Equipment Coating",
          "Onshore & Offshore Structures",
          "Marine & Heavy-Duty Coating Applications",
          "Pharmaceutical & Hygienic Environment Coatings",
          "Chemical & Petrochemical Facilities",
          "Refineries & Oil & Gas Projects",
          "Power Plants & Energy Projects",
          "PEB & Infrastructure Projects",
          "Maintenance & Refurbishment Painting",
          "Intumescent Fireproof Coating Application",
          "Industrial Epoxy & PU Floor Coating Application",
        ],
      },
      {
        title: "Quality-Focused Application",
        items: [
          "Surface preparation and cleanliness verification",
          "Surface profile measurement",
          "Environmental condition monitoring",
          "Correct mixing and application procedures",
          "Wet Film Thickness (WFT) control",
          "Dry Film Thickness (DFT) measurement",
          "Intercoat inspection and recoat control",
          "Final coating inspection and documentation",
        ],
      },
    ],
    closingText:
      "We combine trained manpower, appropriate application equipment, technical supervision and quality control to deliver coating systems that achieve the required performance and extend the service life of industrial assets. From Blasting to Final Coat — Professional Application. Measurable Quality. Long-Term Protection.",
  },
  {
    slug: "coating-inspection",
    id: "08",
    title: "Coating Inspection Services",
    shortTitle: "Coating Inspection",
    text: "Comprehensive inspection services to ensure coating quality, compliance and long-term performance.",
    iconImage: siteIcons.services["coating-inspection"],
    heroImage: "/assets/coating-images/8.png",
    secondaryImage: "/assets/coating-images/machine service 2.png",
    intro:
      "Quality inspection is an essential part of any protective coating project. AGH Coating360 provides coating inspection and quality control services to help ensure that coating work complies with project specifications and applicable standards.",
    highlights: [
      {
        title: "Surface Preparation Inspection",
        text: "Cleanliness assessment, surface profile measurement and environmental condition monitoring.",
      },
      {
        title: "Coating Quality Control",
        text: "WFT/DFT measurement, adhesion testing, holiday detection and visual inspection.",
      },
      {
        title: "Documentation & Reporting",
        text: "Final coating inspection with comprehensive inspection documentation and reporting.",
      },
    ],
    sections: [
      {
        title: "Inspection Services Include",
        items: [
          "Surface preparation inspection",
          "Surface cleanliness assessment",
          "Surface profile measurement",
          "Environmental condition monitoring",
          "Wet Film Thickness (WFT) measurement",
          "Dry Film Thickness (DFT) measurement",
          "Adhesion testing",
          "Holiday detection",
          "Visual inspection",
          "Coating defect identification",
          "Final coating inspection",
          "Inspection documentation and reporting",
        ],
      },
    ],
    closingText:
      "Our inspection approach helps identify coating issues before they become costly failures.",
  },
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined =>
  servicesDetails.find((service) => service.slug === slug);

export default servicesDetails;
