import { describe, test } from 'vitest';
describe('RestaurantRepository', () => {
  describe('식당 ID로 조회', () => {
    test.todo('식당 ID가 0인 식당을 조회하면, 식당 정보를 반환한다');

    test.todo('데이터에 없는 식당 ID로 조회하면, undefined를 반환한다');

    describe('식당 전체 조회', () => {
      test.todo('식당 전체를 조회하면, 식당 목록을 반환한다');
    });

    describe('식당 클러스터로 조회', () => {
      test.todo('식당 클러스터가 seocho인 식당을 조회하면, 식당 목록을 반환한다');

      test.todo('식당 클러스터가 gaepo인 식당을 조회하면, 식당 목록을 반환한다');

      test.todo('식당 클러스터가 없는 식당을 조회하면, 빈 배열을 반환한다');
    });
  });
});
