export const PROGRESS_BAR_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/progress-bar/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/progress-bar/examples'
  }
];

export const PROGRESS_BAR_TYPES = `
  type ProgressBarTypes = 'info' | 'success';
`;

export const DATA_SOURCE_PROGRESS_BAR_INPUT = [
  {
    name: '@Input() <br /> isSteps: boolean',
    description: 'Se utiliza para definir si mostrar el paso actual y el total de pasos o no. Por defecto es false.'
  },
  {
    name: '@Input() <br /> type: ProgressBarTypes',
    description: 'Se utiliza para definir el tipo de la barra de progreso.'
  },
  {
    name: '@Input() <br /> currentStep: number',
    description: 'Se utiliza para definir el paso actual.'
  },
  {
    name: '@Input() <br /> totalStep: number',
    description: 'Se utiliza para definir el total de pasos.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  }
];

export const DATA_SOURCE_PROGRESS_BAR_OUTPUT = [
  {
    name: '@Output() <br /> stopProgress: EventEmitter&lt;boolean&gt;',
    description:
      'Se utiliza para detener el proceso. <br/> Ocurrirá cuando se llegue al último paso y la barra de progreso se complete. <br/> El valor emitido será true.'
  }
];

export const PROGRESS_BAR_EXAMPLE_DIRECTIVE = `
  <o-progress-bar type="info" description='Descripción' [currentStep]="4" [totalSteps]="8"></o-progress-bar>

  <o-button oStepPrevious type="link" size="sm" text="Anterior"></o-button>
  <o-button oStepNext type="link" size="sm" text="Siguiente"></o-button>
`;

export const PROGRESS_BAR_EXAMPLE_FUNCIONALITY_HTML = `
  <o-progress-bar
    type="success"
    description='Descripción'
    [currentStep]="4"
    [totalSteps]="8"
    (stopSteps)="stopProgress($event)"
  ></o-progress-bar>

  <o-button type="link" size="sm" text="Anterior" (click)="previousStep()"></o-button>
  <o-button type="link" size="sm" text="Siguiente" (click)="nextStep()"></o-button>
`;

export const PROGRESS_BAR_EXAMPLE_FUNCIONALITY_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    constructor(private readonly progressBarService: StepService) {}

    public ngOnInit(): void {
      this.progressBarService.initialize();
    }

    public nextStep(): void {
      this.progressBarService.next();
    }

    public previousStep(): void {
      this.progressBarService.previous();
    }

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;

export const PROGRESS_BAR_EXAMPLE_NO_STEPS = `
  <o-progress-bar type="info" [currentStep]="5"></o-progress-bar>

  <o-progress-bar type="success" [currentStep]="4"></o-progress-bar>
`;
