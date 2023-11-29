export const SPINNER_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/spinner/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/spinner/examples'
  }
];

export const SPINNER_DATA_SOURCE = [
  {
    name: '@Input() <br/> type: SpinnerTypes',
    description: 'Se utiliza para establecer el color del spinner. Por defecto es info.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para establecer el tamaño del spinner. Por defecto es mediano.'
  },
  {
    name: '@Input() <br/> isExpandable: boolean',
    description: 'Se utiliza para establecer si el spinner es expandible. Por defecto es false.'
  }
];

export const SPINNER_COLORS = `
  type SpinnerTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark' | 'light';
`;

export const SPINNER_EXAMPLE_COLORS = `
  <div oSpinner></div>
  <div oSpinner type="primary"></div>
  <div oSpinner type="secondary"></div>
  <div oSpinner type="success"></div>
  <div oSpinner type="danger"></div>
  <div oSpinner type="light"></div>
  <div oSpinner type="dark"></div>
`;

export const SPINNER_EXAMPLE_SIZES = `
  <div oSpinner size="sm"></div>
  <div oSpinner></div>
  <div oSpinner size="lg"></div>
`;

export const SPINNER_EXAMPLE_BLOCK = `
  <div style="width: 64px;">
    <div oSpinner [isExpandable]="true"></div>
  </div>
`;

export const SPINNER_EXAMPLE_MESSAGE = `
  <div oSpinner size="lg"></div>
  <small class="mt-2">Cargando...</small>
`;
