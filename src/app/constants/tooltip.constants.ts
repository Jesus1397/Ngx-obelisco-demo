import { TooltipDirections } from '@gcba/ngx-obelisco/core/models';

interface Tooltip {
  name: string;
  direction: TooltipDirections[];
  text: string;
  classes?: boolean;
  exampleHTML?: string;
  exampleTS?: string;
}

export const TOOLTIP_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/tooltip/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/tooltip/examples'
  }
];

export const TOOLTIP_BEST_PRACTICES = [
  '<strong>Utilizar cuando un elemento necesita más contexto o explicación</strong> y puede ayudar a una persona usuaria a tomar decisiones.',
  '<strong>Usar para definir un término o elemento.</strong>',
  '<strong>Debe ser lo más conciso y claro posible.</strong> Mantenga el texto en 1 o 2 oraciones cortas. Si la información que necesita comunicar es más larga que eso, considere usar otro diseño.',
  '<strong>Si un tooltip está escrito en una oración completa (o tiene 2 o más oraciones), incluya un punto al final.</strong> Si es una frase corta o es solo el nombre de una herramienta, acción o ícono, no agregue un punto al final.'
];

export const TOOLTIP_BAD_PRACTICES = [
  'Dado que una información sobre herramientas desaparece cuando un usuario se aleja, <strong>no incluya información que sea pertinente para que la persona usuaria complete su tarea.</strong> Use texto de ayuda que esté siempre visible y accesible para información vital, como los campos obligatorios.',
  '<strong>No incluya elementos interactivos dentro de un tooltip.</strong> Los elementos interactivos en un tooltip son inaccesibles para algunas personas usuarias y son difíciles de usar para todas las personas usuarias, ya que el tooltip no recibe atención.'
];

export const DATA_SOURCE_TOOLTIP = [
  {
    name: '@Input() <br /> direction: TooltipDirections',
    description: 'Se utiliza para definir la dirección del Tooltip.'
  },
  {
    name: '@Input() <br /> description: string',
    description: 'Se utiliza para definir el contenido.'
  },
  {
    name: '@Input() <br /> classes: string;',
    description:
      'Acepta una cadena de texto con clases CSS. "icon-box" crea una caja para un icono y "bg-light" establece su color de fondo.'
  }
];

export const TOOLTIP_DIRECTIONS = `
  direction TooltipDirections =
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left'
    | 'left'
    | 'left-top'
    | 'left-bottom'
    | 'right'
    | 'right-top'
    | 'right-bottom';
`;

export const TOOLTIP_LIST: Tooltip[] = [
  {
    name: 'ARRIBA',
    direction: ['top-left', 'top', 'top-right'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
    <o-tooltip direction="top-left" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="top" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="top-right" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public text: string = 'Esta es la descripción de un tooltip.';
      }
    `
  },
  {
    name: 'DERECHA',
    direction: ['right-bottom', 'right', 'right-top'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
    <o-tooltip direction="right-bottom" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="right" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="right-top" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public text: string = 'Esta es la descripción de un tooltip.';
      }
    `
  },
  {
    name: 'IZQUIERDA',
    direction: ['left-bottom', 'left', 'left-top'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
    <o-tooltip direction="left-bottom" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="left" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="left-top" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public text: string = 'Esta es la descripción de un tooltip.';
      }
    `
  },
  {
    name: 'INFERIOR',
    direction: ['bottom-left', 'bottom', 'bottom-right'],
    text: 'Esta es la descripción de un tooltip.',
    exampleHTML: `
    <o-tooltip direction="bottom-left" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="bottom" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>

    <o-tooltip direction="bottom-right" [description]="description">
      <button type="button" class="btn btn-primary btn-icon">
        <i class="bx bxs-info-circle"></i>
        Botón
      </button>
    </o-tooltip>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public text: string = 'Esta es la descripción de un tooltip.';
      }
    `
  },
  {
    name: 'ICONOS',
    direction: ['left', 'top', 'right'],
    text: 'Esta es la descripción de un tooltip.',
    classes: true,
    exampleHTML: `
    <o-tooltip direction="left" [description]="description" classes="icon-box bg-light">
      <i class="bx bxs-info-circle"></i>
    </o-tooltip>

    <o-tooltip direction="top" [description]="description" classes="icon-box bg-light">
      <i class="bx bxs-info-circle"></i>
    </o-tooltip>

    <o-tooltip direction="right" [description]="description" classes="icon-box bg-light">
      <i class="bx bxs-info-circle"></i>
    </o-tooltip>
    `,
    exampleTS: `
      import { Component } from '@angular/core';

      @Component({
        selector: 'app-example',
        template: './app-example.component.html',
      })
      export class ExampleComponent {
        public text: string = 'Esta es la descripción de un tooltip.';
      }
    `
  }
];
