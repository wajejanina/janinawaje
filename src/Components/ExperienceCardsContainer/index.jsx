import React from 'react'
import { get } from 'lodash'

import ExperienceCard from 'Components/ExperienceCard'

import './styles.scss'

const ExperienceCardsContainer = ({ experiences }) => {
    experiences.sort((a, b) => get(a, 'order', 100) - get(b, 'order', 100))

    return (
        <div className="container experience-cards-container">
            {
                experiences.map((exp, i) => <ExperienceCard key={i} {...exp} />)
            }
        </div>
    )
}

export default ExperienceCardsContainer