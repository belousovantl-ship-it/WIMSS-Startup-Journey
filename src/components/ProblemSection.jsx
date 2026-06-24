import { sections } from '../content/siteContent'
import EnvironmentalCostIllustration from './problem/EnvironmentalCostIllustration'
import problemPanoramic from '../assets/problem/busy-industrial-site-in-motion.png'

function ImpactConnector({ label }) {
  return (
    <div className="problem-impact-connector">
      <div className="problem-impact-connector__line" aria-hidden="true" />
      <p className="problem-impact-connector__label">{label}</p>
    </div>
  )
}

function ImpactFactor({ factor }) {
  return (
    <article className="problem-impact-factor">
      <p className="problem-impact-factor__value">{factor.value}</p>
      <p className="problem-impact-factor__label">{factor.label}</p>
      <p className="problem-impact-factor__supporting">{factor.supporting}</p>
    </article>
  )
}

function EnvironmentalStrip({ environmental }) {
  return (
    <section
      className="problem-environmental"
      aria-label="Environmental impact"
    >
      <div className="problem-environmental__visual">
        <EnvironmentalCostIllustration />
      </div>

      <div className="problem-environmental__copy">
        <h3 className="problem-environmental__heading">
          {environmental.heading}
        </h3>
        <p className="problem-environmental__body">{environmental.body}</p>
      </div>
    </section>
  )
}

function HighlightText({ text, highlight }) {
  if (!highlight || !text.includes(highlight)) {
    return text
  }

  const [before, after] = text.split(highlight)

  return (
    <>
      {before}
      <span className="text-accent-soft">{highlight}</span>
      {after}
    </>
  )
}

function ProblemScenario({ scenario }) {
  return (
    <article className="problem-scenario">
      <p className="problem-scenario__label">
        {scenario.number} — {scenario.label}
      </p>
      <h3 className="problem-scenario__title">{scenario.title}</h3>
      <p className="problem-scenario__body">{scenario.body}</p>
    </article>
  )
}

export default function ProblemSection() {
  const problem = sections.problem

  return (
    <section
      id={problem.id}
      className="scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="problem-header">
          <p className="problem-section-label">
            01 · {problem.label.toUpperCase()}
          </p>
          <h2 className="problem-headline">
            {problem.titleHighlight ? (
              <>
                {problem.titleLead}{' '}
                <span className="text-accent-soft">{problem.titleHighlight}</span>
              </>
            ) : (
              problem.titleLead
            )}
          </h2>
          <p className="problem-intro">
            <HighlightText
              text={problem.intro}
              highlight={problem.introHighlight}
            />
          </p>
        </header>

        <div className="problem-section">
          <section
            className="problem-visual"
            aria-label="Industrial operational pain scenarios"
          >
            <div className="problem-panoramic-scroll">
              <img
                src={problemPanoramic}
                alt={problem.panoramicAlt}
                className="problem-panoramic__image"
                loading="lazy"
              />
            </div>

            <div className="problem-scenarios">
              {problem.scenarios.map((scenario) => (
                <ProblemScenario key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </section>

          <div className="problem-bottom">
            <section
              className="problem-impact-panel"
              aria-label="Hidden operational impact"
            >
              <header className="problem-impact-header">
                <h3 className="problem-impact-heading">
                  {problem.impact.heading}
                </h3>
              </header>

              <div className="problem-impact-body">
                <div className="problem-impact-outcome">
                  <p className="problem-impact-outcome__value">
                    {problem.impact.outcome.value}
                  </p>
                  <p className="problem-impact-outcome__label">
                    {problem.impact.outcome.label}
                  </p>
                  <p className="problem-impact-outcome__supporting">
                    {problem.impact.outcome.supporting}
                  </p>
                </div>

                <ImpactConnector label={problem.impact.connectorLabel} />

                <div className="problem-impact-factors">
                  {problem.impact.factors.map((factor) => (
                    <ImpactFactor key={factor.value} factor={factor} />
                  ))}
                </div>
              </div>

              <p className="problem-disclaimer">{problem.impact.disclaimer}</p>
            </section>

            <EnvironmentalStrip environmental={problem.environmental} />
          </div>
        </div>
      </div>
    </section>
  )
}
