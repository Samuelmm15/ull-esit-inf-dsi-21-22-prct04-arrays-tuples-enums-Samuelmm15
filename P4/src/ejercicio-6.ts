/**
 * This function moves the zeros that are in the array to the end of the array.
 * @param arrayToConvert Consists in the array to move the zeros to the end.
 * @returns The array with the zeros at the end of it.
 * To execute the whole program, use the command:
 * ```
 * []$ npm start
 * ```
 * To test the program, use the command:
 * ```
 * []$ npm test
 * ```
 */
export function moveZeros(arrayToConvert: number[]): number[] {
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

const arrayMoveZeros: number[] = [0, 14, 3, 0, 0, 1, 3];
const resultMoveZeros: number[] = moveZeros(arrayMoveZeros);
console.log(`Finalmente el vector convertido es: ${resultMoveZeros}`);
