export default function SolutionVision({ vision }) {
  return (
    <section
      className="solution-block solution-vision"
      aria-label={vision.label}
    >
      <div className="solution-vision__grid">
        <div className="solution-vision__copy">
          <p className="solution-section-label solution-vision__label">
            {vision.label.toUpperCase()}
          </p>
          <h3 className="solution-vision__heading">{vision.heading}</h3>
          <p className="solution-vision__body">{vision.body}</p>
        </div>
        <div className="solution-vision__visual">
          <img
            src={vision.imageSrc}
            alt={vision.imageAlt}
            className="solution-vision__image"
            width={vision.imageWidth}
            height={vision.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
