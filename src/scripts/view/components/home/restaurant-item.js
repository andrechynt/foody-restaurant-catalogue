import CONFIG from '../../../globals/config';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set item(item) {
    this._item = item;
  }

  render() {
    this.innerHTML = `
      <a href= "${`/#/detail/${this._item.id}`}">
        <div class="thumbnail">
          <img class="lazyload" data-src="${`${CONFIG.BASE_IMAGE_URL}small/${this._item.pictureId}`}" alt="${this._item.name}" />
          <div class="rating"><i class="icon fas fa-star"></i>${this._item.rating}</div>
        </div>
      </a>
      <div class="description truncate">
        <p class="restaurant-city"><i class="icon fas fa-map-marked-alt"></i>${this._item.city}</p>
        <a href="${`/#/detail/${this._item.id}`}" class="restaurant-name" tabindex="-1">
          ${this._item.name}
          <span class="tooltip">${this._item.name}</span>
        </a>
        <p class="restaurant-desc">${this._item.description}</p>
      </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
