export default function SectionShell({ id, index, label, title, lead, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-accent py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {String(index).padStart(2, '0')} · {label}
            </p>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
          </div>
          {lead && (
            <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-right">
              {lead}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
