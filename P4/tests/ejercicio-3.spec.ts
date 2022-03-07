import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-3';

describe('decodeResistor fuction tests', () => {
  it('decodeResistor("Negro", "Azul") returns value 6', () => {
    expect(decodeResistor(`Negro`, `Azul`)).to.be.equal(6);
  }),
  it('decodeResistor("Negro", "Azul", "Violeta") returns value 6', () => {
    expect(decodeResistor(`Negro`, `Azul`, `Violeta`)).to.be.equal(6);
  }),
  it('decodeResistor("Blanco", "Gris", "Violeta") returns value 17', () => {
    expect(decodeResistor(`Blanco`, `Gris`, `Violeta`)).to.be.equal(98);
  });
});
