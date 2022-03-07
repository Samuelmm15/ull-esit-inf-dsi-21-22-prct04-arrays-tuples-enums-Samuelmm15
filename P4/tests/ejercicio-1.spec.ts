import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejercicio-1';

describe('productTable function tests', () => {
  it('productTable(3) returns value 1,2,3,2,4,6,3,6,9', () => {
    expect(productTable(3)).to.be.eqls([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  }),
  // eslint-disable-next-line max-len
  it('productTable(4) returns value 1,2,3,4,2,4,6,8,3,6,9,12,4,8,12,16', () => {
    // eslint-disable-next-line max-len
    expect(productTable(4)).to.be.eqls([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  }),
  it('productTable(1) returns value 1', () => {
    expect(productTable(1)).to.be.eqls([[1]]);
  });
});
