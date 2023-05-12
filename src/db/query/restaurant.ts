import { Pool } from 'pg';
import { RestaurantRepository } from './interface/restaurant.repository';

export class RestaurantRepositoryImpl implements RestaurantRepository {
  constructor(private readonly pool: Pool) {}

  public async findRestaurantById(id: number) {
    const { rows } = await this.pool.query(`SELECT * FROM restaurants WHERE id = ${id}`);
    return rows[0];
  }

  public async findAllRestaurants(): Promise<any[]> {
    //TODO
    return [];
  }

  public async findAllRestaurantsByCluster(cluster: string): Promise<any[]> {
    //TODO
    return [];
  }
}
