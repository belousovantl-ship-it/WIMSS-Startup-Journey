import { getActiveWeeklyUpdateNav, navSections, siteMeta } from '../content/siteContent'
import useActiveSection from '../hooks/useActiveSection'

function NavLink({ href, label, isActive, accent = false, badgeCount }) {
  return (
    <a
      href={href}
      className={`nav-link ${isActive ? 'nav-link--active' : ''} ${
        accent ? 'nav-link--accent' : ''
      }`}
      aria-current={isActive ? 'true' : undefined}
    >
      <span className="nav-link__label-wrap">
        <span>{label}</span>
        {badgeCount != null && badgeCount > 0 ? (
          <span className="nav-link__update-count" aria-hidden="true">
            {badgeCount}
          </span>
        ) : null}
      </span>
    </a>
  )
}

export default function Header() {
  const sectionIds = navSections.map((item) => item.id)
  const activeId = useActiveSection(sectionIds)
  const activeUpdateNav = getActiveWeeklyUpdateNav()

  return (
    <header className="site-header sticky top-0 z-50 border-b-2 border-accent">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4">
        <a href="#" className="block shrink-0">
          <img
            src="/wimss-logo-header.png"
            alt="WIMSS — Where is my Staff & Stuff"
            className="header-logo"
            width={588}
            height={243}
          />
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1"
          aria-label="Page sections"
        >
          {navSections.map((item) => (
            <NavLink
              key={item.id}
              href={
                item.id === 'updates'
                  ? activeUpdateNav.href
                  : `#${item.id}`
              }
              label={item.label}
              isActive={activeId === item.id}
              accent={item.id === 'updates'}
              badgeCount={
                item.id === 'updates' ? activeUpdateNav.count : undefined
              }
            />
          ))}
        </nav>

        <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-widest text-white/40 xl:inline">
          {siteMeta.program}
        </span>
      </div>
    </header>
  )
}
