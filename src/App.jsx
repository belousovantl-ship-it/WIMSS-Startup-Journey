import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import StageSection from './components/StageSection'
import TractionSection from './components/TractionSection'
import AskSection from './components/AskSection'
import BusinessModelSection from './components/BusinessModelSection'
import TeamSection from './components/TeamSection'
import MarketSection from './components/MarketSection'
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

        <MarketSection market={s.market} />

        <BusinessModelSection businessModel={s.businessModel} />

        <TeamSection team={s.team} />

        <AskSection ask={s.ask} />

        <SectionShell
          id="updates"
          index={9}
          label="Weekly updates"
          title="Progress log for mentors"
          lead="A concise weekly record of progress, decisions and next steps."
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
