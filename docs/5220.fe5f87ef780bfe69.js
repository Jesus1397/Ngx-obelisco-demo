'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [5220],
  {
    7377: (L, a, e) => {
      e.d(a, { N: () => c });
      var l = e(9808),
        n = e(4893);
      let c = (() => {
        class s {}
        return (
          (s.ɵfac = function (r) {
            return new (r || s)();
          }),
          (s.ɵmod = n.oAB({ type: s })),
          (s.ɵinj = n.cJS({ imports: [l.ez] })),
          s
        );
      })();
    },
    3098: (L, a, e) => {
      e.d(a, {
        Gw: () => r,
        Ss: () => u,
        ZL: () => I,
        Zn: () => E,
        aI: () => T,
        dO: () => S,
        eV: () => C,
        lk: () => o,
        op: () => i,
        sO: () => t,
        u0: () => m
      });
      var l = e(2261);
      const r = [
          { title: 'Api', route: '/components/list/api' },
          { title: 'Ejemplos', route: '/components/list/examples' }
        ].map((d) => Object.assign(Object.assign({}, d), { route: d.route.replace('list', 'list/list-step') })),
        m = [
          {
            name: { data: '@Input() <br /> steps: Step[]', customClasses: '' },
            description: {
              data: 'Se utiliza para proporcionar un arreglo de objetos "Step" al componente.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> isStepLight: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para indicar si el estilo de los pasos debe ser "light" o no.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> isStepNumber: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para determinar si se deben mostrar n\xfameros en los pasos.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> size: Sizes', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el tama\xf1o de los pasos en el componente.',
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
        ],
        S = '\n  export interface Step {\n    title: string;\n    description: string | string[];\n  }',
        E = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para especificar el t\xedtulo del paso', customClasses: '' }
          },
          {
            name: { data: 'description: string', customClasses: '' },
            description: {
              data: 'Se utiliza para proporcionar la descripci\xf3n del paso, que puede ser un texto o una lista de textos.',
              customClasses: ''
            }
          }
        ],
        u = [
          {
            title: 'Instrucci\xf3n 1',
            description:
              'En esta descripci\xf3n de la instrucci\xf3n 1 se muestran los detalles principales de las acciones que deber\xe1 tomar el usuario luego.'
          },
          {
            title: 'Instrucci\xf3n 2',
            description:
              'En esta descripci\xf3n de la instrucci\xf3n 2 se muestran los detalles principales de las acciones que deber\xe1 tomar el usuario luego.'
          },
          {
            title: 'Instrucci\xf3n 3',
            description:
              'En esta descripci\xf3n de la instrucci\xf3n 3 se muestran los detalles principales de las acciones que deber\xe1 tomar el usuario luego.'
          },
          {
            title: 'Instrucci\xf3n 4',
            description:
              'En esta descripci\xf3n de la instrucci\xf3n 4 se muestran los detalles principales de las acciones que deber\xe1 tomar el usuario luego.'
          },
          {
            title: 'Instrucci\xf3n 5',
            description:
              'En esta descripci\xf3n de la instrucci\xf3n 5 se muestran los detalles principales de las acciones que deber\xe1 tomar el usuario luego.'
          }
        ],
        t = '\n  <o-list-step [steps]="listStepItems"></o-list-step>\n',
        i = '\n  <o-list-step [steps]="listStepItems" [isStepLight]="true"></o-list-step>\n',
        o = '\n  <o-list-step [steps]="listStepItems" [isStepNumber]="true"></o-list-step>\n',
        T = '\n  <o-list-step [steps]="listStepItems" size="lg"></o-list-step>\n',
        I = '\n  <o-list-step [steps]="listStepItems" size="sm"></o-list-step>\n',
        C = `\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public listStepItems: Step[] = ${(0,
        l.H)(u)}\n    ];\n  }`;
    },
    5220: (L, a, e) => {
      e.r(a), e.d(a, { ListModule: () => u });
      var l = e(9808),
        n = e(2526),
        c = e(3098),
        s = e(4893),
        p = e(9384);
      const m = [
        {
          path: 'list-step',
          component: (() => {
            class t {
              constructor() {
                this.navigation = c.Gw;
              }
            }
            return (
              (t.ɵfac = function (o) {
                return new (o || t)();
              }),
              (t.ɵcmp = s.Xpm({
                type: t,
                selectors: [['app-list-step']],
                decls: 4,
                vars: 1,
                consts: [
                  [1, 'section'],
                  [3, 'routes'],
                  [1, 'content']
                ],
                template: function (o, T) {
                  1 & o &&
                    (s.TgZ(0, 'section', 0),
                    s._UZ(1, 'app-tabs-link', 1),
                    s.TgZ(2, 'div', 2),
                    s._UZ(3, 'router-outlet'),
                    s.qZA()()),
                    2 & o && (s.xp6(1), s.Q6J('routes', T.navigation));
                },
                dependencies: [n.lC, p.T]
              })),
              t
            );
          })(),
          loadChildren: () =>
            e
              .e(1908)
              .then(e.bind(e, 1908))
              .then((t) => t.ListStepModule)
        },
        { path: '**', pathMatch: 'full', redirectTo: 'list-step' }
      ];
      let S = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = s.oAB({ type: t })),
          (t.ɵinj = s.cJS({ imports: [n.Bz.forChild(m), n.Bz] })),
          t
        );
      })();
      var E = e(7377);
      let u = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = s.oAB({ type: t })),
          (t.ɵinj = s.cJS({ imports: [l.ez, S, E.N] })),
          t
        );
      })();
    }
  }
]);
