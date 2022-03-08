/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-4';

describe('meshArray function tests', () => {
  it('meshArray([`kingdom`, `dominator`, `notorious`, `usual`, `allegory`]) returns value "Error al encadenar"', () => {
    expect(meshArray([`kingdom`, `dominator`, `notorious`, `usual`, `allegory`])).to.equal('1');
  }),
  it('meshArray([`allow`, `lowering`, `ringmaster`, `terror`]) returns value "lowringter"', () => {
    expect(meshArray([`allow`, `lowering`, `ringmaster`, `terror`])).to.equal('lowringter');
  }),
  it('meshArray([`apply`, `plywood`, `apple`, `each`]) returns value "Error al encadenar"', () => {
    expect(meshArray([`apply`, `plywood`, `apple`, `each`])).to.equal('1');
  }),
  it('meshArray([`apply`, `plywood`, `wood`, `day`]) returns value "plywoodd"', () => {
    expect(meshArray([`apply`, `plywood`, `wood`, `day`])).to.equal('plywoodd');
  });
});
