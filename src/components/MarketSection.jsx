function MarketBlockItem({ item }) {
  if (typeof item === 'string') {
    return <span className="market-block__item-text">{item}</span>
  }

  return (
    <>
      <span className="market-block__item-label">{item.label}</span>
      <span className="market-block__item-detail"> — {item.detail}</span>
    </>
  )
}

function MarketBlock({ block }) {
  return (
    <article className="market-block">
      <h3 className="market-block__title">{block.title}</h3>
      <ul className="market-block__list">
        {block.items.map((item) => (
          <li key={typeof item === 'string' ? item : item.label} className="market-block__item">
            <MarketBlockItem item={item} />
          </li>
        ))}
      </ul>
      {block.supporting ? (
        <p className="market-block__supporting">{block.supporting}</p>
      ) : null}
    </article>
  )
}

export default function MarketSection({ market }) {
  return (
    <section
      id={market.id}
      className="market-section scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="market-section__header">
          <p className="market-section__label">
            05 · {market.label.toUpperCase()}
          </p>
          <h2 className="market-section__title">{market.title}</h2>
          <p className="market-section__intro">{market.intro}</p>
        </header>

        <div className="market-section__body">
          <div className="market-blocks">
            {market.blocks.map((block) => (
              <MarketBlock key={block.id} block={block} />
            ))}
          </div>

          <p className="market-section__closing">{market.closing}</p>
        </div>
      </div>
    </section>
  )
}
