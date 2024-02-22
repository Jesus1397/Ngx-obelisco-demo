export const SWITCH_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/switch/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/switch/examples'
  }
];

export const SWITCH_DATA_SOURCE = [
  {
    name: '@Input() <br/> id: string',
    description: 'Se utiliza para identificar de manera única el elemento en el código.'
  },
  {
    name: '@Input() <br/> labelOn: string',
    description: 'Se utiliza para establecer el texto cuando el switch está en posición de encendido.'
  },
  {
    name: '@Input() <br/> labelOff: string',
    description: 'Se utiliza para determinar si se aplica un estilo oscuro al switch.'
  },
  {
    name: '@Input() <br/> isDark: boolean',
    description: 'Se utiliza para controlar si el switch se muestra en un tamaño pequeño.'
  },
  {
    name: '@Input() <br/> isSmall: boolean',
    description: 'Se utiliza para controlar si el switch se muestra en un tamaño pequeño.'
  },
  {
    name: '@Input() <br/> isDisabled: boolean',
    description: ' Se utiliza para desactivar la capacidad de interactuar con el switch.'
  },
  {
    name: '@Input() <br/> isFixed: boolean',
    description: 'Se utiliza para mantener el switch en una posición fija y evitar cambios.'
  },
  {
    name: '@Input() <br/> switchValue: boolean',
    description: 'Se utiliza para establecer el estado inicial (encendido o apagado) del switch.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  },
  {
    name: '@Input() <br /> customClassesLabel: string',
    description:
      'Se utiliza para aplicar clases personalizadas al label del componente para personalizar su apariencia.'
  }
];

export const SWITCH_DATA_SOURCE_OUTPUT = [
  {
    name: '@Output() <br /> switchValueChange: EventEmitter&lt;boolean&gt;',
    description: 'Se utiliza para notificar cuando se produce un cambio en el estado del switch.'
  }
];

export const SWITCH_DEFAULT = `
  <o-switch></o-switch>
  <o-switch [switchValue]="true"></o-switch>
`;

export const SWITCH_WITH_LABEL = `
  <o-switch [id]="'example'" [labelOff]="'Apagado'" [labelOn]="'Prendido'"></o-switch>
`;

export const SWITCH_DARK = `
  <o-switch [isDark]="true"></o-switch>
  <o-switch [isDark]="true" [switchValue]="true"></o-switch>
`;

export const SWITCH_SMALL = `
  <o-switch [isSmall]="true"></o-switch>
  <o-switch [isSmall]="true" [switchValue]="true"></o-switch>
`;

export const SWITCH_CHECKED = `
  <o-switch [isFixed]="true"></o-switch>
  <o-switch [isFixed]="true" [switchValue]="true"></o-switch>
`;

export const SWITCH_DISABLED = `
  <o-switch [isDisabled]="true" [labelOff]="'Apagado'"></o-switch>
  <o-switch [isDisabled]="true" [labelOn]="'Prendido'" [switchValue]="true"></o-switch>
`;
