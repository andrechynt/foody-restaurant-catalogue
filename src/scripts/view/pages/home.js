import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantTemplate, renderError, Loader } from '../templates/template';

const { showLoaderSkeleton, removeLoaderSkeleton } = Loader;

const Home = {
  render() {
    return `
      <!-- JUMBOTRON -->
      <jumbotron-element></jumbotron-element>
      <!-- HEADLINE -->
      <headline-element></headline-element>
      <!-- POST -->
      <div tabindex="0" id="post">
        <div class="container mb-5">
          <h2 class="post-title mb-4">Explore Restaurant</h2>
          <div class="restaurant-container"></div>
        </div>
      </div>
    `;
  },

  afterRender() {
    const container = document.querySelector('#post .container');
    const TIME_OF_MILLISECONDS = 200;

    setTimeout(() => {
      RestaurantSource.listRestaurant()
        .then((data) => {
          removeLoaderSkeleton();
          createRestaurantTemplate.showRestaurantList(data);
        })
        .catch((err) => {
          renderError(err, container);
        });
    }, TIME_OF_MILLISECONDS);

    showLoaderSkeleton();
  },
};

export default Home;
