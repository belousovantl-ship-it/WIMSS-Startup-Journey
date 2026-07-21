import { weeklyUpdates } from '../content/siteContent'

function UpdateBadge({ tone, children }) {
  const toneClass =
    tone === 'positive'
      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
      : 'border-white/20 bg-white/5 text-white/55'

  return (
    <span
      className={`inline-block border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${toneClass}`}
    >
      {children}
    </span>
  )
}

function UpdateFieldLabel({ children }) {
  return (
    <span className="week-entry-card__field-label">{children}</span>
  )
}

function UpdateParagraphs({ paragraphs }) {
  return (
    <div className="week-entry-card__paragraphs">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="week-entry-card__paragraph">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function UpdateSection({ label, children }) {
  return (
    <div className="week-entry-card__section">
      <UpdateFieldLabel>{label}</UpdateFieldLabel>
      <div className="week-entry-card__section-content">{children}</div>
    </div>
  )
}

function UpdateSectionContent({ section }) {
  if (section.type === 'list') {
    return (
      <ul className="week-entry-card__list">
        {section.items.map((item) => (
          <li key={item} className="week-entry-card__list-item">
            <span className="week-entry-card__list-bullet" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  return <UpdateParagraphs paragraphs={section.paragraphs ?? []} />
}

function WeekEntryCard({ entry, weekLabel, isLatest }) {
  const updateLabel = `Update ${String(entry.updateNumber).padStart(2, '0')}`

  return (
    <article
      id={entry.anchorId}
      className={`week-entry-card${entry.anchorId ? ' scroll-mt-20' : ''}`}
    >
      <header className="week-entry-card__header">
        <div className="week-entry-card__header-main">
          <p className="week-entry-card__identifier">
            <span className="week-entry-card__identifier-meta">
              {weekLabel} · {updateLabel}
            </span>
            {isLatest ? (
              <span className="week-entry-card__latest-badge">Latest</span>
            ) : null}
          </p>
          <h4 className="week-entry-card__headline">{entry.headline}</h4>
          {entry.status ? (
            <p className="week-entry-card__subtitle">{entry.status}</p>
          ) : null}
        </div>
        <div className="week-entry-card__header-meta">
          {entry.date ? (
            <time className="week-entry-card__date">{entry.date}</time>
          ) : null}
          {entry.statusBadge ? (
            <UpdateBadge tone={entry.statusBadgeTone}>
              {entry.statusBadge}
            </UpdateBadge>
          ) : null}
        </div>
      </header>

      <div className="week-entry-card__body">
        {entry.sections?.length
          ? entry.sections.map((section) => (
              <UpdateSection key={section.label} label={section.label}>
                <UpdateSectionContent section={section} />
              </UpdateSection>
            ))
          : null}

        {entry.update?.length ? (
          <UpdateSection label="Update">
            <UpdateParagraphs paragraphs={entry.update} />
          </UpdateSection>
        ) : null}

        {entry.strategicDecision?.length ? (
          <UpdateSection label="Strategic decision">
            <UpdateParagraphs paragraphs={entry.strategicDecision} />
          </UpdateSection>
        ) : null}

        {entry.customerValidation?.length ? (
          <UpdateSection label="Customer validation">
            <UpdateParagraphs paragraphs={entry.customerValidation} />
          </UpdateSection>
        ) : null}

        {entry.customerDiscoveryOpportunity?.length ? (
          <UpdateSection label="Customer discovery opportunity">
            <UpdateParagraphs paragraphs={entry.customerDiscoveryOpportunity} />
          </UpdateSection>
        ) : null}

        {entry.pilotOpportunity?.length ? (
          <UpdateSection label="Pilot opportunity">
            <UpdateParagraphs paragraphs={entry.pilotOpportunity} />
          </UpdateSection>
        ) : null}

        {entry.nextSteps?.length ? (
          <UpdateSection label="Next steps">
            <ul className="week-entry-card__list">
              {entry.nextSteps.map((step) => (
                <li key={step} className="week-entry-card__list-item">
                  <span className="week-entry-card__list-bullet" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </UpdateSection>
        ) : null}

        {entry.whyItMatters?.length ? (
          <UpdateSection label="Why it matters">
            <UpdateParagraphs paragraphs={entry.whyItMatters} />
          </UpdateSection>
        ) : null}

        {entry.next ? (
          <UpdateSection label="Next step">
            <p className="week-entry-card__paragraph">{entry.next}</p>
          </UpdateSection>
        ) : null}

        {entry.officialLink?.href ? (
          <a
            href={entry.officialLink.href}
            className="week-entry-card__official-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {entry.officialLink.label}
            <span className="week-entry-card__official-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ) : null}
      </div>
    </article>
  )
}

function WeekGroup({ group, isFirst }) {
  return (
    <section
      id={group.anchorId}
      className={`week-group${isFirst ? ' week-group--active' : ''}${
        group.anchorId ? ' scroll-mt-20' : ''
      }`}
    >
      <header className="week-group__header">
        <div>
          <span className="week-group__title">{group.week}</span>
          {group.subtitle ? (
            <p className="week-group__subtitle">{group.subtitle}</p>
          ) : null}
        </div>
        <time className="week-group__date">{group.date}</time>
      </header>

      <div className="week-group__entries">
        {group.entries.map((entry, index) => (
          <WeekEntryCard
            key={entry.id}
            entry={entry}
            weekLabel={group.week}
            isLatest={index === 0}
          />
        ))}
      </div>
    </section>
  )
}

function SimpleUpdateCard({ entry, isFirst }) {
  return (
    <article
      className={`border border-line bg-panel/60 ${
        isFirst ? 'border-l-2 border-l-accent' : ''
      }`}
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-3">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            {entry.week}
          </span>
          <h3 className="mt-0.5 text-lg font-semibold text-white">
            {entry.headline}
          </h3>
        </div>
        {entry.date ? (
          <time className="font-mono text-[11px] text-white/40">{entry.date}</time>
        ) : null}
      </header>
      {entry.items?.length > 0 ? (
        <ul className="divide-y divide-line">
          {entry.items.map((item) => (
            <li
              key={item}
              className="px-5 py-3 text-sm leading-relaxed text-white/75"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      {entry.next ? (
        <p
          className={
            entry.items?.length > 0
              ? 'border-t border-line px-5 py-3 text-sm leading-relaxed text-white/75'
              : 'px-5 py-3 text-sm leading-relaxed text-white/75'
          }
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-soft">
            Next
          </span>
          <span className="mt-1 block">{entry.next}</span>
        </p>
      ) : null}
    </article>
  )
}

export default function WeeklyUpdates() {
  return (
    <div className="weekly-updates">
      {weeklyUpdates.map((entry, i) =>
        entry.entries ? (
          <WeekGroup key={`${entry.week}-${entry.date}`} group={entry} isFirst={i === 0} />
        ) : (
          <SimpleUpdateCard
            key={`${entry.week}-${entry.date ?? entry.headline}`}
            entry={entry}
            isFirst={i === 0}
          />
        ),
      )}
    </div>
  )
}
