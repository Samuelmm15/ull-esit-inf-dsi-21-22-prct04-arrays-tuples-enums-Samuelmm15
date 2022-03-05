function moveZeros(arrayToConvert: number[]): number[] {
  const result: number[] = [];
  let i: number = 0;
  let counter: number = 0;
  while (i != arrayToConvert.length) {
    if (arrayToConvert[i] === 0) {
      counter++;
    } else {
      result.push(arrayToConvert[i]);
    }
    i++;
  }
  i = 1;
  while (i <= counter) {
    result.push(0);
    i++;
  }
  return result;
}

const arrayMoveZeros: number[] = [1, 0, 1, 2, 0, 1, 3];
const resultMoveZeros: number[] = moveZeros(arrayMoveZeros);
console.log(`Finalmente el vector convertido es: ${resultMoveZeros}`);
