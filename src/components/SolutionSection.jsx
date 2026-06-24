import { sections } from '../content/siteContent'
import ProductPanels from './ProductPanels'
import SolutionHowItWorks from './solution/SolutionHowItWorks'
import SolutionIntro from './solution/SolutionIntro'
import WhyWimss from './solution/WhyWimss'

export default function SolutionSection() {
  const solution = sections.solution

  return (
    <section
      id={solution.id}
      className="scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SolutionIntro solution={solution} />

        <div className="solution-body">
          <SolutionHowItWorks howItWorks={solution.howItWorks} />

          <section
            className="solution-block solution-modules"
            aria-label="WIMSS core use cases"
          >
            <h3 className="solution-subheading solution-subheading--modules">
              {solution.modulesHeading}
            </h3>
            <p className="solution-modules-lead">{solution.modulesLead}</p>
            <ProductPanels />
          </section>

          <WhyWimss whyWimss={solution.whyWimss} />
        </div>
      </div>
    </section>
  )
}
