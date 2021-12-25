import FavoritedResataurantIdb from '../../data/favorited-db';
import {
  createRestaurantTemplate, renderError, Loader, noRestaurant,
} from '../templates/template';

const { showLoaderSkeleton, removeLoaderSkeleton } = Loader;

const Favorite = {
  render() {
    return `
      <!-- POST -->
      <div tabindex="0" id="post">
        <div class="container mt-3 mb-5">
          <h2 class="post-title mb-4">Favorite Restaurant</h2>
          <div class="restaurant-container"></div>
        </div>
      </div>
    `;
  },

  afterRender() {
    const container = document.querySelector('#post .container');
    const TIME_OF_MILLISECONDS = 200;

    setTimeout(() => {
      FavoritedResataurantIdb.getAllRestaurant()
        .then((data) => {
          removeLoaderSkeleton();

          if (data.length) {
            createRestaurantTemplate.showRestaurantList(data);
          } else {
            noRestaurant();
          }
        })
        .catch((err) => {
          renderError(err, container);
        });
    }, TIME_OF_MILLISECONDS);

    showLoaderSkeleton();
  },
};

export default Favorite;
