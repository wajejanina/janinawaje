import React from 'react'
import { get } from 'lodash'

import './styles.scss'

const Skill = ({ skillName, skillRate, skillIcon }) => {
    const renderSkillRate = () => {
        const skillRateElem = []
        for (let i = 0; i < 10; i++) {
            skillRateElem.push(<span key={i} className={`skill__dot ${ i < skillRate ? 'skill__dot--filled' : ''}`} />)
        }
        return skillRateElem
    }
    return (
        <div className="skill">
            <img src={ get(skillIcon, 'url') } alt={ skillName } className="skill__icon"/>
            <span className="skill__name">{ skillName }</span>
            <div className="skill__rate">
                {
                    renderSkillRate().map(el => el)
                }
            </div>
        </div>
    )
}

export default Skill