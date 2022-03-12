import 'mocha';
import {expect} from 'chai';
import {pointsAdd} from '../src/ejercicio-8';
import {pointsSubtract} from '../src/ejercicio-8';
import {productOperation} from '../src/ejercicio-8';
import {euclideanDistance} from '../src/ejercicio-8';
import {firstPointToIntroduce} from '../src/ejercicio-8';
import {secondPointToIntroduce} from '../src/ejercicio-8';

describe('pointsAdd function tests', () => {
  // eslint-disable-next-line max-len
  it('pointsAdd(firstPointToIntroduce, secondPointToIntroduce) returns value {x: 8, y: 8}', () => {
    // eslint-disable-next-line max-len
    expect(pointsAdd(firstPointToIntroduce, secondPointToIntroduce)).to.be.eqls({x: 8, y: 8});
  });
});

describe('pointsSubtract function tests', () => {
  // eslint-disable-next-line max-len
  it('pointsSubtract(firstPointToIntroduce, secondPointToIntroduce) returns value {x: 2, y: 4}', () => {
    // eslint-disable-next-line max-len
    expect(pointsSubtract(firstPointToIntroduce, secondPointToIntroduce)).to.be.eqls({x: 2, y: 4});
  });
});

describe('productOperation function tests', () => {
  it('productOperation(secondPointToIntroduce, 3) returns value ', () => {
    // eslint-disable-next-line max-len
    expect(productOperation(secondPointToIntroduce, 3)).to.be.eqls({x: 9, y: 6});
  });
});

describe('euclideanDistance function tests', () => {
  // eslint-disable-next-line max-len
  it('euclideanDistance(firstPointToIntroduce, secondPointToIntroduce) returns value 4.47213595499958', () => {
    // eslint-disable-next-line max-len
    expect(euclideanDistance(firstPointToIntroduce, secondPointToIntroduce)).to.be.equal(4.47213595499958);
  });
});
