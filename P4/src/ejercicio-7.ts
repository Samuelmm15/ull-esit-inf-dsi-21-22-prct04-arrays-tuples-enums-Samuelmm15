
function multiplyAll(arrayToMultiply: number[]): (a: number) => number[] {
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

const arrayExample: number[] = [2, 6, 8];
// eslint-disable-next-line max-len
const resultMultiplyAll = multiplyAll(arrayExample)(3); // To asign a value to the fuction, is neccesary to call the function like this
console.log(`El array obtenido tras la multiplicación es ${resultMultiplyAll}`);
