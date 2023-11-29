export const BUTTON_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/button/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/button/examples'
  }
];

/* BUTTON-API */
export const BUTTON_GENERAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> type: ButtonTypes',
    description: 'Se utiliza para establecer el tipo de botón. Por defecto es primary.'
  },
  {
    name: '@Input() <br/> isOutline: boolean',
    description: 'Se utiliza para definir si es un botón con borde. Por defecto es false.'
  },
  {
    name: '@Input() <br/> text: string',
    description:
      'Se utiliza para definir el texto del botón. En el caso de que no presente ícono o spinner, por defecto es "Botón".'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para establecer el tamaño del botón. Por defecto es mediano.'
  },
  {
    name: '@Input() <br/> isExpandable: boolean',
    description: 'Se utiliza para definir si es un botón expandible. Por defecto es false.'
  },
  {
    name: '@Input() <br/> icon: string',
    description:
      'Se utiliza para definir el ícono del botón. Se debe utilizar íconos de boxicons o material icons round.'
  },
  {
    name: '@Input() <br/> ariaLabel: string',
    description: 'Se utiliza para definir el atributo aria-label, en el caso de que el botón no posea texto.'
  },
  {
    name: '@Input() <br/> spinner: boolean',
    description: 'Se utiliza para definir si el botón tiene un spinner.'
  },
  {
    name: '@Input() <br/> iconPositionRight: boolean',
    description: 'Se utiliza para definir la posición del ícono. Por defecto es false.'
  },
  {
    name: '@Input() <br/> spinnerPositionRight: boolean',
    description: 'Se utiliza para definir la posición del spinner. Por defecto es false.'
  }
];
export const BUTTON_LINK_DATA_SOURCE = [
  {
    name: '@Input() <br/> route: string',
    description: 'Se utiliza para definir la ruta de la etiqueta &lt;a&gt;, mediante el routerLink de Angular.'
  },
  {
    name: '@Input() <br/> link: string',
    description: 'Se utiliza para definir el link de la etiqueta &lt;a&gt;, mediante el href de HTML.'
  },
  {
    name: '@Input() <br/> target: string',
    description: 'Se utiliza para definir el atributo target de la etiqueta &lt;a&gt;. Por defecto es "_blank".'
  },
  {
    name: '@Input() <br/> download: string',
    description: 'Se utiliza para definir el atributo download de la etiqueta &lt;a&gt;.'
  },
  {
    name: '@Input() <br/> rel: string',
    description: 'Se utiliza para definir el atributo rel de la etiqueta &lt;a&gt;. Por defecto es "noreferrer".'
  }
];
export const BUTTON_DATA_SOURCE = [
  {
    name: '@Input() <br/> isDisabled: boolean',
    description: 'Se utiliza para definir tiene el atributo "disabled".'
  },
  {
    name: '@Input() <br/> dataTarget: string',
    description: 'Se utiliza para definir el atributo "data-target" de la etiqueta &lt;button&gt;.'
  },
  {
    name: '@Input() <br/> dataToggle: string',
    description: 'Se utiliza para definir el atributo "data-toggle" de la etiqueta &lt;button&gt;.'
  },
  {
    name: '@Input() <br/> dataDismiss: string',
    description: 'Se utiliza para definir el atributo "data-dismiss" de la etiqueta &lt;button&gt;.'
  }
];

export const BUTTON_TYPES = `
  type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'link' ;
`;

/* BUTTON-EXAMPLES */
export const BUTTON_EXAMPLE_TYPES = `
  <o-button></o-button>
  <o-button type="secondary"></o-button>
  <o-button type="success"></o-button>
  <o-button type="danger"></o-button>
  <o-button type="link"></o-button>
  <o-button text="Enlace" link="https://www.google.com/"></o-button>

  <o-button [isOutline]="true"></o-button>
  <o-button type="secondary" [isOutline]="true"></o-button>
  <o-button type="success" [isOutline]="true"></o-button>
  <o-button type="danger" [isOutline]="true"></o-button>
  <o-button type="link" [isOutline]="true"></o-button>
  <o-button text="Enlace" [isOutline]="true" link="https://www.google.com/"></o-button>
`;

export const BUTTON_EXAMPLE_SIZES = `
  <o-button size="sm"></o-button>
  <o-button></o-button>
  <o-button size="lg"></o-button>
`;

export const BUTTON_EXAMPLE_BLOCK = `
  <o-button text="Expandible" [isExpandable]="true"></o-button>
`;

export const BUTTON_EXAMPLE_ICON = `
  <o-button size="sm" icon="info" text="Botón"></o-button>
  <o-button icon="bx bxs-info-circle" text="Botón"></o-button>
  <o-button size="lg" icon="info" text="Botón"></o-button>

  <o-button size="sm" icon="info" ariaLabel="Botón"></o-button>
  <o-button icon="bx bxs-info-circle" ariaLabel="Botón"></o-button>
  <o-button size="lg" icon="info" ariaLabel="Botón"></o-button>
`;

export const BUTTON_EXAMPLE_SPINNER = `
  <o-button [spinner]="true" text="Botón"></o-button>
  <o-button type="secondary" [spinner]="true" text="Botón"></o-button>
  <o-button type="success" [spinner]="true" text="Botón"></o-button>
  <o-button type="danger" [spinner]="true" text="Botón"></o-button>
  <o-button type="link" [spinner]="true" text="Botón"></o-button>

  <o-button [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="secondary" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="success" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="danger" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="link" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
`;
