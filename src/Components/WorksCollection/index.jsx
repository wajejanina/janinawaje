import React from 'react'
import { get } from 'lodash'

import './styles.scss'

const WorksCollection = ({ projectType, projects, openModal }) => {
    return (
        <div className="works-collection">
            <button
                className="works-collection__thumbnail"
                onClick={() => openModal(projects)}
                style={{ backgroundImage: `url(${get(projectType, 'thumbnail.url')})` }} />
            <button className="works-collection__title">{get(projectType, 'projectTypeName')}</button>
        </div>
    )
}

export default WorksCollection