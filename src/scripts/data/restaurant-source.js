import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static listRestaurant() {
    return fetch(API_ENDPOINT.LIST_RESTAURANT)
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.restaurants)
      .catch((err) => err.message);
  }

  static restaurantDetail(id) {
    return fetch(API_ENDPOINT.DETAIL(id))
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.restaurant)
      .catch((err) => err.message);
  }

  static postReviewRestaurant(_data) {
    return fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(_data),
    })
      .then((response) => response.json())
      .then((responseJSON) => responseJSON.customerReviews)
      .catch((err) => console.log(err));
  }
}

export default RestaurantSource;
