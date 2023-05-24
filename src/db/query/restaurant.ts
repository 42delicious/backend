import { Pool } from 'pg';
import { RestaurantRepository } from './interface/restaurant.repository';

export class RestaurantRepositoryImpl implements RestaurantRepository {
  constructor(private readonly pool: Pool) {}

  public async findRestaurantById(id: number) {
    const { rows } = await this.pool.query(`SELECT * FROM restaurants WHERE id = ${id}`);
    return rows[0];
  }

  public async findAllRestaurants(): Promise<any[]> {
    const { rows } = await this.pool.query (`SELECT id, name, price, category, summary, cluster FROM restaurants`)
    return rows;
  }

  public async findAllRestaurantsByCluster(cluster: string): Promise<any[]> {
    const { rows } = await this.pool.query(`SELECT id, name, price, category, summary, cluster FROM restaurants WHERE cluster = '${cluster}'`)
    return rows;
  }
}
