/**
 * This function calculates if a Cartesian habitant can
 * take a walk under 10 minutes.
 * @param walkToComprobe Consists in the array produced by the Cartesian app.
 * @returns True if the walk is possible or false if not.
 * To execute the program, use the command:
 * ```
 * []$ npm start
 * ```
 * To test the program, use the command:
 * ```
 * []$ npm test
 * ```
 */
export function theCartesianWalk(walkToComprobe: string[]): boolean {
  let counter: number = 0; // to comprobe if the walk is up to 10 minutes
  let xCoordinate: number = 0;
  let yCoordinate: number = 0;
  let i: number = 0;
  while (i !== walkToComprobe.length) {
    switch (walkToComprobe[i]) {
      case `n`:
        yCoordinate = yCoordinate + 1;
        counter++;
        break;
      case `s`:
        yCoordinate = yCoordinate - 1;
        counter++;
        break;
      case `e`:
        xCoordinate = xCoordinate + 1;
        counter++;
        break;
      case `o`:
        xCoordinate = xCoordinate - 1;
        counter++;
        break;
    }
    i++;
  }
  if ((xCoordinate === 0 && (yCoordinate === 0))) {
    if (counter <= 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// eslint-disable-next-line max-len
const theCartesianWalkArray: string[] = [`n`, `s`, `e`, `o`, `n`, `s`, `e`, `o`, `n`, `s`, `e`, `o`];
const resultTheCartesianWalk: boolean = theCartesianWalk(theCartesianWalkArray);
if (resultTheCartesianWalk === true) {
  // eslint-disable-next-line max-len
  console.log(`El paseo proporcionado por la app se puede realizar en 10 minutos.`);
} else if (resultTheCartesianWalk === false) {
  // eslint-disable-next-line max-len
  console.log(`El paseo proporcionado por la app NO se puede realizar en 10 minutos.`);
}
