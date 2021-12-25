import CONFIG from '../../../globals/config';

class OtherRestaurant extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="other-restaurant-wrapper">
        <a href= "${`/#/detail/${this._item.id}`}">
          <div class="thumbnail">
            <img class="lazyload" data-src="${`${CONFIG.BASE_IMAGE_URL}small/${this._item.pictureId}`}" alt="${this._item.name}" />
            <div class="rating"><i class="icon fas fa-star"></i>${this._item.rating}</div>
          </div>
        </a>
        <div class="description truncate">
          <a href="${`/#/detail/${this._item.id}`}" class="restaurant-name" tabindex="-1">
            ${this._item.name}
            <span class="tooltip">${this._item.name}</span>
          </a>
          <p class="restaurant-city"><i class="icon fas fa-map-marked-alt"></i>${this._item.city}</p>
          <p class="restaurant-desc">${this._item.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('other-restaurant', OtherRestaurant);
