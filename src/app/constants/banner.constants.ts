export const BANNER_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/banner/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/banner/examples'
  }
];

/* BANNER-API */
export const BANNER_DATA_SOURCE = [
  {
    name: '@Input() <br/> isDark: boolean',
    description: 'Se utiliza para establecer el color de fondo del banner. Por defecto es false.'
  },
  {
    name: '@Input() <br/> content: string',
    description: 'Se utiliza para establecer el contenido del banner.'
  },
  {
    name: '@Input() <br/> icon: string',
    description:
      'Se utiliza para definir el ícono del banner. Se debe utilizar íconos de boxicons o material icons round.'
  }
];

/* BANNER-EXAMPLES */
export const BANNER_CONTENT =
  'Esta descripción de banner <strong>puede tener énfasis</strong> y <a href="#" target="_blank" rel="noreferrer">enlace</a>.';

export const BANNER_TYPES_HTML = `
  <o-banner [content]="content"></o-banner>

  <o-banner [content]="content" [isDark]="true"></o-banner>
`;

export const BANNER_TYPES_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })

  export class ExampleComponent {
    public content = 'Esta descripción de banner <strong>puede tener énfasis</strong> y
    <a href="#" target="_blank" rel="noreferrer">enlace</a>.';
  }`;

export const BANNER_TEXT_BUTTON =
  'Este banner tiene un solo botón y <strong>puede tener énfasis</strong>. Se truncan los textos que superen más de una línea de texto.';

export const BANNER_ICON = 'departure_board';

export const BANNER_ICON_COOKIE = 'cookie';

export const BANNER_BUTTON_HTML = `
  <o-banner [content]="content" [icon]="icon">
    <o-button #child size="sm" type="secondary" link="#"></o-button>
  </o-banner>

  <o-banner [content]="content" [isDark]="true" [icon]="icon">
    <o-button #child size="sm" type="secondary" link="#"></o-button>
  </o-banner>
`;

export const BANNER_BUTTON_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })

  export class ExampleComponent {
    public content = 'Este banner tiene un solo botón y <strong>puede tener énfasis</strong>. Se truncan los textos que superen más de una línea de texto.';
  }`;

export const BANNER_BUTTONS_HTML = `
  <o-banner [content]="content" [icon]="iconCookie">
    <o-button #child size="sm" type="secondary" link="#"></o-button>
    <o-button #child size="sm" link="#"></o-button>
  </o-banner>

  <o-banner [content]="content" [icon]="iconCookie" [isDark]="true">
    <o-button #child size="sm" type="secondary" link="#"></o-button>
    <o-button #child size="sm" link="#"></o-button>
  </o-banner>
`;
