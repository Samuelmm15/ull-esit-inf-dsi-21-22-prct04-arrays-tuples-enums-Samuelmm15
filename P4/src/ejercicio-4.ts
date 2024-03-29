/**
 * This function comprobes if the words are in chain.
 * @param meshWords Consists in the array of words to comprobe.
 * @returns A string with the chain characters.
 * To test the function, use the command:
 * ```
 * []$ npm test
 * ```
 * To execute the whole program, use the command:
 * []$ npm start
 */
export function meshArray(meshWords: string[]): string {
  let auxiliary: number = 0;
  let result: string = ``;
  while (auxiliary < 3) {
    const firstWord: string = meshWords[auxiliary];
    auxiliary++;
    const secondWord: string = meshWords[auxiliary];
    let i: number = 0;
    let j: number = 0;
    let auxiliaryResult: string = ``;
    while (i != firstWord.length) {
      if (firstWord[i] === secondWord[j]) {
        auxiliaryResult = auxiliaryResult + firstWord[i];
        j++;
      } else {
        j--;
        if ( j === -1) {
          j = 0;
        }
        if (firstWord[i] === secondWord[j]) {
          auxiliaryResult = ``;
          auxiliaryResult = auxiliaryResult + firstWord[i];
          j++;
        // eslint-disable-next-line max-len
        } else if ((firstWord[i] !== secondWord[j]) && (i === (firstWord.length - 1))) {
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
const meshWordsToComprobe: string[] = [`apply`, `plywood`, `wood`, `day`];
const meshResult = meshArray(meshWordsToComprobe);
if (meshResult === `1`) {
  console.log(`Error al encadenar`);
} else {
  // eslint-disable-next-line max-len
  console.log(`La cadena de texto que contiene las palabras encadenadas del array introducido es ${meshResult}`);
}

// `kingdom`, `dominator`, `notorious`, `usual`, `allegory`
// `allow`, `lowering`, `ringmaster`, `terror`
// `apply`, `plywood`, `apple`, `each`
// `apply`, `plywood`, `wood`, `day`
