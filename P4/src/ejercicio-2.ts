
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

function fromRangesToArray(stringToConvert: string): number[] {
  const resultArray: number[] = [];
  let i: number = 0;
  let firstNumber: number = +stringToConvert[0];
  let lastNumber: number = 0;
  while (i != stringToConvert.length) {
    if (stringToConvert[i] === `_`) {
      let aux: number = i + 1;
      aux++;
      if ((stringToConvert[aux] !== `,`) && (stringToConvert[aux] !== `_`)) {
        let auxiliaryConvert: string = ``;
        aux--;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        aux++;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        lastNumber = +auxiliaryConvert;
      } else {
        aux--;
        lastNumber = +stringToConvert[aux];
      }
    } else if (stringToConvert[i] === `,`) {
      let aux: number = i + 1;
      aux++;
      if ((stringToConvert[aux] !== `,`) && (stringToConvert[aux] !== `_`)) {
        let auxiliaryConvert: string = ``;
        aux--;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        aux++;
        auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
        firstNumber = +auxiliaryConvert;
        lastNumber = +auxiliaryConvert;
      } else {
        aux--;
        firstNumber = +stringToConvert[aux];
        lastNumber = +stringToConvert[aux];
      }
    } else if (stringToConvert[i] === `-`) {
      let aux: number = i + 1;
      let auxiliaryConvert: string = ``;
      auxiliaryConvert = auxiliaryConvert + stringToConvert[i];
      auxiliaryConvert = auxiliaryConvert + stringToConvert[aux];
      aux++;
      if (stringToConvert[aux] === `,`) {
        firstNumber = +auxiliaryConvert;
        lastNumber = +auxiliaryConvert;
      } else if (stringToConvert[aux] === `_`) {
        firstNumber = +auxiliaryConvert;
      }
    }
    while (firstNumber <= lastNumber) {
      resultArray.push(firstNumber);
      firstNumber++;
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
