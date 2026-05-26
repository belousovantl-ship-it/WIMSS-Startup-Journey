import Header from './components/Header'
import Hero from './components/Hero'
import ProductPanels from './components/ProductPanels'
import SectionShell from './components/SectionShell'
import WeeklyUpdates from './components/WeeklyUpdates'
import { sections, siteMeta } from './content/siteContent'

function DataRow({ term, value }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4 sm:flex-row sm:items-baseline sm:justify-between">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-white/45">
        {term}
      </dt>
      <dd className="text-sm text-white/85 sm:max-w-md sm:text-right">{value}</dd>
    </div>
  )
}

export default function App() {
  const s = sections

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <SectionShell
          id={s.problem.id}
          index={1}
          label={s.problem.label}
          title={s.problem.title}
          lead={s.problem.lead}
        >
          <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
            {s.problem.points.map((point) => (
              <div key={point.title} className="bg-panel p-6">
                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id={s.solution.id}
          index={2}
          label={s.solution.label}
          title={s.solution.title}
          lead={s.solution.lead}
        >
          <ProductPanels />
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {s.solution.highlights.map((item) => (
              <li
                key={item}
                className="border border-line bg-brand-light/30 px-4 py-3 text-sm text-white/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </SectionShell>

        <SectionShell
          id={s.stage.id}
          index={3}
          label={s.stage.label}
          title={s.stage.title}
          lead={s.stage.lead}
        >
          <dl className="border border-line bg-panel px-5">
            {s.stage.items.map((item) => (
              <DataRow key={item.term} term={item.term} value={item.value} />
            ))}
          </dl>
        </SectionShell>

        <SectionShell
          id={s.traction.id}
          index={4}
          label={s.traction.label}
          title={s.traction.title}
          lead={s.traction.lead}
        >
          <div className="space-y-px border border-line bg-line">
            {s.traction.items.map((item) => (
              <div
                key={item.metric}
                className="grid gap-2 bg-panel px-5 py-4 sm:grid-cols-[220px_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {item.metric}
                </span>
                <p className="text-sm leading-relaxed text-white/75">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id={s.market.id}
          index={5}
          label={s.market.label}
          title={s.market.title}
          lead={s.market.lead}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-white/45">
                Target segments
              </h3>
              <ul className="space-y-2">
                {s.market.segments.map((seg) => (
                  <li
                    key={seg}
                    className="border-l-2 border-accent/70 pl-4 text-sm text-white/80"
                  >
                    {seg}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-white/45">
                Market drivers
              </h3>
              <ul className="space-y-2">
                {s.market.drivers.map((driver) => (
                  <li
                    key={driver}
                    className="text-sm leading-relaxed text-white/65 before:mr-2 before:text-accent before:content-['→']"
                  >
                    {driver}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id={s.businessModel.id}
          index={6}
          label={s.businessModel.label}
          title={s.businessModel.title}
          lead={s.businessModel.lead}
        >
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {s.businessModel.streams.map((stream) => (
              <div key={stream.title} className="bg-panel p-6">
                <h3 className="mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                  {stream.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {stream.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-accent/50 pl-4 text-sm italic text-white/55">
            {s.businessModel.impactNote}
          </p>
        </SectionShell>

        <SectionShell
          id={s.team.id}
          index={7}
          label={s.team.label}
          title={s.team.title}
          lead={s.team.lead}
        >
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {s.team.members.map((member) => (
              <div key={member.name} className="bg-panel p-6">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                  {member.role}
                </p>
                <div className="mt-4 space-y-1 font-mono text-xs text-white/55">
                  <p>{member.email}</p>
                  <p>{member.phone}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/45">{s.team.note}</p>
        </SectionShell>

        <SectionShell
          id={s.ask.id}
          index={8}
          label={s.ask.label}
          title={s.ask.title}
          lead={s.ask.lead}
        >
          <ol className="border border-line bg-panel">
            {s.ask.items.map((item, i) => (
              <li
                key={item}
                className="flex gap-4 border-b border-line px-5 py-4 text-sm leading-relaxed text-white/80 last:border-b-0"
              >
                <span className="font-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </SectionShell>

        <SectionShell
          id="updates"
          index={9}
          label="Weekly updates"
          title="Progress log for mentors"
          lead="Add a new entry at the top of siteContent.js each week — this section updates automatically."
        >
          <WeeklyUpdates />
        </SectionShell>
      </main>

      <footer className="border-t-2 border-accent bg-brand-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-semibold text-white/80">WIMSS · {siteMeta.company}</p>
            <p className="mt-1 font-mono text-xs">{siteMeta.contactEmail}</p>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest">
            {siteMeta.program} · Industrial operational intelligence
          </p>
        </div>
      </footer>
    </div>
  )
}
