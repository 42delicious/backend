import { Client } from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'postgres',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
});

export interface RestaurantRepository {
  findRestaurantById(id: number): Promise<any>;
  findAllRestaurants(): Promise<any[]>;
  findAllRestaurantsByCluster(cluster: string): Promise<any[]>;
}

export class RestaurantDatabase implements RestaurantRepository {

  public async findRestaurantById(id: number) {
    return restaurants.find((restaurant) => restaurant.id === id);
  }

  public async findAllRestaurants() {
    return restaurants;
  }

  public async findAllRestaurantsByCluster(cluster: string) {
    return restaurants.filter((restaurant) => restaurant.cluster === cluster);
  }
}

const restaurants = data;