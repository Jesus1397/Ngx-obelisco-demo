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

export const PANEL_DATA_SOURCE = [
  {
    name: '@Input() <br/> title: string',
    description: 'Propiedad de entrada para el título del panel.'
  },
  {
    name: '@Input() <br/> description: string',
    description: 'Propiedad de entrada para la descripción del panel.'
  },
  {
    name: '@Input() <br/> imageURL: string',
    description: 'Propiedad de entrada para la URL de la imagen del panel.'
  },
  {
    name: '@Input() <br/> imageAlt: string',
    description: 'Propiedad de entrada para el texto alternativo de la imagen del panel.'
  },
  {
    name: '@Input() <br/> videoURL: string',
    description: 'Propiedad de entrada para la URL del video del panel.'
  },
  {
    name: '@Input() <br/> isVertical: boolean',
    description: 'Propiedad de entrada para indicar si el panel es vertical. Por defecto es horizontal'
  },
  {
    name: '@Input() <br/> isBgWhite: boolean',
    description: 'Propiedad de entrada para indicar si el fondo del panel es blanco.'
  },
  {
    name: '@Input() <br/> isBgLight: boolean',
    description: 'Propiedad de entrada para indicar si el fondo del panel es claro.'
  }
];

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
    name: '@Input() <br/> imageURL: string',
    description: 'Propiedad de entrada para la URL de la imagen del panel pequeño.'
  },
  {
    name: '@Input() <br/> imageAlt: string',
    description: 'Propiedad de entrada para el texto alternativo de la imagen del panel pequeño.'
  },
  {
    name: '@Input() <br/> imageLg: boolean',
    description: 'Propiedad de entrada para indicar si la imagen del panel pequeño es grande.'
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

export const PANEL_WITHOUT_BG = `
  <o-panel
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/panel/larreta.jpg"
  >
    <button type="button" class="btn btn-lg btn-primary"> Botón </button>
    <button type="button" class="btn btn-lg btn-secondary"> Botón </button>
  </o-panel>
`;

export const PANEL_WITH_BG = `
  <o-panel
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/panel/larreta.jpg"
    [isBgWhite]="true"
  >
    <a class="btn btn-secondary btn-lg download-link" href="#" download=""> Descargar </a>
  </o-panel>

  <o-panel
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/panel/larreta.jpg"
    [isBgLight]="true"
  >
    <a class="btn btn-secondary btn-lg download-link" href="#" download=""> Descargar </a>
  </o-panel>
`;

export const PANEL_WITH_VIDEO = `
  <o-panel
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    videoURL="https://gcba.github.io/Obelisco/panel/larreta.mp4"
  >
    <a href="#" target="_blank" rel="noreferrer"> Enlace </a>
  </o-panel>
`;

export const PANEL_VERTICAL = `
  <o-panel
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/panel/larreta.jpg"
    [isVertical]="true"
  >
    <button type="button" class="btn btn-lg btn-primary"> Botón </button>
  </o-panel>
`;

export const PANEL_SMALL_HORIZONTAL = `
  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
  >
  </o-panel-small>
`;

export const PANEL_SMALL_VERTICAL = `
  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isVertical]="true"
  >
  </o-panel-small>
`;

export const PANEL_SMALL_LARGE = `
  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isVertical]="true"
    [imageLg]="true"
  >
  </o-panel-small>
`;

export const PANEL_SMALL_WITH_BG = `
  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isVertical]="true"
    [isBgWhite]="true"
  >
  </o-panel-small>

  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isVertical]="true"
    [isBgLight]="true"
  >
  </o-panel-small>
`;

export const PANEL_SMALL_ITEMS_VERTICAL = `
  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isVertical]="true"
    [isItemsListVertical]="true"
  >
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

export const PANEL_SMALL_ITEMS_HORIZANTAL = `
  <o-panel-small
    title="Nombre del titular"
    description="Descripción de hasta 3 líneas para mantener
      los estándares de lectura en los componentes de Obelisco."
    imageURL="https://gcba.github.io/Obelisco/cards/paseobajo-wide.png"
    [isVertical]="true"
  >
    <ng-container panelFooterContent>
      <button type="button" class="btn btn-secondary btn-sm card-link">Acción 1</button>
      <button type="button" class="btn btn-link btn-sm card-link">Acción 2</button>
    </ng-container>
  </o-panel-small>
`;
