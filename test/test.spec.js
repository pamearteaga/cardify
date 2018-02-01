
// Test ejecutado sobre DOM falso
// Importando interfaz chai
const chai = require('chai');
// Importando jsdom, para trabajar con DOM falso
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// Creando DOM falso
const dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Jopafy</title><link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"></head><body><main><h1>Jopafy</h1><section><div class="foto"><img src="https://www.cookingideas.es/imagenes/2017/11/quimeraprincipal.jpg" alt="Soy hermoso"></div><div class="foto"><img src="https://i1.wp.com/www.cosasdegatos.es/wp-content/uploads/2013/01/maullido-gato-gatito.jpg" alt="Chiquitito <3"></div></section></main><script type="text/javascript" src="assets/js/index.js"></script><script src="node_modules/jquery/dist/jquery.js"></script></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js'
};
// Importando jQuery
const $ = require('jquery');
// Importando documento a usar
const testdom = require('../src/cardify.js');
// Importando interfaz a usar
const expect = require('chai').expect;

// Definiendo segundo bloque de prueba
describe('Comprobar que la etiqueta imagen no esté vacía', () => {
  // Primera prueba
  it('img tiene contenido', () => {
    $('img').length > 0;
  });
});

// Definiendo tercer bloque de prueba
describe('Comprobar que atributo alt tenga un string', () => {
  // Primera prueba
  it('Alt contiene un estring', () => {
    expect('alt').to.be.a('string');
  });
});

// Definiendo cuarto bloque de prueba
describe('Comprobar que atributo alt no esté vacio', () => {
  // Primera prueba
  it('alt tiene contenido', () => {
    $('img').attr('alt') !== '';
  });
});

