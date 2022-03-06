/* eslint-disable max-len */
type npoint = {
    x: number;
    y: number;
    z: number;
    oderCoodinates?: number[]; // Con la interrograación se establece que
    // es opcional
  }

function nPointsAdd(firstpoint: npoint, secondPoint: npoint): npoint {
  if (firstpoint.oderCoodinates?.length === secondPoint.oderCoodinates?.length) {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
      oderCoodinates: [],
    };
    let i: number = firstpoint.oderCoodinates?.length as number;
    while (i !== 0) {
      let auxiliaryNumber: number = 0;
      let result: number = 0;
      auxiliaryNumber = firstpoint.oderCoodinates?.pop() as number;
      result = result + auxiliaryNumber;
      auxiliaryNumber = secondPoint.oderCoodinates?.pop() as number;
      result = result + auxiliaryNumber;
      resultPoint.oderCoodinates?.push(result);
      i--;
    }
    resultPoint.x = firstpoint.x + secondPoint.x;
    resultPoint.y = firstpoint.x + secondPoint.y;
    resultPoint.z = firstpoint.z + secondPoint.z;
    resultPoint.oderCoodinates?.reverse();
    return resultPoint;
  } else {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    resultPoint.x = firstpoint.x + secondPoint.x;
    resultPoint.y = firstpoint.x + secondPoint.y;
    resultPoint.z = firstpoint.z + secondPoint.z;
    return resultPoint;
  }
}

function nPointsSubtract(firstpoint: npoint, secondPoint: npoint): npoint {
  if (firstpoint.oderCoodinates?.length === secondPoint.oderCoodinates?.length) {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
      oderCoodinates: [],
    };
    let i: number = firstpoint.oderCoodinates?.length as number;
    while (i !== 0) {
      let auxiliaryNumber: number = 0;
      let result: number = 0;
      auxiliaryNumber = firstpoint.oderCoodinates?.pop() as number;
      result = result - auxiliaryNumber;
      auxiliaryNumber = secondPoint.oderCoodinates?.pop() as number;
      result = result - auxiliaryNumber;
      resultPoint.oderCoodinates?.push(result);
      i--;
    }
    resultPoint.x = firstpoint.x - secondPoint.x;
    resultPoint.y = firstpoint.x - secondPoint.y;
    resultPoint.z = firstpoint.z - secondPoint.z;
    resultPoint.oderCoodinates?.reverse();
    return resultPoint;
  } else {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    resultPoint.x = firstpoint.x - secondPoint.x;
    resultPoint.y = firstpoint.x - secondPoint.y;
    resultPoint.z = firstpoint.z - secondPoint.z;
    return resultPoint;
  }
}

// eslint-disable-next-line max-len
function nProductOperation(pointToComprobe: npoint, numberToOperate: number): npoint {
  if (pointToComprobe.oderCoodinates?.length !== 0) {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
      oderCoodinates: [],
    };
    let i: number = pointToComprobe.oderCoodinates?.length as number;
    while (i !== 0) {
      let auxiliaryNumber: number = 0;
      let result: number = 0;
      auxiliaryNumber = pointToComprobe.oderCoodinates?.pop() as number;
      result = result * numberToOperate;
      // eslint-disable-next-line no-unused-vars
      auxiliaryNumber = pointToComprobe.oderCoodinates?.pop() as number;
      result = result * numberToOperate;
      resultPoint.oderCoodinates?.push(result);
      i--;
    }
    resultPoint.x = pointToComprobe.x * numberToOperate;
    resultPoint.y = pointToComprobe.x * numberToOperate;
    resultPoint.z = pointToComprobe.z * numberToOperate;
    resultPoint.oderCoodinates?.reverse();
    return resultPoint;
  } else {
    const resultPoint: npoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    resultPoint.x = pointToComprobe.x * numberToOperate;
    resultPoint.y = pointToComprobe.y * numberToOperate;
    resultPoint.z = pointToComprobe.z * numberToOperate;
    return resultPoint;
  }
}

function nEuclideanDistance(firstpoint: npoint, secondPoint: npoint): number {
  let result: number = 0;
  // eslint-disable-next-line max-len
  const resultX: number = (firstpoint.x - secondPoint.x) * (firstpoint.x - secondPoint.x);
  // eslint-disable-next-line max-len
  const resultY: number = (firstpoint.y - secondPoint.y) * (firstpoint.y - secondPoint.y);
  // eslint-disable-next-line max-len
  const resultz: number = (firstpoint.z - secondPoint.z) * (firstpoint.z - secondPoint.z);
  result = Math.sqrt(resultX + resultY + resultz);
  return result;
}

const firstNpointToIntroduce: npoint = {
  x: 0,
  y: 0,
  z: 0,
  oderCoodinates: [],
};
const secondNpointToIntroduce: npoint = {
  x: 1,
  y: 1,
  z: 1,
  oderCoodinates: [1, 3],
};
  // eslint-disable-next-line max-len
let resultNpointsOperations: npoint = nPointsAdd(firstNpointToIntroduce, secondNpointToIntroduce);
// eslint-disable-next-line max-len
if ((firstNpointToIntroduce.oderCoodinates?.length === 0) && (secondNpointToIntroduce.oderCoodinates?.length === 0)) {
  console.log(`EL resultado de la suma de los puntos introducidos es (${resultNpointsOperations.x},${resultNpointsOperations.y},${resultNpointsOperations.z},${resultNpointsOperations.oderCoodinates})`);
} else {
  console.log(`EL resultado de la suma de los puntos introducidos es (${resultNpointsOperations.x},${resultNpointsOperations.y},${resultNpointsOperations.z})`);
}

firstNpointToIntroduce.oderCoodinates = [];
secondNpointToIntroduce.oderCoodinates = [1, 3];
resultNpointsOperations = nPointsSubtract(firstNpointToIntroduce, secondNpointToIntroduce);
if ((firstNpointToIntroduce.oderCoodinates?.length === 0) && (secondNpointToIntroduce.oderCoodinates?.length === 0)) {
  console.log(`EL resultado de la resta de los puntos introducidos es (${resultNpointsOperations.x},${resultNpointsOperations.y},${resultNpointsOperations.z},${resultNpointsOperations.oderCoodinates})`);
} else {
  console.log(`EL resultado de la resta de los puntos introducidos es (${resultNpointsOperations.x}, ${resultNpointsOperations.y}, ${resultNpointsOperations.z})`);
}

firstNpointToIntroduce.oderCoodinates = [];
secondNpointToIntroduce.oderCoodinates = [1, 3];
resultNpointsOperations = nProductOperation(secondNpointToIntroduce, 3);
if ((firstNpointToIntroduce.oderCoodinates?.length !== 0) || (secondNpointToIntroduce.oderCoodinates?.length !== 0)) {
  console.log(`EL resultado del producto con el punto introducido es (${resultNpointsOperations.x},${resultNpointsOperations.y},${resultNpointsOperations.z},${resultNpointsOperations.oderCoodinates})`);
} else {
  console.log(`EL resultado del producto con el punto introducido es (${resultNpointsOperations.x}, ${resultNpointsOperations.y}, ${resultNpointsOperations.z})`);
}

firstNpointToIntroduce.oderCoodinates = [1, 3];
secondNpointToIntroduce.oderCoodinates = [1, 3];
const resultNeuclideanDistance = nEuclideanDistance(firstNpointToIntroduce, secondNpointToIntroduce);
// eslint-disable-next-line max-len
console.log(`La distancia euclídea para los puntos introducidos es: ${resultNeuclideanDistance}`);

