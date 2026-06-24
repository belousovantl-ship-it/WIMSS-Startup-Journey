export default function WhyWimss({ whyWimss }) {
  return (
    <section className="solution-block why-wimss" aria-label="Why WIMSS">
      <h3 className="solution-subheading">{whyWimss.heading}</h3>
      <p className="why-wimss__lead">{whyWimss.lead}</p>

      <ul className="why-wimss__list">
        {whyWimss.features.map((feature) => (
          <li key={feature.title} className="why-wimss__item">
            <span className="why-wimss__item-title">{feature.title}</span>
            <span className="why-wimss__item-detail"> — {feature.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
