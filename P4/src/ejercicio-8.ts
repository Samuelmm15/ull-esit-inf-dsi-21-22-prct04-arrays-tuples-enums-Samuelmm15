type point = {
  x: number;
  y: number;
}
/**
 * This function adds the coordinates of two points.
 * @param firstpoint Consists in the first point.
 * @param secondPoint  Consists in the second point.
 * @returns A result point with the added coordinates.
 * To test the program, use the command:
 * ```
 * []$ npm test
 * ```
 * To execute the whole program, use the command:
 * ```
 * []$ npm start
 * ```
 */
export function pointsAdd(firstpoint: point, secondPoint: point): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = firstpoint.x + secondPoint.x;
  resultPoint.y = firstpoint.y + secondPoint.y;
  return resultPoint;
}

/**
 * This function subtract the coordinates of two points.
 * @param firstpoint Consists in the first point.
 * @param secondPoint Consists in the second point.
 * @returns A result point with the subtracted coordinates.
 */
export function pointsSubtract(firstpoint: point, secondPoint: point): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = firstpoint.x - secondPoint.x;
  resultPoint.y = firstpoint.y - secondPoint.y;
  return resultPoint;
}
/**
 * This function multiply the coordinates of a point with a number.
 * @param pointToComprobe Consists in the point to multiply.
 * @param numberToOperate Consists in the number to multiply.
 * @returns An array with the multiply numbers.
 */
// eslint-disable-next-line max-len
export function productOperation(pointToComprobe: point, numberToOperate: number): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = pointToComprobe.x * numberToOperate;
  resultPoint.y = pointToComprobe.y * numberToOperate;
  return resultPoint;
}

/**
 * This function calculates the Euclidean distance.
 * @param firstpoint Consists in the first point.
 * @param secondPoint Consistsin the second point.
 * @returns The euclidean distance.
 */
// eslint-disable-next-line max-len
export function euclideanDistance(firstpoint: point, secondPoint: point): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  const resultX: number = (firstpoint.x - secondPoint.x) * (firstpoint.x - secondPoint.x);
  // eslint-disable-next-line max-len
  const resultY: number = (firstpoint.y - secondPoint.y) * (firstpoint.y - secondPoint.y);
  result = Math.sqrt(resultX + resultY);
  return result;
}

const firstPointToIntroduce: point = {
  x: 5,
  y: 6,
};
const secondPointToIntroduce: point = {
  x: 3,
  y: 2,
};
// eslint-disable-next-line max-len
let resultPointsOperations: point = pointsAdd(firstPointToIntroduce, secondPointToIntroduce);
// eslint-disable-next-line max-len
console.log(`EL resultado de la suma con puntos los puntos introducidos es (${resultPointsOperations.x}, ${resultPointsOperations.y})`);
// eslint-disable-next-line max-len
resultPointsOperations = pointsSubtract(firstPointToIntroduce, secondPointToIntroduce);
// eslint-disable-next-line max-len
console.log(`EL resultado de la resta con puntos los puntos introducidos es (${resultPointsOperations.x}, ${resultPointsOperations.y})`);
// eslint-disable-next-line max-len
resultPointsOperations = productOperation(secondPointToIntroduce, 3);
// eslint-disable-next-line max-len
console.log(`EL resultado del producto con el punto introducido es (${resultPointsOperations.x}, ${resultPointsOperations.y})`);
// eslint-disable-next-line max-len
const resultEuclideanDistance = euclideanDistance(firstPointToIntroduce, secondPointToIntroduce);
// eslint-disable-next-line max-len
console.log(`La distancia euclídea para los puntos introducidos es: ${resultEuclideanDistance}`);

// https://www.digitalocean.com/community/tutorials/how-to-create-custom-types-in-typescript
