'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2497],
  {
    2069: (v, l, t) => {
      t.d(l, {
        DR: () => P,
        DZ: () => O,
        FU: () => b,
        GU: () => c,
        Jl: () => M,
        Ku: () => A,
        T1: () => a,
        TF: () => C,
        Ul: () => L,
        aO: () => x,
        bX: () => S,
        cq: () => g,
        eG: () => T,
        fr: () => R,
        i1: () => U,
        j3: () => u,
        jP: () => H,
        mw: () => _,
        nm: () => W,
        qw: () => f,
        tW: () => h,
        uL: () => w,
        uk: () => k,
        vV: () => e,
        wY: () => n,
        x_: () => E
      });
      var d = t(2261);
      const i = (s, I, N) =>
          `\n  import { Component  } from '@angular/core';\n  import { ${N} } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public ${s}: ${N}[] = ${(0,
          d.H)(I)}\n    ];\n  }\n`,
        o = 'dropdown',
        m = [
          { title: 'Api', route: '/components/dropdown/api' },
          { title: 'Ejemplos', route: '/components/dropdown/examples' }
        ],
        g = m.map((s) =>
          Object.assign(Object.assign({}, s), { route: s.route.replace(o, 'dropdown/dropdown-navigation') })
        ),
        u = m.map((s) =>
          Object.assign(Object.assign({}, s), { route: s.route.replace(o, 'dropdown/dropdown-selection') })
        ),
        w = [
          {
            name: { data: '@Input() dataTarget: string', customClasses: '' },
            description: { data: 'Asigna un destino de datos.', customClasses: '' }
          },
          {
            name: { data: '@Input() title: string', customClasses: '' },
            description: { data: 'Asigna un t\xedtulo.', customClasses: '' }
          },
          {
            name: { data: '@Input() iconLeft: string', customClasses: '' },
            description: { data: 'Asigna un \xedcono a la izquierda.', customClasses: '' }
          },
          {
            name: { data: '@Input() iconRight: string', customClasses: '' },
            description: { data: 'Asigna un \xedcono a la derecha.', customClasses: '' }
          },
          {
            name: { data: '@Input() isAnimatedIconLeft: boolean', customClasses: '' },
            description: { data: 'Habilita animaci\xf3n para el \xedcono izquierdo.', customClasses: '' }
          },
          {
            name: { data: '@Input() isAnimatedIconRight: boolean', customClasses: '' },
            description: { data: 'Habilita animaci\xf3n para el \xedcono derecho.', customClasses: '' }
          },
          {
            name: { data: '@Input() children: DropdownNavigationItem[]', customClasses: '' },
            description: { data: 'Asigna elementos de men\xfa desplegable.', customClasses: '' }
          },
          {
            name: { data: '@Input() isPositionRight: boolean', customClasses: '' },
            description: { data: 'Coloca el men\xfa desplegable a la derecha.', customClasses: '' }
          },
          {
            name: { data: '@Input() isBordered: boolean', customClasses: '' },
            description: { data: 'Habilita el borde.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        C =
          '\n  interface DropdownNavigationItem {\n    id?: string;\n    text?: string;\n    textRight?: boolean;\n    iconLeft?: string;\n    iconRight?: string;\n    isAnimatedIconLeft?: boolean;\n    isAnimatedIconRight?: boolean;\n    textDanger?: boolean;\n    route?: string;\n    link?: string;\n    isDisabled?: boolean;\n    children?: DropdownNavigationItem[];\n    customClasses?: string;\n  }\n',
        e = [
          {
            name: { data: 'id: string', customClasses: '' },
            description: { data: 'Identificador \xfanico para el elemento.', customClasses: '' }
          },
          {
            name: { data: 'text: string', customClasses: '' },
            description: { data: 'Texto descriptivo o t\xedtulo.', customClasses: '' }
          },
          {
            name: { data: 'textRight: boolean', customClasses: '' },
            description: { data: 'Controla la alineaci\xf3n del texto a la derecha.', customClasses: '' }
          },
          {
            name: { data: 'iconLeft: string', customClasses: '' },
            description: { data: '\xcdcono que aparece en la parte izquierda.', customClasses: '' }
          },
          {
            name: { data: 'iconRight: string', customClasses: '' },
            description: { data: '\xcdcono que aparece en la parte derecha.', customClasses: '' }
          },
          {
            name: { data: 'isAnimatedIconLeft: string', customClasses: '' },
            description: { data: 'Habilita animaci\xf3n para el \xedcono izquierdo.', customClasses: '' }
          },
          {
            name: { data: 'isAnimatedIconRight: string', customClasses: '' },
            description: { data: 'Habilita animaci\xf3n para el \xedcono derecho.', customClasses: '' }
          },
          {
            name: { data: 'textDanger: boolean', customClasses: '' },
            description: { data: 'Indica si el texto tiene un significado de alerta o peligro.', customClasses: '' }
          },
          {
            name: { data: 'route: string', customClasses: '' },
            description: { data: 'Ruta de navegaci\xf3n asociada al elemento.', customClasses: '' }
          },
          {
            name: { data: 'link: string', customClasses: '' },
            description: { data: 'Enlace o URL relacionado con el elemento.', customClasses: '' }
          },
          {
            name: { data: 'isDisabled: boolean', customClasses: '' },
            description: { data: 'Habilita o deshabilita la interacci\xf3n con el elemento.', customClasses: '' }
          },
          {
            name: { data: 'children: DropdownNavigationItem[]', customClasses: '' },
            description: { data: 'Elementos secundarios que se despliegan en un men\xfa.', customClasses: '' }
          },
          {
            name: { data: 'customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        a = [
          {
            name: { data: '@Input() dataTarget: string', customClasses: '' },
            description: { data: 'Destino de los datos para la selecci\xf3n.', customClasses: '' }
          },
          {
            name: { data: '@Input() title: string', customClasses: '' },
            description: { data: 'T\xedtulo descriptivo para la selecci\xf3n.', customClasses: '' }
          },
          {
            name: { data: '@Input() isSelectionMultiple: boolean', customClasses: '' },
            description: { data: 'Permite m\xfaltiples selecciones si es verdadero.', customClasses: '' }
          },
          {
            name: { data: '@Input() iconLeft: string', customClasses: '' },
            description: { data: '\xcdcono que aparece a la izquierda.', customClasses: '' }
          },
          {
            name: { data: '@Input() iconRight: string', customClasses: '' },
            description: { data: '\xcdcono que aparece a la derecha.', customClasses: '' }
          },
          {
            name: { data: '@Input() isAnimatedIconLeft: boolean', customClasses: '' },
            description: {
              data: 'Habilita animaci\xf3n para el \xedcono izquierdo si es verdadero.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() isAnimatedIconRight: boolean', customClasses: '' },
            description: { data: 'Habilita animaci\xf3n para el \xedcono derecho si es verdadero.', customClasses: '' }
          },
          {
            name: { data: '@Input() dropSelectItems: DropdownSelectionItem[]', customClasses: '' },
            description: { data: 'Elementos de selecci\xf3n disponibles.', customClasses: '' }
          },
          {
            name: { data: '@Input() isBordered: boolean', customClasses: '' },
            description: { data: 'Habilita un borde si es verdadero.', customClasses: '' }
          }
        ],
        n = [
          {
            name: {
              data: '@Output() selectedItemChange: EventEmitter<DropdownSelectionItem | DropdownSelectionItem[]>',
              customClasses: ''
            },
            description: {
              data: 'Se utiliza para emitir el elemento o elementos seleccionados en el componente desplegable. Puede emitir un objeto de tipo DropdownSelectionItem o un arreglo de objetos DropdownSelectionItem, dependiendo de si se seleccionan radios o checkboxes en el componente.',
              customClasses: ''
            }
          }
        ],
        c =
          '\n  interface DropdownSelectionItem {\n    id?: string;\n    title?: string;\n    name?: string;\n    value?: string;\n    isDisabled?: boolean;\n    customClasses?: string;\n  }\n',
        A = [
          {
            name: { data: 'id: string', customClasses: '' },
            description: { data: 'Identificador \xfanico del elemento.', customClasses: '' }
          },
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Texto descriptivo o t\xedtulo.', customClasses: '' }
          },
          {
            name: { data: 'name: string', customClasses: '' },
            description: { data: 'Nombre asociado al elemento.', customClasses: '' }
          },
          {
            name: { data: 'value: string', customClasses: '' },
            description: { data: 'Valor o contenido del elemento.', customClasses: '' }
          },
          {
            name: { data: 'isDisabled: boolean', customClasses: '' },
            description: { data: 'Habilita o deshabilita la interacci\xf3n con el elemento.', customClasses: '' }
          },
          {
            name: { data: 'customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        O = [
          { iconLeft: 'info', text: 'Opci\xf3n de navegaci\xf3n', iconRight: 'info', link: 'https://www.google.com/' },
          {
            iconLeft: 'info',
            text: 'Opci\xf3n de navegaci\xf3n',
            iconRight: 'info',
            link: 'https://www.google.com/',
            textPosition: 'right'
          },
          {
            iconLeft: 'info',
            text: 'Opci\xf3n de navegaci\xf3n',
            iconRight: 'info',
            link: 'https://www.google.com/',
            isDisabled: !0
          },
          { isItemDanger: !0, iconLeft: 'logout', text: 'Cerrar sesi\xf3n', link: 'https://www.google.com/' }
        ],
        h = [
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { isItemDanger: !0, iconLeft: 'logout', text: 'Cerrar sesi\xf3n', link: 'https://www.google.com/' }
        ],
        R = [
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { isItemDanger: !0, text: 'Cerrar sesi\xf3n', link: 'https://www.google.com/', iconRight: 'logout' }
        ],
        E = [
          {
            text: 'Opci\xf3n en cascada',
            iconRight: 'expand_more',
            isAnimatedIconRight: !0,
            children: [
              { text: 'Opci\xf3n de navegaci\xf3n', route: 'components' },
              { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
              { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' }
            ]
          },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { text: 'Opci\xf3n de navegaci\xf3n', link: 'https://www.google.com/' },
          { isItemDanger: !0, text: 'Cerrar sesi\xf3n', link: 'https://www.google.com/', iconLeft: 'logout' }
        ],
        b =
          '\n  <o-dropdown-navigation\n    dataTarget="dropdown1"\n    [dropNavItems]="dropdownItemsIcons"\n    iconRight="expand_more"\n    title="Desplegable"\n    [isAnimatedIconRight]="true"\n  ></o-dropdown-navigation>\n\n  <o-dropdown-navigation\n    dataTarget="dropdown2"\n    [dropNavItems]="dropdownItemsIcons"\n    title="Desplegable"\n    iconLeft="menu"\n  ></o-dropdown-navigation>\n\n  <o-dropdown-navigation\n    dataTarget="dropdown3"\n    [dropNavItems]="dropdownItemsIcons"\n    iconLeft="menu"\n  ></o-dropdown-navigation>\n',
        S =
          '\n  <o-dropdown-navigation\n    dataTarget="dropdownLeft"\n    [dropNavItems]="dropdownItemsLeft"\n    title="Desplegable Izq."\n    iconRight="expand_more"\n    [isAnimatedIconRight]="true"\n  ></o-dropdown-navigation>\n\n  <o-dropdown-navigation\n    dataTarget="dropdownRight"\n    [dropNavItems]="dropdownItemsRight"\n    iconLeft="expand_more"\n    title="Desplegable Der."\n    [isPositionRight]="true"\n    [isAnimatedIconRight]="true"\n  ></o-dropdown-navigation>\n',
        f =
          '\n  <o-dropdown-navigation\n    dataTarget="dropdownCascade"\n    [dropNavItems]="dropdownItemsWithSubitems"\n    title="Desplegable"\n  ></o-dropdown-navigation>\n',
        L = i('dropdownItemsIcons', O, 'DropdownNavigationItem'),
        P =
          ((I = R),
          `\n  import { Component  } from '@angular/core';\n  import { DropdownNavigationItem } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public dropdownItemsLeft: DropdownNavigationItem[] = ${(0,
          d.H)(h)}\n    ];\n\n    public dropdownItemsRight: DropdownNavigationItem[] = ${(0, d.H)(I)}\n    ];\n  }\n`),
        _ =
          "\nimport { Component  } from '@angular/core';\nimport { DropdownNavigationItem } from 'ngx-obelisco-example/core/models';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './app-example.component.html',\n})\nexport class ExampleComponent {\n  public dropdownItemsWithSubitems: DropdownNavigationItem[] = [\n    {\n      text: 'Opci\xf3n en cascada',\n      iconRight: 'expand_more',\n      isAnimatedIconRight: true,\n      children: [\n        {\n          text: 'Opci\xf3n de navegaci\xf3n',\n          route: 'components'\n        },\n        {\n          text: 'Opci\xf3n de navegaci\xf3n',\n          link: 'https://www.google.com/'\n        },\n        {\n          text: 'Opci\xf3n de navegaci\xf3n',\n          link: 'https://www.google.com/'\n        }\n      ]\n    },\n    {\n      text: 'Opci\xf3n de navegaci\xf3n',\n      link: 'https://www.google.com/'\n    },\n    {\n      text: 'Opci\xf3n de navegaci\xf3n',\n      link: 'https://www.google.com/'\n    },\n    {\n      text: 'Opci\xf3n de navegaci\xf3n',\n      link: 'https://www.google.com/'\n    },\n    {\n      textDanger: true,\n      text: 'Cerrar sesi\xf3n',\n      link: 'https://www.google.com/',\n      iconLeft: 'logout'\n    }\n  ];\n}\n",
        x = [
          { id: 'radioOne', text: 'Radio 1', name: 'radio', value: 'radioOne' },
          { id: 'radioTwo', text: 'Radio 2', name: 'radio', value: 'radioTwo' },
          { id: 'radioThree', text: 'Radio 3', name: 'radio', value: 'radioThree', isDisabled: !0 }
        ],
        T = [
          { id: 'checkboxOne', text: 'Checkbox 1', name: 'checkbox', value: 'checkboxOne' },
          { id: 'checkboxTwo', text: 'Checkbox 2', name: 'checkbox', value: 'checkboxTwo' },
          { id: 'checkboxThree', text: 'Checkbox 3', name: 'checkbox', value: 'checkboxThree', isDisabled: !0 }
        ],
        M =
          '\n  <o-dropdown-selection\n    dataTarget="dropdownRadio"\n    title="Desplegable"\n    iconLeft="person"\n    iconRight="expand_more"\n    [dropSelectItems]="dropdownItemsRadio"\n    [isAnimatedIconRight]="true"\n  ></o-dropdown-selection>\n',
        k =
          '\n  <o-dropdown-selection\n    dataTarget="dropdownChecbox"\n    title="Desplegable"\n    iconLeft="person"\n    iconRight="expand_more"\n    [dropSelectItems]="dropdownItemsCheckbox"\n    [isAnimatedIconRight]="true"\n    [isSelectionMultiple]="true"\n  ></o-dropdown-selection>\n',
        W =
          '\n  <o-dropdown-selection\n    dataTarget="dropdownRadioSm"\n    title="Desplegable"\n    iconRight="expand_more"\n    [dropSelectItems]="dropdownItemsRadio"\n    [isAnimatedIconRight]="true"\n    size="sm"\n  ></o-dropdown-selection>\n\n  <o-dropdown-selection\n    dataTarget="dropdownRadioMd"\n    title="Desplegable"\n    iconRight="expand_more"\n    [dropSelectItems]="dropdownItemsRadio"\n    [isAnimatedIconRight]="true"\n  ></o-dropdown-selection>\n\n  <o-dropdown-selection\n    dataTarget="dropdownRadioLg"\n    title="Desplegable"\n    iconRight="expand_more"\n    [dropSelectItems]="dropdownItemsRadio"\n    [isAnimatedIconRight]="true"\n    size="lg"\n  ></o-dropdown-selection>\n',
        H = i('dropdownItemsRadio', x, 'DropdownSelectionItem'),
        U = i('dropdownItemsCheckbox', T, 'DropdownSelectionItem');
      var I;
    },
    2497: (v, l, t) => {
      t.r(l), t.d(l, { DropdownModule: () => C });
      var d = t(9808),
        i = t(2526),
        r = t(2069),
        o = t(4893),
        p = t(9384);
      const g = [
        {
          path: 'dropdown-navigation',
          component: (() => {
            class e {
              constructor() {
                this.navigation = r.cq;
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵcmp = o.Xpm({
                type: e,
                selectors: [['app-dropdown-navigation']],
                decls: 4,
                vars: 1,
                consts: [
                  [1, 'section'],
                  [3, 'routes'],
                  [1, 'content']
                ],
                template: function (n, c) {
                  1 & n &&
                    (o.TgZ(0, 'section', 0),
                    o._UZ(1, 'app-tabs-link', 1),
                    o.TgZ(2, 'div', 2),
                    o._UZ(3, 'router-outlet'),
                    o.qZA()()),
                    2 & n && (o.xp6(1), o.Q6J('routes', c.navigation));
                },
                dependencies: [i.lC, p.T]
              })),
              e
            );
          })(),
          loadChildren: () =>
            Promise.all([t.e(8592), t.e(1648)])
              .then(t.bind(t, 1648))
              .then((e) => e.DropdownNavigationModule)
        },
        {
          path: 'dropdown-selection',
          component: (() => {
            class e {
              constructor() {
                this.navigation = r.j3;
              }
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵcmp = o.Xpm({
                type: e,
                selectors: [['app-dropdown-selection']],
                decls: 4,
                vars: 1,
                consts: [
                  [1, 'section'],
                  [3, 'routes'],
                  [1, 'content']
                ],
                template: function (n, c) {
                  1 & n &&
                    (o.TgZ(0, 'section', 0),
                    o._UZ(1, 'app-tabs-link', 1),
                    o.TgZ(2, 'div', 2),
                    o._UZ(3, 'router-outlet'),
                    o.qZA()()),
                    2 & n && (o.xp6(1), o.Q6J('routes', c.navigation));
                },
                dependencies: [i.lC, p.T]
              })),
              e
            );
          })(),
          loadChildren: () =>
            Promise.all([t.e(8592), t.e(2737)])
              .then(t.bind(t, 2737))
              .then((e) => e.DropdownSelectionModule)
        },
        { path: '**', pathMatch: 'full', redirectTo: 'dropdown-navigation' }
      ];
      let u = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({ imports: [i.Bz.forChild(g), i.Bz] })),
          e
        );
      })();
      var w = t(7538);
      let C = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({ imports: [d.ez, u, w.Z] })),
          e
        );
      })();
    }
  }
]);
