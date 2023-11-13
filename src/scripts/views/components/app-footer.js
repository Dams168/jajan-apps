class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Copyright &#169 2023 - Jajan Apps</p>
      `;
  }
}

customElements.define('app-footer', Footer);
