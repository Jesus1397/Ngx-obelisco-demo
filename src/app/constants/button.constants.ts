import { DataSource } from 'ngx-obelisco-example/core/models';

export const BUTTON_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/button/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/button/examples'
  }
];

/* BUTTON-API */
export const BUTTON_GENERAL_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: ButtonTypes', customClasses: '' },
    description: { data: 'Se utiliza para establecer el tipo de botón. Por defecto es primary.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isOutline: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si es un botón con borde. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> text: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el texto del botón. En el caso de que no presente ícono o spinner, por defecto es "Botón".',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> size: Sizes', customClasses: '' },
    description: { data: 'Se utiliza para establecer el tamaño del botón. Por defecto es mediano.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isExpandable: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si es un botón expandible. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> icon: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el ícono del botón. Se debe utilizar íconos de boxicons o material icons round.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> ariaLabel: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo aria-label, en el caso de que el botón no posea texto.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> spinner: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir si el botón tiene un spinner.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> iconPositionRight: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir la posición del ícono. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> spinnerPositionRight: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir la posición del spinner. Por defecto es false.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const BUTTON_LINK_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> route: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir la ruta de la etiqueta &lt;a&gt;, mediante el routerLink de Angular.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> link: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el link de la etiqueta &lt;a&gt;, mediante el href de HTML.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> target: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo target de la etiqueta &lt;a&gt;. Por defecto es "_blank".',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> download: string', customClasses: '' },
    description: { data: 'Se utiliza para definir el atributo download de la etiqueta &lt;a&gt;.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> rel: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo rel de la etiqueta &lt;a&gt;. Por defecto es "noreferrer".',
      customClasses: ''
    }
  }
];

export const BUTTON_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> isDisabled: boolean', customClasses: '' },
    description: { data: 'Se utiliza para definir tiene el atributo "disabled".', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> dataTarget: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-target" de la etiqueta &lt;button&gt;.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> dataToggle: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-toggle" de la etiqueta &lt;button&gt;.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br/> dataDismiss: string', customClasses: '' },
    description: {
      data: 'Se utiliza para definir el atributo "data-dismiss" de la etiqueta &lt;button&gt;.',
      customClasses: ''
    }
  }
];

export const BUTTON_TYPES = `
  type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'link' ;
`;

/* BUTTON-EXAMPLES */
export const BUTTON_EXAMPLE_TYPES = `
  <o-button text="Botón" (click)="alert()"></o-button>
  <o-button text="Botón" type="secondary" (click)="alert()"></o-button>
  <o-button text="Botón" type="success" (click)="alert()"></o-button>
  <o-button text="Botón" type="danger" (click)="alert()"></o-button>
  <o-button text="Botón" type="link" (click)="alert()"></o-button>
  <o-button text="Botón" text="Enlace" link="https://www.google.com/"></o-button>

  <o-button text="Botón" [isOutline]="true" (click)="alert()"></o-button>
  <o-button text="Botón" type="secondary" [isOutline]="true" (click)="alert()"></o-button>
  <o-button text="Botón" type="success" [isOutline]="true" (click)="alert()"></o-button>
  <o-button text="Botón" type="danger" [isOutline]="true" (click)="alert()"></o-button>
  <o-button text="Botón" type="link" [isOutline]="true" (click)="alert()"></o-button>
  <o-button text="Botón" text="Enlace" [isOutline]="true" link="https://www.google.com/"></o-button>
`;
export const BUTTON_EXAMPLE_TYPES_TS = `
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html',
})

export class ExampleComponent {
  public alert() {
    alert('Botón');
  }
}`;

export const BUTTON_EXAMPLE_SIZES = `
  <o-button text="Botón" size="sm"></o-button>
  <o-button text="Botón"></o-button>
  <o-button text="Botón" size="lg"></o-button>
`;

export const BUTTON_EXAMPLE_BLOCK = `
  <o-button text="Expandible" [isExpandable]="true"></o-button>
`;

export const BUTTON_EXAMPLE_ICON = `
  <o-button size="sm" icon="info" text="Botón"></o-button>
  <o-button icon="bx bxs-info-circle" text="Botón"></o-button>
  <o-button size="lg" icon="info" text="Botón"></o-button>

  <o-button size="sm" icon="info" ariaLabel="Botón"></o-button>
  <o-button icon="bx bxs-info-circle" ariaLabel="Botón"></o-button>
  <o-button size="lg" icon="info" ariaLabel="Botón"></o-button>
`;

export const BUTTON_EXAMPLE_SPINNER = `
  <o-button [spinner]="true" text="Botón"></o-button>
  <o-button type="secondary" [spinner]="true" text="Botón"></o-button>
  <o-button type="success" [spinner]="true" text="Botón"></o-button>
  <o-button type="danger" [spinner]="true" text="Botón"></o-button>
  <o-button type="link" [spinner]="true" text="Botón"></o-button>

  <o-button [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="secondary" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="success" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="danger" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
  <o-button type="link" [isOutline]="true" [spinner]="true" text="Botón"></o-button>
`;
