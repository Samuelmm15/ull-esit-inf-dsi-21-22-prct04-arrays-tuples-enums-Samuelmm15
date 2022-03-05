function productTable(numberN: number): number[][] {
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
    console.log(auxiliaryResult); // To comprobe the arrays
    // eslint-disable-next-line max-len
    result.push(auxiliaryResult); // COMPROBAR EN ESTE PUNTO SI SE PUEDE REALIZAR UN ARRAY DE ARRAYS
    auxiliaryResult = [];
    i++;
    j = 1;
    auxiliaryCounter--;
  }
  return result;
}

const numberNToComprobe = 4;
if (numberNToComprobe < 1) {
  console.log(`El número que ha sido introducido no está permitido.`);
} else { // When the number is correct
  const productTableResult = productTable(numberNToComprobe);
  console.log();
  console.log(`El resultado es ${productTableResult}`);
}
