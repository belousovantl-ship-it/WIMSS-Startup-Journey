function OrganisationName({ organisation }) {
  if (typeof organisation === 'string') {
    return <span className="traction-row__organisation">{organisation}</span>
  }

  return (
    <a
      href={organisation.href}
      className="traction-row__organisation traction-row__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {organisation.text}
      <span className="traction-row__link-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}

function OrganisationBlock({ organisation }) {
  if (Array.isArray(organisation)) {
    return (
      <div className="traction-row__org-list">
        {organisation.map((name) => (
          <span key={name} className="traction-row__organisation">
            {name}
          </span>
        ))}
      </div>
    )
  }

  return <OrganisationName organisation={organisation} />
}

function ContactDetails({ contact }) {
  if (!contact) return null

  const lines = Array.isArray(contact) ? contact : [contact]

  return (
    <div className="traction-row__contact">
      {lines.map((line) => (
        <span key={line} className="traction-row__contact-line">
          {line}
        </span>
      ))}
    </div>
  )
}

function DiscoveryContactsSubrow({ discoveryContacts }) {
  return (
    <div className="traction-row__discovery-subrow">
      <p className="traction-row__discovery-heading">
        {discoveryContacts.heading}
      </p>
      <div className="traction-row__discovery-grid">
        {discoveryContacts.columns.map((column) => (
          <div
            key={column.companies?.[0] ?? column.heading}
            className="traction-row__discovery-grid-col"
          >
            {column.companies ? (
              <ul className="traction-row__discovery-list">
                {column.companies.map((item) => (
                  <li key={item} className="traction-row__discovery-item">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p className="traction-row__discovery-target-heading">
                  {column.heading}
                </p>
                <p className="traction-row__discovery-target-items">
                  {column.items}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function TractionRow({ row, columns }) {
  return (
    <article
      className={
        row.discoveryContacts
          ? 'traction-row traction-row--with-discovery'
          : 'traction-row'
      }
    >
      <div className="traction-row__cell traction-row__cell--category">
        <span className="traction-row__mobile-label">{columns.category}</span>
        <span className="traction-row__category">{row.category}</span>
      </div>
      <div className="traction-row__cell traction-row__cell--organisation">
        <span className="traction-row__mobile-label">
          {columns.organisation}
        </span>
        <div className="traction-row__org-block">
          <OrganisationBlock organisation={row.organisation} />
          {row.organisationNote ? (
            <p className="traction-row__org-note">{row.organisationNote}</p>
          ) : null}
          <ContactDetails contact={row.contact} />
        </div>
      </div>
      <div className="traction-row__cell traction-row__cell--current-status">
        <span className="traction-row__mobile-label">
          {columns.currentStatus}
        </span>
        {Array.isArray(row.currentStatus) ? (
          row.currentStatus.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index > 0
                  ? 'traction-row__body traction-row__body--paragraph'
                  : 'traction-row__body'
              }
            >
              {paragraph}
            </p>
          ))
        ) : (
          <p className="traction-row__body">{row.currentStatus}</p>
        )}
        {row.statusNotes?.map((note) => (
          <p key={note} className="traction-row__status-note">
            {note}
          </p>
        ))}
      </div>
      <div className="traction-row__cell traction-row__cell--next-step">
        <span className="traction-row__mobile-label">{columns.nextStep}</span>
        <p className="traction-row__body">{row.nextStep}</p>
      </div>
      <div className="traction-row__cell traction-row__cell--status">
        <span className="traction-row__mobile-label">{columns.status}</span>
        <span className="traction-row__status-badge">{row.statusTag}</span>
      </div>
      {row.discoveryContacts ? (
        <DiscoveryContactsSubrow discoveryContacts={row.discoveryContacts} />
      ) : null}
    </article>
  )
}

function MarketAccessRow({ row, columns }) {
  return (
    <article className="traction-row traction-row--market">
      <div className="traction-row__cell traction-row__cell--category traction-row__cell--market-category">
        <span className="traction-row__mobile-label">{columns.category}</span>
        <span className="traction-row__category">{row.category}</span>
      </div>

      <div className="traction-row__market-body">
        {row.marketSegments.map((segment, index) => (
          <div
            key={segment.statusTag}
            className={
              index > 0
                ? 'traction-row__market-segment traction-row__market-segment--divided'
                : 'traction-row__market-segment'
            }
          >
            <div className="traction-row__cell traction-row__cell--organisation">
              <span className="traction-row__mobile-label">
                {columns.organisation}
              </span>
              <div className="traction-row__org-block">
                <span className="traction-row__organisation">
                  {segment.organisation}
                </span>
                <ContactDetails contact={segment.contact} />
              </div>
            </div>
            <div className="traction-row__cell traction-row__cell--current-status">
              <span className="traction-row__mobile-label">
                {columns.currentStatus}
              </span>
              <p className="traction-row__body">{segment.currentStatus}</p>
            </div>
            <div className="traction-row__cell traction-row__cell--next-step">
              <span className="traction-row__mobile-label">
                {columns.nextStep}
              </span>
              <p className="traction-row__body">{segment.nextStep}</p>
            </div>
            <div className="traction-row__cell traction-row__cell--status">
              <span className="traction-row__mobile-label">
                {columns.status}
              </span>
              <span className="traction-row__status-badge">
                {segment.statusTag}
              </span>
            </div>
          </div>
        ))}
      </div>
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
          {traction.demoNote ? (
            <p className="traction-section__demo-note">{traction.demoNote}</p>
          ) : null}

          <ul className="traction-pipeline" aria-label="Pipeline summary">
            {traction.pipelineSummary.map((item) => (
              <li key={item} className="traction-pipeline__item">
                {item}
              </li>
            ))}
          </ul>

          <div
            className="traction-overview"
            role="table"
            aria-label="Traction overview"
          >
            <div className="traction-overview__header" role="row">
              <span
                className="traction-overview__col traction-overview__col--category"
                role="columnheader"
              >
                {traction.columns.category}
              </span>
              <span
                className="traction-overview__col traction-overview__col--organisation"
                role="columnheader"
              >
                {traction.columns.organisation}
              </span>
              <span
                className="traction-overview__col traction-overview__col--current-status"
                role="columnheader"
              >
                {traction.columns.currentStatus}
              </span>
              <span
                className="traction-overview__col traction-overview__col--next-step"
                role="columnheader"
              >
                {traction.columns.nextStep}
              </span>
              <span
                className="traction-overview__col traction-overview__col--status"
                role="columnheader"
              >
                {traction.columns.status}
              </span>
            </div>

            <div className="traction-overview__rows" role="rowgroup">
              {traction.rows.map((row) =>
                row.marketSegments ? (
                  <MarketAccessRow
                    key={row.id}
                    row={row}
                    columns={traction.columns}
                  />
                ) : (
                  <TractionRow
                    key={row.id}
                    row={row}
                    columns={traction.columns}
                  />
                ),
              )}
            </div>
          </div>

          <p className="traction-section__milestone">
            <span className="traction-section__milestone-label">
              Next milestone
            </span>
            <span className="traction-section__milestone-text">
              {traction.nextMilestone}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
