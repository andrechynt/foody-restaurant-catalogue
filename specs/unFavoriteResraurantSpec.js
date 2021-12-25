import FavoritedResataurantIdb from '../src/scripts/data/favorited-db';

describe('Unfavorited A Restaurant', () => {
  beforeEach(async () => {
    await FavoritedResataurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoritedResataurantIdb.deleteRestaurant(1);
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await FavoritedResataurantIdb.deleteRestaurant(1); // Asumsi Click Button Favorited

    expect(await FavoritedResataurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant but restaurant is not in the list', async () => {
    await FavoritedResataurantIdb.deleteRestaurant(1);

    expect(await FavoritedResataurantIdb.getAllRestaurant()).toEqual([]);
  });
});
