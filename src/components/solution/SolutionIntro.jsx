import solutionUsage from '../../assets/solution/solution-usage.png'

export default function SolutionIntro({ solution }) {
  return (
    <div className="solution-hero">
      <div className="solution-hero__copy">
        <p className="solution-section-label">
          02 · {solution.label.toUpperCase()}
        </p>
        {solution.intro.map((paragraph, index) => (
          <p key={index} className="solution-intro-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="solution-hero__visual" aria-hidden="true">
        <img
          src={solutionUsage}
          alt=""
          className="solution-hero__image"
          loading="lazy"
        />
      </div>
    </div>
  )
}
