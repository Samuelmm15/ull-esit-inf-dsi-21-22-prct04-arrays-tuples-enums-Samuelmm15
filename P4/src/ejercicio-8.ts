type point = {
  x: number;
  y: number;
}

function pointsAdd(firstpoint: point, secondPoint: point): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = firstpoint.x + secondPoint.x;
  resultPoint.y = firstpoint.y + secondPoint.y;
  return resultPoint;
}

function pointsSubtract(firstpoint: point, secondPoint: point): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = firstpoint.x - secondPoint.x;
  resultPoint.y = firstpoint.y - secondPoint.y;
  return resultPoint;
}

// eslint-disable-next-line max-len
function productOperation(pointToComprobe: point, numberToOperate: number): point {
  const resultPoint: point = {
    x: 0,
    y: 0,
  };
  resultPoint.x = pointToComprobe.x * numberToOperate;
  resultPoint.y = pointToComprobe.y * numberToOperate;
  return resultPoint;
}

function euclideanDistance(firstpoint: point, secondPoint: point): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  const resultX: number = (firstpoint.x - secondPoint.x) * (firstpoint.x - secondPoint.x);
  // eslint-disable-next-line max-len
  const resultY: number = (firstpoint.y - secondPoint.y) * (firstpoint.y - secondPoint.y);
  result = Math.sqrt(resultX + resultY);
  return result;
}

const firstPointToIntroduce: point = {
  x: 0,
  y: 0,
};
const secondPointToIntroduce: point = {
  x: 1,
  y: 1,
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

