import { numbersSum } from './numbers-sum';

export const standardDeviation = (numArr: number[]): number => {
  const mean = numbersSum(numArr) / numbersSum.length;
  const distance = numArr
    .map((n) => Math.pow(n - mean, 2))
    .reduce((t, n) => t + n, 0);

  return Math.sqrt(distance / numArr.length);
};
