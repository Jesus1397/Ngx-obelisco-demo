import { Tags } from '@gcba/ngx-obelisco/core/models';

export const CARD_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/card/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/card/examples'
  }
];

export const CARD_HORIZONTAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> title: string',
    description: 'Establece el título de la tarjeta.'
  },
  {
    name: '@Input() <br/> description: string',
    description: 'Define el contenido de texto principal de la tarjeta.'
  },
  {
    name: '@Input() <br/> isInContainer: boolean',
    description: 'Indica si el componente tendra un contenedor.'
  },
  {
    name: '@Input() <br/> link: string',
    description: 'Establece un enlace URL para la tarjeta.'
  },
  {
    name: '@Input() <br/> route: string',
    description: 'Especifica la ruta de navegación para la tarjeta.'
  },
  {
    name: '@Input() <br/> imageSize: ImageSizes',
    description: 'Establece la tarjeta de tamaño grande.'
  },
  {
    name: '@Input() <br/> isSimpleCard: boolean',
    description: 'Marca si la tarjeta es de tipo simple.'
  },
  {
    name: '@Input() <br/> iconTop: string',
    description: 'Define el ícono que se mostrará en la parte superior de la tarjeta.'
  },
  {
    name: '@Input() <br/> iconLeft: string',
    description: 'Define el ícono que se mostrará en la parte izquierda de la tarjeta.'
  },
  {
    name: '@Input() <br/> imageSrc: string',
    description: 'Establece la imagen que se mostrará en la parte izquierda de la tarjeta.'
  },
  {
    name: '@Input() <br/> alt: string',
    description: 'Proporciona una descripción alternativa para la imagen izquierda.'
  }
];

export const CARD_VERTICAL_DATA_SOURCE = [
  {
    name: '@Input() <br/> title: string',
    description: 'Establece el título de la tarjeta.'
  },
  {
    name: '@Input() <br/> description: string',
    description: 'Define el contenido de texto principal de la tarjeta.'
  },
  {
    name: '@Input() <br/> eventName: string',
    description: 'Asigna el nombre del evento.'
  },
  {
    name: '@Input() <br/> headline: string',
    description: 'Establece el titular del evento o componente.'
  },
  {
    name: '@Input() <br/> link: string',
    description: 'Establece un enlace URL para la tarjeta.'
  },
  {
    name: '@Input() <br/> route: string',
    description: 'Especifica la ruta de navegación para la tarjeta.'
  },
  {
    name: '@Input() <br/> imageThumbSrc: string',
    description: 'Define la imagen principal del evento.'
  },
  {
    name: '@Input() <br/> altThumb: string',
    description: 'Proporciona una descripción alternativa para la imagen del evento.'
  },
  {
    name: '@Input() <br/> imageSrc: string',
    description: 'Establece la imagen miniatura para el evento.'
  },
  {
    name: '@Input() <br/> alt: string',
    description: 'Proporciona una descripción alternativa para la imagen miniatura del evento.'
  },
  {
    name: '@Input() <br/> tags: Tags[]',
    description: 'Define las etiquetas asociadas al evento o componente. Debe ser un arreglo de objetos Tags.'
  }
];

export const CARD_TAGS_INTERFACE = `
  interface Tags {
    name: string;
    type: TagTypes;
  }
`;

export const CARD_TAGS_DATA_SOURCE = [
  {
    name: 'name: string',
    description: 'descripcion de la propiedad title'
  },
  {
    name: 'type: TagTypes',
    description: 'descripcion de la propiedad title'
  }
];

export const TAG_TYPES_INTERFACE = `
  type TagTypes = 'primary' | 'success' | 'danger' | 'info' | 'secondary';
`;

export const CARD_WITHOUT_CONTAINER_EXAMPLE_HTML = `
  <o-card-horizontal
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/ciudad.jpg"
  ></o-card-horizontal>

  <o-card-horizontal
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    iconTop="bx bx-news"
    [isSimpleCard]="true"
  ></o-card-horizontal>

  <o-card-horizontal
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    [isSimpleCard]="true"
  ></o-card-horizontal>

  <o-card-horizontal
    title="Titulo de tarjeta"
    route="/components"
    [isSimpleCard]="true"
  ></o-card-horizontal>

  <o-card-horizontal
    title="Titulo de tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    iconLeft="bx bx-file"
  ></o-card-horizontal>

  <o-card-horizontal
    title="Titulo de tarjeta"
    route="/components"
    iconLeft="bx bx-file"
  ></o-card-horizontal>
`;

export const CARD_WITH_CONTAINER_EXAMPLE_HTML = `
  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima"
    route="/components"
    iconTop="bx bx-news"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima"
    route="/components"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    route="/components"
  ></o-card-horizontal>
`;

export const CARD_WITH_CONTAINER_IMG_ICON_EXAMPLE_HTML = `
  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/paseobajo-wide.png"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/paseobajo-wide.png"
    imageSize="lg"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    route="/components"
    imageSrc="/assets/cards/paseobajo-wide.png"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/paseobajo-wide.png"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de tarjeta"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/paseobajo-wide.png"
    imageSize="lg"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de acceso"
    description="Descripción de acceso"
    route="/components"
    iconLeft="bx bx-file"
  ></o-card-horizontal>

  <o-card-horizontal
    [isInContainer]="true"
    title="Titulo de acceso"
    route="/components"
    iconLeft="bx bx-file"
  ></o-card-horizontal>
`;

export const CARD_NOTICE_EXAMPLE_HTML = `
  <o-card-vertical
    title="Titulo de notica"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/evento.jpg"
    [tags]="cardTags"
  >
    <small>Fecha de publicación: 13/04/1997</small>
  </o-card-vertical>
`;

export const CARD_EVENT_SIMPLE_EXAMPLE_HTML = `
  <o-card-vertical
    title="Titulo de evento"
    description="Recomendamos en este espacio no utilizar más de 3 líneas, para generar una lectura óptima."
    route="/components"
    imageSrc="/assets/cards/evento.jpg"
  >
    <small>
      <i class="bx bx-calendar-event"></i>
      Vie 21/1
      <br />
      <i class="bx bx-time-five"></i>
      17 | 18 | 19 hs
    </small>
  </o-card-vertical>
`;

export const CARD_EVENT_EXAMPLE_HTML = `
  <o-card-vertical
    title="Comienza una nueva edición de actividades en polideportivos"
    eventName="Actividades y clases en polideportivos"
    headline="18 de Enero al 1 de Febrero"
    imageSrc="/assets/cards/evento-bg.jpg"
    imageThumbSrc="/assets/cards/evento-thumb.jpg"
  >
  </o-card-vertical>
`;

export const CARD_TAGS: Tags[] = [
  {
    name: 'Etiqueta 1',
    type: 'info'
  },
  {
    name: 'Etiqueta 2',
    type: 'info'
  }
];

export const CARD_NOTICE_EXAMPLE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public cardTags: Tags[] = [
      {
        name: 'Etiqueta 1',
        type: 'info'
      },
      {
        name: 'Etiqueta 2',
        type: 'info'
      }
    ];
  }
`;
