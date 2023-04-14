import { pool } from '../pg-pool';

export const findRestaurantById = async (id: number) => {
  const { rows } = await pool.query(`SELECT * FROM restaurants WHERE id = ${id}`);
  return rows;
}