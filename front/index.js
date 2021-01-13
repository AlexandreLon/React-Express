import React from "react";
import Main from "./components/App";
import {renderToString} from 'react-dom/server'

class ReactElement extends HTMLElement {

    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        // this.root.innerHTML = `<div id='app'></div>`

        const componentName = this.getAttribute('component');
        if(componentName === undefined || componentName === null || componentName === '') {
            throw new Error('React Element need component attribute')
        }
        this.root.innerHTML = renderToString(<Main component={componentName}/>);
        // ReactDOM.render(<App></App>, this.shadowRoot.getElementById('app'))
    }
}

customElements.define('react-element', ReactElement)