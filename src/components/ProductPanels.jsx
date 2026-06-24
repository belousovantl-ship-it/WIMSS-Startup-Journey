import useCaseAssets from '../assets/solution/use-case-assets.png'
import useCaseWorkforce from '../assets/solution/use-case-workforce.png'
import { products } from '../content/siteContent'

const productImages = {
  workforce: useCaseWorkforce,
  assets: useCaseAssets,
}

export default function ProductPanels() {
  return (
    <div className="use-cases-grid">
      {products.map((product) => (
        <article key={product.id} className="use-case-card">
          <div className="use-case-card__media">
            <img
              src={productImages[product.id]}
              alt={product.imageAlt}
              className={`use-case-card__image use-case-card__image--${product.id}`}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="use-case-card__body">
            <h4 className="use-case-card__title">{product.name}</h4>
            <p className="use-case-card__subtitle">{product.subtitle}</p>
            <ul className="use-case-card__list">
              {product.capabilities.map((cap) => (
                <li key={cap} className="use-case-card__item">
                  {cap}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
