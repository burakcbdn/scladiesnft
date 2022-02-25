class TestMintButton extends HTMLElement {
    connectedCallback() {
        console.log('[ TEST WIX ]')
        window.ethereum.request({ method: "eth_accounts" });
        this.innerHTML = '<br/><br/><br/>Hello World!';
      }
}

customElements.define('test-mint-button', TestMintButton);
