import RestaurantSource from '../../data/restaurant-source';

const createRestaurantTemplate = {
  showRestaurantList(results) {
    const restaurantContainer = document.querySelector('.restaurant-container');

    results.forEach((restaurants) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.item = restaurants;
      restaurantContainer.appendChild(restaurantItem);
    });

    const containerText = document.querySelectorAll('.truncate');
    this.truncateText(containerText, 110);
  },

  truncateText(selector, maxLength) {
    selector.forEach((element) => {
      element.querySelector('.restaurant-desc').innerText = this._truncate(
        '.restaurant-desc',
        maxLength,
      );
    });
  },

  _truncate(text, maxLength) {
    let getText = document.querySelector(text).innerText;

    if (getText.length > maxLength) {
      getText = `${getText.substr(0, maxLength)}...`;
    }
    return getText;
  },
};

const createDetailRestaurantTemplate = {
  showDetailPage(result) {
    const container = document.querySelector('#post .container');
    const restaurantDetail = document.createElement('detail-restaurant');
    const createAside = document.createElement('aside');
    createAside.classList.add('mb-5');

    restaurantDetail.item = result;
    container.appendChild(restaurantDetail);
    this.createStarsRating(result.rating);

    container.appendChild(createAside);
  },

  createStarsRating(rating) {
    const starTotal = 5;
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    document.querySelector('.stars-inner').style.width = starPercentageRounded;
  },

  /* FILTER RESTAURANT WITH SAME CITY */
  relatedRestaurant(result, detailCity) {
    const aside = document.querySelector('#post .container aside');
    aside.innerHTML = '<h3 class="other-title mb-2">Related Restaurant</h3>';

    const wrapperList = document.createElement('section');

    result.filter((data) => {
      if (data.city === detailCity) {
        const otherRestaurant = document.createElement('other-restaurant');

        otherRestaurant.item = data;
        wrapperList.appendChild(otherRestaurant);
        aside.appendChild(wrapperList);
      }
    });

    const containerText = document.querySelectorAll('.truncate');
    createRestaurantTemplate.truncateText(containerText, 35);
  },

  allReviewCustomer(result) {
    const wrapper = document.querySelector('.people-review');

    result.forEach((item) => {
      const createReview = document.createElement('review-element');
      createReview.item = item;
      wrapper.appendChild(createReview);
    });
  },

  submitReview(id) {
    const form = document.querySelector('#form-review');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.querySelector('#name').value;
      const review = document.querySelector('#review-content').value;

      const _data = {
        id: id,
        name: name,
        review: review,
      };

      // CHECK ONLINE OR OFFLINE
      if (window.navigator.onLine) {
        RestaurantSource.postReviewRestaurant(_data)
          .then((data) => {
            this.addNewReview(data[data.length - 1]); // ADD LAST DATA FOR REVIEW CUSTOMER
            this.updateTotalReview(data.length);
          })
          .catch((err) => console.log(err.message));
      } else {
        alert('Cant add review, check your connectivity.');
      }

      // CLEAR FORM
      document.querySelector('#form-review').reset();
    });
  },

  addNewReview(result) {
    const wrapper = document.querySelector('.people-review');
    const createReview = document.createElement('review-element');
    createReview.item = result;
    wrapper.appendChild(createReview);
  },

  updateTotalReview(lengthReview) {
    document.querySelector('.length-review').innerText = lengthReview;
  },
};

const createButton = {
  buttonFavoritedTemplate() {
    return `<button aria-label="favorite-restaurant" class="favorite">
      <i class="icon fa fa-heart" aria-hidden="true"></i>FAVORITED</button>
    `;
  },

  buttonUnFavoriteTemplate() {
    return `<button aria-label="unfavorite-restaurant" class="favorite">
      <i class="icon fa fa-heart" aria-hidden="true"></i>FAVORITE</button>
    `;
  },
};

const Loader = {
  showLoaderSkeleton(lenghtData = 5) {
    const restaurantContainer = document.querySelector('.restaurant-container');

    for (let i = 0; i < lenghtData; i++) {
      restaurantContainer.innerHTML += `
        <skeleton-loader></skeleton-loader
      `;
    }
  },

  removeLoaderSkeleton() {
    const getElement = document.querySelectorAll('skeleton-loader');

    getElement.forEach((element) => {
      element.remove();
    });
  },

  showloaderCircle() {
    const detailWrapper = document.querySelector('.detail-wrapper');
    detailWrapper.innerHTML = `
      <div class="lds-ripple"><div></div><div></div></div>
    `;
  },

  removeLoaderCircle() {
    const getElement = document.querySelector('.lds-ripple');
    getElement.remove();
  },
};

const noRestaurant = () => {
  const restaurantContainer = document.querySelector('.restaurant-container');

  restaurantContainer.innerHTML = `
    <div class="no-restaurant mt-3">
      <i class="icon-bag mb-1 fas fa-shopping-basket"></i>
      <h3>You don't have any favorite restaurant.</h3>
    </div>
  `;
};

const renderError = (message, selector) => {
  selector.innerHTML = `
    <h2 class="placeholder mb-3">${message}</h2>
  `;
};

export {
  createRestaurantTemplate,
  createDetailRestaurantTemplate,
  createButton,
  Loader,
  renderError,
  noRestaurant,
};
