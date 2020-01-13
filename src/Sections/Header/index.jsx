import React from 'react'
import sections from 'Config/sections'

// Components
import HeaderTitle from 'Components/HeaderTitle'
import Navigation from 'Components/Navigation'

import './styles.scss'

const Header = ({ title }) =>  (
    <section className="container section section-main">
        <HeaderTitle title={title} />
        <Navigation sections={sections} />
    </section>
)

export default Header