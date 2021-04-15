import { numbersMax } from './numbers-max';

describe('max number', () => {
  test('set 01', () => {
    expect(numbersMax([4, 1, 7, 2, 13, 54, 98, 32, 1, 23, 54])).toEqual(98);
  });
});
