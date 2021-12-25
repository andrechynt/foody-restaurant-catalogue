class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container footer-row">
        <div class="copyright">
          <p>
            Copyright &#169; 2021. All Rights Reserved | Made By <span class="author"> M Andre
            Cahyanto</span>.
          </p>
        </div>
        <div class="sosmed">
          <div class="sosmed-item">
            <a
              href="https://www.instagram.com/m.andrechy/"
              target="_blank"
              rel="noopener noreferrer"
              ><span class="fab fa-instagram-square"></span
            ></a>
          </div>
          <div class="sosmed-item">
            <a
              href="https://twitter.com/403NotAccess/"
              target="_blank"
              rel="noopener noreferrer"
              ><span class="fab fa-twitter-square"></span
            ></a>
          </div>
          <div class="sosmed-item">
            <a
              href="https://www.facebook.com/Ndree.54/"
              target="_blank"
              rel="noopener noreferrer"
              ><span class="fab fa-facebook-square"></span
            ></a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
