export const STEPS_FORM_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/steps-form/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/steps-form/examples'
  }
];

export const DATA_SOURCE_STEPS_FORM_INPUT = [
  {
    name: '@Input() <br/> steps: string[]',
    description: 'Se utiliza para definir los pasos que se mostrarán en la barra de estado.'
  },
  {
    name: '@Input() <br /> customClasses: string',
    description: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.'
  }
];

export const DATA_SOURCE_STEPS_FORM_OUTPUT = [
  {
    name: '@Output <br /> stopSteps: EventEmitter&lt;boolean&gt;',
    description:
      'Se utiliza para detener el proceso. <br/> Ocurrirá cuando se llegue al último paso y la barra de progreso se complete. <br/> El valor emitido será true.'
  }
];

export const STEPS_FORM_EXAMPLE_DIRECTIVE_HTML = `
  <o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>

  <button oStepPrevious class="btn btn-sm btn-link mr-2">Anterior</button>
  <button oStepNext class="btn btn-sm btn-link">Siguiente</button>
`;

export const STEPS_FORM_EXAMPLE_DIRECTIVE_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    public steps = ['Paso 1', 'Paso 2', 'Paso 3'];

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;

export const STEPS_FORM_EXAMPLE_FUNCTIONALITY_HTML = `
  <o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>

  <button class="btn btn-sm btn-link mr-2" (click)="previousStep()">Anterior</button>
  <button class="btn btn-sm btn-link" (click)="nextStep()">Siguiente</button>
`;

export const STEPS_FORM_EXAMPLE_FUNCTIONALITY_TS = `
  import { Component, OnInit } from '@angular/core';
  import { StepService } from 'ngx-obelisco';

  @Component({
    selector: 'app-example',
    templateUrl: './app-example.component.html',
  })
  export class ExampleComponent implements OnInit {
    public steps = ['Paso 1', 'Paso 2', 'Paso 3'];

    constructor(private readonly stepsFormService: StepService) {}

    public ngOnInit(): void {
      this.stepsFormService.initialize();
    }

    public nextStep(): void {
      this.stepsFormService.next();
    }

    public previousStep(): void {
      this.stepsFormService.previous();
    }

    public stopProgress(event: boolean): void {
      if (event) {
        console.log('Completado');
      }
    }
  }
`;
