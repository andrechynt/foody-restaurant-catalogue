class SkeletonLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="thumbnail mb-2">
        <span class="skeleton-img"></span>
      </div>
      <div class="description mb-2">
        <p class="restaurant-city skeleton-loader"></p>
        <a class="restaurant-name skeleton-loader" tabindex="-1">
        </a>
        <p class="restaurant-desc skeleton-loader-custom"></p>
      </div>
    `;
  }
}

customElements.define('skeleton-loader', SkeletonLoader);
