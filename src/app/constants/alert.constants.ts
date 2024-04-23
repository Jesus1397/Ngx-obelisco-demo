import { DataSource } from '@gcba/ngx-obelisco/core/models';

export const ALERT_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/alert/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/alert/examples'
  }
];
export const ALERT_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: AlertTypes', customClasses: '' },
    description: { data: 'Se utiliza para establecer el tipo de la alerta. Por defecto es danger.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isDismissible: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para definir si se mostrará el componente con cierre. Por defecto es false.',
      customClasses: ''
    }
  }
];

export const ALERT_TYPES = `
  type AlertTypes = 'primary' | 'success' | 'danger' | 'info';
`;

export const ALERT_EXAMPLE_COLORS = `
  <div oAlert type="info">
    <p>Esta es la descripción de una alerta de información.</p>
  </div>

  <div oAlert type="primary">
    <p>Esta es la descripción de una alerta de advertencia.</p>
  </div>

  <div oAlert type="success">
    <p>Esta es la descripción de una alerta de éxito.</p>
  </div>

  <div oAlert>
    <p>Esta es la descripción de una alerta de error.</p>
  </div>
`;

export const ALERT_EXAMPLE_DISMISSIBLE = `
  <div oAlert type="info" [isDismissible]="true">
    <p>Esta es la descripción de una alerta de información.</p>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span class="material-icons-round">close</span>
    </button>
  </div>
`;

export const ALERT_EXAMPLE_HIGHLIGHT = `
  <div oAlert type="info">
    <p>
      <strong>Este es un destacado de una alerta de información.</strong>
      Esta es la descripción de una alerta de información que continua al texto destacado.
    </p>
  </div>
`;

export const ALERT_EXAMPLE_HIGHLIGHT_LINK = `
  <div oAlert type="info">
    <p>
      <strong>Este es un destacado de una alerta (opcional).</strong>
      Un texto simple para una alerta simple, incluso <a [routerLink]="['/']">con hipervínculos</a>
    </p>
  </div>
`;

export const ALERT_EXAMPLE_LISTS = `
  <div oAlert>
    <strong>Este es un destacado de una alerta (opcional).</strong>
    <ol class="list-links">
      <li><a href="#">Ancla al error 1</a></li>
      <li><a href="#">Ancla al error 2</a></li>
      <li><a href="#">Ancla al error 3</a></li>
    </ol>
  </div>

  <div oAlert>
    <strong>Este es un destacado de una alerta (opcional).</strong>
    <ol>
      <li>Ancla al error 1</li>
      <li>Ancla al error 2</li>
      <li>Ancla al error 3</li>
    </ol>
  </div>
`;
