import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  test('n > 1', () => {
    expect(() => fibonacci(1)).toThrow('Invalid input! Constraint: n > 1.');
  });

  test('for 5', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test('for 10', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
