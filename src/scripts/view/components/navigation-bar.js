class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container navbar">
        <div class="navbar-brand">
          <a href="#/">
            <i class="icon-logo fas fa-utensils"></i><span>F<span class="word-color">OO</span>DY</span=>
          </a>
        </div>
        <button class="hamburger-toggle" aria-label="Hamburger Button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <div class="navbar-nav">
          <a href="#/home" class="nav-item">Home</a>
          <a href="#/favorite" class="nav-item">Favorite</a>
          <a
            href="https://www.linkedin.com/in/mochammad-andre-cahyanto-6a814220b"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-about"
            >About</a
          >
        </div>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavigationBar);
