import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { get } from 'lodash'
import { pageSettings, experiences, projectCollections, skillsCollections, contactForm } from 'Config/query'

// Sections
import Contacts from 'Sections/Contacts'
import Experiences from 'Sections/Experiences'
import Header from 'Sections/Header'
import Skills from 'Sections/Skills'
import Works from 'Sections/Works'
import Loading from 'Sections/Loading'
import ErrorPage from 'Sections/ErrorPage'

const SectionsContainer = ({ data }) => {
    if (data.loading) {
        return <Loading />
    } else if (data.error) {
        return <ErrorPage />
    }

    return (
        <main className="sections-container" style={{ backgroundImage: `url(${data.pageSettings[0].pageBackground.url})` }}>
            <Header title={get(data, 'pageSettings[0].pageHeaderTitle')} />
            <Experiences experiences={get(data, 'experiences')} />
            <Works works={get(data, 'projectsCollections')} />
            <Skills skillsCollections={get(data, 'skillsCollections')} />
            <Contacts {...get(data, 'contactForms[0]')} />
        </main>
    )
}

const query = gql`
    {
        ${pageSettings}
        ${experiences}
        ${projectCollections}
        ${skillsCollections}
        ${contactForm}
    }
`

export default graphql(query)(SectionsContainer)