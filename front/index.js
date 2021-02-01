import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
class ReactElement extends HTMLElement {

    constructor() {
        super()
        this.innerHTML = `<div id='app'></div>`
    }

    connectedCallback() {
        const componentName = this.getAttribute('component');
        if(componentName === undefined || componentName === null || componentName === '') {
            throw new Error('React Element need component attribute')
        }
        ReactDOM.render(
            <Main component={componentName}/>,
            this
        )
    }
}

customElements.define('react-element', ReactElement)