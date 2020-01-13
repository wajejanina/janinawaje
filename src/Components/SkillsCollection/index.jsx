import React from 'react'
import { get } from 'lodash'

// Components
import Skill from 'Components/Skill'

import './styles.scss'

const SkillsCollection = ({ skillType, skills }) => {
    if (skills.length > 1) {
        skills.sort((a, b) => get(b, 'skillRelevance', 0) - get(a, 'skillRelevance', 0))
    }
    return (
        <div className="skills-collection">
            <h3 className="skill-type">{ get(skillType, 'skillTypeName') }</h3>
            {
                skills.map((skill, i) => <Skill key={i} {...skill} />)
            }
        </div>
    )
}

export default SkillsCollection