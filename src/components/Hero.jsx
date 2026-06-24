import heroBackground from '../assets/hero-background.png'
import { hero, heroModules } from '../content/siteContent'

export default function Hero() {
  return (
    <section
      className="hero-screen relative min-h-[min(92vh,900px)] overflow-hidden border-b-2 border-accent"
      style={{ '--hero-image': `url(${heroBackground})` }}
      aria-label="WIMSS — real-time visibility for industrial sites"
    >
      <div className="relative mx-auto flex min-h-[min(92vh,900px)] max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 sm:mb-8">
          {hero.statusLine}
        </p>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <h1 className="mb-5 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-[1.75rem] lg:text-3xl">
              {hero.tagline}
            </h1>

            <p className="mb-7 max-w-lg text-base leading-relaxed text-white/82 sm:mb-8 sm:text-lg">
              {hero.description}
            </p>

            <div className="hero-value-statement max-w-lg border-t border-accent/50 pt-5">
              <p className="text-sm font-medium leading-relaxed text-white/75 sm:text-[0.9375rem]">
                {hero.valueStatement.map((phrase, index) => (
                  <span key={phrase}>
                    {index > 0 && (
                      <span className="mx-2 text-accent" aria-hidden="true">
                        ·
                      </span>
                    )}
                    {phrase}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="hero-modules w-full lg:max-w-md lg:justify-self-end">
            <div className="border-b border-white/10 px-5 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                {heroModules.heading}
              </p>
            </div>
            <ul className="divide-y divide-white/10">
              {heroModules.modules.map((module) => (
                <li key={module.id} className="px-5 py-5">
                  <h2 className="mb-1.5 font-mono text-sm font-semibold tracking-wide text-accent-soft">
                    {module.name}
                  </h2>
                  <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-white/88">
                    {module.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-white/72">
                    {module.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
