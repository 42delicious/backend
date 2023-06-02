import { describe, test, expect, assert } from 'vitest';
import { getAllRestaurants, getRestaurantById } from './restaurant.service';

describe('단건 조회', () => {
  test('id가 0일 때, 이름이 맥도날드 서초뱅뱅점이어야함.', async() => {
    const id = 0;
    const result = await getRestaurantById(id);
  
    expect(result.name).toBe('맥도날드 서초뱅뱅');
  });
  
  test.todo('단건조회를 했을 때, 모든 정보를 포함해야함.', async() => {
    const id = 0;
    const result = await getRestaurantById(id);

    expect(result).toEqual({
      id: 0,
      name: expect.any(String),
      price: expect.any(String),
      category: expect.any(String),
      summary: expect.any(String),
      cluster: expect.any(String),
      latitude: expect.any(Number),
      longitude: expect.any(Number),
      detail: expect.any(String),
    });
  });

  test.todo('찾는 id가 없을 때 Error를 던져야함.', async() => {
    const id = 37;
    const action = () => getRestaurantById(id);

    expect(action).toThrow();
  });
});

/*
describe('메뉴 조회', () => {
  test('맥도날드 메뉴는 10개 이상이어야함.', async () => {
    const restaurant = await getRestaurantById(0);
    assert.lengthOf(restaurant?.menu, 10);
  });
*/

describe('전체 조회', () => {
  test.todo('전체 조회 시, 전체 식당이 조회되어야함.', async() => {
    const result = await getAllRestaurants();

    assert.lengthOf(result, 37);
  });

  test.todo('전체 조회 시, id, name, price, category, summary, cluster만 조회되어야함.', async() => {
    const result = await getAllRestaurants();
    expect(result[0]).not.toHaveProperty('latitude');
    expect(result[0]).not.toHaveProperty('longitude');
    expect(result[0]).not.toHaveProperty('detail');
  });

  test.todo('전체 조회 시, cluster이 있으면 해당 cluster의 식당만 조회되어야함.', async() => {
    const cluster = 'seocho';
    const result = await getAllRestaurants('seocho');

    assert.lengthOf(result, 35);
  });
});
