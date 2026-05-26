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
  tagline: 'Real-time operational visibility for more efficient industrial operations.',
  description:
    'WIMSS helps shipyards, ports, and large construction sites reduce inefficiencies, improve coordination, and make faster operational decisions through real-time visibility of workforce, tools, materials, and equipment.',
  statusLine: 'RFID RAIN technology · Industrial yards digitalization · Operational visibility',
}

export const products = [
  {
    id: 'workforce',
    name: 'WIMSS Workforce',
    summary:
      'Real-time workforce visibility, verified presence, identity control, and zone access compliance for mixed contractor and internal teams.',
    capabilities: [
      'Identity verification at entry and exit points',
      'Live site overview — who is on site, where, and for how long',
      'Unauthorized access detection in restricted zones',
      'Real-time alerts and exportable compliance records',
    ],
  },
  {
    id: 'assets',
    name: 'WIMSS Assets',
    summary:
      'Real-time visibility, movement tracking, instant search, and automated inventory control for tools, equipment, pallets, and material batches across large outdoor and indoor yards.',
    capabilities: [
      'Real-time asset location and movement history',
      'Zone-level inventory visibility without manual counting',
      'Missing or misplaced asset detection',
      'Integration layer between physical flow and ERP / planning systems',
    ],
  },
]

export const sections = {
  problem: {
    id: 'problem',
    label: 'Problem',
    title: 'Planning systems know the plan — not what is happening on site',
    lead: 'Large industrial yards run on fragmented visibility. Digital systems describe expected flow; physical operations are coordinated manually.',
    points: [
      {
        title: 'Workforce uncertainty',
        body: 'Access cards can be shared. It is unclear who actually entered the site, who is still “checked in” after leaving, and who is in restricted zones right now.',
      },
      {
        title: 'Asset and material drift',
        body: 'Materials are not where they are expected. Teams lose time searching, re-checking deliveries, and coordinating via radio, paper, and spreadsheets.',
      },
      {
        title: 'The visibility gap',
        body: 'ERP and planning define what should happen. What happens in the yard is updated manually afterwards — creating delays, compliance risk, and reactive operations.',
      },
    ],
  },

  solution: {
    id: 'solution',
    label: 'Solution',
    title: 'A real-time operational visibility layer for industrial sites',
    lead: 'WIMSS connects physical movement with live dashboards — without replacing existing ERP or IT landscapes.',
    highlights: [
      'Passive battery-free RAIN RFID tags on people and assets',
      'Flexible reader setup: gates, zones, vehicle-mounted, and handheld',
      'Minimal fixed infrastructure — fast pilot deployment, scalable to full site',
      'Web dashboards with map and list views, alerts, and audit-ready history',
      'AI-assisted methods to improve data reliability in metal-heavy environments',
    ],
  },

  stage: {
    id: 'stage',
    label: 'Stage',
    title: 'Pilot validation with industrial customers',
    lead: 'We are past concept — building and testing in real shipyard and construction environments.',
    items: [
      { term: 'Stage', value: 'Pre-seed / early commercial pilots' },
      { term: 'Focus', value: 'Workforce and asset visibility in Nordic shipyards & yards' },
      { term: 'Approach', value: 'Start small · validate fast · scale with confidence' },
      { term: 'Entity', value: 'InnoTrain Oy (Finland)' },
    ],
  },

  traction: {
    id: 'traction',
    label: 'Traction',
    title: 'Active industrial engagement',
    lead: 'Dashboard prototypes and pilot concepts developed with operators in shipbuilding and heavy industry.',
    items: [
      {
        metric: 'Rauma Marine Construction (RMC)',
        detail:
          'WIMSS Workforce pilot concept: identity verification at gates and unauthorized access monitoring in defined zones.',
      },
      {
        metric: 'Meyer Turku / MERiON',
        detail:
          'WIMSS Assets operational visibility aligned with intelligent shipyard logistics — material flow, bottlenecks, and outdoor yard tracking.',
      },
      {
        metric: 'Product readiness',
        detail:
          'End-to-end dashboard flows built for live site overview, zone drill-down, worker traceability, and asset search.',
      },
      {
        metric: 'Next',
        detail: '[Update weekly] Pilot scope, tagged assets/workers, deployment timeline.',
      },
    ],
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
