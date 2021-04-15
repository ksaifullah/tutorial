const numbersSum = (numArr) => {
  return numArr.reduce((t, n) => t + n, 0);
};

console.log(numbersSum(['a', 2, 3]));
