'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2737],
  {
    4883: (U, b, r) => {
      r.d(b, { L: () => f });
      var t = r(4893),
        i = r(2313),
        C = r(9808);
      const d = ['checkbox'];
      function e(a, u) {
        if (1 & a) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const T = t.oxw(2);
              return t.KtG(T.onHeaderCheckboxChange(h));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & a) {
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
      function w(a, u) {
        if ((1 & a && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & a)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function S(a, u) {
        if ((1 & a && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & a)) {
          const n = u.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function v(a, u) {
        if (1 & a) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const T = t.oxw().$implicit,
                I = t.oxw(2);
              return t.KtG(I.onCheckboxChange(T, h));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & a) {
          const n = t.oxw().index,
            l = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', l.id, '-checkbox_', n, '')('name', '', l.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', l.id, '-checkbox_', n, '');
        }
      }
      function A(a, u) {
        if ((1 & a && t._UZ(0, 'div', 14), 2 & a)) {
          const n = t.oxw().$implicit,
            l = t.oxw().$implicit,
            h = t.oxw(2);
          t.Q6J('innerHTML', h.sanitizeHTML(l[n.key].data), t.oJD);
        }
      }
      function O(a, u) {
        if ((1 & a && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, A, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & a)) {
          const n = u.$implicit,
            l = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', l[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', l[n.key].data);
        }
      }
      function m(a, u) {
        if (
          (1 & a && (t.TgZ(0, 'tr'), t.YNc(1, v, 5, 6, 'td', 9), t.YNc(2, O, 3, 2, 'ng-container', 4), t.qZA()), 2 & a)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const x = function (a, u) {
        return { 'table-borderless': a, 'table-striped': u };
      };
      function _(a, u) {
        if (
          (1 & a &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, w, 2, 2, 'th', 3),
            t.YNc(5, S, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, m, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & a)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, x, !n.isBordered, n.isStriped)),
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
      const g = function (a) {
        return { 'responsive-scroll': a };
      };
      let f = (() => {
        class a {
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
              const h = l.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(n);
              else {
                const T = this.dataSelected.findIndex((I) => I === n);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (a.ɵfac = function (n) {
            return new (n || a)(t.Y36(t.Qsj), t.Y36(i.H7));
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [['o-table']],
            viewQuery: function (n, l) {
              if ((1 & n && t.Gf(d, 5), 2 & n)) {
                let h;
                t.iGM((h = t.CRH())) && (l.checkboxRef = h);
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
            dependencies: [C.mk, C.sg, C.O5]
          })),
          a
        );
      })();
    },
    2089: (U, b, r) => {
      r.d(b, { Z: () => C });
      var t = r(9808),
        i = r(4893);
      let C = (() => {
        class d {}
        return (
          (d.ɵfac = function (w) {
            return new (w || d)();
          }),
          (d.ɵmod = i.oAB({ type: d })),
          (d.ɵinj = i.cJS({ imports: [t.ez] })),
          d
        );
      })();
    },
    4948: (U, b, r) => {
      r.d(b, { B: () => O });
      var t = r(9808),
        i = r(4893);
      function C(m, x) {
        if (1 & m) {
          const _ = i.EpF();
          i.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            i.NdJ('click', function () {
              i.CHM(_);
              const f = i.oxw();
              return i.KtG((f.isWindowHTML = !0));
            }),
            i._uU(4, 'HTML'),
            i.qZA()(),
            i.TgZ(5, 'li', 12)(6, 'a', 14),
            i.NdJ('click', function () {
              i.CHM(_);
              const f = i.oxw();
              return i.KtG((f.isWindowHTML = !1));
            }),
            i._uU(7, 'TS'),
            i.qZA()()()();
        }
        if (2 & m) {
          const _ = i.oxw();
          i.xp6(3), i.ekj('active', _.isWindowHTML), i.xp6(3), i.ekj('active', !_.isWindowHTML);
        }
      }
      function d(m, x) {
        1 & m && (i.ynx(0), i.Hsn(1), i.BQk());
      }
      function e(m, x) {
        1 & m && (i.ynx(0), i.Hsn(1, 1), i.BQk());
      }
      function w(m, x) {
        if ((1 & m && i.YNc(0, e, 2, 0, 'ng-container', 7), 2 & m)) {
          const _ = i.oxw(),
            g = i.MAs(16);
          i.Q6J('ngIf', _.isWindowHTML)('ngIfElse', g);
        }
      }
      function S(m, x) {
        1 & m && i.Hsn(0, 2);
      }
      const v = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        A = ['[component]', '[component-html]', '[component-ts]'];
      let O = (() => {
        class m {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (m.ɵfac = function (_) {
            return new (_ || m)();
          }),
          (m.ɵcmp = i.Xpm({
            type: m,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [i.jDz],
            ngContentSelectors: A,
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
                  (i.F$t(v),
                  i.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  i._uU(3),
                  i.qZA(),
                  i.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  i.NdJ('click', function () {
                    return (g.isOpenCode = !g.isOpenCode);
                  }),
                  i.TgZ(8, 'span'),
                  i._uU(9),
                  i.qZA()()()()()(),
                  i.TgZ(10, 'div', 5),
                  i.YNc(11, C, 8, 4, 'nav', 6),
                  i.YNc(12, d, 2, 0, 'ng-container', 7),
                  i.YNc(13, w, 1, 2, 'ng-template', null, 8, i.W1O),
                  i.YNc(15, S, 1, 0, 'ng-template', null, 9, i.W1O),
                  i.qZA()()),
                2 & _)
              ) {
                const f = i.MAs(14);
                i.xp6(3),
                  i.Oqu(g.title),
                  i.xp6(4),
                  i.ekj('active', g.isOpenCode),
                  i.xp6(2),
                  i.Oqu(g.linkCode),
                  i.xp6(2),
                  i.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  i.xp6(1),
                  i.Q6J('ngIf', !g.isOpenCode)('ngIfElse', f);
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
    2737: (U, b, r) => {
      r.r(b), r.d(b, { DropdownSelectionModule: () => y });
      var t = r(9808),
        i = r(2526),
        C = r(5570),
        d = r(2069),
        e = r(4893),
        w = r(4883),
        S = r(6434);
      let v = (() => {
        class s {
          constructor() {
            (this.columns = C.L0),
              (this.dataSource = d.T1),
              (this.dataSourceOutput = d.wY),
              (this.dropdownSelectionInterface = d.GU),
              (this.dataSourceInterface = d.Ku),
              (this.sizes = C.zf);
          }
        }
        return (
          (s.ɵfac = function (o) {
            return new (o || s)();
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [['app-dropdown-selection-api']],
            decls: 58,
            vars: 14,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { ODropdownModule } from 'ngx-obelisco-example/dropdown';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              [1, 'section-type', 'mt-4'],
              ['appPrism', '']
            ],
            template: function (o, c) {
              1 & o &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Desplegables de Obelisco'),
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
                e._uU(13, 'ODropdownSelection'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-dropdown-selection'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6)(22, 'br'),
                e.TgZ(23, 'h5'),
                e._uU(24, 'M\xe9todos'),
                e.qZA(),
                e._UZ(25, 'o-table', 6),
                e.qZA()(),
                e.TgZ(26, 'h3'),
                e._uU(27, 'Tipos de datos'),
                e.qZA(),
                e._UZ(28, 'hr'),
                e.TgZ(29, 'div', 7)(30, 'h4'),
                e._uU(31, 'DropdownSelectionItem'),
                e.qZA(),
                e.TgZ(32, 'p'),
                e._uU(33, 'Permite establecer los valores de la propiedad '),
                e.TgZ(34, 'strong'),
                e._uU(35, 'items'),
                e.qZA(),
                e._uU(36, '.'),
                e.qZA(),
                e.TgZ(37, 'div', 8)(38, 'pre', 2),
                e._uU(39, '        '),
                e.TgZ(40, 'code', 9),
                e._uU(41),
                e.qZA(),
                e._uU(42, '\n      '),
                e.qZA(),
                e.TgZ(43, 'div', 5)(44, 'h5'),
                e._uU(45, 'Propiedades'),
                e.qZA(),
                e._UZ(46, 'o-table', 6),
                e.qZA()()(),
                e.TgZ(47, 'div', 10)(48, 'h4'),
                e._uU(49, 'Sizes'),
                e.qZA(),
                e.TgZ(50, 'p'),
                e._uU(51, 'Permite establecer el tama\xf1o del componente.'),
                e.qZA(),
                e.TgZ(52, 'div', 8)(53, 'pre', 2),
                e._uU(54, '          '),
                e.TgZ(55, 'code', 11),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n        '),
                e.qZA()()()()),
                2 & o &&
                  (e.xp6(21),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(4),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSourceOutput)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(c.dropdownSelectionInterface),
                  e.xp6(5),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSourceInterface)('isStriped', !0)('isBordered', !0),
                  e.xp6(10),
                  e.hij('\n            ', c.sizes, '\n          '));
            },
            dependencies: [w.L, S.y]
          })),
          s
        );
      })();
      var A = r(4948);
      function O(s, p) {
        if ((1 & s && e._UZ(0, 'i'), 2 & s)) {
          const o = e.oxw(2);
          e.Tol(o.iconLeft), e.ekj('btn-dropdown-icon', o.isAnimatedIconLeft);
        }
      }
      function m(s, p) {
        if ((1 & s && (e.TgZ(0, 'span', 7), e._uU(1), e.qZA()), 2 & s)) {
          const o = e.oxw(2);
          e.ekj('btn-dropdown-icon', o.isAnimatedIconLeft), e.xp6(1), e.Oqu(o.iconLeft);
        }
      }
      function x(s, p) {
        if ((1 & s && (e.ynx(0), e.YNc(1, O, 1, 5, 'i', 5), e.YNc(2, m, 2, 3, 'span', 6), e.BQk()), 2 & s)) {
          const o = e.oxw();
          e.xp6(1), e.Q6J('ngIf', o.iconLeft.includes('bx')), e.xp6(1), e.Q6J('ngIf', !o.iconLeft.includes('bx'));
        }
      }
      function _(s, p) {
        if ((1 & s && (e.TgZ(0, 'span', 8), e._uU(1), e.qZA()), 2 & s)) {
          const o = e.oxw();
          e.xp6(1), e.AsE('', o.title, ' ', o.selectedCheckboxCount ? '(' + o.selectedCheckboxCount + ')' : '', '');
        }
      }
      function g(s, p) {
        if ((1 & s && (e.TgZ(0, 'span', 8), e._uU(1), e.qZA()), 2 & s)) {
          const o = e.oxw();
          e.xp6(1), e.hij(' ', o.selectedItem.text ? o.selectedItem.text : o.title, '');
        }
      }
      function f(s, p) {
        if ((1 & s && e._UZ(0, 'i'), 2 & s)) {
          const o = e.oxw(2);
          e.Tol(o.iconRight), e.ekj('btn-dropdown-icon', o.isAnimatedIconRight);
        }
      }
      function a(s, p) {
        if ((1 & s && (e.TgZ(0, 'span', 7), e._uU(1), e.qZA()), 2 & s)) {
          const o = e.oxw(2);
          e.ekj('btn-dropdown-icon', o.isAnimatedIconRight), e.xp6(1), e.Oqu(o.iconRight);
        }
      }
      function u(s, p) {
        if ((1 & s && (e.ynx(0), e.YNc(1, f, 1, 5, 'i', 5), e.YNc(2, a, 2, 3, 'span', 6), e.BQk()), 2 & s)) {
          const o = e.oxw();
          e.xp6(1), e.Q6J('ngIf', o.iconRight.includes('bx')), e.xp6(1), e.Q6J('ngIf', !o.iconRight.includes('bx'));
        }
      }
      function n(s, p) {
        if (1 & s) {
          const o = e.EpF();
          e.TgZ(0, 'div', 10)(1, 'label', 11)(2, 'input', 12),
            e.NdJ('change', function () {
              const Z = e.CHM(o),
                M = Z.$implicit,
                k = Z.index,
                L = e.oxw(2);
              return e.KtG(L.onRadioSelectionChange(M, k));
            }),
            e.qZA(),
            e.TgZ(3, 'span', 13),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, 'span', 7),
            e._uU(6, 'done'),
            e.qZA()()();
        }
        if (2 & s) {
          const o = p.$implicit,
            c = p.index,
            Z = e.oxw(2);
          e.xp6(1),
            e.ekj('active', c === Z.activeIndex),
            e.Q6J('ngClass', o.customClasses),
            e.xp6(1),
            e.Q6J('id', o.id)('name', o.name)('value', o.value),
            e.xp6(2),
            e.Oqu(o.text);
        }
      }
      function l(s, p) {
        if ((1 & s && (e.ynx(0), e.YNc(1, n, 7, 7, 'div', 9), e.BQk()), 2 & s)) {
          const o = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', o.dropSelectItems);
        }
      }
      function h(s, p) {
        if (1 & s) {
          const o = e.EpF();
          e.TgZ(0, 'div', 15)(1, 'input', 16),
            e.NdJ('change', function () {
              const M = e.CHM(o).$implicit,
                k = e.oxw(2);
              return e.KtG(k.onCheckboxSelectionChange(M));
            }),
            e.qZA(),
            e.TgZ(2, 'label', 17),
            e._uU(3),
            e.qZA()();
        }
        if (2 & s) {
          const o = p.$implicit;
          e.ekj('disabled', o.isDisabled),
            e.Q6J('ngClass', o.customClasses),
            e.xp6(1),
            e.Q6J('id', o.id)('name', o.name)('value', o.value)('disabled', o.isDisabled),
            e.xp6(1),
            e.Q6J('for', o.id),
            e.xp6(1),
            e.hij(' ', o.text, '');
        }
      }
      function T(s, p) {
        if ((1 & s && (e.ynx(0), e.YNc(1, h, 4, 9, 'div', 14), e.BQk()), 2 & s)) {
          const o = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', o.dropSelectItems);
        }
      }
      let I = (() => {
        class s {
          constructor() {
            (this.dataTarget = 'dropdown'),
              (this.isSelectionMultiple = !1),
              (this.isAnimatedIconLeft = !1),
              (this.isAnimatedIconRight = !1),
              (this.dropSelectItems = []),
              (this.isBordered = !0),
              (this.customClasses = ''),
              (this.selectedItemChange = new e.vpe()),
              (this.selectedItems = []),
              (this.selectedItem = {});
          }
          onRadioSelectionChange(o, c) {
            (this.selectedItem = o),
              this.selectedItemChange.emit(o),
              (this.selectedIndex = c + 1),
              (this.activeIndex = c);
          }
          onCheckboxSelectionChange(o) {
            const c = this.selectedItems.findIndex((Z) => Z.id === o.id);
            -1 !== c ? this.selectedItems.splice(c, 1) : this.selectedItems.push(o),
              (this.selectedCheckboxCount = this.selectedItems.length),
              this.selectedItemChange.emit(this.selectedItems);
          }
        }
        return (
          (s.ɵfac = function (o) {
            return new (o || s)();
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [['o-dropdown-selection']],
            inputs: {
              dataTarget: 'dataTarget',
              title: 'title',
              isSelectionMultiple: 'isSelectionMultiple',
              iconLeft: 'iconLeft',
              iconRight: 'iconRight',
              isAnimatedIconLeft: 'isAnimatedIconLeft',
              isAnimatedIconRight: 'isAnimatedIconRight',
              dropSelectItems: 'dropSelectItems',
              isBordered: 'isBordered',
              size: 'size',
              customClasses: 'customClasses',
              ariaLabel: 'ariaLabel'
            },
            outputs: { selectedItemChange: 'selectedItemChange' },
            decls: 9,
            vars: 17,
            consts: [
              [1, 'dropdown', 'dropdown-form'],
              [
                'type',
                'button',
                'data-toggle',
                'collapse',
                'aria-expanded',
                'false',
                1,
                'btn',
                'btn-dropdown',
                3,
                'ngClass'
              ],
              [4, 'ngIf'],
              ['class', 'btn-dropdown-text', 4, 'ngIf'],
              [1, 'dropdown-menu', 'dropdown-body', 'collapse', 3, 'id'],
              [3, 'class', 'btn-dropdown-icon', 4, 'ngIf'],
              ['class', 'material-icons-round', 3, 'btn-dropdown-icon', 4, 'ngIf'],
              [1, 'material-icons-round'],
              [1, 'btn-dropdown-text'],
              ['class', 'custom-control custom-radio', 4, 'ngFor', 'ngForOf'],
              [1, 'custom-control', 'custom-radio'],
              [1, 'btn', 'btn-chip', 3, 'ngClass'],
              ['type', 'radio', 1, 'btn-check', 3, 'id', 'name', 'value', 'change'],
              [1, 'btn-chip-text'],
              ['class', 'custom-control custom-checkbox', 3, 'disabled', 'ngClass', 4, 'ngFor', 'ngForOf'],
              [1, 'custom-control', 'custom-checkbox', 3, 'ngClass'],
              ['type', 'checkbox', 1, 'custom-control-input', 3, 'id', 'name', 'value', 'disabled', 'change'],
              [1, 'custom-control-label', 3, 'for']
            ],
            template: function (o, c) {
              1 & o &&
                (e.TgZ(0, 'div', 0)(1, 'button', 1),
                e.YNc(2, x, 3, 2, 'ng-container', 2),
                e.YNc(3, _, 2, 2, 'span', 3),
                e.YNc(4, g, 2, 1, 'span', 3),
                e.YNc(5, u, 3, 2, 'ng-container', 2),
                e.qZA(),
                e.TgZ(6, 'div', 4),
                e.YNc(7, l, 2, 1, 'ng-container', 2),
                e.YNc(8, T, 2, 1, 'ng-container', 2),
                e.qZA()()),
                2 & o &&
                  (e.xp6(1),
                  e.ekj('btn-dropdown-border', c.isBordered)('btn-dropdown-sm', 'sm' == c.size)(
                    'btn-dropdown-lg',
                    'lg' == c.size
                  ),
                  e.Q6J('ngClass', c.customClasses),
                  e.uIk('data-target', '#' + c.dataTarget)('aria-controls', c.dataTarget)('aria-label', c.ariaLabel),
                  e.xp6(1),
                  e.Q6J('ngIf', c.iconLeft),
                  e.xp6(1),
                  e.Q6J('ngIf', c.isSelectionMultiple),
                  e.xp6(1),
                  e.Q6J('ngIf', !c.isSelectionMultiple),
                  e.xp6(1),
                  e.Q6J('ngIf', c.iconRight),
                  e.xp6(1),
                  e.Q6J('id', c.dataTarget),
                  e.xp6(1),
                  e.Q6J('ngIf', !c.isSelectionMultiple),
                  e.xp6(1),
                  e.Q6J('ngIf', c.isSelectionMultiple));
            },
            dependencies: [t.mk, t.sg, t.O5]
          })),
          s
        );
      })();
      const q = [
        { path: 'api', component: v },
        {
          path: 'examples',
          component: (() => {
            class s {
              constructor() {
                (this.dropdownItemsRadio = d.aO),
                  (this.dropdownItemsCheckbox = d.eG),
                  (this.exampleRadioHTML = d.Jl),
                  (this.exampleCheckboxHTML = d.uk),
                  (this.exampleSizesHTML = d.nm),
                  (this.exampleRadioTS = d.jP),
                  (this.exampleCheckboxTS = d.i1);
              }
            }
            return (
              (s.ɵfac = function (o) {
                return new (o || s)();
              }),
              (s.ɵcmp = e.Xpm({
                type: s,
                selectors: [['app-dropdown-selection-examples']],
                decls: 63,
                vars: 20,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Selecci\xf3n \xfanica', 3, 'isNavCode'],
                  ['component', '', 1, 'd-container'],
                  [
                    'dataTarget',
                    'drop1',
                    'title',
                    'Desplegable',
                    'iconLeft',
                    'person',
                    'iconRight',
                    'expand_more',
                    3,
                    'dropSelectItems',
                    'isAnimatedIconRight'
                  ],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Selecci\xf3n m\xfaltiple', 3, 'isNavCode'],
                  [
                    'dataTarget',
                    'drop2',
                    'title',
                    'Desplegable',
                    'iconLeft',
                    'person',
                    'iconRight',
                    'expand_more',
                    3,
                    'dropSelectItems',
                    'isAnimatedIconRight',
                    'isSelectionMultiple'
                  ],
                  ['title', 'Tama\xf1os', 3, 'isNavCode'],
                  [1, 'mb-5'],
                  [
                    'dataTarget',
                    'drop3',
                    'title',
                    'Desplegable',
                    'iconRight',
                    'expand_more',
                    'size',
                    'sm',
                    3,
                    'dropSelectItems',
                    'isAnimatedIconRight'
                  ],
                  [
                    'dataTarget',
                    'drop4',
                    'title',
                    'Desplegable',
                    'iconRight',
                    'expand_more',
                    3,
                    'dropSelectItems',
                    'isAnimatedIconRight'
                  ],
                  [
                    'dataTarget',
                    'drop5',
                    'title',
                    'Desplegable',
                    'iconRight',
                    'expand_more',
                    'size',
                    'lg',
                    3,
                    'dropSelectItems',
                    'isAnimatedIconRight'
                  ]
                ],
                template: function (o, c) {
                  1 & o &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-dropdown-selection', 3),
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
                    e.qZA()(),
                    e.TgZ(20, 'app-viewer', 9)(21, 'div', 2),
                    e._UZ(22, 'o-dropdown-selection', 10),
                    e.qZA(),
                    e.TgZ(23, 'pre', 4),
                    e._uU(24, '      '),
                    e.TgZ(25, 'button', 5),
                    e._uU(26, 'Copiar'),
                    e.qZA(),
                    e._uU(27, '\n      '),
                    e.TgZ(28, 'code', 6),
                    e._uU(29),
                    e.qZA(),
                    e._uU(30, '\n    '),
                    e.qZA(),
                    e.TgZ(31, 'pre', 7),
                    e._uU(32, '      '),
                    e.TgZ(33, 'button', 5),
                    e._uU(34, 'Copiar'),
                    e.qZA(),
                    e._uU(35, '\n      '),
                    e.TgZ(36, 'code', 8),
                    e._uU(37),
                    e.qZA(),
                    e._uU(38, '\n    '),
                    e.qZA()(),
                    e.TgZ(39, 'app-viewer', 11)(40, 'div', 2)(41, 'div', 12),
                    e._UZ(42, 'o-dropdown-selection', 13),
                    e.qZA(),
                    e.TgZ(43, 'div', 12),
                    e._UZ(44, 'o-dropdown-selection', 14),
                    e.qZA(),
                    e.TgZ(45, 'div', 12),
                    e._UZ(46, 'o-dropdown-selection', 15),
                    e.qZA()(),
                    e.TgZ(47, 'pre', 4),
                    e._uU(48, '      '),
                    e.TgZ(49, 'button', 5),
                    e._uU(50, 'Copiar'),
                    e.qZA(),
                    e._uU(51, '\n      '),
                    e.TgZ(52, 'code', 6),
                    e._uU(53),
                    e.qZA(),
                    e._uU(54, '\n    '),
                    e.qZA(),
                    e.TgZ(55, 'pre', 7),
                    e._uU(56, '      '),
                    e.TgZ(57, 'button', 5),
                    e._uU(58, 'Copiar'),
                    e.qZA(),
                    e._uU(59, '\n      '),
                    e.TgZ(60, 'code', 8),
                    e._uU(61),
                    e.qZA(),
                    e._uU(62, '\n    '),
                    e.qZA()()()),
                    2 & o &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('dropSelectItems', c.dropdownItemsRadio)('isAnimatedIconRight', !0),
                      e.xp6(7),
                      e.Oqu(c.exampleRadioHTML),
                      e.xp6(8),
                      e.Oqu(c.exampleRadioTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('dropSelectItems', c.dropdownItemsCheckbox)('isAnimatedIconRight', !0)(
                        'isSelectionMultiple',
                        !0
                      ),
                      e.xp6(7),
                      e.Oqu(c.exampleCheckboxHTML),
                      e.xp6(8),
                      e.Oqu(c.exampleCheckboxTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('dropSelectItems', c.dropdownItemsRadio)('isAnimatedIconRight', !0),
                      e.xp6(2),
                      e.Q6J('dropSelectItems', c.dropdownItemsRadio)('isAnimatedIconRight', !0),
                      e.xp6(2),
                      e.Q6J('dropSelectItems', c.dropdownItemsRadio)('isAnimatedIconRight', !0),
                      e.xp6(7),
                      e.Oqu(c.exampleSizesHTML),
                      e.xp6(8),
                      e.Oqu(c.exampleRadioTS));
                },
                dependencies: [A.B, I, S.y],
                styles: ['.d-container[_ngcontent-%COMP%]{padding-bottom:140px}']
              })),
              s
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let D = (() => {
        class s {}
        return (
          (s.ɵfac = function (o) {
            return new (o || s)();
          }),
          (s.ɵmod = e.oAB({ type: s })),
          (s.ɵinj = e.cJS({ imports: [i.Bz.forChild(q), i.Bz] })),
          s
        );
      })();
      var J = r(9384),
        Q = r(25),
        R = r(2089);
      let y = (() => {
        class s {}
        return (
          (s.ɵfac = function (o) {
            return new (o || s)();
          }),
          (s.ɵmod = e.oAB({ type: s })),
          (s.ɵinj = e.cJS({ imports: [t.ez, D, J.T, A.B, Q.a, R.Z] })),
          s
        );
      })();
    }
  }
]);
