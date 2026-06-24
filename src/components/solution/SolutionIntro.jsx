import solutionControlRoom from '../../assets/solution/solution-control-room.png'

export default function SolutionIntro({ solution }) {
  return (
    <div className="solution-intro">
      <div className="solution-hero">
        <div className="solution-hero__copy">
          <p className="solution-section-label">
            02 · {solution.label.toUpperCase()}
          </p>
          <h2 className="solution-headline">{solution.headline}</h2>
          {solution.intro.map((paragraph, index) => (
            <p key={index} className="solution-intro-paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="solution-hero__aside">
          <div className="solution-hero__visual">
            <img
              src={solutionControlRoom}
              alt={solution.heroImageAlt}
              className="solution-hero__image"
              loading="lazy"
            />
          </div>

          <div className="solution-capabilities">
            {solution.capabilities.map((capability) => (
              <div key={capability.label} className="solution-capability">
                <p className="solution-capability__label">{capability.label}</p>
                <p className="solution-capability__text">{capability.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
