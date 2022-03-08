import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio-7';

describe('multiplyAll function tests', () => {
  it('multiplyAll([2, 6, 8])(3) returns value [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.eqls([6, 18, 24]);
  }),
  // eslint-disable-next-line max-len
  it('multiplyAll([2, 6, 8, 3, 7])(10) returns value [20, 60, 80, 30, 70]', () => {
    expect(multiplyAll([2, 6, 8, 3, 7])(10)).to.be.eqls([20, 60, 80, 30, 70]);
  });
});
