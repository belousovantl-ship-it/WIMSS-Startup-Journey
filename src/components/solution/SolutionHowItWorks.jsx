import howWimssWorksInfographic from '../../assets/solution/how-wimss-works-infographic.png'

const INFOGRAPHIC_ALT =
  'Five-step WIMSS process: RFID tagging, automatic scanning, cloud data transfer, real-time visibility, and analytics and optimization.'

export default function SolutionHowItWorks({ howItWorks }) {
  return (
    <section className="solution-block hiw-section" aria-label="How WIMSS works">
      <h3 className="solution-subheading">{howItWorks.heading}</h3>

      <p className="hiw-infographic-hint" aria-hidden="true">
        Scroll horizontally to view the full infographic
      </p>

      <div
        className="hiw-infographic-scroll"
        tabIndex={0}
        aria-label="How WIMSS works infographic — scroll horizontally on smaller screens"
      >
        <img
          src={howWimssWorksInfographic}
          alt={INFOGRAPHIC_ALT}
          className="hiw-infographic"
          width={1024}
          height={512}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}
