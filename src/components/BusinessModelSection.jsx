import { Fragment } from 'react'

function RevenueStep({ step, index, total }) {
  return (
    <>
      <article className="business-step">
        <p className="business-step__number">
          Step {index + 1}
        </p>
        <h3 className="business-step__title">{step.title}</h3>
        <p className="business-step__statement">{step.statement}</p>
        <ul className="business-step__includes">
          {step.includes.map((item) => (
            <li key={item} className="business-step__include">
              {item}
            </li>
          ))}
        </ul>
        <p className="business-step__revenue">{step.revenueType}</p>
        {step.revenueNote ? (
          <p className="business-step__revenue-note">{step.revenueNote}</p>
        ) : null}
      </article>
      {index < total - 1 ? (
        <div className="business-journey__connector" aria-hidden="true">
          <span className="business-journey__arrow" />
        </div>
      ) : null}
    </>
  )
}

export default function BusinessModelSection({ businessModel }) {
  return (
    <section
      id={businessModel.id}
      className="business-section scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="business-section__header">
          <p className="business-section__label">
            06 · {businessModel.label.toUpperCase()}
          </p>
          <h2 className="business-section__title">{businessModel.title}</h2>
          <p className="business-section__intro">{businessModel.intro}</p>
          <p className="business-section__intro-note">
            {businessModel.introNote}
          </p>
        </header>

        <div className="business-section__body">
          <div
            className="business-journey"
            aria-label="Customer and revenue journey"
          >
            <ol className="business-journey__track">
              {businessModel.steps.map((step, index) => (
                <Fragment key={step.id}>
                  <li className="business-journey__item">
                    <RevenueStep
                      step={step}
                      index={index}
                      total={businessModel.steps.length}
                    />
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>

          <div className="business-support-grid">
            <section className="business-panel" aria-label="Target buyers">
              <h3 className="business-panel__heading">
                {businessModel.buyers.heading}
              </h3>
              <ul className="business-panel__list">
                {businessModel.buyers.items.map((item) => (
                  <li key={item} className="business-panel__item">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="business-panel__explanation">
                {businessModel.buyers.explanation}
              </p>
            </section>

            <section className="business-panel" aria-label="Revenue streams">
              <h3 className="business-panel__heading">
                {businessModel.revenueStreams.heading}
              </h3>
              <ul className="business-revenue-list">
                {businessModel.revenueStreams.items.map((item) => (
                  <li key={item.title} className="business-revenue-list__item">
                    <p className="business-revenue-list__title">{item.title}</p>
                    <p className="business-revenue-list__description">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section
            className="business-pricing"
            aria-label="Current pricing hypothesis"
          >
            <h3 className="business-pricing__heading">
              {businessModel.pricing.heading}
            </h3>
            <p className="business-pricing__body">{businessModel.pricing.body}</p>
            <p className="business-pricing__assumption">
              {businessModel.pricing.assumption}
            </p>
            <p className="business-pricing__label">
              {businessModel.pricing.assumptionLabel}
            </p>
            <p className="business-pricing__closing">
              {businessModel.pricing.closing}
            </p>
          </section>

          <section className="business-land-expand" aria-label="Land and expand">
            <h3 className="business-land-expand__heading">
              {businessModel.landExpand.heading}
            </h3>
            <p className="business-land-expand__text">
              {businessModel.landExpand.text}
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
