import React from 'react'

import './styles.scss'

const ExperienceCard = ({ jobTitle, jobDescription, company }) => (
    <div className="experience-card">
        <h3 className="experience-card__title">{ jobTitle }</h3>
        <span></span>
        <p className="experience-card__company">{ company }</p>
        <p className="experience-card__description">{ jobDescription }</p>
    </div>
)

export default ExperienceCard