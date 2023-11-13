class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="app-bar__menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar__brand">
      <h1>Jajan Apps</h1>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/favorite">favorite</a></li>
        <li><a href="https://github.com/Dams168">About</a></li>
      </ul>
    </nav>
  </header>
      `;
  }
}

customElements.define('app-bar', Appbar);
