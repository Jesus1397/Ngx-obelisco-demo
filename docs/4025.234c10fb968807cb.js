'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [4025],
  {
    4883: (k, T, i) => {
      i.d(T, { L: () => x });
      var t = i(4893),
        o = i(2313),
        b = i(9808);
      const h = ['checkbox'];
      function e(c, m) {
        if (1 & c) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (f) {
              t.CHM(n);
              const v = t.oxw(2);
              return t.KtG(v.onHeaderCheckboxChange(f));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & c) {
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
      function O(c, m) {
        if ((1 & c && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & c)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function M(c, m) {
        if ((1 & c && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & c)) {
          const n = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function Z(c, m) {
        if (1 & c) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (f) {
              t.CHM(n);
              const v = t.oxw().$implicit,
                A = t.oxw(2);
              return t.KtG(A.onCheckboxChange(v, f));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & c) {
          const n = t.oxw().index,
            l = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', l.id, '-checkbox_', n, '')('name', '', l.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', l.id, '-checkbox_', n, '');
        }
      }
      function w(c, m) {
        if ((1 & c && t._UZ(0, 'div', 14), 2 & c)) {
          const n = t.oxw().$implicit,
            l = t.oxw().$implicit,
            f = t.oxw(2);
          t.Q6J('innerHTML', f.sanitizeHTML(l[n.key].data), t.oJD);
        }
      }
      function S(c, m) {
        if ((1 & c && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, w, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & c)) {
          const n = m.$implicit,
            l = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', l[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', l[n.key].data);
        }
      }
      function d(c, m) {
        if (
          (1 & c && (t.TgZ(0, 'tr'), t.YNc(1, Z, 5, 6, 'td', 9), t.YNc(2, S, 3, 2, 'ng-container', 4), t.qZA()), 2 & c)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const C = function (c, m) {
        return { 'table-borderless': c, 'table-striped': m };
      };
      function _(c, m) {
        if (
          (1 & c &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, O, 2, 2, 'th', 3),
            t.YNc(5, M, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, d, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & c)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, C, !n.isBordered, n.isStriped)),
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
      const g = function (c) {
        return { 'responsive-scroll': c };
      };
      let x = (() => {
        class c {
          constructor(n, l) {
            (this.renderer = n),
              (this.sanitizer = l),
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
            const l = n.target;
            if (l) {
              const f = l.checked;
              this.checkboxRef.toArray().forEach((v) => {
                v.nativeElement.checked = f;
              }),
                (this.dataSelected = f ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(n);
              else {
                const v = this.dataSelected.findIndex((A) => A === n);
                -1 !== v && this.dataSelected.splice(v, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (c.ɵfac = function (n) {
            return new (n || c)(t.Y36(t.Qsj), t.Y36(o.H7));
          }),
          (c.ɵcmp = t.Xpm({
            type: c,
            selectors: [['o-table']],
            viewQuery: function (n, l) {
              if ((1 & n && t.Gf(h, 5), 2 & n)) {
                let f;
                t.iGM((f = t.CRH())) && (l.checkboxRef = f);
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
            template: function (n, l) {
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, _, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(l.customClasses),
                  t.Q6J('ngClass', t.VKq(4, g, l.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', l.isValidateComponent));
            },
            dependencies: [b.mk, b.sg, b.O5]
          })),
          c
        );
      })();
    },
    2089: (k, T, i) => {
      i.d(T, { Z: () => b });
      var t = i(9808),
        o = i(4893);
      let b = (() => {
        class h {}
        return (
          (h.ɵfac = function (O) {
            return new (O || h)();
          }),
          (h.ɵmod = o.oAB({ type: h })),
          (h.ɵinj = o.cJS({ imports: [t.ez] })),
          h
        );
      })();
    },
    4948: (k, T, i) => {
      i.d(T, { B: () => S });
      var t = i(9808),
        o = i(4893);
      function b(d, C) {
        if (1 & d) {
          const _ = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(_);
              const x = o.oxw();
              return o.KtG((x.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(_);
              const x = o.oxw();
              return o.KtG((x.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & d) {
          const _ = o.oxw();
          o.xp6(3), o.ekj('active', _.isWindowHTML), o.xp6(3), o.ekj('active', !_.isWindowHTML);
        }
      }
      function h(d, C) {
        1 & d && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function e(d, C) {
        1 & d && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function O(d, C) {
        if ((1 & d && o.YNc(0, e, 2, 0, 'ng-container', 7), 2 & d)) {
          const _ = o.oxw(),
            g = o.MAs(16);
          o.Q6J('ngIf', _.isWindowHTML)('ngIfElse', g);
        }
      }
      function M(d, C) {
        1 & d && o.Hsn(0, 2);
      }
      const Z = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        w = ['[component]', '[component-html]', '[component-ts]'];
      let S = (() => {
        class d {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (d.ɵfac = function (_) {
            return new (_ || d)();
          }),
          (d.ɵcmp = o.Xpm({
            type: d,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [o.jDz],
            ngContentSelectors: w,
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
            template: function (_, g) {
              if (
                (1 & _ &&
                  (o.F$t(Z),
                  o.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  o._uU(3),
                  o.qZA(),
                  o.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  o.NdJ('click', function () {
                    return (g.isOpenCode = !g.isOpenCode);
                  }),
                  o.TgZ(8, 'span'),
                  o._uU(9),
                  o.qZA()()()()()(),
                  o.TgZ(10, 'div', 5),
                  o.YNc(11, b, 8, 4, 'nav', 6),
                  o.YNc(12, h, 2, 0, 'ng-container', 7),
                  o.YNc(13, O, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, M, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & _)
              ) {
                const x = o.MAs(14);
                o.xp6(3),
                  o.Oqu(g.title),
                  o.xp6(4),
                  o.ekj('active', g.isOpenCode),
                  o.xp6(2),
                  o.Oqu(g.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !g.isOpenCode)('ngIfElse', x);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          d
        );
      })();
    },
    4025: (k, T, i) => {
      i.r(T), i.d(T, { SearchModule: () => E });
      var t = i(9808),
        o = i(2526),
        b = i(5570),
        h = i(4719),
        e = i(4893),
        O = i(4883),
        M = i(6434);
      let Z = (() => {
        class a {
          constructor() {
            (this.dataSource = h.eY),
              (this.columns = b.L0),
              (this.searchItemInterface = h.Ey),
              (this.searchItemDataSource = h.Rk);
          }
        }
        return (
          (a.ɵfac = function (s) {
            return new (s || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-search-api']],
            decls: 43,
            vars: 9,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OSearchModule } from 'ngx-obelisco-example/search';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              [1, 'code'],
              ['appPrism', '']
            ],
            template: function (s, r) {
              1 & s &&
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
                e._uU(13, 'OSearch'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-search'),
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
                e._uU(27, 'SearchbarItems'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'searchbarItems'),
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
                2 & s &&
                  (e.xp6(21),
                  e.Q6J('columns', r.columns)('dataSource', r.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(r.searchItemInterface),
                  e.xp6(5),
                  e.Q6J('columns', r.columns)('dataSource', r.searchItemDataSource)('isStriped', !0)('isBordered', !0));
            },
            dependencies: [O.L, M.y]
          })),
          a
        );
      })();
      var w = i(4948),
        S = i(2171),
        d = i(2382);
      const C = ['inputElement'];
      function _(a, u) {
        if (1 & a) {
          const s = e.EpF();
          e.TgZ(0, 'div', 12),
            e.NdJ('click', function () {
              const y = e.CHM(s).$implicit,
                U = e.oxw(3);
              return e.KtG(U.goTo(y));
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & a) {
          const s = u.$implicit,
            r = u.index,
            p = e.oxw(3);
          e.ekj('selected-search-item', r === p.selectedIndex)(
            'first-search-item',
            r === p.selectedIndex && !p.isHover
          ),
            e.xp6(1),
            e.hij(' ', s.title, ' ');
        }
      }
      function g(a, u) {
        if ((1 & a && (e.ynx(0), e.YNc(1, _, 2, 5, 'div', 11), e.BQk()), 2 & a)) {
          const s = e.oxw(2);
          e.xp6(1), e.Q6J('ngForOf', s.filteredResults);
        }
      }
      function x(a, u) {
        1 & a && (e.TgZ(0, 'div', 13), e._uU(1, 'No se encontraron resultados\u{1f622}.'), e.qZA());
      }
      function c(a, u) {
        if (1 & a) {
          const s = e.EpF();
          e.TgZ(0, 'div', 1)(1, 'form', 2)(2, 'div', 3)(3, 'label', 4),
            e._uU(4, 'Buscador'),
            e.qZA(),
            e.TgZ(5, 'input', 5, 6),
            e.NdJ('ngModelChange', function (p) {
              e.CHM(s);
              const y = e.oxw();
              return e.KtG((y.term = p));
            })('input', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.search());
            })('keydown.enter', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.onEnter());
            })('keydown.ArrowUp', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.onUp());
            })('keydown.ArrowDown', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.onDown());
            }),
            e.qZA(),
            e.TgZ(7, 'button', 7),
            e.NdJ('click', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.resetSearch());
            }),
            e.qZA()()(),
            e.TgZ(8, 'div', 8),
            e.NdJ('mouseenter', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.onMouseEnter());
            })('mouseleave', function () {
              e.CHM(s);
              const p = e.oxw();
              return e.KtG(p.onMouseLeave());
            }),
            e.YNc(9, g, 2, 1, 'ng-container', 9),
            e.YNc(10, x, 2, 0, 'div', 10),
            e.qZA()();
        }
        if (2 & a) {
          const s = e.oxw();
          e.xp6(5),
            e.Q6J('placeholder', s.placeholder)('ngModel', s.term),
            e.xp6(4),
            e.Q6J('ngIf', s.filteredResults.length > 0),
            e.xp6(1),
            e.Q6J('ngIf', s.noResults);
        }
      }
      let m = (() => {
        class a {
          constructor(s, r, p) {
            (this.router = s),
              (this.elementRef = r),
              (this.renderer = p),
              (this.maxLengthResults = 10),
              (this.placeholder = 'Buscar...'),
              (this.term = ''),
              (this.isHover = !1),
              (this.noResults = !1),
              (this.filteredResults = []),
              (this.selectedIndex = 0);
          }
          adjustResultsWidth() {
            const s = this.inputElement.nativeElement.getBoundingClientRect().width,
              r = this.elementRef.nativeElement.querySelector('.search-results'),
              p = this.elementRef.nativeElement.querySelector('.no-results');
            r &&
              p &&
              s > 0 &&
              (this.renderer.setStyle(r, 'width', s + 'px'), this.renderer.setStyle(p, 'width', s + 'px'));
          }
          search() {
            '' === this.term
              ? this.resetSearch()
              : ((this.filteredResults = this.searchbarItems
                  .filter((s) => s.title.toLowerCase().includes(this.term.toLowerCase()))
                  .slice(0, this.maxLengthResults)),
                (this.noResults = 0 === this.filteredResults.length));
          }
          ngAfterViewInit() {
            this.adjustResultsWidth();
          }
          resetSearch() {
            (this.term = ''),
              (this.isHover = !1),
              (this.noResults = !1),
              (this.filteredResults = []),
              (this.selectedIndex = 0);
          }
          goTo(s) {
            this.router.navigate([s.route]), this.resetSearch();
          }
          onEnter() {
            this.filteredResults.length > 0 && this.goTo(this.filteredResults[this.selectedIndex]);
          }
          onUp() {
            this.selectedIndex > 0 && (this.selectedIndex--, (this.isHover = !1));
          }
          onDown() {
            this.selectedIndex < this.filteredResults.length && (this.selectedIndex++, (this.isHover = !1));
          }
          onMouseEnter() {
            this.isHover = !0;
          }
          onMouseLeave() {
            this.isHover = !1;
          }
        }
        return (
          (a.ɵfac = function (s) {
            return new (s || a)(e.Y36(o.F0), e.Y36(e.SBq), e.Y36(e.Qsj));
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-search']],
            viewQuery: function (s, r) {
              if ((1 & s && e.Gf(C, 5), 2 & s)) {
                let p;
                e.iGM((p = e.CRH())) && (r.inputElement = p.first);
              }
            },
            inputs: {
              searchbarItems: 'searchbarItems',
              maxLengthResults: 'maxLengthResults',
              placeholder: 'placeholder'
            },
            decls: 1,
            vars: 1,
            consts: [
              ['class', 'navbar-search', 4, 'ngIf'],
              [1, 'navbar-search'],
              [1, 'form-search'],
              [1, 'form-group'],
              ['for', 'search-input', 1, 'sr-only'],
              [
                'type',
                'search',
                'id',
                'name-input',
                'name',
                'name',
                'aria-label',
                'Ingrese su b\xfasqueda',
                1,
                'form-control',
                'input-search',
                3,
                'placeholder',
                'ngModel',
                'ngModelChange',
                'input',
                'keydown.enter',
                'keydown.ArrowUp',
                'keydown.ArrowDown'
              ],
              ['inputElement', ''],
              ['type', 'reset', 'aria-label', 'Borrar', 1, 'reset', 3, 'click'],
              [1, 'search-results', 3, 'mouseenter', 'mouseleave'],
              [4, 'ngIf'],
              ['class', 'no-results', 4, 'ngIf'],
              ['class', 'search-item', 3, 'selected-search-item', 'first-search-item', 'click', 4, 'ngFor', 'ngForOf'],
              [1, 'search-item', 3, 'click'],
              [1, 'no-results']
            ],
            template: function (s, r) {
              1 & s && e.YNc(0, c, 11, 4, 'div', 0), 2 & s && e.Q6J('ngIf', r.searchbarItems);
            },
            dependencies: [t.sg, t.O5, d._Y, d.Fj, d.JJ, d.JL, d.On, d.F],
            styles: [
              '.navbar-search[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:0px}.navbar-search[_ngcontent-%COMP%]   .form-search[_ngcontent-%COMP%]{width:100%}.navbar-search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{text-transform:capitalize}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{z-index:999;background-color:#f3f6f9;border-bottom-left-radius:8px;border-bottom-right-radius:8px;width:98%;margin-top:8px}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]{padding:.5rem 1rem}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .search-item[_ngcontent-%COMP%]:hover{cursor:pointer;color:#007bc7}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{padding:.5rem 1rem}.navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .first-search-item[_ngcontent-%COMP%], .navbar-search[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .selected-search-item[_ngcontent-%COMP%]{color:#007bc7}'
            ]
          })),
          a
        );
      })();
      const l = [
        { path: 'api', component: Z },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.searchExampleHtml = h.DH),
                  (this.searchExampleTs = h.xD),
                  (this.routes = [
                    { title: 'Inicio', route: '/' },
                    { title: 'Introducci\xf3n', route: '/get-started' },
                    { title: 'Componentes', route: '/components' },
                    { title: 'Buscador', route: '/components/search' }
                  ]);
              }
            }
            return (
              (a.ɵfac = function (s) {
                return new (s || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-search-examples']],
                decls: 20,
                vars: 4,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Simple', 'id', 'example-directive', 3, 'isNavCode'],
                  ['component', '', 1, 'search-container'],
                  [3, 'searchbarItems'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript']
                ],
                template: function (s, r) {
                  1 & s &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-search', 3),
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
                    e.qZA(),
                    e.TgZ(12, 'pre', 7),
                    e._uU(13, '      '),
                    e.TgZ(14, 'button', 5),
                    e._uU(15, 'Copiar'),
                    e.qZA(),
                    e._uU(16, '\n      '),
                    e.TgZ(17, 'code', 8),
                    e._uU(18),
                    e.qZA(),
                    e._uU(19, '\n    '),
                    e.qZA()()()),
                    2 & s &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('searchbarItems', r.routes),
                      e.xp6(7),
                      e.Oqu(r.searchExampleHtml),
                      e.xp6(8),
                      e.Oqu(r.searchExampleTs));
                },
                dependencies: [w.B, M.y, S.y, m],
                styles: ['.search-container[_ngcontent-%COMP%]{max-width:400px;width:100%}']
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let f = (() => {
        class a {}
        return (
          (a.ɵfac = function (s) {
            return new (s || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [o.Bz.forChild(l), o.Bz] })),
          a
        );
      })();
      var v = i(9384),
        A = i(7538),
        P = i(2089);
      let I = (() => {
          class a {}
          return (
            (a.ɵfac = function (s) {
              return new (s || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [t.ez, o.Bz, d.u5] })),
            a
          );
        })(),
        E = (() => {
          class a {}
          return (
            (a.ɵfac = function (s) {
              return new (s || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [t.ez, f, A.Z, P.Z, w.B, v.T, I] })),
            a
          );
        })();
    }
  }
]);
