export const NAVBAR_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/navbar/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/navbar/examples'
  }
];

export const NAVBAR_DATA_SOURCE = [
  {
    name: '@Input() <br /> id: string',
    description: 'Se utiliza para proporcionar una identificación única al componente de barra de navegación.'
  },
  {
    name: '@Input() <br /> routeLogo: string',
    description:
      'Se utiliza para especificar la ruta de la imagen del logotipo que se mostrará en la barra de navegación.'
  },
  {
    name: '@Input() <br /> src: string',
    description:
      'Se utiliza para definir la fuente de la imagen del logotipo que se mostrará en la barra de navegación.'
  },
  {
    name: '@Input() <br /> alt: string',
    description:
      'Se utiliza para proporcionar un texto alternativo para la imagen del logotipo, útil para accesibilidad y SEO.'
  },
  {
    name: '@Input() <br /> isRouteExact: boolean',
    description:
      'Se utiliza para indicar si se requiere una coincidencia exacta de ruta al determinar la activación de una ruta en la barra de navegación.'
  },
  {
    name: '@Input() <br /> routes: NavbarRoute[]',
    description: 'Se utiliza para definir las rutas principales que se mostrarán en la barra de navegación.'
  },
  {
    name: '@Input() <br /> routesExtended: NavbarRoute[]',
    description:
      'Se utiliza para especificar rutas adicionales que se mostrarán en la barra de navegación, posiblemente como extensiones de las rutas principales.'
  },
  {
    name: '@Input() <br /> routesAccount: NavbarRouteAccount',
    description:
      'Se utiliza para definir las rutas relacionadas con la cuenta de usuario que se mostrarán en la barra de navegación.'
  },
  {
    name: '@Input() <br /> routesLogin: NavbarRouteLogin',
    description:
      'Se utiliza para definir las rutas de inicio de sesión o autenticación que se mostrarán en la barra de navegación.'
  },
  {
    name: '@Input() <br /> searchbarItems: SearchbarItem[]',
    description:
      'Se utiliza para definir los elementos que se mostrarán en la barra de búsqueda, permitiendo a los usuarios realizar búsquedas en el sitio.'
  },
  {
    name: '@Input() <br /> maxLengthResults: number',
    description:
      'Se utiliza para establecer el número máximo de resultados que se mostrarán en los resultados de búsqueda.'
  },
  {
    name: '@Input() <br /> placeholder: string',
    description:
      'Se utiliza para definir el texto de marcador de posición en el campo de búsqueda de la barra de navegación.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  }
];

export const NAVBAR_ROUTE_BASE_INTERFACE = `
  interface NavbarRouteBase {
    iconLeft?: string;
    title?: string;
    iconRight?: string;
    route?: string;
    link?: string;
  }
`;

export const NAVBAR_ROUTE_INTERFACE = `
  interface NavbarRoute extends NavbarRouteBase {
    children?: NavbarRouteItem[];
  }

  interface NavbarRouteItem extends NavbarRouteBase {
    isOverviewItem?: boolean;
  }
`;

export const NAVBAR_ROUTE_ACCOUNT_INTERFACE = `
  interface NavbarRouteAccount extends NavbarRouteBase {
    children?: NavbarRouteAccountItem[];
  }

  interface NavbarRouteAccountItem extends NavbarRouteBase {
    isDangerTitle?: boolean;
    isWithNotification?: boolean;
  }
`;

export const NAVBAR_ROUTE_LOGIN_INTERFACE = `
  interface NavbarRouteLogin extends NavbarRouteBase {}
`;

export const NAVBAR_SEARCHITEM_INTERFACE = `
  interface SearchbarItem {
    title: string;
    route: string;
  }
`;

export const NAVBAR_ROUTE_BASE_DATA_SOURCE = [
  {
    name: '@Input() <br /> iconLeft: string',
    description:
      'Se utiliza para especificar el ícono que se mostrará a la izquierda del enlace en la barra de navegación.'
  },
  {
    name: '@Input() <br /> title: string',
    description: 'Se utiliza para definir el título o etiqueta del enlace en la barra de navegación.'
  },
  {
    name: '@Input() <br /> iconRight: string',
    description:
      'Se utiliza para establecer un ícono que se mostrará a la derecha del enlace en la barra de navegación.'
  },
  {
    name: '@Input() <br /> route: string',
    description:
      'Se utiliza para especificar la ruta o URL a la que se redirigirá cuando se haga clic en el enlace en la barra de navegación.'
  },
  {
    name: '@Input() <br /> link: string',
    description:
      'Se utiliza para proporcionar un enlace adicional relacionado con el elemento de la barra de navegación, como un enlace a la documentación o detalles adicionales.'
  },
  {
    name: '@Input() <br /> children: NavbarRouteItem[]',
    description:
      'Se utiliza para definir subelementos o enlaces secundarios que estarán anidados bajo este elemento en la barra de navegación.'
  }
];

export const NAVBAR_ROUTE_DATA_SOURCE = [
  {
    name: '@Input() <br /> children: NavbarRouteItem[]',
    description:
      'Se utiliza para especificar los elementos secundarios que estarán anidados bajo este elemento de la barra de navegación. Cada elemento representa un enlace en la barra de navegación.'
  }
];

export const NAVBAR_ROUTE_ITEM_DATA_SOURCE = [
  {
    name: '@Input() <br /> isOverviewItem: boolean',
    description:
      'Se utiliza para indicar si este elemento de la barra de navegación es un elemento de vista general (overview). Cuando es verdadero, puede tener un estilo o comportamiento especial.'
  }
];

export const NAVBAR_ROUTE_ACCOUNT_DATA_SOURCE = [
  {
    name: '@Input() <br /> children: NavbarRouteAccountItem[]',
    description:
      'Se utiliza para especificar los elementos secundarios relacionados con la cuenta del usuario que estarán anidados bajo este elemento en la barra de navegación.'
  }
];

export const NAVBAR_ROUTE_ACCOUNT_ITEM_DATA_SOURCE = [
  {
    name: '@Input() <br /> isDangerTitle: boolean',
    description:
      'Se utiliza para indicar si este elemento de la barra de navegación de la cuenta del usuario tiene un estilo de título de peligro. Puede usarse para resaltar elementos importantes o riesgosos.'
  },
  {
    name: '@Input() <br /> isWithNotification: boolean',
    description:
      'Se utiliza para especificar si este elemento de la barra de navegación de la cuenta del usuario debe mostrar una notificación visual para alertar al usuario sobre eventos importantes o mensajes nuevos.'
  }
];

export const SEARCHBAR_ITEM_DATA_SOURCE = [
  {
    name: '@Input() <br /> title: string',
    description: 'Se utiliza para definir el título o etiqueta del elemento de búsqueda.'
  },
  {
    name: '@Input() <br /> route: string',
    description:
      'Se utiliza para especificar la ruta o URL a la que se redirigirá cuando se realice una búsqueda en este elemento.'
  }
];

export const NAVBAR_SECTIONS_EXAMPLE_HTML = `
  <o-navbar
    id="navbarOne"
    [routes]="routes"
    [routesLogin]="routesLogin"
  ></o-navbar>
`;

export const NAVBAR_SECTIONS_EXTENDED_EXAMPLE_HTML = `
  <o-navbar
    id="navbarTwo"
    [routesExtended]="routesExtended"
    [routesLogin]="routesLogin"
  ></o-navbar>
`;

export const NAVBAR_LOGIN_EXAMPLE_HTML = `
  <o-navbar
    id="navbarThree"
    [routes]="routes"
    [routesAccount]="routesAccount"
  ></o-navbar>
`;

export const NAVBAR_EXTENDED_LOGIN_EXAMPLE_HTML = `
  <o-navbar
    id="navbarFour"
    [routesExtended]="routesExtended"
    [routesAccount]="routesAccount"
  ></o-navbar>
`;

export const NAVBAR_SEARCHBAR_EXAMPLE_HTML = `
  <o-navbar
    id="navbarFive"
    [routes]="routes"
    [searchbarItems]="searchbarItems"
  ></o-navbar>
`;

export const NAVBAR_SECTIONS_EXAMPLE_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    routes: NavbarRoute[] = [
      {
        title: 'Sección 1',
        children: [
          {
            title: 'Navegación',
            link: 'https://music.youtube.com/'
          },
          {
            title: 'Navegación',
            route: '/'
          }
        ]
      },
      {
        title: 'Sección 2',
        route: '/'
      },
      {
        title: 'Sección 3',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/',
            isOverviewItem: true
          }
        ]
      }
    ];

    routesLogin: NavbarRouteLogin = {
      title: 'Ingresar',
      route: '/'
    };
  }
`;

export const NAVBAR_SECTIONS_EXTENDED_EXAMPLE_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    routesExtended: NavbarRoute[] = [
      {
        title: 'Sección 1',
        route: '/'
      },
      {
        title: 'Sección 2',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/'
          }
        ]
      },
      {
        title: 'Sección 3',
        route: '/'
      },
      {
        title: 'Sección 4',
        route: '/'
      },
      {
        title: 'Sección 5',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/',
            isOverviewItem: true
          }
        ]
      },
      {
        title: 'Sección 6',
        route: '/'
      }
    ];

    routesLogin: NavbarRouteLogin = {
      title: 'Ingresar',
      route: '/'
    };
  }
`;

export const NAVBAR_LOGIN_EXAMPLE_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    routes: NavbarRoute[] = [
      {
        title: 'Sección 1',
        children: [
          {
            title: 'Navegación',
            link: 'https://music.youtube.com/'
          },
          {
            title: 'Navegación',
            route: '/'
          }
        ]
      },
      {
        title: 'Sección 2',
        route: '/'
      },
      {
        title: 'Sección 3',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/',
            isOverviewItem: true
          }
        ]
      }
    ];

    routesAccount: NavbarRouteAccount = {
      title: 'Pefil',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Notificaciones',
          route: '/',
          isWithNotification: true
        },
        {
          title: 'Cerrar sesión',
          route: '/',
          isDangerTitle: true
        }
      ]
    };
  }
`;

export const NAVBAR_EXTENDED_LOGIN_EXAMPLE_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    routesExtended: NavbarRoute[] = [
      {
        title: 'Sección 1',
        route: '/'
      },
      {
        title: 'Sección 2',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/'
          }
        ]
      },
      {
        title: 'Sección 3',
        route: '/'
      },
      {
        title: 'Sección 4',
        route: '/'
      },
      {
        title: 'Sección 5',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/',
            isOverviewItem: true
          }
        ]
      },
      {
        title: 'Sección 6',
        route: '/'
      }
    ];

    routesAccount: NavbarRouteAccount = {
      title: 'Pefil',
      children: [
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Navegación',
          route: '/'
        },
        {
          title: 'Notificaciones',
          route: '/',
          isWithNotification: true
        },
        {
          title: 'Cerrar sesión',
          route: '/',
          isDangerTitle: true
        }
      ]
    };
  }
`;

export const NAVBAR_SEARCHBAR_EXAMPLE_TS = `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    routes: NavbarRoute[] = [
      {
        title: 'Sección 1',
        children: [
          {
            title: 'Navegación',
            link: 'https://music.youtube.com/'
          },
          {
            title: 'Navegación',
            route: '/'
          }
        ]
      },
      {
        title: 'Sección 2',
        route: '/'
      },
      {
        title: 'Sección 3',
        children: [
          {
            title: 'Navegación',
            route: '/'
          },
          {
            title: 'Navegación',
            route: '/',
            isOverviewItem: true
          }
        ]
      }
    ];

    searchbarItems: SearchbarItem[] = [
      {
        title: 'Inicio',
        route: '/'
      },
      {
        title: 'Introducción',
        route: '/get-started'
      },
      {
        title: 'Componentes',
        route: '/components'
      }
    ];
  }
`;
