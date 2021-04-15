import { findIntersection } from './find-intersection';

describe('find intersection', () => {
  test('no array element', () => {
    expect(findIntersection([])).toEqual([]);
  });

  test('one array element', () => {
    expect(findIntersection(['3, 6, 1, 9'])).toEqual(expect.arrayContaining([3, 6, 1, 9]));
  });

  test('set 01', () => {
    expect(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])).toEqual(expect.arrayContaining([1 , 4, 13]));
  });

  test('set 02', () => {
    expect(findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10'])).toEqual(expect.arrayContaining([1, 9, 10]));
  });

  test('set 03', () => {
    expect(findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10', '1, 3, 5, 7, 9'])).toEqual(expect.arrayContaining([1, 9]));
  });
});
