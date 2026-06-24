/**
 * WIMSS one-pager content — edit this file for weekly mentor updates.
 * Last updated: 26 May 2026
 */

export const siteMeta = {
  program: 'Startup Journey 2026',
  company: 'InnoTrain Oy',
  website: 'www.innotrain.fi',
  contactEmail: 'info@innotrain.fi',
}

export const hero = {
  statusLine:
    'Real-time operational visibility · Outdoor-first · Industrial intelligence',
  tagline:
    'A real-time operational visibility solution for managing assets, workforce and operational flows across large industrial sites.',
  description:
    'WIMSS helps shipyards, ports, construction sites and industrial logistics operations reduce search time, operational delays, coordination gaps and hidden costs — while improving resource utilization, safety and decision-making.',
  valueStatement: ['See more', 'React faster', 'Operate better'],
}

export const heroModules = {
  heading: 'Two visibility solutions. One operational picture.',
  modules: [
    {
      id: 'workforce',
      name: 'WIMSS Workforce',
      subtitle: 'Workforce and contractor visibility',
      description:
        'Real-time visibility of employees and contractors, including verified presence, zone location, access validation and unauthorized-access alerts.',
    },
    {
      id: 'assets',
      name: 'WIMSS Assets',
      subtitle: 'Asset and material visibility',
      description:
        'Real-time visibility of tools, equipment and materials, including asset location, movement history, fast search and automated inventory monitoring.',
    },
  ],
}

export const products = [
  {
    id: 'workforce',
    name: 'WIMSS Workforce',
    subtitle: 'Workforce and contractor visibility',
    imageAlt:
      'Workers in PPE entering an industrial site while a supervisor monitors activity on a tablet.',
    capabilities: [
      'Verify who is on site',
      'See workforce presence by operational zone',
      'Create virtual geofences and restricted areas',
      'Validate identity and access permissions',
      'Receive real-time zone alerts and export compliance reports',
    ],
  },
  {
    id: 'assets',
    name: 'WIMSS Assets',
    subtitle: 'Asset and material visibility',
    imageAlt:
      'Shipyard yard with pallets, crates, industrial components and a forklift among dockyard materials.',
    capabilities: [
      'Locate assets, equipment and materials',
      'Track movement between operational zones',
      'Create virtual storage and operational geofences',
      'Detect missing, misplaced or unauthorized asset movement',
      'Automate zone-level inventory monitoring and reports',
    ],
  },
]

export const sections = {
  problem: {
    id: 'problem',
    label: 'Problem',
    titleLead:
      'When operational reality is not visible in real time, industrial sites lose',
    titleHighlight: 'time, money and control.',
    intro:
      'A large industrial site with 5,000–10,000 trackable assets may face €1–3 million in hidden annual losses through searching, delays, manual coordination, duplicate purchases, idle equipment and inefficient resource use.',
    introHighlight: '€1–3 million',
    points: [
      {
        id: 'assets',
        imageKey: 'assets',
        title: 'Asset and material uncertainty',
        body: 'Teams lose time searching for tools, equipment and materials, re-checking deliveries and confirming availability. Missing or misplaced resources cause delays, unnecessary rentals and duplicate purchases.',
      },
      {
        id: 'workforce',
        imageKey: 'workforce',
        title: 'Workforce and access uncertainty',
        body: 'Companies cannot always verify who is on site, who entered restricted areas, whether someone has already left or how contractors move across operational zones. This creates safety, compliance and coordination risks.',
      },
      {
        id: 'reactive',
        imageKey: 'reactive',
        title: 'Reactive operations',
        body: 'Managers receive incomplete or delayed information and react late to missing resources, logistics bottlenecks, congestion, safety deviations and changing operational conditions.',
      },
    ],
    impact: {
      heading: 'Hidden operational impact',
      subheading:
        'Small daily visibility gaps accumulate into significant annual cost and operational risk.',
      primaryMetrics: [
        {
          value: '€1–3M',
          label: 'Hidden annual impact',
          support: 'Illustrative annual impact per large industrial site',
          featured: true,
        },
        {
          value: '5–10 MIN',
          label: 'Lost per worker, every day',
          support:
            'Searching and re-checking tools, materials and equipment',
        },
        {
          value: '10–30%',
          label: 'Equipment utilization loss',
          support: 'Idle or underused rented equipment',
        },
      ],
      secondaryMetrics: [
        {
          value: '1–3%',
          label: 'Asset loss and write-offs per year',
        },
        {
          value: '2–5%',
          label: 'Duplicate and unnecessary purchases per year',
        },
        {
          value: '5–15%',
          label:
            'Extra operational effort from manual inventory and re-checking',
        },
      ],
      disclaimer:
        'Illustrative industry benchmark ranges. Actual impact depends on site size, asset base, workforce and operational processes.',
    },
    environmental: {
      heading: 'Environmental impact',
      body: 'Limited operational visibility leads to unnecessary vehicle movement, repeated logistics operations, inefficient material handling and wasted resources.',
      items: [
        'Unnecessary vehicle movement',
        'Repeated logistics',
        'Inefficient material handling',
        'Wasted resources',
      ],
    },
  },

  solution: {
    id: 'solution',
    label: 'Solution',
    intro: [
      'WIMSS collects real-time location and presence data from tagged assets, materials and people and brings it together in one operational view of the site. Managers can see what is where, who is on site, how resources move between operational zones and where attention is needed.',
      'WIMSS provides live maps, alerts, movement history and operational reports while working alongside existing ERP and IT systems rather than replacing them.',
    ],
    howItWorks: {
      heading: 'How WIMSS works',
    },
    modulesHeading: 'Core use cases',
    modulesLead: 'One operational picture across workforce and assets.',
    whyWimss: {
      heading: 'Why WIMSS',
      lead: 'Built for fast deployment, industrial reliability and operational scalability.',
      features: [
        {
          title: 'Battery-free RAIN RFID tags',
          detail:
            'no charging or battery replacement for long-term industrial use',
        },
        {
          title: 'Flexible reader setup',
          detail:
            'fixed, handheld and vehicle-mounted readers for gates, zones and mobile operations',
        },
        {
          title: 'Minimal fixed infrastructure',
          detail: 'fast pilots and straightforward full-site scaling',
        },
        {
          title: 'Live web dashboards',
          detail:
            'maps, alerts, movement history and reports in one interface',
        },
        {
          title: 'Designed for metal-heavy environments',
          detail:
            'AI-assisted methods improve data reliability in challenging conditions',
        },
      ],
    },
  },

  stage: {
    id: 'stage',
    label: 'Stage',
    title: 'Technology validated — now preparing for industrial pilots',
    intro:
      'WIMSS is beyond the concept stage. The core RAIN RFID-based technology has been validated through two proof-of-concept projects in real industrial environments. The current focus is productizing the solution, validating priority customer use cases and preparing the next industrial pilots.',
    indicators: [
      {
        id: 'current-stage',
        label: 'Current stage',
        value: 'Working prototype / pre-pilot',
        detail:
          'Core technology validated; product and customer-specific use cases are being refined.',
      },
      {
        id: 'trl',
        label: 'Technology readiness',
        value: 'Estimated TRL 6–7',
        detail:
          'System prototype demonstrated and tested in relevant industrial environments.',
      },
      {
        id: 'validation',
        label: 'Validation completed',
        value: '2 Proofs of Concept',
        detail:
          'Technology and core operating principles tested in real-world conditions.',
      },
      {
        id: 'commercial',
        label: 'Commercial status',
        value: 'Customer validation and pilot preparation',
        detail:
          'Priority use cases, pilot scope and commercial model are currently being validated.',
      },
    ],
    journey: [
      { id: 'concept', label: 'Concept', status: 'completed' },
      { id: 'poc1', label: 'Proof of Concept 1', status: 'completed' },
      { id: 'poc2', label: 'Proof of Concept 2', status: 'completed' },
      {
        id: 'validated',
        label: 'Technology validated',
        status: 'completed',
      },
      {
        id: 'productization',
        label: 'Productization & customer validation',
        status: 'current',
      },
      { id: 'pilot', label: 'Next: industrial pilot', status: 'next' },
    ],
    currentFocus: {
      heading: 'Current focus',
      items: [
        'Validate the highest-value Workforce and Assets use cases',
        'Define pilot scope and measurable success criteria',
        'Refine product requirements with industrial customers',
        'Prepare pilot deployment and commercial pricing',
      ],
    },
  },

  traction: {
    id: 'traction',
    label: 'Traction',
    title: 'Active customer validation and industrial engagement',
    intro:
      'With the underlying technology already validated, WIMSS is now building market traction through active shipyard discussions, customer-facing product demonstrations and upcoming real-world testing.',
    blocks: [
      {
        id: 'rmc',
        title: 'RMC — Customer validation',
        signal: 'Dashboard and reporting demo requested and shared',
        details: [
          'Rauma Marine Constructions has reviewed the WIMSS Workforce concept. Current discussions focus on verified workforce presence, contractor visibility, identity validation, restricted-zone access and operational reporting.',
        ],
        status: 'Active discussion',
      },
      {
        id: 'meyer',
        title: 'Meyer Turku — Strategic fit',
        signal: 'WIMSS identified as a good fit for MeriOn Future Operations',
        details: [
          'Current discussions focus on asset visibility, material flow, shipyard logistics, outdoor yard operations and the potential role of WIMSS in future intelligent shipyard operations.',
        ],
        status: 'Strategic fit confirmed',
        link: {
          label: 'About MERiON',
          href: 'https://www.meyerturku.fi/en/news-publications/news/meyer-turkus-new-merion-program-guides-the-maritime-industry-amid-upheavals/',
        },
      },
      {
        id: 'west-avia',
        title: 'West Avia Lab Day — Real-world demonstration',
        signal: 'Invited to demonstrate WIMSS at Seinäjoki Airport',
        details: [
          'WIMSS will be presented and tested during the West Avia Lab Day on 19 August 2026 at Seinäjoki Airport. The planned demonstration explores the use of a drone-mounted WIMSS reader for scanning tagged assets and transmitting location data into the operational dashboard.',
          'The event also provides access to the West Avia business area, development partners and potential industrial test environments.',
        ],
        status: 'Upcoming test & demonstration',
        link: {
          label: 'Event page',
          href: 'https://tapahtumat.intoseinajoki.fi/labrapaiva',
        },
      },
      {
        id: 'product',
        title: 'Product readiness',
        signal: 'Customer-facing Workforce and Assets prototypes',
        details: [
          'Interactive product flows have been developed for live site overview, zone drill-down, workforce and asset visibility, alerts, movement history, search and exportable operational reports.',
        ],
        status: 'Demo ready',
      },
    ],
    externalRecognition: {
      heading: 'External recognition',
      items: [
        {
          title: "Visa She's Next",
          signal: 'Selected as a Top 10 finalist from 230 applications',
        },
      ],
    },
    industryOutreach: {
      heading: 'Customer discovery & industry outreach',
      status: 'Outreach in progress',
      text: 'WIMSS is conducting targeted customer discovery across the Finnish maritime sector. Validation surveys have been shared with Turku Repair Yard and SATA Shipbuilding to assess operational challenges related to asset visibility, yard logistics, material flow and workforce coordination.',
      secondaryText:
        'WIMSS has also been presented to maritime-industry stakeholders through targeted meetings and the Meriverkostot networking event in Naantali.',
      link: {
        label: 'About Meriverkostot',
        href: 'https://www.naantali.fi/fi/tyo-ja-yrittaminen/yrittajan-palvelut/meriverkostot',
      },
    },
    nextMilestone: {
      heading: 'Next milestone',
      summary:
        'Convert active customer discussions and practical demonstrations into a clearly scoped industrial pilot with agreed use cases, measurable success criteria, deployment plan and commercial terms.',
      points: [
        'Confirm pilot customer and site',
        'Agree pilot scope and success metrics',
        'Validate pricing and commercial model',
      ],
    },
  },

  market: {
    id: 'market',
    label: 'Market',
    title: 'Industrial yards where visibility drives safety and throughput',
    lead: 'Thousands of moving people and assets, multiple subcontractors, and growing logistics complexity — with pressure to digitize without disrupting operations.',
    segments: [
      'Shipbuilding and ship repair yards',
      'Ports and maritime logistics hubs',
      'Large construction and modular production sites',
      'Metal-heavy outdoor industrial environments',
    ],
    drivers: [
      'Operational complexity — more suppliers, integrations, and distributed partners',
      'Safety and compliance — verified presence and restricted-zone control',
      'Sustainability — less waste from search, duplication, and unnecessary movement',
      'AI-ready operations — need trustworthy real-world data, not assumptions',
    ],
  },

  businessModel: {
    id: 'business-model',
    label: 'Business model',
    title: 'Pilot-to-platform revenue',
    lead: 'Land with a focused operational pilot, prove measurable value, then expand coverage and modules across the site.',
    streams: [
      {
        title: 'Pilot projects',
        body: 'Scoped deployment: tagging, reader infrastructure, dashboards, and integration support for a defined area and use case.',
      },
      {
        title: 'Platform subscription',
        body: 'Ongoing access to WIMSS Workforce and/or WIMSS Assets — dashboards, alerts, history, and analytics.',
      },
      {
        title: 'Scale-up & integration',
        body: 'Additional zones, readers, ERP/data integrations, and advanced operational intelligence as customers expand.',
      },
    ],
    impactNote:
      'Illustrative impact on a typical large site: ~50% reduction in search time, significant savings on duplicate equipment purchases, and 1,000+ hours of productive time recovered annually.',
  },

  team: {
    id: 'team',
    label: 'Team',
    title: 'Industrial RFID and operational technology',
    lead: 'Built by InnoTrain Oy — combining field deployment experience with shipyard and logistics domain knowledge.',
    members: [
      {
        name: 'Dr. Natalia Reen',
        role: 'CEO',
        email: 'info@innotrain.fi',
        phone: '+358 50 486 0424',
      },
      {
        name: 'Natalia Belousova',
        role: 'Business Development',
        email: 'info@innotrain.fi',
        phone: '+358 40 518 9542',
      },
    ],
    note: '[Add co-founders, technical leads, and advisors as the team grows.]',
  },

  ask: {
    id: 'ask',
    label: 'Ask from mentors',
    title: 'What we need from coaches this journey',
    lead: 'We are validating industrial pilots and sharpening go-to-market for Nordic shipyards and yards.',
    items: [
      'Feedback on pilot structuring — scope, KPIs, and buyer stakeholders in shipyard environments',
      'Introductions to operations, HSE, and logistics leaders at yards and ports',
      'Guidance on pricing and contracting for pilot → multi-year platform deals',
      'Support prioritizing product roadmap between WIMSS Workforce and WIMSS Assets',
      '[Add your specific ask for the current week]',
    ],
  },
}

/** Weekly mentor updates — add a new entry at the top each week */
export const weeklyUpdates = [
  {
    week: 'Week 1',
    date: '26 May 2026',
    headline: 'Startup Journey pre-assignment — one-pager live',
    items: [
      'Published mentor one-pager with WIMSS Workforce and WIMSS Assets positioning',
      'Consolidated pilot narratives from RMC and Meyer Turku materials',
      'Next: confirm pilot KPIs and deployment timeline with active prospects',
    ],
  },
  {
    week: 'Week 0 (template)',
    date: '[Date]',
    headline: '[One-line summary of the week]',
    items: [
      '[Key progress or learning]',
      '[Customer / pilot update]',
      '[Blocker or decision needed from mentors]',
    ],
  },
]

export const navSections = [
  { id: 'problem', label: 'Problem' },
  { id: 'solution', label: 'Solution' },
  { id: 'stage', label: 'Stage' },
  { id: 'traction', label: 'Traction' },
  { id: 'market', label: 'Market' },
  { id: 'business-model', label: 'Business' },
  { id: 'team', label: 'Team' },
  { id: 'ask', label: 'Ask' },
  { id: 'updates', label: 'Updates' },
]
