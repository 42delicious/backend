import { findRestaurantById } from '../db/query/restaurant';

export const getRestaurantById = async (id: number) => {
  const result = await findRestaurantById(id);
  if (result.length == 0) throw new Error('No Resaurant');
  return result;
}