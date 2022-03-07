// FALTA LA REALIZACIÓN DEL UNDEFINE COMO ERROR
export function adnToARN(adnArrayToComprobe: string[]): string[] {
  const result: string[] = [];
  let i: number = 0;
  while (i != adnArrayToComprobe.length) {
    const auxiliaryStringADN: string = adnArrayToComprobe[i];
    let j: number = 0;
    let auxiliaryResult: string = ``;
    while (j != auxiliaryStringADN.length) {
      if (auxiliaryStringADN[j] === `G`) {
        auxiliaryResult = auxiliaryResult + `C`;
      } else if (auxiliaryStringADN[j] === `C`) {
        auxiliaryResult = auxiliaryResult + `G`;
      } else if (auxiliaryStringADN[j] === `T`) {
        auxiliaryResult = auxiliaryResult + `A`;
      } else if (auxiliaryStringADN[j] === `A`) {
        auxiliaryResult = auxiliaryResult + `U`;
      }
      j++;
    }
    result.push(auxiliaryResult);
    i++;
  }
  return result;
}

export function arnToAdn(arnArrayToComprobe: string[]): string[] {
  const result: string[] = [];
  let i: number = 0;
  while (i != arnArrayToComprobe.length) {
    const auxiliaryStringARN: string = arnArrayToComprobe[i];
    let j: number = 0;
    let auxiliaryResult: string = ``;
    while (j != auxiliaryStringARN.length) {
      if (auxiliaryStringARN[j] === `G`) {
        auxiliaryResult = auxiliaryResult + `C`;
      } else if (auxiliaryStringARN[j] === `C`) {
        auxiliaryResult = auxiliaryResult + `G`;
      } else if (auxiliaryStringARN[j] === `A`) {
        auxiliaryResult = auxiliaryResult + `T`;
      } else if (auxiliaryStringARN[j] === `U`) {
        auxiliaryResult = auxiliaryResult + `A`;
      }
      j++;
    }
    result.push(auxiliaryResult);
    i++;
  }
  return result;
}

const adnArray: string[] = [`ACG`, `GTC`];
const resultADNtoARN = adnToARN(adnArray);
console.log(`La conversión de ADN a ARN es: ${resultADNtoARN}`);
const arnArray: string[] = [`ACG`, `GTC`];
const resultARNtoADN = arnToAdn(arnArray);
console.log(`La conversión de ARN a ADN es: ${resultARNtoADN}`);
