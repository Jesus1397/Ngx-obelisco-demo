import { TabsProps } from '@gcba/ngx-obelisco/core/models';
import { ExampleTabsOneComponent } from '../modules/section-components/navigation/tabs/pages/navigation-tabs-examples/routes-tabs/example-tabs-one/example-tabs-one.component';
import { ExampleTabsTwoComponent } from '../modules/section-components/navigation/tabs/pages/navigation-tabs-examples/routes-tabs/example-tabs-two/example-tabs-two.component';
import { ExampleTabsThreeComponent } from '../modules/section-components/navigation/tabs/pages/navigation-tabs-examples/routes-tabs/example-tabs-three/example-tabs-three.component';
import { ExampleTabsFourComponent } from '../modules/section-components/navigation/tabs/pages/navigation-tabs-examples/routes-tabs/example-tabs-four/example-tabs-two.component';
import { ExampleTabsFiveComponent } from '../modules/section-components/navigation/tabs/pages/navigation-tabs-examples/routes-tabs/example-tabs-five/example-tabs-two.component';
import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

/**
 * está para obtener un solo array de navigation_simple_ts_array
 */
function shortenArray(array: any[]) {
  return [...array].splice(array.length - 3, 1);
}

const formattedExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public navList = ${codeFormattingArrayList(code)}
    ];
  }`;

export const codeFormattingNavigationLevel2 = (code: any) =>
  JSON.stringify(code, null, 6)
    .replace('"children"', 'children')
    .replace(/ {8}/g, '    ')
    .replace(/  {2}/g, '   ')
    .replace(/"+[a-z]+":/gm, (match) => match.replace(/"/g, ''))
    .replace(/]$/, '    ];')
    .trim();

export const codeFormattingNavigationLevel3 = (code: any) =>
  JSON.stringify(code, null, 6)
    .replace('"children"', 'children')
    .replace('"children"', 'children')
    .replace(/ {8}/g, '    ')
    .replace(/  {2}/g, '   ')
    .replace(/"+[a-z]+":/gm, (match) => match.replace(/"/g, ''))
    .replace(/]$/, '    ];');

const NAVIGATION_ROUTE = 'navigation';
const NAVIGATION_HORIZONTAL_ROUTE = 'navigation/navigation-horizontal';
const NAVIGATION_VERTICAL_ROUTE = 'navigation/navigation-vertical';
const TABS_ROUTE = 'navigation/tabs';

export const NAVIGATIONS_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/navigation/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/navigation/examples'
  }
];

export const NAVIGATION_VERTICAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> navVertItems: NavVerticalItems[]',
    description: 'Se utiliza para definir los items del menú.'
  }
];

export const NAVIGATION_HORIZONTAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> navHorItems: NavHorizontalItems[]',
    description: 'Se utiliza para definir los items del menú.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Se utiliza para definir si el menú tendrá borde.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para definir el tamaño del menú.'
  }
];

export const NAVIGATION_TABS_DATA_SOURCE = [
  {
    name: '@Input() <br/> navTabsItems: TabsProps[]',
    description: 'Se utiliza para definir los items del componente.'
  },
  {
    name: '@Input() <br/> isFixedWidth: boolean',
    description: 'Se utiliza para definir si la pestaña tiene un ancho fijo, por defecto es falso.'
  },
  {
    name: '@Input() <br/> isItemsRounded: boolean',
    description: 'Se utiliza para definir el color de la pestaña en un tono de gris, por defecto es falso.'
  },
  {
    name: '@Input() <br/> isItemsRoundedLight: boolean',
    description:
      'Se utiliza para definir el color de pestaña activa en blanco como variacion de navBox, por defecto es falso.'
  },
  {
    name: '@Input() <br/> size: Sizes',
    description: 'Se utiliza para definir el tamaño de las pestañas.'
  },
  {
    name: '@Input() <br/> isSlidered: boolean',
    description: 'Se utiliza para definir si las pestañas forman parte de un slider, por defecto es falso.'
  }
];

export const NAVIGATION_HORIZONTAL_INTERFACE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título de la navegacion.'
  },
  {
    name: 'link: string',
    description: 'Se utiliza para definir el link de la navegacion. <br/> Mediante href de HTML.'
  },
  {
    name: 'route: string',
    description: 'Se utiliza para definir la ruta de la navegacion. <br/> Mediante routerLink de Angular.'
  },
  {
    name: 'isDisabled: boolean',
    description: 'Se utiliza para definir si el item estará deshabilitado.'
  },
  {
    name: 'icon: string',
    description: 'Se utiliza para definir el icono del item. <br /> Se debe utilizar clases de boxicons.'
  }
];

export const NAVIGATION_HORIZONTAL_PROPS_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para definir el título de la pestaña.'
  },
  {
    name: 'isActive: boolean',
    description: 'Se utiliza para definir si la pestaña esta activa por defecto.'
  },
  {
    name: 'iconRight: boolean',
    description: 'Se utiliza para definir si el icono va a la derecha o a la izquierda.'
  },
  {
    name: 'child: any',
    description: 'Se utiliza para definir asignar el componente que va enlazado a la pestaña.'
  }
];

export const NAVIGATION_VERTICAL_INTERFACE_DATA_SOURCE = NAVIGATION_HORIZONTAL_INTERFACE_DATA_SOURCE.concat({
  name: 'children: NavVerticalItems[]',
  description:
    'Se utiliza para definir los niveles, se arman de la misma manera que el nivel 1. <br/> Se pueden anidar hasta 3 niveles.'
}).filter((_, i) => i !== 1);

export const NAVIGATION_HORIZONTAL = NAVIGATIONS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_ROUTE, NAVIGATION_HORIZONTAL_ROUTE)
  };
});

export const NAVIGATION_VERTICAL = NAVIGATIONS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_ROUTE, NAVIGATION_VERTICAL_ROUTE)
  };
});

// Seccion tabs
export const TABS_NAVIGATION = NAVIGATIONS_NAVIGATION.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_ROUTE, TABS_ROUTE)
  };
});

//tabs
export const NAVIGATION_HORIZONTAL_INTERFACE = `
  interface NavHorizontalItems {
    title: string;
    link: string;
    route: string;
    isDisabled: boolean;
    icon: string;
  }
`;

export const NAVIGATION_VERTICAL_INTERFACE = `
  interface NavVerticalItems {
    title: string;
    route: string;
    isDisabled: boolean;
    icon: string;
    children: NavVerticalItems[];
  }
`;

export const TABS_INTERFACE = `
  interface TabsProps extends NavHorizontalItems {
    isActive: boolean;
    iconRight: boolean;
    child: any;
  }
`;

// EXAMPLES HORIZONTAL
export const NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_HTML = `
  <o-nav-horizontal
    [navHorItems]="navList"
    size="lg"
  ></o-nav-horizontal>
`;

export const NAVIGATION_HORIZONTAL_EXAMPLE_SIZES = `
  <o-nav-horizontal
    [navHorItems]="navList"
    [isBordered]="true"
    size="sm"
  ></o-nav-horizontal>

  <o-nav-horizontal
    [navHorItems]="navList"
    [isBordered]="true"
    size="md"
  ></o-nav-horizontal>

  <o-nav-horizontal
    [navHorItems]="navList"
    [isBordered]="true"
    size="lg"
  ></o-nav-horizontal>
`;

export const NAVIGATION_HORIZONTAL_EXAMPLE_SIMPLE_BORDER_HTML = `
  <o-nav-horizontal
    [navHorItems]="navList"
    [isBordered]="true"
    size="lg"
  ></o-nav-horizontal>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_ICON_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_FIXEDWIDTH_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isFixedWidth]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_SLIDER_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isFixedWidth]="true"
    [isSlidered]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_GRAY_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isItemsRounded]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_GRAY_FIXEDWIDTH_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isItemsRounded]="true"
    [isFixedWidth]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_GRAY_SLIDER_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isItemsRounded]="true"
    [isFixedWidth]="true"
    [isSlidered]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_BACKGROUND_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isItemsRoundedLight]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_BACKGROUND_FIXEDWIDTH_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isItemsRoundedLight]="true"
    [isFixedWidth]="true"
  ></o-tabs>
`;

export const NAVIGATION_TABS_EXAMPLE_SIMPLE_BACKGROUND_SLIDER_HTML = `
  <o-tabs
    [navTabsItems]="tabList"
    [isItemsRoundedLight]="true"
    [isFixedWidth]="true"
  ></o-tabs>
`;

export const SIZES_TABS = `
  <o-tabs
    [navTabsItems]="tabList"
    [size]="'sm'"
    [isFixedWidth]="true"
  ></o-tabs>

  <o-tabs
    [navTabsItems]="tabList"
    [isFixedWidth]="true"
  ></o-tabs>

  <o-tabs
    [navTabsItems]="tabList"
    [size]="'lg'"
    [isFixedWidth]="true"
  ></o-tabs>

  <o-tabs
    [navTabsItems]="tabList"
    [size]="'sm'"
    [isFixedWidth]="true"
    [isItemsRounded]="true"
  ></o-tabs>

  <o-tabs
    [navTabsItems]="tabList"
    [isFixedWidth]="true"
    [isItemsRounded]="true"
  ></o-tabs>

  <o-tabs
    [navTabsItems]="tabList"
    [size]="'lg'"
    [isFixedWidth]="true"
    [isItemsRounded]="true"
  ></o-tabs>
`;

// HTML HORIZONTAL
export const NAVIGATION_SIMPLE_TS_ARRAY = [
  {
    title: 'Link',
    route: 'app/views'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-horizontal/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_TABS_TS_ARRAY: TabsProps[] = [
  {
    title: 'Pestaña 1',
    child: ExampleTabsOneComponent,
    isActive: true
  },
  {
    title: 'Pestaña 2',
    child: ExampleTabsTwoComponent
  },
  {
    title: 'Pestaña 3',
    child: ExampleTabsThreeComponent
  },
  {
    title: 'Pestaña 4',
    isDisabled: true,
    child: ExampleTabsFourComponent
  },
  {
    title: 'Pestaña 5',
    child: ExampleTabsFiveComponent
  }
];

export const ExampleTsTabsSimple = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public tabList = [
    {
      title: 'Pestaña 1',
      child: ExampleTabsOneComponent,
      isActive: true
    },
    {
      title: 'Pestaña 2',
      child: ExampleTabsTwoComponent
    },
    {
      title: 'Pestaña 3',
      child: ExampleTabsThreeComponent
    },
    {
      title: 'Pestaña 4',
      isDisabled: true,
      child: ExampleTabsOneComponent
    },
    {
      title: 'Pestaña 5',
      child: ExampleTabsTwoComponent
    }
  ];
}
`;

export const NAVIGATION_TABS_TS_ARRAY_ICON: TabsProps[] = [
  {
    title: 'Pestaña 1',
    isDisabled: false,
    icon: 'bx bx-home',
    child: ExampleTabsOneComponent, // Componente RouteTabsOneComponent asociado a la pestaña
    isActive: true
  },
  {
    title: 'Pestaña 2',
    isDisabled: false,
    icon: 'folder',
    iconRight: true,
    child: ExampleTabsTwoComponent // Componente RouteTabsTwoComponent asociado a la pestaña
  },
  {
    title: 'Pestaña 3',
    isDisabled: false,
    icon: 'widgets',
    iconRight: false,
    child: ExampleTabsThreeComponent // Componente RouteTabsThreeComponent asociado a la pestaña
  },
  {
    title: 'Pestaña 4',
    isDisabled: true,
    icon: 'bx bx-log-out',
    iconRight: false,
    child: ExampleTabsFourComponent
  }
];

export const ExampleTsTabsSimpleIcon = `
import { Component  } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})
export class ExampleComponent {
  public tabList = [
    {
      title: 'Pestaña 1',
      icon: 'bx bx-home',
      child: ExampleTabsOneComponent,
      isActive: true
    },
    {
      title: 'Pestaña 2',
      icon: 'folder',
      iconRight: true,
      child: ExampleTabsTwoComponent
    },
    {
      title: 'Pestaña 3',
      icon: 'widgets',
      iconRight: false,
      child: ExampleTabsThreeComponent
    },
    {
      title: 'Pestaña 4',
      isDisabled: true,
      icon: 'bx bx-log-out',
      iconRight: false,
      child: ExampleTabsOneComponent
    }
  ];
}
`;

export const NAVIGATION_SIMPLE_TS_ARRAY_VERTICAL = NAVIGATION_SIMPLE_TS_ARRAY.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_HORIZONTAL_ROUTE, NAVIGATION_VERTICAL_ROUTE)
  };
});

export const NAVIGATION_EXAMPLE_SIMPLE_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_TS_ARRAY);

export const NAVIGATION_SIZES_HTML = shortenArray(NAVIGATION_SIMPLE_TS_ARRAY);

export const NAVIGATION_EXAMPLE_SIMPLE_SIZES_TS = formattedExampleTsCode(NAVIGATION_SIZES_HTML);

export const NAVIGATION_SIMPLE_ICON_TS = [
  {
    title: 'Link',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-horizontal/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_SIMPLE_ICON_TS_VERTICAL = NAVIGATION_SIMPLE_ICON_TS.map((el) => {
  return {
    ...el,
    route: el.route.replace(NAVIGATION_HORIZONTAL_ROUTE, NAVIGATION_VERTICAL_ROUTE)
  };
});

export const NAVIGATION_EXAMPLE_SIMPLE_ICON_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_ICON_TS);

// VERTICAL

export const NAVIGATION_VERTICAL_EXAMPLE_HTML = `
  <o-nav-vertical
    [navVertItems]="navList"
  ></o-nav-vertical>
`;

// VERTICAL TS

export const NAVIGATION_SIMPLE_VERTICAL_TS_ARRAY = [
  {
    title: 'Link',
    route: 'app/views'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-vertical/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_VERTICAL_TS_ARRAY);

export const NAVIGATION_SIMPLE_VERTICAL_ICON_TS = [
  {
    title: 'Link',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Active',
    route: '/components/navigation/navigation-vertical/examples'
  },
  {
    title: 'Disabled',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_EXAMPLE_VERTICAL_SIMPLE_ICON_TS = formattedExampleTsCode(NAVIGATION_SIMPLE_VERTICAL_ICON_TS);

export const NAVIGATION_VERTICAL_LV2_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation/navigation-vertical',
    children: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: '/components/navigation/navigation-vertical/examples'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: 'app/custom'
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_EXAMPLE_VRTICAL_LVL2_TS = formattedExampleTsCode(NAVIGATION_VERTICAL_LV2_VIEWER);

export const NAVIGATION_VERTICAL_EXAMPLE_LV2_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public navList = ${codeFormattingNavigationLevel2(NAVIGATION_VERTICAL_LV2_VIEWER)}
  }
`;

export const NAVIGATION_VERTICAL_ICON_LV2_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation/navigation-vertical',
    children: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: '/components/navigation/navigation-vertical/examples',
        icon: 'bx bxs-user-circle'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: 'app/custom'
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_VERTICAL_EXAMPLE_LV2_ICON_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public navList = ${codeFormattingNavigationLevel2(NAVIGATION_VERTICAL_ICON_LV2_VIEWER)}
  }
`;

export const NAVIGATION_VERTICAL_LV3_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation',
    children: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: 'app/custom'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: '/components/navigation/navigation-vertical',
        children: [
          {
            title: 'Con local a la calle',
            route: '/components/navigation/navigation-vertical/examples'
          },
          {
            title: 'Food trucks',
            route: 'app/custom'
          }
        ]
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_VERTICAL_EXAMPLE_LV3_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public navList = ${codeFormattingNavigationLevel3(NAVIGATION_VERTICAL_LV3_VIEWER)}
  }
`;

export const NAVIGATION_VERTICAL_ICON_LV3_VIEWER = [
  {
    title: 'Categorias',
    route: 'app/views',
    icon: 'bx bxs-user-circle'
  },
  {
    title: 'Locales y comercios',
    route: '/components/navigation',
    children: [
      {
        title: 'Local Indumentaria y calzado. (Actividades comerciales de venta).',
        route: 'app/custom',
        icon: 'bx bxs-user-circle'
      },
      {
        title: 'Locales gastronómicos: “para llevar/takeaway”',
        route: '/components/navigation/navigation-vertical',
        children: [
          {
            title: 'Con local a la calle',
            route: '/components/navigation/navigation-vertical/examples',
            icon: 'bx bxs-user-circle'
          },
          {
            title: 'Food trucks',
            route: 'app/custom'
          }
        ]
      },
      {
        title: 'Locales de óptica',
        route: 'app/custom'
      },
      {
        title: 'Comercial minorista (excluyendo indumentaria y calzado)',
        route: 'app/custom'
      }
    ]
  },
  {
    title: 'Actividades jurídicas',
    route: 'checkout'
  },
  {
    title: 'Otras actividades',
    route: 'checkout',
    isDisabled: true
  }
];

export const NAVIGATION_VERTICAL_EXAMPLE_ICON_LV3_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public navList = ${codeFormattingNavigationLevel3(NAVIGATION_VERTICAL_ICON_LV3_VIEWER)}
  }
`;
