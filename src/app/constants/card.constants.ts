import { DataSource } from 'ngx-obelisco-example/core/models';

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
export const CARD_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isHorizontal: boolean', customClasses: '' },
    description: {
      data: 'Indica si el componente tendrá una dirección horizontal. Por defecto es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> isBordered: boolean', customClasses: '' },
    description: { data: 'Indica si el componente tendrá borde. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isThemeCard: boolean', customClasses: '' },
    description: { data: 'Indica si el componente es horizontal temática. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: { data: 'Establece el título de la tarjeta.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isTitleTruncate: boolean', customClasses: '' },
    description: {
      data: 'Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: { data: 'Define el contenido de texto principal de la tarjeta.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: { data: 'Establece un enlace URL para la tarjeta.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: { data: 'Especifica la ruta de navegación para la tarjeta.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> icon: string', customClasses: '' },
    description: { data: 'Define el ícono que se mostrará en la tarjeta.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> image: MediaImage', customClasses: '' },
    description: { data: 'Define la imagen principal de la tarjeta.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> headline: string', customClasses: '' },
    description: { data: 'Establece el titular del evento o componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> cardBadges: CardBadge[]', customClasses: '' },
    description: {
      data: 'Define las etiquetas del componente. Debe ser un arreglo de objetos CardBadge. Por defecto type es "secondary".',
      customClasses: ''
    }
  }
];

export const CARD_BADGES_INTERFACE = `
  interface CardBadge {
    content: string;
    type?: BadgeTypes;
  }
`;

export const CARD_BADGE_DATA_SOURCE: DataSource[] = [
  {
    name: { data: 'content: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el texto de la etiqueta.', customClasses: '' }
  },
  {
    name: { data: 'type: BadgeTypes', customClasses: '' },
    description: { data: 'Se utiliza para definir el tipo de etiqueta.', customClasses: '' }
  }
];

export const MEDIAIMAGE_CARDS_INTERFACE = `
  interface Media {
    src: string;
  }

  interface MediaImage extends Media {
    alt: string;
  }
`;
export const MEDIAIMAGE_CARDS_DATA_SOURCE = [
  {
    name: { data: 'src: string' },
    description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
  },
  {
    name: { data: 'alt: string' },
    description: { data: 'Se utiliza para definir el texto alternativo de la imagen.' }
  }
];

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
    [cardBadges]="[{content: 'etiqueta 1'}, {content: 'etiqueta 2'}]"
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
    [cardBadges]="[{content: 'etiqueta 1'}, {content: 'etiqueta 2'}]"
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

export const CARD_LAYOUT_THREE = `
<div class="card-deck card-column max-cards-3">
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
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
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
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
</div>
`;

export const CARD_LAYOUT_TWO = `
<div class="card-deck card-column max-cards-2">
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
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
  <o-card
    title="Título de la tarjeta con más de una línea"
    description="Descripción de la tarjeta"
    route="/components"
    icon="bx bxs-info-circle"
    [isHorizontal]="true"
    [isBordered]="true"
  ></o-card>
</div>
`;
