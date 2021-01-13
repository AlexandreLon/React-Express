import React from 'react'
import App from './components/App'
import Page from './components/Page'

export default function Main({component}) {
    switch(component) {
        case 'App': 
            return <App></App>
        case 'Page': 
            return <Page></Page>
        default:
            return <></>
    }
}