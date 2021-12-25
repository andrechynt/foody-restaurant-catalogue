const assert = require('assert');

Feature('UnFavorited Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unfavorited a restaurant', async ({ I }) => {
  I.seeElement('.btn-explore');
  I.click('.btn-explore');
  I.seeElement(locate('restaurant-item').first());
  I.seeElement('.description a');
  const firstRestaurant = locate('.description a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('.favorite');
  I.click('.favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.description a');
  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.seeElement('.description a');
  I.click('.description a');

  I.seeElement('.favorite');
  I.click('.favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('.no-restaurant');
});
