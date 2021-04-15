// export const numbersMax = (numArr: number[]): number => {
//   const [firstItem, ...rest] = numArr;
//   return rest.reduce((t, n) => t > n ? t : n, firstItem);
// };
// [4, 1, 7, 2, 13, 54, 98, 32, 1, 23, 54]

export const numbersMax = (numArr: number[]): number => {
  const [initialMax, ...rest] = numArr;
  const fn = (max: number, n: number): number => n > max ? n : max;
  return rest.reduce(fn, initialMax);
};
