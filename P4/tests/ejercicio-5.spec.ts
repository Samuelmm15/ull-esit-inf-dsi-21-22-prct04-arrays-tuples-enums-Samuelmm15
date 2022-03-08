import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-5';

describe('meanAndConcatenate function tests', () => {
  // eslint-disable-next-line max-len
  it('meanAndConcatenate(["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0]) returns value 3.6,udiwstagwo', () => {
    // eslint-disable-next-line max-len
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.eqls([3.6, 'udiwstagwo']);
  });
});
