import { ImageMediaSizes } from '@gcba/ngx-obelisco/core/models';

export const PANEL_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/panel/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/panel/examples'
  }
];

export const PANEL_IMAGE = {
  src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
  alt: 'descripción de imagen'
};

export const PANEL_IMAGE_LARGE = {
  src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
  alt: 'descripción de imagen',
  size: 'lg' as ImageMediaSizes
};

export const PANEL_SMALL_DATA_SOURCE = [
  {
    name: '@Input() <br/> title: string',
    description: 'Propiedad de entrada para el título del panel pequeño.'
  },
  {
    name: '@Input() <br/> description: string',
    description: 'Propiedad de entrada para la descripción del panel pequeño.'
  },
  {
    name: '@Input() <br/> image: Media',
    description: 'Define la imagen principal del destacado.'
  },
  {
    name: '@Input() <br/> isBgWhite: boolean',
    description: 'Propiedad de entrada para indicar si el fondo del panel pequeño es blanco.'
  },
  {
    name: '@Input() <br/> isBgLight: boolean',
    description: 'Propiedad de entrada para indicar si el fondo del panel pequeño es claro.'
  },
  {
    name: '@Input() <br/> isVertical: boolean',
    description: 'Propiedad de entrada para indicar si el panel pequeño es vertical. Por defecto es horizontal'
  },
  {
    name: '@Input() <br/> isItemsListVertical: boolean',
    description:
      'Propiedad de entrada para indicar si la lista de elementos del panel pequeño es vertical. Por defecto es horizontal'
  }
];

export const PANEL_SMALL_HORIZONTAL = `
  <o-panel-small
    [title]="title"
    [description]="description"
    [image]="image">
  </o-panel-small>
`;
export const PANEL_SMALL_LARGE_IMAGE_TS = `
  import { Component } from '@angular/core';
  import { ImageMediaSizes } from '@gcba/ngx-obelisco/core/models';
  
  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public title: string = 'Nombre del titular';

    public description: string = 'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';

    public image: Media = {
      src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
      alt: 'descripción de imagen',
      size: 'lg' as ImageMediaSizes
    };
  }
`;
export const PANEL_SMALL_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public title: string = 'Nombre del titular';

    public description: string = 'Descripción de hasta 3 líneas para mantener los estándares de lectura en los componentes de Obelisco.';

    public image: Media = {
      src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
      alt: 'descripción de imagen'
    };
  }
`;

export const PANEL_SMALL_VERTICAL = `
  <o-panel-small
    [title]="title"
    [description]="description"
    [image]="image"
    [isVertical]="true">
  </o-panel-small>
`;

export const PANEL_SMALL_WITH_BG = `
  <o-panel-small
    [title]="title"
    [description]="description"
    [image]="image"
    [isVertical]="true"
    [isBgWhite]="true">
  </o-panel-small>

  <o-panel-small
    [title]="title"
    [description]="description"
    [image]="image"
    [isVertical]="true"
    [isBgLight]="true">
  </o-panel-small>
`;

export const PANEL_SMALL_ITEMS_VERTICAL = `
  <o-panel-small
    [title]="title"
    [description]="description"
    [image]="image"
    [isVertical]="true"
    [isItemsListVertical]="true">
    <ng-container listLinkContent>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
      <h4 class="list-link-item-title">Nombre del archivo</h4>
      <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>
    </ng-container>
  </o-panel-small>
`;

export const PANEL_SMALL_ITEMS_HORIZONTAL = `
  <o-panel-small
    [title]="title"
    [description]="description"
    [image]="image"
    [isVertical]="true">
    <ng-container panelFooterContent>
      <button type="button" class="btn btn-secondary btn-sm card-link">Acción 1</button>
      <button type="button" class="btn btn-link btn-sm card-link">Acción 2</button>
    </ng-container>
  </o-panel-small>
`;
