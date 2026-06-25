function TeamProfile({ member }) {
  return (
    <article className="team-profile">
      <header className="team-profile__header">
        <h3 className="team-profile__name">{member.name}</h3>
        <p className="team-profile__role">{member.role}</p>
      </header>
      <p className="team-profile__bio">{member.profile}</p>
      <ul className="team-profile__responsibilities">
        {member.responsibilities.map((item) => (
          <li key={item} className="team-profile__responsibility">
            {item}
          </li>
        ))}
      </ul>
      <p className="team-profile__emphasis">{member.emphasis}</p>
      <div className="team-profile__contact">
        <a href={`mailto:${member.email}`} className="team-profile__contact-line">
          {member.email}
        </a>
        <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="team-profile__contact-line">
          {member.phone}
        </a>
      </div>
    </article>
  )
}

export default function TeamSection({ team }) {
  return (
    <section
      id={team.id}
      className="team-section scroll-mt-20 border-b border-line py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="team-section__header">
          <p className="team-section__label">
            07 · {team.label.toUpperCase()}
          </p>
          <h2 className="team-section__title">{team.title}</h2>
          <p className="team-section__intro">{team.intro}</p>
          <p className="team-section__intro-note">{team.introNote}</p>
        </header>

        <div className="team-section__body">
          <div className="team-profiles">
            {team.members.map((member) => (
              <TeamProfile key={member.id} member={member} />
            ))}
          </div>

          {team.profilesLink ? (
            <a
              href={team.profilesLink.href}
              className="team-profiles__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {team.profilesLink.label}
            </a>
          ) : null}

          <div className="team-support-grid">
            <section
              className="team-panel team-panel--experts"
              aria-label="Experts on demand"
            >
              <h3 className="team-panel__heading">
                {team.expertsOnDemand.heading}
              </h3>
              <p className="team-panel__intro">{team.expertsOnDemand.intro}</p>
              <ul className="team-panel__list">
                {team.expertsOnDemand.areas.map((area) => (
                  <li key={area} className="team-panel__item">
                    {area}
                  </li>
                ))}
              </ul>
              <p className="team-panel__closing">
                {team.expertsOnDemand.closing}
              </p>
            </section>

            <section
              className="team-panel team-panel--priorities"
              aria-label="Next team priorities"
            >
              <h3 className="team-panel__heading">
                {team.nextPriorities.heading}
              </h3>
              <p className="team-panel__intro">{team.nextPriorities.intro}</p>
              <ul className="team-panel__list team-panel__list--priorities">
                {team.nextPriorities.priorities.map((priority) => (
                  <li key={priority} className="team-panel__item">
                    {priority}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
