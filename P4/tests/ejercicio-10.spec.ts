import 'mocha';
import {expect} from 'chai';
import {theCartesianWalk} from '../src/ejercicio-10';

describe('theCartesianWalk function tests', () => {
  it('theCartesianWalk([`n`, `s`, `e`, `o`]) returns value true', () => {
    expect(theCartesianWalk([`n`, `s`, `e`, `o`])).to.be.true;
  }),
  // eslint-disable-next-line max-len
  it('theCartesianWalk([`n`, `s`, `e`, `o`, `n`, `s`, `e`, `o`, `n`, `s`, `e`, `o`]) returns value false', () => {
    // eslint-disable-next-line max-len
    expect(theCartesianWalk([`n`, `s`, `e`, `o`, `n`, `s`, `e`, `o`, `n`, `s`, `e`, `o`])).to.be.false;
  }),
  it('theCartesianWalk([`n`, `s`, `e`, `o`, `n`]) returns value false', () => {
    // eslint-disable-next-line max-len
    expect(theCartesianWalk([`n`, `s`, `e`, `o`, `n`])).to.be.false;
  });
});
