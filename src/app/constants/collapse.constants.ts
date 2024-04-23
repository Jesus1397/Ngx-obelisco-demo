import { Collapse, DataSource } from '@gcba/ngx-obelisco/core/models';
import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const formattedExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public items: Collapse[] = ${codeFormattingArrayList(code)}
    ];
  }`;

export const COLLAPSE_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/collapse/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/collapse/examples'
  }
];

export const COLLAPSE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> id: string', customClasses: '' },
    description: {
      data: 'Se utiliza para asignar el ID del colapsable y que sea de selección única, sino por defecto es múltiple.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> items: Collapse[]', customClasses: '' },
    description: { data: 'Se utiliza para definir la lista colapsables del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> dataParent: string', customClasses: '' },
    description: {
      data: 'Se utiliza para agregar un identificador para el comportamiento de los colapsables sean de selección unica.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> isWhite: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si el colapsable es de color blanco.', customClasses: '' }
  }
];

export const COLLAPSE_DATA_SOURCE_OUTPUT: DataSource[] = [
  {
    name: { data: '@Output() <br/> selectedItemChange: EventEmitter&lt;CollapseInputs&gt;', customClasses: '' },
    description: {
      data: 'Esto define un evento de salida (@Output) llamado selectedItemChange que emite instancias de CollapseInputs cuando cambia, lo que permite a otros componentes reaccionar a cambios en la selección del elemento.',
      customClasses: ''
    }
  }
];

export const COLLAPSE_INTERFACE = `
  interface Collapse {
    id?: string;
    icon?: string;
    label?: string;
    title?: string;
    isTitleAlone?: boolean;
    subtitle?: string;
    content?: string | string[];
    children?: CollapseItems[] | CollapseInputs[];
  }
`;

export const COLLAPSE_ITEMS_INTERFACE = `
  interface CollapseItems {
    label?: string;
    title?: string;
    subtitle?: string;
  }
`;

export const COLLAPSE_INPUTS_INTERFACE = `
  interface CollapseInputs {
    id?: string;
    icon?: string;
    title?: string;
    subtitle?: string;
    name?: string;
    value?: boolean;
  }
`;
export const INTERFACE_COLLAPSE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'id: string;', customClasses: '' },
    description: { data: 'Proporciona un identificador único para el elemento.', customClasses: '' }
  },
  {
    name: { data: 'icon: string;', customClasses: '' },
    description: { data: 'Define el ícono del colapsable.', customClasses: '' }
  },
  {
    name: { data: 'label: string;', customClasses: '' },
    description: { data: 'Define un breve texto o leyenda.', customClasses: '' }
  },
  {
    name: { data: 'title: string;', customClasses: '' },
    description: { data: 'Define el título principal.', customClasses: '' }
  },
  {
    name: { data: 'isTitleAlone: boolean;', customClasses: '' },
    description: { data: 'Define un título sin estar dentro de la etiqueta span.', customClasses: '' }
  },
  {
    name: { data: 'subtitle: string;', customClasses: '' },
    description: { data: 'Define el subtítulo.', customClasses: '' }
  },
  {
    name: { data: 'content: string | string[];', customClasses: '' },
    description: { data: 'Proporciona una descripción detallada.', customClasses: '' }
  },
  {
    name: { data: 'children: CollapseItems[] | CollapseInputs[];', customClasses: '' },
    description: { data: 'Define una lista de elementos CollapseItems o CollapseInputs', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> customClassesHeader: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al header del componente para personalizar su apariencia.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br /> customClassesContent: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al contenido del componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const INTERFACE_COLLAPSE_ITEMS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'label: string;', customClasses: '' },
    description: { data: 'Define el texto del ítem colapsable.', customClasses: '' }
  },
  {
    name: { data: 'title: string;', customClasses: '' },
    description: { data: 'Define el título del ítem colapsable.', customClasses: '' }
  },
  {
    name: { data: 'subtitle: string;', customClasses: '' },
    description: { data: 'Define el subtítulo del ítem colapsable.', customClasses: '' }
  }
];

export const INTERFACE_COLLAPSE_INPUTS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'id: string;', customClasses: '' },
    description: { data: 'Proporciona un identificador único para el input colapsable.', customClasses: '' }
  },
  {
    name: { data: 'icon: string;', customClasses: '' },
    description: { data: 'Define el ícono para el input colapsable.', customClasses: '' }
  },
  {
    name: { data: 'title: string;', customClasses: '' },
    description: { data: 'Define el título para el input colapsable.', customClasses: '' }
  },
  {
    name: { data: 'subtitle: string;', customClasses: '' },
    description: { data: 'Define el subtítulo para el input colapsable.', customClasses: '' }
  },
  {
    name: { data: 'name: string;', customClasses: '' },
    description: { data: 'Proporciona un nombre para el input colapsable.', customClasses: '' }
  },
  {
    name: { data: 'value: boolean;', customClasses: '' },
    description: { data: 'Define el valor del elemento.', customClasses: '' }
  }
];

export const COLLAPSE_ITEM: Collapse = {
  title: 'Título',
  isTitleAlone: true,
  content: 'Esta es la descripción que se encuentra dentro de un colapsable.'
};
export const COLLAPSE_ARRAY: Collapse[] = Array(3).fill(COLLAPSE_ITEM);

export const COLLAPSE_INFORMATION: Collapse[] = [
  {
    title: '$450,00',
    label: 'Total a pagar',
    children: [
      {
        label: '$200,00',
        title: 'Solicitud de informes varios',
        subtitle: 'Boleta N° 2549-48758798'
      },
      {
        label: '$200,00',
        title: 'Solicitud de informes varios',
        subtitle: 'Boleta N° 2549-48758798'
      }
    ]
  }
];

export const COLLAPSE_ICON_ITEM: Collapse = {
  title: 'Título',
  content: 'Esta es la descripción que se encuentra dentro de un colapsable.',
  icon: 'bx bxs-user-circle'
};
export const COLLAPSE_ICON_ARRAY: Collapse[] = Array(3).fill(COLLAPSE_ICON_ITEM);

export const COLLAPSE_CAPTION_DESCRIPTION: Collapse[] = [
  {
    icon: 'bx bxs-user-circle',
    label: 'Volanta',
    title: 'Título',
    subtitle: 'Descripción',
    content: 'Esta es la descripción que se encuentra dentro de un colapsable.'
  }
];

export const COLLAPSE_LIST: Collapse[] = [
  {
    title: 'Tarjeta de crédito / débito',
    subtitle: 'VISA, MasterCard, AMEX, CABAL, Maestro',
    children: [
      {
        icon: 'bx bxl-visa',
        title: 'Visa Débito ****1234',
        subtitle: 'Heraldo Paez',
        id: 'visa',
        name: 'credit_card',
        value: false
      },
      {
        icon: 'bx bxl-mastercard',
        title: 'MasterCard Crédito ****5678',
        subtitle: 'Heraldo Paez',
        id: 'master',
        name: 'credit_card',
        value: true
      },
      {
        icon: 'bx bxs-info-circle',
        title: 'Nueva tarjeta de crédito',
        id: 'new_card',
        name: 'credit_card',
        value: false
      }
    ]
  }
];

export const COLLAPSE_EXAMPLE_HTML = `
  <o-collapse id="accordion" [items]="items" dataParent="selectionUnique">
  </o-collapse>
`;

export const COLLAPSE_MULTIPLE_EXAMPLE_HTML = `
  <o-collapse id="accordion" [items]="items">
  </o-collapse>
`;

export const COLLAPSE_WHITE_EXAMPLE_HTML = `
  <o-collapse id="accordion" [items]="items" [isWhite]="true">
  </o-collapse>
`;

export const COLLAPSE_INFO_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public items: Collapse[] = [
      {
        title: '$450,00',
        label: 'Total a pagar',
        children: [
          {
            label: '$200,00',
            title: 'Solicitud de informes varios',
            subtitle: 'Boleta N° 2549-48758798'
          },
          {
            label: '$200,00',
            title: 'Solicitud de informes varios',
            subtitle: 'Boleta N° 2549-48758798'
          }
        ]
      }
    ];
  }
`;

export const COLLAPSE_LIST_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public items: Collapse[] = [
      {
        title: 'Tarjeta de crédito / débito',
        subtitle: 'VISA, MasterCard, AMEX, CABAL, Maestro',
        children: [
          {
            icon: 'bx bxl-visa',
            title: 'Visa Débito ****1234',
            subtitle: 'Heraldo Paez',
            id: 'visa',
            name: 'credit_card',
            value: false
          },
          {
            icon: 'bx bxl-mastercard',
            title: 'MasterCard Crédito ****5678',
            subtitle: 'Heraldo Paez',
            id: 'master',
            name: 'credit_card',
            value: true
          },
          {
            icon: 'bx bxs-info-circle',
            title: 'Nueva tarjeta de crédito',
            id: 'new_card',
            name: 'credit_card',
            value: false
          }
        ]
      }
    ];
  }
`;

export const COLLAPSE_EXAMPLE_TS = formattedExampleTsCode(COLLAPSE_ARRAY);
export const COLLAPSE_MULTIPLE_EXAMPLE_TS = formattedExampleTsCode(COLLAPSE_ARRAY);
export const COLLAPSE_ICON_EXAMPLE_TS = formattedExampleTsCode(COLLAPSE_ICON_ARRAY);
export const COLLAPSE_CAPTION_DESCRIPTION_EXAMPLE_TS = formattedExampleTsCode(COLLAPSE_CAPTION_DESCRIPTION);
