'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [1519],
  {
    1519: (C, a, c) => {
      c.r(a), c.d(a, { AccessSimpleModule: () => S });
      var m = c(9808),
        r = c(9373),
        Z = c(7538),
        d = c(2089),
        p = c(4948),
        l = c(2526),
        n = c(7824),
        A = c(5570),
        e = c(4893),
        U = c(4883),
        u = c(6434);
      let g = (() => {
        class o {
          constructor() {
            (this.dataSource = n.HQ), (this.columns = A.L0), (this.exampleIterfaceAccess = n.Ji);
          }
        }
        return (
          (o.ɵfac = function (s) {
            return new (s || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['app-access-simple-api']],
            decls: 39,
            vars: 5,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OAccessModule } from 'ngx-obelisco-example/access';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript']
            ],
            template: function (s, t) {
              1 & s &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente de Accesos'),
                e.qZA(),
                e.TgZ(4, 'pre', 2),
                e._uU(5, '      '),
                e._UZ(6, 'code', 3),
                e._uU(7, '\n    '),
                e.qZA()(),
                e.TgZ(8, 'h3'),
                e._uU(9, 'Etiqueta'),
                e.qZA(),
                e._UZ(10, 'hr'),
                e.TgZ(11, 'div', 4)(12, 'h4'),
                e._uU(13, 'OAccess'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-access'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6),
                e.qZA()(),
                e.TgZ(22, 'h3'),
                e._uU(23, 'Tipos de datos'),
                e.qZA(),
                e._UZ(24, 'hr'),
                e.TgZ(25, 'div', 7)(26, 'h4'),
                e._uU(27, 'Sizes'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'size'),
                e.qZA(),
                e._uU(32, '.'),
                e.qZA(),
                e.TgZ(33, 'div', 8)(34, 'pre', 2),
                e._uU(35, '        '),
                e.TgZ(36, 'code', 9),
                e._uU(37),
                e.qZA(),
                e._uU(38, '\n      '),
                e.qZA()()()()),
                2 & s &&
                  (e.xp6(21),
                  e.Q6J('columns', t.columns)('dataSource', t.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(t.exampleIterfaceAccess));
            },
            dependencies: [U.L, u.y]
          })),
          o
        );
      })();
      var T = c(2171),
        v = c(139);
      const q = [
        { path: 'api', component: g },
        {
          path: 'examples',
          component: (() => {
            class o {
              constructor() {
                (this.exampleAccessTitleHtml = n.ND),
                  (this.exampleAccessDescriptionHtml = n.jS),
                  (this.exampleAccessIconHtml = n.zq),
                  (this.exampleAccessSizesHtml = n._v),
                  (this.layoutOne = n.Ju),
                  (this.layoutTwo = n.Rs),
                  (this.layoutThree = n.JX),
                  (this.layoutFour = n.be);
              }
            }
            return (
              (o.ɵfac = function (s) {
                return new (s || o)();
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [['app-access-simple-example']],
                decls: 101,
                vars: 8,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Solo t\xedtulo'],
                  ['component', '', 1, 'access-deck', 'access-column', 'max-cards-3'],
                  ['title', 'Acceso'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['title', 'Con descripci\xf3n'],
                  ['title', 'Acceso', 'description', 'Descripci\xf3n (Opcional)'],
                  ['title', 'Con Icono'],
                  [
                    'title',
                    'Acceso',
                    'icon',
                    'bx bxs-info-circle',
                    'route',
                    '/home',
                    'description',
                    'Descripci\xf3n (Opcional)'
                  ],
                  ['title', 'Tama\xf1os'],
                  ['component', '', 1, 'row'],
                  [1, 'ml-4'],
                  [
                    'title',
                    'Acceso',
                    'icon',
                    'bx bxs-info-circle',
                    'route',
                    '/home',
                    'description',
                    'Descripci\xf3n (Opcional)',
                    'size',
                    'sm'
                  ],
                  ['title', 'Disposici\xf3n Horizontal - Cuatro columnas'],
                  ['component', '', 1, 'access-deck', 'access-column', 'max-cards-4'],
                  ['title', 'Acceso', 'size', 'sm'],
                  ['title', 'Disposici\xf3n Horizontal - Tres columnas'],
                  ['title', 'Disposici\xf3n Horizontal - Dos columnas'],
                  ['component', '', 1, 'access-deck', 'access-column', 'max-cards-2'],
                  ['title', 'Disposici\xf3n Vertical - 1 columna'],
                  ['component', '', 2, 'max-width', '280px'],
                  [1, 'access-deck', 'max-cards-1']
                ],
                template: function (s, t) {
                  1 & s &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-access', 3),
                    e.qZA(),
                    e.TgZ(4, 'pre', 4),
                    e._uU(5, '      '),
                    e.TgZ(6, 'button', 5),
                    e._uU(7, 'Copiar'),
                    e.qZA(),
                    e._uU(8, '\n      '),
                    e.TgZ(9, 'code', 6),
                    e._uU(10),
                    e.qZA(),
                    e._uU(11, '\n    '),
                    e.qZA()(),
                    e.TgZ(12, 'app-viewer', 7)(13, 'div', 2),
                    e._UZ(14, 'o-access', 8),
                    e.qZA(),
                    e.TgZ(15, 'pre', 4),
                    e._uU(16, '      '),
                    e.TgZ(17, 'button', 5),
                    e._uU(18, 'Copiar'),
                    e.qZA(),
                    e._uU(19, '\n      '),
                    e.TgZ(20, 'code', 6),
                    e._uU(21),
                    e.qZA(),
                    e._uU(22, '\n    '),
                    e.qZA()(),
                    e.TgZ(23, 'app-viewer', 9)(24, 'div', 2),
                    e._UZ(25, 'o-access', 10),
                    e.qZA(),
                    e.TgZ(26, 'pre', 4),
                    e._uU(27, '      '),
                    e.TgZ(28, 'button', 5),
                    e._uU(29, 'Copiar'),
                    e.qZA(),
                    e._uU(30, '\n      '),
                    e.TgZ(31, 'code', 6),
                    e._uU(32),
                    e.qZA(),
                    e._uU(33, '\n    '),
                    e.qZA()(),
                    e.TgZ(34, 'app-viewer', 11)(35, 'div', 12),
                    e._UZ(36, 'o-access', 10),
                    e.TgZ(37, 'div', 13),
                    e._UZ(38, 'o-access', 14),
                    e.qZA()(),
                    e.TgZ(39, 'pre', 4),
                    e._uU(40, '      '),
                    e.TgZ(41, 'button', 5),
                    e._uU(42, 'Copiar'),
                    e.qZA(),
                    e._uU(43, '\n      '),
                    e.TgZ(44, 'code', 6),
                    e._uU(45),
                    e.qZA(),
                    e._uU(46, '\n    '),
                    e.qZA()(),
                    e.TgZ(47, 'app-viewer', 15)(48, 'div', 16),
                    e._UZ(49, 'o-access', 17)(50, 'o-access', 17)(51, 'o-access', 17)(52, 'o-access', 17),
                    e.qZA(),
                    e.TgZ(53, 'pre', 4),
                    e._uU(54, '      '),
                    e.TgZ(55, 'button', 5),
                    e._uU(56, 'Copiar'),
                    e.qZA(),
                    e._uU(57, '\n      '),
                    e.TgZ(58, 'code', 6),
                    e._uU(59),
                    e.qZA(),
                    e._uU(60, '\n    '),
                    e.qZA()(),
                    e.TgZ(61, 'app-viewer', 18)(62, 'div', 2),
                    e._UZ(63, 'o-access', 17)(64, 'o-access', 17)(65, 'o-access', 17),
                    e.qZA(),
                    e.TgZ(66, 'pre', 4),
                    e._uU(67, '        '),
                    e.TgZ(68, 'button', 5),
                    e._uU(69, 'Copiar'),
                    e.qZA(),
                    e._uU(70, '\n        '),
                    e.TgZ(71, 'code', 6),
                    e._uU(72),
                    e.qZA(),
                    e._uU(73, '\n      '),
                    e.qZA()(),
                    e.TgZ(74, 'app-viewer', 19)(75, 'div', 20),
                    e._UZ(76, 'o-access', 17)(77, 'o-access', 17),
                    e.qZA(),
                    e.TgZ(78, 'pre', 4),
                    e._uU(79, '      '),
                    e.TgZ(80, 'button', 5),
                    e._uU(81, 'Copiar'),
                    e.qZA(),
                    e._uU(82, '\n      '),
                    e.TgZ(83, 'code', 6),
                    e._uU(84),
                    e.qZA(),
                    e._uU(85, '\n    '),
                    e.qZA()(),
                    e.TgZ(86, 'app-viewer', 21)(87, 'div', 22)(88, 'div', 23),
                    e._UZ(89, 'o-access', 17)(90, 'o-access', 17)(91, 'o-access', 17)(92, 'o-access', 17),
                    e.qZA()(),
                    e.TgZ(93, 'pre', 4),
                    e._uU(94, '      '),
                    e.TgZ(95, 'button', 5),
                    e._uU(96, 'Copiar'),
                    e.qZA(),
                    e._uU(97, '\n      '),
                    e.TgZ(98, 'code', 6),
                    e._uU(99),
                    e.qZA(),
                    e._uU(100, '\n    '),
                    e.qZA()()()),
                    2 & s &&
                      (e.xp6(10),
                      e.Oqu(t.exampleAccessTitleHtml),
                      e.xp6(11),
                      e.Oqu(t.exampleAccessDescriptionHtml),
                      e.xp6(11),
                      e.Oqu(t.exampleAccessIconHtml),
                      e.xp6(13),
                      e.Oqu(t.exampleAccessSizesHtml),
                      e.xp6(14),
                      e.Oqu(t.layoutFour),
                      e.xp6(13),
                      e.Oqu(t.layoutThree),
                      e.xp6(12),
                      e.Oqu(t.layoutTwo),
                      e.xp6(15),
                      e.Oqu(t.layoutOne));
                },
                dependencies: [u.y, T.y, p.B, v.x],
                styles: ['.list-group-container[_ngcontent-%COMP%]{max-width:324px}']
              })),
              o
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let h = (() => {
        class o {}
        return (
          (o.ɵfac = function (s) {
            return new (s || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [l.Bz.forChild(q), l.Bz] })),
          o
        );
      })();
      var x = c(9384);
      let S = (() => {
        class o {}
        return (
          (o.ɵfac = function (s) {
            return new (s || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [m.ez, h, Z.Z, d.Z, p.B, r.n, x.T] })),
          o
        );
      })();
    }
  }
]);
