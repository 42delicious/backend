import { Pool } from 'pg';
import {createRestaurantTableQuery} from './query/table';

export const pool = new Pool({
  user: process.env.DB_USER || 'test',
  database: process.env.DB_NAME || 'test',
  password: process.env.DB_PASSWORD || 'test',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
});

export const init = async () => {
  const client = await pool.connect();
  client.query(createRestaurantTableQuery);
  client.release();
}
