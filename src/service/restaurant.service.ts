import { findRestaurantById, getAllRestaurants1 } from '../db/query/mock/restaurant';
import { pool, init } from '../db/pg-pool'


export const getRestaurantById = async (id: number) => {

  const client = await pool.connect();

  init();
  try { 
    const result = await findRestaurantById(id);
    if (result === undefined) {
      throw new Error;
    }
    return result;
  } catch(error) {
    console.error("not exist")
  }
};

export const getAllRestaurants = async () => {
  //TODO
  const restaurants = await getAllRestaurants1();

  return restaurants;
};
