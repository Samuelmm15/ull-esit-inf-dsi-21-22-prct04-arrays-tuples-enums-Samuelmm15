// Hay que tener en cuenta que se deben de tratar de números
// consecutivos para poder formar un rango

function fromArrayToRanges(arrayToConvert: number[]): string {
  let result: string = ``;
  let i: number = 0;
  let firstNumber: number = arrayToConvert[0];
  let lastNumber: number = arrayToConvert[0];
  let auxiliary: number = 0;
  while (i != arrayToConvert.length) {
    auxiliary = arrayToConvert[i];
    if (auxiliary === lastNumber) {
      lastNumber = lastNumber + 1;
    } else {
      if (firstNumber !== (lastNumber - 1)) {
        result = result + firstNumber;
        result = result + `_`;
        result = result + (lastNumber - 1);
        result = result + `,`;
        firstNumber = arrayToConvert[i];
        lastNumber = arrayToConvert[i];
      } else {
        result = result + firstNumber;
        result = result + `,`;
        firstNumber = arrayToConvert[i];
        lastNumber = arrayToConvert[i];
      }
      lastNumber = lastNumber + 1;
    }
    // eslint-disable-next-line max-len
    if (i === (arrayToConvert.length - 1)) { // At the point that is the last one i
      if (firstNumber !== (lastNumber - 1)) {
        result = result + firstNumber;
        result = result + `_`;
        result = result + (lastNumber - 1);
      } else {
        result = result + firstNumber;
      }
      lastNumber = lastNumber + 1;
    }
    i++;
  }
  return result;
}

// COMPROBAR COMO COGER LOS NÚMEROS MAYORES DE UN CARACTER EN EL STRING
function fromRangesToArray(stringToConvert: string): number[] {
  const resultArray: number[] = [];
  let i: number = 0;
  let firstNumber: number = +stringToConvert[0];
  let lastNumber: number = 0;
  while (i != stringToConvert.length) {
    while (firstNumber <= lastNumber) {
      resultArray.push(firstNumber);
      firstNumber++;
    }
    if (stringToConvert[i] === `_`) {
      const aux: number = i + 1;
      lastNumber = +stringToConvert[aux];
    } else if (stringToConvert[i] === `,`) {
      const aux: number = i + 1;
      firstNumber = +stringToConvert[aux];
      lastNumber = +stringToConvert[aux];
    }
    i++;
  }
  return resultArray;
}

const arrayToComprobe: number[] = [3, 5, 6, 7, 9, 10];
const resultFromArrayToRanges: string = fromArrayToRanges(arrayToComprobe);
// eslint-disable-next-line max-len
console.log(`La conversión del array ${arrayToComprobe} al rango ${resultFromArrayToRanges}`);
const stringToComprobe: string = `5_7,9,12_14`;
const resultFromRangesToArray = fromRangesToArray(stringToComprobe);
// eslint-disable-next-line max-len
console.log(`La conversión del rango ${stringToComprobe} al array ${resultFromRangesToArray}`);
