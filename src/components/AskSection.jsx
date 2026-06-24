function AskPriorityRow({ priority, columns }) {
  return (
    <article className="ask-row">
      <div className="ask-row__cell ask-row__cell--priority">
        <span className="ask-row__mobile-label">{columns.priority}</span>
        <span className="ask-row__number">{priority.number}</span>
        <h3 className="ask-row__title">{priority.title}</h3>
      </div>
      <div className="ask-row__cell ask-row__cell--support">
        <span className="ask-row__mobile-label">{columns.support}</span>
        <p className="ask-row__body">{priority.support}</p>
        {priority.secondary ? (
          <p className="ask-row__secondary">{priority.secondary}</p>
        ) : null}
        {priority.useCases ? (
          <ul className="ask-row__compact-list">
            {priority.useCases.map((item) => (
              <li key={item} className="ask-row__compact-item">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {priority.introductions ? (
          <div className="ask-row__intro-block">
            <p className="ask-row__intro-label">Prioritise introductions to:</p>
            <ul className="ask-row__compact-list">
              {priority.introductions.map((item) => (
                <li key={item} className="ask-row__compact-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {priority.mentorAsk ? (
          <p className="ask-row__mentor-ask">{priority.mentorAsk}</p>
        ) : null}
      </div>
      <div className="ask-row__cell ask-row__cell--outcome">
        <span className="ask-row__mobile-label">{columns.outcome}</span>
        <p className="ask-row__body">{priority.outcome}</p>
        {priority.outcomeNote ? (
          <p className="ask-row__secondary">{priority.outcomeNote}</p>
        ) : null}
      </div>
    </article>
  )
}

export default function AskSection({ ask }) {
  return (
    <section
      id={ask.id}
      className="ask-section scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="ask-section__header">
          <p className="ask-section__label">
            08 · {ask.label.toUpperCase()}
          </p>
          <h2 className="ask-section__title">{ask.title}</h2>
          <p className="ask-section__intro">{ask.intro}</p>
          <p className="ask-section__intro-note">{ask.introNote}</p>
        </header>

        <div className="ask-section__body">
          <div className="ask-overview" role="table" aria-label="Mentor support priorities">
            <div className="ask-overview__header" role="row">
              <span
                className="ask-overview__col ask-overview__col--priority"
                role="columnheader"
              >
                {ask.columns.priority}
              </span>
              <span
                className="ask-overview__col ask-overview__col--support"
                role="columnheader"
              >
                {ask.columns.support}
              </span>
              <span
                className="ask-overview__col ask-overview__col--outcome"
                role="columnheader"
              >
                {ask.columns.outcome}
              </span>
            </div>

            <div className="ask-overview__rows" role="rowgroup">
              {ask.priorities.map((priority) => (
                <AskPriorityRow
                  key={priority.id}
                  priority={priority}
                  columns={ask.columns}
                />
              ))}
            </div>
          </div>

          <section className="ask-pressing" aria-label="Current pressing question">
            <h3 className="ask-pressing__heading">
              {ask.pressingQuestion.heading}
            </h3>
            <p className="ask-pressing__text">{ask.pressingQuestion.text}</p>
            <p className="ask-pressing__supporting">
              {ask.pressingQuestion.supporting}
            </p>
          </section>

          <section className="ask-outcomes" aria-label="Journey outcomes">
            <h3 className="ask-outcomes__heading">
              {ask.journeyOutcomes.heading}
            </h3>
            <ul className="ask-outcomes__list">
              {ask.journeyOutcomes.items.map((item) => (
                <li key={item} className="ask-outcomes__item">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}
