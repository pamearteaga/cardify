/*
// Test ejecutado sobre mi función en index.js.
// Importando interfaz chai.
const assert = require('chai').assert;
// Importando documento sobre el que trabajaremos.
const plugin = require('../assets/js/index');

// Definiendo primer bloque de prueba.
describe('Envuelve en la etiqueta figure cada imagen', () => {
  // Primera prueba
  it('Si la envuelve debe retornar true', () => {
    // código test...
  });
  it('Si no la envuelve debe retornar false', () => {
    // código test...
  });
});
*/

/*
// Test ejecutado sobre DOM falso
// Importando interfaz chai
const chai = require('chai');
// Importando jsdom, para trabajar con DOM falso
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// Creando DOM falso
const dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Jopafy</title><link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"><style type="text/css">h1{font-family: 'Pacifico', cursive; font-weight: bold; font-size: 55px; margin-top: 1%;margin-bottom: 0; color: #666;} hr{width: 160px; height: 3px; display: inline-block; border-style: none; background: linear-gradient(to left, rgb(52,247,143), rgb(245,95,240));} main{width: 90%; height: auto; padding: 2% 5%;}img{ width: 100%; height: auto;}section{margin-top: 30px;column-count: 3;column-gap: 2.5em;display: inline-block;}.foto{display: inline-block;margin: 2em 0 1em 0;width: 100%;}</style></head><body><main><h1>Jopafy</h1><hr><section><div class="foto"><img src="https://www.cookingideas.es/imagenes/2017/11/quimeraprincipal.jpg" alt="Soy hermoso"></div><div class="foto"><img src="https://i1.wp.com/www.cosasdegatos.es/wp-content/uploads/2013/01/maullido-gato-gatito.jpg" alt="Chiquitito <3"></div><div class="foto"><img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-03/3/16/enhanced/webdr10/enhanced-19898-1425418851-9.jpg?downsize=715:*&output-format=auto&output-quality=auto" alt="Tengo frio!"></div><div class="foto"><img src="https://i.pinimg.com/736x/57/55/7f/57557f857ff14a2cbfa20f551e8c37a3--baby-kittens-adorable-kittens.jpg" alt="Totalmente fotogénico"></div><div class="foto"><img src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" alt="Khe?"></div><div class="foto"><img src="https://cdn.theatlantic.com/assets/media/img/mt/2017/08/GettyImages_161785570/lead_960.jpg?1502385684" alt="Estoy pashonshito"></div><div class="foto"><img src="http://www.curiosfera.com/wp-content/uploads/2017/05/por-qu%C3%A9-no-come-mi-gato.jpg" alt="Aliméntame humano estúpido"></div><div class="foto"><img src="http://gosbi.com/wp-content/themes/gosbi/img/gato-gosbi.png" alt="Inspiración artística"></div><div class="foto"><img src="https://cdn.shopify.com/s/files/1/0344/6469/files/cloud_large.jpg?v=1487967305" alt="Zzzzzzzzzzz"></div></section></main><script type="text/javascript" src="assets/js/index.js"></script><script src="node_modules/jquery/dist/jquery.js"></script></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};
// Importando jQuery
const $ = require('jquery');
// Importando documento a usar
const testdom = require('../test/testdom.js');
// Importando interfaz a usar
const { assert } = require('chai');


// Definiendo primer bloque de prueba
describe('Comprobar si hay etiquetas imagen', () => {
  // Primera prueba
  it('Devuelve true si encuentra etiquetas imagen', () => {
    assert.equal('<img>', true);
  });
  // Segunda prueba
  it('Devuelve false si no encuentra etiquetas imagen', () => {
    assert.equal('<img>', true);
  });
});

describe('Comprobar que la etiqueta alt tenga contenido', () => {
  // Primera prueba
  it('Devuelve true si la etiqueta alt tiene contenido', () => {
    // Código test ...
  });
  // Segunda prueba
  it('Devuelve false si la etiqueta alt no tiene contenido', () => {
    // Código test ...
  });
});
*/

/*
//Test prueba
var calculator = require('../test/testdom.js')
var assert = require("assert")
describe('Calculadora', function() {
  it('should add two numbers', function () {
    assert.equal(5, calculator.addNumber(2, 3));
    assert.equal(9, calculator.addNumber(3, 6));
  });

  it('should substract two numbers', function () {
    assert.equal(5, calculator.substractNumber(8, 3));
    assert.equal(3, calculator.substractNumber(9, 6));
  });

  it('should multiply two numbers', function () {
    assert.equal(9, calculator.multiplyNumber(3, 3));
    assert.equal(10, calculator.multiplyNumber(2, 5));
  });

  it('should divide two numbers', function () {
    assert.equal(2, calculator.divideNumber(6, 3));
    assert.equal(1, calculator.divideNumber(9, 9));
  });
});
*/