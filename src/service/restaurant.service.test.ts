import { describe, it, expect } from 'vitest';
import { getAllRestaurants, getRestaurantById } from 'src/service/restaurant.service';

describe('단건 조회', () => {
  it('id가 1일 때, 이름이 김밥천국이어야함.', async () => {
    // given
    const id = 1;

    // when
    const result = await getRestaurantById(id);

    // then
    expect(result?.name).toBe('김밥지옥');
  });

  it('찾는 id가 없을 때 Error를 던져야함.', async () => {
    // given
    const id = 100;

    // when
    const result = await getRestaurantById(id);

    //then
    expect(result).toThrowError();
  });
});

describe('전체 조회', () => {
  it('전체 조회 시, 3개의 식당이 조회되어야함.', async () => {
    // given

    // when
    const result = await getAllRestaurants();

    // then
    expect(result).toHaveLength(3);
  });
});
