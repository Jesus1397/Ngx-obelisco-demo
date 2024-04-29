import { DataSource } from 'ngx-obelisco-example/core/models';

import { MediaIframe } from 'ngx-obelisco-example/core/models';

export const MAP_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/map/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/map/examples'
  }
];

export const MAP_HTML = `
  <o-map
    [title]="'Ubicación'"
    [description]="'Uspallata 3160'"
    [iframe]="iframe"
  >
    <o-button
      text="Cómo llego"
      [isExpandable]="true"
      link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"
      target="_blank"
      rel="noreferrer"
    ></o-button>
  </o-map>
`;

export const MAP_IFRAME: MediaIframe = {
  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
  title: 'Mapa de Buenos Aires'
};

export const MAP_TS = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-example',
    template: './app-example.component.html',
  })
  export class ExampleComponent {
    public iframe: MediaIframe = {
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
      title: 'Mapa de Buenos Aires'
    };
  }
`;

export const MAP_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: { data: 'Establece el título del destacado.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: { data: 'Define la dirección del mapa.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> iframe: MediaIframe' },
    description: { data: 'Propiedad para agregar el iframe del mapa.' }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const MEDIAIFRAME_MAP_INTERFACE = `
  interface Media {
    src: string;
  }

  interface MediaIframe extends Media {
    title: string;
  }
`;
export const MEDIAIFRAME_MAP_DATA_SOURCE = [
  {
    name: { data: 'src: string' },
    description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
  },
  {
    name: { data: 'title: string' },
    description: { data: 'Se utiliza para definir el título del iframe.' }
  }
];
