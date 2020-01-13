import React from 'react'

// Components
import SkillsCollection from 'Components/SkillsCollection'

import './styles.scss'

function Skills ({ skillsCollections }) {
    return (
        <section id="skills" className="section section-skills">
            <div className="container skills-container">
                {
                    skillsCollections.map((collection, i) => <SkillsCollection key={i} {...collection} />)
                }
            </div>
        </section>
    )
}

export default Skills