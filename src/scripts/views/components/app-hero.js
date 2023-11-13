class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Jajan Apps</h1>
      <p class="hero__tagline">
        Find the best restaurant only in this website.
      </p>
    </div>
  </div>
        `;
  }
}

customElements.define('app-hero', AppHero);
