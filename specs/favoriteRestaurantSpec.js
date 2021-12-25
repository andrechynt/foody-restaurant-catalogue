import FavoritedResataurantIdb from '../src/scripts/data/favorited-db';

describe('Favorited A Restaurant', () => {
  it('should be able to favorite the restaurant', async () => {
    await FavoritedResataurantIdb.putRestaurant({ id: 1 });

    const restaurant = await FavoritedResataurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await FavoritedResataurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already favorited', async () => {
    await FavoritedResataurantIdb.putRestaurant({ id: 1 });
    await FavoritedResataurantIdb.putRestaurant({ id: 1 });

    expect(await FavoritedResataurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoritedResataurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FavoritedResataurantIdb.putRestaurant();

    expect(await FavoritedResataurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not add a restaurant when it has no data', async () => {
    await FavoritedResataurantIdb.putRestaurant(null);

    expect(await FavoritedResataurantIdb.getAllRestaurant()).toEqual([]);
  });
});
