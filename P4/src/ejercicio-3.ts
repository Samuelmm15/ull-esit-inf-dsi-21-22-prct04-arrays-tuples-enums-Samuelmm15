/* eslint-disable no-unused-vars */
/**
 * This function calculates the resistence value from color bands.
 * @param firstColour Consists in the first colour to comprobe.
 * @param secondColour Consists in the second colour to comprobe
 * @param restColours Constis in the rest of the colours to comprobe.
 * @returns The resistence value
 * To test the program, use the comand:
 * ```
 * []$ npm test
 * ```
 * To execute the whole program, use the comand:
 * []$ npm start
 */
export function decodeResistor(firstColour: string,
    secondColour: string, ...restColours: string[]): number {
  enum resistorColours {
    Negro = `Negro`,
    Marrón = `Marrón`,
    Rojo = `Rojo`,
    Naranja = `Naranja`,
    Amarillo = `Amarillo`,
    Verde = `Verde`,
    Azul = `Azul`,
    Violeta = `Violeta`,
    Gris = `Gris`,
    Blanco = `Blanco`
  }

  let auxiliary: string = firstColour;
  let auxiliaryResult = ``;
  let i: number = 0;
  while (i < 2) {
    switch (auxiliary) {
      case resistorColours.Negro:
        auxiliaryResult = auxiliaryResult + `0`;
        break;
      case resistorColours.Marrón:
        auxiliaryResult = auxiliaryResult + `1`;
        break;
      case resistorColours.Rojo:
        auxiliaryResult = auxiliaryResult + `2`;
        break;
      case resistorColours.Naranja:
        auxiliaryResult = auxiliaryResult + `3`;
        break;
      case resistorColours.Amarillo:
        auxiliaryResult = auxiliaryResult + `4`;
        break;
      case resistorColours.Verde:
        auxiliaryResult = auxiliaryResult + `5`;
        break;
      case resistorColours.Azul:
        auxiliaryResult = auxiliaryResult + `6`;
        break;
      case resistorColours.Violeta:
        auxiliaryResult = auxiliaryResult + `7`;
        break;
      case resistorColours.Gris:
        auxiliaryResult = auxiliaryResult + `8`;
        break;
      case resistorColours.Blanco:
        auxiliaryResult = auxiliaryResult + `9`;
        break;
    }
    auxiliary = secondColour;
    i++;
  }
  const decimalResul: number = +auxiliaryResult;
  return decimalResul;
}

// eslint-disable-next-line max-len
enum resistorColours { // It is declared here to make a easy introducing to the paramethers
    Negro = `Negro`,
    Marrón = `Marrón`,
    Rojo = `Rojo`,
    Naranja = `Naranja`,
    Amarillo = `Amarillo`,
    Verde = `Verde`,
    Azul = `Azul`,
    Violeta = `Violeta`,
    Gris = `Gris`,
    Blanco = `Blanco`
  }
// eslint-disable-next-line max-len
const resultResistor: number = decodeResistor(resistorColours.Negro, resistorColours.Azul, resistorColours.Violeta);
// eslint-disable-next-line max-len
console.log(`El valor de la resistencia que ha sido introducida es ${resultResistor} Ohmios.`);
