export enum ComponentEnum {
  access = 'Accesos',
  accessSimple = 'Accesos',
  accessList = 'Lista de accesos',
  alert = 'Alerta',
  breadcrumb = 'Miga de pan',
  card = 'Tarjetas',
  footer = 'Footer',
  progressBar = 'Barra de progreso',
  collapse = 'Colapsable',
  modal = 'Modal',
  pagination = 'Paginación',
  table = 'Tabla',
  navigation = 'Navegación horizontal',
  navigationHorizontal = 'Navegación horizontal',
  navigationVertical = 'Navegación vertical',
  tabs = 'Pestañas',
  gallery = 'Galería',
  panel = 'Panel',
  panelSmall = 'Panel Chico',
  stepsForm = 'Pasos de un formulario',
  dropdown = 'Desplegables de navegación',
  dropdownNavigation = 'Desplegables de navegación',
  dropdownSelection = 'Desplegables de selección',
  statusMessage = 'Mensaje de estado',
  spinner = 'Spinner',
  tooltip = 'Tooltip',
  navbar = 'Header',
  switch = 'Switch',
  list = 'Lista de pasos',
  listStep = 'Lista de pasos',
  banner = 'Banner',
  button = 'Botón'
}

export const COMPONENTS_NAVIGATION = [
  {
    title: 'Accesos',
    imageTop: 'assets/component-cards/Accesos.svg',
    route: '/components/access',
    children: [
      {
        title: 'Simple',
        route: '/components/access/access-simple'
      },
      {
        title: 'Lista de accesos',
        route: '/components/access/access-list'
      }
    ]
  },
  {
    title: 'Alerta',
    imageTop: 'assets/component-cards/Alerta.svg',
    route: '/components/alert'
  },
  {
    title: 'Miga de pan',
    imageTop: 'assets/component-cards/MigasDePan.svg',
    route: '/components/breadcrumb'
  },
  {
    title: 'Tarjetas',
    imageTop: 'assets/component-cards/Tarjetas.svg',
    route: '/components/card'
  },
  {
    title: 'Footer',
    imageTop: 'assets/component-cards/Footer.svg',
    route: '/components/footer'
  },
  {
    title: 'Banner',
    imageTop: 'assets/component-cards/BarraDeProgreso.svg',
    route: '/components/banner'
  },
  {
    title: 'Barra de progreso',
    imageTop: 'assets/component-cards/BarraDeProgreso.svg',
    route: '/components/progress-bar'
  },
  {
    title: 'Botón',
    imageTop: 'assets/component-cards/Switch.svg',
    route: '/components/button'
  },
  {
    title: 'Colapsable',
    imageTop: 'assets/component-cards/Colapsables.svg',
    route: '/components/collapse'
  },
  {
    title: 'Modal',
    imageTop: 'assets/component-cards/Modal.svg',
    route: '/components/modal'
  },
  {
    title: 'Paginación',
    imageTop: 'assets/component-cards/Paginado.svg',
    route: '/components/pagination'
  },
  {
    title: 'Tabla',
    imageTop: 'assets/component-cards/Tabla.svg',
    route: '/components/table'
  },
  {
    title: 'Galería',
    imageTop: 'assets/component-cards/Galeria.svg',
    route: '/components/gallery'
  },
  {
    title: 'Navegación',
    route: '/components/navigation',
    imageTop: 'assets/component-cards/Navegacion.svg',
    children: [
      {
        title: 'Horizontal',
        route: '/components/navigation/navigation-horizontal'
      },
      {
        title: 'Vertical',
        route: '/components/navigation/navigation-vertical'
      },
      {
        title: 'Pestañas',
        route: '/components/navigation/tabs'
      }
    ]
  },
  {
    title: 'Panel',
    imageTop: 'assets/component-cards/Panel.svg',
    route: '/components/panel'
  },
  {
    title: 'Pasos de un formulario',
    imageTop: 'assets/component-cards/PasosDeUnFormulario.svg',
    route: '/components/steps-form'
  },
  {
    title: 'Desplegables',
    imageTop: 'assets/component-cards/Desplegable.svg',
    route: '/components/dropdown',
    children: [
      {
        title: 'De navegación',
        route: '/components/dropdown/dropdown-navigation'
      },
      {
        title: 'De selección',
        route: '/components/dropdown/dropdown-selection'
      }
    ]
  },
  {
    title: 'Mensaje de estado',
    imageTop: 'assets/component-cards/MensajeDeEstado.svg',
    route: '/components/status-message'
  },
  {
    title: 'Spinner',
    imageTop: 'assets/component-cards/Spinner.svg',
    route: '/components/spinner'
  },
  {
    title: 'Tooltip',
    imageTop: 'assets/component-cards/Tooltip.svg',
    route: '/components/tooltip'
  },
  {
    title: 'Header',
    imageTop: 'assets/component-cards/',
    route: '/components/navbar'
  },
  {
    title: 'Switch',
    imageTop: 'assets/component-cards/Switch.svg',
    route: '/components/switch'
  },
  {
    title: 'Listas',
    imageTop: 'assets/component-cards/BarraDeEstado.svg',
    route: '/components/list',
    children: [
      {
        title: 'De pasos',
        route: '/components/list/step-list'
      }
    ]
  }
];

export const COLUMNS = [
  {
    key: 'name',
    value: 'Nombre'
  },
  {
    key: 'description',
    value: 'Descripción'
  }
];

export const SIZES = `
  type Sizes = "sm" | "md" | "lg";
`;

export const TYPES = `
  type Types = 'primary' | 'success' | 'danger' | 'info';
`;

COMPONENTS_NAVIGATION.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
