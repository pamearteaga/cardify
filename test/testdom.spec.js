
// test
const cahi = require('chai');
const json = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Jopafy</title></head><body><main><h1>Jopafy</h1><hr><section><div class="foto"><img src="https://www.cookingideas.es/imagenes/2017/11/quimeraprincipal.jpg" alt="Soy hermoso"></div><div class="foto"><img src="https://i1.wp.com/www.cosasdegatos.es/wp-content/uploads/2013/01/maullido-gato-gatito.jpg" alt="Chiquitito <3"></div><div class="foto"><img src="https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/137/77/sb10069719f-001_XS.jpg" alt="Soy un faraón!!"></div></section><section><div class="foto"><img src="http://gosbi.com/wp-content/themes/gosbi/img/gato-gosbi.png" alt="Inspiración artística"></div><div class="foto"><img src="assets/img/6.jpg" alt="Happy Cat"></div><div class="foto"><img src="http://www.curiosfera.com/wp-content/uploads/2017/05/por-qu%C3%A9-no-come-mi-gato.jpg" alt="Aliméntame humano estúpido"></div></section></main></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

var $ = require('jquery');
const RUTDom = require('../test/testdom.js');
var expect = require('chai').expect;

describe('Comprobar si es un archivo de imagen', () => {

});

describe('Comprobar que la etiqueta alt tenga un contenido', () => {

});

/*
// test
objCalculator = {
  addNumber: function(a, b){
    return a + b;
  },
  substractNumber: function(a, b){
    return a - b;
  },
  multiplyNumber: function(a, b){
    return a * b;
  },
  divideNumber: function(a, b){
    return a / b;
  }
}
// Estamos validando si nos encontramos en un ambiente de node
// El "module" solo existe en node asi que para constatar que estamos en un ambiente node verificamos que la variable no sea indefinida.
// Si estamos en un ambiente Node importamos el código para poder usarlo en nuestras pruebas
if ( typeof module != 'undefined' && module.exports ) {
  module.exports = objCalculator;
}
*/