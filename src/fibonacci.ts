export const fibonacci = (n: number): number[] => {
  if (n <= 1) {
    throw new Error('Invalid input! Constraint: n > 1.');
  }

  return Array(n - 1).fill(null).reduce((t: number[]) => {
    t.push(t[t.length - 1] + t[t.length - 2]);
    return t;
  }, [0, 1]);
};
