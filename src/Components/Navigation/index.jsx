import React from 'react'

import './styles.scss'

const Navigation = ({ sections }) => (
    <div className="navigation">
        {
            sections.map(({ title, section }, i) => <a key={i} href={`#${section}`}>{title}</a>)
        }
    </div>
)

export default Navigation