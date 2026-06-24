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
      'Poor operational visibility creates millions in hidden annual losses.',
    titleHighlight: '',
    intro:
      'A typical large industrial site with 5,000–10,000 trackable assets may lose €1–3 million annually through hidden costs caused by poor operational visibility — including search time, delays, manual coordination, duplicate purchases, idle equipment, inefficient resource use and safety risks.',
    introHighlight: '€1–3 million annually',
    panoramicAlt:
      'Four industrial operational pain scenarios: difficulty locating equipment, workforce and access risks, material-handling delays, and site congestion.',
    scenarios: [
      {
        id: 'assets',
        number: '01',
        label: 'Lost assets & search time',
        title: 'Assets cannot be found when needed',
        body: 'Teams lose productive time searching for tools, equipment and materials, while misplaced resources cause delays, unnecessary rentals and duplicate purchases.',
      },
      {
        id: 'workforce',
        number: '02',
        label: 'Workforce, access & safety risks',
        title: 'Workforce presence and access are difficult to verify',
        body: 'Managers may not know exactly who is on site, whether access is authorised or when workers enter restricted or hazardous areas.',
      },
      {
        id: 'material-flow',
        number: '03',
        label: 'Production & material-flow delays',
        title: 'Material-flow disruptions delay production',
        body: 'Missing materials, unavailable equipment and poorly coordinated movements interrupt workflows and leave people and machinery waiting.',
      },
      {
        id: 'congestion',
        number: '04',
        label: 'Congestion & coordination gaps',
        title: 'Fragmented information reduces site throughput',
        body: 'When operational teams lack one shared real-time view, traffic, logistics and work activities become harder to coordinate and decisions are made too late.',
      },
    ],
    impact: {
      heading: 'Hidden operational impact',
      outcome: {
        value: '€1–3M',
        label: 'Estimated hidden annual impact per large industrial site',
        supporting:
          'Created by the combined effect of lost working time, poor equipment utilisation, asset losses, duplicate purchasing, delays and manual operational work.',
      },
      connectorLabel: 'Examples of hidden cost drivers',
      factors: [
        {
          value: '5–10 min',
          label: 'Lost per worker every day',
          supporting:
            'Time spent searching for and re-checking tools, equipment and materials. Across a large workforce, this can accumulate into thousands of productive hours annually.',
        },
        {
          value: '10–30%',
          label: 'Equipment utilisation loss',
          supporting:
            'Potential utilisation lost through idle, unavailable or underused rented equipment.',
        },
        {
          value: '1–3%',
          label: 'Asset loss and write-offs',
          supporting:
            'Estimated annual loss equivalent to 1–3% of the value of the relevant asset base.',
        },
        {
          value: '2–5%',
          label: 'Duplicate and unnecessary purchases',
          supporting:
            'Estimated annual unnecessary purchasing equivalent to 2–5% of the value of the relevant asset base.',
        },
        {
          value: '5–15%',
          label: 'Additional operational effort',
          supporting:
            'Extra labour and coordination effort caused by manual inventory, re-checking and fragmented information.',
        },
      ],
      disclaimer:
        'Illustrative benchmark ranges. Actual impact depends on site size, asset value, workforce, utilisation model and operational processes.',
    },
    environmental: {
      heading: 'Environmental impact',
      body: 'Poor operational visibility also increases environmental cost through unnecessary movement, repeated internal logistics, inefficient material handling and avoidable waste.',
    },
  },

  solution: {
    id: 'solution',
    label: 'Solution',
    headline:
      'WIMSS connects industrial reality with digital decision-making in real time.',
    intro: [
      'WIMSS provides real-time operational visibility of assets, materials, workforce and logistics flows, helping managers see what is where, who is on site, how resources move between operational zones, and where delays, bottlenecks, safety risks or coordination gaps are emerging.',
      'Live dashboards, alerts, movement history, reports and operational analytics reveal utilisation patterns, recurring bottlenecks, exceptions and operational trends. This enables faster response, better resource allocation, data-driven decisions and AI-supported operational improvement.',
      'WIMSS works alongside existing ERP, access-control and IT systems, adding the real-time physical visibility and operational intelligence they typically lack rather than replacing them.',
    ],
    heroImageAlt:
      'WIMSS operator monitoring live operational dashboards with shipyard activity visible through the window behind',
    capabilities: [
      {
        label: 'Find',
        text: 'Locate assets, materials and equipment when they are needed.',
      },
      {
        label: 'Verify',
        text: 'Confirm workforce presence, identity and authorised access.',
      },
      {
        label: 'Monitor',
        text: 'See movements, zones, delays, bottlenecks and exceptions in real time.',
      },
      {
        label: 'Analyse & optimise',
        text: 'Turn operational data into analytics, insights and AI-supported decisions.',
      },
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
      'WIMSS is beyond concept stage. The core RAIN RFID-based technology has been validated through two proof-of-concept projects in real industrial environments. The current focus is productization, customer validation and preparation for the next industrial pilot.',
    indicators: [
      {
        id: 'validation',
        label: 'Validation status',
        value: '2 Proofs of Concept completed',
        detail:
          'Core technology and operating principles have been tested in real industrial conditions.',
      },
      {
        id: 'current-stage',
        label: 'Current stage',
        value: 'Working prototype / pre-pilot',
        detail:
          'Estimated TRL 6–7. The technology is validated, and customer-specific use cases are now being refined.',
      },
      {
        id: 'next-step',
        label: 'Next step',
        value: 'Industrial pilot preparation',
        detail:
          'Priority use cases, pilot scope, deployment model and commercial terms are currently being defined.',
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
        'Validate the highest-value WIMSS Workforce and WIMSS Assets use cases',
        'Refine product requirements with industrial customers',
        'Define pilot scope and measurable success criteria',
        'Prepare pilot deployment and commercial pricing',
      ],
    },
  },

  traction: {
    id: 'traction',
    label: 'Traction',
    title: 'Active customer validation and industrial engagement',
    intro:
      'WIMSS is building market traction through active shipyard discussions, targeted customer discovery, ecosystem engagement and an upcoming real-world demonstration.',
    demoNote:
      'Customer-facing Workforce and Assets demos are available for validation discussions.',
    pipelineSummary: [
      '2 active shipyard discussions',
      '1 upcoming real-world demonstration',
      '2 customer discovery surveys in progress',
      '2 international market-access channels opened',
    ],
    columns: {
      category: 'Category',
      organisation: 'Organisation / contact',
      currentStatus: 'Current status',
      nextStep: 'Next step',
      status: 'Status',
    },
    rows: [
      {
        id: 'rmc',
        category: 'Customer validation',
        organisation: 'Rauma Marine Constructions',
        contact: ['Roni Jukakoski', 'Director, Strategic Development'],
        currentStatus:
          'WIMSS Workforce dashboard and reporting demo requested and shared. Rauma Marine Constructions has reviewed the WIMSS Workforce concept. Current discussions focus on verified workforce presence, contractor visibility, identity validation, restricted-zone access and operational reporting.',
        nextStep:
          'Follow up on feedback regarding the WIMSS dashboard and reporting tools.',
        statusTag: 'Active discussion',
      },
      {
        id: 'meyer',
        category: 'Strategic fit',
        organisation: {
          text: 'Meyer Turku — MERiON Future Operations',
          href: 'https://www.meyerturku.fi/en/news-publications/news/meyer-turkus-new-merion-program-guides-the-maritime-industry-amid-upheavals/',
        },
        contact: ['Ilkka Rytköla', 'Innovation / MERiON'],
        currentStatus:
          'Meyer Turku has verbally confirmed that WIMSS is a good fit for the Future Operations focus of the Business Finland co-funded MERiON lead-company programme. WIMSS has not yet been formally selected into the programme, and no pilot agreement has been made.',
        nextStep:
          'Follow-up meeting scheduled for 30 June 2026 to discuss possible next steps.',
        statusTag: 'Verbal fit confirmation',
      },
      {
        id: 'west-avia',
        category: 'Test environment & customer discovery',
        organisation: {
          text: 'West Avia Lab Day — Seinäjoki Airport',
          href: 'https://tapahtumat.intoseinajoki.fi/labrapaiva',
        },
        contact: ['Into Seinäjoki / West Avia'],
        currentStatus: [
          'WIMSS will be presented and tested during the West Avia Lab Day on 19 August 2026 at Seinäjoki Airport. The planned demonstration will explore the use of a drone-mounted WIMSS reader to scan tagged assets and transmit location data to the operational dashboard.',
          'The event also provides opportunities to connect with companies from the Roves Business Area, regional development partners and potential industrial test environments.',
          'Into Seinäjoki has provided WIMSS with a list of regional companies that may be relevant to the solution. It has been agreed that these companies can be contacted before the event to assess their interest in observing the demonstration and participating in further customer discovery.',
        ],
        discoveryContacts: {
          heading: 'Potential customer discovery contacts',
          items: [
            'Atria / Seinäjoki',
            'Juustoportti / Jalasjärvi',
            'Valio / Lapua',
            'HANZA Mechnics / Seinäjoki',
            'Valmet',
            'Vaski Group',
            'MSK Group',
            'Kometos Oy',
            'Finn-Power Oy',
            'Dinolift Oy',
            'Regional logistics and warehousing companies (Huhtala, Kaukokiito, DB Schenker, Posti Logitiikka, Kiitolinja)',
            'Agricultural technology manufacturers (Junkkari Oy, Agronic Oy, NHK Group, Farmcomp Oy, Pel-Tuote Oy, Elho Oy)',
          ],
        },
        nextStep:
          'Contact the identified companies to assess their interest in observing the demonstration. Share the WIMSS validation survey with interested companies and identify relevant follow-up interviews and use cases.',
        statusTag: 'Upcoming demonstration',
      },
      {
        id: 'customer-discovery',
        category: 'Customer discovery',
        organisation: [
          'Turku Repair Yard',
          'SATA Shipbuilding',
          'Helsinki Shipyard',
          'Rauma Marine Constructions — Assets',
        ],
        currentStatus:
          'Validation surveys have been shared to evaluate operational challenges related to asset visibility, yard logistics, material flow and workforce coordination.',
        statusNotes: [
          'For Rauma Marine Constructions, the additional survey focuses specifically on WIMSS Assets use cases, while the Workforce-related challenge and discussion have already been identified separately.',
        ],
        nextStep:
          'Collect responses and use the findings to identify the most relevant follow-up interviews and use cases.',
        statusTag: 'Awaiting responses',
      },
      {
        id: 'international',
        category: 'International market access',
        marketSegments: [
          {
            organisation: 'Germany',
            contact: ['Anne Engel', 'Annmarine.de'],
            currentStatus:
              'An introductory meeting has been completed and focused WIMSS material has been shared. Anne Engel has offered to identify relevant maritime companies and support potential customer introductions in the German market.',
            nextStep: 'Await proposed contacts and follow up on potential introductions.',
            statusTag: 'Introductions in progress',
          },
          {
            organisation: 'Belgium',
            contact: [
              'Hanna Tuohino',
              'Innovation Liaison Officer, Flanders Investment & Trade',
              '(Embassy of Belgium)',
            ],
            currentStatus:
              'Initial discussion regarding possible maritime and industrial ecosystem connections in the Belgian market.',
            nextStep:
              'Reconnect in September 2026, provide an update on WIMSS progress and identify relevant Belgian companies and potential introduction opportunities.',
            statusTag: 'Follow-up planned',
          },
        ],
      },
      {
        id: 'visa',
        category: 'External recognition',
        organisation: "Visa She's Next",
        currentStatus:
          'Selected as a Top 10 finalist from 230 applications in the Visa She’s Next pitching competition.',
        nextStep:
          'Use the recognition to strengthen credibility in customer, partner and investor discussions.',
        statusTag: 'Top 10 finalist',
      },
    ],
    nextMilestone:
      'Convert the strongest customer discussions and demonstration results into a clearly scoped industrial pilot with agreed success metrics, deployment plan and commercial terms.',
  },

  market: {
    id: 'market',
    label: 'Market',
    title:
      'Large industrial sites where visibility improves safety, coordination and throughput',
    intro:
      'WIMSS serves operationally complex industrial sites where people, assets and materials move across large physical areas, often with multiple subcontractors, fragmented information and growing pressure to improve safety, efficiency and real-time control.',
    blocks: [
      {
        id: 'beachhead',
        title: 'Primary beachhead',
        items: [
          'Shipbuilding and ship repair yards',
          'Ports and maritime logistics hubs',
          'Large outdoor industrial yards in Finland and the Nordics',
        ],
        supporting:
          'WIMSS enters the market through high-complexity maritime and industrial environments where operational visibility has direct impact on safety, delays, coordination and resource use.',
      },
      {
        id: 'expansion',
        title: 'Expansion segments',
        items: [
          'Large construction and modular production sites',
          'Metal-heavy outdoor industrial environments',
          'Industrial logistics and equipment yards',
          'Other contractor-heavy operational sites with asset and workforce visibility challenges',
        ],
        supporting:
          'After initial validation in maritime and industrial yards, WIMSS can expand into adjacent outdoor operational environments with similar visibility and coordination problems.',
      },
      {
        id: 'drivers',
        title: 'Market drivers',
        items: [
          {
            label: 'Operational complexity',
            detail:
              'more contractors, suppliers, moving assets and distributed work zones',
          },
          {
            label: 'Safety and compliance',
            detail:
              'need for verified presence, restricted-zone control and operational traceability',
          },
          {
            label: 'Hidden inefficiency',
            detail:
              'time lost searching, re-checking, coordinating and reacting too late',
          },
          {
            label: 'Sustainability',
            detail:
              'less waste from unnecessary movement, duplication and poor coordination',
          },
          {
            label: 'AI-ready operations',
            detail:
              'industrial companies need trustworthy real-world operational data, not only plans and assumptions',
          },
        ],
      },
    ],
    closing:
      'WIMSS starts with maritime and industrial yards where the operational pain is immediate and measurable, then expands to adjacent large-site environments with similar visibility challenges.',
  },

  businessModel: {
    id: 'business-model',
    label: 'Business model',
    title: 'Start with a focused pilot — expand into recurring site-wide revenue',
    intro:
      'WIMSS follows a B2B land-and-expand model. Customers begin with a focused operational pilot, move to implementation and recurring SaaS platform use, and expand the solution across additional zones, assets, workforce groups, operational use cases and customer sites.',
    introNote:
      'Pricing, packaging and the balance between software, hardware and implementation services are currently being validated with industrial customers.',
    steps: [
      {
        id: 'pilot',
        title: 'Paid pilot',
        statement: 'Validate one high-value use case in a defined operational area.',
        includes: [
          'Defined site, zone or workflow',
          'Selected assets or workforce group',
          'Agreed pilot objectives and success criteria',
          'Temporary reader and tag configuration',
          'Dashboard and reporting setup',
        ],
        revenueType: 'One-time pilot fee',
      },
      {
        id: 'implementation',
        title: 'Implementation',
        statement: 'Configure WIMSS for continuous operational use.',
        includes: [
          'Site and zone configuration',
          'Tag and reader deployment',
          'Dashboard and user setup',
          'Customer onboarding',
          'ERP, access-control or other data integrations where required',
        ],
        revenueType: 'One-time implementation & integration fee',
      },
      {
        id: 'subscription',
        title: 'Recurring SaaS subscription',
        statement:
          'Provide continuous access to WIMSS Workforce and/or WIMSS Assets.',
        includes: [
          'Live operational maps and dashboards',
          'Alerts and event monitoring',
          'Movement and presence history',
          'Search and reporting',
          'Platform support and software updates',
        ],
        revenueType: 'Recurring SaaS subscription',
        revenueNote:
          'Subscription terms may be annual or monthly depending on the final commercial model.',
      },
      {
        id: 'expansion',
        title: 'Site & account expansion',
        statement: 'Expand from the first use case to broader operational coverage.',
        includes: [
          'Additional zones and facilities',
          'More assets, materials and workforce groups',
          'Additional Workforce and Assets use cases',
          'Advanced analytics',
          'Additional integrations and support services',
          'Expansion to other sites within the same customer organisation',
        ],
        revenueType: 'Growing recurring revenue per customer',
      },
    ],
    buyers: {
      heading: 'Target buyers & budget owners',
      items: [
        'Shipyard and industrial-site operators',
        'Operations and yard management',
        'Logistics and materials management',
        'Safety, security and compliance functions',
        'Digitalisation, IT and transformation leadership',
      ],
      explanation:
        'The economic buyer and budget owner depend on the initial use case. Workforce-related deployments may be led by operations, security or compliance, while asset-related deployments may be led by logistics, materials or yard management.',
    },
    revenueStreams: {
      heading: 'Revenue streams',
      items: [
        {
          title: 'Pilot revenue',
          description:
            'Paid pilot project with a defined scope, use case and validation criteria.',
        },
        {
          title: 'Implementation revenue',
          description:
            'Configuration, deployment support, onboarding and system integration.',
        },
        {
          title: 'Recurring SaaS revenue',
          description:
            'Ongoing platform access to WIMSS Workforce, WIMSS Assets, dashboards, alerts, history, reporting, support and software updates.',
        },
        {
          title: 'Expansion revenue',
          description:
            'Additional zones, modules, tracked resources, analytics, integrations and customer sites.',
        },
      ],
    },
    pricing: {
      heading: 'Current pricing hypothesis',
      body: 'Pricing is expected to depend on site size, selected Workforce and Assets modules, number of operational zones, tracked assets or workforce groups, reader infrastructure, integration requirements and support level.',
      assumption:
        'The current market model uses approximately €100,000 in mature annual recurring revenue per industrial site as a planning assumption.',
      assumptionLabel:
        'Planning assumption — not yet validated customer pricing',
      closing:
        'Final pilot pricing, SaaS subscription tiers and commercial packaging will be refined through customer interviews and pilot negotiations.',
    },
    landExpand: {
      heading: 'Start small. Prove value. Expand across the site.',
      text: 'A customer may begin with one problem — such as workforce verification, restricted-zone monitoring or asset search — and later expand WIMSS to additional operational zones, asset categories, contractor groups, workflows and customer sites.',
    },
  },

  team: {
    id: 'team',
    label: 'Team',
    title:
      'Industrial technology expertise combined with operational and commercial experience',
    intro:
      'WIMSS is being developed within InnoTrain Oy by a core team combining industrial IoT, RFID, cloud architecture, operational development and B2B commercialisation.',
    introNote:
      'The core team is supported by a flexible network of specialists who can join product development, customer pilots and deployments when specific expertise is required.',
    members: [
      {
        id: 'ren',
        name: 'Natalia Ren',
        role: 'Founder & Chief Architect',
        profile:
          'Industrial IoT and digital transformation specialist with more than 20 years of experience in connected industrial systems, cloud architecture, RFID and real-time monitoring solutions.',
        responsibilities: [
          'Product vision and system architecture',
          'Industrial IoT and Azure cloud architecture',
          'RFID, sensing and operational data solutions',
          'Technology development and customer deployment design',
          'Technical partnerships and integrations',
        ],
        emphasis: 'Technology, architecture and product development',
        email: 'info@innotrain.fi',
        phone: '+358 50 486 0424',
      },
      {
        id: 'belousova',
        name: 'Natalia Belousova',
        role: 'Business Development & Commercialisation',
        profile:
          'Business and operational development professional with more than 20 years of experience in industrial companies, operational processes, international business and organisational development.',
        responsibilities: [
          'Customer discovery and validation',
          'Business model and commercialisation',
          'Sales, partnerships and market entry',
          'Industrial use-case development',
          'Communications, pitching and investor readiness',
        ],
        emphasis: 'Customers, commercialisation and market development',
        email: 'info@innotrain.fi',
        phone: '+358 40 518 9542',
      },
    ],
    expertsOnDemand: {
      heading: 'Experts on demand',
      intro:
        'WIMSS operates with a lean core team and adds specialist competence when required by the product stage, customer use case or deployment environment.',
      areas: [
        'RFID hardware, antennas and field testing',
        'Azure cloud, software and data architecture',
        'ERP, access-control and industrial-system integrations',
        'Industrial deployment and installation support',
        'UX, dashboard and product design',
        'Legal, finance, funding and commercial advisory',
      ],
      closing:
        'This model allows WIMSS to access specialised competence without building a large fixed organisation before customer demand and deployment needs are validated.',
    },
    nextPriorities: {
      heading: 'Next team priorities',
      intro:
        'As customer pilots and commercial activity grow, the next core capabilities to strengthen are software and data engineering, industrial deployment capacity and B2B sales.',
      priorities: [
        'Software / data engineering',
        'Industrial deployment and customer success',
        'B2B sales and account development',
      ],
    },
  },

  ask: {
    id: 'ask',
    label: 'Ask from mentors',
    title: 'Where mentor support can accelerate WIMSS',
    intro:
      'WIMSS is moving from validated technology and active customer discussions toward a clearly scoped industrial pilot and repeatable go-to-market model.',
    introNote:
      'We are looking for practical guidance, critical feedback and relevant introductions that help us convert current traction into customer commitments.',
    columns: {
      priority: 'Priority',
      support: 'Where we need support',
      outcome: 'Concrete outcome',
    },
    priorities: [
      {
        id: 'pilot',
        number: '01',
        title: 'Convert discussions into a pilot',
        support:
          'Challenge and improve our pilot approach for RMC, Meyer Turku, West Avia and other active industrial contacts.',
        outcome:
          'A pilot proposal with a clearly defined use case, site scope, success metrics, timeline, responsibilities and commercial next step.',
      },
      {
        id: 'buyer',
        number: '02',
        title: 'Identify the real buyer',
        support:
          'Help us map the problem owner, decision-maker, economic buyer and budget owner for WIMSS Workforce and WIMSS Assets.',
        outcome:
          'A clear buyer map for shipyards and industrial sites, including the roles most likely to sponsor and approve a pilot.',
        secondary:
          'Operations, yard management, logistics, materials, security, HSE, digitalisation and IT.',
      },
      {
        id: 'pricing',
        number: '03',
        title: 'Validate pricing & commercial packaging',
        support:
          'Review our pilot-to-implementation-to-SaaS model and help define credible early pricing.',
        outcome:
          'A practical pricing hypothesis for the paid pilot, implementation, recurring SaaS subscription and site expansion.',
        outcomeNote:
          'We especially need guidance on how much to include in a pilot, what should be charged separately and what commercial commitment should follow a successful pilot.',
      },
      {
        id: 'use-case',
        number: '04',
        title: 'Prioritise the first commercial use case',
        support:
          'Help us decide which use case creates the fastest and strongest path to measurable customer value.',
        outcome:
          'A clear first commercial focus between Workforce and Assets, supported by customer urgency, buying potential, deployment feasibility and reference value.',
        useCases: [
          'Workforce presence and contractor verification',
          'Identity validation and restricted-zone monitoring',
          'Asset and material search',
          'Yard logistics and movement visibility',
          'Zone-level inventory and operational reporting',
        ],
      },
      {
        id: 'introductions',
        number: '05',
        title: 'Open relevant customer doors',
        support:
          'Introduce WIMSS to industrial decision-makers who experience the problems we solve.',
        outcome:
          'Warm introductions to relevant contacts at shipyards, ports, repair yards, industrial logistics operations, large construction sites and contractor-heavy industrial environments.',
        introductions: [
          'Operations and yard leaders',
          'Logistics and materials managers',
          'HSE, security and compliance leaders',
          'Digitalisation and innovation leaders',
          'Industrial IT and transformation decision-makers',
        ],
      },
      {
        id: 'adjacent-markets',
        number: '06',
        title: 'Validate adjacent markets',
        support:
          'Help us test whether WIMSS has a strong and commercially relevant use case beyond shipyards, particularly in ports, industrial logistics yards and large construction environments.',
        outcome:
          'A clear evidence-based decision on which adjacent market should be prioritised after shipyards.',
        outcomeNote:
          'Shipyards are currently the most validated beachhead. Ports have shown an initial signal of interest through discussion with a port software provider. Construction remains an unvalidated market hypothesis and requires direct customer interviews and industry access.',
        mentorAsk:
          'Warm introductions to construction-industry operations, logistics, site-management and equipment-management decision-makers would be especially valuable.',
      },
    ],
    pressingQuestion: {
      heading: 'Current pressing question',
      text: 'Which customer, use case and pilot structure should WIMSS prioritise first to create the strongest commercial reference?',
      supporting:
        'We want the first pilot to prove measurable value, create a credible customer reference and support repeatable sales to similar industrial sites.',
    },
    journeyOutcomes: {
      heading: 'What success would look like after this journey',
      items: [
        'One clearly prioritised beachhead use case',
        'One industrial pilot proposal under active negotiation',
        'A validated pricing and go-to-market hypothesis',
      ],
    },
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
