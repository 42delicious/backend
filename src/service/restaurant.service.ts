import { RestaurantRepositoryMock } from '../db/query/mock/restaurant';

const repository = new RestaurantRepositoryMock();

export const getRestaurantById = async (id: number) => {
  const result = await repository.findRestaurantById(id);
  if (!result) {
    throw new Error();
  }
  return result;
};

export const getAllRestaurants = async (cluster?: string | null) => {
  const restaurants = await repository.findAllRestaurants();

  return restaurants;
};
