class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('test 1231231');
  }

  connectedCallback() {

  }
}
customElements.define('my-custom-element', MyCustomElement);
