import { describe, test, expect } from 'vitest';
import { getAllRestaurants, getRestaurantById } from 'src/service/restaurant.service';

describe('단건 조회', () => {
  test('id가 0일 때, 이름이 맥도날드 서초뱅뱅점이어야함.', async () => {
    // given
    const id = 0;

    // when
    const result = await getRestaurantById(id);

    // then
    expect(result?.name).toBe('맥도날드 서초뱅뱅점');
  });

  test('단건조회를 했을 때, 모든 정보를 포함해야함.', async () => {
    // given
    const id = 1;

    // when
    const result = await getRestaurantById(id);

    // then
    expect(result).toEqual({
      id: 1,
      name: expect.any(String),
      price: expect.any(String),
      category: expect.any(String),
      summary: expect.any(String),
      location: expect.any(String),
      latitude: expect.any(Number),
      longitude: expect.any(Number),
      detail: expect.any(String),
    });
  });

  test('찾는 id가 없을 때 Error를 던져야함.', async () => {
    // given
    const id = 100;

    // when
    const command = () => getRestaurantById(id);

    //then
    expect(command).rejects.toThrowError();
  });
});

describe('전체 조회', () => {
  test('전체 조회 시, 전체 식당이 조회되어야함.', async () => {
    // given
    const expected = 37;

    // when
    const result = await getAllRestaurants();

    // then
    expect(result).toHaveLength(expected);
  });

  test('전체 조회 시, id, name, price, category, summary, location만 조회되어야함.', async () => {
    // given
    const expected = {
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(String),
      category: expect.any(String),
      summary: expect.any(String),
      location: expect.any(String),
    };

    // when
    const results = await getAllRestaurants();

    // then
    expect(results[0]).toMatchObject(expected);
    expect(results[0]).not.toHaveProperty('latitude');
    expect(results[0]).not.toHaveProperty('longitude');
    expect(results[0]).not.toHaveProperty('detail');
  });

  test('전체 조회 시, location이 있으면 해당 location의 식당만 조회되어야함.', async () => {
    // given
    const location = 'gaepo';

    // when
    const results = await getAllRestaurants(location);

    // then
    expect(results).toHaveLength(2);
    expect(results[0].location).toBe(location);
  });
});
