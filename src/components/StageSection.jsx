import { Fragment } from 'react'

function StageIndicator({ indicator }) {
  return (
    <article className="stage-indicator">
      <p className="stage-indicator__label">{indicator.label}</p>
      <p className="stage-indicator__value">{indicator.value}</p>
      <p className="stage-indicator__detail">{indicator.detail}</p>
    </article>
  )
}

export default function StageSection({ stage }) {
  return (
    <section
      id={stage.id}
      className="stage-section scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="stage-section__header">
          <p className="stage-section__label">
            03 · {stage.label.toUpperCase()}
          </p>
          <h2 className="stage-section__title">{stage.title}</h2>
          <p className="stage-section__intro">{stage.intro}</p>
        </header>

        <div className="stage-section__body">
          <div className="stage-indicators">
            {stage.indicators.map((indicator) => (
              <StageIndicator key={indicator.id} indicator={indicator} />
            ))}
          </div>

          <div className="stage-journey" aria-label="Development journey">
            <ol className="stage-journey__track">
              {stage.journey.map((step, index) => (
                <Fragment key={step.id}>
                  <li
                    className={`stage-journey__step stage-journey__step--${step.status}`}
                  >
                    {step.label}
                  </li>
                  {index < stage.journey.length - 1 && (
                    <li className="stage-journey__arrow" aria-hidden="true" />
                  )}
                </Fragment>
              ))}
            </ol>
          </div>

          <div className="stage-focus">
            <h3 className="stage-focus__heading">{stage.currentFocus.heading}</h3>
            <ul className="stage-focus__list">
              {stage.currentFocus.items.map((item) => (
                <li key={item} className="stage-focus__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
