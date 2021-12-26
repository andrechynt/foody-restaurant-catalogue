const assert = require('assert');

Feature('Favorited Restaurants');

Scenario('showing empty restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.no-restaurant');
});

Scenario('favorited one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.btn-explore');
  I.click('.btn-explore');
  I.seeElement(locate('restaurant-item').first());
  I.seeElement('.description a');
  const firstRestaurant = locate('.description a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#post');
  I.seeElement('.favorite');
  I.click('.favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.description a');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
