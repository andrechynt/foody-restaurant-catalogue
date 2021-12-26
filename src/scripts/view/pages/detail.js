import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createDetailRestaurantTemplate, renderError, Loader, createOfflinePageTemplate,
} from '../templates/template';
import createFavoriteButton from '../../utils/favorite-button';

const { showloaderCircle, removeLoaderCircle } = Loader;

const Detail = {
  render() {
    return `
    <!-- POST -->
    <div tabindex="0" id="post">
      <div class="container detail-wrapper mt-3"></div>
    </div>
    `;
  },

  afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const container = document.querySelector('#post .container');
    const TIME_OF_MILLISECONDS = 200;

    if (navigator.onLine) {
      /* FOR GET SAME CITY RESTAURANT */
      const otherRestaurant = (getDetailCity) => {
        RestaurantSource.listRestaurant()
          .then((data) => {
            createDetailRestaurantTemplate.relatedRestaurant(data, getDetailCity);
          })
          .catch((err) => {
            renderError(err, container);
          });
      };

      setTimeout(() => {
        RestaurantSource.restaurantDetail(url.id)
          .then((data) => {
            removeLoaderCircle();

            createDetailRestaurantTemplate.showDetailPage(data);
            createDetailRestaurantTemplate.allReviewCustomer(data.customerReviews);
            createDetailRestaurantTemplate.submitReview(url.id);
            otherRestaurant(data.city);

            createFavoriteButton.init({
              btnContainer: document.querySelector('#btn-favorite-container'),
              restaurant: {
                id: data.id,
                name: data.name,
                description: data.description,
                pictureId: data.pictureId,
                city: data.city,
                rating: data.rating,
              },
            });
          })
          .catch((err) => {
            renderError(err, container);
          });
      }, TIME_OF_MILLISECONDS);

      showloaderCircle();
    } else {
      createOfflinePageTemplate(container);
    }
  },
};

export default Detail;
