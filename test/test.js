// traer el codigo que se testeara
const app = require('../assets/js/index.js'); 
const assert = require('chai').assert;
/*const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};*/
describe('isVowel()', () => {
  it('debería devolver true para letra a', () => {
    assert.equal(app.isVowel('a'),true);
  });
  it('debería devolver false para letra b', () =>{
    assert.equal(app.isVowel('b'),false);
  });
  it('debería lanzar excepción con dos chars', () =>{
    assert.equal(app.isVowel('ab'), false);
  });
});