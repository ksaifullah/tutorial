export const findIntersection = (strArr: string[]): number[] => {
  if (strArr.length === 0) return [];
  const numArr: number[][] = strArr.map(str => str.split(',').map(s => parseInt(s)));
  const [firstItem, ...rest] = numArr;
  return rest.reduce((total: number[], arr: number[]) => {
    return total.reduce((t: number[], n: number) => {
      return arr.includes(n) ? t.concat(n) : t;
    }, []);
  }, firstItem);
};
