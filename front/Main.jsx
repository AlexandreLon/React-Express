import React from 'react'
import App from './components/App'

export default function Main({component}) {
    switch(component) {
        case 'App': 
            return <App></App>
        default:
            return <></>
    }
}