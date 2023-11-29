import { Step } from './../../../projects/ngx-obelisco/core/models/list.models';

import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const formattedExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public listStepItems: Step[] = ${codeFormattingArrayList(code)}
    ];
  }`;

const LIST_ROUTE = 'list';
const LIST_STEP_ROUTE = 'list/list-step';

export const NAVIGATIONS_LIST = [
  {
    title: 'Api',
    route: '/components/list/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/list/examples'
  }
];

export const LIST_STEP = NAVIGATIONS_LIST.map((el) => {
  return {
    ...el,
    route: el.route.replace(LIST_ROUTE, LIST_STEP_ROUTE)
  };
});

export const LIST_STEP_DATA_SOURCE = [
  {
    name: '@Input() <br /> listStepItems: Step[]',
    description: 'Se utiliza para proporcionar un arreglo de objetos "Step" al componente.'
  },
  {
    name: '@Input() <br /> isLight: boolean',
    description: 'Se utiliza para indicar si el estilo de los pasos debe ser "light" o no.'
  },
  {
    name: '@Input() <br /> isNumered: boolean',
    description: 'Se utiliza para determinar si se deben mostrar números en los pasos.'
  },
  {
    name: '@Input() <br /> size: Sizes',
    description: 'Se utiliza para definir el tamaño de los pasos en el componente.'
  }
];

export const LIST_STEP_INTERFACE_STEP = `
  export interface Step {
    title: string;
    content: string | string[];
  }`;

export const LIST_STEP_STEP_INTERFACE_DATA_SOURCE = [
  {
    name: 'title: string',
    description: 'Se utiliza para especificar el título del paso'
  },
  {
    name: 'description: string',
    description: 'Se utiliza para proporcionar la descripción del paso, que puede ser un texto o una lista de textos.'
  }
];

export const STEPS: Step[] = [
  {
    title: 'Instrucción 1',
    description:
      'En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 2',
    description:
      'En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 3',
    description:
      'En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 4',
    description:
      'En esta descripción de la instrucción 4 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  },
  {
    title: 'Instrucción 5',
    description:
      'En esta descripción de la instrucción 5 se muestran los detalles principales de las acciones que deberá tomar el usuario luego.'
  }
];

export const LIST_STEP_EXAMPLE_HTML = `
  <o-list-step [listStepItems]="listStepItems"></o-list-step>
`;

export const LIST_STEP_LIGHT_EXAMPLE_HTML = `
  <o-list-step [listStepItems]="listStepItems" [isStepLight]="true"></o-list-step>
`;

export const LIST_STEP_NUMBER_EXAMPLE_HTML = `
  <o-list-step [listStepItems]="listStepItems" [isStepNumber]="true"></o-list-step>
`;

export const LIST_STEP_LG_EXAMPLE_HTML = `
  <o-list-step [listStepItems]="listStepItems" size="lg"></o-list-step>
`;

export const LIST_STEP_SM_EXAMPLE_HTML = `
  <o-list-step [listStepItems]="listStepItems" size="sm"></o-list-step>
`;

export const LIST_STEP_EXAMPLE_TS = formattedExampleTsCode(STEPS);
