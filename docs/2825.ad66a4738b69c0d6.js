'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2825],
  {
    7824: (T, l, c) => {
      c.d(l, {
        B0: () => R,
        BG: () => P,
        C2: () => _,
        Db: () => x,
        F3: () => O,
        HQ: () => A,
        JX: () => t,
        Ji: () => E,
        Ju: () => g,
        N0: () => U,
        ND: () => C,
        O8: () => e,
        Rs: () => n,
        TZ: () => d,
        Vb: () => D,
        Yw: () => v,
        Zl: () => L,
        _v: () => s,
        be: () => o,
        fX: () => M,
        jS: () => u,
        j_: () => N,
        jb: () => F,
        lS: () => z,
        oT: () => h,
        r: () => I,
        rJ: () => f,
        sJ: () => Z,
        sO: () => b,
        zq: () => S
      });
      const p = 'access',
        a = [
          { title: 'Api', route: '/components/access/api' },
          { title: 'Ejemplos', route: '/components/access/examples' }
        ],
        e = a.map((r) => Object.assign(Object.assign({}, r), { route: r.route.replace(p, 'access/access-simple') })),
        d = a.map((r) => Object.assign(Object.assign({}, r), { route: r.route.replace(p, 'access/access-list') })),
        A = [
          {
            name: { data: '@Input() <br /> icon: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar el \xedcono que se mostrar\xe1 en el componente.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> title: string', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el t\xedtulo o encabezado del componente.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br />  description: string', customClasses: '' },
            description: {
              data: 'Se utiliza para proporcionar una descripci\xf3n o texto descriptivo del componente.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br />  size: Sizes', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el tama\xf1o del componente. Debe ser un valor de la enumeraci\xf3n "Sizes".',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br />  link: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar un enlace o URL relacionado con el componente.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br />  route: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir una ruta de navegaci\xf3n interna asociada con el componente.',
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
        E = "\n type Sizes = 'sm' | 'md' | 'lg';\n",
        C = '\n  <o-access title="Acceso"></o-access>\n',
        u = '\n  <o-access title="Acceso" description="Descripci\xf3n (Opcional)"></o-access>\n',
        S =
          '\n  <o-access\n    icon="bx bxs-info-circle"\n    title="Acceso"\n    description="Descripci\xf3n (Opcional)"\n    route="/home"\n  ></o-access>\n',
        s =
          '\n  <o-access\n    title="Acceso"\n    icon="bx bxs-info-circle"\n    route="/home"\n    description="Descripci\xf3n (Opcional)"\n  ></o-access>\n\n  <o-access\n    title="Acceso"\n    icon="bx bxs-info-circle"\n    route="/home"\n    description="Descripci\xf3n (Opcional)"\n    size="sm"\n  ></o-access>\n',
        o =
          '\n<div class="access-deck access-column max-cards-4">\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n</div>\n',
        t =
          '\n<div class="access-deck access-column max-cards-3">\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n</div>\n',
        n =
          '\n<div class="access-deck access-column max-cards-2">\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n</div>\n',
        g =
          '\n<div class="access-deck max-cards-1">\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n  <o-access title="Acceso" size="sm"></o-access>\n</div>\n',
        f = [
          {
            name: { data: '@Input() <br /> items: AccessList', customClasses: '' },
            description: { data: 'Se utiliza para definir elementos del componente.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        h = [
          {
            name: { data: 'header: AccessHeader', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'children: Access[] | AccessCategory[]', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'footer: AccessFootter', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          }
        ],
        x = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'description: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'icon: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'iconPositionLeft: boolean', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'iconText: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          }
        ],
        L = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'description: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'icon: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'link: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'route: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          }
        ],
        b = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'children: Access[]', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          }
        ],
        z = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'icon: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'link: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          },
          {
            name: { data: 'route: string', customClasses: '' },
            description: { data: 'Se utiliza para definir', customClasses: '' }
          }
        ],
        I =
          '\n  interface AccessList {\n    header?: AccessHeader;\n    children?: Access[] | AccessCategory[];\n    footer?: AccessFootter;\n  }\n',
        _ =
          '\n  interface AccessHeader {\n    title?: string;\n    description?: string;\n    icon?: string;\n    iconPositionLeft?: boolean;\n    iconText?: string;\n  }\n',
        O =
          '\n  interface Access {\n    title?: string;\n    description?: string;\n    icon?: string;\n    link?: string;\n    route?: string;\n  }\n',
        R = '\n  interface AccessCategory {\n    title?: string;\n    children?: Access[];\n  }\n',
        D =
          '\n  interface AccessFootter {\n    title?: string;\n    icon?: string;\n    link?: string;\n    route?: string;\n  }\n',
        v = '\n  <o-access-list [items]="items"></o-access-list>\n',
        M = {
          header: { title: 'T\xedtulo del acceso', description: 'Descripci\xf3n del acceso', iconText: 'N\xb0' },
          children: [
            { title: 'Acceso', description: 'Descripci\xf3n (Opcional)', icon: 'bx bxs-tag-alt', route: '/home' },
            { title: 'Acceso', description: 'Descripci\xf3n (Opcional)', icon: 'bx bxs-tag-alt', route: '/home' },
            { title: 'Acceso', description: 'Descripci\xf3n (Opcional)', icon: 'bx bxs-tag-alt', route: '/home' }
          ],
          footer: { title: 'Acceso grande', icon: 'info', route: '/home' }
        },
        N = {
          header: { title: 'T\xedtulo del acceso', description: 'Descripci\xf3n del acceso', iconText: 'N\xb0' },
          children: [
            {
              title: 'Categor\xeda 1',
              children: [
                { title: 'Acceso', description: 'Descripci\xf3n del acceso', icon: 'bx bxs-tag-alt', route: '/home' },
                { title: 'Acceso', description: 'Descripci\xf3n del acceso', icon: 'bx bxs-tag-alt', route: '/home' }
              ]
            },
            {
              title: 'Categor\xeda 2',
              children: [
                { title: 'Acceso', description: 'Descripci\xf3n del acceso', icon: 'bx bxs-tag-alt', route: '/home' },
                { title: 'Acceso', description: 'Descripci\xf3n del acceso', icon: 'bx bxs-tag-alt', route: '/home' }
              ]
            }
          ],
          footer: { title: 'Acceso grande', icon: 'info', route: '/home' }
        },
        F = {
          header: {
            title: 'T\xedtulo del acceso',
            description: 'Descripci\xf3n del acceso',
            icon: 'info',
            iconPositionLeft: !0
          },
          footer: { title: 'Acceso grande', icon: 'info', route: '/home' }
        },
        U =
          "\nimport { Component  } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './app-example.component.html',\n})\nexport class ExampleComponent {\n  public items: AccessList = {\n    header: {\n      title: 'T\xedtulo del acceso',\n      description: 'Descripci\xf3n del acceso',\n      icon: 'info',\n      iconPositionLeft: true\n    },\n    footer: {\n      title: 'Acceso grande',\n      icon: 'info',\n      route: '/home'\n    }\n  };\n}",
        P =
          "\nimport { Component  } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './app-example.component.html',\n})\nexport class ExampleComponent {\n  public items: AccessList = {\n    header: {\n      title: 'T\xedtulo del acceso',\n      description: 'Descripci\xf3n del acceso',\n      iconText: 'N\xb0'\n    },\n    children: [\n      {\n        title: 'Acceso',\n        description: 'Descripci\xf3n (Opcional)',\n        icon: 'bx bxs-tag-alt',\n        route: '/home'\n      },\n      {\n        title: 'Acceso',\n        description: 'Descripci\xf3n (Opcional)',\n        icon: 'bx bxs-tag-alt',\n        route: '/home'\n      },\n      {\n        title: 'Acceso',\n        description: 'Descripci\xf3n (Opcional)',\n        icon: 'bx bxs-tag-alt',\n        route: '/home'\n      }\n    ],\n    footer: {\n      title: 'Acceso grande',\n      icon: 'info',\n      route: '/home'\n    }\n  };\n}",
        Z =
          "\nimport { Component  } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './app-example.component.html',\n})\nexport class ExampleComponent {\n  public items: AccessList = {\n    header: {\n      title: 'T\xedtulo del acceso',\n      description: 'Descripci\xf3n del acceso',\n      iconText: 'N\xb0'\n    },\n    children: [\n      {\n        title: 'Categor\xeda 1',\n        children: [\n          {\n            title: 'Acceso',\n            description: 'Descripci\xf3n del acceso',\n            icon: 'bx bxs-tag-alt',\n            route: '/home'\n          },\n          {\n            title: 'Acceso',\n            description: 'Descripci\xf3n del acceso',\n            icon: 'bx bxs-tag-alt',\n            route: '/home'\n          }\n        ]\n      },\n      {\n        title: 'Categor\xeda 2',\n        children: [\n          {\n            title: 'Acceso',\n            description: 'Descripci\xf3n del acceso',\n            icon: 'bx bxs-tag-alt',\n            route: '/home'\n          },\n          {\n            title: 'Acceso',\n            description: 'Descripci\xf3n del acceso',\n            icon: 'bx bxs-tag-alt',\n            route: '/home'\n          }\n        ]\n      }\n    ],\n    footer: {\n      title: 'Acceso grande',\n      icon: 'info',\n      route: '/home'\n    }\n  };\n}";
    },
    2825: (T, l, c) => {
      c.r(l), c.d(l, { AccessModule: () => S });
      var p = c(9808),
        m = c(7538),
        i = c(2526),
        a = c(7824),
        e = c(4893),
        d = c(9384);
      const C = [
        {
          path: 'access-simple',
          component: (() => {
            class s {
              constructor() {
                this.accessSimpleNavigation = a.O8;
              }
            }
            return (
              (s.ɵfac = function (t) {
                return new (t || s)();
              }),
              (s.ɵcmp = e.Xpm({
                type: s,
                selectors: [['app-access-simple']],
                decls: 4,
                vars: 1,
                consts: [
                  [1, 'section'],
                  [3, 'routes'],
                  [1, 'content']
                ],
                template: function (t, n) {
                  1 & t &&
                    (e.TgZ(0, 'section', 0),
                    e._UZ(1, 'app-tabs-link', 1),
                    e.TgZ(2, 'div', 2),
                    e._UZ(3, 'router-outlet'),
                    e.qZA()()),
                    2 & t && (e.xp6(1), e.Q6J('routes', n.accessSimpleNavigation));
                },
                dependencies: [i.lC, d.T]
              })),
              s
            );
          })(),
          loadChildren: () =>
            Promise.all([c.e(7556), c.e(1519)])
              .then(c.bind(c, 1519))
              .then((s) => s.AccessSimpleModule)
        },
        {
          path: 'access-list',
          component: (() => {
            class s {
              constructor() {
                this.accessListNavigation = a.TZ;
              }
            }
            return (
              (s.ɵfac = function (t) {
                return new (t || s)();
              }),
              (s.ɵcmp = e.Xpm({
                type: s,
                selectors: [['app-access-list']],
                decls: 4,
                vars: 1,
                consts: [
                  [1, 'section'],
                  [3, 'routes'],
                  [1, 'content']
                ],
                template: function (t, n) {
                  1 & t &&
                    (e.TgZ(0, 'section', 0),
                    e._UZ(1, 'app-tabs-link', 1),
                    e.TgZ(2, 'div', 2),
                    e._UZ(3, 'router-outlet'),
                    e.qZA()()),
                    2 & t && (e.xp6(1), e.Q6J('routes', n.accessListNavigation));
                },
                dependencies: [i.lC, d.T]
              })),
              s
            );
          })(),
          loadChildren: () =>
            c
              .e(2277)
              .then(c.bind(c, 2277))
              .then((s) => s.AccessListModule)
        },
        { path: '**', pathMatch: 'full', redirectTo: 'access-simple' }
      ];
      let u = (() => {
          class s {}
          return (
            (s.ɵfac = function (t) {
              return new (t || s)();
            }),
            (s.ɵmod = e.oAB({ type: s })),
            (s.ɵinj = e.cJS({ imports: [i.Bz.forChild(C), i.Bz] })),
            s
          );
        })(),
        S = (() => {
          class s {}
          return (
            (s.ɵfac = function (t) {
              return new (t || s)();
            }),
            (s.ɵmod = e.oAB({ type: s })),
            (s.ɵinj = e.cJS({ imports: [p.ez, u, m.Z] })),
            s
          );
        })();
    }
  }
]);
