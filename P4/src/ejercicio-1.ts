/**
 * This function returns N multiplication tables.
 * @param numberN Consists on the number of multiplication tables.
 * @returns N multplication tables.
 * To test the program, is neccesary to use the command:
 * ```
 * []$ npm test
 * ```
 * To execute the whole program is neccesary the command:
 * ```
 * []$ npm start
 * ```
 */
export function productTable(numberN: number): number[][] {
  if (numberN < 1) {
    const error: number[][] = [[1]]; // the number 1 represent an error
    console.log(`El número que ha sido introducido no está permitido`);
    return error;
  }
  const result: number[][] = []; // Necessary to initializate into cero
  let auxiliaryResult: number[] = [];
  let i: number = 1;
  let j: number = 1;
  let auxiliaryCounter: number = numberN;
  while (auxiliaryCounter > 0) {
    let product: number;
    while (j <= numberN) {
      product = i * j;
      auxiliaryResult.push(product);
      j++;
    }
    // console.log(auxiliaryResult); // To comprobe the arrays
    result.push(auxiliaryResult);
    auxiliaryResult = [];
    i++;
    j = 1;
    auxiliaryCounter--;
  }
  return result;
}

const numberNToComprobe = 5;
if (numberNToComprobe < 1) {
  console.log(`El número que ha sido introducido no está permitido.`);
} else { // When the number is correct
  const productTableResult: number[][] = productTable(numberNToComprobe);
  console.log();
  console.log(`El resultado es [${productTableResult}]`);
}
