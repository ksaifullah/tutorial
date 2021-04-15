import { multiply } from './index';

describe('index', () => {
  describe('multiply', () => {
    test('3 and 4 returns 12', () => {
      expect(multiply(3, 4)).toEqual(12);
    });
  });
});
