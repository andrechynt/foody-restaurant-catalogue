class HeadlineElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container headline">
        <div class="headline-item" tabindex="0">
          <div class="circle mb-2"><i class="fas fa-store"></i></div>
          <h2>BEST RESTO</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="headline-item" tabindex="0">
          <div class="circle mb-2">
            <i class="fas fa-money-bill-wave"></i>
          </div>
          <h2>BEST PRICE</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="headline-item" tabindex="0">
          <div class="circle mb-2"><i class="fas fa-utensils"></i></div>
          <h2>DELICIOUS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="headline-item" tabindex="0">
          <div class="circle mb-2"><i class="fas fa-smile-beam"></i></div>
          <h2>ENJOY EATS</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="waves mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,128L0,160L40,160L40,96L80,96L80,256L120,256L120,288L160,288L160,96L200,96L200,96L240,96L240,64L280,64L280,32L320,32L320,128L360,128L360,96L400,96L400,288L440,288L440,224L480,224L480,0L520,0L520,32L560,32L560,96L600,96L600,160L640,160L640,192L680,192L680,160L720,160L720,32L760,32L760,256L800,256L800,96L840,96L840,32L880,32L880,32L920,32L920,128L960,128L960,96L1000,96L1000,64L1040,64L1040,64L1080,64L1080,0L1120,0L1120,128L1160,128L1160,160L1200,160L1200,64L1240,64L1240,288L1280,288L1280,256L1320,256L1320,256L1360,256L1360,64L1400,64L1400,0L1440,0L1440,320L1400,320L1400,320L1360,320L1360,320L1320,320L1320,320L1280,320L1280,320L1240,320L1240,320L1200,320L1200,320L1160,320L1160,320L1120,320L1120,320L1080,320L1080,320L1040,320L1040,320L1000,320L1000,320L960,320L960,320L920,320L920,320L880,320L880,320L840,320L840,320L800,320L800,320L760,320L760,320L720,320L720,320L680,320L680,320L640,320L640,320L600,320L600,320L560,320L560,320L520,320L520,320L480,320L480,320L440,320L440,320L400,320L400,320L360,320L360,320L320,320L320,320L280,320L280,320L240,320L240,320L200,320L200,320L160,320L160,320L120,320L120,320L80,320L80,320L40,320L40,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
    `;
  }
}

customElements.define('headline-element', HeadlineElement);
