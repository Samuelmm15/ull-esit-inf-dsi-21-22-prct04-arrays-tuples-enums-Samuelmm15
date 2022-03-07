import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges} from '../src/ejercicio-2';

describe('fromArrayToRanges function tests', () => {
  it('fromArrayToRanges([3,5,6,7,9,10]) returns value 3,5_7,9_10', () => {
    expect(fromArrayToRanges([3, 5, 6, 7, 9, 10])).to.equal('3,5_7,9_10');
  }),
  // eslint-disable-next-line max-len
  it('fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) returns value -3_-1, 3, 5_7', () => {
    // eslint-disable-next-line max-len
    expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.equal('-3_-1,3,5_7');
  }),
  it('fromArrayToRanges([17]) returns value 17', () => {
    expect(fromArrayToRanges([17])).to.equal('17');
  });
});

import {fromRangesToArray} from '../src/ejercicio-2';

describe('fromRangesToArray function tests', () => {
  // eslint-disable-next-line max-len
  it('fromRangesToArray(5_7, 9, 12_14) returns value [5, 6, 7, 9, 12, 13, 14]', () => {
    // eslint-disable-next-line max-len
    expect(fromRangesToArray('5_7,9,12_14')).to.be.eqls([5, 6, 7, 9, 12, 13, 14]);
  });
});
