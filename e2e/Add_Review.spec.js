Feature('Add Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add new review', ({ I }) => {
  I.seeElement('.btn-explore');
  I.click('.btn-explore');
  I.seeElement(locate('restaurant-item').first());
  I.seeElement('.description a');
  const firstRestaurant = locate('.description a').first();
  I.click(firstRestaurant);

  I.scrollTo('.add-review');
  I.seeElement('#name');
  I.fillField('name', 'Juleha');
  I.seeElement('#review-content');
  I.fillField('review-content', 'wkwkwkkwkwkkwk');
  I.click('Add Review');
});
