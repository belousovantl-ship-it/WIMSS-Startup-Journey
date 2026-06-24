function ContextLink({ link }) {
  if (!link) return null

  return (
    <a
      href={link.href}
      className="traction-context-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
      <span className="traction-context-link__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}

function TractionBlock({ block }) {
  return (
    <article className="traction-block">
      <div className="traction-block__header">
        <h3 className="traction-block__title">{block.title}</h3>
        <span className="traction-block__status">{block.status}</span>
      </div>
      <p className="traction-block__signal">{block.signal}</p>
      {block.details.map((paragraph) => (
        <p key={paragraph} className="traction-block__detail">
          {paragraph}
        </p>
      ))}
      <ContextLink link={block.link} />
    </article>
  )
}

export default function TractionSection({ traction }) {
  return (
    <section
      id={traction.id}
      className="traction-section scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="traction-section__header">
          <p className="traction-section__label">
            04 · {traction.label.toUpperCase()}
          </p>
          <h2 className="traction-section__title">{traction.title}</h2>
          <p className="traction-section__intro">{traction.intro}</p>
        </header>

        <div className="traction-section__body">
          <div className="traction-grid">
            {traction.blocks.map((block) => (
              <TractionBlock key={block.id} block={block} />
            ))}
          </div>

          <section
            className="traction-recognition"
            aria-label="External recognition"
          >
            <h3 className="traction-recognition__heading">
              {traction.externalRecognition.heading}
            </h3>
            <div className="traction-recognition__items">
              {traction.externalRecognition.items.map((item) => (
                <div key={item.title} className="traction-recognition__item">
                  <p className="traction-recognition__title">{item.title}</p>
                  <p className="traction-recognition__signal">{item.signal}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            className="traction-outreach"
            aria-label="Customer discovery and industry outreach"
          >
            <div className="traction-outreach__header">
              <h3 className="traction-outreach__heading">
                {traction.industryOutreach.heading}
              </h3>
              <span className="traction-outreach__status">
                {traction.industryOutreach.status}
              </span>
            </div>
            <p className="traction-outreach__text">
              {traction.industryOutreach.text}
            </p>
            <p className="traction-outreach__text traction-outreach__text--secondary">
              {traction.industryOutreach.secondaryText}
            </p>
            <ContextLink link={traction.industryOutreach.link} />
          </section>

          <section className="traction-milestone" aria-label="Next milestone">
            <h3 className="traction-milestone__heading">
              {traction.nextMilestone.heading}
            </h3>
            <p className="traction-milestone__summary">
              {traction.nextMilestone.summary}
            </p>
            <ul className="traction-milestone__list">
              {traction.nextMilestone.points.map((point) => (
                <li key={point} className="traction-milestone__item">
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
