import { describe, test } from 'vitest';

describe('단건 조회', () => {
  test.todo('id가 0일 때, 이름이 맥도날드 서초뱅뱅점이어야함.');

  test.todo('단건조회를 했을 때, 모든 정보를 포함해야함.');

  test.todo('찾는 id가 없을 때 Error를 던져야함.');
});

describe('전체 조회', () => {
  test.todo('전체 조회 시, 전체 식당이 조회되어야함.');

  test.todo('전체 조회 시, id, name, price, category, summary, cluster만 조회되어야함.');

  test.todo('전체 조회 시, cluster이 있으면 해당 cluster의 식당만 조회되어야함.');
});
