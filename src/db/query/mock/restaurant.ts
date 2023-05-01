const restaurants = [
  {
    id: 1,
    name: '김밥천국',
    address: '서울시 강남구',
    menuItems: [
      { id: 1, name: '김밥' },
      { id: 2, name: '라면' },
    ],
  },
  {
    id: 2,
    name: '광수육회',
    address: '서울시 강남구',
    menuItems: [
      { id: 3, name: '육회' },
      { id: 4, name: '물회' },
    ],
  },
  {
    id: 3,
    name: '장독묵은지',
    address: '서울시 강남구',
    menuItems: [
      { id: 5, name: '돈까스' },
      { id: 6, name: '냉면' },
    ],
  },
];

export const findRestaurantById = async (id: number) => {
  return restaurants.find((restaurant) => restaurant.id === id);
};

export const getAllRestaurants1 = async () => {
  return restaurants;
};
