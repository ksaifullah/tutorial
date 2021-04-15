// export const findFactors = (numArr: number[], factor: number): number[] => {
//   return numArr.filter(n => n % factor === 0);
// };

export const findFactors = (numArr: number[], factor: number): number[] => {
  const fn = (n: number) => n % factor === 0;
  return numArr.filter(fn);
};

console.log(findFactors([1, 2 , 5, 8, 10, 12, 15, 18], 3));
