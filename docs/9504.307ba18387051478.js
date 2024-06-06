'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [9504],
  {
    9504: (R, p, r) => {
      r.r(p), r.d(p, { HighlightedModule: () => G });
      var l = r(9808),
        h = r(7538),
        s = r(2526),
        m = r(5570),
        a = r(8362),
        e = r(4893),
        Z = r(4883),
        d = r(6434);
      let _ = (() => {
        class i {
          constructor() {
            (this.columns = m.L0),
              (this.highlightedSource = a.JD),
              (this.types = a.G9),
              (this.interfaceImage = a.qg),
              (this.interfaceVideo = a.WE),
              (this.interfaceIframe = a.Sn),
              (this.dataSourceInterfaceImage = a.Pl),
              (this.dataSourceInterfaceVideo = a.dO),
              (this.dataSourceInterfaceIframe = a.OQ);
          }
        }
        return (
          (i.ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['app-highlighted-api']],
            decls: 93,
            vars: 20,
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
                "import { OHighlightedModule } from 'ngx-obelisco-example/highlighted';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface', 'mb-5'],
              ['appPrism', ''],
              [1, 'section-type', 'mt-5'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              [1, 'section-properties'],
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped']
            ],
            template: function (n, t) {
              1 & n &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Destacado de Obelisco'),
                e.qZA(),
                e.TgZ(4, 'pre', 2),
                e._uU(5, '        '),
                e._UZ(6, 'code', 3),
                e._uU(7, '\n      '),
                e.qZA()(),
                e.TgZ(8, 'h3'),
                e._uU(9, 'Etiqueta'),
                e.qZA(),
                e._UZ(10, 'hr'),
                e.TgZ(11, 'div', 4)(12, 'h4'),
                e._uU(13, 'OHighlighted'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-highlighted'),
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
                e._uU(27, 'HighlightedType'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'type'),
                e.qZA(),
                e._uU(32, '.'),
                e.qZA(),
                e.TgZ(33, 'div', 8)(34, 'pre', 2),
                e._uU(35, '        '),
                e.TgZ(36, 'code', 9),
                e._uU(37),
                e.qZA(),
                e._uU(38, '\n      '),
                e.qZA()()(),
                e.TgZ(39, 'div', 10)(40, 'h4'),
                e._uU(41, 'MediaImage'),
                e.qZA(),
                e.TgZ(42, 'p'),
                e._uU(43, 'Permite establecer los valores de la propiedad '),
                e.TgZ(44, 'strong'),
                e._uU(45, 'image'),
                e.qZA(),
                e._uU(46, '.'),
                e.qZA(),
                e.TgZ(47, 'div', 11)(48, 'pre', 2),
                e._uU(49, '        '),
                e.TgZ(50, 'code', 12),
                e._uU(51),
                e.qZA(),
                e._uU(52, '\n      '),
                e.qZA(),
                e.TgZ(53, 'div', 13)(54, 'h5'),
                e._uU(55, 'Propiedades'),
                e.qZA(),
                e._UZ(56, 'o-table', 14),
                e.qZA()()(),
                e.TgZ(57, 'div', 10)(58, 'h4'),
                e._uU(59, 'MediaVideo'),
                e.qZA(),
                e.TgZ(60, 'p'),
                e._uU(61, 'Permite establecer los valores de la propiedad '),
                e.TgZ(62, 'strong'),
                e._uU(63, 'video'),
                e.qZA(),
                e._uU(64, '.'),
                e.qZA(),
                e.TgZ(65, 'div', 11)(66, 'pre', 2),
                e._uU(67, '        '),
                e.TgZ(68, 'code', 12),
                e._uU(69),
                e.qZA(),
                e._uU(70, '\n      '),
                e.qZA(),
                e.TgZ(71, 'div', 13)(72, 'h5'),
                e._uU(73, 'Propiedades'),
                e.qZA(),
                e._UZ(74, 'o-table', 14),
                e.qZA()()(),
                e.TgZ(75, 'div', 10)(76, 'h4'),
                e._uU(77, 'MediaIframe'),
                e.qZA(),
                e.TgZ(78, 'p'),
                e._uU(79, 'Permite establecer los valores de la propiedad '),
                e.TgZ(80, 'strong'),
                e._uU(81, 'iframe'),
                e.qZA(),
                e._uU(82, '.'),
                e.qZA(),
                e.TgZ(83, 'div', 11)(84, 'pre', 2),
                e._uU(85, '        '),
                e.TgZ(86, 'code', 12),
                e._uU(87),
                e.qZA(),
                e._uU(88, '\n      '),
                e.qZA(),
                e.TgZ(89, 'div', 13)(90, 'h5'),
                e._uU(91, 'Propiedades'),
                e.qZA(),
                e._UZ(92, 'o-table', 14),
                e.qZA()()()()),
                2 & n &&
                  (e.xp6(21),
                  e.Q6J('columns', t.columns)('dataSource', t.highlightedSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(t.types),
                  e.xp6(14),
                  e.Oqu(t.interfaceImage),
                  e.xp6(5),
                  e.Q6J('dataSource', t.dataSourceInterfaceImage)('columns', t.columns)('isBordered', !0)(
                    'isStriped',
                    !0
                  ),
                  e.xp6(13),
                  e.Oqu(t.interfaceVideo),
                  e.xp6(5),
                  e.Q6J('dataSource', t.dataSourceInterfaceVideo)('columns', t.columns)('isBordered', !0)(
                    'isStriped',
                    !0
                  ),
                  e.xp6(13),
                  e.Oqu(t.interfaceIframe),
                  e.xp6(5),
                  e.Q6J('dataSource', t.dataSourceInterfaceIframe)('columns', t.columns)('isBordered', !0)(
                    'isStriped',
                    !0
                  ));
            },
            dependencies: [Z.L, d.y]
          })),
          i
        );
      })();
      var c = r(4948),
        U = r(2171),
        T = r(1998),
        f = r(2313);
      const v = ['children'];
      function A(i, o) {
        if ((1 & i && (e.ynx(0), e._UZ(1, 'img', 4), e.BQk()), 2 & i)) {
          const n = e.oxw(2);
          e.xp6(1), e.Q6J('src', n.image.src, e.LSH)('alt', n.image.alt ? n.image.alt : ' ');
        }
      }
      function q(i, o) {
        if ((1 & i && (e.ynx(0), e._UZ(1, 'track', 9), e.BQk()), 2 & i)) {
          const n = e.oxw(3);
          e.xp6(1), e.Q6J('src', n.video.track, e.LSH);
        }
      }
      function C(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, 'p', 5),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'video', 6),
            e._UZ(4, 'source', 7),
            e.YNc(5, q, 2, 1, 'ng-container', 1),
            e.TgZ(6, 'p'),
            e._uU(7, ' Su navegador no soporta v\xeddeos HTML5. Puedes ver el video haciendo clic en '),
            e.TgZ(8, 'a', 8),
            e._uU(9, 'este enlace'),
            e.qZA(),
            e._uU(10, '. '),
            e.qZA()(),
            e.BQk()),
          2 & i)
        ) {
          const n = e.oxw(2);
          e.xp6(2),
            e.Oqu(n.video.title),
            e.xp6(2),
            e.Q6J('src', n.video.src, e.LSH),
            e.xp6(1),
            e.Q6J('ngIf', n.video.track),
            e.xp6(3),
            e.Q6J('href', n.video.src, e.LSH);
        }
      }
      function x(i, o) {
        if ((1 & i && (e.ynx(0), e._UZ(1, 'iframe', 10), e.BQk()), 2 & i)) {
          const n = e.oxw(2);
          e.xp6(1),
            e.Q6J(
              'src',
              n.sanitizeUrl(n.iframe.src ? n.iframe.src : ''),
              e.uOi
            )('title', n.iframe.title ? n.iframe.title : ' ');
        }
      }
      function H(i, o) {
        if ((1 & i && (e.ynx(0), e._UZ(1, 'p', 13), e.BQk()), 2 & i)) {
          const n = e.oxw(3);
          e.xp6(1), e.Q6J('innerHTML', n.description, e.oJD);
        }
      }
      function O(i, o) {
        1 & i && (e.TgZ(0, 'div', 14), e.Hsn(1), e.qZA());
      }
      function y(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, 'h2', 11),
            e._uU(2),
            e.qZA(),
            e.YNc(3, H, 2, 1, 'ng-container', 1),
            e.YNc(4, O, 2, 0, 'div', 12),
            e.BQk()),
          2 & i)
        ) {
          const n = e.oxw(2);
          e.xp6(2), e.Oqu(n.title), e.xp6(1), e.Q6J('ngIf', n.description), e.xp6(1), e.Q6J('ngIf', n.children);
        }
      }
      function Q(i, o) {
        if ((1 & i && e.GkF(0, 15), 2 & i)) {
          const n = e.oxw(2);
          e.Q6J('ngTemplateOutlet', n.oCustomContent.template);
        }
      }
      function b(i, o) {
        if (
          (1 & i &&
            (e.YNc(0, A, 2, 2, 'ng-container', 1),
            e.YNc(1, C, 11, 4, 'ng-container', 1),
            e.YNc(2, x, 2, 2, 'ng-container', 1),
            e.TgZ(3, 'div', 2),
            e.YNc(4, y, 5, 3, 'ng-container', 1),
            e.YNc(5, Q, 1, 1, 'ng-container', 3),
            e.qZA()),
          2 & i)
        ) {
          const n = e.oxw();
          e.Q6J('ngIf', n.image),
            e.xp6(1),
            e.Q6J('ngIf', n.video),
            e.xp6(1),
            e.Q6J('ngIf', n.iframe),
            e.xp6(2),
            e.Q6J('ngIf', !n.oCustomContent),
            e.xp6(1),
            e.Q6J('ngIf', n.oCustomContent);
        }
      }
      function J(i, o) {
        1 & i && e.GkF(0);
      }
      function S(i, o) {
        if (
          (1 & i &&
            (e.ynx(0), e.TgZ(1, 'div', 16)(2, 'div', 17), e.YNc(3, J, 1, 0, 'ng-container', 18), e.qZA()(), e.BQk()),
          2 & i)
        ) {
          const n = e.oxw(),
            t = e.MAs(1);
          e.xp6(1),
            e.ekj('bg-light', n.isBgLight),
            e.Q6J('ngClass', n.customClasses),
            e.xp6(2),
            e.Q6J('ngTemplateOutlet', t);
        }
      }
      function M(i, o) {
        1 & i && e.GkF(0);
      }
      function I(i, o) {
        if (
          (1 & i && (e.ynx(0), e.TgZ(1, 'div', 19), e.YNc(2, M, 1, 0, 'ng-container', 18), e.qZA(), e.BQk()), 2 & i)
        ) {
          const n = e.oxw(),
            t = e.MAs(1);
          e.xp6(1), e.Q6J('ngClass', n.customClasses), e.xp6(1), e.Q6J('ngTemplateOutlet', t);
        }
      }
      function B(i, o) {
        1 & i && e.GkF(0);
      }
      function N(i, o) {
        if (
          (1 & i && (e.ynx(0), e.TgZ(1, 'div', 20), e.YNc(2, B, 1, 0, 'ng-container', 18), e.qZA(), e.BQk()), 2 & i)
        ) {
          const n = e.oxw(),
            t = e.MAs(1);
          e.xp6(1), e.Q6J('ngClass', n.customClasses), e.xp6(1), e.Q6J('ngTemplateOutlet', t);
        }
      }
      const P = ['*'];
      let w = (() => {
        class i {
          constructor(n) {
            (this.sanitizer = n), (this.isBgLight = !1), (this.type = 'banner'), (this.customClasses = '');
          }
          sanitizeUrl(n) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(n);
          }
        }
        return (
          (i.ɵfac = function (n) {
            return new (n || i)(e.Y36(f.H7));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['o-highlighted']],
            contentQueries: function (n, t, u) {
              if ((1 & n && (e.Suo(u, T.X, 7), e.Suo(u, v, 5, e.SBq)), 2 & n)) {
                let g;
                e.iGM((g = e.CRH())) && (t.oCustomContent = g.first), e.iGM((g = e.CRH())) && (t.children = g.first);
              }
            },
            inputs: {
              title: 'title',
              description: 'description',
              isBgLight: 'isBgLight',
              type: 'type',
              image: 'image',
              video: 'video',
              iframe: 'iframe',
              customClasses: 'customClasses'
            },
            ngContentSelectors: P,
            decls: 5,
            vars: 3,
            consts: [
              ['highlightedContent', ''],
              [4, 'ngIf'],
              [1, 'card-body'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'card-img', 3, 'src', 'alt'],
              [1, 'sr-only'],
              ['controls', '', 1, 'card-img'],
              ['type', 'video/mp4', 3, 'src'],
              [3, 'href'],
              ['default', '', 'kind', 'captions', 'srclang', 'es', 3, 'src'],
              [
                'frameborder',
                '0',
                'allow',
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                'allowfullscreen',
                '',
                1,
                'card-img',
                3,
                'src',
                'title'
              ],
              [1, 'card-title'],
              ['class', 'panel-footer', 4, 'ngIf'],
              [1, 'card-text', 3, 'innerHTML'],
              [1, 'panel-footer'],
              [3, 'ngTemplateOutlet'],
              [1, 'panel-horizontal-content', 3, 'ngClass'],
              [1, 'card', 'card-simple', 'panel-horizontal'],
              [4, 'ngTemplateOutlet'],
              [1, 'card', 'card-simple', 'panel-vertical', 3, 'ngClass'],
              [1, 'card', 'card-simple', 'panel-lateral', 3, 'ngClass']
            ],
            template: function (n, t) {
              1 & n &&
                (e.F$t(),
                e.YNc(0, b, 6, 5, 'ng-template', null, 0, e.W1O),
                e.YNc(2, S, 4, 4, 'ng-container', 1),
                e.YNc(3, I, 3, 2, 'ng-container', 1),
                e.YNc(4, N, 3, 2, 'ng-container', 1)),
                2 & n &&
                  (e.xp6(2),
                  e.Q6J('ngIf', 'banner' === t.type),
                  e.xp6(1),
                  e.Q6J('ngIf', 'grouping' === t.type),
                  e.xp6(1),
                  e.Q6J('ngIf', 'lateral' === t.type));
            },
            dependencies: [l.mk, l.O5, l.tP],
            styles: [
              '.card.panel-horizontal .card-body .panel-footer o-access, .card.panel-vertical[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   o-access[_ngcontent-%COMP%], .card.panel-lateral[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .panel-footer[_ngcontent-%COMP%]   o-access[_ngcontent-%COMP%]{width:100%}  .card.panel-lateral .card-body .panel-footer o-button,   .card.panel-lateral .card-body .panel-footer o-access{width:100%}'
            ]
          })),
          i
        );
      })();
      var z = r(2200),
        E = r(139);
      const L = [
        { path: 'api', component: _ },
        {
          path: 'examples',
          component: (() => {
            class i {
              constructor() {
                (this.title = a.j),
                  (this.description = a.k_),
                  (this.shortDescription = a.hA),
                  (this.picture = a.pR),
                  (this.video = a.Uw),
                  (this.iframe = a.nD),
                  (this.imageTS = a.kX),
                  (this.videoTS = a.yB),
                  (this.noMediaTS = a.rO),
                  (this.bannerImageHtml = a.lP),
                  (this.bannerVideoHtml = a.lp),
                  (this.bannerHtml = a.fV),
                  (this.bannerBgHtml = a.s5),
                  (this.groupingImageHtml = a.WJ),
                  (this.groupingVideoHtml = a.DB),
                  (this.groupingHtml = a.PG),
                  (this.lateralHtml = a.f8);
              }
            }
            return (
              (i.ɵfac = function (n) {
                return new (n || i)();
              }),
              (i.ɵcmp = e.Xpm({
                type: i,
                selectors: [['app-highlighted-examples']],
                decls: 199,
                vars: 65,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Horizontal con imagen', 3, 'isNavCode'],
                  ['component', '', 3, 'title', 'description', 'image'],
                  ['link', '#', 'size', 'lg'],
                  ['children', ''],
                  ['link', '#', 'size', 'lg', 'type', 'secondary'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript'],
                  ['title', 'Horizontal con video', 3, 'isNavCode'],
                  ['component', '', 3, 'title', 'description', 'video'],
                  ['component', '', 3, 'title', 'description', 'iframe'],
                  ['href', '#', 'target', '_blank', 1, 'external'],
                  ['title', 'Horizontal sin multimedia', 3, 'isNavCode'],
                  ['component', '', 3, 'title', 'description'],
                  [
                    'size',
                    'lg',
                    'type',
                    'secondary',
                    'link',
                    '#',
                    'icon',
                    'file_download',
                    'text',
                    'Descargar',
                    'download',
                    ''
                  ],
                  ['title', 'Horizontal con fondo', 3, 'isNavCode'],
                  ['component', '', 3, 'title', 'description', 'image', 'isBgLight'],
                  ['title', 'Acceso', 'icon', 'bx bxs-info-circle', 'route', '/home', 'size', 'sm'],
                  ['title', 'Vertical con imagen', 3, 'isNavCode'],
                  ['component', '', 1, 'container'],
                  [1, 'card-deck', 'max-cards-2'],
                  ['type', 'grouping', 3, 'title', 'description', 'image'],
                  ['title', 'Vertical con video', 3, 'isNavCode'],
                  ['type', 'grouping', 3, 'title', 'description', 'video'],
                  ['type', 'grouping', 3, 'title', 'description', 'iframe'],
                  ['title', 'Vertical sin multimedia', 3, 'isNavCode'],
                  ['type', 'grouping', 3, 'title', 'description'],
                  ['title', 'Lateral', 3, 'isNavCode'],
                  ['component', '', 1, 'container__highlighted-lateral'],
                  ['type', 'lateral', 3, 'title', 'description'],
                  ['link', '#', 'size', 'lg', 3, 'isExpandable'],
                  [
                    'size',
                    'lg',
                    'type',
                    'secondary',
                    'link',
                    '#',
                    'icon',
                    'file_download',
                    'text',
                    'Descargar',
                    'download',
                    '',
                    3,
                    'isExpandable'
                  ]
                ],
                template: function (n, t) {
                  1 & n &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'o-highlighted', 2),
                    e._UZ(3, 'o-button', 3, 4)(5, 'o-button', 5, 4),
                    e.qZA(),
                    e.TgZ(7, 'pre', 6),
                    e._uU(8, '      '),
                    e.TgZ(9, 'button', 7),
                    e._uU(10, 'Copiar'),
                    e.qZA(),
                    e._uU(11, '\n      '),
                    e.TgZ(12, 'code', 8),
                    e._uU(13),
                    e.qZA(),
                    e._uU(14, '\n    '),
                    e.qZA(),
                    e.TgZ(15, 'pre', 9),
                    e._uU(16, '      '),
                    e.TgZ(17, 'button', 7),
                    e._uU(18, 'Copiar'),
                    e.qZA(),
                    e._uU(19, '\n      '),
                    e.TgZ(20, 'code', 10),
                    e._uU(21),
                    e.qZA(),
                    e._uU(22, '\n    '),
                    e.qZA()(),
                    e.TgZ(23, 'app-viewer', 11)(24, 'o-highlighted', 12),
                    e._UZ(25, 'o-button', 3, 4),
                    e.qZA(),
                    e.TgZ(27, 'o-highlighted', 13)(28, 'a', 14, 4),
                    e._uU(30, 'Enlace externo'),
                    e.qZA()(),
                    e.TgZ(31, 'pre', 6),
                    e._uU(32, '      '),
                    e.TgZ(33, 'button', 7),
                    e._uU(34, 'Copiar'),
                    e.qZA(),
                    e._uU(35, '\n      '),
                    e.TgZ(36, 'code', 8),
                    e._uU(37),
                    e.qZA(),
                    e._uU(38, '\n    '),
                    e.qZA(),
                    e.TgZ(39, 'pre', 9),
                    e._uU(40, '      '),
                    e.TgZ(41, 'button', 7),
                    e._uU(42, 'Copiar'),
                    e.qZA(),
                    e._uU(43, '\n      '),
                    e.TgZ(44, 'code', 10),
                    e._uU(45),
                    e.qZA(),
                    e._uU(46, '\n    '),
                    e.qZA()(),
                    e.TgZ(47, 'app-viewer', 15)(48, 'o-highlighted', 16),
                    e._UZ(49, 'o-button', 17, 4),
                    e.qZA(),
                    e.TgZ(51, 'pre', 6),
                    e._uU(52, '      '),
                    e.TgZ(53, 'button', 7),
                    e._uU(54, 'Copiar'),
                    e.qZA(),
                    e._uU(55, '\n      '),
                    e.TgZ(56, 'code', 8),
                    e._uU(57),
                    e.qZA(),
                    e._uU(58, '\n    '),
                    e.qZA(),
                    e.TgZ(59, 'pre', 9),
                    e._uU(60, '      '),
                    e.TgZ(61, 'button', 7),
                    e._uU(62, 'Copiar'),
                    e.qZA(),
                    e._uU(63, '\n      '),
                    e.TgZ(64, 'code', 10),
                    e._uU(65),
                    e.qZA(),
                    e._uU(66, '\n    '),
                    e.qZA()(),
                    e.TgZ(67, 'app-viewer', 18)(68, 'o-highlighted', 19),
                    e._UZ(69, 'o-access', 20, 4),
                    e.qZA(),
                    e.TgZ(71, 'pre', 6),
                    e._uU(72, '      '),
                    e.TgZ(73, 'button', 7),
                    e._uU(74, 'Copiar'),
                    e.qZA(),
                    e._uU(75, '\n      '),
                    e.TgZ(76, 'code', 8),
                    e._uU(77),
                    e.qZA(),
                    e._uU(78, '\n    '),
                    e.qZA(),
                    e.TgZ(79, 'pre', 9),
                    e._uU(80, '      '),
                    e.TgZ(81, 'button', 7),
                    e._uU(82, 'Copiar'),
                    e.qZA(),
                    e._uU(83, '\n      '),
                    e.TgZ(84, 'code', 10),
                    e._uU(85),
                    e.qZA(),
                    e._uU(86, '\n    '),
                    e.qZA()(),
                    e.TgZ(87, 'app-viewer', 21)(88, 'div', 22)(89, 'div', 23)(90, 'o-highlighted', 24),
                    e._UZ(91, 'o-button', 3, 4),
                    e.qZA(),
                    e.TgZ(93, 'o-highlighted', 24),
                    e._UZ(94, 'o-button', 17, 4),
                    e.qZA()()(),
                    e.TgZ(96, 'pre', 6),
                    e._uU(97, '      '),
                    e.TgZ(98, 'button', 7),
                    e._uU(99, 'Copiar'),
                    e.qZA(),
                    e._uU(100, '\n      '),
                    e.TgZ(101, 'code', 8),
                    e._uU(102),
                    e.qZA(),
                    e._uU(103, '\n    '),
                    e.qZA(),
                    e.TgZ(104, 'pre', 9),
                    e._uU(105, '      '),
                    e.TgZ(106, 'button', 7),
                    e._uU(107, 'Copiar'),
                    e.qZA(),
                    e._uU(108, '\n      '),
                    e.TgZ(109, 'code', 10),
                    e._uU(110),
                    e.qZA(),
                    e._uU(111, '\n    '),
                    e.qZA()(),
                    e.TgZ(112, 'app-viewer', 25)(113, 'div', 22)(114, 'div', 23)(115, 'o-highlighted', 26)(
                      116,
                      'a',
                      14,
                      4
                    ),
                    e._uU(118, 'Enlace externo'),
                    e.qZA()(),
                    e.TgZ(119, 'o-highlighted', 27)(120, 'a', 14, 4),
                    e._uU(122, 'Enlace externo'),
                    e.qZA()()()(),
                    e.TgZ(123, 'pre', 6),
                    e._uU(124, '      '),
                    e.TgZ(125, 'button', 7),
                    e._uU(126, 'Copiar'),
                    e.qZA(),
                    e._uU(127, '\n      '),
                    e.TgZ(128, 'code', 8),
                    e._uU(129),
                    e.qZA(),
                    e._uU(130, '\n    '),
                    e.qZA(),
                    e.TgZ(131, 'pre', 9),
                    e._uU(132, '      '),
                    e.TgZ(133, 'button', 7),
                    e._uU(134, 'Copiar'),
                    e.qZA(),
                    e._uU(135, '\n      '),
                    e.TgZ(136, 'code', 10),
                    e._uU(137),
                    e.qZA(),
                    e._uU(138, '\n    '),
                    e.qZA()(),
                    e.TgZ(139, 'app-viewer', 28)(140, 'div', 22)(141, 'div', 23)(142, 'o-highlighted', 29),
                    e._UZ(143, 'o-access', 20, 4),
                    e.qZA(),
                    e.TgZ(145, 'o-highlighted', 29),
                    e._UZ(146, 'o-access', 20, 4),
                    e.qZA()()(),
                    e.TgZ(148, 'pre', 6),
                    e._uU(149, '      '),
                    e.TgZ(150, 'button', 7),
                    e._uU(151, 'Copiar'),
                    e.qZA(),
                    e._uU(152, '\n      '),
                    e.TgZ(153, 'code', 8),
                    e._uU(154),
                    e.qZA(),
                    e._uU(155, '\n    '),
                    e.qZA(),
                    e.TgZ(156, 'pre', 9),
                    e._uU(157, '      '),
                    e.TgZ(158, 'button', 7),
                    e._uU(159, 'Copiar'),
                    e.qZA(),
                    e._uU(160, '\n      '),
                    e.TgZ(161, 'code', 10),
                    e._uU(162),
                    e.qZA(),
                    e._uU(163, '\n    '),
                    e.qZA()(),
                    e.TgZ(164, 'app-viewer', 30)(165, 'div', 31)(166, 'div')(167, 'o-highlighted', 32),
                    e._UZ(168, 'o-button', 33, 4),
                    e.qZA()(),
                    e.TgZ(170, 'div')(171, 'o-highlighted', 32),
                    e._UZ(172, 'o-button', 34, 4),
                    e.qZA()(),
                    e.TgZ(174, 'div')(175, 'o-highlighted', 32)(176, 'a', 14, 4),
                    e._uU(178, 'Enlace externo'),
                    e.qZA()()(),
                    e.TgZ(179, 'div')(180, 'o-highlighted', 32),
                    e._UZ(181, 'o-access', 20, 4),
                    e.qZA()()(),
                    e.TgZ(183, 'pre', 6),
                    e._uU(184, '      '),
                    e.TgZ(185, 'button', 7),
                    e._uU(186, 'Copiar'),
                    e.qZA(),
                    e._uU(187, '\n      '),
                    e.TgZ(188, 'code', 8),
                    e._uU(189),
                    e.qZA(),
                    e._uU(190, '\n    '),
                    e.qZA(),
                    e.TgZ(191, 'pre', 9),
                    e._uU(192, '      '),
                    e.TgZ(193, 'button', 7),
                    e._uU(194, 'Copiar'),
                    e.qZA(),
                    e._uU(195, '\n      '),
                    e.TgZ(196, 'code', 10),
                    e._uU(197),
                    e.qZA(),
                    e._uU(198, '\n    '),
                    e.qZA()()()),
                    2 & n &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('title', t.title)('description', t.description)('image', t.picture),
                      e.xp6(11),
                      e.Oqu(t.bannerImageHtml),
                      e.xp6(8),
                      e.Oqu(t.imageTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('title', t.title)('description', t.description)('video', t.video),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.description)('iframe', t.iframe),
                      e.xp6(10),
                      e.Oqu(t.bannerVideoHtml),
                      e.xp6(8),
                      e.Oqu(t.videoTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('title', t.title)('description', t.description),
                      e.xp6(9),
                      e.Oqu(t.bannerHtml),
                      e.xp6(8),
                      e.Oqu(t.noMediaTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('title', t.title)('description', t.description)('image', t.picture)('isBgLight', !0),
                      e.xp6(9),
                      e.Oqu(t.bannerBgHtml),
                      e.xp6(8),
                      e.Oqu(t.imageTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.description)('image', t.picture),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.description)('image', t.picture),
                      e.xp6(9),
                      e.Oqu(t.groupingImageHtml),
                      e.xp6(8),
                      e.Oqu(t.imageTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.description)('video', t.video),
                      e.xp6(4),
                      e.Q6J('title', t.title)('description', t.description)('iframe', t.iframe),
                      e.xp6(10),
                      e.Oqu(t.groupingVideoHtml),
                      e.xp6(8),
                      e.Oqu(t.videoTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.description),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.description),
                      e.xp6(9),
                      e.Oqu(t.groupingHtml),
                      e.xp6(8),
                      e.Oqu(t.noMediaTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.shortDescription),
                      e.xp6(1),
                      e.Q6J('isExpandable', !0),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.shortDescription),
                      e.xp6(1),
                      e.Q6J('isExpandable', !0),
                      e.xp6(3),
                      e.Q6J('title', t.title)('description', t.shortDescription),
                      e.xp6(5),
                      e.Q6J('title', t.title)('description', t.shortDescription),
                      e.xp6(9),
                      e.Oqu(t.lateralHtml),
                      e.xp6(8),
                      e.Oqu(t.noMediaTS));
                },
                dependencies: [c.B, U.y, d.y, w, z.g, E.x],
                styles: [
                  '.container__highlighted-lateral[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:2rem;justify-content:space-evenly}.container__highlighted-lateral[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{max-width:340px}'
                ]
              })),
              i
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let Y = (() => {
        class i {}
        return (
          (i.ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [s.Bz.forChild(L), s.Bz] })),
          i
        );
      })();
      var k = r(2089),
        D = r(9384);
      let V = (() => {
        class i {}
        return (
          (i.ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [l.ez] })),
          i
        );
      })();
      var F = r(3717),
        j = r(9373);
      let G = (() => {
        class i {}
        return (
          (i.ɵfac = function (n) {
            return new (n || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [l.ez, Y, h.Z, l.ez, k.Z, c.B, D.T, V, F.J, j.n] })),
          i
        );
      })();
    }
  }
]);
