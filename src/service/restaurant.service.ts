import { findRestaurantById, getAllRestaurants1 } from '../db/query/mock/restaurant';

export const getRestaurantById = async (id: number) => {
  const result = await findRestaurantById(id);
  if (!result) {
    throw new Error();
  }
  return result;
};

export const getAllRestaurants = async () => {
  const restaurants = await getAllRestaurants1();

  return restaurants;
};
