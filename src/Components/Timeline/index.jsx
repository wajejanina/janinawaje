import React from 'react'
import { get } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

import './styles.scss'

const Timeline = ({ experiences }) => {
    experiences.sort((a, b) => get(a, 'order', 100) - get(b, 'order', 100))
    const renderBriefcases = () => {
        const elems = []
        for (let i = 0; i < experiences.length - 1; i++) {
            elems.push(<FontAwesomeIcon key={i} icon={faBriefcase} />)
        }
        return elems
    }

    return (
        <div className="timeline">
            {
                experiences.map(({ experiencePeriod }, i) => <span key={i} className="timeline__period"><span className="timeline__period__date">{experiencePeriod}</span></span>)
            }
            {
                experiences.length > 1 && renderBriefcases().map(el => el)
            }
        </div>
    )
}

export default Timeline