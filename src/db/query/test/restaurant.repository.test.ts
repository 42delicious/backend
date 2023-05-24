import { Pool } from 'pg';
import { IBackup } from 'pg-mem';
import { getPgMem } from 'src/db/pg-mem-pool';
import { expand } from 'src/db/util';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test } from 'vitest';
import { RestaurantRepository } from '../interface/restaurant.repository';
import { RestaurantRepositoryImpl } from '../restaurant';

describe('RestaurantRepository', () => {
  let repository: RestaurantRepository;
  let pool: Pool;
  let backup: IBackup;

  const testDataset = [
    {
      id: 0,
      name: 'restaurant1',
      cluster: 'seocho',
    },
    {
      id: 1,
      name: 'restaurant2',
      cluster: 'seocho',
    },
    {
      id: 2,
      name: 'restaurant3',
      cluster: 'gaepo',
    },
    {
      id: 3,
      name: 'restaurant4',
      cluster: 'gaepo',
    },
  ];

  beforeAll(() => {
    const memPg = getPgMem();
    pool = memPg.pool;
    backup = memPg.backup;
  });

  beforeEach(async () => {
    const expandValues = expand(3, 4);

    await pool.query(
      `INSERT INTO restaurants (id, name, cluster) VALUES ${expandValues}`,
      testDataset.map((restaurant) => Object.values(restaurant)).flat()
    );

    repository = new RestaurantRepositoryImpl(pool);
  });

  afterEach(() => backup.restore());

  afterAll(() => pool.end());

  describe('식당 ID로 조회', () => {
    test('식당 ID가 0인 식당을 조회하면, 식당 정보를 반환한다', async () => {
      // given
      const id = 0;

      // when
      const restaurant = await repository.findRestaurantById(id);

      // then
      expect(restaurant).toMatchObject(testDataset[0]);
    });

    test('데이터에 없는 식당 ID로 조회하면, undefined를 반환한다', async () => {
      // given
      const id = 999;

      // when
      const restaurant = await repository.findRestaurantById(id);

      // then
      expect(restaurant).toBeUndefined();
    });
  });

  describe('식당 전체 조회', () => {
    test('식당 전체를 조회하면, 식당 목록을 반환한다', async () => {
      // given
      const expected = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

      // when
      const restaurants = await repository.findAllRestaurants();

      // then
      console.log(`\n\n\nsrc/db/query/test/restaurant.repo.test.ts\n${restaurants.length}\n${JSON.stringify(restaurants)}\n\n\n`)
      expect(restaurants).toHaveLength(4);
      expect(restaurants).toSatisfy((rows: any[]) => {
        return expected.every((e) => rows.some((r) => r.id === e.id));
      });
    });
  });

  describe('식당 클러스터로 조회', () => {
    test('식당 클러스터가 seocho인 식당을 조회하면, 식당 목록을 반환한다', async () => {
      // given
      const cluster = 'seocho';
      const expected = [{ id: 0 }, { id: 1 }];

      // when
      const restaurants = await repository.findAllRestaurantsByCluster(cluster);

      // then
      expect(restaurants).toHaveLength(2);
      expect(restaurants).toSatisfy((rows: any[]) => {
        return expected.every((e) => rows.some((r) => r.id === e.id));
      });
    });

    test('식당 클러스터가 gaepo인 식당을 조회하면, 식당 목록을 반환한다', async () => {
      // given
      const cluster = 'gaepo';
      const expected = [{ id: 2 }, { id: 3 }];

      // when
      const restaurants = await repository.findAllRestaurantsByCluster(cluster);

      // then
      expect(restaurants).toHaveLength(2);
      expect(restaurants).toSatisfy((rows: any[]) => {
        return expected.every((e) => rows.some((r) => r.id === e.id));
      });
    });

    test('식당 클러스터가 없는 식당을 조회하면, 빈 배열을 반환한다', async () => {
      // given
      const cluster = 'no cluster';

      // when
      const restaurants = await repository.findAllRestaurantsByCluster(cluster);

      // then
      expect(restaurants).toHaveLength(0);
    });
  });
});
