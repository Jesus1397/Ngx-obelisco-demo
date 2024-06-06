'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2792],
  {
    2089: (T, p, t) => {
      t.d(p, { Z: () => e });
      var u = t(9808),
        a = t(4893);
      let e = (() => {
        class r {}
        return (
          (r.ɵfac = function (m) {
            return new (m || r)();
          }),
          (r.ɵmod = a.oAB({ type: r })),
          (r.ɵinj = a.cJS({ imports: [u.ez] })),
          r
        );
      })();
    },
    4948: (T, p, t) => {
      t.d(p, { B: () => Z });
      var u = t(9808),
        a = t(4893);
      function e(i, s) {
        if (1 & i) {
          const o = a.EpF();
          a.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            a.NdJ('click', function () {
              a.CHM(o);
              const n = a.oxw();
              return a.KtG((n.isWindowHTML = !0));
            }),
            a._uU(4, 'HTML'),
            a.qZA()(),
            a.TgZ(5, 'li', 12)(6, 'a', 14),
            a.NdJ('click', function () {
              a.CHM(o);
              const n = a.oxw();
              return a.KtG((n.isWindowHTML = !1));
            }),
            a._uU(7, 'TS'),
            a.qZA()()()();
        }
        if (2 & i) {
          const o = a.oxw();
          a.xp6(3), a.ekj('active', o.isWindowHTML), a.xp6(3), a.ekj('active', !o.isWindowHTML);
        }
      }
      function r(i, s) {
        1 & i && (a.ynx(0), a.Hsn(1), a.BQk());
      }
      function g(i, s) {
        1 & i && (a.ynx(0), a.Hsn(1, 1), a.BQk());
      }
      function m(i, s) {
        if ((1 & i && a.YNc(0, g, 2, 0, 'ng-container', 7), 2 & i)) {
          const o = a.oxw(),
            l = a.MAs(16);
          a.Q6J('ngIf', o.isWindowHTML)('ngIfElse', l);
        }
      }
      function _(i, s) {
        1 & i && a.Hsn(0, 2);
      }
      const f = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        U = ['[component]', '[component-html]', '[component-ts]'];
      let Z = (() => {
        class i {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (i.ɵfac = function (o) {
            return new (o || i)();
          }),
          (i.ɵcmp = a.Xpm({
            type: i,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [a.jDz],
            ngContentSelectors: U,
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
            template: function (o, l) {
              if (
                (1 & o &&
                  (a.F$t(f),
                  a.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  a._uU(3),
                  a.qZA(),
                  a.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  a.NdJ('click', function () {
                    return (l.isOpenCode = !l.isOpenCode);
                  }),
                  a.TgZ(8, 'span'),
                  a._uU(9),
                  a.qZA()()()()()(),
                  a.TgZ(10, 'div', 5),
                  a.YNc(11, e, 8, 4, 'nav', 6),
                  a.YNc(12, r, 2, 0, 'ng-container', 7),
                  a.YNc(13, m, 1, 2, 'ng-template', null, 8, a.W1O),
                  a.YNc(15, _, 1, 0, 'ng-template', null, 9, a.W1O),
                  a.qZA()()),
                2 & o)
              ) {
                const n = a.MAs(14);
                a.xp6(3),
                  a.Oqu(l.title),
                  a.xp6(4),
                  a.ekj('active', l.isOpenCode),
                  a.xp6(2),
                  a.Oqu(l.linkCode),
                  a.xp6(2),
                  a.Q6J('ngIf', l.isOpenCode && l.isNavCode),
                  a.xp6(1),
                  a.Q6J('ngIf', !l.isOpenCode)('ngIfElse', n);
              }
            },
            dependencies: [u.ez, u.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          i
        );
      })();
    },
    2792: (T, p, t) => {
      t.r(p), t.d(p, { DefaultImageModule: () => l });
      var u = t(9808),
        a = t(2526),
        e = t(4893),
        r = t(6434);
      let g = (() => {
        class n {}
        return (
          (n.ɵfac = function (c) {
            return new (c || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['app-default-image-api']],
            decls: 65,
            vars: 0,
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
                "import { ODefaultImageDirective } from 'ngx-obelisco-example/directives'"
              ],
              [1, 'section-selector']
            ],
            template: function (c, v) {
              1 & c &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para la directiva oDefaultImage de Obelisco'),
                e.qZA(),
                e.TgZ(4, 'pre', 2),
                e._uU(5, '      '),
                e._UZ(6, 'code', 3),
                e._uU(7, '\n    '),
                e.qZA()(),
                e._UZ(8, 'hr'),
                e.TgZ(9, 'div', 4)(10, 'p'),
                e._uU(11, ' La directiva '),
                e.TgZ(12, 'code'),
                e._uU(13, 'oDefaultImage'),
                e.qZA(),
                e._uU(
                  14,
                  ' en Angular se utiliza para proporcionar una imagen predeterminada en caso de que la imagen original no se cargue correctamente. '
                ),
                e.qZA(),
                e._UZ(15, 'br'),
                e.TgZ(16, 'h4'),
                e._uU(17, 'Uso:'),
                e.qZA(),
                e.TgZ(18, 'p'),
                e._uU(19, ' Agrega el atributo '),
                e.TgZ(20, 'code'),
                e._uU(21, 'oDefaultImage'),
                e.qZA(),
                e._uU(22, ' a la etiqueta '),
                e.TgZ(23, 'code'),
                e._uU(24, '<img>'),
                e.qZA(),
                e._uU(
                  25,
                  ' en tu plantilla HTML. La directiva se encargar\xe1 autom\xe1ticamente de cambiar la imagen en caso de error de carga. '
                ),
                e.qZA(),
                e._UZ(26, 'br'),
                e.TgZ(27, 'h4'),
                e._uU(28, 'Reglas y Consideraciones:'),
                e.qZA(),
                e.TgZ(29, 'ul')(30, 'li'),
                e._uU(31, ' La directiva '),
                e.TgZ(32, 'code'),
                e._uU(33, 'oDefaultImage'),
                e.qZA(),
                e._uU(34, ' debe ser aplicada \xfanicamente a elementos '),
                e.TgZ(35, 'code'),
                e._uU(36, '<img>'),
                e.qZA(),
                e._uU(37, '. '),
                e.qZA(),
                e.TgZ(38, 'li'),
                e._uU(
                  39,
                  ' La directiva debe estar disponible en el m\xf3dulo de Angular donde se utilizar\xe1. Aseg\xfarate de importar y declarar la directiva en el m\xf3dulo correspondiente. '
                ),
                e.qZA(),
                e.TgZ(40, 'li'),
                e._uU(
                  41,
                  ' La imagen predeterminada que se mostrar\xe1 en caso de error puede ser definida mediante la propiedad '
                ),
                e.TgZ(42, 'code'),
                e._uU(43, 'defaultImageUrl'),
                e.qZA(),
                e._uU(44, ' en la etiqueta '),
                e.TgZ(45, 'code'),
                e._uU(46, '<img>'),
                e.qZA(),
                e._uU(47, ', permitiendo as\xed la flexibilidad de usar cualquier imagen deseada. '),
                e.qZA()(),
                e._UZ(48, 'br'),
                e.TgZ(49, 'h4'),
                e._uU(50, 'Componentes con Directiva oDefaultImage Integrada:'),
                e.qZA(),
                e.TgZ(51, 'p'),
                e._uU(52, ' Algunos componentes de Angular, como '),
                e.TgZ(53, 'code'),
                e._uU(54, 'OCard'),
                e.qZA(),
                e._uU(55, ', '),
                e.TgZ(56, 'code'),
                e._uU(57, 'OGallery'),
                e.qZA(),
                e._uU(58, ' y '),
                e.TgZ(59, 'code'),
                e._uU(60, 'OHighlighted'),
                e.qZA(),
                e._uU(61, ', ya vienen con la directiva '),
                e.TgZ(62, 'code'),
                e._uU(63, 'oDefaultImage'),
                e.qZA(),
                e._uU(
                  64,
                  ' integrada. Puedes utilizar estos componentes directamente en tu aplicaci\xf3n sin necesidad de agregar la directiva manualmente a las im\xe1genes dentro de ellos. '
                ),
                e.qZA()()());
            },
            dependencies: [r.y]
          })),
          n
        );
      })();
      var m = t(4948),
        _ = t(2171),
        f = t(6706);
      const Z = [
        { path: 'api', component: g },
        {
          path: 'examples',
          component: (() => {
            class n {
              constructor() {
                (this.imageDefaultExample =
                  '\n  <div class="card">\n    <img oDefaultImage src="cards/*" class="card-img-top" alt="descripci\xf3n de imagen" />\n    <div class="card-body">\n      <p class="card-headline">sobrelinea</p>\n      <h3 class="card-title">\n        <a href="#" class="card-title-link">T\xedtulo de la tarjeta</a>\n      </h3>\n      <p class="card-text">Descripci\xf3n de la tarjeta</p>\n      <div class="card-info">\n        <div class="pt-2">\n          <small>\n            <span class="material-icons-round">calendar_today</span>\n            Lun 01/1\n          </small>\n          <small>\n            <span class="material-icons-round">watch_later</span>\n            17 | 18 | 19 hs\n          </small>\n        </div>\n      </div>\n    </div>\n  </div>\n  '),
                  (this.imageDefaultUrlExample =
                    '\n  <div class="card">\n    <img\n      oDefaultImage\n      defaultImageUrl="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"\n      src="cards/*"\n      class="card-img-top"\n      alt="descripci\xf3n de imagen"\n    />\n    <div class="card-body">\n      <p class="card-headline">sobrelinea</p>\n      <h3 class="card-title">\n        <a href="#" class="card-title-link">T\xedtulo de la tarjeta</a>\n      </h3>\n      <p class="card-text">Descripci\xf3n de la tarjeta</p>\n      <div class="card-info">\n        <div class="pt-2">\n          <small>\n            <span class="material-icons-round">calendar_today</span>\n            Lun 01/1\n          </small>\n          <small>\n            <span class="material-icons-round">watch_later</span>\n            17 | 18 | 19 hs\n          </small>\n        </div>\n      </div>\n    </div>\n  </div>\n  ');
              }
            }
            return (
              (n.ɵfac = function (c) {
                return new (c || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [['app-default-image-examples']],
                decls: 61,
                vars: 2,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Selecci\xf3n \xfanica'],
                  ['component', '', 1, 'col-4'],
                  [1, 'card'],
                  ['oDefaultImage', '', 'src', 'cards/*', 'alt', 'descripci\xf3n de imagen', 1, 'card-img-top'],
                  [1, 'card-body'],
                  [1, 'card-headline'],
                  [1, 'card-title'],
                  ['href', '#', 1, 'card-title-link'],
                  [1, 'card-text'],
                  [1, 'card-info'],
                  [1, 'pt-2'],
                  [1, 'material-icons-round'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  [
                    'oDefaultImage',
                    '',
                    'defaultImageUrl',
                    'https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg',
                    'src',
                    'cards/*',
                    'alt',
                    'descripci\xf3n de imagen',
                    1,
                    'card-img-top'
                  ]
                ],
                template: function (c, v) {
                  1 & c &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'div', 3),
                    e._UZ(4, 'img', 4),
                    e.TgZ(5, 'div', 5)(6, 'p', 6),
                    e._uU(7, 'sobrelinea'),
                    e.qZA(),
                    e.TgZ(8, 'h3', 7)(9, 'a', 8),
                    e._uU(10, 'T\xedtulo de la tarjeta'),
                    e.qZA()(),
                    e.TgZ(11, 'p', 9),
                    e._uU(12, 'Descripci\xf3n de la tarjeta'),
                    e.qZA(),
                    e.TgZ(13, 'div', 10)(14, 'div', 11)(15, 'small')(16, 'span', 12),
                    e._uU(17, 'calendar_today'),
                    e.qZA(),
                    e._uU(18, ' Lun 01/1 '),
                    e.qZA(),
                    e.TgZ(19, 'small')(20, 'span', 12),
                    e._uU(21, 'watch_later'),
                    e.qZA(),
                    e._uU(22, ' 17 | 18 | 19 hs '),
                    e.qZA()()()()()(),
                    e.TgZ(23, 'pre', 13),
                    e._uU(24, '      '),
                    e.TgZ(25, 'button', 14),
                    e._uU(26, 'Copiar'),
                    e.qZA(),
                    e._uU(27, '\n      '),
                    e.TgZ(28, 'code', 15),
                    e._uU(29),
                    e.qZA(),
                    e._uU(30, '\n    '),
                    e.qZA()(),
                    e.TgZ(31, 'app-viewer', 1)(32, 'div', 2)(33, 'div', 3),
                    e._UZ(34, 'img', 16),
                    e.TgZ(35, 'div', 5)(36, 'p', 6),
                    e._uU(37, 'sobrelinea'),
                    e.qZA(),
                    e.TgZ(38, 'h3', 7)(39, 'a', 8),
                    e._uU(40, 'T\xedtulo de la tarjeta'),
                    e.qZA()(),
                    e.TgZ(41, 'p', 9),
                    e._uU(42, 'Descripci\xf3n de la tarjeta'),
                    e.qZA(),
                    e.TgZ(43, 'div', 10)(44, 'div', 11)(45, 'small')(46, 'span', 12),
                    e._uU(47, 'calendar_today'),
                    e.qZA(),
                    e._uU(48, ' Lun 01/1 '),
                    e.qZA(),
                    e.TgZ(49, 'small')(50, 'span', 12),
                    e._uU(51, 'watch_later'),
                    e.qZA(),
                    e._uU(52, ' 17 | 18 | 19 hs '),
                    e.qZA()()()()()(),
                    e.TgZ(53, 'pre', 13),
                    e._uU(54, '      '),
                    e.TgZ(55, 'button', 14),
                    e._uU(56, 'Copiar'),
                    e.qZA(),
                    e._uU(57, '\n      '),
                    e.TgZ(58, 'code', 15),
                    e._uU(59),
                    e.qZA(),
                    e._uU(60, '\n    '),
                    e.qZA()()()),
                    2 & c && (e.xp6(29), e.Oqu(v.imageDefaultExample), e.xp6(30), e.Oqu(v.imageDefaultExample));
                },
                dependencies: [m.B, _.y, r.y, f.O]
              })),
              n
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let i = (() => {
        class n {}
        return (
          (n.ɵfac = function (c) {
            return new (c || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [a.Bz.forChild(Z), a.Bz] })),
          n
        );
      })();
      var s = t(9384),
        o = t(2089);
      let l = (() => {
        class n {}
        return (
          (n.ɵfac = function (c) {
            return new (c || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [u.ez, i, o.Z, m.B, s.T] })),
          n
        );
      })();
    }
  }
]);
