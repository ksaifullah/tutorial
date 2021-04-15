import { numbersSum } from './numbers-sum';

describe('numbers - sum', () => {
  test('set 01', () => {
    expect(numbersSum([3, 5, 8, 1, 34, 76, 12, 3, 111, 21])).toEqual(274);
  });
});
