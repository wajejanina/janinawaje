import React from 'react'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import SectionsContainer from 'Sections/SectionsContainer'

const GRAPHCMS_API = 'https://api-apeast.graphcms.com/v1/ck56t1ye4052301giglii5sct/master'

const client = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHCMS_API,
        credentials: 'same-origin',
        headers: {
            authorization: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjoyLCJ0b2tlbklkIjoiZWQ5ZWVkODktMzY4Ni00MzQyLWJhMmItZjRjOTcyMmFkMjkyIiwiaWF0IjoxNTc4NTg1NDg1LCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyJ9.FbuPr7PHwj-k3KpxW--3u8m-0VsfvhQByQgCUy_JaBfpnHRgsWZ4i0Lxpp5ox2m9smm-ky1g0dIzz-9RSfbPPxNeFGAqQ_OAh8_x8FdMERxmKzHzx16EKM3Iad7r0rDj5epKqauWjdUQ6MyEvZur7TsVVaKnl8Jtk6s83G2AP7C_dnHX2Fe-nCxtFBWiy-MA_lgoz7x3wTqtIZCDcE_zkY5TnwjKeKwB59papkuBcchC4qJ24fCdrFTehAvqLrePyx24TZk8pmyxkNUMLpdpMO9LVmssxlRswfq0m4dTfRvfF7hATg8TLIGRr-MWmAsw70VMJ_S91W7BaudROhg_3m5exP_ZW_6NYR4EWijbSyMD9M5gouQGlF3ed3JrGoSZIqdqs0iwFE7-cElXQeTuFaCMaaGvvgnLmxRGpEbYLRDFrQJ4SR1aXX_H5YIf_oyJriTVJ-Gk-GJYsiD_Oyj9WFOmyYc6qrXxVoJ03dyCNEc0P2LdvbIczf0PZLvfAIcnXuHl_-Do1p9nnvNKD6CHSws0dUJo8M-BZXMXrXsfaIRKKT4mmvpmqaNuhxH6-yf8ZZBGtLsvI6uOrxtz3dJaQlV4ZgNh-YhYWM5i5MfFdEBlXO9K2fkSSN4JoKUvNrHsev3aojkUK-sC_jE5Ew-oXpc1xk1HZRSQZ5r0q_RH-o0'
        }
    }),
    cache: new InMemoryCache,
})

export default function() {
    return (
        <ApolloProvider client={ client }>
            <SectionsContainer />
        </ApolloProvider>
    )
}
