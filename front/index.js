import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

class ReactElement extends HTMLElement {

    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.root.innerHTML = `<div id='app'></div>`
        const componentName = this.getAttribute('component');
        if(componentName === undefined || componentName === null || componentName === '') {
            throw new Error('React Element need component attribute')
        }
        ReactDOM.render(
            <Main component={componentName}/>,
            this.shadowRoot.getElementById('app')
        )
    }
}

customElements.define('react-element', ReactElement)