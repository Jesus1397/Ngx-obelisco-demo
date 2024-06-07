'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [1960],
  {
    4883: (I, f, s) => {
      s.d(f, { L: () => h });
      var t = s(4893),
        e = s(2313),
        C = s(9808);
      const Z = ['checkbox'];
      function U(i, u) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (_) {
              t.CHM(n);
              const x = t.oxw(2);
              return t.KtG(x.onHeaderCheckboxChange(_));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & i) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh),
            t.xp6(2),
            t.MGl('id', '', n.id, '-selectAllCheckbox')('name', '', n.id, '-selectAllCheckbox'),
            t.xp6(1),
            t.MGl('for', '', n.id, '-selectAllCheckbox'),
            t.Q6J('ngClass', n.checkbox.customClassesLabel),
            t.xp6(1),
            t.Oqu(n.checkbox.title);
        }
      }
      function v(i, u) {
        if ((1 & i && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & i)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function b(i, u) {
        if ((1 & i && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & i)) {
          const n = u.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function y(i, u) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (_) {
              t.CHM(n);
              const x = t.oxw().$implicit,
                O = t.oxw(2);
              return t.KtG(O.onCheckboxChange(x, _));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & i) {
          const n = t.oxw().index,
            r = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', r.id, '-checkbox_', n, '')('name', '', r.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', r.id, '-checkbox_', n, '');
        }
      }
      function p(i, u) {
        if ((1 & i && t._UZ(0, 'div', 14), 2 & i)) {
          const n = t.oxw().$implicit,
            r = t.oxw().$implicit,
            _ = t.oxw(2);
          t.Q6J('innerHTML', _.sanitizeHTML(r[n.key].data), t.oJD);
        }
      }
      function A(i, u) {
        if ((1 & i && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, p, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & i)) {
          const n = u.$implicit,
            r = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', r[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', r[n.key].data);
        }
      }
      function m(i, u) {
        if (
          (1 & i && (t.TgZ(0, 'tr'), t.YNc(1, y, 5, 6, 'td', 9), t.YNc(2, A, 3, 2, 'ng-container', 4), t.qZA()), 2 & i)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const T = function (i, u) {
        return { 'table-borderless': i, 'table-striped': u };
      };
      function d(i, u) {
        if (
          (1 & i &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, U, 5, 6, 'th', 3),
            t.YNc(4, v, 2, 2, 'th', 3),
            t.YNc(5, b, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, m, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & i)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, T, !n.isBordered, n.isStriped)),
            t.xp6(3),
            t.Q6J('ngIf', 1 == (null == n.checkbox ? null : n.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngIf', 0 == (null == n.checkbox ? null : n.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngForOf', n.columns),
            t.xp6(2),
            t.Q6J('ngForOf', n.dataSource);
        }
      }
      const g = function (i) {
        return { 'responsive-scroll': i };
      };
      let h = (() => {
        class i {
          constructor(n, r) {
            (this.renderer = n),
              (this.sanitizer = r),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new t.vpe()),
              (this.inputCheckArr = []),
              (this.dataSelected = []);
          }
          ngOnInit() {
            this.componentValidations();
          }
          ngAfterViewInit() {
            this.checkboxRef.map((n) => {
              this.inputCheckArr.push(n.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((n) => {
              if ('' === n.key || '' === n.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((n) => (n.value = n.value.trim())),
              (this.columns = this.columns.map(
                (n) => ((n.value = n.value.charAt(0).toUpperCase() + n.value.slice(1).toLowerCase()), n)
              )),
              this.columns.map((n) => {
                if (
                  n.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  n.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), n;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(n) {
            return this.sanitizer.bypassSecurityTrustHtml(n);
          }
          onHeaderCheckboxChange(n) {
            const r = n.target;
            if (r) {
              const _ = r.checked;
              this.checkboxRef.toArray().forEach((x) => {
                x.nativeElement.checked = _;
              }),
                (this.dataSelected = _ ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, r) {
            if (r && r.target && 'boolean' == typeof r.target.checked) {
              if (r.target.checked) this.dataSelected.push(n);
              else {
                const x = this.dataSelected.findIndex((O) => O === n);
                -1 !== x && this.dataSelected.splice(x, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (i.ɵfac = function (n) {
            return new (n || i)(t.Y36(t.Qsj), t.Y36(e.H7));
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [['o-table']],
            viewQuery: function (n, r) {
              if ((1 & n && t.Gf(Z, 5), 2 & n)) {
                let _;
                t.iGM((_ = t.CRH())) && (r.checkboxRef = _);
              }
            },
            inputs: {
              id: 'id',
              columns: 'columns',
              dataSource: 'dataSource',
              isBordered: 'isBordered',
              isStriped: 'isStriped',
              isScrollable: 'isScrollable',
              customClasses: 'customClasses',
              checkbox: 'checkbox'
            },
            outputs: { dataSelectedChange: 'dataSelectedChange' },
            decls: 2,
            vars: 6,
            consts: [
              ['tabindex', '0', 3, 'ngClass'],
              ['class', 'table', 3, 'ngClass', 4, 'ngIf'],
              [1, 'table', 3, 'ngClass'],
              ['scope', 'col', 3, 'ngClass', 4, 'ngIf'],
              [4, 'ngFor', 'ngForOf'],
              ['scope', 'col', 3, 'ngClass'],
              [1, 'custom-control', 'custom-checkbox'],
              ['type', 'checkbox', 'value', '', 1, 'custom-control-input', 3, 'id', 'name', 'change'],
              [
                'aria-label',
                'Descripci\xf3n para usuarios de lectores de pantalla',
                1,
                'custom-control-label',
                3,
                'ngClass',
                'for'
              ],
              [4, 'ngIf'],
              ['checkbox', ''],
              [
                'aria-label',
                'Descripci\xf3n para usuarios de lectores de pantalla',
                1,
                'custom-control-label',
                'no-text',
                3,
                'for'
              ],
              [3, 'ngClass'],
              [3, 'innerHTML', 4, 'ngIf'],
              [3, 'innerHTML']
            ],
            template: function (n, r) {
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, d, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(r.customClasses),
                  t.Q6J('ngClass', t.VKq(4, g, r.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', r.isValidateComponent));
            },
            dependencies: [C.mk, C.sg, C.O5]
          })),
          i
        );
      })();
    },
    2089: (I, f, s) => {
      s.d(f, { Z: () => C });
      var t = s(9808),
        e = s(4893);
      let C = (() => {
        class Z {}
        return (
          (Z.ɵfac = function (v) {
            return new (v || Z)();
          }),
          (Z.ɵmod = e.oAB({ type: Z })),
          (Z.ɵinj = e.cJS({ imports: [t.ez] })),
          Z
        );
      })();
    },
    4948: (I, f, s) => {
      s.d(f, { B: () => A });
      var t = s(9808),
        e = s(4893);
      function C(m, T) {
        if (1 & m) {
          const d = e.EpF();
          e.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            e.NdJ('click', function () {
              e.CHM(d);
              const h = e.oxw();
              return e.KtG((h.isWindowHTML = !0));
            }),
            e._uU(4, 'HTML'),
            e.qZA()(),
            e.TgZ(5, 'li', 12)(6, 'a', 14),
            e.NdJ('click', function () {
              e.CHM(d);
              const h = e.oxw();
              return e.KtG((h.isWindowHTML = !1));
            }),
            e._uU(7, 'TS'),
            e.qZA()()()();
        }
        if (2 & m) {
          const d = e.oxw();
          e.xp6(3), e.ekj('active', d.isWindowHTML), e.xp6(3), e.ekj('active', !d.isWindowHTML);
        }
      }
      function Z(m, T) {
        1 & m && (e.ynx(0), e.Hsn(1), e.BQk());
      }
      function U(m, T) {
        1 & m && (e.ynx(0), e.Hsn(1, 1), e.BQk());
      }
      function v(m, T) {
        if ((1 & m && e.YNc(0, U, 2, 0, 'ng-container', 7), 2 & m)) {
          const d = e.oxw(),
            g = e.MAs(16);
          e.Q6J('ngIf', d.isWindowHTML)('ngIfElse', g);
        }
      }
      function b(m, T) {
        1 & m && e.Hsn(0, 2);
      }
      const y = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        p = ['[component]', '[component-html]', '[component-ts]'];
      let A = (() => {
        class m {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (m.ɵfac = function (d) {
            return new (d || m)();
          }),
          (m.ɵcmp = e.Xpm({
            type: m,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [e.jDz],
            ngContentSelectors: p,
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
            template: function (d, g) {
              if (
                (1 & d &&
                  (e.F$t(y),
                  e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  e._uU(3),
                  e.qZA(),
                  e.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  e.NdJ('click', function () {
                    return (g.isOpenCode = !g.isOpenCode);
                  }),
                  e.TgZ(8, 'span'),
                  e._uU(9),
                  e.qZA()()()()()(),
                  e.TgZ(10, 'div', 5),
                  e.YNc(11, C, 8, 4, 'nav', 6),
                  e.YNc(12, Z, 2, 0, 'ng-container', 7),
                  e.YNc(13, v, 1, 2, 'ng-template', null, 8, e.W1O),
                  e.YNc(15, b, 1, 0, 'ng-template', null, 9, e.W1O),
                  e.qZA()()),
                2 & d)
              ) {
                const h = e.MAs(14);
                e.xp6(3),
                  e.Oqu(g.title),
                  e.xp6(4),
                  e.ekj('active', g.isOpenCode),
                  e.xp6(2),
                  e.Oqu(g.linkCode),
                  e.xp6(2),
                  e.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  e.xp6(1),
                  e.Q6J('ngIf', !g.isOpenCode)('ngIfElse', h);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          m
        );
      })();
    },
    1960: (I, f, s) => {
      s.r(f), s.d(f, { GalleryModule: () => S });
      var t = s(9808),
        e = s(4893);
      let C = (() => {
        class a {}
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez] })),
          a
        );
      })();
      var Z = s(7538),
        U = s(2089),
        v = s(4948),
        b = s(2526),
        y = s(5570),
        p = s(9529),
        A = s(4883),
        m = s(6434);
      let T = (() => {
        class a {
          constructor() {
            (this.dataSourceGallery = p.Jc),
              (this.columnsGallery = y.L0),
              (this.exampleIterfaceImageItem = p.CJ),
              (this.dataSourceGalleryInterface = p.Gz);
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-gallery-api']],
            decls: 43,
            vars: 9,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OGalleryModule } from 'ngx-obelisco-example/gallery';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              [1, 'code'],
              ['appPrism', '']
            ],
            template: function (o, l) {
              1 & o &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Galer\xeda de Obelisco'),
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
                e._uU(13, 'OGallery'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-gallery'),
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
                e._uU(27, 'MediaGallery'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'galleryItems'),
                e.qZA(),
                e._uU(32, '.'),
                e.qZA(),
                e.TgZ(33, 'div', 8)(34, 'pre', 9),
                e._uU(35, '        '),
                e.TgZ(36, 'code', 10),
                e._uU(37),
                e.qZA(),
                e._uU(38, '\n      '),
                e.qZA(),
                e.TgZ(39, 'div', 5)(40, 'h5'),
                e._uU(41, 'Propiedades'),
                e.qZA(),
                e._UZ(42, 'o-table', 6),
                e.qZA()()()()),
                2 & o &&
                  (e.xp6(21),
                  e.Q6J('columns', l.columnsGallery)('dataSource', l.dataSourceGallery)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(16),
                  e.Oqu(l.exampleIterfaceImageItem),
                  e.xp6(5),
                  e.Q6J('columns', l.columnsGallery)('dataSource', l.dataSourceGalleryInterface)('isStriped', !0)(
                    'isBordered',
                    !0
                  ));
            },
            dependencies: [A.L, m.y]
          })),
          a
        );
      })();
      var d = s(6706);
      function g(a, c) {
        if ((1 & a && (e.TgZ(0, 'a', 5), e._UZ(1, 'img', 6), e.qZA()), 2 & a)) {
          const o = c.$implicit,
            l = e.oxw(2);
          e.Q6J('href', o.src, e.LSH),
            e.uIk('data-target', '#' + l.dataTarget),
            e.xp6(1),
            e.Q6J('src', o.src, e.LSH)('alt', o.title);
        }
      }
      function h(a, c) {
        if ((1 & a && (e.ynx(0), e.YNc(1, g, 2, 4, 'a', 4), e.BQk()), 2 & a)) {
          const o = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', o.galleryItems);
        }
      }
      function i(a, c) {
        if ((1 & a && (e.TgZ(0, 'div', 8), e._UZ(1, 'img', 6), e.qZA()), 2 & a)) {
          const o = c.$implicit;
          e.xp6(1), e.Q6J('src', o.src, e.LSH)('alt', o.title);
        }
      }
      function u(a, c) {
        if ((1 & a && e.YNc(0, i, 2, 2, 'div', 7), 2 & a)) {
          const o = e.oxw();
          e.Q6J('ngForOf', o.galleryItems);
        }
      }
      function n(a, c) {
        if (
          (1 & a &&
            (e.ynx(0),
            e.TgZ(1, 'div', 21),
            e._UZ(2, 'img', 22),
            e.TgZ(3, 'div', 23)(4, 'div', 24)(5, 'div', 25)(6, 'small'),
            e._uU(7),
            e.qZA()(),
            e.TgZ(8, 'div', 26)(9, 'small'),
            e._uU(10),
            e.qZA()()(),
            e.TgZ(11, 'h5', 27),
            e._uU(12),
            e.qZA(),
            e._UZ(13, 'p', 28),
            e.qZA()(),
            e.BQk()),
          2 & a)
        ) {
          const o = c.$implicit,
            l = c.index,
            q = e.oxw(2);
          e.xp6(1),
            e.ekj('active', 0 === l),
            e.xp6(1),
            e.Q6J('src', o.src, e.LSH)('alt', o.title),
            e.xp6(5),
            e.Oqu(o.author),
            e.xp6(3),
            e.AsE('Imagen ', l + 1, ' / ', q.galleryItems.length, ''),
            e.xp6(2),
            e.Oqu(o.title),
            e.xp6(1),
            e.Q6J('innerHTML', o.content, e.oJD);
        }
      }
      function r(a, c) {
        if (
          (1 & a &&
            (e.TgZ(0, 'div', 9)(1, 'div', 10)(2, 'div', 11)(3, 'a', 12),
            e._uU(4, 'Cerrar ventana'),
            e.qZA(),
            e.TgZ(5, 'div', 13)(6, 'div', 14),
            e.YNc(7, n, 14, 9, 'ng-container', 15),
            e.qZA(),
            e.TgZ(8, 'button', 16),
            e._UZ(9, 'span', 17),
            e.TgZ(10, 'span', 18),
            e._uU(11, 'Anterior'),
            e.qZA()(),
            e.TgZ(12, 'button', 19),
            e._UZ(13, 'span', 20),
            e.TgZ(14, 'span', 18),
            e._uU(15, 'Siguiente'),
            e.qZA()()()()()()),
          2 & a)
        ) {
          const o = e.oxw();
          e.Q6J('id', o.dataTarget)('ngClass', o.customClassesInteractive),
            e.xp6(5),
            e.Q6J('id', o.dataTarget + 'control'),
            e.xp6(2),
            e.Q6J('ngForOf', o.galleryItems),
            e.xp6(1),
            e.uIk('data-target', '#' + o.dataTarget + 'control'),
            e.xp6(4),
            e.uIk('data-target', '#' + o.dataTarget + 'control');
        }
      }
      const _ = function (a, c) {
        return [a, c];
      };
      let x = (() => {
        class a {
          constructor() {
            (this.galleryItems = []),
              (this.isInteractive = !1),
              (this.customClasses = ''),
              (this.customClassesInteractive = '');
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-gallery']],
            inputs: {
              galleryItems: 'galleryItems',
              isInteractive: 'isInteractive',
              dataTarget: 'dataTarget',
              customClasses: 'customClasses',
              customClassesInteractive: 'customClassesInteractive'
            },
            decls: 5,
            vars: 7,
            consts: [
              [1, 'gallery-grid', 3, 'ngClass'],
              [4, 'ngIf', 'ngIfElse'],
              ['noInteractive', ''],
              [
                'class',
                'modal modal-carousel',
                'data-backdrop',
                'static',
                'tabindex',
                '-1',
                'role',
                'dialog',
                3,
                'id',
                'ngClass',
                4,
                'ngIf'
              ],
              ['class', 'gallery-grid-item', 'data-toggle', 'modal', 3, 'href', 4, 'ngFor', 'ngForOf'],
              ['data-toggle', 'modal', 1, 'gallery-grid-item', 3, 'href'],
              ['oDefaultImage', '', 3, 'src', 'alt'],
              ['class', 'gallery-grid-item', 4, 'ngFor', 'ngForOf'],
              [1, 'gallery-grid-item'],
              [
                'data-backdrop',
                'static',
                'tabindex',
                '-1',
                'role',
                'dialog',
                1,
                'modal',
                'modal-carousel',
                3,
                'id',
                'ngClass'
              ],
              ['role', 'document', 1, 'modal-dialog', 'modal-lg'],
              [1, 'modal-content'],
              ['data-dismiss', 'modal', 1, 'modal-carousel-close'],
              ['data-ride', 'carousel', 'data-interval', 'false', 1, 'carousel', 3, 'id'],
              [1, 'carousel-inner'],
              [4, 'ngFor', 'ngForOf'],
              ['type', 'button', 'data-slide', 'prev', 1, 'carousel-control-prev'],
              ['aria-hidden', 'true', 1, 'carousel-control-prev-icon'],
              [1, 'sr-only'],
              ['type', 'button', 'data-slide', 'next', 1, 'carousel-control-next'],
              ['aria-hidden', 'true', 1, 'carousel-control-next-icon'],
              [1, 'carousel-item'],
              ['oDefaultImage', '', 1, 'd-block', 'w-100', 3, 'src', 'alt'],
              [1, 'carousel-caption'],
              [1, 'row', 'mb-4'],
              [1, 'col'],
              [1, 'col', 'text-right'],
              [1, 'h2'],
              [3, 'innerHTML']
            ],
            template: function (o, l) {
              if (
                (1 & o &&
                  (e.TgZ(0, 'div', 0),
                  e.YNc(1, h, 2, 1, 'ng-container', 1),
                  e.YNc(2, u, 1, 1, 'ng-template', null, 2, e.W1O),
                  e.qZA(),
                  e.YNc(4, r, 16, 6, 'div', 3)),
                2 & o)
              ) {
                const q = e.MAs(3);
                e.Q6J('ngClass', e.WLB(4, _, 'gallery-max-' + l.galleryItems.length, l.customClasses)),
                  e.xp6(1),
                  e.Q6J('ngIf', l.isInteractive)('ngIfElse', q),
                  e.xp6(3),
                  e.Q6J('ngIf', l.isInteractive);
              }
            },
            dependencies: [t.mk, t.sg, t.O5, d.O]
          })),
          a
        );
      })();
      var O = s(2171);
      const M = [
        { path: 'api', component: T },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.imagesListInteractive = p.fO),
                  (this.imagesList1 = p.sq),
                  (this.imagesList2 = p.pb),
                  (this.imagesList3 = p.fO),
                  (this.imagesList4 = p.o1),
                  (this.imagesList5 = p.Ih),
                  (this.imagesList6 = p.xc),
                  (this.imagesList7 = p.aN),
                  (this.exampleInteractiveHTML = p.uP),
                  (this.exampleInteractiveTS = p._h),
                  (this.exampleImagesListHTML = p.qr),
                  (this.exampleImagesList1TS = p.Ut),
                  (this.exampleImagesList2TS = p._i),
                  (this.exampleImagesList3TS = p.m$),
                  (this.exampleImagesList4TS = p.Vr),
                  (this.exampleImagesList5TS = p.QC),
                  (this.exampleImagesList6TS = p.__),
                  (this.exampleImagesList7TS = p.Bf);
              }
            }
            return (
              (a.ɵfac = function (o) {
                return new (o || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-gallery-examples']],
                decls: 161,
                vars: 33,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Interactiva', 3, 'isNavCode'],
                  ['component', '', 1, 'row', 'justify-content-center'],
                  [1, 'col-xl-6', 'col-lg-6', 'col-md-8'],
                  ['dataTarget', 'modalGallery', 3, 'galleryItems', 'isInteractive'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Grilla - cant. de imagenes: 1', 3, 'isNavCode'],
                  [3, 'galleryItems'],
                  ['title', 'Grilla - cant. de imagenes: 2', 3, 'isNavCode'],
                  ['component', '', 3, 'galleryItems'],
                  ['title', 'Grilla - cant. de imagenes: 3', 3, 'isNavCode'],
                  ['title', 'Grilla - cant. de imagenes: 4', 3, 'isNavCode'],
                  ['title', 'Grilla - cant. de imagenes: 5', 3, 'isNavCode'],
                  ['title', 'Grilla - cant. de imagenes: 6', 3, 'isNavCode'],
                  ['title', 'Grilla - cant. de imagenes: 7', 3, 'isNavCode']
                ],
                template: function (o, l) {
                  1 & o &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'div', 3),
                    e._UZ(4, 'o-gallery', 4),
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
                    e.qZA(),
                    e.TgZ(13, 'pre', 8),
                    e._uU(14, '      '),
                    e.TgZ(15, 'button', 6),
                    e._uU(16, 'Copiar'),
                    e.qZA(),
                    e._uU(17, '\n      '),
                    e.TgZ(18, 'code', 9),
                    e._uU(19),
                    e.qZA(),
                    e._uU(20, '\n    '),
                    e.qZA()(),
                    e.TgZ(21, 'app-viewer', 10)(22, 'div', 2)(23, 'div', 3),
                    e._UZ(24, 'o-gallery', 11),
                    e.qZA()(),
                    e.TgZ(25, 'pre', 5),
                    e._uU(26, '      '),
                    e.TgZ(27, 'button', 6),
                    e._uU(28, 'Copiar'),
                    e.qZA(),
                    e._uU(29, '\n      '),
                    e.TgZ(30, 'code', 7),
                    e._uU(31),
                    e.qZA(),
                    e._uU(32, '\n    '),
                    e.qZA(),
                    e.TgZ(33, 'pre', 8),
                    e._uU(34, '      '),
                    e.TgZ(35, 'button', 6),
                    e._uU(36, 'Copiar'),
                    e.qZA(),
                    e._uU(37, '\n      '),
                    e.TgZ(38, 'code', 9),
                    e._uU(39),
                    e.qZA(),
                    e._uU(40, '\n    '),
                    e.qZA()(),
                    e.TgZ(41, 'app-viewer', 12)(42, 'div', 2)(43, 'div', 3),
                    e._UZ(44, 'o-gallery', 13),
                    e.qZA()(),
                    e.TgZ(45, 'pre', 5),
                    e._uU(46, '      '),
                    e.TgZ(47, 'button', 6),
                    e._uU(48, 'Copiar'),
                    e.qZA(),
                    e._uU(49, '\n      '),
                    e.TgZ(50, 'code', 7),
                    e._uU(51),
                    e.qZA(),
                    e._uU(52, '\n    '),
                    e.qZA(),
                    e.TgZ(53, 'pre', 8),
                    e._uU(54, '      '),
                    e.TgZ(55, 'button', 6),
                    e._uU(56, 'Copiar'),
                    e.qZA(),
                    e._uU(57, '\n      '),
                    e.TgZ(58, 'code', 9),
                    e._uU(59),
                    e.qZA(),
                    e._uU(60, '\n    '),
                    e.qZA()(),
                    e.TgZ(61, 'app-viewer', 14)(62, 'div', 2)(63, 'div', 3),
                    e._UZ(64, 'o-gallery', 13),
                    e.qZA()(),
                    e.TgZ(65, 'pre', 5),
                    e._uU(66, '      '),
                    e.TgZ(67, 'button', 6),
                    e._uU(68, 'Copiar'),
                    e.qZA(),
                    e._uU(69, '\n      '),
                    e.TgZ(70, 'code', 7),
                    e._uU(71),
                    e.qZA(),
                    e._uU(72, '\n    '),
                    e.qZA(),
                    e.TgZ(73, 'pre', 8),
                    e._uU(74, '      '),
                    e.TgZ(75, 'button', 6),
                    e._uU(76, 'Copiar'),
                    e.qZA(),
                    e._uU(77, '\n      '),
                    e.TgZ(78, 'code', 9),
                    e._uU(79),
                    e.qZA(),
                    e._uU(80, '\n    '),
                    e.qZA()(),
                    e.TgZ(81, 'app-viewer', 15)(82, 'div', 2)(83, 'div', 3),
                    e._UZ(84, 'o-gallery', 13),
                    e.qZA()(),
                    e.TgZ(85, 'pre', 5),
                    e._uU(86, '      '),
                    e.TgZ(87, 'button', 6),
                    e._uU(88, 'Copiar'),
                    e.qZA(),
                    e._uU(89, '\n      '),
                    e.TgZ(90, 'code', 7),
                    e._uU(91),
                    e.qZA(),
                    e._uU(92, '\n    '),
                    e.qZA(),
                    e.TgZ(93, 'pre', 8),
                    e._uU(94, '      '),
                    e.TgZ(95, 'button', 6),
                    e._uU(96, 'Copiar'),
                    e.qZA(),
                    e._uU(97, '\n      '),
                    e.TgZ(98, 'code', 9),
                    e._uU(99),
                    e.qZA(),
                    e._uU(100, '\n    '),
                    e.qZA()(),
                    e.TgZ(101, 'app-viewer', 16)(102, 'div', 2)(103, 'div', 3),
                    e._UZ(104, 'o-gallery', 13),
                    e.qZA()(),
                    e.TgZ(105, 'pre', 5),
                    e._uU(106, '      '),
                    e.TgZ(107, 'button', 6),
                    e._uU(108, 'Copiar'),
                    e.qZA(),
                    e._uU(109, '\n      '),
                    e.TgZ(110, 'code', 7),
                    e._uU(111),
                    e.qZA(),
                    e._uU(112, '\n    '),
                    e.qZA(),
                    e.TgZ(113, 'pre', 8),
                    e._uU(114, '      '),
                    e.TgZ(115, 'button', 6),
                    e._uU(116, 'Copiar'),
                    e.qZA(),
                    e._uU(117, '\n      '),
                    e.TgZ(118, 'code', 9),
                    e._uU(119),
                    e.qZA(),
                    e._uU(120, '\n    '),
                    e.qZA()(),
                    e.TgZ(121, 'app-viewer', 17)(122, 'div', 2)(123, 'div', 3),
                    e._UZ(124, 'o-gallery', 13),
                    e.qZA()(),
                    e.TgZ(125, 'pre', 5),
                    e._uU(126, '      '),
                    e.TgZ(127, 'button', 6),
                    e._uU(128, 'Copiar'),
                    e.qZA(),
                    e._uU(129, '\n      '),
                    e.TgZ(130, 'code', 7),
                    e._uU(131),
                    e.qZA(),
                    e._uU(132, '\n    '),
                    e.qZA(),
                    e.TgZ(133, 'pre', 8),
                    e._uU(134, '      '),
                    e.TgZ(135, 'button', 6),
                    e._uU(136, 'Copiar'),
                    e.qZA(),
                    e._uU(137, '\n      '),
                    e.TgZ(138, 'code', 9),
                    e._uU(139),
                    e.qZA(),
                    e._uU(140, '\n    '),
                    e.qZA()(),
                    e.TgZ(141, 'app-viewer', 18)(142, 'div', 2)(143, 'div', 3),
                    e._UZ(144, 'o-gallery', 13),
                    e.qZA()(),
                    e.TgZ(145, 'pre', 5),
                    e._uU(146, '      '),
                    e.TgZ(147, 'button', 6),
                    e._uU(148, 'Copiar'),
                    e.qZA(),
                    e._uU(149, '\n      '),
                    e.TgZ(150, 'code', 7),
                    e._uU(151),
                    e.qZA(),
                    e._uU(152, '\n    '),
                    e.qZA(),
                    e.TgZ(153, 'pre', 8),
                    e._uU(154, '      '),
                    e.TgZ(155, 'button', 6),
                    e._uU(156, 'Copiar'),
                    e.qZA(),
                    e._uU(157, '\n      '),
                    e.TgZ(158, 'code', 9),
                    e._uU(159),
                    e.qZA(),
                    e._uU(160, '\n    '),
                    e.qZA()()()),
                    2 & o &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesListInteractive)('isInteractive', !0),
                      e.xp6(7),
                      e.Oqu(l.exampleInteractiveHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleInteractiveTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList1),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList1TS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList2),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList2TS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList3),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList3TS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList4),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList4TS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList5),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList5TS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList6),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList6TS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('galleryItems', l.imagesList7),
                      e.xp6(7),
                      e.Oqu(l.exampleImagesListHTML),
                      e.xp6(8),
                      e.Oqu(l.exampleImagesList7TS));
                },
                dependencies: [x, v.B, O.y, m.y],
                styles: ['.container[_ngcontent-%COMP%]{width:40vw;padding-bottom:1rem}']
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let w = (() => {
        class a {}
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [b.Bz.forChild(M), b.Bz] })),
          a
        );
      })();
      var L = s(9384);
      let S = (() => {
        class a {}
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, w, Z.Z, U.Z, C, v.B, L.T] })),
          a
        );
      })();
    }
  }
]);
