const assert = require('assert');

Feature('Favorited Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty restaurant', ({ I }) => {
  I.seeElement('.no-restaurant');
});

Scenario('favorited one restaurant', async ({ I }) => {
  I.seeElement('.no-restaurant');

  I.amOnPage('/');
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
});
