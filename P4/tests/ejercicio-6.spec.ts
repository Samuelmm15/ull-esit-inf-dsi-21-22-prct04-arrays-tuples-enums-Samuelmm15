import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio-6';

describe('moveZeros function tests', () => {
  // eslint-disable-next-line max-len
  it('moveZeros([1, 0, 1, 2, 0, 1, 3]) returns value [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.eqls([1, 1, 2, 1, 3, 0, 0]);
  }),
  // eslint-disable-next-line max-len
  it('moveZeros([2, 3, 14, 0, 0, 1, 3]) returns value [2, 3, 14, 1, 3, 0, 0]', () => {
    // eslint-disable-next-line max-len
    expect(moveZeros([2, 3, 14, 0, 0, 1, 3])).to.be.eqls([2, 3, 14, 1, 3, 0, 0]);
  }),
  // eslint-disable-next-line max-len
  it('moveZeros([0, 14, 3, 0, 0, 1, 3]) returns value [14, 3, 1, 3, 0, 0, 0]', () => {
    // eslint-disable-next-line max-len
    expect(moveZeros([0, 14, 3, 0, 0, 1, 3])).to.be.eqls([14, 3, 1, 3, 0, 0, 0]);
  });
});
