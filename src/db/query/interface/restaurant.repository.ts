export interface RestaurantRepository {
  findRestaurantById(id: number): Promise<any>;
  findAllRestaurants(): Promise<any[]>;
  findAllRestaurantsByCluster(cluster: string): Promise<any[]>;
}
