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

//CARDS API
export const CARD_DATA_SOURCE = [
  {
    name: '@Input() <br/> isHorizontal: boolean',
    description: 'Indica si el componente tendrá una dirección horizontal. Por defecto es false.'
  },
  {
    name: '@Input() <br/> isBordered: boolean',
    description: 'Indica si el componente tendrá borde. Por defecto es false.'
  },
  {
    name: '@Input() <br/> isThemeCard: boolean',
    description: 'Indica si el componente es horizontal temática. Por defecto es false.'
  },
  {
    name: '@Input() <br/> title: string',
    description: 'Establece el título de la tarjeta.'
  },
  {
    name: '@Input() <br/> isTitleTruncate: boolean',
    description: 'Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.'
  },
  {
    name: '@Input() <br/> description: string',
    description: 'Define el contenido de texto principal de la tarjeta.'
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
    name: '@Input() <br/> icon: string',
    description: 'Define el ícono que se mostrará en la tarjeta.'
  },
  {
    name: '@Input() <br/> image: Media',
    description: 'Define la imagen principal de la tarjeta.'
  },
  {
    name: '@Input() <br/> headline: string',
    description: 'Establece el titular del evento o componente.'
  },
  {
    name: '@Input() <br/> tags: Tags[]',
    description:
      'Define las etiquetas del componente. Debe ser un arreglo de objetos Tags. Por defecto type es "secondary".'
  }
];

export const CARD_TAGS_INTERFACE = `
  interface Tags {
    name: string;
    type?: TagTypes;
  }
`;

export const CARD_TAGS_DATA_SOURCE = [
  {
    name: 'name: string',
    description: 'Se utiliza para definir el texto de la etiqueta.'
  },
  {
    name: 'type: TagTypes',
    description: 'Se utiliza para definir el tipo de etiqueta.'
  }
];

export const TAG_TYPES_INTERFACE = `
  type TagTypes = 'primary' | 'success' | 'danger' | 'info' | 'secondary';
`;

//CARD EXAMPLES
export const CARD_HORIZONTAL_IMAGE = {
  src: '/assets/cards/img-left.jpg',
  alt: 'descripción de imagen'
};

export const CARD_THEME_IMAGE = {
  src: '/assets/cards/home.svg',
  alt: 'descripción de imagen'
};

export const CARD_VERTICAL_IMAGE = {
  src: '/assets/cards/img-top.jpg',
  alt: 'descripción de imagen'
};

export const CARD_THEME_HTML = `
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    [image]="{
      src: '/assets/cards/home.svg',
      alt: 'descripción de imagen'
    }"
    [isThemeCard]="true"
  ></o-card>
`;

export const CARD_HORIZONTAL_ICON_HTML = `
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="info"
    [isHorizontal]="true"
  ></o-card>
`;

export const CARD_HORIZONTAL_IMAGE_HTML = `
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    [image]="{
      src: '/assets/cards/img-left.jpg',
      alt: 'descripción de imagen'
    }"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    [image]="{
      src: '/assets/cards/img-left.jpg',
      alt: 'descripción de imagen'
    }"
    [isHorizontal]="true"
  ></o-card>
`;

export const CARD_HORIZONTAL_TEXT_HTML = `
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    [isHorizontal]="true"
  ></o-card>
`;

export const CARD_VERTICAL_ICON_HTML = `
  <o-card
    title="Título de la tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    icon="info"
  ></o-card>
`;

export const CARD_VERTICAL_IMAGE_HTML = `
  <o-card
    title="Título de la tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    [image]="{
      src: '/assets/cards/img-top.jpg',
      alt: 'descripción de imagen'
    }"
    [isBordered]="true"
  ></o-card>
`;

export const CARD_NEWS_HTML = `
  <o-card
    title="Título de la tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    [image]="{
      src: '/assets/cards/img-top.jpg',
      alt: 'descripción de imagen'
    }"
    [tags]="[{name: 'etiqueta 1'}, {name: 'etiqueta 2'}]"
    [isBordered]="true"
  >
    <small #info>Fecha de publicación</small>
  </o-card>
  <o-card
    title="Título de la tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    [image]="{
      src: '/assets/cards/img-top.jpg',
      alt: 'descripción de imagen'
    }"
    [tags]="[{name: 'etiqueta 1'}, {name: 'etiqueta 2'}]"
    [isTitleTruncate]="true"
    [isBordered]="true"
  >
    <small #info>Fecha de publicación</small>
  </o-card>
`;

export const CARD_EVENT_HTML = `
  <o-card
    title="Título de la tarjeta"
    description="Descripción de la tarjeta"
    route="/components"
    headline="sobrelinea"
    [isBordered]="true"
    [image]="{
      src: '/assets/cards/img-top.jpg',
      alt: 'descripción de imagen'
    }"
  >
    <div class="pt-2" #info>
      <small><span class="material-icons-round">calendar_today</span> Lun 01/1</small>
      <small><span class="material-icons-round">watch_later</span> 17 | 18 | 19 hs</small>
    </div>
  </o-card>
`;
