import dotenv from 'dotenv'

dotenv.config();

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