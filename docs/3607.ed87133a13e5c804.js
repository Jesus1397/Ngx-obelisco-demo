'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [3607],
  {
    2089: (f, m, o) => {
      o.d(m, { Z: () => e });
      var d = o(9808),
        t = o(4893);
      let e = (() => {
        class p {}
        return (
          (p.ɵfac = function (g) {
            return new (g || p)();
          }),
          (p.ɵmod = t.oAB({ type: p })),
          (p.ɵinj = t.cJS({ imports: [d.ez] })),
          p
        );
      })();
    },
    4948: (f, m, o) => {
      o.d(m, { B: () => T });
      var d = o(9808),
        t = o(4893);
      function e(i, r) {
        if (1 & i) {
          const a = t.EpF();
          t.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            t.NdJ('click', function () {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.isWindowHTML = !0));
            }),
            t._uU(4, 'HTML'),
            t.qZA()(),
            t.TgZ(5, 'li', 12)(6, 'a', 14),
            t.NdJ('click', function () {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.isWindowHTML = !1));
            }),
            t._uU(7, 'TS'),
            t.qZA()()()();
        }
        if (2 & i) {
          const a = t.oxw();
          t.xp6(3), t.ekj('active', a.isWindowHTML), t.xp6(3), t.ekj('active', !a.isWindowHTML);
        }
      }
      function p(i, r) {
        1 & i && (t.ynx(0), t.Hsn(1), t.BQk());
      }
      function C(i, r) {
        1 & i && (t.ynx(0), t.Hsn(1, 1), t.BQk());
      }
      function g(i, r) {
        if ((1 & i && t.YNc(0, C, 2, 0, 'ng-container', 7), 2 & i)) {
          const a = t.oxw(),
            l = t.MAs(16);
          t.Q6J('ngIf', a.isWindowHTML)('ngIfElse', l);
        }
      }
      function _(i, r) {
        1 & i && t.Hsn(0, 2);
      }
      const Z = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        x = ['[component]', '[component-html]', '[component-ts]'];
      let T = (() => {
        class i {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (i.ɵfac = function (a) {
            return new (a || i)();
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [t.jDz],
            ngContentSelectors: x,
            decls: 17,
            vars: 7,
            consts: [
              [1, 'example-wrapper'],
              [1, 'example-viewer', 'p-3'],
              [1, 'nav', 'flex-row', 'nav-pills'],
              [1, 'nav-item', 'd-flex'],
              [1, 'btn', 'btn-sm', 'btn-link', 3, 'click'],
              [1, 'wrapper'],
              ['class', 'tabs-slider px-0 mb-3', 4, 'ngIf'],
              [4, 'ngIf', 'ngIfElse'],
              ['codeTemplate', ''],
              ['windowTs', ''],
              [1, 'tabs-slider', 'px-0', 'mb-3'],
              [1, 'nav', 'nav-pills', 'tabs', 'fixedWidth'],
              [1, 'nav-item'],
              [1, 'nav-link', 'active', 3, 'click'],
              [1, 'nav-link', 3, 'click']
            ],
            template: function (a, l) {
              if (
                (1 & a &&
                  (t.F$t(Z),
                  t.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  t._uU(3),
                  t.qZA(),
                  t.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  t.NdJ('click', function () {
                    return (l.isOpenCode = !l.isOpenCode);
                  }),
                  t.TgZ(8, 'span'),
                  t._uU(9),
                  t.qZA()()()()()(),
                  t.TgZ(10, 'div', 5),
                  t.YNc(11, e, 8, 4, 'nav', 6),
                  t.YNc(12, p, 2, 0, 'ng-container', 7),
                  t.YNc(13, g, 1, 2, 'ng-template', null, 8, t.W1O),
                  t.YNc(15, _, 1, 0, 'ng-template', null, 9, t.W1O),
                  t.qZA()()),
                2 & a)
              ) {
                const u = t.MAs(14);
                t.xp6(3),
                  t.Oqu(l.title),
                  t.xp6(4),
                  t.ekj('active', l.isOpenCode),
                  t.xp6(2),
                  t.Oqu(l.linkCode),
                  t.xp6(2),
                  t.Q6J('ngIf', l.isOpenCode && l.isNavCode),
                  t.xp6(1),
                  t.Q6J('ngIf', !l.isOpenCode)('ngIfElse', u);
              }
            },
            dependencies: [d.ez, d.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          i
        );
      })();
    },
    3607: (f, m, o) => {
      o.r(m), o.d(m, { CustomContentModule: () => O });
      var d = o(9808),
        t = o(2526),
        e = o(4893),
        p = o(6434);
      let C = (() => {
        class n {
          constructor() {
            this.customExample =
              '\n  <o-alert>\n    <div *oCustomContent>\n      <p>Contenido personalizado</p>\n    </div>\n  </o-alert>';
          }
        }
        return (
          (n.ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['app-custom-content-api']],
            decls: 81,
            vars: 1,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              [
                'appPrism',
                '',
                'language',
                'javascript',
                'code',
                "import { OCustomContentDirective } from 'ngx-obelisco-example/directives'"
              ],
              [1, 'section-selector'],
              [1, 'code'],
              ['appPrism', '', 'language', 'html'],
              [1, 'd-flex', 'flex-column', 'flex-md-row'],
              [1, 'ml-md-5', 'ml-0']
            ],
            template: function (s, v) {
              1 & s &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para la directiva oCustomContent de Obelisco'),
                e.qZA(),
                e.TgZ(4, 'pre', 2),
                e._uU(5, '      '),
                e._UZ(6, 'code', 3),
                e._uU(7, '\n    '),
                e.qZA()(),
                e._UZ(8, 'hr'),
                e.TgZ(9, 'div', 4)(10, 'h4'),
                e._uU(11, 'OCustomContentDirective'),
                e.qZA(),
                e.TgZ(12, 'p'),
                e._uU(13, 'Directiva estructural: '),
                e.TgZ(14, 'strong'),
                e._uU(15, '*oCustomContent'),
                e.qZA()(),
                e.TgZ(16, 'p'),
                e._uU(17, ' La directiva '),
                e.TgZ(18, 'code'),
                e._uU(19, 'OCustomContent'),
                e.qZA(),
                e._uU(20, ' permite definir contenido personalizado de manera din\xe1mica dentro de los componentes: '),
                e.qZA(),
                e._UZ(21, 'br'),
                e.TgZ(22, 'h4'),
                e._uU(23, 'Uso:'),
                e.qZA(),
                e.TgZ(24, 'p'),
                e._uU(25, 'Agrega el atributo '),
                e.TgZ(26, 'code'),
                e._uU(27, 'OCustomContent'),
                e.qZA(),
                e._uU(28, ' a la etiqueta HTML. Por ejemplo:'),
                e.qZA(),
                e.TgZ(29, 'pre', 5),
                e._uU(30, '      '),
                e.TgZ(31, 'code', 6),
                e._uU(32),
                e.qZA(),
                e._uU(33, '\n    '),
                e.qZA(),
                e._UZ(34, 'br'),
                e.TgZ(35, 'h4'),
                e._uU(36, 'Reglas y Consideraciones:'),
                e.qZA(),
                e.TgZ(37, 'ul')(38, 'li'),
                e._uU(39, ' La directiva '),
                e.TgZ(40, 'code'),
                e._uU(41, 'OCustomContent'),
                e.qZA(),
                e._uU(42, ' debe usarse en elementos que admitan contenido din\xe1mico, como '),
                e.TgZ(43, 'code'),
                e._uU(44, '<div>'),
                e.qZA(),
                e._uU(45, ', '),
                e.TgZ(46, 'code'),
                e._uU(47, '<ng-container>'),
                e.qZA(),
                e._uU(48, ', etc. '),
                e.qZA(),
                e.TgZ(49, 'li'),
                e._uU(
                  50,
                  ' La directiva debe estar disponible en el m\xf3dulo de Angular donde se utilizar\xe1. Aseg\xfarate de importar y declarar la directiva en el m\xf3dulo correspondiente. '
                ),
                e.qZA()(),
                e._UZ(51, 'br'),
                e.TgZ(52, 'h4'),
                e._uU(53, 'Componentes con Directiva OCustomContent Integrada:'),
                e.qZA(),
                e.TgZ(54, 'ul', 7)(55, 'div')(56, 'li'),
                e._uU(57, 'Alerta'),
                e.qZA(),
                e.TgZ(58, 'li'),
                e._uU(59, 'Banner'),
                e.qZA(),
                e.TgZ(60, 'li'),
                e._uU(61, 'Bloque de tr\xe1mite'),
                e.qZA(),
                e.TgZ(62, 'li'),
                e._uU(63, 'Colapsable'),
                e.qZA(),
                e.TgZ(64, 'li'),
                e._uU(65, 'Destacado'),
                e.qZA(),
                e.TgZ(66, 'li'),
                e._uU(67, 'Footer'),
                e.qZA()(),
                e.TgZ(68, 'div', 8)(69, 'li'),
                e._uU(70, 'Header'),
                e.qZA(),
                e.TgZ(71, 'li'),
                e._uU(72, 'Mapa'),
                e.qZA(),
                e.TgZ(73, 'li'),
                e._uU(74, 'Mensaje de estado'),
                e.qZA(),
                e.TgZ(75, 'li'),
                e._uU(76, 'Modal'),
                e.qZA(),
                e.TgZ(77, 'li'),
                e._uU(78, 'Panel'),
                e.qZA(),
                e.TgZ(79, 'li'),
                e._uU(80, 'Tarjetas'),
                e.qZA()()()()()),
                2 & s && (e.xp6(32), e.Oqu(v.customExample));
            },
            dependencies: [p.y]
          })),
          n
        );
      })();
      var g = o(4948),
        _ = o(2171),
        Z = o(1998),
        x = o(388),
        T = o(2200);
      function i(n, c) {
        1 & n &&
          (e.ynx(0),
          e.TgZ(1, 'p', 8),
          e._uU(2, 'T\xedtulo personalizado'),
          e.qZA(),
          e.TgZ(3, 'div', 9)(4, 'span'),
          e._uU(5, 'Total:'),
          e.qZA(),
          e.TgZ(6, 'span', 10),
          e._uU(7, '$1000'),
          e.qZA()(),
          e._UZ(8, 'o-button', 11)(9, 'hr'),
          e.TgZ(10, 'p'),
          e._uU(11, 'Texto extendido personalizado de bloque de tr\xe1mite.'),
          e.qZA(),
          e._UZ(12, 'o-button', 12),
          e.BQk()),
          2 & n && (e.xp6(8), e.Q6J('isExpandable', !0), e.xp6(4), e.Q6J('isOutline', !0)('isExpandable', !0));
      }
      const a = [
        { path: 'api', component: C },
        {
          path: 'examples',
          component: (() => {
            class n {
              constructor() {
                this.oCustomContentHTML =
                  '\n  <o-block [isBgLight]="true">\n    <ng-container *oCustomContent>\n      <p class="mb-1">T\xedtulo personalizado</p>\n      <div class="d-flex justify-content-between font-weight-bold">\n        <span>Total:</span>\n        <span class="h3 mb-0">$1000</span>\n      </div>\n      <o-button [isExpandable]="true" link="#"></o-button>\n      <hr />\n      <p>Texto extendido personalizado de bloque de tr\xe1mite.</p>\n      <o-button [isOutline]="true" type="secondary" [isExpandable]="true" link="#"></o-button>\n    </ng-container>\n  </o-block>\n  ';
              }
            }
            return (
              (n.ɵfac = function (s) {
                return new (s || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [['app-custom-content-examples']],
                decls: 13,
                vars: 2,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Componente Bloque de tr\xe1mite personalizado'],
                  ['component', '', 2, 'max-width', '340px'],
                  [3, 'isBgLight'],
                  [4, 'oCustomContent'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  [1, 'mb-1'],
                  [1, 'd-flex', 'justify-content-between', 'font-weight-bold'],
                  [1, 'h3', 'mb-0'],
                  ['link', '#', 3, 'isExpandable'],
                  ['type', 'secondary', 'link', '#', 3, 'isOutline', 'isExpandable']
                ],
                template: function (s, v) {
                  1 & s &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'o-block', 3),
                    e.YNc(4, i, 13, 3, 'ng-container', 4),
                    e.qZA()(),
                    e.TgZ(5, 'pre', 5),
                    e._uU(6, '      '),
                    e.TgZ(7, 'button', 6),
                    e._uU(8, 'Copiar'),
                    e.qZA(),
                    e._uU(9, '\n      '),
                    e.TgZ(10, 'code', 7),
                    e._uU(11),
                    e.qZA(),
                    e._uU(12, '\n    '),
                    e.qZA()()()),
                    2 & s && (e.xp6(3), e.Q6J('isBgLight', !0), e.xp6(8), e.Oqu(v.oCustomContentHTML));
                },
                dependencies: [g.B, _.y, p.y, Z.X, x.h, T.g]
              })),
              n
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let l = (() => {
        class n {}
        return (
          (n.ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [t.Bz.forChild(a), t.Bz] })),
          n
        );
      })();
      var u = o(2089),
        U = o(9384),
        A = o(9371),
        M = o(3717),
        h = o(5654);
      let O = (() => {
        class n {}
        return (
          (n.ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [d.ez, l, u.Z, g.B, U.T, A.V, M.J, h.o] })),
          n
        );
      })();
    }
  }
]);
