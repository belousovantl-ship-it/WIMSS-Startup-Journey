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

/** Full Google Docs URL for the draft business plan (Ask · priority 04). */
export const businessPlanDraftUrl =
  'https://docs.google.com/document/d/1te_yMk61B7sBj6DEmfWxFiM3yuwjumRy/edit?usp=sharing&ouid=102834796788637439495&rtpof=true&sd=true'

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
      'WIMSS provides the real-time visibility needed to reduce hidden operational losses and improve operational efficiency.',
    intro: [
      'WIMSS helps industrial sites locate assets, materials and equipment when they are needed, reducing search time, unnecessary movement, duplicate purchases and delays caused by missing resources.',
      'It provides a real-time view of workforce presence, identity and authorised access, and creates virtual geofences around operational zones. This helps teams verify who is on site, control access to restricted areas and identify potential safety or compliance risks.',
      'By tracking the movement of people, assets and materials across operational zones, WIMSS reveals disruptions, bottlenecks and coordination gaps before they escalate into production delays.',
      'Live dashboards, alerts, movement history and operational analytics help identify recurring patterns, emerging risks and potential operational issues. This improves predictability, supports better planning and enables faster, more proactive decision-making.',
    ],
    heroImageAlt:
      'WIMSS operator monitoring live operational dashboards with shipyard activity visible through the window behind',
    video: {
      label: 'WIMSS — THE CORE IDEA',
      lead: 'A 2 minutes introduction to the core principles behind WIMSS and the operational visibility it provides.',
      youtubeId: '2fdb3kFj8zQ',
      iframeTitle:
        'WIMSS — the core idea: operational visibility principles',
    },
    howItWorks: {
      heading: 'How WIMSS works',
    },
    modulesHeading: 'Core use cases',
    modulesLead: 'One operational picture across workforce and assets.',
    operationalAnalytics: {
      heading: 'OPERATIONAL ANALYTICS & OPTIMISATION',
      text: 'WIMSS turns workforce and asset data into operational insights, trend analysis, risk indicators and AI-supported recommendations. This helps teams improve planning, identify recurring bottlenecks, anticipate potential issues and optimise resource utilisation across the site.',
    },
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
    vision: {
      label: 'Vision & future development',
      heading: 'From operational visibility to operational intelligence',
      body: 'WIMSS starts with real-time operational visibility of assets, workforce and zones. Its long-term vision is to evolve into an operational intelligence layer that connects live site data with analytics, AI and future digital twin capabilities — supporting predictive planning, operational optimisation and faster decision-making.',
      imageSrc: '/images/wimss-vision-digital-twin.png',
      imageAlt:
        'WIMSS future operational intelligence and digital twin vision for a connected maritime yard',
      imageWidth: 1024,
      imageHeight: 576,
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
        prefix: 'NOW',
        label: 'Productization & customer validation',
        status: 'current',
      },
      {
        id: 'pilot',
        prefix: 'NEXT',
        label: 'First industrial pilot',
        status: 'next',
      },
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
      '4 customer discovery surveys in progress',
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
          'Follow-up meeting scheduled for 29 June 2026 to discuss possible next steps.',
        statusTag: 'Verbal fit confirmation',
        updateLink: {
          href: '#update-meyer-merion-2026-06-29',
          ariaLabel:
            'View the Meyer Turku and MERiON update from 29 June 2026',
        },
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
          heading: 'POTENTIAL CUSTOMER DISCOVERY CONTACTS',
          columns: [
            {
              companies: [
                'Atria / Seinäjoki',
                'Valio / Lapua',
                'Valmet',
                'MSK Group',
                'Finn-Power Oy',
              ],
            },
            {
              companies: [
                'Juustoportti / Jalasjärvi',
                'HANZA Mechanics / Seinäjoki',
                'Vaski Group',
                'Kometos Oy',
                'Dinolift Oy',
              ],
            },
            {
              heading: 'REGIONAL LOGISTICS & WAREHOUSING',
              items:
                'Huhtala, Kaukokilto, DB Schenker, Posti Logistiikka, Kiitolinja',
            },
            {
              heading: 'AGRICULTURAL TECHNOLOGY MANUFACTURERS',
              items:
                'Junkkari Oy, Agronic Oy, NHK Group, Farmcomp Oy, Pel-Tuote Oy, Elho Oy',
            },
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
        name: 'Natalia Reen',
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
    profilesLink: {
      label: 'View detailed team profiles →',
      href: '/documents/wimss-team-profiles.pdf',
    },
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
        title: 'Convert customer interest into commitment',
        support:
          'Help us improve our customer-engagement approach. RMC and Meyer Turku have shown interest, reviewed WIMSS materials and requested further work, but progress remains reactive and dependent on their timing. We need to understand what we should do differently to create a structured two-way process with clear feedback, responsibilities and agreed next steps.',
        outcome:
          'A customer meeting with a clear agenda and an agreed next step — such as a completed validation survey, structured discovery workshop, pilot-scoping session or pilot proposal.',
      },
      {
        id: 'buyer',
        number: '02',
        title: 'Validate our customer-discovery outreach',
        support:
          'We have received a list of potentially relevant regional companies through Into Seinäjoki and now have an opportunity to approach them before the West Avia Lab Day. Before starting the outreach, we would like mentors to review and challenge our approach so that we contact the right people, ask the right questions and create a credible reason for them to engage.',
        outcome:
          'A mentor-reviewed outreach plan including target roles, the initial contact message, a clear call to action, the appropriate use of the WIMSS validation survey and a follow-up sequence leading to demonstration attendance or a customer-discovery interview.',
      },
      {
        id: 'pricing',
        number: '03',
        title: 'Validate our go-to-market focus',
        support:
          'Our current go-to-market entry point is the Finnish shipbuilding and ship-repair sector, where we already have warm contacts and active validation discussions. From there, we see two possible growth paths: expanding into international shipbuilding markets, including Germany and Belgium, or validating adjacent industries in Finland, such as ports, industrial logistics, manufacturing yards and construction.',
        secondary:
          'These opportunities are at different stages. Shipbuilding is currently the most validated segment, ports have shown an initial signal of interest, other industrial sectors will be explored through the Seinäjoki network, while construction remains an unvalidated hypothesis. We need mentors to challenge whether we should stay narrowly focused on shipbuilding or begin validating adjacent industries in parallel.',
        outcome:
          'A prioritised go-to-market roadmap for the next 6–12 months, defining:',
        outcomeItems: [
          'the primary beachhead segment;',
          'whether the next expansion should be geographic or industry-based;',
          'which adjacent market should be validated first;',
          'and what evidence should be required before WIMSS invests further time and resources in construction or other new sectors.',
        ],
      },
      {
        id: 'positioning',
        number: '04',
        title: 'Validate our market positioning',
        support:
          'Our current market-entry positioning presents WIMSS as a real-time operational visibility solution that addresses concrete and measurable customer problems: hidden losses, search time, limited visibility of assets and workforce, material-flow delays, safety risks and coordination gaps.',
        secondary:
          'Our longer-term vision is for WIMSS to evolve into an operational intelligence layer that connects real-world operational data with ERP, IoT and decision-making systems, and later enables AI-driven analytics, predictive planning and digital twin capabilities.',
        supportLead:
          'We would like mentors to challenge and validate this two-level positioning:',
        supportItems: [
          'Is the current customer promise sufficiently clear, credible and differentiated?',
          'Does the longer-term vision create a compelling growth story without overstating the maturity of the current product?',
          'How should we communicate the transition from operational visibility today to operational intelligence in the future?',
          'Which terminology and claims should be used now, and which should remain part of the product roadmap and long-term vision?',
        ],
        outcome: 'A validated positioning framework defining:',
        outcomeItems: [
          'the primary customer-facing promise for WIMSS today;',
          'the operational problems and measurable outcomes that should lead our sales and marketing communication;',
          'the market category WIMSS should aim to own;',
          'how the operational intelligence vision should be communicated;',
          'the role of AI and digital twin capabilities in the product roadmap;',
          'a clear distinction between current capabilities, planned development and long-term vision.',
        ],
      },
      {
        id: 'use-case',
        number: '05',
        title: 'Challenge and strengthen our business plan',
        support:
          'We are currently developing the WIMSS business plan and need experienced mentors to critically review its logic, assumptions and internal consistency.',
        secondary:
          'We need support in challenging our market focus, customer value proposition, business and revenue model, pricing assumptions, commercialisation path, delivery model, product roadmap and financial projections.',
        mentorAsk:
          'We also need to identify which assumptions and claims are sufficiently validated and where additional customer, market or financial evidence is still required.',
        outcome: 'A mentor-reviewed, fundraising-ready business plan with:',
        outcomeItems: [
          'a coherent market and customer strategy;',
          'a validated business and revenue model;',
          'credible commercial and financial assumptions;',
          'a clear product and commercialisation roadmap;',
          'clearly identified evidence gaps and next validation priorities.',
        ],
        outcomeLink: {
          label: 'View draft business plan →',
          href: businessPlanDraftUrl,
        },
      },
      {
        id: 'introductions',
        number: '06',
        title: 'Build an investment-readiness roadmap',
        support:
          'The WIMSS team has strong industrial, technology and commercial experience, but no previous experience of raising equity investment.',
        secondary:
          'We need support in determining how much capital should be raised at each stage of the company’s development, which operational, commercial and technical milestones each funding round should finance, and how an early-stage industrial technology company should be valued.',
        mentorAsk:
          'We also need guidance on what level of equity is reasonable to offer investors, which investment terms and investor rights should be considered, what evidence investors will expect, and how to structure the fundraising process without giving away an excessive share of the company too early.',
        outcome: 'An investment-readiness roadmap defining:',
        outcomeItems: [
          'the required funding stages and capital needs;',
          'the operational, commercial and technical milestones for each round;',
          'a credible valuation range and the assumptions behind it;',
          'an appropriate equity range and key investment terms;',
          'the materials, metrics and evidence required for investor discussions.',
        ],
      },
    ],
    journeyOutcomes: {
      heading: 'What success would look like after this journey',
      items: [
        'One qualified customer opportunity advanced to an agreed next step — discovery workshop, pilot scoping or pilot proposal',
        'A mentor-reviewed customer-discovery outreach plan with prioritised companies, target roles, messaging and follow-up sequence',
        'A prioritised 6–12 month go-to-market direction defining the primary segment, the next expansion path and the evidence required before entering adjacent markets',
        'A validated two-level market positioning: a clear operational visibility promise for customers today and a credible operational intelligence vision for WIMSS’s future development',
        'A mentor-reviewed, fundraising-ready business plan',
        'An investment-readiness roadmap covering funding stages, capital needs, milestones, valuation assumptions, equity range and investor requirements',
      ],
    },
  },
}

/** Weekly mentor updates — add a new entry at the top each week.
 *  Assign a stable updateNumber per week (creation order). Newest entry first in entries[]. */
export const weeklyUpdates = [
  {
    week: 'Week 1',
    date: '29 June–5 July 2026',
    anchorId: 'updates-week-1',
    entries: [
      {
        id: 'west-avia-lab-day-preparation',
        updateNumber: 6,
        anchorId: 'update-west-avia-preparation-2026-07-05',
        date: '5 July 2026',
        headline: 'West Avia Lab Day preparation and cross-industry outreach underway',
        status: 'Demonstration planning continues together with organisers and potential industry participants',
        statusBadge: 'Preparation in progress',
        statusBadgeTone: 'neutral',
        update: [
          'Preparation continues for the West Avia Lab Day, taking place at Seinäjoki Airport on 19 August 2026.',
          'WIMSS is coordinating with the event organisers to define the demonstration scenario, practical arrangements and the most relevant industrial use cases to present during the event.',
        ],
        customerDiscoveryOpportunity: [
          'The event also creates an opportunity to validate WIMSS with companies representing several different industries.',
          'WIMSS plans to contact selected companies identified through the organisers to assess their interest in observing the demonstration, discussing their operational visibility challenges and participating in further customer-discovery interviews.',
        ],
        officialLink: {
          label: 'View the West Avia Lab Day event →',
          href: 'https://tapahtumat.intoseinajoki.fi/labrapaiva?tab=1#main-content',
        },
      },
      {
        id: 'edr-antwerp-validation',
        updateNumber: 5,
        anchorId: 'update-edr-antwerp-2026-07-02',
        date: '2 July 2026',
        headline: 'International customer validation launched with EDR Antwerp Shipyard',
        status: 'First international cold call resulted in strong customer interest',
        statusBadge: 'Strong interest',
        statusBadgeTone: 'positive',
        strategicDecision: [
          'As many Finnish industrial decision-makers are unavailable during the summer holiday period, WIMSS decided to use July to expand customer validation internationally.',
          'The first target markets selected for this outreach are Belgium and the Netherlands, where there is a significant concentration of shipyards and maritime industry companies.',
        ],
        customerValidation: [
          'On 2 July 2026, WIMSS made its first international cold call to EDR Antwerp Shipyard.',
          'The discussion was held with the shipyard’s Logistics Manager, who immediately recognised the operational visibility problems addressed by WIMSS and confirmed that the company has been looking for a suitable solution.',
          'The contact showed strong interest and requested the WIMSS presentation and introductory video, which were sent after the call.',
        ],
        nextSteps: [
          'Hold a follow-up call with EDR Antwerp Shipyard on Monday, 6 July 2026.',
          'Continue customer-validation outreach to shipyards in Belgium and the Netherlands.',
        ],
      },
      {
        id: 'turku-repair-yard-follow-up',
        updateNumber: 4,
        anchorId: 'update-turku-repair-yard-2026-07-01',
        date: '1 July 2026',
        headline: 'Turku Repair Yard validation follow-up postponed until after the summer holidays',
        status: 'Initial contact established, but key decision-makers are currently unavailable',
        statusBadge: 'Follow-up in August',
        statusBadgeTone: 'neutral',
        update: [
          'WIMSS contacted Turku Repair Yard as part of its customer-validation work in the Finnish ship-repair sector.',
          'A discussion was held with the Technical Manager. The interest is there. However WIMSS was asked to reconnect after the holiday season, when the relevant team members are available again.',
        ],
      },
      {
        id: 'merion-application-submitted',
        updateNumber: 3,
        anchorId: 'update-merion-application-2026-07-02',
        date: '2 July 2026',
        headline: 'Meyer Turku MERiON ecosystem application submitted',
        status: 'WIMSS has applied to join the newly opened MERiON ecosystem',
        statusBadge: 'Application submitted',
        statusBadgeTone: 'positive',
        update: [
          'Meyer Turku announced that applications to join the renewed MERiON ecosystem are now open.',
          'Following the earlier discussions with Ilkka Rytkölä and the confirmation that WIMSS is a good fit for the programme’s Future Operations focus, WIMSS submitted its ecosystem application on 2 July 2026.',
        ],
        whyItMatters: [
          'Participation in MERiON could connect WIMSS with Meyer Turku, maritime industry partners and development projects focused on the future of shipyard operations.',
        ],
        officialLink: {
          label: 'View the MERiON programme →',
          href: 'https://www.meyerturku.fi/fi/tuotteet-teknologia/merion/',
        },
      },
      {
        id: 'meyer-turku-merion',
        updateNumber: 2,
        anchorId: 'update-meyer-merion-2026-06-29',
        headline: 'Meyer Turku / MeriOn ecosystem',
        status: 'Strong interest and new ecosystem opportunities',
        statusBadge: 'New opportunity',
        statusBadgeTone: 'positive',
        update: [
          'A follow-up meeting with Ilkka Rytkölä 29.6.2026 confirmed strong interest in WIMSS.',
          'WIMSS is being considered as a potential participant in the renewed MeriOn consortium funding application.',
          'WIMSS was invited to present at MeriCafe, a Finnish maritime innovation network bringing together approximately 50 industry companies and stakeholders, and to participate in the European SeaCafe collaboration network.',
        ],
        pilotOpportunity: [
          'Meyer Turku referred WIMSS to Shipbuilding Completion Oy.',
          'We received the contact details of CEO Päivi Haikkola and a recommendation to approach her using Ilkka Rytkölä as a reference.',
          'This creates a potential opportunity to test WIMSS in a real operational environment on the company’s warehouse and operational area located inside the Meyer Turku shipyard.',
        ],
        nextSteps: [
          'Contact Päivi Haikkola and refer to Ilkka Rytkölä.',
          'Explore the feasibility and scope of a real-life pilot.',
          'Prepare WIMSS for the MeriCafe presentation.',
          'Follow up on potential participation in the renewed MeriOn consortium application.',
        ],
      },
      {
        id: 'apilago-pitching',
        updateNumber: 1,
        headline: 'Apilago Pitching Competition',
        status: 'Application not selected',
        statusBadge: 'Feedback to be requested',
        statusBadgeTone: 'neutral',
        update: [
          'WIMSS applied to the Maritime Solutions track of the Apilago Pitching Competition connected with the Apilago Initiative event on 19–20 August 2026.',
          'On 29 June 2026, we received confirmation that WIMSS was not selected to continue in the competition.',
        ],
        next:
          'Send a follow-up message requesting feedback on the application and selection decision, if available. Use the feedback to understand whether the application, market fit, maturity level or presentation of the opportunity should be improved for future competitions and funding applications.',
      },
    ],
  },
  {
    week: 'Pre-program boostcamp',
    headline: 'WIMSS participated in the Startup Journey Boostcamp',
    items: [],
  },
  {
    week: 'One-pager pre-assignment',
    date: '25 June 2026',
    headline: 'WIMSS mentor one-pager completed and submitted',
    items: [],
  },
]

/** First week-group in weeklyUpdates is the current active week (newest first). */
export function getActiveWeeklyUpdateNav() {
  const activeWeek = weeklyUpdates.find((item) => Array.isArray(item.entries))

  if (!activeWeek) {
    return { href: '#updates', count: 0 }
  }

  return {
    href: activeWeek.anchorId ? `#${activeWeek.anchorId}` : '#updates',
    count: activeWeek.entries.length,
  }
}

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
