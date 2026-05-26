import { products } from '../content/siteContent'

export default function ProductPanels() {
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-2">
      {products.map((product) => (
        <article key={product.id} className="bg-panel p-6 sm:p-8">
          <header className="mb-5 border-b border-line pb-4">
            <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
              {product.name}
            </h3>
          </header>
          <p className="mb-5 text-sm leading-relaxed text-white/70">
            {product.summary}
          </p>
          <ul className="space-y-3">
            {product.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex gap-3 text-sm text-white/80 before:mt-2 before:h-px before:w-3 before:shrink-0 before:bg-accent before:content-['']"
              >
                {cap}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
