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
  it('nPointsSubtract() returns value ', () => {
    // expect(nPointsSubtract()).to.be.eq();
  });
});

describe('nProductOperation function tests', () => {
  it('nProductOperation() returns value ', () => {
    // expect(nProductOperation()).to.be.eq();
  });
});

describe('nEuclideanDistance function tests', () => {
  it('nEuclideanDistance() returns value ', () => {
    // expect(nEuclideanDistance()).to.be.eq();
  });
});
