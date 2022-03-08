/**
 * This function separates an unordered array into an ordered array,
 * separate into a string part and a number part.
 * @param arrayToConvert Consists in the unordered array to sort.
 * @returns A sorted array.
 */
export function meanAndConcatenate(arrayToConvert: (number |
    string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  let i: number = 0;
  let auxiliaryNumber: number = 0;
  let decimalResult: number = 0;
  let counter: number = 0;
  let auxiliaryString: string = ``;
  let stringResult: string = ``;
  while (i != arrayToConvert.length) {
    // eslint-disable-next-line quotes
    if (typeof arrayToConvert[i] === "number") {
      auxiliaryNumber = + arrayToConvert[i];
      decimalResult = decimalResult + auxiliaryNumber;
      counter++;
    // eslint-disable-next-line quotes
    } else if (typeof arrayToConvert[i] == "string") {
      auxiliaryString = arrayToConvert[i] as string;
      stringResult = stringResult + auxiliaryString;
    }
    i++;
  }
  decimalResult = decimalResult / counter;
  result.push(decimalResult);
  result.push(stringResult);
  return result;
}

// eslint-disable-next-line max-len
const arrayMeanAndConcatenate: (number | string)[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
const resultMeanAndConcatenate = meanAndConcatenate(arrayMeanAndConcatenate);
// eslint-disable-next-line max-len
console.log(`El array obtenido como resultado del array introducido es ${resultMeanAndConcatenate}`);
