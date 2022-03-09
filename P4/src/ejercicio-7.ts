/**
 * This function multiplys an introduced array with a
 * number that is passed to another function.
 * @param arrayToMultiply Consists in the array to multiply.
 * @returns A new array with the values that were multiplyed.
 * To test the program, use the command:
 * ```
 * []$ npm test
 * ```
 * To execute the whole program, use the command:
 * ```
 * []$ npm start
 * ```
 */
// eslint-disable-next-line max-len
export function multiplyAll(arrayToMultiply: number[]): (a: number) => number[] {
  return (num) => {
    const resultArray: number[] = [];
    let result: number = 0;
    let i: number = 0;
    while (i !== arrayToMultiply.length) {
      result = arrayToMultiply[i] * num;
      resultArray.push(result);
      i++;
    }
    return resultArray;
  };
}

const arrayExample: number[] = [2, 2, 8, 5, 1];
// eslint-disable-next-line max-len
const resultMultiplyAll = multiplyAll(arrayExample)(5); // To asign a value to the fuction, is neccesary to call the function like this
console.log(`El array obtenido tras la multiplicación es ${resultMultiplyAll}`);
