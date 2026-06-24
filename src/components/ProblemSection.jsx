import { sections } from '../content/siteContent'
import { IconEnvironmental } from './problem/ProblemIcons'
import { pointIcons } from './problem/ProblemIconMaps'
import { problemPointImages } from './problem/problemPointImages'

function ProblemIssueCard({ point }) {
  const Icon = pointIcons[point.title]
  const image = problemPointImages[point.imageKey]

  return (
    <article className="problem-issue-card">
      <img
        src={image}
        alt=""
        className={`problem-issue-card__image${
          point.imageKey === 'workforce'
            ? ' problem-issue-card__image--workforce'
            : ''
        }`}
        loading="lazy"
      />
      <div className="problem-issue-card__overlay" aria-hidden="true" />
      <div className="problem-issue-card__content">
        {Icon && (
          <div className="problem-issue-card__icon">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h3 className="problem-issue-card__title">{point.title}</h3>
        <p className="problem-issue-card__body">{point.body}</p>
      </div>
    </article>
  )
}

function PrimaryMetricCard({ metric }) {
  return (
    <article
      className={`problem-metric-primary ${
        metric.featured ? 'problem-metric-primary--featured' : ''
      }`}
    >
      <p className="problem-metric-primary__value">{metric.value}</p>
      <h4 className="problem-metric-primary__label">{metric.label}</h4>
      <p className="problem-metric-primary__support">{metric.support}</p>
    </article>
  )
}

function SecondaryMetricItem({ metric }) {
  return (
    <article className="problem-metric-secondary">
      <p className="problem-metric-secondary__value">{metric.value}</p>
      <p className="problem-metric-secondary__label">{metric.label}</p>
    </article>
  )
}

function EnvironmentalStrip({ environmental }) {
  return (
    <section
      className="problem-environmental-strip"
      aria-label="Environmental impact"
    >
      <div className="problem-environmental-strip__lead">
        <div className="problem-environmental-strip__icon">
          <IconEnvironmental className="h-5 w-5" />
        </div>
        <div className="problem-environmental-strip__copy">
          <h3 className="problem-environmental-strip__title">
            {environmental.heading}
          </h3>
          <p className="problem-environmental-strip__body">
            {environmental.body}
          </p>
        </div>
      </div>
      <ul className="problem-environmental-strip__items">
        {environmental.items.map((item) => (
          <li key={item} className="problem-environmental-strip__item">
            {item}
          </li>
        ))}
      </ul>
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
            {problem.titleLead}{' '}
            <span className="text-accent-soft">{problem.titleHighlight}</span>
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
            className="problem-issues"
            aria-label="Operational uncertainty areas"
          >
            <div className="problem-issues-grid">
              {problem.points.map((point) => (
                <ProblemIssueCard key={point.id} point={point} />
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
                <p className="problem-impact-subheading">
                  {problem.impact.subheading}
                </p>
              </header>

              <div className="problem-metrics-primary">
                {problem.impact.primaryMetrics.map((metric) => (
                  <PrimaryMetricCard key={metric.value} metric={metric} />
                ))}
              </div>

              <div className="problem-metrics-secondary">
                {problem.impact.secondaryMetrics.map((metric) => (
                  <SecondaryMetricItem key={metric.value} metric={metric} />
                ))}
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
