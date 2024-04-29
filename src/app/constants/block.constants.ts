import { DataSource } from 'ngx-obelisco-example/core/models';

export const BLOCK_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/block/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/block/examples'
  }
];

//BLOCK EXAMPLES
export const BLOCK_EXAMPLE_TITLE = `
  <o-block title="Iniciá el trámite y completá todos los pasos">
    <o-button button text="Iniciar trámite" size="lg" [isExpandable]="true" link="#"></o-button>
  </o-block>
`;

export const BLOCK_EXAMPLE_DESCRIPTION = `
  <o-block
    title="Iniciá el trámite y completá todos los pasos"
    description="Si tenés un trámite iniciado podés continuarlo desde acá."
  >
    <o-button button text="Iniciar trámite" size="lg" [isExpandable]="true" link="#"></o-button>
  </o-block>
`;

export const BLOCK_EXAMPLE_PROGRESS_BAR = `
  <o-block title="Este es tu progreso en el trámite">
    <o-progress-bar progressBar type="success" [currentStep]="4"></o-progress-bar>
    <o-button button text="Continuar trámite" size="lg" [isExpandable]="true" link="#"></o-button>
  </o-block>
`;
export const BLOCK_EXAMPLE_BACKGROUND = `
  <o-block title="Iniciá el trámite y completá todos los pasos" [isBgLight]="true">
    <o-button button text="Iniciar trámite" size="lg" [isExpandable]="true" link="#"></o-button>
  </o-block>
`;

//BLOCK API
export const BLOCK_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: { data: 'Establece el título del bloque.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: { data: 'Define el contenido de texto principal del bloque.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isBgLight: boolean', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para indicar si el fondo del bloque es claro. Por defecto es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> isPositionRelative: boolean', customClasses: '' },
    description: {
      data: 'Propiedad de entrada para indicar si la posición del bloque es relative. Por defecto es false.',
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
