import { weeklyUpdates } from '../content/siteContent'

export default function WeeklyUpdates() {
  return (
    <div className="space-y-4">
      {weeklyUpdates.map((entry, i) => (
        <article
          key={`${entry.week}-${entry.date}`}
          className={`border border-line bg-panel/60 ${
            i === 0 ? 'border-l-2 border-l-accent' : ''
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
            <time className="font-mono text-[11px] text-white/40">
              {entry.date}
            </time>
          </header>
          {entry.items.length > 0 ? (
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
                entry.items.length > 0
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
      ))}
    </div>
  )
}
