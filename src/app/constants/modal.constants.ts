import { DataSource } from 'ngx-obelisco-example/core/models';

export const MODAL_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/modal/api'
  },
  {
    title: 'Ejemplos',
    route: '/components/modal/examples'
  }
];

export const MODAL_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> dataTarget: string', customClasses: '' },
    description: { data: 'Se utiliza para identificar el componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> title: string', customClasses: '' },
    description: { data: 'Se utiliza para mostrar el título del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: { data: 'Se utiliza para mostrar la descripción del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> subtitle: string', customClasses: '' },
    description: { data: 'Se utiliza para mostrar el subtitulo del componente.', customClasses: '' }
  },
  {
    name: { data: '@Input() <br/> isBordered: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para mostrar la linea divisora entre el encabezado y cuerpo del componente.',
      customClasses: ''
    }
  },
  {
    name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
    description: {
      data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
      customClasses: ''
    }
  }
];

export const MODAL_EXAMPLE_CONFIRMATION_HTML = `
  <o-button text="Ver modal" dataToggle="modal" dataTarget="exampleModal"></o-button>
  <o-modal
    dataTarget="exampleModal"
    title="¡Importante!"
    description="Antes de realizar la ficha de salud,
    tené en cuenta haber realizado los pasos previos correspondientes."
    [isBordered]="true"
  >
    <o-button text="Volver atrás" type="link" dataDismiss="modal"></o-button>
    <o-button text="Continuar"></o-button>
  </o-modal>`;

export const MODAL_EXAMPLE_DANGER_HTML = `
  <o-button text="Ver modal" dataToggle="modal" dataTarget="dangerModal"></o-button>
  <o-modal
    dataTarget="dangerModal"
    title="Eliminar documento"
    description="El documento que seleccionaste será eliminado."
    [isBordered]="true"
  >
    <o-button text="Cancelar" type="secondary" [isOutline]="true" dataDismiss="modal"></o-button>
    <o-button text="Eliminar" type="danger"></o-button>
  </o-modal>`;

export const MODAL_EXAMPLE_RECOGNITION_HTML = `
  <o-button text="Ver modal" dataToggle="modal" dataTarget="recognitionModal"></o-button>
  <o-modal
    dataTarget="recognitionModal"
    subtitle="CARGA EXITOSA"
    title="Los archivos se cargaron correctamente"
  >
    <o-button text="Aceptar"></o-button>
  </o-modal>`;
