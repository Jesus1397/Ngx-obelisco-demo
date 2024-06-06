'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [4858],
  {
    4858: (S, c, e) => {
      e.r(c), e.d(c, { BlockModule: () => y });
      var u = e(9808),
        p = e(2526),
        d = e(9636),
        s = e(4521),
        o = e(4893),
        r = e(4948),
        a = e(6434),
        m = e(2171),
        g = e(8954),
        Z = e(388),
        b = e(2200);
      let v = (() => {
        class t {
          constructor(n) {
            (this.progressBarService = n),
              (this.blockTitle = s.u5),
              (this.blockDescription = s.UG),
              (this.blockProgressBar = s.H6),
              (this.blockBg = s.Nh);
          }
          ngOnInit() {
            this.progressBarService.initialize();
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(o.Y36(d.Q));
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['app-block-examples']],
            decls: 50,
            vars: 10,
            consts: [
              [1, 'section-example'],
              ['title', 'Con t\xedtulo'],
              ['component', '', 1, 'block-wrapper'],
              ['title', 'Inici\xe1 el tr\xe1mite y complet\xe1 todos los pasos'],
              ['button', '', 'text', 'Iniciar tr\xe1mite', 'size', 'lg', 'link', '#', 3, 'isExpandable'],
              ['appClipboard', '', 'component-html', '', 1, 'code'],
              [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
              ['appPrism', '', 'language', 'html'],
              ['title', 'Con bajada'],
              [
                'title',
                'Inici\xe1 el tr\xe1mite y complet\xe1 todos los pasos',
                'description',
                'Si ten\xe9s un tr\xe1mite iniciado pod\xe9s continuarlo desde ac\xe1.'
              ],
              ['title', 'Con barra de progreso'],
              ['title', 'Este es tu progreso en el tr\xe1mite'],
              ['progressBar', '', 'type', 'success', 3, 'currentStep'],
              ['button', '', 'text', 'Continuar tr\xe1mite', 'size', 'lg', 'link', '#', 3, 'isExpandable'],
              ['title', 'Con fondo'],
              ['title', 'Inici\xe1 el tr\xe1mite y complet\xe1 todos los pasos', 3, 'isBgLight']
            ],
            template: function (n, i) {
              1 & n &&
                (o.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'o-block', 3),
                o._UZ(4, 'o-button', 4),
                o.qZA()(),
                o.TgZ(5, 'pre', 5),
                o._uU(6, '      '),
                o.TgZ(7, 'button', 6),
                o._uU(8, 'Copiar'),
                o.qZA(),
                o._uU(9, '\n      '),
                o.TgZ(10, 'code', 7),
                o._uU(11),
                o.qZA(),
                o._uU(12, '\n    '),
                o.qZA()(),
                o.TgZ(13, 'app-viewer', 8)(14, 'div', 2)(15, 'o-block', 9),
                o._UZ(16, 'o-button', 4),
                o.qZA()(),
                o.TgZ(17, 'pre', 5),
                o._uU(18, '      '),
                o.TgZ(19, 'button', 6),
                o._uU(20, 'Copiar'),
                o.qZA(),
                o._uU(21, '\n      '),
                o.TgZ(22, 'code', 7),
                o._uU(23),
                o.qZA(),
                o._uU(24, '\n    '),
                o.qZA()(),
                o.TgZ(25, 'app-viewer', 10)(26, 'div', 2)(27, 'o-block', 11),
                o._UZ(28, 'o-progress-bar', 12)(29, 'o-button', 13),
                o.qZA()(),
                o.TgZ(30, 'pre', 5),
                o._uU(31, '      '),
                o.TgZ(32, 'button', 6),
                o._uU(33, 'Copiar'),
                o.qZA(),
                o._uU(34, '\n      '),
                o.TgZ(35, 'code', 7),
                o._uU(36),
                o.qZA(),
                o._uU(37, '\n    '),
                o.qZA()(),
                o.TgZ(38, 'app-viewer', 14)(39, 'div', 2)(40, 'o-block', 15),
                o._UZ(41, 'o-button', 4),
                o.qZA()(),
                o.TgZ(42, 'pre', 5),
                o._uU(43, '      '),
                o.TgZ(44, 'button', 6),
                o._uU(45, 'Copiar'),
                o.qZA(),
                o._uU(46, '\n      '),
                o.TgZ(47, 'code', 7),
                o._uU(48),
                o.qZA(),
                o._uU(49, '\n    '),
                o.qZA()()()),
                2 & n &&
                  (o.xp6(4),
                  o.Q6J('isExpandable', !0),
                  o.xp6(7),
                  o.Oqu(i.blockTitle),
                  o.xp6(5),
                  o.Q6J('isExpandable', !0),
                  o.xp6(7),
                  o.Oqu(i.blockDescription),
                  o.xp6(5),
                  o.Q6J('currentStep', 4),
                  o.xp6(1),
                  o.Q6J('isExpandable', !0),
                  o.xp6(7),
                  o.Oqu(i.blockProgressBar),
                  o.xp6(4),
                  o.Q6J('isBgLight', !0),
                  o.xp6(1),
                  o.Q6J('isExpandable', !0),
                  o.xp6(7),
                  o.Oqu(i.blockBg));
            },
            dependencies: [r.B, a.y, m.y, g.G, Z.h, b.g],
            styles: [
              '.block-wrapper[_ngcontent-%COMP%]{width:100%;max-width:340px;position:relative;margin-right:auto;margin-left:auto}'
            ]
          })),
          t
        );
      })();
      var B = e(5570),
        U = e(4883);
      const h = [
        {
          path: 'api',
          component: (() => {
            class t {
              constructor() {
                (this.columns = B.L0), (this.dataSource = s.Qz);
              }
            }
            return (
              (t.ɵfac = function (n) {
                return new (n || t)();
              }),
              (t.ɵcmp = o.Xpm({
                type: t,
                selectors: [['app-block-api']],
                decls: 22,
                vars: 4,
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
                    "import { OBlockModule } from 'ngx-obelisco-example/block';"
                  ],
                  [1, 'section-selector'],
                  [1, 'section-properties', 'mb-5'],
                  [3, 'columns', 'dataSource', 'isStriped', 'isBordered']
                ],
                template: function (n, i) {
                  1 & n &&
                    (o.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                    o._uU(3, 'Referencia de API para el componente Bloque de tr\xe1mite de Obelisco'),
                    o.qZA(),
                    o.TgZ(4, 'pre', 2),
                    o._uU(5, '        '),
                    o._UZ(6, 'code', 3),
                    o._uU(7, '\n      '),
                    o.qZA()(),
                    o.TgZ(8, 'h3'),
                    o._uU(9, 'Etiqueta'),
                    o.qZA(),
                    o._UZ(10, 'hr'),
                    o.TgZ(11, 'div', 4)(12, 'h4'),
                    o._uU(13, 'OBlock'),
                    o.qZA(),
                    o.TgZ(14, 'p'),
                    o._uU(15, 'Selector: '),
                    o.TgZ(16, 'strong'),
                    o._uU(17, 'o-block'),
                    o.qZA()(),
                    o.TgZ(18, 'div', 5)(19, 'h5'),
                    o._uU(20, 'Propiedades'),
                    o.qZA(),
                    o._UZ(21, 'o-table', 6),
                    o.qZA()()()),
                    2 & n &&
                      (o.xp6(21),
                      o.Q6J('columns', i.columns)('dataSource', i.dataSource)('isStriped', !0)('isBordered', !0));
                },
                dependencies: [U.L, a.y]
              })),
              t
            );
          })()
        },
        { path: 'examples', component: v },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let A = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = o.oAB({ type: t })),
          (t.ɵinj = o.cJS({ imports: [p.Bz.forChild(h), p.Bz] })),
          t
        );
      })();
      var E = e(7538),
        T = e(2089),
        k = e(9384),
        x = e(6827),
        C = e(9371),
        f = e(3717);
      let y = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = o.oAB({ type: t })),
          (t.ɵinj = o.cJS({ imports: [u.ez, A, E.Z, T.Z, r.B, k.T, x.j, C.V, f.J] })),
          t
        );
      })();
    }
  }
]);
