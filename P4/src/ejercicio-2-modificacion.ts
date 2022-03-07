// BUSCAR INFORMACIÓ SOBRE LOS VECTORES DOBLES
function mediaFilter(pictureArray: number[][]): number[][] {
  const result: number[][] = [[]];
  const resultAux: number[] = [];
  let i: number = 0;
  let j: number = 0;
  let counter: number = 0;
  while (i !== pictureArray.length) {
    let auxiliaryResult: number = 0;
    while (j !== pictureArray.length) {
      auxiliaryResult = auxiliaryResult + pictureArray[i][j];
      counter++;
      j++;
    }
    auxiliaryResult = (auxiliaryResult / counter);
    resultAux.push(auxiliaryResult);
    result.push(resultAux);
    i++;
  }
  return result;
}

const initialPicture: number[][] = [[10, 20]];
const pictureResult: number[][] = mediaFilter(initialPicture);
console.log(`La imagen final suavizada es ${pictureResult}`);

