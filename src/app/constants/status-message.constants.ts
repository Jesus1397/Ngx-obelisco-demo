import { StatusMessageTypes } from '@gcba/ngx-obelisco/core/models';

interface StatusMessage {
  name: string;
  type: StatusMessageTypes;
  title: string;
  content: string | string[];
  listContent?: string[];
  exampleHTML?: string;
  exampleTS?: string;
}

export const STATUS_MESSAGE_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/status-message/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/status-message/examples'
  }
];

export const DATA_SOURCE_STATUS_MESSAGE = [
  {
    name: '@Input() <br /> type: StatusMessageTypes',
    description: 'Se utiliza para definir el tipo de mensaje que se quiere mostrar.'
  },
  {
    name: '@Input() <br /> title: string',
    description: 'Se utiliza para definir el título del mensaje.'
  },
  {
    name: '@Input() <br /> content: string | string[]',
    description:
      'Se utiliza para definir el texto del mensaje.<br /> Puede ser un string o un array de strings. Si es un array, se mostrará como dos párrafos separados.'
  },
  {
    name: '@Input() <br /> listContent: string[]',
    description:
      'Se utiliza para definir una lista de ítems que se mostrarán debajo del texto. <br /> Se puede armar con etiquetas html. <br /> No es obligatorio.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  }
];

export const STATUS_MESSAGE_TYPE = `
  type StatusMessageTypes = 'primary' | 'success' | 'danger' | 'info' | 'institutional';
`;

export const STATUS_MESSAGE_LIST: StatusMessage[] = [
  {
    name: 'Éxito',
    type: 'success',
    title: 'Esto es un título de un mensaje de éxito',
    content:
      'Esto es un párrafo que acompaña y sirve para indicar que el usuario realizó una acción correctamente, como cuando realiza una tarea con éxito.',
    listContent: [
      'Éste es un ítem dentro de una lista que puede contener un <a href="#">enlace</a>.',
      'Los ítems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.',
      'Éste es otro ítem dentro de una lista.'
    ],
    exampleHTML: `
      <o-status-message
        type="success"
        title="Esto es un título de un mensaje de éxito"
        content="Esto es un párrafo que acompaña y sirve para indicar que el usuario realizó una acción correctamente, como cuando realiza una tarea con éxito."
        [listContent]="listContent"
      >
        <o-button type="secondary"></o-button>
      </o-status-message>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public listContent: string[] = [
          'Éste es un ítem dentro de una lista que puede contener un <a href="#">enlace</a>.',
          'Los ítems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.',
          'Éste es otro ítem dentro de una lista.'
        ]
      }
    `
  },
  {
    name: 'Advertencia',
    type: 'primary',
    title: 'Esto es un título de un mensaje de advertencia',
    content:
      'Esto es un párrafo que advierte y sirve para indicarle al usuario que preste atención a determinada información o acción que debe realizar.',
    listContent: [
      'Contar con Clave Ciudad de <a href="#">AGIP</a>',
      'Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:',
      'Anexo II Formulario de Presentación de Programa de Capacitación'
    ],
    exampleHTML: `
      <o-status-message
        type="primary"
        title="Esto es un título de un mensaje de advertencia"
        content="Esto es un párrafo que advierte y sirve para indicarle al usuario que preste atención a determinada información o acción que debe realizar."
        [listContent]="listContent"
      >
        <o-button type="secondary"></o-button>
        <o-button type="secondary" [isOutline]="true"></o-button>
      </o-status-message>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public listContent: string[] = [
          'Contar con Clave Ciudad de <a href="#">AGIP</a>',
          'Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:',
          'Anexo II Formulario de Presentación de Programa de Capacitación'
        ]
      }
    `
  },
  {
    name: 'Información',
    type: 'info',
    title: 'Esto es un título de un mensaje de información',
    content: [
      'Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.',
      'Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.'
    ],
    exampleHTML: `
      <o-status-message
        type="info"
        title="Esto es un título de un mensaje de información"
        [text]="text"
      >
        <o-button type="secondary"></o-button>
      </o-status-message>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public text: string[] = [
          'Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.',
          'Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.'
        ]
      }
    `
  },
  {
    name: 'Error',
    type: 'danger',
    title: 'Esto es un título de un mensaje de peligro',
    content:
      'Este párrafo sirve para comunicar que algo salió mal y explica cómo puede ser solucionado. Muestra errores sobre algo que se realizó.',
    listContent: [
      'Contar con Clave Ciudad de <a href="#">AGIP</a>',
      'Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:',
      'Anexo II Formulario de Presentación de Programa de Capacitación'
    ],
    exampleHTML: `
      <o-status-message
        type="danger"
        title="Esto es un título de un mensaje de peligro"
        content="Este párrafo sirve para comunicar que algo salió mal y explica cómo puede ser solucionado. Muestra errores sobre algo que se realizó."
        [listContent]="listContent"
      >
        <o-button type="secondary"></o-button>
        <o-button type="secondary" [isOutline]="true"></o-button>
      </o-status-message>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public listContent: string[] = [
          'Contar con Clave Ciudad de <a href="#">AGIP</a>',
          'Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:',
          'Anexo II Formulario de Presentación de Programa de Capacitación'
        ]
      }
    `
  },
  {
    name: 'Institucional',
    type: 'institutional',
    title: 'Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires',
    content:
      "En el cuerpo de este componente pueden ir enlaces o botones: <a href='#'>https://ejemplo.buenosaires.gob.ar</a>",
    exampleHTML: `
      <o-status-message
        type="institutional"
        title="Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires"
        content="En el cuerpo de este componente pueden ir enlaces o botones: <a href='#'>https://ejemplo.buenosaires.gob.ar</a>"
      >
        <o-button type="link" [isOutline]="true" text="Ir al sitio web" link="https://buenosaires.gob.ar/">
        </o-button>
      </o-status-message>
    `
  }
];
