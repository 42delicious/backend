import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config();
const supabaseUrl = 'https://hqwnwxqptxpzbqrmtasy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export interface RestaurantRepository {
  findRestaurantById(id: number): Promise<any>;
  findAllRestaurants(): Promise<any[]>;
  findAllRestaurantsByCluster(cluster: string): Promise<any[]>;
}

export class RestaurantDatabase implements RestaurantRepository {
  constructor() {}

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
