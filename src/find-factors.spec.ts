import { findFactors } from './find-factors';

describe('find factors', () => {
  test('set 01', () => {
    expect(findFactors([2, 3, 4, 6, 9, 10, 11], 3)).toEqual([3, 6, 9]);
  });
});
