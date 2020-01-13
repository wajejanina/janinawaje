import React from 'react'

// Components
import ExperienceCardsContainer from 'Components/ExperienceCardsContainer'
import Timeline from 'Components/Timeline'

import './styles.scss'

const Experiences = ({ experiences }) => (
    <section id="experiences" className="section section-experiences">
        <h2>EXPERIENCE</h2>
        <ExperienceCardsContainer experiences={experiences} />
        <div className="container timeline-container">
            <Timeline experiences={experiences} />
        </div>
    </section>
)

export default Experiences