import heroBackground from '../assets/hero-background.png'
import { hero, products } from '../content/siteContent'

export default function Hero() {
  return (
    <section
      className="hero-screen relative min-h-[min(92vh,900px)] overflow-hidden border-b border-line"
      style={{ '--hero-image': `url(${heroBackground})` }}
      aria-label="WIMSS — real-time visibility for industrial sites"
    >
      <div className="relative mx-auto flex min-h-[min(92vh,900px)] max-w-6xl flex-col justify-center px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
          {hero.statusLine}
        </p>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-5 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-[1.75rem] lg:text-3xl">
              {hero.tagline}
            </p>

            <p className="mb-10 max-w-lg text-base leading-relaxed text-white/82 sm:text-lg">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#solution"
                className="bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:bg-accent-soft"
              >
                Solution Overview
              </a>
              <a
                href="#ask"
                className="border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
              >
                Mentor ask
              </a>
            </div>
          </div>

          <div className="hero-modules lg:max-w-md lg:justify-self-end">
            <div className="border-b border-white/10 px-5 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                Solution Modules
              </p>
            </div>
            <ul className="divide-y divide-white/10">
              {products.map((product) => (
                <li key={product.id} className="px-5 py-5">
                  <h2 className="mb-2 font-mono text-sm font-medium tracking-wide text-accent-soft">
                    {product.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/78">
                    {product.summary}
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
