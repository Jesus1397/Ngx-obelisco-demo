import { DataSource } from 'ngx-obelisco-example/core/models';

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
export const BANNER_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isDark: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el color de fondo del banner. Por defecto es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> content: string', customClasses: '' },
    description: { data: 'Se utiliza para establecer el contenido del banner.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> icon: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el ícono del banner. Se debe utilizar íconos de boxicons o material icons round.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
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
    <o-button #children size="sm" type="secondary" link="#"></o-button>
  </o-banner>

  <o-banner [content]="content" [isDark]="true" [icon]="icon">
    <o-button #children size="sm" type="secondary" link="#"></o-button>
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
    <o-button #children size="sm" type="secondary" link="#"></o-button>
    <o-button #children size="sm" link="#"></o-button>
  </o-banner>

  <o-banner [content]="content" [icon]="iconCookie" [isDark]="true">
    <o-button #children size="sm" type="secondary" link="#"></o-button>
    <o-button #children size="sm" link="#"></o-button>
  </o-banner>
`;
