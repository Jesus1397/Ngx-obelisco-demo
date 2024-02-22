import { codeFormattingArrayList } from '../core/helpers/codeFormatting.helper';

const formattedExampleTsCode = (code: any) => `
  import { Component  } from '@angular/core';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent {
    public galleryItems: MediaGallery[] = ${codeFormattingArrayList(code)}
    ];
  }`;

export const GALLERY_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/gallery/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/gallery/examples'
  }
];

export const GALLERY_DATA_SOURCE = [
  {
    name: '@Input() <br /> galleryItems: MediaGallery[]',
    description: 'Se utiliza para pasar una lista de imágenes que se mostrarán en la galería.'
  },
  {
    name: '@Input() <br /> isInteractive: boolean ',
    description: 'Se utiliza para habilitar o deshabilitar la interacción con la galería.'
  },
  {
    name: '@Input() <br /> dataTarget: string',
    description: 'Se utiliza para pasar el id del elemento que se mostrará en la galería.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  },
  {
    name: '@Input() <br /> customClassesInteractive: string',
    description:
      'Se utiliza para aplicar clases personalizadas a la sección interactiva del componente para personalizar su apariencia.'
  }
];

export const IMAGES_LIST_1 = [
  {
    author: 'Autor 1',
    title: 'Titulo de la imagen 1',
    content: 'Descripcion de la imagen 1',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true'
  }
];

export const IMAGES_LIST_2 = [
  ...IMAGES_LIST_1,
  {
    author: 'Autor 2',
    title: 'Titulo de la imagen 2',
    content: 'Descripcion de la imagen 2',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true'
  }
];

export const IMAGES_LIST_3 = [
  ...IMAGES_LIST_2,
  {
    author: 'Autor 3',
    title: 'Titulo de la imagen 3',
    content: 'Descripcion de la imagen 3',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/3.jpg?raw=true'
  }
];

export const IMAGES_LIST_4 = [
  ...IMAGES_LIST_3,
  {
    author: 'Autor 4',
    title: 'Titulo de la imagen 4',
    content: 'Descripcion de la imagen 4',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/4.jpg?raw=true'
  }
];

export const IMAGES_LIST_5 = [
  ...IMAGES_LIST_4,
  {
    author: 'Autor 5',
    title: 'Titulo de la imagen 5',
    content: 'Descripcion de la imagen 5',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/5.jpg?raw=true'
  }
];

export const IMAGES_LIST_6 = [
  ...IMAGES_LIST_5,
  {
    author: 'Autor 6',
    title: 'Titulo de la imagen 6',
    content: 'Descripcion de la imagen 6',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true'
  }
];

export const IMAGES_LIST_7 = [
  ...IMAGES_LIST_6,
  {
    author: 'Autor 7',
    title: 'Titulo de la imagen 7',
    content: 'Descripcion de la imagen 7',
    src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true'
  }
];

export const GALLERY_INTERFACE_IMAGE_ITEM = `
  interface Media {
    src: string;
    alt: string;
    track: string;
    title: string;
    size: ImageMediaSizes;
  }

  interface MediaGallery extends Media {
    author: string;
    content: string;
  }
  `;

export const GALLERY_INTERFACE_DATA_SOURCE = [
  {
    name: 'src: string',
    description: 'Se utiliza para definir la ruta del elemento multimedia y url del iframe.'
  },
  {
    name: 'alt: string',
    description: 'Se utiliza para definir el texto alternativo de la imagen.'
  },
  {
    name: 'track: string',
    description: 'Se utiliza para definir la ruta al elemento con formato WebVTT (archivos .vtt) en el caso de video.'
  },
  {
    name: 'title: string',
    description: 'Se utiliza para definir el titulo del video e iframe.'
  },
  {
    name: 'size: ImageMediaSizes',
    description: 'Se utiliza para definir el tamaño de la imagen, en el caso de panel chico y tarjetas.'
  },
  {
    name: 'author: string',
    description: 'Se utiliza para definir el autor de la imagen.'
  },
  {
    name: 'content: string',
    description: 'Se utiliza para definir la descripción de la imagen.'
  }
];

export const GALLERY_EXAMPLE_INTERACTIVE_HTML = `
  <o-gallery [galleryItems]="galleryItems" [isInteractive]="true" dataTarget="modalGallery"></o-gallery>
`;

export const GALLERY_EXAMPLE_INTERACTIVE_TS = formattedExampleTsCode(IMAGES_LIST_3);

export const GALLERY_EXAMPLE_IMAGES_LIST_HTML = `<o-gallery [galleryItems]="galleryItems"></o-gallery>`;

export const GALLERY_EXAMPLE_IMAGES_LIST_1_TS = formattedExampleTsCode(IMAGES_LIST_1);

export const GALLERY_EXAMPLE_IMAGES_LIST_2_TS = formattedExampleTsCode(IMAGES_LIST_2);

export const GALLERY_EXAMPLE_IMAGES_LIST_3_TS = formattedExampleTsCode(IMAGES_LIST_3);

export const GALLERY_EXAMPLE_IMAGES_LIST_4_TS = formattedExampleTsCode(IMAGES_LIST_4);

export const GALLERY_EXAMPLE_IMAGES_LIST_5_TS = formattedExampleTsCode(IMAGES_LIST_5);

export const GALLERY_EXAMPLE_IMAGES_LIST_6_TS = formattedExampleTsCode(IMAGES_LIST_6);

export const GALLERY_EXAMPLE_IMAGES_LIST_7_TS = formattedExampleTsCode(IMAGES_LIST_7);

//TODO: Tipo any a ImageItem[]
