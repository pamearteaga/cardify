# CARDIFY

Cardify Jopafy es un Plugin para imágenes, podrás integrar en tu proyecto el efecto hover en las imágenes deseadas. Este efecto se produce a pasar el cursor sobre la imagen, se genera un degradé en colores y se muestra el contenido escrito en el atributo "alt". Ideal para complementar tus mejores proyectos.

## Ejemplo

![img](https://image.ibb.co/i4hsKG/Fire_Shot_Capture_23_Jopafy_file_C_Users_Toshiba_Desktop_L.png)

## ¿Cómo comenzar?

### Global (navegador)

- Incluya en su archivo html los siquientes scripts :
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

- Instalar con npm
```
npm install xxxxxx --save
```

## Uso

- Incluir en tu archivo JS el siquiente código.
```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```


## Requerimientos técnicos

#### Dependecias de Desarrollo:
 - jQuery v3.2.1
 - chai Mocha v3.0.0 y Chai 4.1.2
 - jsdom v11.6.1

#### Dependencias de producción:


