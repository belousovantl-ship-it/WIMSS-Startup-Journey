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
    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-soft">
      {children}
    </span>
  )
}

function UpdateParagraphs({ paragraphs }) {
  return (
    <div className="space-y-3">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-sm leading-relaxed text-white/75">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function WeekEntryCard({ entry, weekLabel, isLatest }) {
  const updateLabel = `Update ${String(entry.updateNumber).padStart(2, '0')}`

  return (
    <article
      id={entry.anchorId}
      className={`week-entry-card border-t border-line first:border-t-0${
        entry.anchorId ? ' scroll-mt-20' : ''
      }`}
    >
      <header className="flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4">
        <div className="min-w-0 flex-1">
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
            <p className="mt-1.5 text-sm text-white/60">{entry.status}</p>
          ) : null}
        </div>
        {entry.statusBadge ? (
          <UpdateBadge tone={entry.statusBadgeTone}>
            {entry.statusBadge}
          </UpdateBadge>
        ) : null}
      </header>

      <div className="space-y-4 px-5 py-4">
        {entry.update?.length ? (
          <div>
            <UpdateFieldLabel>Update</UpdateFieldLabel>
            <div className="mt-2">
              <UpdateParagraphs paragraphs={entry.update} />
            </div>
          </div>
        ) : null}

        {entry.pilotOpportunity?.length ? (
          <div>
            <UpdateFieldLabel>Pilot opportunity</UpdateFieldLabel>
            <div className="mt-2">
              <UpdateParagraphs paragraphs={entry.pilotOpportunity} />
            </div>
          </div>
        ) : null}

        {entry.nextSteps?.length ? (
          <div>
            <UpdateFieldLabel>Next steps</UpdateFieldLabel>
            <ul className="mt-2 space-y-2">
              {entry.nextSteps.map((step) => (
                <li
                  key={step}
                  className="flex gap-2 text-sm leading-relaxed text-white/75"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {entry.next ? (
          <div>
            <UpdateFieldLabel>Next step</UpdateFieldLabel>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {entry.next}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  )
}

function WeekGroup({ group, isFirst }) {
  return (
    <section
      id={group.anchorId}
      className={`border border-line bg-panel/60${
        isFirst ? ' border-l-2 border-l-accent' : ''
      }${group.anchorId ? ' scroll-mt-20' : ''}`}
    >
      <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line px-5 py-4">
        <div>
          <span className="font-mono text-base font-semibold uppercase tracking-wider text-accent sm:text-lg">
            {group.week}
          </span>
          {group.subtitle ? (
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/45">
              {group.subtitle}
            </p>
          ) : null}
        </div>
        <time className="font-mono text-[11px] text-white/40">{group.date}</time>
      </header>

      <div>{group.entries.map((entry, index) => (
        <WeekEntryCard
          key={entry.id}
          entry={entry}
          weekLabel={group.week}
          isLatest={index === 0}
        />
      ))}</div>
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
    <div className="space-y-4">
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
