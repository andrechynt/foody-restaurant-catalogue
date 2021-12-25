import CONFIG from '../../../globals/config';

class DetailRestaurant extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-detail mb-2">
        <div class="detail-img" tabindex="0">
          <picture>
            <source media="(max-width: 600px)" srcset="${`${CONFIG.BASE_IMAGE_URL}small/${this._item.pictureId}`}">
            <img class="lazyload" data-src="${`${CONFIG.BASE_IMAGE_URL}large/${this._item.pictureId}`}" alt="${this._item.name}" />
          </picture>
        </div>
        <div class="other-detail">
          <div class="header" tabindex="0">
            <h2 class="detail-name">${this._item.name}</h2>
            <div class="rating">
              <div class="stars-outer">
                <div class="stars-inner"></div>
              </div>
              (${this._item.rating}) 
            </div>
          </div>
          <p class="detail-city"><i class="icon fas fa-map-marked-alt"></i>${this._item.address}, ${this._item.city}</p>
          <div class="btn-wrapper">
            <ul class="badge-category">
              ${this._item.categories.map((category) => `<li class="category-name">${category.name}</li>`).join('')}
            </ul>
            <div id="btn-favorite-container"></div>
          </div>
        </div>
      </div>
      <div class="card-detail p-15 mb-2" tabindex="0">
        <p class="header-about">ABOUT</p>
        <p class="desc-about">${this._item.description}</p>
      </div>
      <div class="card-detail p-15 mb-2" tabindex="0">
        <p class="header-menu">MENU</p>
        <div class="menu-category mb-2">
          <div class="foods">
            <p class="desc-foods">Foods :</p>
            <ul class="draft-foods">
              ${this._item.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
          </div>
          <div class="drinks">
            <p class="desc-drinks">Drinks :</p>
              <ul class="draft-drinks">
                ${this._item.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
          </div>
        </div>
      </div>
      <div class="card-review p-15 mb-4">
        <p class="header-review">REVIEW</p>
        <p class="total-review mb-2"><span class="length-review">${this._item.customerReviews.length}</span> Review</p>
        <div class="people-review mb-4"></div>
        <section class="add-review mb-2">
          <p class="review-title mb-2">Write Your Review</p>
          <form id="form-review">
          <label for="name"></label>
          <input id="name" class="input-review-name mb-1" name="name" type="text" placeholder="Your Name" required>
          <label for="review-content"></label>
          <textarea id="review-content" class="input-review-content mb-1" name="review-content" rows="10" cols="100"
            placeholder="Input your review..." required
          ></textarea>
          <button type="submit" class="button-submit-review">Add Review</button>
          </form>
        </section>
      </div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
