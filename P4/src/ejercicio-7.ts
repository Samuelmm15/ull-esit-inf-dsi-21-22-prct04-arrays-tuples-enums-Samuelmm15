// PREGUNTAR EN CLASE CÓMO SE DEBERÍA DE HACER
function multiplyAll(arrayToMultiply: number[]): (a: number) => number[] {
  return (num = 3) => {
    const resultArray: number[] = [];
    let result: number = 0;
    let i: number = 0;
    while (i !== length) {
      result = arrayToMultiply[i] * num;
      resultArray.push(result);
      i++;
    }
    return resultArray;
  };
}

const arrayExample: number[] = [2, 6, 8];
const resultMultiplyAll = multiplyAll(arrayExample);
console.log(`El array obtenido tras la multiplicación es ${resultMultiplyAll}`);
