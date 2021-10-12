// method to find the median of an array
const medianOfArray = (arr: number[]): number => {
  const length: number = arr.length;
  if (length % 2 === 0) {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2;
  } else {
    return arr[Math.floor(length / 2)];
  }
};

console.log(medianOfArray([12, 23, 12, 45]));

