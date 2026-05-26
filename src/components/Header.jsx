import { navSections, siteMeta } from '../content/siteContent'

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#" className="header-logo-link flex shrink-0 items-center">
          <img
            src="/wimss-logo-header.png"
            alt="WIMSS — Where is my Staff & Stuff"
            className="header-logo"
            width={588}
            height={243}
          />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Page sections"
        >
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/60 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-white/40 sm:inline">
            {siteMeta.program}
          </span>
          <a
            href="#updates"
            className="border border-accent/60 bg-accent/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-accent-soft transition hover:bg-accent/20"
          >
            Updates
          </a>
        </div>
      </div>
    </header>
  )
}
