import React from 'react'
import sections from 'Config/sections'

// Components
import HeaderTitle from 'Components/HeaderTitle'
import Navigation from 'Components/Navigation'

import './styles.scss'

const Header = ({ title }) =>  (
    <section className="section section-main">
        <div className="container">
            <HeaderTitle title={title} />
            <Navigation sections={sections} />
        </div>
    </section>
)

export default Header