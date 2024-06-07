'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [7340],
  {
    7538: (g, d, a) => {
      a.d(d, { Z: () => l });
      var r = a(2526),
        n = a(9808),
        e = a(4893);
      let l = (() => {
        class c {}
        return (
          (c.ɵfac = function (u) {
            return new (u || c)();
          }),
          (c.ɵmod = e.oAB({ type: c })),
          (c.ɵinj = e.cJS({ imports: [n.ez, r.Bz] })),
          c
        );
      })();
    },
    9384: (g, d, a) => {
      a.d(d, { T: () => c });
      var r = a(9808),
        n = a(2526),
        e = a(4893);
      function l(i, u) {
        if ((1 & i && (e.TgZ(0, 'li', 3)(1, 'a', 4), e._uU(2), e.qZA()()), 2 & i)) {
          const m = u.$implicit;
          e.xp6(1), e.Q6J('routerLink', m.route), e.xp6(1), e.Oqu(m.title);
        }
      }
      let c = (() => {
        class i {
          constructor(m, b) {
            (this.renderer = m), (this.el = b);
          }
          ngAfterViewInit() {
            this.el.nativeElement.querySelectorAll('.nav-pills.tabs .nav-item .nav-link').forEach((b) => {
              this.renderer.listen(b, 'focus', () => {
                setTimeout(() => {
                  b.blur();
                }, 300);
              });
            });
          }
        }
        return (
          (i.ɵfac = function (m) {
            return new (m || i)(e.Y36(e.Qsj), e.Y36(e.SBq));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['app-tabs-link']],
            inputs: { routes: 'routes' },
            standalone: !0,
            features: [e.jDz],
            decls: 3,
            vars: 1,
            consts: [
              ['aria-label', 'width tab list', 1, 'tabs-slider'],
              ['id', 'width-myTab', 'role', 'tablist', 1, 'nav', 'nav-pills', 'tabs', 'fixedWidth'],
              ['class', 'nav-item', 'role', 'presentation', 4, 'ngFor', 'ngForOf'],
              ['role', 'presentation', 1, 'nav-item'],
              ['routerLinkActive', 'active', 'role', 'tab', 1, 'nav-link', 3, 'routerLink']
            ],
            template: function (m, b) {
              1 & m && (e.TgZ(0, 'nav', 0)(1, 'ul', 1), e.YNc(2, l, 3, 2, 'li', 2), e.qZA()()),
                2 & m && (e.xp6(2), e.Q6J('ngForOf', b.routes));
            },
            dependencies: [r.ez, r.sg, n.Bz, n.yS, n.Od]
          })),
          i
        );
      })();
    },
    1968: (g, d, a) => {
      a.d(d, {
        CH: () => e,
        Cc: () => b,
        FJ: () => C,
        H0: () => l,
        Jy: () => E,
        X6: () => r,
        b3: () => c,
        b4: () => u,
        fB: () => i,
        fG: () => T,
        ni: () => A,
        rF: () => m,
        ts: () => n
      });
      const r = [
          { title: 'Api', route: '/components/alert/api' },
          { title: 'Ejemplos', route: '/components/alert/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> type: AlertTypes', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el tipo de la alerta. Por defecto es info.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isDismissible: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para definir si se mostrar\xe1 el componente con cierre. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> listContent: AlertList', customClasses: '' },
            description: { data: 'Se utiliza para definir una lista en la alerta. ', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        e = "\n  type AlertTypes = 'primary' | 'success' | 'danger' | 'info';\n",
        l =
          '\n  export interface AlertList {\n    isUnorderedList?: boolean;\n    listItems: AlertListItems[];\n  }\n  export interface AlertListItems {\n    text?: string;\n    url?: string;\n  }\n',
        c = [
          {
            name: { data: '@Input() <br/> isUnorderedList: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer si la lista dentro de la alerta debe ser una lista desordenada (con vi\xf1etas) o una lista ordenada (numerada). Por defecto es false (lista ordenada).',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> listItems: AlertListItems[]', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer los elementos de la lista, cada uno de los cuales puede tener un texto y una URL asociada. ',
              customClasses: ''
            }
          }
        ],
        i =
          '\n  <o-alert>\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n.\n  </o-alert>\n  <o-alert type="primary">\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n.\n  </o-alert>\n  <o-alert type="success">\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n.\n  </o-alert>\n  <o-alert type="danger">\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n.\n  </o-alert>\n',
        u =
          '\n  <o-alert [isDismissible]="true">\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n.\n  </o-alert>\n',
        m =
          '\n  <o-alert>\n    <strong>Este es un destacado de una alerta de informaci\xf3n.</strong>\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n que continua al texto destacado.\n  </o-alert>\n',
        b =
          '\n  <o-alert>\n    <strong>Este es un destacado de una alerta de informaci\xf3n.</strong>\n    Esta es la descripci\xf3n de una alerta de informaci\xf3n que continua al texto destacado, incluso con\n    <a [routerLink]="[\'/\']">con enlace</a>.\n  </o-alert>\n',
        C = {
          listItems: [
            { text: 'Ancla al error 1', url: '#' },
            { text: 'Ancla al error 2', url: '#' },
            { text: 'Ancla al error 3', url: '#' },
            { text: 'Ancla al error 4', url: '#' },
            { text: 'Ancla al error 5', url: '#' }
          ]
        },
        E = {
          listItems: [
            { text: 'Texto descriptivo 1' },
            { text: 'Texto descriptivo 2' },
            { text: 'Texto descriptivo 3' },
            { text: 'Texto descriptivo 4' },
            { text: 'Texto descriptivo 5' }
          ]
        },
        A =
          '\n  <o-alert type="danger" [listContent]="listLinkItems">\n    <strong>Este es un destacado de una alerta de error.</strong> \n    Esta es la descripci\xf3n de una alerta de error que continua al texto destacado.\n  </o-alert>\n  \n  <o-alert [listContent]="listItems">\n    <strong>Este es un destacado de una alerta de informaci\xf3n.</strong> \n    Esta es la descripci\xf3n de una alerta de informaci\xf3n que continua al texto destacado.\n  </o-alert>\n',
        T =
          "\n  import { Component } from '@angular/core';\n  import { AlertList } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public listLinkItems: AlertList = {\n      listItems: [\n        { text: 'Ancla al error 1', url: '#' },\n        { text: 'Ancla al error 2', url: '#' },\n        { text: 'Ancla al error 3', url: '#' },\n        { text: 'Ancla al error 4', url: '#' },\n        { text: 'Ancla al error 5', url: '#' }\n      ]\n    };\n    public listItems: AlertList = {\n      listItems: [\n        { text: 'Texto descriptivo 1' },\n        { text: 'Texto descriptivo 2' },\n        { text: 'Texto descriptivo 3' },\n        { text: 'Texto descriptivo 4' },\n        { text: 'Texto descriptivo 5' }\n      ]\n    };\n  }\n";
    },
    763: (g, d, a) => {
      a.d(d, { fK: () => l, mg: () => e, tc: () => n, tw: () => r, wY: () => c });
      const r = [
          { title: 'Api', route: '/components/badge/api' },
          { title: 'Ejemplos', route: '/components/badge/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> type: BadgeTypes', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el color de la etiqueta. Por defecto es secondary.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> url: string', customClasses: '' },
            description: { data: 'Se utiliza para definir la url de la etiqueta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        e = "\n  type BadgeTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'info';\n",
        l =
          '\n  <o-badge>Etiqueta</o-badge>\n  <o-badge type="info">Etiqueta</o-badge>\n  <o-badge type="primary">Etiqueta</o-badge>\n  <o-badge type="success">Etiqueta</o-badge>\n  <o-badge type="danger">Etiqueta</o-badge>\n',
        c =
          '\n  <o-badge link="https://gcba.github.io/Obelisco">Etiqueta con link</o-badge>\n  <o-badge route="#">Etiqueta con route</o-badge>\n';
    },
    5702: (g, d, a) => {
      a.d(d, {
        $q: () => l,
        Q7: () => C,
        Yg: () => e,
        c8: () => n,
        d_: () => i,
        gZ: () => u,
        iA: () => E,
        iT: () => c,
        o4: () => b,
        tt: () => m,
        vB: () => r
      });
      const r = [
          { title: 'Api', route: '/components/banner/api' },
          { title: 'Ejemplos', route: '/components/banner/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> isDark: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el color de fondo del banner. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> content: string', customClasses: '' },
            description: { data: 'Se utiliza para establecer el contenido del banner.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> icon: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el \xedcono del banner. Se debe utilizar \xedconos de boxicons o material icons round.',
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
        e =
          'Esta descripci\xf3n de banner <strong>puede tener \xe9nfasis</strong> y <a href="#" target="_blank" rel="noreferrer">enlace</a>.',
        l =
          '\n  <o-banner [content]="content"></o-banner>\n\n  <o-banner [content]="content" [isDark]="true"></o-banner>\n',
        c =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public content = 'Esta descripci\xf3n de banner <strong>puede tener \xe9nfasis</strong> y\n    <a href=\"#\" target=\"_blank\" rel=\"noreferrer\">enlace</a>.';\n  }",
        i =
          'Este banner tiene un solo bot\xf3n y <strong>puede tener \xe9nfasis</strong>. Se truncan los textos que superen m\xe1s de una l\xednea de texto.',
        u = 'departure_board',
        m = 'cookie',
        b =
          '\n  <o-banner [content]="content" [icon]="icon">\n    <o-button #children size="sm" type="secondary" link="#"></o-button>\n  </o-banner>\n\n  <o-banner [content]="content" [isDark]="true" [icon]="icon">\n    <o-button #children size="sm" type="secondary" link="#"></o-button>\n  </o-banner>\n',
        C =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public content = 'Este banner tiene un solo bot\xf3n y <strong>puede tener \xe9nfasis</strong>. Se truncan los textos que superen m\xe1s de una l\xednea de texto.';\n  }",
        E =
          '\n  <o-banner [content]="content" [icon]="iconCookie">\n    <o-button #children size="sm" type="secondary" link="#"></o-button>\n    <o-button #children size="sm" link="#"></o-button>\n  </o-banner>\n\n  <o-banner [content]="content" [icon]="iconCookie" [isDark]="true">\n    <o-button #children size="sm" type="secondary" link="#"></o-button>\n    <o-button #children size="sm" link="#"></o-button>\n  </o-banner>\n';
    },
    4521: (g, d, a) => {
      a.d(d, { H6: () => l, M9: () => r, Nh: () => c, Qz: () => i, UG: () => e, u5: () => n });
      const r = [
          { title: 'Api', route: '/components/block/api' },
          { title: 'Ejemplos', route: '/components/block/examples' }
        ],
        n =
          '\n  <o-block title="Inici\xe1 el tr\xe1mite y complet\xe1 todos los pasos">\n    <o-button button text="Iniciar tr\xe1mite" size="lg" [isExpandable]="true" link="#"></o-button>\n  </o-block>\n',
        e =
          '\n  <o-block\n    title="Inici\xe1 el tr\xe1mite y complet\xe1 todos los pasos"\n    description="Si ten\xe9s un tr\xe1mite iniciado pod\xe9s continuarlo desde ac\xe1."\n  >\n    <o-button button text="Iniciar tr\xe1mite" size="lg" [isExpandable]="true" link="#"></o-button>\n  </o-block>\n',
        l =
          '\n  <o-block title="Este es tu progreso en el tr\xe1mite">\n    <o-progress-bar progressBar type="success" [currentStep]="4"></o-progress-bar>\n    <o-button button text="Continuar tr\xe1mite" size="lg" [isExpandable]="true" link="#"></o-button>\n  </o-block>\n',
        c =
          '\n  <o-block title="Inici\xe1 el tr\xe1mite y complet\xe1 todos los pasos" [isBgLight]="true">\n    <o-button button text="Iniciar tr\xe1mite" size="lg" [isExpandable]="true" link="#"></o-button>\n  </o-block>\n',
        i = [
          {
            name: { data: '@Input() <br/> title: string', customClasses: '' },
            description: { data: 'Establece el t\xedtulo del bloque.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> description: string', customClasses: '' },
            description: { data: 'Define el contenido de texto principal del bloque.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> isBgLight: boolean', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para indicar si el fondo del bloque es claro. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isPositionRelative: boolean', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para indicar si la posici\xf3n del bloque es relative. Por defecto es false.',
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
    },
    5600: (g, d, a) => {
      a.d(d, { AB: () => n, U8: () => i, c_: () => l, dh: () => r, gQ: () => e, qm: () => c });
      const r = [
          { title: 'Api', route: '/components/breadcrumb/api' },
          { title: 'Ejemplos', route: '/components/breadcrumb/examples' }
        ],
        n = [
          {
            name: { data: 'routes', customClasses: '' },
            description: {
              data: 'Se utiliza para agregar las rutas que se quieren agregar al breadcrumb. Cada ruta puede tener un nombre o un id, tambi\xe9n se puede agregar una ruta espec\xedfica',
              customClasses: ''
            }
          },
          {
            name: { data: 'defaultRoute', customClasses: '' },
            description: {
              data: 'Se utiliza para agregar una route generica al breadcrumb. Para que lo puedan utilizar las <strong>routes</strong>',
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
        e = [
          {
            name: { data: 'name', customClasses: '' },
            description: { data: 'Se utiliza para agregar el nombre de la ruta.', customClasses: '' }
          },
          {
            name: { data: 'id', customClasses: '' },
            description: {
              data: 'Se utiliza para agregar el id de la ruta. Si se agrega un id, se va a agregar al final de la ruta.',
              customClasses: ''
            }
          },
          {
            name: { data: 'route', customClasses: '' },
            description: {
              data: 'Se utiliza para agregar una ruta espec\xedfica. Si no se agrega una ruta, toma por defecto la ruta del breadcrumb.',
              customClasses: ''
            }
          }
        ],
        l = '\n  interface Breadcrumb {\n    routes: BreadcrumbRoute[];\n    defaultRoute: string;\n  }\n',
        c = '\n  interface BreadcrumbRoute {\n    name: string;\n    id?: string;\n    route?: string;\n  }\n',
        i =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    constructor(private readonly breadcrumbService: BreadcrumbService) {}\n\n    ngOnInit() {\n      this.breadcrumbService.breadcrumb$.next({\n        routes: [\n          { name: 'Inicio', route: '/custom' },\n          { name: 'nivel 2', id: '15151' },\n          { name: 'nivel 3', route: '/custom-routes' },\n          { name: 'P\xe1gina anterior', id: '525252525', route: '/custom' }\n        ],\n        defaultRoute: '/route-default'\n      });\n    }\n  }\n";
    },
    8992: (g, d, a) => {
      a.d(d, {
        Dx: () => c,
        IE: () => C,
        NQ: () => E,
        UB: () => m,
        Yq: () => i,
        m7: () => b,
        nF: () => e,
        q6: () => l,
        r4: () => u,
        v7: () => r,
        xr: () => n
      });
      const r = [
          { title: 'Api', route: '/components/button/api' },
          { title: 'Ejemplos', route: '/components/button/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> type: ButtonTypes', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el tipo de bot\xf3n. Por defecto es primary.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isOutline: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para definir si es un bot\xf3n con borde. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> text: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el texto del bot\xf3n. En el caso de que no presente \xedcono o spinner, por defecto es "Bot\xf3n".',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> size: Sizes', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el tama\xf1o del bot\xf3n. Por defecto es mediano.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isExpandable: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para definir si es un bot\xf3n expandible. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> icon: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el \xedcono del bot\xf3n. Se debe utilizar \xedconos de boxicons o material icons round.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> ariaLabel: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el atributo aria-label, en el caso de que el bot\xf3n no posea texto.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> spinner: boolean', customClasses: '' },
            description: { data: 'Se utiliza para definir si el bot\xf3n tiene un spinner.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> iconPositionRight: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para definir la posici\xf3n del \xedcono. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> spinnerPositionRight: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para definir la posici\xf3n del spinner. Por defecto es false.',
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
        e = [
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
            description: {
              data: 'Se utiliza para definir el atributo download de la etiqueta &lt;a&gt;.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> rel: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el atributo rel de la etiqueta &lt;a&gt;. Por defecto es "noreferrer".',
              customClasses: ''
            }
          }
        ],
        l = [
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
        ],
        c = "\n  type ButtonTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'link' ;\n",
        i =
          '\n  <o-button text="Bot\xf3n" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="secondary" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="success" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="danger" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="link" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" text="Enlace" link="https://www.google.com/"></o-button>\n\n  <o-button text="Bot\xf3n" [isOutline]="true" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="secondary" [isOutline]="true" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="success" [isOutline]="true" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="danger" [isOutline]="true" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" type="link" [isOutline]="true" (click)="alert()"></o-button>\n  <o-button text="Bot\xf3n" text="Enlace" [isOutline]="true" link="https://www.google.com/"></o-button>\n',
        u =
          "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './app-example.component.html',\n})\n\nexport class ExampleComponent {\n  public alert() {\n    alert('Bot\xf3n');\n  }\n}",
        m =
          '\n  <o-button text="Bot\xf3n" size="sm"></o-button>\n  <o-button text="Bot\xf3n"></o-button>\n  <o-button text="Bot\xf3n" size="lg"></o-button>\n',
        b = '\n  <o-button text="Expandible" [isExpandable]="true"></o-button>\n',
        C =
          '\n  <o-button size="sm" icon="info" text="Bot\xf3n"></o-button>\n  <o-button icon="bx bxs-info-circle" text="Bot\xf3n"></o-button>\n  <o-button size="lg" icon="info" text="Bot\xf3n"></o-button>\n\n  <o-button size="sm" icon="info" ariaLabel="Bot\xf3n"></o-button>\n  <o-button icon="bx bxs-info-circle" ariaLabel="Bot\xf3n"></o-button>\n  <o-button size="lg" icon="info" ariaLabel="Bot\xf3n"></o-button>\n',
        E =
          '\n  <o-button [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="secondary" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="success" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="danger" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="link" [spinner]="true" text="Bot\xf3n"></o-button>\n\n  <o-button [isOutline]="true" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="secondary" [isOutline]="true" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="success" [isOutline]="true" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="danger" [isOutline]="true" [spinner]="true" text="Bot\xf3n"></o-button>\n  <o-button type="link" [isOutline]="true" [spinner]="true" text="Bot\xf3n"></o-button>\n';
    },
    5417: (g, d, a) => {
      a.d(d, {
        Ag: () => e,
        Bm: () => r,
        F: () => M,
        F4: () => i,
        GG: () => N,
        Gf: () => C,
        JF: () => m,
        M2: () => A,
        MO: () => S,
        QP: () => E,
        SH: () => b,
        Sc: () => D,
        Su: () => n,
        Y_: () => L,
        Yn: () => f,
        al: () => c,
        eG: () => h,
        eu: () => v,
        gQ: () => R,
        lR: () => l,
        ll: () => T,
        nl: () => u,
        ot: () => y,
        tE: () => O,
        w_: () => x,
        xy: () => I
      });
      const r = [
          { title: 'Api', route: '/components/calendar/api' },
          { title: 'Ejemplos', route: '/components/calendar/examples' }
        ],
        n = '\n<o-calendar [date]="{ month: 10, year: 2024 }"></o-calendar>',
        e = [
          { day: 1, title: 'Nombre del evento 1.' },
          { day: 10, title: 'Nombre del evento 2.' },
          { day: 25, title: 'Nombre del evento 3.' }
        ],
        l = '\n\n<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences"></o-calendar>\n',
        c =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public calendarReferences: ActiveDay[] = [\n      { day: 1, title: 'Nombre del evento 1.' },\n      { day: 10, title: 'Nombre del evento 2.' },\n      { day: 25, title: 'Nombre del evento 3.' }\n    ];\n  }",
        i = [
          { day: 1, title: 'Nombre del evento 1.', url: '#' },
          { day: 10, title: 'Nombre del evento 2.', url: '#' },
          { day: 25, title: 'Nombre del evento 3.', url: '#' }
        ],
        u = '\n\n<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences"></o-calendar>\n',
        m =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public calendarReferences: ActiveDay[] = [\n      { day: 1, title: 'Nombre del evento 1.', url: '#' },\n      { day: 10, title: 'Nombre del evento 2.', url: '#' },\n      { day: 25, title: 'Nombre del evento 3.', url: '#' }\n    ];\n  }",
        b = [
          { day: 1, title: 'Nombre del evento 1.', type: 'secondary' },
          { day: 9, title: 'Nombre del evento 2.' },
          { day: [12, 13], title: 'Nombre del evento 3.', type: 'secondary' },
          { day: [25, 26, 27], title: 'Nombre del evento 4.' }
        ],
        C = '\n\n<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences"></o-calendar>\n',
        E =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public calendarReferences: ActiveDay[] = [\n      { day: 1, title: 'Nombre del evento 1.', type: 'secondary' },\n      { day: 9, title: 'Nombre del evento 2.' },\n      { day: [12, 13], title: 'Nombre del evento 3.', type: 'secondary' },\n      { day: [25, 26, 27], title: 'Nombre del evento 4.' }\n    ];\n  }",
        A = [
          { day: 1, title: 'Nombre del evento 1.' },
          { day: 10, title: 'Nombre del evento 2.' },
          { day: 12, title: 'Nombre del evento 3.' },
          { day: 15, title: 'Nombre del evento 4.' },
          { day: 23, title: 'Nombre del evento 5.' },
          { day: 27, title: 'Nombre del evento 6.' }
        ],
        T =
          '\n\n<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences" [isCollapsed]="true"></o-calendar>\n',
        h =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public calendarReferences: ActiveDay[] = [\n      { day: 1, title: 'Nombre del evento 1.' },\n      { day: 10, title: 'Nombre del evento 2.' },\n      { day: 12, title: 'Nombre del evento 3.' },\n      { day: 15, title: 'Nombre del evento 4.' },\n      { day: 23, title: 'Nombre del evento 5.' },\n      { day: 27, title: 'Nombre del evento 6.' }\n    ];\n  }",
        f = [
          { day: 1, title: 'Nombre del evento 1.', type: 'coral' },
          { day: 2, title: 'Nombre del evento 2.', type: 'musket' },
          { day: 3, title: 'Nombre del evento 3.', type: 'citrus' },
          { day: 4, title: 'Nombre del evento 4.', type: 'lime' },
          { day: 5, title: 'Nombre del evento 5.', type: 'sky' },
          { day: 6, title: 'Nombre del evento 6.', type: 'pistachio' },
          { day: 7, title: 'Nombre del evento 7.', type: 'berries' },
          { day: 8, title: 'Nombre del evento 8.', type: 'lavender' },
          { day: 9, title: 'Nombre del evento 9.', type: 'aqua' },
          { day: 10, title: 'Nombre del evento 10.', type: 'avocado' },
          { day: 11, title: 'Nombre del evento 11.', type: 'strawberry' },
          { day: 12, title: 'Nombre del evento 12.', type: 'blackberry' },
          { day: 13, title: 'Nombre del evento 13.', type: 'gray' }
        ],
        S =
          '\n\n<o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarReferences" [isCollapsed]="true"></o-calendar>\n',
        I =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public calendarReferences: ActiveDay[] = [\n      { day: 1, title: 'Nombre del evento 1.', type: 'coral' },\n      { day: 2, title: 'Nombre del evento 2.', type: 'musket' },\n      { day: 3, title: 'Nombre del evento 3.', type: 'citrus' },\n      { day: 4, title: 'Nombre del evento 4.', type: 'lime' },\n      { day: 5, title: 'Nombre del evento 5.', type: 'sky' },\n      { day: 6, title: 'Nombre del evento 6.', type: 'pistachio' },\n      { day: 7, title: 'Nombre del evento 7.', type: 'berries' },\n      { day: 8, title: 'Nombre del evento 8.', type: 'lavender' },\n      { day: 9, title: 'Nombre del evento 9.', type: 'aqua' },\n      { day: 10, title: 'Nombre del evento 10.', type: 'avocado' },\n      { day: 11, title: 'Nombre del evento 11.', type: 'strawberry' },\n      { day: 12, title: 'Nombre del evento 12.', type: 'blackberry' },\n      { day: 13, title: 'Nombre del evento 13.', type: 'gray' }\n    ];\n  }",
        x = {
          JANUARY: [{ day: 7, title: 'Nombre del evento.' }],
          FEBRUARY: [{ day: 1, title: 'Nombre del evento.' }],
          MARCH: [{ day: [29, 30], title: 'Nombre del evento.' }],
          APRIL: [{ day: 13, title: 'Nombre del evento.' }],
          MAY: [
            { day: 1, title: 'Nombre del evento.' },
            { day: 25, title: 'Nombre del evento.' }
          ],
          JUNE: [{ day: 16, title: 'Nombre del evento.' }],
          JULY: [
            { day: 9, title: 'Nombre del evento.' },
            { day: [21, 22, 23], title: 'Nombre del evento.' }
          ],
          AUGUST: [{ day: 21, title: 'Nombre del evento.' }],
          SEPTEMBER: [{ day: 20, title: 'Nombre del evento.' }],
          OCTOBER: [{ day: 11, title: 'Nombre del evento.' }],
          NOVEMBER: [{ day: 18, title: 'Nombre del evento.' }],
          DECEMBER: [
            { day: 2, title: 'Nombre del evento.' },
            { day: 31, title: 'Nombre del evento.' }
          ]
        },
        v =
          '\n\n<div class="calendar-deck">\n  <o-calendar [date]="{ month: 1, year: 2024 }" [activeDays]="calendarDeck[\'JANUARY\']"></o-calendar>\n  <o-calendar [date]="{ month: 2, year: 2024 }" [activeDays]="calendarDeck[\'FEBRUARY\']"></o-calendar>\n  <o-calendar [date]="{ month: 3, year: 2024 }" [activeDays]="calendarDeck[\'MARCH\']"></o-calendar>\n  <o-calendar [date]="{ month: 4, year: 2024 }" [activeDays]="calendarDeck[\'APRIL\']"></o-calendar>\n  <o-calendar [date]="{ month: 5, year: 2024 }" [activeDays]="calendarDeck[\'MAY\']"></o-calendar>\n  <o-calendar [date]="{ month: 6, year: 2024 }" [activeDays]="calendarDeck[\'JUNE\']"></o-calendar>\n  <o-calendar [date]="{ month: 7, year: 2024 }" [activeDays]="calendarDeck[\'JULY\']"></o-calendar>\n  <o-calendar [date]="{ month: 8, year: 2024 }" [activeDays]="calendarDeck[\'AUGUST\']"></o-calendar>\n  <o-calendar [date]="{ month: 9, year: 2024 }" [activeDays]="calendarDeck[\'SEPTEMBER\']"></o-calendar>\n  <o-calendar [date]="{ month: 10, year: 2024 }" [activeDays]="calendarDeck[\'OCTOBER\']"></o-calendar>\n  <o-calendar [date]="{ month: 11, year: 2024 }" [activeDays]="calendarDeck[\'NOVEMBER\']"></o-calendar>\n  <o-calendar [date]="{ month: 12, year: 2024 }" [activeDays]="calendarDeck[\'DECEMBER\']"></o-calendar>\n</div>\n',
        N =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n\n  export class ExampleComponent {\n    public calendarRef: { [key: string]: ActiveDay[] } =\n      JANUARY: [{ day: 7, title: 'Nombre del evento.' }],\n      FEBRUARY: [{ day: 1, title: 'Nombre del evento.' }],\n      MARCH: [{ day: [29, 30], title: 'Nombre del evento.' }],\n      APRIL: [{ day: 13, title: 'Nombre del evento.' }],\n      MAY: [\n        { day: 1, title: 'Nombre del evento.' },\n        { day: 25, title: 'Nombre del evento.' }\n      ],\n      JUNE: [{ day: 16, title: 'Nombre del evento.' }],\n      JULY: [\n        { day: 9, title: 'Nombre del evento.' },\n        { day: [21, 22, 23], title: 'Nombre del evento.' }\n      ],\n      AUGUST: [{ day: 21, title: 'Nombre del evento.' }],\n      SEPTEMBER: [{ day: 20, title: 'Nombre del evento.' }],\n      OCTOBER: [{ day: 11, title: 'Nombre del evento.' }],\n      NOVEMBER: [{ day: 18, title: 'Nombre del evento.' }],\n      DECEMBER: [\n        { day: 2, title: 'Nombre del evento.' },\n        { day: 31, title: 'Nombre del evento.' }\n    ];\n  }",
        L = [
          {
            name: { data: '@Input() <br/> date: CalendarDate' },
            description: { data: 'Se utiliza para establecer el mes y a\xf1o del calendario.' }
          },
          {
            name: { data: '@Input() <br/> activeDays: ActiveDay[]' },
            description: { data: 'Se utiliza para definir los d\xedas que tienen referencias }en el calendario.' }
          },
          {
            name: { data: '@Input() <br/> isCollapsed: boolean' },
            description: {
              data: 'Se utiliza para definir si lleva un colapsable para las} referencias. Por defecto es false.'
            }
          },
          {
            name: { data: '@Input() <br/> hasList: boolean' },
            description: { data: 'Se utiliza para definir si lleva la lista de las referencias.} Por defecto es true.' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al c}omponente para personalizar su apariencia.'
            }
          }
        ],
        y =
          '\n  interface ActiveDay {\n    day: number | number[];\n    title: string;\n    url: string;\n    type: ActiveDayTypes;\n    isDisabled: boolean;\n  }\n',
        R = '\n  interface CalendarDate {\n    month: number;\n    year: number;\n  }\n',
        M = [
          {
            name: { data: 'day: number | number[]' },
            description: { data: 'Se utiliza para definir el d\xeda o d\xedas que lleva la referencia.' }
          },
          {
            name: { data: 'title: string' },
            description: { data: 'Se utiliza para definir el texto de la referencia.' }
          },
          { name: { data: 'url: string' }, description: { data: 'Se utiliza para definir la ruta de la referencia.' } },
          {
            name: { data: 'type: ActiveDayTypes' },
            description: { data: 'Se utiliza para definir el tipo de la referencia.' }
          },
          {
            name: { data: 'isDisabled: boolean' },
            description: { data: 'Se utiliza para definir si la referencia esta deshabilitada.' }
          }
        ],
        O = [
          { name: { data: 'month: number' }, description: { data: 'Se utiliza para definir el mes.' } },
          { name: { data: 'year: number' }, description: { data: 'Se utiliza para definir el a\xf1o.' } }
        ],
        D =
          "\n  type ActiveDayTypes = CromaticTypes | 'secondary' | 'gray';\n\n  type CromaticTypes = 'sky' | 'lavender' | 'coral' | 'avocado' | 'citrus' | 'lime' | 'pistachio' | 'berries' | 'musket' | 'blackberry' | 'aqua' | 'strawberry';\n";
    },
    6527: (g, d, a) => {
      a.d(d, {
        Fr: () => i,
        H7: () => u,
        O4: () => h,
        Q: () => n,
        QD: () => I,
        QV: () => r,
        Qq: () => e,
        T8: () => T,
        Wx: () => c,
        ZD: () => v,
        f_: () => m,
        fb: () => C,
        iH: () => A,
        lE: () => l,
        qS: () => E,
        tx: () => S,
        yA: () => f,
        zM: () => x,
        zm: () => b
      });
      const r = [
          { title: 'Api', route: '/components/card/api' },
          { title: 'Ejemplos', route: '/components/card/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> isHorizontal: boolean', customClasses: '' },
            description: {
              data: 'Indica si el componente tendr\xe1 una direcci\xf3n horizontal. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isBordered: boolean', customClasses: '' },
            description: { data: 'Indica si el componente tendr\xe1 borde. Por defecto es false.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> isThemeCard: boolean', customClasses: '' },
            description: {
              data: 'Indica si el componente es horizontal tem\xe1tica. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> title: string', customClasses: '' },
            description: { data: 'Establece el t\xedtulo de la tarjeta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> isTitleTruncate: boolean', customClasses: '' },
            description: {
              data: 'Indica si el titulo del componente se trunca cuando es extenso. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> description: string', customClasses: '' },
            description: { data: 'Define el contenido de texto principal de la tarjeta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> link: string', customClasses: '' },
            description: { data: 'Establece un enlace URL para la tarjeta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> route: string', customClasses: '' },
            description: { data: 'Especifica la ruta de navegaci\xf3n para la tarjeta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> icon: string', customClasses: '' },
            description: { data: 'Define el \xedcono que se mostrar\xe1 en la tarjeta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> image: MediaImage', customClasses: '' },
            description: { data: 'Define la imagen principal de la tarjeta.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> headline: string', customClasses: '' },
            description: { data: 'Establece el titular del evento o componente.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> cardBadges: CardBadge[]', customClasses: '' },
            description: {
              data: 'Define las etiquetas del componente. Debe ser un arreglo de objetos CardBadge. Por defecto type es "secondary".',
              customClasses: ''
            }
          }
        ],
        e = '\n  interface CardBadge {\n    content: string;\n    type?: BadgeTypes;\n  }\n',
        l = [
          {
            name: { data: 'content: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el texto de la etiqueta.', customClasses: '' }
          },
          {
            name: { data: 'type: BadgeTypes', customClasses: '' },
            description: { data: 'Se utiliza para definir el tipo de etiqueta.', customClasses: '' }
          }
        ],
        c =
          '\n  interface Media {\n    src: string;\n  }\n\n  interface MediaImage extends Media {\n    alt: string;\n  }\n',
        i = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          {
            name: { data: 'alt: string' },
            description: { data: 'Se utiliza para definir el texto alternativo de la imagen.' }
          }
        ],
        u = { src: '/assets/cards/img-left.jpg', alt: 'descripci\xf3n de imagen' },
        m = { src: '/assets/cards/home.svg', alt: 'descripci\xf3n de imagen' },
        b = { src: '/assets/cards/img-top.jpg', alt: 'descripci\xf3n de imagen' },
        C =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [image]="{\n      src: \'/assets/cards/home.svg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n    [isThemeCard]="true"\n  ></o-card>\n',
        E =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="info"\n    [isHorizontal]="true"\n  ></o-card>\n',
        A =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [image]="{\n      src: \'/assets/cards/img-left.jpg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [image]="{\n      src: \'/assets/cards/img-left.jpg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n    [isHorizontal]="true"\n  ></o-card>\n',
        T =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [isHorizontal]="true"\n  ></o-card>\n',
        h =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="info"\n  ></o-card>\n',
        f =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [image]="{\n      src: \'/assets/cards/img-top.jpg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n    [isBordered]="true"\n  ></o-card>\n',
        S =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [image]="{\n      src: \'/assets/cards/img-top.jpg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n    [cardBadges]="[{content: \'etiqueta 1\'}, {content: \'etiqueta 2\'}]"\n    [isBordered]="true"\n  >\n    <small #info>Fecha de publicaci\xf3n</small>\n  </o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    [image]="{\n      src: \'/assets/cards/img-top.jpg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n    [cardBadges]="[{content: \'etiqueta 1\'}, {content: \'etiqueta 2\'}]"\n    [isTitleTruncate]="true"\n    [isBordered]="true"\n  >\n    <small #info>Fecha de publicaci\xf3n</small>\n  </o-card>\n',
        I =
          '\n  <o-card\n    title="T\xedtulo de la tarjeta"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    headline="sobrelinea"\n    [isBordered]="true"\n    [image]="{\n      src: \'/assets/cards/img-top.jpg\',\n      alt: \'descripci\xf3n de imagen\'\n    }"\n  >\n    <div class="pt-2" #info>\n      <small><span class="material-icons-round">calendar_today</span> Lun 01/1</small>\n      <small><span class="material-icons-round">watch_later</span> 17 | 18 | 19 hs</small>\n    </div>\n  </o-card>\n',
        x =
          '\n<div class="card-deck card-column max-cards-3">\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n</div>\n',
        v =
          '\n<div class="card-deck card-column max-cards-2">\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n  <o-card\n    title="T\xedtulo de la tarjeta con m\xe1s de una l\xednea"\n    description="Descripci\xf3n de la tarjeta"\n    route="/components"\n    icon="bx bxs-info-circle"\n    [isHorizontal]="true"\n    [isBordered]="true"\n  ></o-card>\n</div>\n';
    },
    2519: (g, d, a) => {
      a.d(d, {
        IS: () => A,
        Kl: () => c,
        LV: () => e,
        Nm: () => i,
        O_: () => E,
        RV: () => T,
        TO: () => u,
        _f: () => l,
        cD: () => h,
        gb: () => f,
        hl: () => n,
        k4: () => b,
        s8: () => C,
        t6: () => r,
        ve: () => m
      });
      const r = [
          { title: 'Api', route: '/components/collapse/api' },
          { title: 'Ejemplos', route: '/components/collapse/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> identifier: string' },
            description: { data: 'Se utiliza para asignar el ID del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> dataParent: string' },
            description: {
              data: 'Se utiliza para agregar un identificador para el comportamiento de los colapsables sean de selecci\xf3n unica.'
            }
          },
          {
            name: { data: '@Input() <br/> icon?: string' },
            description: { data: 'Se utiliza para definir el icono del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> label?: string' },
            description: { data: 'Se utiliza para definir la etiqueta del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> title?: string' },
            description: { data: 'Se utiliza para definir el t\xedtulo del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> isTitleAlone?: boolean' },
            description: { data: 'Se utiliza para definir si el t\xedtulo del colapsable est\xe1 solo.' }
          },
          {
            name: { data: '@Input() <br/> subtitle?: string' },
            description: { data: 'Se utiliza para definir el subt\xedtulo del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> content?: string | string[]' },
            description: { data: 'Se utiliza para definir el contenido del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> children?: CollapseItems[] | CollapseInputs[]' },
            description: { data: 'Se utiliza para definir la lista colapsables del componente.' }
          },
          {
            name: { data: '@Input() <br/> customClassesHeader?: string' },
            description: { data: 'Se utiliza para definir clases personalizadas para el encabezado del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> customClassesContent?: string' },
            description: { data: 'Se utiliza para definir clases personalizadas para el contenido del colapsable.' }
          },
          {
            name: { data: '@Input() <br/> isWhite?: boolean = false' },
            description: { data: 'Se utiliza para definir si el colapsable es de color blanco.' }
          }
        ],
        e = [
          {
            name: { data: '@Output() <br/> selectedItemChange: EventEmitter&lt;CollapseInputs&gt;' },
            description: {
              data: 'Esto define un evento de salida (@Output) llamado selectedItemChange que emite instancias de CollapseInputs cuando cambia, lo que permite a otros componentes reaccionar a cambios en la selecci\xf3n del elemento.'
            }
          }
        ],
        l = '\n  interface CollapseItems {\n    label: string;\n    title: string;\n    subtitle: string;\n  }\n',
        c =
          '\n  interface CollapseInputs {\n    id: string;\n    icon: string;\n    title: string;\n    subtitle: string;\n    name: string;\n    value: boolean;\n  }\n',
        i = [
          {
            name: { data: 'id: string;' },
            description: { data: 'Proporciona un identificador \xfanico para el elemento.' }
          },
          { name: { data: 'icon: string;' }, description: { data: 'Define el \xedcono del colapsable.' } },
          { name: { data: 'label: string;' }, description: { data: 'Define un breve texto o leyenda.' } },
          { name: { data: 'title: string;' }, description: { data: 'Define el t\xedtulo principal.' } },
          {
            name: { data: 'isTitleAlone: boolean;' },
            description: { data: 'Define un t\xedtulo sin estar dentro de la etiqueta span.' }
          },
          { name: { data: 'subtitle: string;' }, description: { data: 'Define el subt\xedtulo.' } },
          {
            name: { data: 'content: string | string[];' },
            description: { data: 'Proporciona una descripci\xf3n detallada.' }
          },
          {
            name: { data: 'children: CollapseItems[] | CollapseInputs[];' },
            description: { data: 'Define una lista de elementos CollapseItems o CollapseInputs' }
          },
          {
            name: { data: '@Input() <br /> customClassesHeader: string' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al header del componente para personalizar su apariencia.'
            }
          },
          {
            name: { data: '@Input() <br /> customClassesContent: string' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al contenido del componente para personalizar su apariencia.'
            }
          }
        ],
        u = [
          { name: { data: 'label: string;' }, description: { data: 'Define el texto del \xedtem colapsable.' } },
          { name: { data: 'title: string;' }, description: { data: 'Define el t\xedtulo del \xedtem colapsable.' } },
          {
            name: { data: 'subtitle: string;' },
            description: { data: 'Define el subt\xedtulo del \xedtem colapsable.' }
          }
        ],
        m = [
          {
            name: { data: 'id: string;' },
            description: { data: 'Proporciona un identificador \xfanico para el input colapsable.' }
          },
          { name: { data: 'icon: string;' }, description: { data: 'Define el \xedcono para el input colapsable.' } },
          { name: { data: 'title: string;' }, description: { data: 'Define el t\xedtulo para el input colapsable.' } },
          {
            name: { data: 'subtitle: string;' },
            description: { data: 'Define el subt\xedtulo para el input colapsable.' }
          },
          { name: { data: 'name: string;' }, description: { data: 'Proporciona un nombre para el input colapsable.' } },
          { name: { data: 'value: boolean;' }, description: { data: 'Define el valor del elemento.' } }
        ],
        b =
          '\n  <div class="accordion">\n    <o-collapse\n      identifier="collapseOne"\n      title="T\xedtulo"\n      content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    >\n    </o-collapse>\n\n    <o-collapse\n      identifier="collapseTwo"\n      title="T\xedtulo"\n      content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    >\n    </o-collapse>\n\n    <o-collapse\n      identifier="collapseThree"\n      title="T\xedtulo"\n      content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    >\n    </o-collapse>\n  </div>\n',
        C =
          '\n  <div class="accordion" id="dataParent">\n    <o-collapse\n      identifier="collapseUniqueOne"\n      dataParent="dataParent"\n      title="T\xedtulo"\n      content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    >\n    </o-collapse>\n    <o-collapse\n      identifier="collapseUniqueTwo"\n      dataParent="dataParent"\n      title="T\xedtulo"\n      content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    >\n    </o-collapse>\n    <o-collapse\n      identifier="collapseUniqueThree"\n      dataParent="dataParent"\n      title="T\xedtulo"\n      content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    >\n    </o-collapse>\n  </div>\n',
        E =
          "\n  <o-collapse\n    identifier=\"collapseInfo\"\n    title=\"$450,00\"\n    label=\"Total a pagar\"\n    [children]=\"[\n      {\n        label: '$200,00',\n        title: 'Solicitud de informes varios',\n        subtitle: 'Boleta N\xb0 2549-48758798'\n      },\n      {\n        label: '$200,00',\n        title: 'Solicitud de informes varios',\n        subtitle: 'Boleta N\xb0 2549-48758798'\n      }\n    ]\"\n  >\n  </o-collapse>\n",
        A =
          '\n  <o-collapse\n    title="T\xedtulo"\n    identifier="collapseIcon"\n    content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    icon="bx bxs-user-circle"\n  >\n  </o-collapse>\n',
        T =
          '\n  <o-collapse\n    identifier="collapseLabel"\n    icon="bx bxs-user-circle"\n    label="Volanta"\n    title="T\xedtulo"\n    subtitle="Descripci\xf3n"\n    content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n  >\n  </o-collapse>\n',
        h =
          "\n  <o-collapse\n    identifier=\"collapseList\"\n    title=\"Tarjeta de cr\xe9dito / d\xe9bito\"\n    subtitle=\"VISA, MasterCard, AMEX, CABAL, Maestro\"\n    [children]=\"[\n      {\n        icon: 'bx bxl-visa',\n        title: 'Visa D\xe9bito ****1234',\n        subtitle: 'Heraldo Paez',\n        id: 'visa',\n        name: 'credit_card',\n        value: false\n      },\n      {\n        icon: 'bx bxl-mastercard',\n        title: 'MasterCard Cr\xe9dito ****5678',\n        subtitle: 'Heraldo Paez',\n        id: 'master',\n        name: 'credit_card',\n        value: true\n      }\n    ]\"\n  >\n",
        f =
          '\n  <o-collapse\n    identifier="collapseWhite"\n    [isWhite]="true"\n    title="T\xedtulo"\n    content="Esta es la descripci\xf3n que se encuentra dentro de un colapsable."\n    icon="bx bxs-user-circle"\n  >\n  </o-collapse>\n';
    },
    642: (g, d, a) => {
      a.d(d, {
        $f: () => S,
        Bn: () => m,
        EB: () => A,
        EJ: () => u,
        KH: () => l,
        KQ: () => L,
        KX: () => v,
        NQ: () => M,
        O: () => i,
        Qc: () => c,
        TP: () => E,
        U8: () => N,
        Ud: () => I,
        Ui: () => b,
        W5: () => e,
        Wh: () => R,
        ZB: () => f,
        dG: () => y,
        f2: () => x,
        l2: () => h,
        nS: () => T,
        o6: () => O,
        zw: () => C
      });
      var r = a(2261);
      const e = [
          { title: 'Api', route: '/components/footer/api' },
          { title: 'Ejemplos', route: '/components/footer/examples' }
        ],
        l = [
          {
            name: { data: '@Input() <br /> phoneCustomList: Phone[]', customClasses: '' },
            description: { data: 'Se utiliza para mostrar una lista personalizada de tel\xe9fonos.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> networkCustomList: Network[]', customClasses: '' },
            description: { data: 'Se utiliza para mostrar una lista personalizada de redes.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> linkCustomList: Link[]', customClasses: '' },
            description: { data: 'Se utiliza para mostrar una lista personalizada de enlaces.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> phoneCustomContent: CustomContent', customClasses: '' },
            description: {
              data: 'Se utiliza para personalizar el contenido de la secci\xf3n de tel\xe9fonos.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> networkCustomContent: CustomContent', customClasses: '' },
            description: {
              data: 'Se utiliza para personalizar el contenido de la secci\xf3n de redes.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> linkCustomContent: CustomContent', customClasses: '' },
            description: {
              data: 'Se utiliza para personalizar el contenido de la secci\xf3n de enlaces.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> hidePhoneSection: boolean', customClasses: '' },
            description: { data: 'Se utiliza para ocultar la secci\xf3n de tel\xe9fonos.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> hideNetworkSection: boolean', customClasses: '' },
            description: { data: 'Se utiliza para ocultar la secci\xf3n de redes.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> hideLinkSection: boolean', customClasses: '' },
            description: { data: 'Se utiliza para ocultar la secci\xf3n de enlaces.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> indicatorText: string', customClasses: '' },
            description: {
              data: 'Se utiliza para ingresar el texto del indicador en la secci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> customClassesIndicator: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al Indicador componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        c = [
          { title: '101 - Numero Personalizado', number: 101 },
          { title: '102 - Numero Personalizado', number: 102 },
          { title: '103 - Numero Personalizado', number: 103 }
        ],
        i = [
          { title: 'Red personalizada', src: 'https://www.google.com/', icon: 'bx bxs-info-circle' },
          { title: 'Red personalizada', src: 'https://www.instagram.com/', icon: 'bx bxs-info-circle' },
          { title: 'Red personalizada', src: 'https://youtube.com/', icon: 'bx bxs-info-circle' }
        ],
        u = [
          { title: 'T\xedtulo Personalizado', src: 'https://buenosaires.gob.ar/inicio/' },
          { title: 'T\xedtulo Personalizado', src: 'https://buenosaires.gob.ar/inicio/' },
          { title: 'T\xedtulo Personalizado', src: 'https://buenosaires.gob.ar/inicio/' }
        ],
        m = {
          title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content: [
            "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ]
        },
        b = {
          title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content: [
            "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ]
        },
        C = {
          title: "<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          content: "<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        E = '\n  interface Phone {\n    title: string;\n    number: string;\n  }\n',
        A = '\n  interface Network {\n    title: string;\n    src: string;\n    icon: string;\n  }\n',
        T = '\n  interface Link {\n    title: string;\n    src: string;\n  }\n',
        h = '\n  interface CustomContent {\n    title?: string;\n    content?: string | string[];\n  }\n',
        f = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el nombre.', customClasses: '' }
          },
          {
            name: { data: 'number: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el n\xfamero del telefono.', customClasses: '' }
          }
        ],
        S = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el nombre de la red social.', customClasses: '' }
          },
          {
            name: { data: 'src: string', customClasses: '' },
            description: { data: 'Se utiliza para definir la url de la red social.', customClasses: '' }
          },
          {
            name: { data: 'icon: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el icono de la red social.', customClasses: '' }
          }
        ],
        I = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el nombre del enlace.', customClasses: '' }
          },
          {
            name: { data: 'src: string', customClasses: '' },
            description: { data: 'Se utiliza para definir la url del enlace.', customClasses: '' }
          }
        ],
        x = [
          {
            name: { data: 'title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el nombre del enlace.', customClasses: '' }
          },
          {
            name: { data: 'content: string | string[]', customClasses: '' },
            description: { data: 'Se utiliza para especificar el contenido.', customClasses: '' }
          }
        ],
        v = '\n  <o-footer [hidePhoneSection]="true" [hideNetworkSection]="true"></o-footer>\n',
        N = '\n  <o-footer></o-footer>\n',
        L =
          '\n  <o-footer\n    [hidePhoneSection]="true"\n    indicatorText="\xbfTe fue \xfatil esta p\xe1gina?"\n  >\n    <button class="btn btn-primary">S\xed, me fue \xfatil</button>\n    <button class="btn btn-secondary">No me sirvi\xf3</button>\n  </o-footer>\n',
        y =
          '\n  <o-footer\n    [phoneCustomList]="phoneCustomList"\n    [networkCustomList]="networkCustomList"\n    [linkCustomList]="linkCustomList"\n  ></o-footer>\n',
        R =
          '\n  <o-footer\n    [phoneCustomContent]="phoneCustomContent"\n    [networkCustomContent]="networkCustomContent"\n    [linkCustomContent]="linkCustomContent"\n  ></o-footer>\n',
        M =
          ((z = i),
          (P = u),
          `\n  import { Component  } from '@angular/core';\n  import { Link, Network, Phone } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public phoneCustomList: Phone[] = ${(0,
          r.H)(c)}\n    ];\n\n    public networkCustomList: Network[] = ${(0, r.H)(
            z
          )}\n    ];\n\n    public linkCustomList: Link[] = ${(0, r.H)(P)}\n    ];\n  }`),
        O =
          "\n  import { Component  } from '@angular/core';\n  import { CustomContent } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public phoneCustomContent: CustomContent = {\n      title: \"<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit\",\n      content: [\n        \"<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\",\n        \"<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n      ]\n    };\n\n    public networkCustomContent: CustomContent = {\n      title: \"<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit\",\n      content: [\n        \"<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\",\n        \"<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n      ]\n    };\n\n    public linkCustomContent: CustomContent = {\n      title: \"<i class='bx bxs-check-circle'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit\",\n      content: \"<i class='bx bxs-wrench'></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n    };\n  }\n";
      var z, P;
    },
    9529: (g, d, a) => {
      a.d(d, {
        Bf: () => R,
        CJ: () => A,
        Gz: () => T,
        Ih: () => b,
        Jc: () => l,
        QC: () => L,
        Ut: () => I,
        Vr: () => N,
        __: () => y,
        _h: () => f,
        _i: () => x,
        aN: () => E,
        ek: () => e,
        fO: () => u,
        m$: () => v,
        o1: () => m,
        pb: () => i,
        qr: () => S,
        sq: () => c,
        uP: () => h,
        xc: () => C
      });
      var r = a(2261);
      const n = (M) =>
          `\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public galleryItems: MediaGallery[] = ${(0,
          r.H)(M)}\n    ];\n  }`,
        e = [
          { title: 'Api', route: '/components/gallery/api' },
          { title: 'Ejemplos', route: '/components/gallery/examples' }
        ],
        l = [
          {
            name: { data: '@Input() <br /> galleryItems: MediaGallery[]', customClasses: '' },
            description: {
              data: 'Se utiliza para pasar una lista de im\xe1genes que se mostrar\xe1n en la galer\xeda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> isInteractive: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para habilitar o deshabilitar la interacci\xf3n con la galer\xeda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> dataTarget: string', customClasses: '' },
            description: {
              data: 'Se utiliza para pasar el id del elemento que se mostrar\xe1 en la galer\xeda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> customClassesInteractive: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas a la secci\xf3n interactiva del componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        c = [
          {
            author: 'Autor 1',
            title: 'Titulo de la imagen 1',
            content: 'Descripcion de la imagen 1',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true'
          }
        ],
        i = [
          ...c,
          {
            author: 'Autor 2',
            title: 'Titulo de la imagen 2',
            content: 'Descripcion de la imagen 2',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true'
          }
        ],
        u = [
          ...i,
          {
            author: 'Autor 3',
            title: 'Titulo de la imagen 3',
            content: 'Descripcion de la imagen 3',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/3.jpg?raw=true'
          }
        ],
        m = [
          ...u,
          {
            author: 'Autor 4',
            title: 'Titulo de la imagen 4',
            content: 'Descripcion de la imagen 4',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/4.jpg?raw=true'
          }
        ],
        b = [
          ...m,
          {
            author: 'Autor 5',
            title: 'Titulo de la imagen 5',
            content: 'Descripcion de la imagen 5',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/5.jpg?raw=true'
          }
        ],
        C = [
          ...b,
          {
            author: 'Autor 6',
            title: 'Titulo de la imagen 6',
            content: 'Descripcion de la imagen 6',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/1.jpg?raw=true'
          }
        ],
        E = [
          ...C,
          {
            author: 'Autor 7',
            title: 'Titulo de la imagen 7',
            content: 'Descripcion de la imagen 7',
            src: 'https://github.com/gcba/Obelisco/blob/master/static/gallery/2.jpg?raw=true'
          }
        ],
        A =
          '\n  interface Media {\nw    src: string;\n  }\n\n  interface MediaGallery extends Media {\n    author: string;\n    content: string;\n    title: string;\n  }\n  ',
        T = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          {
            name: { data: 'author: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el autor de la imagen.', customClasses: '' }
          },
          {
            name: { data: 'content: string' },
            description: { data: 'Se utiliza para definir la descripci\xf3n de la imagen.' }
          },
          { name: { data: 'title: string' }, description: { data: 'Se utiliza para definir el t\xedtulo.' } }
        ],
        h =
          '\n  <o-gallery [galleryItems]="galleryItems" [isInteractive]="true" dataTarget="modalGallery"></o-gallery>\n',
        f = n(u),
        S = '<o-gallery [galleryItems]="galleryItems"></o-gallery>',
        I = n(c),
        x = n(i),
        v = n(u),
        N = n(m),
        L = n(b),
        y = n(C),
        R = n(E);
    },
    8362: (g, d, a) => {
      a.d(d, {
        DB: () => S,
        G9: () => N,
        JD: () => v,
        OQ: () => D,
        PG: () => I,
        Pl: () => M,
        Sn: () => R,
        Uw: () => i,
        WE: () => y,
        WJ: () => f,
        dO: () => O,
        f8: () => x,
        fV: () => A,
        hA: () => l,
        j: () => n,
        kX: () => b,
        k_: () => e,
        lP: () => m,
        lp: () => C,
        m: () => r,
        nD: () => u,
        pR: () => c,
        qg: () => L,
        rO: () => T,
        s5: () => h,
        yB: () => E
      });
      const r = [
          { title: 'Api', route: '/components/highlighted/api' },
          { title: 'Ejemplos', route: '/components/highlighted/examples' }
        ],
        n = 'T\xedtulo de destacado',
        e =
          'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces',
        l =
          'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces.',
        c = { src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg', alt: 'descripci\xf3n de imagen' },
        i = {
          src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',
          title: 'Buenos Aires se escribe en plural',
          track: 'assets/panel/videoBuenosAires.vtt'
        },
        u = {
          src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',
          title: 'Buenos Aires se escribe en plural'
        },
        m =
          '\n  <o-highlighted\n    [title]="title"\n    [description]="description"\n    [image]="picture">\n    <o-button #children link="#" size="lg"></o-button>\n    <o-button #children link="#" size="lg" type="secondary"></o-button>\n  </o-highlighted>\n',
        b =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public title: string = 'T\xedtulo de destacado';\n\n    public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces';\n\n    public picture: MediaImage = {\n      src: 'https://gcba.github.io/Obelisco/panel/destacado.jpeg',\n      alt: 'descripci\xf3n de imagen'\n    };\n  }\n",
        C =
          '\n  <o-highlighted\n    [title]="title"\n    [description]="description"\n    [video]="video">\n    <o-button #children link="#" size="lg"></o-button>\n  </o-highlighted>\n\n  <o-highlighted\n    [title]="title"\n    [description]="description"\n    [iframe]="iframe">\n    <a #children class="external" href="#" target="_blank">Enlace externo</a>\n  </o-highlighted>\n',
        E =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public title: string = 'T\xedtulo de destacado';\n\n    public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces';\n\n    public video: MediaVideo = {\n      src: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.mp4',\n      title: 'Buenos Aires se escribe en plural',\n      track: 'https://gcba.github.io/Obelisco/panel/videoBuenosAires.vtt'\n    };\n\n    public iframe: MediaIframe = {\n      src: 'https://www.youtube.com/embed/sXE613Oaxvc?si=iWSX1erqQxXOLojw',\n      title: 'Buenos Aires se escribe en plural'\n    };\n  }\n",
        A =
          '\n  <o-highlighted [title]="title" [description]="description">\n    <o-button #children size="lg" type="secondary" link="#" icon="file_download" text="Descargar" download="">\n    </o-button>\n  </o-highlighted>\n',
        T =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public title: string = 'T\xedtulo de destacado';\n\n    public description: string = 'Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces. Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas l\xedneas. No puede contener negritas ni enlaces';\n  }\n",
        h =
          '\n  <o-highlighted [title]="title" [description]="description" [image]="picture" [isBgLight]="true">\n    <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm">\n    </o-access>\n  </o-highlighted>\n',
        f =
          '\n  <div class="container">\n    <div class="card-deck max-cards-2">\n      <o-highlighted type="grouping" [title]="title" [description]="description" [image]="picture">\n        <o-button #children link="#" size="lg"></o-button>\n      </o-highlighted>\n      <o-highlighted type="grouping" [title]="title" [description]="description" [image]="picture">\n        <o-button #children size="lg" type="secondary" link="#" icon="file_download" text="Descargar" download=""></o-button>\n      </o-highlighted>\n    </div>\n  </div>\n',
        S =
          '\n  <div class="container">\n    <div class="card-deck max-cards-2">\n      <o-highlighted type="grouping" [title]="title" [description]="description" [video]="video">\n        <a #children class="external" href="#" target="_blank">Enlace externo</a>\n      </o-highlighted>\n      <o-highlighted type="grouping" [title]="title" [description]="description" [iframe]="iframe">\n        <a #children class="external" href="#" target="_blank">Enlace externo</a>\n      </o-highlighted>\n    </div>\n  </div>\n',
        I =
          '\n  <div class="container">\n    <div class="card-deck max-cards-2">\n      <o-highlighted type="grouping" [title]="title" [description]="description">\n        <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>\n      </o-highlighted>\n      <o-highlighted type="grouping" [title]="title" [description]="description">\n        <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>\n      </o-highlighted>\n    </div>\n  </div>\n',
        x =
          '\n  <o-highlighted type="lateral" [title]="title" [description]="description">\n    <o-button #children link="#" size="lg" [isExpandable]="true"></o-button>\n  </o-highlighted>\n\n  <o-highlighted type="lateral" [title]="title" [description]="description">\n    <o-button #children size="lg" type="secondary" link="#" icon="file_download" text="Descargar" download="" [isExpandable]="true"></o-button>\n  </o-highlighted>\n\n  <o-highlighted type="lateral" [title]="title" [description]="description">\n    <a #children class="external" href="#" target="_blank">Enlace externo</a>\n  </o-highlighted>\n\n  <o-highlighted type="lateral" [title]="title" [description]="description">\n    <o-access #children title="Acceso" icon="bx bxs-info-circle" route="/home" size="sm"></o-access>\n  </o-highlighted>\n',
        v = [
          {
            name: { data: '@Input() <br/> type: HighlightedType', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el tipo de destacado. Por defecto es banner.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> title: string', customClasses: '' },
            description: { data: 'Establece el t\xedtulo del destacado.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> description: string', customClasses: '' },
            description: { data: 'Define el contenido de texto principal del destacado.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> image: MediaImage' },
            description: { data: 'Define la imagen principal del destacado.' }
          },
          {
            name: { data: '@Input() <br/> video: MediaVideo' },
            description: { data: 'Define el video principal del destacado.' }
          },
          {
            name: { data: '@Input() <br/> iframe: MediaIframe' },
            description: { data: 'Define el iframe principal del destacado.' }
          },
          {
            name: { data: '@Input() <br/> isBgLight: boolean', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para indicar si el fondo del destacado es claro. Por defecto es false.',
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
        N = "\n  type HighlightedType = 'banner' | 'grouping' | 'lateral';\n",
        L =
          '\n  interface Media {\n    src: string;\n  }\n  interface MediaImage extends Media {\n    alt: string;\n  }\n',
        y =
          '\n  interface Media {\n    src: string;\n  }\n  interface MediaVideo extends Media {\n    track: string;\n    title: string;\n  }\n',
        R =
          '\n  interface Media {\n    src: string;\n  }\n  interface MediaIframe extends Media {\n    title: string;\n  }\n',
        M = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          {
            name: { data: 'alt: string' },
            description: { data: 'Se utiliza para definir el texto alternativo de la imagen.' }
          }
        ],
        O = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          {
            name: { data: 'track: string' },
            description: { data: 'Se utiliza para definir la ruta al elemento con formato WebVTT (archivos .vtt).' }
          },
          { name: { data: 'title: string' }, description: { data: 'Se utiliza para definir el t\xedtulo del video.' } }
        ],
        D = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          { name: { data: 'title: string' }, description: { data: 'Se utiliza para definir el t\xedtulo del iframe.' } }
        ];
    },
    2766: (g, d, a) => {
      a.d(d, { DF: () => r, b0: () => c, fK: () => u, fN: () => l, ld: () => i, ub: () => e, z7: () => n });
      const r = [
          { title: 'Api', route: '/components/map/api' },
          { title: 'Ejemplos', route: '/components/map/examples' }
        ],
        n =
          '\n  <o-map\n    [title]="\'Ubicaci\xf3n\'"\n    [description]="\'Uspallata 3160\'"\n    [iframe]="iframe"\n  >\n    <o-button\n      text="C\xf3mo llego"\n      [isExpandable]="true"\n      link="https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160"\n      target="_blank"\n      rel="noreferrer"\n    ></o-button>\n  </o-map>\n',
        e = {
          src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',
          title: 'Mapa de Buenos Aires'
        },
        l =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public iframe: MediaIframe = {\n      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.561313314447!2d-58.40988132452283!3d-34.64052465944252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb0de7f4d675%3A0xfc2ef5324296a64!2sUspallata%203160%2C%20C1437JCL%20CABA!5e0!3m2!1ses!2sar!4v1704218461718!5m2!1ses!2sar',\n      title: 'Mapa de Buenos Aires'\n    };\n  }\n",
        c = [
          {
            name: { data: '@Input() <br/> title: string', customClasses: '' },
            description: { data: 'Establece el t\xedtulo del destacado.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> description: string', customClasses: '' },
            description: { data: 'Define la direcci\xf3n del mapa.', customClasses: '' }
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
        ],
        i =
          '\n  interface Media {\n    src: string;\n  }\n\n  interface MediaIframe extends Media {\n    title: string;\n  }\n',
        u = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          { name: { data: 'title: string' }, description: { data: 'Se utiliza para definir el t\xedtulo del iframe.' } }
        ];
    },
    9188: (g, d, a) => {
      a.d(d, { O2: () => l, Zr: () => c, a3: () => e, it: () => n, oT: () => r });
      const r = [
          { title: 'Api', route: '/components/modal/api' },
          { title: 'Ejemplos', route: '/components/modal/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> dataTarget: string', customClasses: '' },
            description: { data: 'Se utiliza para identificar el componente.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> title: string', customClasses: '' },
            description: { data: 'Se utiliza para mostrar el t\xedtulo del componente.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> description: string', customClasses: '' },
            description: { data: 'Se utiliza para mostrar la descripci\xf3n del componente.', customClasses: '' }
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
        ],
        e =
          '\n  <o-button text="Ver modal" dataToggle="modal" dataTarget="exampleModal"></o-button>\n  <o-modal\n    dataTarget="exampleModal"\n    title="\xa1Importante!"\n    description="Antes de realizar la ficha de salud,\n    ten\xe9 en cuenta haber realizado los pasos previos correspondientes."\n    [isBordered]="true"\n  >\n    <o-button text="Volver atr\xe1s" type="link" dataDismiss="modal"></o-button>\n    <o-button text="Continuar"></o-button>\n  </o-modal>',
        l =
          '\n  <o-button text="Ver modal" dataToggle="modal" dataTarget="dangerModal"></o-button>\n  <o-modal\n    dataTarget="dangerModal"\n    title="Eliminar documento"\n    description="El documento que seleccionaste ser\xe1 eliminado."\n    [isBordered]="true"\n  >\n    <o-button text="Cancelar" type="secondary" [isOutline]="true" dataDismiss="modal"></o-button>\n    <o-button text="Eliminar" type="danger"></o-button>\n  </o-modal>',
        c =
          '\n  <o-button text="Ver modal" dataToggle="modal" dataTarget="recognitionModal"></o-button>\n  <o-modal\n    dataTarget="recognitionModal"\n    subtitle="CARGA EXITOSA"\n    title="Los archivos se cargaron correctamente"\n  >\n    <o-button text="Aceptar" dataDismiss="modal"></o-button>\n  </o-modal>';
    },
    4021: (g, d, a) => {
      a.d(d, {
        GO: () => O,
        HW: () => v,
        LL: () => E,
        MZ: () => A,
        Rk: () => f,
        T5: () => M,
        Tm: () => i,
        Uh: () => m,
        Un: () => x,
        VG: () => c,
        VS: () => e,
        X: () => S,
        Xf: () => R,
        _J: () => r,
        bF: () => l,
        eE: () => C,
        ix: () => h,
        l: () => n,
        nq: () => b,
        rC: () => I,
        rm: () => N,
        vP: () => L,
        wD: () => T,
        xF: () => y,
        xi: () => u
      });
      const r = [
          { title: 'Api', route: '/components/navbar/api' },
          { title: 'Ejemplos', route: '/components/navbar/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br /> id: string', customClasses: '' },
            description: {
              data: 'Se utiliza para proporcionar una identificaci\xf3n \xfanica al componente de barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> logo: MediaHeader', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar la imagen del logotipo que se mostrar\xe1 en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> isRouteExact: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para indicar si se requiere una coincidencia exacta de ruta al determinar la activaci\xf3n de una ruta en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> routes: NavbarRoute[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir las rutas principales que se mostrar\xe1n en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> routesExtended: NavbarRoute[]', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar rutas adicionales que se mostrar\xe1n en la barra de navegaci\xf3n, posiblemente como extensiones de las rutas principales.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> routesAccount: NavbarRouteAccount', customClasses: '' },
            description: {
              data: 'Se utiliza para definir las rutas relacionadas con la cuenta de usuario que se mostrar\xe1n en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> routesLogin: NavbarRouteLogin', customClasses: '' },
            description: {
              data: 'Se utiliza para definir las rutas de inicio de sesi\xf3n o autenticaci\xf3n que se mostrar\xe1n en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> searchbarItems: SearchbarItem[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir los elementos que se mostrar\xe1n en la barra de b\xfasqueda, permitiendo a los usuarios realizar b\xfasquedas en el sitio.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> maxLengthResults: number', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el n\xfamero m\xe1ximo de resultados que se mostrar\xe1n en los resultados de b\xfasqueda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> placeholder: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el texto de marcador de posici\xf3n en el campo de b\xfasqueda de la barra de navegaci\xf3n.',
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
        e =
          '\n  interface NavbarRouteBase {\n    iconLeft?: string;\n    title?: string;\n    iconRight?: string;\n    route?: string;\n    link?: string;\n  }\n',
        l =
          '\n  interface Media {\n    src: string;\n  }\n\n  interface MediaHeader extends Media {\n    route?: string;\n    alt?: string;\n    width?: string;\n    height?: string;\n    customClasses?: string;\n  }\n',
        c =
          '\n  interface NavbarRoute extends NavbarRouteBase {\n    children?: NavbarRouteItem[];\n  }\n\n  interface NavbarRouteItem extends NavbarRouteBase {\n    isOverviewItem?: boolean;\n  }\n',
        i =
          '\n  interface NavbarRouteAccount extends NavbarRouteBase {\n    children?: NavbarRouteAccountItem[];\n  }\n\n  interface NavbarRouteAccountItem extends NavbarRouteBase {\n    isDangerTitle?: boolean;\n    isWithNotification?: boolean;\n  }\n',
        u = '\n  interface NavbarRouteLogin extends NavbarRouteBase {}\n',
        m = '\n  interface SearchbarItem {\n    title: string;\n    route: string;\n  }\n',
        b = [
          {
            name: { data: '@Input() <br /> route: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar la ruta de la imagen del logotipo que se mostrar\xe1 en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> src: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir la fuente de la imagen del logotipo que se mostrar\xe1 en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> alt: string', customClasses: '' },
            description: {
              data: 'Se utiliza para proporcionar un texto alternativo para la imagen del logotipo, \xfatil para accesibilidad y SEO.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> width: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el ancho de la imagen del logotipo.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> height: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el alto de la imagen del logotipo.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas a la imagen del logotipo.',
              customClasses: ''
            }
          }
        ],
        C = [
          {
            name: { data: '@Input() <br /> iconLeft: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar el \xedcono que se mostrar\xe1 a la izquierda del enlace en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> title: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el t\xedtulo o etiqueta del enlace en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> iconRight: string', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer un \xedcono que se mostrar\xe1 a la derecha del enlace en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> route: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar la ruta o URL a la que se redirigir\xe1 cuando se haga clic en el enlace en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> link: string', customClasses: '' },
            description: {
              data: 'Se utiliza para proporcionar un enlace adicional relacionado con el elemento de la barra de navegaci\xf3n, como un enlace a la documentaci\xf3n o detalles adicionales.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> children: NavbarRouteItem[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir subelementos o enlaces secundarios que estar\xe1n anidados bajo este elemento en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          }
        ],
        E = [
          {
            name: { data: '@Input() <br /> children: NavbarRouteItem[]', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar los elementos secundarios que estar\xe1n anidados bajo este elemento de la barra de navegaci\xf3n. Cada elemento representa un enlace en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          }
        ],
        A = [
          {
            name: { data: '@Input() <br /> isOverviewItem: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para indicar si este elemento de la barra de navegaci\xf3n es un elemento de vista general (overview). Cuando es verdadero, puede tener un estilo o comportamiento especial.',
              customClasses: ''
            }
          }
        ],
        T = [
          {
            name: { data: '@Input() <br /> children: NavbarRouteAccountItem[]', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar los elementos secundarios relacionados con la cuenta del usuario que estar\xe1n anidados bajo este elemento en la barra de navegaci\xf3n.',
              customClasses: ''
            }
          }
        ],
        h = [
          {
            name: { data: '@Input() <br /> isDangerTitle: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para indicar si este elemento de la barra de navegaci\xf3n de la cuenta del usuario tiene un estilo de t\xedtulo de peligro. Puede usarse para resaltar elementos importantes o riesgosos.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> isWithNotification: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar si este elemento de la barra de navegaci\xf3n de la cuenta del usuario debe mostrar una notificaci\xf3n visual para alertar al usuario sobre eventos importantes o mensajes nuevos.',
              customClasses: ''
            }
          }
        ],
        f = [
          {
            name: { data: '@Input() <br /> title: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el t\xedtulo o etiqueta del elemento de b\xfasqueda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> route: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar la ruta o URL a la que se redirigir\xe1 cuando se realice una b\xfasqueda en este elemento.',
              customClasses: ''
            }
          }
        ],
        S =
          '\n  <o-navbar\n    id="navbarOne"\n    [routes]="routes"\n    [routesLogin]="routesLogin"\n  ></o-navbar>\n',
        I =
          '\n  <o-navbar\n    id="navbarTwo"\n    [routesExtended]="routesExtended"\n    [routesLogin]="routesLogin"\n  ></o-navbar>\n',
        x =
          '\n  <o-navbar\n    id="navbarThree"\n    [routes]="routes"\n    [routesAccount]="routesAccount"\n  ></o-navbar>\n',
        v =
          '\n  <o-navbar\n    id="navbarFour"\n    [routesExtended]="routesExtended"\n    [routesAccount]="routesAccount"\n  ></o-navbar>\n',
        N =
          '\n  <o-navbar\n    id="navbarFive"\n    [routes]="routes"\n    [searchbarItems]="searchbarItems"\n  ></o-navbar>\n',
        L =
          "\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    routes: NavbarRoute[] = [\n      {\n        title: 'Secci\xf3n 1',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            link: 'https://music.youtube.com/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 2',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 3',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/',\n            isOverviewItem: true\n          }\n        ]\n      }\n    ];\n\n    routesLogin: NavbarRouteLogin = {\n      title: 'Ingresar',\n      route: '/'\n    };\n  }\n",
        y =
          "\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    routesExtended: NavbarRoute[] = [\n      {\n        title: 'Secci\xf3n 1',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 2',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 3',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 4',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 5',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/',\n            isOverviewItem: true\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 6',\n        route: '/'\n      }\n    ];\n\n    routesLogin: NavbarRouteLogin = {\n      title: 'Ingresar',\n      route: '/'\n    };\n  }\n",
        R =
          "\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    routes: NavbarRoute[] = [\n      {\n        title: 'Secci\xf3n 1',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            link: 'https://music.youtube.com/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 2',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 3',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/',\n            isOverviewItem: true\n          }\n        ]\n      }\n    ];\n\n    routesAccount: NavbarRouteAccount = {\n      title: 'Pefil',\n      children: [\n        {\n          title: 'Navegaci\xf3n',\n          route: '/'\n        },\n        {\n          title: 'Navegaci\xf3n',\n          route: '/'\n        },\n        {\n          title: 'Navegaci\xf3n',\n          route: '/'\n        },\n        {\n          title: 'Notificaciones',\n          route: '/',\n          isWithNotification: true\n        },\n        {\n          title: 'Cerrar sesi\xf3n',\n          route: '/',\n          isDangerTitle: true\n        }\n      ]\n    };\n  }\n",
        M =
          "\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    routesExtended: NavbarRoute[] = [\n      {\n        title: 'Secci\xf3n 1',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 2',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 3',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 4',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 5',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/',\n            isOverviewItem: true\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 6',\n        route: '/'\n      }\n    ];\n\n    routesAccount: NavbarRouteAccount = {\n      title: 'Pefil',\n      children: [\n        {\n          title: 'Navegaci\xf3n',\n          route: '/'\n        },\n        {\n          title: 'Navegaci\xf3n',\n          route: '/'\n        },\n        {\n          title: 'Navegaci\xf3n',\n          route: '/'\n        },\n        {\n          title: 'Notificaciones',\n          route: '/',\n          isWithNotification: true\n        },\n        {\n          title: 'Cerrar sesi\xf3n',\n          route: '/',\n          isDangerTitle: true\n        }\n      ]\n    };\n  }\n",
        O =
          "\n  import { Component  } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    routes: NavbarRoute[] = [\n      {\n        title: 'Secci\xf3n 1',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            link: 'https://music.youtube.com/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          }\n        ]\n      },\n      {\n        title: 'Secci\xf3n 2',\n        route: '/'\n      },\n      {\n        title: 'Secci\xf3n 3',\n        children: [\n          {\n            title: 'Navegaci\xf3n',\n            route: '/'\n          },\n          {\n            title: 'Navegaci\xf3n',\n            route: '/',\n            isOverviewItem: true\n          }\n        ]\n      }\n    ];\n\n    searchbarItems: SearchbarItem[] = [\n      {\n        title: 'Inicio',\n        route: '/'\n      },\n      {\n        title: 'Introducci\xf3n',\n        route: '/get-started'\n      },\n      {\n        title: 'Componentes',\n        route: '/components'\n      }\n    ];\n  }\n";
    },
    9394: (g, d, a) => {
      a.d(d, { LO: () => e, T9: () => n, TC: () => i, gX: () => l, tf: () => c, yH: () => r });
      const r = [
          { title: 'Api', route: '/components/pagination/api' },
          { title: 'Ejemplos', route: '/components/pagination/examples' }
        ],
        n =
          '\n  <o-pagination\n    [totalPages]="10"\n    [currentPage]="1"\n    ariaLabel="Ejemplo de paginaci\xf3n inicial"\n    (currentPageChange)="actualPage($event)"\n  ></o-pagination>\n',
        e =
          '\n  <o-pagination\n    [totalPages]="10"\n    [currentPage]="5"\n    ariaLabel="Ejemplo de paginaci\xf3n central"\n    (currentPageChange)="actualPage($event)"\n  ></o-pagination>\n',
        l =
          '\n  <o-pagination\n    [totalPages]="10"\n    [currentPage]="10"\n    ariaLabel="Ejemplo de paginaci\xf3n final"\n    (currentPageChange)="actualPage($event)"\n  ></o-pagination>\n',
        c =
          '\n  <o-pagination\n    [totalPages]="10"\n    [currentPage]="5"\n    [isDiscriptiveType]="true"\n    ariaLabel="Ejemplo de paginaci\xf3n sin numerado"\n    (currentPageChange)="actualPage($event)"\n  ></o-pagination>\n',
        i =
          "\n  import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public actualPage(event: number): void {\n      console.log(event);\n    }\n  }\n";
    },
    5871: (g, d, a) => {
      a.d(d, {
        $6: () => e,
        BC: () => i,
        EY: () => C,
        HM: () => r,
        MW: () => b,
        Oj: () => h,
        UI: () => T,
        _2: () => E,
        dc: () => m,
        le: () => A,
        n$: () => l,
        oY: () => c,
        rI: () => u,
        xV: () => n
      });
      const r = [
          { title: 'Api', route: '/components/panel/api' },
          { title: 'Ejemplos', route: '/components/panel/examples' }
        ],
        n = { src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png', alt: 'descripci\xf3n de imagen' },
        e = {
          src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',
          alt: 'descripci\xf3n de imagen',
          size: 'lg'
        },
        l = [
          {
            name: { data: '@Input() <br/> title: string', customClasses: '' },
            description: { data: 'Propiedad de entrada para el t\xedtulo del panel peque\xf1o.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> description: string', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para la descripci\xf3n del panel peque\xf1o.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> image: MediaPanel', customClasses: '' },
            description: { data: 'Define la imagen principal del destacado.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br/> isBgWhite: boolean', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para indicar si el fondo del panel peque\xf1o es blanco.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isBgLight: boolean', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para indicar si el fondo del panel peque\xf1o es claro.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isVertical: boolean', customClasses: '' },
            description: {
              data: 'Propiedad de entrada para indicar si el panel peque\xf1o es vertical. Por defecto es horizontal',
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
        c =
          '\n  <o-panel-small\n    [title]="title"\n    [description]="description"\n    [image]="image">\n  </o-panel-small>\n',
        i =
          "\n  import { Component } from '@angular/core';\n  import { MediaSizes, MediaPanel } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public title: string = 'Nombre del titular';\n\n    public description: string = 'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.';\n\n    public image: MediaPanel = {\n      src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',\n      alt: 'descripci\xf3n de imagen',\n      size: 'lg' as MediaSizes\n    };\n  }\n",
        u =
          "\n  import { Component } from '@angular/core';\n  import { MediaPanel } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    template: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    public title: string = 'Nombre del titular';\n\n    public description: string = 'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.';\n\n    public image: MediaPanel = {\n      src: 'https://gcba.github.io/Obelisco/cards/paseobajo-wide.png',\n      alt: 'descripci\xf3n de imagen'\n    };\n  }\n",
        m =
          '\n  <o-panel-small\n    [title]="title"\n    [description]="description"\n    [image]="image"\n    [isVertical]="true">\n  </o-panel-small>\n',
        b =
          '\n  <o-panel-small\n    [title]="title"\n    [description]="description"\n    [image]="image"\n    [isVertical]="true"\n    [isBgWhite]="true">\n  </o-panel-small>\n\n  <o-panel-small\n    [title]="title"\n    [description]="description"\n    [image]="image"\n    [isVertical]="true"\n    [isBgLight]="true">\n  </o-panel-small>\n',
        C =
          '\n  <o-panel-small\n    [title]="title"\n    [description]="description"\n    [image]="image"\n    [isVertical]="true">\n    <ng-container #listLinkContent>\n      <h4 class="list-link-item-title">Nombre del archivo</h4>\n      <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>\n      <h4 class="list-link-item-title">Nombre del archivo</h4>\n      <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>\n      <h4 class="list-link-item-title">Nombre del archivo</h4>\n      <a class="btn btn-secondary btn-sm download-link card-link" href="#" download=""> Descargar </a>\n    </ng-container>\n  </o-panel-small>\n',
        E =
          '\n  <o-panel-small\n    [title]="title"\n    [description]="description"\n    [image]="image"\n    [isVertical]="true">\n    <ng-container #panelFooterContent>\n      <button type="button" class="btn btn-secondary btn-sm card-link">Acci\xf3n 1</button>\n      <button type="button" class="btn btn-link btn-sm card-link">Acci\xf3n 2</button>\n    </ng-container>\n  </o-panel-small>\n',
        A =
          '\n  interface Media {\n    src: string;\n  }\n\n  interface MediaPanel extends Media {\n    size: MediaSizes;\n    alt: string;\n  }\n',
        T = [
          {
            name: { data: 'src: string' },
            description: { data: 'Se utiliza para definir la url del elemento multimedia.' }
          },
          {
            name: { data: 'size: MediaSizes' },
            description: { data: 'Se utiliza para definir el tama\xf1o de la imagen.' }
          },
          {
            name: { data: 'alt: string' },
            description: { data: 'Se utiliza para definir el texto alternativo de la imagen.' }
          }
        ],
        h = "\n  type MediaSizes = 'sm' | 'md' | 'lg';\n";
    },
    4695: (g, d, a) => {
      a.d(d, {
        L8: () => u,
        SW: () => n,
        fj: () => e,
        kW: () => m,
        mC: () => i,
        qh: () => l,
        re: () => c,
        zI: () => r
      });
      const r = [
          { title: 'Api', route: '/components/progress-bar/api' },
          { title: 'Ejemplos', route: '/components/progress-bar/examples' }
        ],
        n = "\n  type ProgressBarTypes = 'info' | 'success';\n",
        e = [
          {
            name: { data: '@Input() <br /> isSteps: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para definir si mostrar el paso actual y el total de pasos o no. Por defecto es false.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> type: ProgressBarTypes', customClasses: '' },
            description: { data: 'Se utiliza para definir el tipo de la barra de progreso.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> currentStep: number', customClasses: '' },
            description: { data: 'Se utiliza para definir el paso actual.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> totalStep: number', customClasses: '' },
            description: { data: 'Se utiliza para definir el total de pasos.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        l = [
          {
            name: { data: '@Output() <br /> stopProgress: EventEmitter<boolean>', customClasses: '' },
            description: {
              data: 'Se utiliza para detener el proceso. <br/> Ocurrir\xe1 cuando se llegue al \xfaltimo paso y la barra de progreso se complete. <br/> El valor emitido ser\xe1 true.',
              customClasses: ''
            }
          }
        ],
        c =
          '\n  <o-progress-bar type="info" description=\'Descripci\xf3n\' [currentStep]="4" [totalSteps]="8"></o-progress-bar>\n\n  <o-button oStepPrevious type="link" size="sm" text="Anterior"></o-button>\n  <o-button oStepNext type="link" size="sm" text="Siguiente"></o-button>\n',
        i =
          '\n  <o-progress-bar\n    type="success"\n    description=\'Descripci\xf3n\'\n    [currentStep]="4"\n    [totalSteps]="8"\n    (stopSteps)="stopProgress($event)"\n  ></o-progress-bar>\n\n  <o-button type="link" size="sm" text="Anterior" (click)="previousStep()"></o-button>\n  <o-button type="link" size="sm" text="Siguiente" (click)="nextStep()"></o-button>\n',
        u =
          "\n  import { Component, OnInit } from '@angular/core';\n  import { StepService } from 'ngx-obelisco';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent implements OnInit {\n    constructor(private readonly progressBarService: StepService) {}\n\n    public ngOnInit(): void {\n      this.progressBarService.initialize();\n    }\n\n    public nextStep(): void {\n      this.progressBarService.next();\n    }\n\n    public previousStep(): void {\n      this.progressBarService.previous();\n    }\n\n    public stopProgress(event: boolean): void {\n      if (event) {\n        console.log('Completado');\n      }\n    }\n  }\n",
        m =
          '\n  <o-progress-bar type="info" [currentStep]="5"></o-progress-bar>\n\n  <o-progress-bar type="success" [currentStep]="4"></o-progress-bar>\n';
    },
    4719: (g, d, a) => {
      a.d(d, { DH: () => c, Ey: () => e, Rk: () => l, eY: () => n, p_: () => r, xD: () => i });
      const r = [
          { title: 'Api', route: '/components/search/api' },
          { title: 'Ejemplos', route: '/components/search/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br /> searchbarItems: SearchbarItem[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir los elementos que se mostrar\xe1n en la barra de b\xfasqueda, permitiendo a los usuarios realizar b\xfasquedas en el sitio.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> maxLengthResults: number', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el n\xfamero m\xe1ximo de resultados que se mostrar\xe1n en los resultados de b\xfasqueda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br />  placeholder: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el texto de marcador de posici\xf3n en el campo de b\xfasqueda de la barra de navegaci\xf3n.',
              customClasses: ''
            }
          }
        ],
        e = '\n  interface SearchbarItem {\n    title: string;\n    route: string;\n  }',
        l = [
          {
            name: { data: '@Input() <br /> title: string', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el t\xedtulo o etiqueta del elemento de b\xfasqueda.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> route: string', customClasses: '' },
            description: {
              data: 'Se utiliza para especificar la ruta o URL a la que se redirigir\xe1 cuando se realice una b\xfasqueda en este elemento.',
              customClasses: ''
            }
          }
        ],
        c = '\n  <o-search [searchbarItems]="routes"></o-search>\n',
        i =
          "\n  import { Component  } from '@angular/core';\n  import { SearchbarItem } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    routes: SearchbarItem[] = [\n      {\n        title: 'Inicio',\n        route: '/'\n      },\n      {\n        title: 'Introducci\xf3n',\n        route: '/get-started'\n      },\n      {\n        title: 'Componentes',\n        route: '/components'\n      },\n      {\n        title: 'Buscador',\n        route: '/components/search'\n      }\n    ];\n  }\n";
    },
    8631: (g, d, a) => {
      a.d(d, { Al: () => c, M8: () => u, P3: () => e, SH: () => l, Zi: () => r, e3: () => i, oO: () => n });
      const r = [
          { title: 'Api', route: '/components/spinner/api' },
          { title: 'Ejemplos', route: '/components/spinner/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> type: SpinnerTypes', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el color del spinner. Por defecto es info.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> size: Sizes', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el tama\xf1o del spinner. Por defecto es mediano.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isExpandable: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer si el spinner es expandible. Por defecto es false.',
              customClasses: ''
            }
          }
        ],
        e = "\n  type SpinnerTypes = 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'dark' | 'light';\n",
        l =
          '\n  <o-spinner></o-spinner>\n  <o-spinner type="primary"></o-spinner>\n  <o-spinner type="secondary"></o-spinner>\n  <o-spinner type="success"></o-spinner>\n  <o-spinner type="danger"></o-spinner>\n  <o-spinner type="light"></o-spinner>\n  <o-spinner type="dark"></o-spinner>\n',
        c = '\n  <o-spinner size="sm"></o-spinner>\n  <o-spinner></o-spinner>\n  <o-spinner size="lg"></o-spinner>\n',
        i = '\n  <div style="width: 64px">\n    <o-spinner [isExpandable]="true"></o-spinner>\n  </div>\n',
        u = '\n  <o-spinner size="lg"></o-spinner>\n  <small class="mt-2">Cargando...</small>\n';
    },
    919: (g, d, a) => {
      a.d(d, { Dn: () => l, Fr: () => r, aq: () => n, fI: () => e });
      const r = [
          { title: 'Api', route: '/components/status-message/api' },
          { title: 'Ejemplos', route: '/components/status-message/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br /> type: StatusMessageTypes', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el tipo de mensaje que se quiere mostrar.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> title: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el t\xedtulo del mensaje.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> content: string | string[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir el texto del mensaje. Puede ser un string o un array de strings. Si es un array, se mostrar\xe1 como dos p\xe1rrafos separados.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> listContent: string[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir una lista de \xedtems que se mostrar\xe1n debajo del texto. Se puede armar con etiquetas html. No es obligatorio.',
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
        e = "\n  type StatusMessageTypes = 'primary' | 'success' | 'danger' | 'info' | 'institutional';\n",
        l = [
          {
            name: '\xc9xito',
            type: 'success',
            title: 'Esto es un t\xedtulo de un mensaje de \xe9xito',
            content:
              'Esto es un p\xe1rrafo que acompa\xf1a y sirve para indicar que el usuario realiz\xf3 una acci\xf3n correctamente, como cuando realiza una tarea con \xe9xito.',
            listContent: [
              '\xc9ste es un \xedtem dentro de una lista que puede contener un <a href="#">enlace</a>.',
              'Los \xedtems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.',
              '\xc9ste es otro \xedtem dentro de una lista.'
            ],
            exampleHTML:
              '\n      <o-status-message\n        type="success"\n        title="Esto es un t\xedtulo de un mensaje de \xe9xito"\n        content="Esto es un p\xe1rrafo que acompa\xf1a y sirve para indicar que el usuario realiz\xf3 una acci\xf3n correctamente, como cuando realiza una tarea con \xe9xito."\n        [listContent]="listContent"\n      >\n        <o-button type="secondary"></o-button>\n      </o-status-message>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public listContent: string[] = [\n          '\xc9ste es un \xedtem dentro de una lista que puede contener un <a href=\"#\">enlace</a>.',\n          'Los \xedtems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.',\n          '\xc9ste es otro \xedtem dentro de una lista.'\n        ]\n      }\n    "
          },
          {
            name: 'Advertencia',
            type: 'primary',
            title: 'Esto es un t\xedtulo de un mensaje de advertencia',
            content:
              'Esto es un p\xe1rrafo que advierte y sirve para indicarle al usuario que preste atenci\xf3n a determinada informaci\xf3n o acci\xf3n que debe realizar.',
            listContent: [
              'Contar con Clave Ciudad de <a href="#">AGIP</a>',
              'Cargar en el Sistema de Tramitaci\xf3n a Distancia (TAD) la siguiente documentaci\xf3n obligatoria:',
              'Anexo II Formulario de Presentaci\xf3n de Programa de Capacitaci\xf3n'
            ],
            exampleHTML:
              '\n      <o-status-message\n        type="primary"\n        title="Esto es un t\xedtulo de un mensaje de advertencia"\n        content="Esto es un p\xe1rrafo que advierte y sirve para indicarle al usuario que preste atenci\xf3n a determinada informaci\xf3n o acci\xf3n que debe realizar."\n        [listContent]="listContent"\n      >\n        <o-button type="secondary"></o-button>\n        <o-button type="secondary" [isOutline]="true"></o-button>\n      </o-status-message>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public listContent: string[] = [\n          'Contar con Clave Ciudad de <a href=\"#\">AGIP</a>',\n          'Cargar en el Sistema de Tramitaci\xf3n a Distancia (TAD) la siguiente documentaci\xf3n obligatoria:',\n          'Anexo II Formulario de Presentaci\xf3n de Programa de Capacitaci\xf3n'\n        ]\n      }\n    "
          },
          {
            name: 'Informaci\xf3n',
            type: 'info',
            title: 'Esto es un t\xedtulo de un mensaje de informaci\xf3n',
            content: [
              'Este es un p\xe1rrafo que brinda informaci\xf3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.',
              'Este es un p\xe1rrafo que brinda informaci\xf3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.'
            ],
            exampleHTML:
              '\n      <o-status-message\n        type="info"\n        title="Esto es un t\xedtulo de un mensaje de informaci\xf3n"\n        [text]="text"\n      >\n        <o-button type="secondary"></o-button>\n      </o-status-message>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public text: string[] = [\n          'Este es un p\xe1rrafo que brinda informaci\xf3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.',\n          'Este es un p\xe1rrafo que brinda informaci\xf3n necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.'\n        ]\n      }\n    "
          },
          {
            name: 'Error',
            type: 'danger',
            title: 'Esto es un t\xedtulo de un mensaje de peligro',
            content:
              'Este p\xe1rrafo sirve para comunicar que algo sali\xf3 mal y explica c\xf3mo puede ser solucionado. Muestra errores sobre algo que se realiz\xf3.',
            listContent: [
              'Contar con Clave Ciudad de <a href="#">AGIP</a>',
              'Cargar en el Sistema de Tramitaci\xf3n a Distancia (TAD) la siguiente documentaci\xf3n obligatoria:',
              'Anexo II Formulario de Presentaci\xf3n de Programa de Capacitaci\xf3n'
            ],
            exampleHTML:
              '\n      <o-status-message\n        type="danger"\n        title="Esto es un t\xedtulo de un mensaje de peligro"\n        content="Este p\xe1rrafo sirve para comunicar que algo sali\xf3 mal y explica c\xf3mo puede ser solucionado. Muestra errores sobre algo que se realiz\xf3."\n        [listContent]="listContent"\n      >\n        <o-button type="secondary"></o-button>\n        <o-button type="secondary" [isOutline]="true"></o-button>\n      </o-status-message>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public listContent: string[] = [\n          'Contar con Clave Ciudad de <a href=\"#\">AGIP</a>',\n          'Cargar en el Sistema de Tramitaci\xf3n a Distancia (TAD) la siguiente documentaci\xf3n obligatoria:',\n          'Anexo II Formulario de Presentaci\xf3n de Programa de Capacitaci\xf3n'\n        ]\n      }\n    "
          },
          {
            name: 'Institucional',
            type: 'institutional',
            title: 'Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires',
            content:
              "En el cuerpo de este componente pueden ir enlaces o botones: <a href='#'>https://ejemplo.buenosaires.gob.ar</a>",
            exampleHTML:
              '\n      <o-status-message\n        type="institutional"\n        title="Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires"\n        content="En el cuerpo de este componente pueden ir enlaces o botones: <a href=\'#\'>https://ejemplo.buenosaires.gob.ar</a>"\n      >\n        <o-button type="link" [isOutline]="true" text="Ir al sitio web" link="https://buenosaires.gob.ar/">\n        </o-button>\n      </o-status-message>\n    '
          }
        ];
    },
    1469: (g, d, a) => {
      a.d(d, { Pf: () => n, Ss: () => i, el: () => c, pU: () => l, s9: () => r, z8: () => e, zM: () => u });
      const r = [
          { title: 'Api', route: '/components/steps-form/api' },
          { title: 'Ejemplos', route: '/components/steps-form/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> steps: string[]', customClasses: '' },
            description: {
              data: 'Se utiliza para definir los pasos que se mostrar\xe1n en la barra de estado.',
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
        e = [
          {
            name: { data: '@Output <br /> stopSteps: EventEmitter<boolean>', customClasses: '' },
            description: {
              data: 'Se utiliza para detener el proceso. Ocurrir\xe1 cuando se llegue al \xfaltimo paso y la barra de progreso se complete. El valor emitido ser\xe1 true.',
              customClasses: ''
            }
          }
        ],
        l =
          '\n  <o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>\n\n  <button oStepPrevious class="btn btn-sm btn-link mr-2">Anterior</button>\n  <button oStepNext class="btn btn-sm btn-link">Siguiente</button>\n',
        c =
          "\n  import { Component, OnInit } from '@angular/core';\n  import { StepService } from 'ngx-obelisco';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent implements OnInit {\n    public steps = ['Paso 1', 'Paso 2', 'Paso 3'];\n\n    public stopProgress(event: boolean): void {\n      if (event) {\n        console.log('Completado');\n      }\n    }\n  }\n",
        i =
          '\n  <o-steps-form [steps]="steps" (stopSteps)="stopProgress($event)"></o-steps-form>\n\n  <button class="btn btn-sm btn-link mr-2" (click)="previousStep()">Anterior</button>\n  <button class="btn btn-sm btn-link" (click)="nextStep()">Siguiente</button>\n',
        u =
          "\n  import { Component, OnInit } from '@angular/core';\n  import { StepService } from 'ngx-obelisco';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent implements OnInit {\n    public steps = ['Paso 1', 'Paso 2', 'Paso 3'];\n\n    constructor(private readonly stepsFormService: StepService) {}\n\n    public ngOnInit(): void {\n      this.stepsFormService.initialize();\n    }\n\n    public nextStep(): void {\n      this.stepsFormService.next();\n    }\n\n    public previousStep(): void {\n      this.stepsFormService.previous();\n    }\n\n    public stopProgress(event: boolean): void {\n      if (event) {\n        console.log('Completado');\n      }\n    }\n  }\n";
    },
    3677: (g, d, a) => {
      a.d(d, {
        $8: () => b,
        BP: () => c,
        Ik: () => i,
        SV: () => u,
        U7: () => l,
        Vk: () => r,
        oU: () => m,
        r3: () => e,
        yE: () => n
      });
      const r = [
          { title: 'Api', route: '/components/switch/api' },
          { title: 'Ejemplos', route: '/components/switch/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> id: string', customClasses: '' },
            description: {
              data: 'Se utiliza para identificar de manera \xfanica el elemento en el c\xf3digo.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> labelOn: string', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el texto cuando el switch est\xe1 en posici\xf3n de encendido.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> labelOff: string', customClasses: '' },
            description: {
              data: 'Se utiliza para determinar si se aplica un estilo oscuro al switch.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isDark: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para controlar si el switch se muestra en un tama\xf1o peque\xf1o.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isSmall: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para controlar si el switch se muestra en un tama\xf1o peque\xf1o.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isDisabled: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para desactivar la capacidad de interactuar con el switch.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> isFixed: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para mantener el switch en una posici\xf3n fija y evitar cambios.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br/> switchValue: boolean', customClasses: '' },
            description: {
              data: 'Se utiliza para establecer el estado inicial (encendido o apagado) del switch.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
              customClasses: ''
            }
          },
          {
            name: { data: '@Input() <br /> customClassesLabel: string', customClasses: '' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al label del componente para personalizar su apariencia.',
              customClasses: ''
            }
          }
        ],
        e = [
          {
            name: { data: '@Output() <br /> switchValueChange: EventEmitter<boolean>', customClasses: '' },
            description: {
              data: 'Se utiliza para notificar cuando se produce un cambio en el estado del switch.',
              customClasses: ''
            }
          }
        ],
        l = '\n  <o-switch></o-switch>\n  <o-switch [switchValue]="true"></o-switch>\n',
        c = '\n  <o-switch [id]="\'example\'" [labelOff]="\'Apagado\'" [labelOn]="\'Prendido\'"></o-switch>\n',
        i = '\n  <o-switch [isDark]="true"></o-switch>\n  <o-switch [isDark]="true" [switchValue]="true"></o-switch>\n',
        u =
          '\n  <o-switch [isSmall]="true"></o-switch>\n  <o-switch [isSmall]="true" [switchValue]="true"></o-switch>\n',
        m =
          '\n  <o-switch [isFixed]="true"></o-switch>\n  <o-switch [isFixed]="true" [switchValue]="true"></o-switch>\n',
        b =
          '\n  <o-switch [isDisabled]="true" [labelOff]="\'Apagado\'"></o-switch>\n  <o-switch [isDisabled]="true" [labelOn]="\'Prendido\'" [switchValue]="true"></o-switch>\n';
    },
    2544: (g, d, a) => {
      a.d(d, {
        Am: () => b,
        B0: () => m,
        Fb: () => T,
        HN: () => h,
        OK: () => c,
        Qj: () => f,
        _B: () => r,
        b7: () => l,
        eT: () => i,
        gc: () => E,
        if: () => n,
        lA: () => C,
        mw: () => u,
        o5: () => e,
        om: () => A
      });
      const r = [
          { title: 'Api', route: '/components/table/api' },
          { title: 'Ejemplos', route: '/components/table/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br/> id: string' },
            description: { data: 'Se utiliza para definir el identificador de la tabla.' }
          },
          {
            name: { data: '@Input() <br/> columns: Column[]' },
            description: { data: 'Se utiliza para definir las columnas que se mostrar\xe1n en la tabla.' }
          },
          {
            name: { data: '@Input() <br/> dataSource: DataSource[]' },
            description: { data: 'Se utiliza para definir los datos que se mostrar\xe1n en la tabla.' }
          },
          {
            name: { data: '@Input() <br/> isBordered: boolean' },
            description: { data: 'Se utiliza para definir si la tabla tendr\xe1 bordes.' }
          },
          {
            name: { data: '@Input() <br/> isStriped: boolean' },
            description: { data: 'Se utiliza para definir si la tabla tendr\xe1 rayas.' }
          },
          {
            name: { data: '@Input() <br/> isScrollable: boolean' },
            description: { data: 'Se utiliza para habilitar el desplazamiento horizontal de la tabla.' }
          },
          {
            name: { data: '@Input() <br /> customClasses: string' },
            description: { data: 'Se utiliza para aplicar clases personalizadas al componente.' }
          },
          {
            name: { data: '@Input() <br/> checkbox: TableCheckbox' },
            description: { data: 'Se utiliza para habilitar las casillas de verificaci\xf3n en la tabla.' }
          }
        ],
        e = [
          {
            name: { data: '@Output() <br/> dataSelectedChange: EventEmitter&lt;DataSource[]&gt' },
            description: { data: 'Se utiliza para obtener el elemento seleccionado.' }
          }
        ],
        l = [
          {
            name: { data: 'key' },
            description: {
              data: 'Se utiliza para definir el nombre de la propiedad del objeto. <br /> Que tiene que ser igual al que se especifica en el dataSource.',
              customClasses: ''
            }
          },
          {
            name: { data: 'value' },
            description: { data: 'Se utiliza para definir el nombre de la columna.', customClasses: '' }
          },
          {
            name: { data: 'customClasses' },
            description: { data: 'Se utiliza para definir clases para personalizar la columna.', customClasses: '' }
          }
        ],
        c = [
          {
            name: { data: '[key: string]: <br/>{ data: string; customClasses?: string } ' },
            description: {
              data: 'Se utiliza para definir el esquema de datos para el origen de datos de la tabla. Cada clave representa una columna en la tabla, y su valor es un objeto que contiene los datos de la columna y opcionalmente clases personalizadas para esa columna.'
            }
          }
        ],
        i = [
          {
            name: { data: 'title: string' },
            description: {
              data: 'Se utiliza para definir el t\xedtulo de la casilla de verificaci\xf3n que permite seleccionar todas las filas de la tabla.'
            }
          },
          {
            name: { data: 'customClassesTh: string' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas al encabezado de la columna de la casilla de verificaci\xf3n.'
            }
          },
          {
            name: { data: 'customClassesLabel: string' },
            description: {
              data: 'Se utiliza para aplicar clases personalizadas a la etiqueta de la casilla de verificaci\xf3n.'
            }
          },
          {
            name: { data: 'isAllSelectable: string' },
            description: {
              data: 'Se utiliza para definir si todas las filas de la tabla son seleccionables cuando se selecciona la casilla de verificaci\xf3n "Seleccionar todo".'
            }
          }
        ],
        u = '\n  interface Column {\n    key: string;\n    value: string;\n    customClasses: string;\n  }\n',
        m = '\n  interface DataSource {\n    [key: string]: { data: string; customClasses?: string };\n  }\n',
        b =
          '\n  interface TableCheckbox {\n    title?: string;\n    customClassesTh?: string;\n    customClassesLabel?: string;\n    isAllSelectable?: boolean;\n  }\n',
        C =
          '\n  <o-table\n    [columns]="columns"\n    [dataSource]="dataSource"\n    [isScrollable]="true"\n  ></o-table>',
        E =
          '\n  <o-table\n    [columns]="columns"\n    [dataSource]="dataSource"\n    [isBordered]="true"\n    [isScrollable]="true"\n  ></o-table>',
        A =
          '\n  <o-table\n    [columns]="columns"\n    [dataSource]="dataSource"\n    [isStriped]="true"\n    [isScrollable]="true"\n  ></o-table>',
        T =
          '\n  <o-table\n    id="table-checkbox-test"\n    [columns]="columns"\n    [dataSource]="dataSource"\n    [checkbox]="{\n      title: \'Checkbox\',\n      isAllSelectable: true\n    }"\n    [isScrollable]="true"\n    (dataSelectedChange)="onDataSelectedChange($event)"\n  ></o-table>',
        h =
          "\n  import { Component, OnInit } from '@angular/core';\n  import { Column, DataSource } from 'ngx-obelisco-example/core/models';\n\n  @Component({\n    selector: 'app-example',\n    templateUrl: './app-example.component.html',\n  })\n  export class ExampleComponent {\n    columns: Column[] = [\n      { key: 'number', value: 'N\xfamero', customClasses: 'tb-number' },\n      { key: 'text', value: 'Texto', customClasses: 'tb-text' },\n      { key: 'link', value: 'Enlace', customClasses: 'tb-link' },\n      { key: 'button', value: 'Bot\xf3n', customClasses: 'tb-button' },\n      { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },\n      { key: 'icon', value: 'B\xf3ton con \xedcono', customClasses: 'tb-button ' }\n    ];\n\n    dataSource: DataSource[] = [\n      {\n        number: { data: '1', customClasses: 'text-right' },\n        text: { data: 'Juan' },\n        link: { data: this.linkHtml },\n        button: { data: this.buttonHtml },\n        tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n        icon: { data: this.iconsHtml }\n      },\n      {\n        number: { data: '2', customClasses: 'text-right' },\n        text: { data: 'Maria' },\n        link: { data: this.linkHtml },\n        button: { data: this.buttonHtml },\n        tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n        icon: { data: this.iconsHtml }\n      },\n      {\n        number: { data: '3', customClasses: 'text-right' },\n        text: { data: 'Esther' },\n        link: { data: this.linkHtml },\n        button: { data: this.buttonHtml },\n        tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n        icon: { data: this.iconsHtml }\n      },\n      {\n        number: { data: '4', customClasses: 'text-right' },\n        text: { data: 'Jos\xe9' },\n        link: { data: this.linkHtml },\n        button: { data: this.buttonHtml },\n        tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n        icon: { data: this.iconsHtml }\n      }\n    ];\n\n    // Definici\xf3n de partes comunes\n    linkHtml = '<a href=\"#\" target=\"_blank\" rel=\"noreferrer\">Enlace</a>';\n\n    buttonHtml = `\n      <button type=\"button\" class=\"btn btn-primary btn-icon\">\n        <i class=\"bx bxs-info-circle\"></i>\n        bot\xf3n\n      </button>`;\n\n    iconsHtml = `\n      <div class=\"actions-table\">\n        <button class=\"btn button-actions-table\" aria-label=\"Editar\">\n          <span class=\"material-icons-round\">edit</span>\n        </button>\n        <button class=\"btn button-actions-table\" aria-label=\"Visualizar\">\n          <span class=\"material-icons-round\">visibility</span>\n        </button>\n        <button class=\"btn button-actions-table\" aria-label=\"Descargar\">\n          <span class=\"material-icons-round\">file_download</span>\n        </button>\n        <button class=\"btn button-actions-table\" aria-label=\"Eliminar\">\n          <span class=\"material-icons-round\">delete</span>\n        </button>\n      </div>`;\n  }\n  ",
        f =
          "\nimport { Component, OnInit } from '@angular/core';\nimport { Column, DataSource } from 'ngx-obelisco-example/core/models';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './app-example.component.html',\n})\nexport class ExampleComponent {\n  columns: Column[] = [\n    { key: 'number', value: 'N\xfamero', customClasses: 'tb-number' },\n    { key: 'text', value: 'Texto', customClasses: 'tb-text' },\n    { key: 'link', value: 'Enlace', customClasses: 'tb-link' },\n    { key: 'button', value: 'Bot\xf3n', customClasses: 'tb-button' },\n    { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },\n    { key: 'icon', value: 'B\xf3ton con \xedcono', customClasses: 'tb-button ' }\n  ];\n\n  dataSource: DataSource[] = [\n    {\n      number: { data: '1', customClasses: 'text-right' },\n      text: { data: 'Juan' },\n      link: { data: this.linkHtml },\n      button: { data: this.buttonHtml },\n      tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n      icon: { data: this.iconsHtml }\n    },\n    {\n      number: { data: '2', customClasses: 'text-right' },\n      text: { data: 'Maria' },\n      link: { data: this.linkHtml },\n      button: { data: this.buttonHtml },\n      tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n      icon: { data: this.iconsHtml }\n    },\n    {\n      number: { data: '3', customClasses: 'text-right' },\n      text: { data: 'Esther' },\n      link: { data: this.linkHtml },\n      button: { data: this.buttonHtml },\n      tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n      icon: { data: this.iconsHtml }\n    },\n    {\n      number: { data: '4', customClasses: 'text-right' },\n      text: { data: 'Jos\xe9' },\n      link: { data: this.linkHtml },\n      button: { data: this.buttonHtml },\n      tag: { data: '<span class=\"badge badge-secondary\">Etiqueta 1</span>' },\n      icon: { data: this.iconsHtml }\n    }\n  ];\n\n  onDataSelectedChange(data: any[]): void {\n    console.log('Datos seleccionados:', data);\n  }\n\n  // Definici\xf3n de partes comunes\n  linkHtml = '<a href=\"#\" target=\"_blank\" rel=\"noreferrer\">Enlace</a>';\n\n  buttonHtml = `\n    <button type=\"button\" class=\"btn btn-primary btn-icon\">\n      <i class=\"bx bxs-info-circle\"></i>\n      bot\xf3n\n    </button>`;\n\n  iconsHtml = `\n    <div class=\"actions-table\">\n      <button class=\"btn button-actions-table\" aria-label=\"Editar\">\n        <span class=\"material-icons-round\">edit</span>\n      </button>\n      <button class=\"btn button-actions-table\" aria-label=\"Visualizar\">\n        <span class=\"material-icons-round\">visibility</span>\n      </button>\n      <button class=\"btn button-actions-table\" aria-label=\"Descargar\">\n        <span class=\"material-icons-round\">file_download</span>\n      </button>\n      <button class=\"btn button-actions-table\" aria-label=\"Eliminar\">\n        <span class=\"material-icons-round\">delete</span>\n      </button>\n    </div>`;\n}\n";
    },
    6732: (g, d, a) => {
      a.d(d, { Dn: () => r, Pm: () => n, fh: () => l, qf: () => e });
      const r = [
          { title: 'Api', route: '/components/tooltip/api' },
          { title: 'Ejemplos', route: '/components/tooltip/examples' }
        ],
        n = [
          {
            name: { data: '@Input() <br /> direction: TooltipDirections', customClasses: '' },
            description: { data: 'Se utiliza para definir la direcci\xf3n del Tooltip.', customClasses: '' }
          },
          {
            name: { data: '@Input() <br /> description: string', customClasses: '' },
            description: { data: 'Se utiliza para definir el contenido.', customClasses: '' }
          },
          {
            name: { data: "@Input() <br /> trigger: 'mouseenter' | 'click'", customClasses: '' },
            description: { data: 'Se utiliza para definir el evento activador del tooltip.', customClasses: '' }
          }
        ],
        e =
          "\n  direction TooltipDirections =\n    | 'top'\n    | 'bottom'\n    | 'left'\n    | 'right'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right-start'\n    | 'right-end'\n    | 'left-start'\n    | 'left-end';\n",
        l = [
          {
            name: 'ARRIBA',
            direction: ['top-start', 'top', 'top-end'],
            text: 'Esta es la descripci\xf3n de un tooltip.',
            exampleHTML:
              '\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="top-start"\n      customClasses="mx-2"\n      text="Top-start"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="top"\n      customClasses="mx-2"\n      text="Top"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="top-end"\n      customClasses="mx-2"\n      text="Top-end"\n    ></o-button>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public text: string = 'Esta es la descripci\xf3n de un tooltip.';\n      }\n    "
          },
          {
            name: 'DERECHA',
            direction: ['right-start', 'right', 'right-end'],
            text: 'Esta es la descripci\xf3n de un tooltip.',
            exampleHTML:
              '\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="right-start"\n      customClasses="mx-2"\n      text="Right-start"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="right"\n      customClasses="mx-2"\n      text="Right"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="right-end"\n      customClasses="mx-2"\n      text="Right-end"\n    ></o-button>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public text: string = 'Esta es la descripci\xf3n de un tooltip.';\n      }\n    "
          },
          {
            name: 'IZQUIERDA',
            direction: ['left-start', 'left', 'left-end'],
            text: 'Esta es la descripci\xf3n de un tooltip.',
            exampleHTML:
              '\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="left-start"\n      customClasses="mx-2"\n      text="Left-start"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="left"\n      customClasses="mx-2"\n      text="Left"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="left-end"\n      customClasses="mx-2"\n      text="Left-end"\n    ></o-button>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public text: string = 'Esta es la descripci\xf3n de un tooltip.';\n      }\n    "
          },
          {
            name: 'INFERIOR',
            direction: ['bottom-start', 'bottom', 'bottom-end'],
            text: 'Esta es la descripci\xf3n de un tooltip.',
            exampleHTML:
              '\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="bottom-start"\n      customClasses="mx-2"\n      text="Bottom-start"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="bottom"\n      customClasses="mx-2"\n      text="Bottom"\n    ></o-button>\n\n    <o-button\n      oTooltip\n      [description]="text"\n      direction="bottom-end"\n      customClasses="mx-2"\n      text="Bottom-end"\n    ></o-button>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public text: string = 'Esta es la descripci\xf3n de un tooltip.';\n      }\n    "
          },
          {
            name: 'ICONOS',
            direction: ['left', 'top', 'right'],
            text: 'Esta es la descripci\xf3n de un tooltip.',
            customClasses: !0,
            exampleHTML:
              '\n    <span\n      *ngIf="tooltip.classes"\n      oTooltip\n      [description]="text"\n      direction="left"\n      class="icon-box bg-light mx-2"\n    >\n      <span class="material-icons-round">help</span>\n    </span>\n\n    <span\n      *ngIf="tooltip.classes"\n      oTooltip\n      [description]="text"\n      direction="top"\n      class="icon-box bg-light mx-2"\n    >\n      <span class="material-icons-round">help</span>\n    </span>\n\n    <span\n      *ngIf="tooltip.classes"\n      oTooltip\n      [description]="text"\n      direction="right"\n      class="icon-box bg-light mx-2"\n    >\n      <span class="material-icons-round">help</span>\n    </span>\n    ',
            exampleTS:
              "\n      import { Component } from '@angular/core';\n\n      @Component({\n        selector: 'app-example',\n        template: './app-example.component.html',\n      })\n      export class ExampleComponent {\n        public text: string = 'Esta es la descripci\xf3n de un tooltip.';\n      }\n    "
          }
        ];
    },
    2261: (g, d, a) => {
      a.d(d, { H: () => r });
      const r = (e) =>
        JSON.stringify(e, null, 6)
          .replace(']', '')
          .replace(';', '')
          .replace(/ {8}/g, '    ')
          .replace(/  {2}/g, '   ')
          .replace(/"+[a-z]+":/gm, (l) => l.replace(/"/g, ''))
          .trim();
    },
    7340: (g, d, a) => {
      a.r(d), a.d(d, { SectionComponentsModule: () => Ce });
      var r = a(9808),
        n = a(2526),
        e = a(4893);
      let l = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-access']],
            decls: 1,
            vars: 0,
            template: function (o, p) {
              1 & o && e._UZ(0, 'router-outlet');
            },
            dependencies: [n.lC]
          })),
          t
        );
      })();
      var c = a(5600),
        i = a(9384);
      let u = (() => {
        class t {
          constructor() {
            this.breadcrumbNavigation = c.dh;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-breadcrumb']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.breadcrumbNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var m = a(6527);
      let b = (() => {
        class t {
          constructor() {
            this.navigation = m.QV;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-card']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var C = a(2519);
      let E = (() => {
        class t {
          constructor() {
            this.navigation = C.t6;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-collapse']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var A = a(642);
      let T = (() => {
        class t {
          constructor() {
            this.footerNavigation = A.W5;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-footer']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.footerNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var h = a(9529);
      let f = (() => {
        class t {
          constructor() {
            this.galleryNavigation = h.ek;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-gallery']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.galleryNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var S = a(5871);
      let I = (() => {
        class t {
          constructor() {
            this.navigation = S.HM;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-panel']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var x = a(2766);
      let v = (() => {
        class t {
          constructor() {
            this.navigationMap = x.DF;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-map']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigationMap));
            },
            dependencies: [i.T, n.lC]
          })),
          t
        );
      })();
      var N = a(9188);
      let L = (() => {
        class t {
          constructor() {
            this.modal = N.oT;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-modal']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.modal));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var y = a(9394);
      let R = (() => {
        class t {
          constructor() {
            this.pagination = y.yH;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-pagination']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.pagination));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var M = a(4695);
      let O = (() => {
        class t {
          constructor() {
            this.progressBarNavigation = M.zI;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-progress-bar']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.progressBarNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var D = a(2544);
      let z = (() => {
          class t {
            constructor() {
              this.navigation = D._B;
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-table']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'section'],
                [3, 'routes'],
                [1, 'content']
              ],
              template: function (o, p) {
                1 & o &&
                  (e.TgZ(0, 'section', 0),
                  e._UZ(1, 'app-tabs-link', 1),
                  e.TgZ(2, 'div', 2),
                  e._UZ(3, 'router-outlet'),
                  e.qZA()()),
                  2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
              },
              dependencies: [n.lC, i.T]
            })),
            t
          );
        })(),
        P = (() => {
          class t {}
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-navigation']],
              decls: 1,
              vars: 0,
              template: function (o, p) {
                1 & o && e._UZ(0, 'router-outlet');
              },
              dependencies: [n.lC]
            })),
            t
          );
        })();
      var _ = a(1469);
      let B = (() => {
          class t {
            constructor() {
              this.navigation = _.s9;
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-steps-form']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'section'],
                [3, 'routes'],
                [1, 'content']
              ],
              template: function (o, p) {
                1 & o &&
                  (e.TgZ(0, 'section', 0),
                  e._UZ(1, 'app-tabs-link', 1),
                  e.TgZ(2, 'div', 2),
                  e._UZ(3, 'router-outlet'),
                  e.qZA()()),
                  2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
              },
              dependencies: [n.lC, i.T]
            })),
            t
          );
        })(),
        U = (() => {
          class t {}
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-dropdown']],
              decls: 1,
              vars: 0,
              template: function (o, p) {
                1 & o && e._UZ(0, 'router-outlet');
              },
              dependencies: [n.lC]
            })),
            t
          );
        })();
      var H = a(919);
      let G = (() => {
        class t {
          constructor() {
            this.navigation = H.Fr;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-status-message']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var F = a(8631);
      let k = (() => {
        class t {
          constructor() {
            this.spinner = F.Zi;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-spinner']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.spinner));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var Z = a(6732);
      let j = (() => {
        class t {
          constructor() {
            this.navigation = Z.Dn;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-tooltip']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var X = a(4021);
      let V = (() => {
        class t {
          constructor() {
            this.navigation = X._J;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-navbar']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var w = a(3677);
      let Y = (() => {
          class t {
            constructor() {
              this.switchNavigation = w.Vk;
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-switch']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'section'],
                [3, 'routes'],
                [1, 'content']
              ],
              template: function (o, p) {
                1 & o &&
                  (e.TgZ(0, 'section', 0),
                  e._UZ(1, 'app-tabs-link', 1),
                  e.TgZ(2, 'div', 2),
                  e._UZ(3, 'router-outlet'),
                  e.qZA()()),
                  2 & o && (e.xp6(1), e.Q6J('routes', p.switchNavigation));
              },
              dependencies: [n.lC, i.T]
            })),
            t
          );
        })(),
        J = (() => {
          class t {}
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-list']],
              decls: 1,
              vars: 0,
              template: function (o, p) {
                1 & o && e._UZ(0, 'router-outlet');
              },
              dependencies: [n.lC]
            })),
            t
          );
        })();
      var W = a(5702);
      let Q = (() => {
        class t {
          constructor() {
            this.bannerNavigation = W.vB;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-banner']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.bannerNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var q = a(8992);
      let K = (() => {
        class t {
          constructor() {
            this.buttonNavigation = q.v7;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-button']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.buttonNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var $ = a(8362);
      let ee = (() => {
        class t {
          constructor() {
            this.navigation = $.m;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-highlighted']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var te = a(4521);
      let ae = (() => {
        class t {
          constructor() {
            this.blockNavigation = te.M9;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-block']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.blockNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var oe = a(4719);
      let ne = (() => {
        class t {
          constructor() {
            this.navigation = oe.p_;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-search']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var se = a(5417);
      let ie = (() => {
          class t {
            constructor() {
              this.calendarNavigation = se.Bm;
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-calendar']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'section'],
                [3, 'routes'],
                [1, 'content']
              ],
              template: function (o, p) {
                1 & o &&
                  (e.TgZ(0, 'section', 0),
                  e._UZ(1, 'app-tabs-link', 1),
                  e.TgZ(2, 'div', 2),
                  e._UZ(3, 'router-outlet'),
                  e.qZA()()),
                  2 & o && (e.xp6(1), e.Q6J('routes', p.calendarNavigation));
              },
              dependencies: [n.lC, i.T]
            })),
            t
          );
        })(),
        re = (() => {
          class t {
            constructor() {
              this.navigation = [
                { title: 'Api', route: '/components/custom-content/api' },
                { title: 'Ejemplos', route: '/components/custom-content/examples' }
              ];
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-custom-content']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'section'],
                [3, 'routes'],
                [1, 'content']
              ],
              template: function (o, p) {
                1 & o &&
                  (e.TgZ(0, 'section', 0),
                  e._UZ(1, 'app-tabs-link', 1),
                  e.TgZ(2, 'div', 2),
                  e._UZ(3, 'router-outlet'),
                  e.qZA()()),
                  2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
              },
              dependencies: [n.lC, i.T]
            })),
            t
          );
        })(),
        le = (() => {
          class t {
            constructor() {
              this.navigation = [
                { title: 'Api', route: '/components/default-image/api' },
                { title: 'Ejemplos', route: '/components/default-image/examples' }
              ];
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['app-default-image']],
              decls: 4,
              vars: 1,
              consts: [
                [1, 'section'],
                [3, 'routes'],
                [1, 'content']
              ],
              template: function (o, p) {
                1 & o &&
                  (e.TgZ(0, 'section', 0),
                  e._UZ(1, 'app-tabs-link', 1),
                  e.TgZ(2, 'div', 2),
                  e._UZ(3, 'router-outlet'),
                  e.qZA()()),
                  2 & o && (e.xp6(1), e.Q6J('routes', p.navigation));
              },
              dependencies: [n.lC, i.T]
            })),
            t
          );
        })();
      var ce = a(1968);
      let de = (() => {
        class t {
          constructor() {
            this.alertNavigation = ce.X6;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-alert']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'section'],
              [3, 'routes'],
              [1, 'content']
            ],
            template: function (o, p) {
              1 & o &&
                (e.TgZ(0, 'section', 0),
                e._UZ(1, 'app-tabs-link', 1),
                e.TgZ(2, 'div', 2),
                e._UZ(3, 'router-outlet'),
                e.qZA()()),
                2 & o && (e.xp6(1), e.Q6J('routes', p.alertNavigation));
            },
            dependencies: [n.lC, i.T]
          })),
          t
        );
      })();
      var pe = a(763);
      const ue = [
        {
          path: 'access',
          component: l,
          loadChildren: () =>
            a
              .e(2825)
              .then(a.bind(a, 2825))
              .then((t) => t.AccessModule)
        },
        {
          path: 'alert',
          component: de,
          loadChildren: () =>
            Promise.all([a.e(8592), a.e(5725)])
              .then(a.bind(a, 5725))
              .then((t) => t.AlertModule)
        },
        {
          path: 'card',
          component: b,
          loadChildren: () =>
            a
              .e(5206)
              .then(a.bind(a, 5206))
              .then((t) => t.CardModule)
        },
        {
          path: 'breadcrumb',
          component: u,
          loadChildren: () =>
            a
              .e(8102)
              .then(a.bind(a, 8102))
              .then((t) => t.BreadcrumbModule)
        },
        {
          path: 'badge',
          component: (() => {
            class t {
              constructor() {
                this.badgeNavigation = pe.tw;
              }
            }
            return (
              (t.ɵfac = function (o) {
                return new (o || t)();
              }),
              (t.ɵcmp = e.Xpm({
                type: t,
                selectors: [['app-badge']],
                decls: 4,
                vars: 1,
                consts: [
                  [1, 'section'],
                  [3, 'routes'],
                  [1, 'content']
                ],
                template: function (o, p) {
                  1 & o &&
                    (e.TgZ(0, 'section', 0),
                    e._UZ(1, 'app-tabs-link', 1),
                    e.TgZ(2, 'div', 2),
                    e._UZ(3, 'router-outlet'),
                    e.qZA()()),
                    2 & o && (e.xp6(1), e.Q6J('routes', p.badgeNavigation));
                },
                dependencies: [n.lC, i.T]
              })),
              t
            );
          })(),
          loadChildren: () =>
            a
              .e(6037)
              .then(a.bind(a, 6037))
              .then((t) => t.BadgeModule)
        },
        {
          path: 'footer',
          component: T,
          loadChildren: () =>
            a
              .e(8652)
              .then(a.bind(a, 8652))
              .then((t) => t.FooterModule)
        },
        {
          path: 'progress-bar',
          component: O,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(8783), a.e(5037)])
              .then(a.bind(a, 5037))
              .then((t) => t.ProgressBarModule)
        },
        {
          path: 'collapse',
          component: E,
          loadChildren: () =>
            a
              .e(7024)
              .then(a.bind(a, 7024))
              .then((t) => t.CollapseModule)
        },
        {
          path: 'map',
          component: v,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(7236)])
              .then(a.bind(a, 7236))
              .then((t) => t.MapModule)
        },
        {
          path: 'modal',
          component: L,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(9667)])
              .then(a.bind(a, 9667))
              .then((t) => t.ModalModule)
        },
        {
          path: 'pagination',
          component: R,
          loadChildren: () =>
            a
              .e(6045)
              .then(a.bind(a, 6045))
              .then((t) => t.PaginationModule)
        },
        {
          path: 'table',
          component: z,
          loadChildren: () =>
            a
              .e(9414)
              .then(a.bind(a, 9414))
              .then((t) => t.TableModule)
        },
        {
          path: 'gallery',
          component: f,
          loadChildren: () =>
            a
              .e(1960)
              .then(a.bind(a, 1960))
              .then((t) => t.GalleryModule)
        },
        {
          path: 'navigation',
          component: P,
          loadChildren: () =>
            a
              .e(2775)
              .then(a.bind(a, 2775))
              .then((t) => t.NavigationModule)
        },
        {
          path: 'panel',
          component: I,
          loadChildren: () =>
            a
              .e(6866)
              .then(a.bind(a, 6866))
              .then((t) => t.PanelModule)
        },
        {
          path: 'steps-form',
          component: B,
          loadChildren: () =>
            a
              .e(3934)
              .then(a.bind(a, 3934))
              .then((t) => t.StepsFormModule)
        },
        {
          path: 'dropdown',
          component: U,
          loadChildren: () =>
            a
              .e(2497)
              .then(a.bind(a, 2497))
              .then((t) => t.DropdownModule)
        },
        {
          path: 'status-message',
          component: G,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(4892)])
              .then(a.bind(a, 4892))
              .then((t) => t.StatusMessageModule)
        },
        {
          path: 'spinner',
          component: k,
          loadChildren: () =>
            a
              .e(5353)
              .then(a.bind(a, 5353))
              .then((t) => t.SpinnerModule)
        },
        {
          path: 'tooltip',
          component: j,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(3124), a.e(1322)])
              .then(a.bind(a, 1322))
              .then((t) => t.TooltipModule)
        },
        {
          path: 'navbar',
          component: V,
          loadChildren: () =>
            a
              .e(6019)
              .then(a.bind(a, 6019))
              .then((t) => t.NavbarModule)
        },
        {
          path: 'switch',
          component: Y,
          loadChildren: () =>
            a
              .e(1343)
              .then(a.bind(a, 1343))
              .then((t) => t.SwitchModule)
        },
        {
          path: 'list',
          component: J,
          loadChildren: () =>
            a
              .e(5220)
              .then(a.bind(a, 5220))
              .then((t) => t.ListModule)
        },
        {
          path: 'banner',
          component: Q,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(2062)])
              .then(a.bind(a, 2062))
              .then((t) => t.BannerModule)
        },
        {
          path: 'button',
          component: K,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(7097)])
              .then(a.bind(a, 7097))
              .then((t) => t.ButtonModule)
        },
        {
          path: 'highlighted',
          component: ee,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(7556), a.e(9504)])
              .then(a.bind(a, 9504))
              .then((t) => t.HighlightedModule)
        },
        {
          path: 'block',
          component: ae,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(8783), a.e(8592), a.e(4858)])
              .then(a.bind(a, 4858))
              .then((t) => t.BlockModule)
        },
        {
          path: 'search',
          component: ne,
          loadChildren: () =>
            a
              .e(4025)
              .then(a.bind(a, 4025))
              .then((t) => t.SearchModule)
        },
        {
          path: 'calendar',
          component: ie,
          loadChildren: () =>
            a
              .e(8960)
              .then(a.bind(a, 8960))
              .then((t) => t.CalendarModule)
        },
        {
          path: 'custom-content',
          component: re,
          loadChildren: () =>
            Promise.all([a.e(5612), a.e(8592), a.e(3607)])
              .then(a.bind(a, 3607))
              .then((t) => t.CustomContentModule)
        },
        {
          path: 'default-image',
          component: le,
          loadChildren: () =>
            a
              .e(2792)
              .then(a.bind(a, 2792))
              .then((t) => t.DefaultImageModule)
        },
        { path: '**', pathMatch: 'full', redirectTo: '' }
      ];
      let me = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [n.Bz.forChild(ue), n.Bz] })),
          t
        );
      })();
      var be = a(393),
        ge = a(7538);
      let Ce = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [r.ez, me, ge.Z, be.V, i.T] })),
          t
        );
      })();
    }
  }
]);
