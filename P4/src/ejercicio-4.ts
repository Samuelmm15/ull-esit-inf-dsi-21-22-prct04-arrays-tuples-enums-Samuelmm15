function meshArray(meshWords: string[]): string {
  let auxiliary: number = 0;
  let result: string = ``;
  while (auxiliary < 3) {
    const firstWord: string = meshWords[auxiliary];
    console.log(`${firstWord}`);
    auxiliary++;
    const secondWord: string = meshWords[auxiliary];
    console.log(`${secondWord}`);
    let i: number = 0;
    let j: number = 0;
    let auxiliaryResult: string = ``;
    while (i != firstWord.length) {
      if (firstWord[i] === secondWord[j]) {
        console.log(`${firstWord[i]}`);
        auxiliaryResult = auxiliaryResult + firstWord[i];
        j++;
      } else {
        j--;
        if ( j === -1) {
          j = 0;
        }
        if (firstWord[i] === secondWord[j]) {
          console.log(`${firstWord[i]}`);
          auxiliaryResult = ``;
          auxiliaryResult = auxiliaryResult + firstWord[i];
          j++;
        // eslint-disable-next-line max-len
        } else if ((firstWord[i] === secondWord[j]) && (i === (firstWord.length - 1))) {
          console.log(`Error al encadenar`);
          return `1`; // This identify that there is an error
        }
      }
      i++;
    }
    result = result + auxiliaryResult;
  }
  return result;
}

// eslint-disable-next-line max-len
const meshWordsToComprobe: string[] = [`allow`, `lowering`, `ringmaster`, `terror`];
const meshResult = meshArray(meshWordsToComprobe);
// eslint-disable-next-line max-len
console.log(`La cadena de texto que contiene las palabras encadenadas del array introducido es ${meshResult}`);
