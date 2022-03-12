import 'mocha';
import {expect} from 'chai';
import {nPointsAdd} from '../src/ejercicio-9';
import {nPointsSubtract} from '../src/ejercicio-9';
import {nProductOperation} from '../src/ejercicio-9';
import {nEuclideanDistance} from '../src/ejercicio-9';
import {firstNpointToIntroduce} from '../src/ejercicio-9';
import {secondNpointToIntroduce} from '../src/ejercicio-9';

describe('nPointsAdd function tests', () => {
  // eslint-disable-next-line max-len
  it('nPointsAdd(firstNpointToIntroduce, secondNpointToIntroduce) returns value {x: 8, y: 6, z: 5, oderCoodinates: [3, 7]}', () => {
    // eslint-disable-next-line max-len
    expect(nPointsAdd(firstNpointToIntroduce, secondNpointToIntroduce)).to.be.eqls({x: 8, y: 6, z: 5, oderCoodinates: []});
  });
});

describe('nPointsSubtract function tests', () => {
  // eslint-disable-next-line max-len
  it('nPointsSubtract(firstNpointToIntroduce, secondNpointToIntroduce) returns value {x: -6, y: -2, z: 1, oderCoodinates: []}', () => {
    // eslint-disable-next-line max-len
    expect(nPointsSubtract(firstNpointToIntroduce, secondNpointToIntroduce)).to.be.eqls({x: -6, y: -2, z: 1, oderCoodinates: []});
  });
});

describe('nProductOperation function tests', () => {
  // eslint-disable-next-line max-len
  it('nProductOperation(secondNpointToIntroduce, 3) returns value {x: 21, y: 12, z: 6, oderCoodinates: []}', () => {
    // eslint-disable-next-line max-len
    expect(nProductOperation(secondNpointToIntroduce, 3)).to.be.eqls({x: 21, y: 12, z: 6});
  });
});

describe('nEuclideanDistance function tests', () => {
  // eslint-disable-next-line max-len
  it('nEuclideanDistance(firstNpointToIntroduce, secondNpointToIntroduce) returns value 6.4031242374328485', () => {
    // eslint-disable-next-line max-len
    expect(nEuclideanDistance(firstNpointToIntroduce, secondNpointToIntroduce)).to.be.equal(6.4031242374328485);
  });
});
