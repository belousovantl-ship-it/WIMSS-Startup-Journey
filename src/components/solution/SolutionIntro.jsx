import solutionControlRoom from '../../assets/solution/solution-control-room.png'
import SolutionVideo from './SolutionVideo'

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

          <SolutionVideo video={solution.video} compact />
        </div>
      </div>
    </div>
  )
}
