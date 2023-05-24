import { RestaurantRepositoryMock } from '../db/query/mock/restaurant';

const repository = new RestaurantRepositoryMock();

export const getRestaurantById = async (id: number) => {
  const restaurants = await repository.findRestaurantById(id);
  if (!restaurants) {
    throw new Error();
  }
  return restaurants;
};

export const getAllRestaurants = async (cluster?: string | null) => {
  if (cluster == null) {
    const restaurants = await repository.findAllRestaurants();
    return restaurants;
  } else {
    const restaurants = await repository.findAllRestaurantsByCluster(cluster);
    if (restaurants == null) {
      throw new Error();
    }
    console.log(restaurants);
    console.log(restaurants.length);
    return restaurants;
  }
};
