import { createButton } from '../view/templates/template';
import FavoritedResataurantIdb from '../data/favorited-db';

const { buttonFavoritedTemplate, buttonUnFavoriteTemplate } = createButton;
const { getRestaurant, putRestaurant, deleteRestaurant } = FavoritedResataurantIdb;

const createFavoriteButton = {
  async init({ btnContainer, restaurant }) {
    this._btnContainer = btnContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._btnContainer.innerHTML = buttonUnFavoriteTemplate();

    const likeButton = document.querySelector('.favorite');
    likeButton.addEventListener('click', async (event) => {
      event.stopPropagation();

      await putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._btnContainer.innerHTML = buttonFavoritedTemplate();

    const likeButton = document.querySelector('.favorite');
    likeButton.addEventListener('click', async (event) => {
      event.stopPropagation();

      await deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default createFavoriteButton;
