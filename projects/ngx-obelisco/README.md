# NgxObelisco

[![Versión de Obelisco en npm](https://img.shields.io/npm/v/ngx-obelisco-example?label=NgxObelisco%20en%20npm&logo=npm)](https://www.npmjs.com/package/ngx-obelisco-example)
![Deploy](https://github.com/gcba/ngx-obelisco/workflows/Build%20and%20Deploy/badge.svg?branch=main)

NgxObelisco es una libreria de Angular basado en el sistema de diseño Obelisco y en componentes para los productos digitales de la ciudad de Buenos Aires.

### [Ver la documentación de componentes del Sistema de Diseño Obelisco](https://gcba.github.io/estandares/componentes/)

## Cómo usarlo

NgxObelisco se distribuye por medio del [paquete publicado en npm](https://www.npmjs.com/package/ngx-obelisco-example).
Es recomendable usar este sistema para definir la versión a usar y poder actualizarla fácilmente.

### Instalación

Para instalarlo en un proyecto que ya usa npm, hay que ejecutar:

```js
npm install ngx-obelisco-example
```

### Requerimientos

**Node.js**: Se recomienda utilizar la versión ^14.15.0 || ^16.10.0 Puedes verificar tu versión actual ejecutando `node -v` en tu terminal.

**Angular**: Este proyecto requiere Angular 14. Asegúrate de tener Angular 14.X.X instaladoglobalmente o especificado en tu proyecto.

> **Importante** <br>
> Revisá las [versiones y herramientas aceptadas](https://asijira-confluence.buenosaires.gob.ar/display/ASI/Versiones++y+Herramientas+aceptadas+por+la+ASI) por la **Agencia de Seguridad Informática (ASI)** del Gobierno de la Ciudad antes de elegir una versión de estas dependencias.

## Iconografía

### Boxicons

Obelisco utiliza la librería de Boxicons que se puede instalar de las siguientes maneras:

Utilizando el paquete npm:

```js
npm install boxicons
```

Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
```

Importando en el archivo angular.json de la siguiente manera:

```json
"styles": [
  "src/styles.scss",
  "node_modules/boxicons/css/boxicons.min.css"
],
```

### Material Icons Rounded

Obelisco utiliza la librería de Material Icons Rounded que se puede instalar de las siguientes maneras:

Utilizando el paquete npm:

```js
npm install material-icons@latest
```

Para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
```

## Tipografías

Obelisco requiere las tipografías **Nunito** y **Open sans** disponibles en google fonts, para utilizarlas con su CDN podemos hacerlo de la siguiente forma:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
  rel="stylesheet"
/>

<link href="https://fonts.googleapis.com/css2?      family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
```

## Javascript

Como NgxObelisco está construido sobre Obelisco y Bootstrap 4, [debemos tener esas dependencias](https://getbootstrap.com/docs/4.6/getting-started/introduction/#js).

Un ejemplo de cómo importalas en index.html es:

```html
<script
  src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
  integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
  crossorigin="anonymous"
></script>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
  crossorigin="anonymous"
></script>
```

## Mantenimiento y colaboración

El mantenimiento y desarrollo de Obelisco lo hace el equipo de la Dirección General de Canales Digitales, pero lo utilizan tanto equipos de gobierno como proveedores externos.

Para agilizar y hacer más transparente el proceso, cualquier persona puede [contribuir de varias formas](CONTRIBUTING.md).
