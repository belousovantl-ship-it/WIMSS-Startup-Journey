import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import StageSection from './components/StageSection'
import TractionSection from './components/TractionSection'
import SectionShell from './components/SectionShell'
import WeeklyUpdates from './components/WeeklyUpdates'
import { sections, siteMeta } from './content/siteContent'

export default function App() {
  const s = sections

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <ProblemSection />

        <SolutionSection />

        <StageSection stage={s.stage} />

        <TractionSection traction={s.traction} />

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

      <footer className="border-t border-line bg-brand-dark">
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
