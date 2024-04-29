import { Collapse, DataSource } from 'ngx-obelisco-example/core/models';

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
    name: { data: '@Input() <br/> identifier: string' },
    description: {
      data: 'Se utiliza para asignar el ID del colapsable.'
    }
  },
  {
    name: { data: '@Input() <br/> dataParent: string' },
    description: {
      data: 'Se utiliza para agregar un identificador para el comportamiento de los colapsables sean de selección unica.'
    }
  },
  {
    name: { data: '@Input() <br/> icon?: string' },
    description: { data: 'Se utiliza para definir el icono del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> label?: string' },
    description: { data: 'Se utiliza para definir la etiqueta del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> title?: string' },
    description: { data: 'Se utiliza para definir el título del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> isTitleAlone?: boolean' },
    description: { data: 'Se utiliza para definir si el título del colapsable está solo.' }
  },
  {
    name: { data: '@Input() <br/> subtitle?: string' },
    description: { data: 'Se utiliza para definir el subtítulo del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> content?: string | string[]' },
    description: { data: 'Se utiliza para definir el contenido del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> children?: CollapseItems[] | CollapseInputs[]' },
    description: { data: 'Se utiliza para definir la lista colapsables del componente.' }
  },
  {
    name: { data: '@Input() <br/> customClassesHeader?: string' },
    description: { data: 'Se utiliza para definir clases personalizadas para el encabezado del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> customClassesContent?: string' },
    description: { data: 'Se utiliza para definir clases personalizadas para el contenido del colapsable.' }
  },
  {
    name: { data: '@Input() <br/> isWhite?: boolean = false' },
    description: { data: 'Se utiliza para definir si el colapsable es de color blanco.' }
  }
];

export const COLLAPSE_DATA_SOURCE_OUTPUT: DataSource[] = [
  {
    name: { data: '@Output() <br/> selectedItemChange: EventEmitter&lt;CollapseInputs&gt;' },
    description: {
      data: 'Esto define un evento de salida (@Output) llamado selectedItemChange que emite instancias de CollapseInputs cuando cambia, lo que permite a otros componentes reaccionar a cambios en la selección del elemento.'
    }
  }
];

export const COLLAPSE_ITEMS_INTERFACE = `
  interface CollapseItems {
    label: string;
    title: string;
    subtitle: string;
  }
`;

export const COLLAPSE_INPUTS_INTERFACE = `
  interface CollapseInputs {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    name: string;
    value: boolean;
  }
`;
export const INTERFACE_COLLAPSE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'id: string;' },
    description: { data: 'Proporciona un identificador único para el elemento.' }
  },
  {
    name: { data: 'icon: string;' },
    description: { data: 'Define el ícono del colapsable.' }
  },
  {
    name: { data: 'label: string;' },
    description: { data: 'Define un breve texto o leyenda.' }
  },
  {
    name: { data: 'title: string;' },
    description: { data: 'Define el título principal.' }
  },
  {
    name: { data: 'isTitleAlone: boolean;' },
    description: { data: 'Define un título sin estar dentro de la etiqueta span.' }
  },
  {
    name: { data: 'subtitle: string;' },
    description: { data: 'Define el subtítulo.' }
  },
  {
    name: { data: 'content: string | string[];' },
    description: { data: 'Proporciona una descripción detallada.' }
  },
  {
    name: { data: 'children: CollapseItems[] | CollapseInputs[];' },
    description: { data: 'Define una lista de elementos CollapseItems o CollapseInputs' }
  },
  {
    name: { data: '@Input() <br /> customClassesHeader: string' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al header del componente para personalizar su apariencia.'
    }
  },
  {
    name: { data: '@Input() <br /> customClassesContent: string' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al contenido del componente para personalizar su apariencia.'
    }
  }
];

export const INTERFACE_COLLAPSE_ITEMS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'label: string;' },
    description: { data: 'Define el texto del ítem colapsable.' }
  },
  {
    name: { data: 'title: string;' },
    description: { data: 'Define el título del ítem colapsable.' }
  },
  {
    name: { data: 'subtitle: string;' },
    description: { data: 'Define el subtítulo del ítem colapsable.' }
  }
];

export const INTERFACE_COLLAPSE_INPUTS_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'id: string;' },
    description: { data: 'Proporciona un identificador único para el input colapsable.' }
  },
  {
    name: { data: 'icon: string;' },
    description: { data: 'Define el ícono para el input colapsable.' }
  },
  {
    name: { data: 'title: string;' },
    description: { data: 'Define el título para el input colapsable.' }
  },
  {
    name: { data: 'subtitle: string;' },
    description: { data: 'Define el subtítulo para el input colapsable.' }
  },
  {
    name: { data: 'name: string;' },
    description: { data: 'Proporciona un nombre para el input colapsable.' }
  },
  {
    name: { data: 'value: boolean;' },
    description: { data: 'Define el valor del elemento.' }
  }
];

export const COLLAPSE_MULTIPLE_EXAMPLE_HTML = `
  <div class="accordion">
    <o-collapse
      identifier="collapseOne"
      title="Título"
      content="Esta es la descripción que se encuentra dentro de un colapsable."
    >
    </o-collapse>

    <o-collapse
      identifier="collapseTwo"
      title="Título"
      content="Esta es la descripción que se encuentra dentro de un colapsable."
    >
    </o-collapse>

    <o-collapse
      identifier="collapseThree"
      title="Título"
      content="Esta es la descripción que se encuentra dentro de un colapsable."
    >
    </o-collapse>
  </div>
`;

export const COLLAPSE_EXAMPLE_HTML = `
  <div class="accordion" id="dataParent">
    <o-collapse
      identifier="collapseUniqueOne"
      dataParent="dataParent"
      title="Título"
      content="Esta es la descripción que se encuentra dentro de un colapsable."
    >
    </o-collapse>
    <o-collapse
      identifier="collapseUniqueTwo"
      dataParent="dataParent"
      title="Título"
      content="Esta es la descripción que se encuentra dentro de un colapsable."
    >
    </o-collapse>
    <o-collapse
      identifier="collapseUniqueThree"
      dataParent="dataParent"
      title="Título"
      content="Esta es la descripción que se encuentra dentro de un colapsable."
    >
    </o-collapse>
  </div>
`;

export const COLLAPSE_INFO_EXAMPLE_HTML = `
  <o-collapse
    identifier="collapseInfo"
    title="$450,00"
    label="Total a pagar"
    [children]="[
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
    ]"
  >
  </o-collapse>
`;

export const COLLAPSE_ICON_EXAMPLE_HTML = `
  <o-collapse
    title="Título"
    identifier="collapseIcon"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
    icon="bx bxs-user-circle"
  >
  </o-collapse>
`;

export const COLLAPSE_LABEL_EXAMPLE_HTML = `
  <o-collapse
    identifier="collapseLabel"
    icon="bx bxs-user-circle"
    label="Volanta"
    title="Título"
    subtitle="Descripción"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>
`;

export const COLLAPSE_LIST_EXAMPLE_HTML = `
  <o-collapse
    identifier="collapseList"
    icon="bx bxs-user-circle"
    label="Volanta"
    title="Título"
    subtitle="Descripción"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
  >
  </o-collapse>
`;

export const COLLAPSE_WHITE_EXAMPLE_HTML = `
  <o-collapse
    identifier="collapseWhite"
    [isWhite]="true"
    title="Título"
    content="Esta es la descripción que se encuentra dentro de un colapsable."
    icon="bx bxs-user-circle"
  >
  </o-collapse>
`;
