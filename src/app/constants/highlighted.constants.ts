export const HIGHLIGHTED_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/highlighted/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/highlighted/examples'
  }
];

export const HIGHLIGHTED_TITLE = 'Título de destacado';

export const HIGHLIGHTED_DESCRIPTION =
  'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

export const HIGHLIGHTED_DESCRIPTION_SM =
  'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces.';

export const HIGHLIGHTED_PICTURE = {
  src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
  alt: 'descripción de imagen'
};

export const HIGHLIGHTED_VIDEO = {
  src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',
  track: 'assets/panel/videoBuenosAires.vtt',
  title: 'Buenos Aires se escribe en plural'
};

export const HIGHLIGHTED_IFRAME = {
  src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',
  title: 'Buenos Aires se escribe en plural'
};

//HIGHLIGHTED EXAMPLES
export const HIGHLIGHTED_BANNER_IMAGE_HTML = `
  <o-highlighted
    [title]="title"
    [description]="description"
    [image]="picture">
    <o-button #child link="#" size="lg"></o-button>
    <o-button #child link="#" size="lg" type="secondary"></o-button>
  </o-highlighted>
`;

export const HIGHLIGHTED_IMAGE_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public title: string = 'Título de destacado';

    public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

    public picture: Media = {
      src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',
      alt: 'descripción de imagen'
    };
  }
`;

export const HIGHLIGHTED_BANNER_VIDEO_HTML = `
  <o-highlighted
    [title]="title"
    [description]="description"
    [video]="video">
    <o-button #child link="#" size="lg"></o-button>
  </o-highlighted>

  <o-highlighted
    [title]="title"
    [description]="description"
    [iframe]="iframe">
    <a #child class="external" href="#" target="_blank">Enlace externo</a>
  </o-highlighted>
`;

export const HIGHLIGHTED_VIDEO_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public title: string = 'Título de destacado';

    public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';

    public video: Media = {
      src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',
      track: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.vtt'
    };

    public iframe: Media = {
      src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',
      title: 'Buenos Aires se escribe en plural'
    };
  }
`;

export const HIGHLIGHTED_BANNER_NO_MEDIA_HTML = `
  <o-highlighted [title]="title" [description]="description">
    <o-button #child size="lg" type="secondary" link="#" icon="file_download" text="Descargar" download="">
    </o-button>
  </o-highlighted>
`;

export const HIGHLIGHTED_BANNER_NO_MEDIA_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public title: string = 'Título de destacado';

    public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener negritas ni enlaces';
  }
`;
export const HIGHLIGHTED_BANNER_BG_HTML = `
  <o-highlighted [title]="title" [description]="description" [image]="picture" [isBgLight]="true">
    <o-access #child title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm">
    </o-access>
  </o-highlighted>
`;

export const HIGHLIGHTED_GROUPING_IMAGE_HTML = `
  <div class="container">
    <div class="card-deck max-cards-2">
      <o-highlighted type="grouping" [title]="title" [description]="description" [image]="picture">
        <o-button #child link="#" size="lg"></o-button>
      </o-highlighted>
      <o-highlighted type="grouping" [title]="title" [description]="description" [image]="picture">
        <o-button #child size="lg" type="secondary" link="#" icon="file_download" text="Descargar" download=""></o-button>
      </o-highlighted>
    </div>
  </div>
`;

export const HIGHLIGHTED_GROUPING_VIDEO_HTML = `
  <div class="container">
    <div class="card-deck max-cards-2">
      <o-highlighted type="grouping" [title]="title" [description]="description" [video]="video">
        <a #child class="external" href="#" target="_blank">Enlace externo</a>
      </o-highlighted>
      <o-highlighted type="grouping" [title]="title" [description]="description" [iframe]="iframe">
        <a #child class="external" href="#" target="_blank">Enlace externo</a>
      </o-highlighted>
    </div>
  </div>
`;

export const HIGHLIGHTED_GROUPING_NO_MEDIA_HTML = `
  <div class="container">
    <div class="card-deck max-cards-2">
      <o-highlighted type="grouping" [title]="title" [description]="description">
        <o-access #child title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
      </o-highlighted>
      <o-highlighted type="grouping" [title]="title" [description]="description">
        <o-access #child title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
      </o-highlighted>
    </div>
  </div>
`;

export const HIGHLIGHTED_LATERAL_HTML = `
  <o-highlighted type="lateral" [title]="title" [description]="description">
    <o-button #child link="#" size="lg" [isExpandable]="true"></o-button>
  </o-highlighted>

  <o-highlighted type="lateral" [title]="title" [description]="description">
    <o-button #child size="lg" type="secondary" link="#" icon="file_download" text="Descargar" download="" [isExpandable]="true"></o-button>
  </o-highlighted>

  <o-highlighted type="lateral" [title]="title" [description]="description">
    <a #child class="external" href="#" target="_blank">Enlace externo</a>
  </o-highlighted>

  <o-highlighted type="lateral" [title]="title" [description]="description">
    <o-access #child title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>
  </o-highlighted>
`;

//HIGHLIGHTED API
export const HIGHLIGHTED_DATA_SOURCE = [
  {
    name: '@Input() <br/> type: HighlightedType',
    description: 'Se utiliza para establecer el tipo de destacado. Por defecto es banner.'
  },
  {
    name: '@Input() <br/> title: string',
    description: 'Establece el título del destacado.'
  },
  {
    name: '@Input() <br/> description: string',
    description: 'Define el contenido de texto principal del destacado.'
  },
  {
    name: '@Input() <br/> image: Media',
    description: 'Define la imagen principal del destacado.'
  },
  {
    name: '@Input() <br/> video: Media',
    description: 'Define el video principal del destacado.'
  },
  {
    name: '@Input() <br/> iframe: Media',
    description: 'Define el iframe principal del destacado.'
  },
  {
    name: '@Input() <br/> isBgLight: boolean',
    description: 'Propiedad de entrada para indicar si el fondo del destacado es claro. Por defecto es false.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  }
];

export const HIGHLIGHTED_TYPES = `
  type HighlightedType = 'banner' | 'grouping' | 'lateral';
`;

export const MEDIA_INTERFACE = `
  interface Media {
    src: string;
    alt: string;
    track: string;
    title: string;
    size: ImageMediaSizes;
  }
`;

export const MEDIA_INTERFACE_DATA_SOURCE = [
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
    description: 'Se utiliza para definir el tamaño de la imagen, en el caso de panel chico.'
  }
];

export const IMAGE_MEDIA_TYPES = `
  export type ImageMediaSizes = 'sm' | 'md' | 'lg';
`;
