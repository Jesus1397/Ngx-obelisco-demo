'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [7024],
  {
    4883: (w, Z, p) => {
      p.d(Z, { L: () => h });
      var o = p(4893),
        c = p(2313),
        r = p(9808);
      const x = ['checkbox'];
      function e(s, d) {
        if (1 & s) {
          const i = o.EpF();
          o.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            o.NdJ('change', function (f) {
              o.CHM(i);
              const T = o.oxw(2);
              return o.KtG(T.onHeaderCheckboxChange(f));
            }),
            o.qZA(),
            o.TgZ(3, 'label', 8),
            o._uU(4),
            o.qZA()()();
        }
        if (2 & s) {
          const i = o.oxw(2);
          o.Q6J('ngClass', i.checkbox.customClassesTh),
            o.xp6(2),
            o.MGl('id', '', i.id, '-selectAllCheckbox')('name', '', i.id, '-selectAllCheckbox'),
            o.xp6(1),
            o.MGl('for', '', i.id, '-selectAllCheckbox'),
            o.Q6J('ngClass', i.checkbox.customClassesLabel),
            o.xp6(1),
            o.Oqu(i.checkbox.title);
        }
      }
      function v(s, d) {
        if ((1 & s && (o.TgZ(0, 'th', 5), o._uU(1), o.qZA()), 2 & s)) {
          const i = o.oxw(2);
          o.Q6J('ngClass', i.checkbox.customClassesTh), o.xp6(1), o.hij(' ', i.checkbox.title, ' ');
        }
      }
      function b(s, d) {
        if ((1 & s && (o.ynx(0), o.TgZ(1, 'th', 5), o._uU(2), o.qZA(), o.BQk()), 2 & s)) {
          const i = d.$implicit;
          o.xp6(1), o.Q6J('ngClass', i.customClasses), o.xp6(1), o.Oqu(i.value);
        }
      }
      function A(s, d) {
        if (1 & s) {
          const i = o.EpF();
          o.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            o.NdJ('change', function (f) {
              o.CHM(i);
              const T = o.oxw().$implicit,
                q = o.oxw(2);
              return o.KtG(q.onCheckboxChange(T, f));
            }),
            o.qZA(),
            o._UZ(4, 'label', 11),
            o.qZA()();
        }
        if (2 & s) {
          const i = o.oxw().index,
            _ = o.oxw(2);
          o.xp6(2),
            o.hYB('id', '', _.id, '-checkbox_', i, '')('name', '', _.id, '-checkbox_', i, ''),
            o.xp6(2),
            o.hYB('for', '', _.id, '-checkbox_', i, '');
        }
      }
      function I(s, d) {
        if ((1 & s && o._UZ(0, 'div', 14), 2 & s)) {
          const i = o.oxw().$implicit,
            _ = o.oxw().$implicit,
            f = o.oxw(2);
          o.Q6J('innerHTML', f.sanitizeHTML(_[i.key].data), o.oJD);
        }
      }
      function U(s, d) {
        if ((1 & s && (o.ynx(0), o.TgZ(1, 'td', 12), o.YNc(2, I, 1, 1, 'div', 13), o.qZA(), o.BQk()), 2 & s)) {
          const i = d.$implicit,
            _ = o.oxw().$implicit;
          o.xp6(1), o.Q6J('ngClass', _[i.key].customClasses), o.xp6(1), o.Q6J('ngIf', _[i.key].data);
        }
      }
      function u(s, d) {
        if (
          (1 & s && (o.TgZ(0, 'tr'), o.YNc(1, A, 5, 6, 'td', 9), o.YNc(2, U, 3, 2, 'ng-container', 4), o.qZA()), 2 & s)
        ) {
          const i = o.oxw(2);
          o.xp6(1), o.Q6J('ngIf', i.checkbox), o.xp6(1), o.Q6J('ngForOf', i.columns);
        }
      }
      const C = function (s, d) {
        return { 'table-borderless': s, 'table-striped': d };
      };
      function m(s, d) {
        if (
          (1 & s &&
            (o.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            o.YNc(3, e, 5, 6, 'th', 3),
            o.YNc(4, v, 2, 2, 'th', 3),
            o.YNc(5, b, 3, 2, 'ng-container', 4),
            o.qZA()(),
            o.TgZ(6, 'tbody'),
            o.YNc(7, u, 3, 2, 'tr', 4),
            o.qZA()()),
          2 & s)
        ) {
          const i = o.oxw();
          o.Q6J('ngClass', o.WLB(5, C, !i.isBordered, i.isStriped)),
            o.xp6(3),
            o.Q6J('ngIf', 1 == (null == i.checkbox ? null : i.checkbox.isAllSelectable)),
            o.xp6(1),
            o.Q6J('ngIf', 0 == (null == i.checkbox ? null : i.checkbox.isAllSelectable)),
            o.xp6(1),
            o.Q6J('ngForOf', i.columns),
            o.xp6(2),
            o.Q6J('ngForOf', i.dataSource);
        }
      }
      const g = function (s) {
        return { 'responsive-scroll': s };
      };
      let h = (() => {
        class s {
          constructor(i, _) {
            (this.renderer = i),
              (this.sanitizer = _),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new o.vpe()),
              (this.inputCheckArr = []),
              (this.dataSelected = []);
          }
          ngOnInit() {
            this.componentValidations();
          }
          ngAfterViewInit() {
            this.checkboxRef.map((i) => {
              this.inputCheckArr.push(i.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((i) => {
              if ('' === i.key || '' === i.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((i) => (i.value = i.value.trim())),
              (this.columns = this.columns.map(
                (i) => ((i.value = i.value.charAt(0).toUpperCase() + i.value.slice(1).toLowerCase()), i)
              )),
              this.columns.map((i) => {
                if (
                  i.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  i.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), i;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(i) {
            return this.sanitizer.bypassSecurityTrustHtml(i);
          }
          onHeaderCheckboxChange(i) {
            const _ = i.target;
            if (_) {
              const f = _.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = f;
              }),
                (this.dataSelected = f ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(i, _) {
            if (_ && _.target && 'boolean' == typeof _.target.checked) {
              if (_.target.checked) this.dataSelected.push(i);
              else {
                const T = this.dataSelected.findIndex((q) => q === i);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (i) {
            return new (i || s)(o.Y36(o.Qsj), o.Y36(c.H7));
          }),
          (s.ɵcmp = o.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (i, _) {
              if ((1 & i && o.Gf(x, 5), 2 & i)) {
                let f;
                o.iGM((f = o.CRH())) && (_.checkboxRef = f);
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
            template: function (i, _) {
              1 & i && (o.TgZ(0, 'div', 0), o.YNc(1, m, 8, 8, 'table', 1), o.qZA()),
                2 & i &&
                  (o.Tol(_.customClasses),
                  o.Q6J('ngClass', o.VKq(4, g, _.isScrollable)),
                  o.xp6(1),
                  o.Q6J('ngIf', _.isValidateComponent));
            },
            dependencies: [r.mk, r.sg, r.O5]
          })),
          s
        );
      })();
    },
    2089: (w, Z, p) => {
      p.d(Z, { Z: () => r });
      var o = p(9808),
        c = p(4893);
      let r = (() => {
        class x {}
        return (
          (x.ɵfac = function (v) {
            return new (v || x)();
          }),
          (x.ɵmod = c.oAB({ type: x })),
          (x.ɵinj = c.cJS({ imports: [o.ez] })),
          x
        );
      })();
    },
    4948: (w, Z, p) => {
      p.d(Z, { B: () => U });
      var o = p(9808),
        c = p(4893);
      function r(u, C) {
        if (1 & u) {
          const m = c.EpF();
          c.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            c.NdJ('click', function () {
              c.CHM(m);
              const h = c.oxw();
              return c.KtG((h.isWindowHTML = !0));
            }),
            c._uU(4, 'HTML'),
            c.qZA()(),
            c.TgZ(5, 'li', 12)(6, 'a', 14),
            c.NdJ('click', function () {
              c.CHM(m);
              const h = c.oxw();
              return c.KtG((h.isWindowHTML = !1));
            }),
            c._uU(7, 'TS'),
            c.qZA()()()();
        }
        if (2 & u) {
          const m = c.oxw();
          c.xp6(3), c.ekj('active', m.isWindowHTML), c.xp6(3), c.ekj('active', !m.isWindowHTML);
        }
      }
      function x(u, C) {
        1 & u && (c.ynx(0), c.Hsn(1), c.BQk());
      }
      function e(u, C) {
        1 & u && (c.ynx(0), c.Hsn(1, 1), c.BQk());
      }
      function v(u, C) {
        if ((1 & u && c.YNc(0, e, 2, 0, 'ng-container', 7), 2 & u)) {
          const m = c.oxw(),
            g = c.MAs(16);
          c.Q6J('ngIf', m.isWindowHTML)('ngIfElse', g);
        }
      }
      function b(u, C) {
        1 & u && c.Hsn(0, 2);
      }
      const A = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        I = ['[component]', '[component-html]', '[component-ts]'];
      let U = (() => {
        class u {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (u.ɵfac = function (m) {
            return new (m || u)();
          }),
          (u.ɵcmp = c.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [c.jDz],
            ngContentSelectors: I,
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
            template: function (m, g) {
              if (
                (1 & m &&
                  (c.F$t(A),
                  c.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  c._uU(3),
                  c.qZA(),
                  c.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  c.NdJ('click', function () {
                    return (g.isOpenCode = !g.isOpenCode);
                  }),
                  c.TgZ(8, 'span'),
                  c._uU(9),
                  c.qZA()()()()()(),
                  c.TgZ(10, 'div', 5),
                  c.YNc(11, r, 8, 4, 'nav', 6),
                  c.YNc(12, x, 2, 0, 'ng-container', 7),
                  c.YNc(13, v, 1, 2, 'ng-template', null, 8, c.W1O),
                  c.YNc(15, b, 1, 0, 'ng-template', null, 9, c.W1O),
                  c.qZA()()),
                2 & m)
              ) {
                const h = c.MAs(14);
                c.xp6(3),
                  c.Oqu(g.title),
                  c.xp6(4),
                  c.ekj('active', g.isOpenCode),
                  c.xp6(2),
                  c.Oqu(g.linkCode),
                  c.xp6(2),
                  c.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  c.xp6(1),
                  c.Q6J('ngIf', !g.isOpenCode)('ngIfElse', h);
              }
            },
            dependencies: [o.ez, o.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          u
        );
      })();
    },
    7024: (w, Z, p) => {
      p.r(Z), p.d(Z, { CollapseModule: () => ve });
      var o = p(9808),
        c = p(2526),
        r = p(2519),
        x = p(5570),
        e = p(4893),
        v = p(4883),
        b = p(6434);
      let A = (() => {
        class t {
          constructor() {
            (this.columns = x.L0),
              (this.dataSource = r.hl),
              (this.dataSourceOutput = r.LV),
              (this.interfaceCollapseItems = r._f),
              (this.interfaceCollapseInputs = r.Kl),
              (this.dataSourceCollapse = r.Nm),
              (this.dataSourceCollapseItems = r.TO),
              (this.dataSourceCollapseInputs = r.ve);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-collapse-api']],
            decls: 67,
            vars: 18,
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
                "import { OCollapseModule } from 'ngx-obelisco-example/collapse';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript']
            ],
            template: function (n, a) {
              1 & n &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Colapsable de Obelisco'),
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
                e._uU(13, 'OCollapse'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-collapse'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6),
                e.qZA(),
                e.TgZ(22, 'div', 5)(23, 'h5'),
                e._uU(24, 'M\xe9todos'),
                e.qZA(),
                e._UZ(25, 'o-table', 6),
                e.qZA()(),
                e.TgZ(26, 'h3'),
                e._uU(27, 'Tipos de datos'),
                e.qZA(),
                e._UZ(28, 'hr'),
                e.TgZ(29, 'div', 7)(30, 'h4'),
                e._uU(31, 'CollapseItems'),
                e.qZA(),
                e.TgZ(32, 'p'),
                e._uU(33, 'Permite establecer los valores de la propiedad '),
                e.TgZ(34, 'strong'),
                e._uU(35, 'collapseItems'),
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
                e._UZ(47, 'br')(48, 'br'),
                e.TgZ(49, 'div', 7)(50, 'h4'),
                e._uU(51, 'CollapseInputs'),
                e.qZA(),
                e.TgZ(52, 'p'),
                e._uU(53, 'Permite establecer los valores de la propiedad '),
                e.TgZ(54, 'strong'),
                e._uU(55, 'collapseInputs'),
                e.qZA(),
                e._uU(56, '.'),
                e.qZA(),
                e.TgZ(57, 'div', 8)(58, 'pre', 2),
                e._uU(59, '        '),
                e.TgZ(60, 'code', 9),
                e._uU(61),
                e.qZA(),
                e._uU(62, '\n      '),
                e.qZA(),
                e.TgZ(63, 'div', 5)(64, 'h5'),
                e._uU(65, 'Propiedades'),
                e.qZA(),
                e._UZ(66, 'o-table', 6),
                e.qZA()()()()),
                2 & n &&
                  (e.xp6(21),
                  e.Q6J('columns', a.columns)('dataSource', a.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(4),
                  e.Q6J('columns', a.columns)('dataSource', a.dataSourceOutput)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(a.interfaceCollapseItems),
                  e.xp6(5),
                  e.Q6J('columns', a.columns)('dataSource', a.dataSourceCollapseItems)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(15),
                  e.Oqu(a.interfaceCollapseInputs),
                  e.xp6(5),
                  e.Q6J('columns', a.columns)('dataSource', a.dataSourceCollapseInputs)('isStriped', !0)(
                    'isBordered',
                    !0
                  ));
            },
            dependencies: [v.L, b.y]
          })),
          t
        );
      })();
      var I = p(1998);
      function U(t, l) {
        if ((1 & t && e._UZ(0, 'i', 15), 2 & t)) {
          const n = e.oxw(3);
          e.Q6J('ngClass', n.icon);
        }
      }
      function u(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 16), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Oqu(n.icon);
        }
      }
      function C(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 17), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Oqu(n.label);
        }
      }
      function m(t, l) {
        if ((1 & t && (e.ynx(0), e._uU(1), e.BQk()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.hij(' ', n.title, ' ');
        }
      }
      function g(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 19), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(4);
          e.xp6(1), e.Oqu(n.title);
        }
      }
      function h(t, l) {
        if ((1 & t && e.YNc(0, g, 2, 1, 'span', 18), 2 & t)) {
          const n = e.oxw(3);
          e.Q6J('ngIf', n.title);
        }
      }
      function s(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 20), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Oqu(n.subtitle);
        }
      }
      function d(t, l) {
        if ((1 & t && e._UZ(0, 'p', 24), 2 & t)) {
          const n = e.oxw(4);
          e.Q6J('innerHTML', n.content, e.oJD);
        }
      }
      function i(t, l) {
        1 & t && e._UZ(0, 'p', 24), 2 & t && e.Q6J('innerHTML', l.$implicit, e.oJD);
      }
      function _(t, l) {
        if ((1 & t && e.YNc(0, i, 1, 1, 'p', 25), 2 & t)) {
          const n = e.oxw(4);
          e.Q6J('ngForOf', n.textArray());
        }
      }
      function f(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 21),
            e.YNc(1, d, 1, 1, 'p', 22),
            e.YNc(2, _, 1, 1, 'ng-template', null, 23, e.W1O),
            e.qZA()),
          2 & t)
        ) {
          const n = e.MAs(3),
            a = e.oxw(3);
          e.xp6(1), e.Q6J('ngIf', !a.content)('ngIfElse', n);
        }
      }
      function T(t, l) {
        1 & t && e._UZ(0, 'hr');
      }
      function q(t, l) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'small', 27),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'span'),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, 'small'),
            e._uU(6),
            e.qZA(),
            e.YNc(7, T, 1, 0, 'hr', 4),
            e.BQk()),
          2 & t)
        ) {
          const n = l.$implicit,
            a = l.last;
          e.xp6(2), e.Oqu(n.label), e.xp6(2), e.Oqu(n.title), e.xp6(2), e.Oqu(n.subtitle), e.xp6(1), e.Q6J('ngIf', !a);
        }
      }
      function N(t, l) {
        if ((1 & t && (e.TgZ(0, 'div', 21), e.YNc(1, q, 8, 4, 'ng-container', 26), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Q6J('ngForOf', n.itemInfoList);
        }
      }
      function y(t, l) {
        if ((1 & t && e._UZ(0, 'i', 15), 2 & t)) {
          const n = e.oxw().$implicit;
          e.Q6J('ngClass', n.icon);
        }
      }
      function S(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 16), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw().$implicit;
          e.xp6(1), e.Oqu(n.icon);
        }
      }
      function P(t, l) {
        1 & t && e._UZ(0, 'hr');
      }
      function Y(t, l) {
        if (1 & t) {
          const n = e.EpF();
          e.ynx(0),
            e.TgZ(1, 'label', 28),
            e.YNc(2, y, 1, 1, 'i', 7),
            e.YNc(3, S, 2, 1, 'span', 8),
            e.TgZ(4, 'div', 29)(5, 'span'),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, 'small'),
            e._uU(8),
            e.qZA()(),
            e.TgZ(9, 'input', 30),
            e.NdJ('click', function () {
              const O = e.CHM(n).$implicit,
                J = e.oxw(4);
              return e.KtG(J.toggleValue(O));
            }),
            e.qZA()(),
            e.YNc(10, P, 1, 0, 'hr', 4),
            e.BQk();
        }
        if (2 & t) {
          const n = l.$implicit,
            a = l.last;
          e.xp6(1),
            e.Q6J('for', n.id),
            e.xp6(1),
            e.Q6J('ngIf', n.icon && n.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', n.icon && !n.icon.includes('bx')),
            e.xp6(3),
            e.Oqu(n.title),
            e.xp6(2),
            e.Oqu(n.subtitle),
            e.xp6(1),
            e.Q6J('name', n.name)('id', n.id)('checked', n.value),
            e.xp6(1),
            e.Q6J('ngIf', !a);
        }
      }
      function L(t, l) {
        if ((1 & t && (e.TgZ(0, 'form', 21), e.YNc(1, Y, 11, 9, 'ng-container', 26), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Q6J('ngForOf', n.itemInputList);
        }
      }
      function H(t, l) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'button', 6),
            e.YNc(2, U, 1, 1, 'i', 7),
            e.YNc(3, u, 2, 1, 'span', 8),
            e.YNc(4, C, 2, 1, 'span', 9),
            e.YNc(5, m, 2, 1, 'ng-container', 10),
            e.YNc(6, h, 1, 1, 'ng-template', null, 11, e.W1O),
            e.YNc(8, s, 2, 1, 'span', 12),
            e.qZA(),
            e.TgZ(9, 'div', 13),
            e.YNc(10, f, 4, 2, 'div', 14),
            e.YNc(11, N, 2, 1, 'div', 14),
            e.YNc(12, L, 2, 1, 'form', 14),
            e.qZA(),
            e.BQk()),
          2 & t)
        ) {
          const n = e.MAs(7),
            a = e.oxw(2);
          e.xp6(1),
            e.Q6J('ngClass', a.customClassesHeader),
            e.uIk('data-target', '#' + a.identifier),
            e.xp6(1),
            e.Q6J('ngIf', a.icon && a.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', a.icon && !a.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', a.label),
            e.xp6(1),
            e.Q6J('ngIf', a.isTitleAlone)('ngIfElse', n),
            e.xp6(3),
            e.Q6J('ngIf', a.subtitle),
            e.xp6(1),
            e.Q6J('id', a.identifier),
            e.xp6(1),
            e.Q6J('ngIf', a.content),
            e.xp6(1),
            e.Q6J('ngIf', a.itemInfoList.length > 0),
            e.xp6(1),
            e.Q6J('ngIf', a.itemInputList.length > 0);
        }
      }
      function F(t, l) {
        if ((1 & t && e.GkF(0, 31), 2 & t)) {
          const n = e.oxw(2);
          e.Q6J('ngTemplateOutlet', n.oCustomContent.template);
        }
      }
      function B(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 2)(1, 'div', 3),
            e.YNc(2, H, 13, 12, 'ng-container', 4),
            e.YNc(3, F, 1, 1, 'ng-container', 5),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.ekj('accordion-white', n.isWhite),
            e.xp6(1),
            e.Q6J('ngClass', n.customClassesContent),
            e.xp6(1),
            e.Q6J('ngIf', !n.oCustomContent),
            e.xp6(1),
            e.Q6J('ngIf', n.oCustomContent);
        }
      }
      function D(t, l) {
        if ((1 & t && e._UZ(0, 'i', 15), 2 & t)) {
          const n = e.oxw(3);
          e.Q6J('ngClass', n.icon);
        }
      }
      function W(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 16), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Oqu(n.icon);
        }
      }
      function V(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 17), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Oqu(n.label);
        }
      }
      function $(t, l) {
        if ((1 & t && (e.ynx(0), e._uU(1), e.BQk()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.hij(' ', n.title, ' ');
        }
      }
      function j(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 19), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(4);
          e.xp6(1), e.Oqu(n.title);
        }
      }
      function R(t, l) {
        if ((1 & t && e.YNc(0, j, 2, 1, 'span', 18), 2 & t)) {
          const n = e.oxw(3);
          e.Q6J('ngIf', n.title);
        }
      }
      function z(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 20), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Oqu(n.subtitle);
        }
      }
      function K(t, l) {
        if ((1 & t && e._UZ(0, 'p', 24), 2 & t)) {
          const n = e.oxw(4);
          e.Q6J('innerHTML', n.content, e.oJD);
        }
      }
      function G(t, l) {
        1 & t && e._UZ(0, 'p', 24), 2 & t && e.Q6J('innerHTML', l.$implicit, e.oJD);
      }
      function X(t, l) {
        if ((1 & t && e.YNc(0, G, 1, 1, 'p', 25), 2 & t)) {
          const n = e.oxw(4);
          e.Q6J('ngForOf', n.textArray());
        }
      }
      function ee(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 21),
            e.YNc(1, K, 1, 1, 'p', 22),
            e.YNc(2, X, 1, 1, 'ng-template', null, 23, e.W1O),
            e.qZA()),
          2 & t)
        ) {
          const n = e.MAs(3),
            a = e.oxw(3);
          e.xp6(1), e.Q6J('ngIf', !a.content)('ngIfElse', n);
        }
      }
      function te(t, l) {
        1 & t && e._UZ(0, 'hr');
      }
      function ne(t, l) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'small', 27),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'span'),
            e._uU(4),
            e.qZA(),
            e.TgZ(5, 'small'),
            e._uU(6),
            e.qZA(),
            e.YNc(7, te, 1, 0, 'hr', 4),
            e.BQk()),
          2 & t)
        ) {
          const n = l.$implicit,
            a = l.last;
          e.xp6(2), e.Oqu(n.label), e.xp6(2), e.Oqu(n.title), e.xp6(2), e.Oqu(n.subtitle), e.xp6(1), e.Q6J('ngIf', !a);
        }
      }
      function oe(t, l) {
        if ((1 & t && (e.TgZ(0, 'div', 21), e.YNc(1, ne, 8, 4, 'ng-container', 26), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Q6J('ngForOf', n.itemInfoList);
        }
      }
      function ie(t, l) {
        if ((1 & t && e._UZ(0, 'i', 15), 2 & t)) {
          const n = e.oxw().$implicit;
          e.Q6J('ngClass', n.icon);
        }
      }
      function ae(t, l) {
        if ((1 & t && (e.TgZ(0, 'span', 16), e._uU(1), e.qZA()), 2 & t)) {
          const n = e.oxw().$implicit;
          e.xp6(1), e.Oqu(n.icon);
        }
      }
      function le(t, l) {
        1 & t && e._UZ(0, 'hr');
      }
      function ce(t, l) {
        if (1 & t) {
          const n = e.EpF();
          e.ynx(0),
            e.TgZ(1, 'label', 28),
            e.YNc(2, ie, 1, 1, 'i', 7),
            e.YNc(3, ae, 2, 1, 'span', 8),
            e.TgZ(4, 'div', 29)(5, 'span'),
            e._uU(6),
            e.qZA(),
            e.TgZ(7, 'small'),
            e._uU(8),
            e.qZA()(),
            e.TgZ(9, 'input', 30),
            e.NdJ('click', function () {
              const O = e.CHM(n).$implicit,
                J = e.oxw(4);
              return e.KtG(J.toggleValue(O));
            }),
            e.qZA()(),
            e.YNc(10, le, 1, 0, 'hr', 4),
            e.BQk();
        }
        if (2 & t) {
          const n = l.$implicit,
            a = l.last;
          e.xp6(1),
            e.Q6J('for', n.id),
            e.xp6(1),
            e.Q6J('ngIf', n.icon && n.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', n.icon && !n.icon.includes('bx')),
            e.xp6(3),
            e.Oqu(n.title),
            e.xp6(2),
            e.Oqu(n.subtitle),
            e.xp6(1),
            e.Q6J('name', n.name)('id', n.id)('checked', n.value),
            e.xp6(1),
            e.Q6J('ngIf', !a);
        }
      }
      function se(t, l) {
        if ((1 & t && (e.TgZ(0, 'form', 21), e.YNc(1, ce, 11, 9, 'ng-container', 26), e.qZA()), 2 & t)) {
          const n = e.oxw(3);
          e.xp6(1), e.Q6J('ngForOf', n.itemInputList);
        }
      }
      function pe(t, l) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'button', 33),
            e.YNc(2, D, 1, 1, 'i', 7),
            e.YNc(3, W, 2, 1, 'span', 8),
            e.YNc(4, V, 2, 1, 'span', 9),
            e.YNc(5, $, 2, 1, 'ng-container', 10),
            e.YNc(6, R, 1, 1, 'ng-template', null, 11, e.W1O),
            e.YNc(8, z, 2, 1, 'span', 12),
            e.qZA(),
            e.TgZ(9, 'div', 13),
            e.YNc(10, ee, 4, 2, 'div', 14),
            e.YNc(11, oe, 2, 1, 'div', 14),
            e.YNc(12, se, 2, 1, 'form', 14),
            e.qZA(),
            e.BQk()),
          2 & t)
        ) {
          const n = e.MAs(7),
            a = e.oxw(2);
          e.xp6(1),
            e.Q6J('ngClass', a.customClassesHeader),
            e.uIk('data-target', '#' + a.identifier),
            e.xp6(1),
            e.Q6J('ngIf', a.icon && a.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', a.icon && !a.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', a.label),
            e.xp6(1),
            e.Q6J('ngIf', a.isTitleAlone)('ngIfElse', n),
            e.xp6(3),
            e.Q6J('ngIf', a.subtitle),
            e.xp6(1),
            e.Q6J('id', a.identifier),
            e.uIk('data-parent', '#' + a.dataParent),
            e.xp6(1),
            e.Q6J('ngIf', a.content),
            e.xp6(1),
            e.Q6J('ngIf', a.itemInfoList.length > 0),
            e.xp6(1),
            e.Q6J('ngIf', a.itemInputList.length > 0);
        }
      }
      function _e(t, l) {
        if ((1 & t && e.GkF(0, 31), 2 & t)) {
          const n = e.oxw(2);
          e.Q6J('ngTemplateOutlet', n.oCustomContent.template);
        }
      }
      function re(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 32)(1, 'div', 3),
            e.YNc(2, pe, 13, 13, 'ng-container', 4),
            e.YNc(3, _e, 1, 1, 'ng-container', 5),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.ekj('accordion-white', n.isWhite),
            e.Q6J('id', n.dataParent),
            e.xp6(1),
            e.Q6J('ngClass', n.customClassesContent),
            e.xp6(1),
            e.Q6J('ngIf', !n.oCustomContent),
            e.xp6(1),
            e.Q6J('ngIf', n.oCustomContent);
        }
      }
      let ue = (() => {
        class t {
          constructor() {
            (this.identifier = 'collapse'),
              (this.isWhite = !1),
              (this.isCollapsed = !0),
              (this.selectedItemChange = new e.vpe()),
              (this.itemInputList = []),
              (this.itemInfoList = []);
          }
          isTextArray() {
            return Array.isArray(this.content);
          }
          textArray() {
            const n = this.content;
            return Array.isArray(n) ? n : [n];
          }
          ngOnChanges() {
            if (((this.itemInputList = []), (this.itemInfoList = []), this.children && this.children.length > 0)) {
              let n = !1;
              for (const a of this.children)
                'value' in a && void 0 !== a.value && (this.itemInputList.push(a), (n = !0));
              if (!n) for (const a of this.children) this.itemInfoList.push(a);
            }
          }
          toggleValue(n) {
            (n.value = !0), this.selectedItemChange.emit(n);
          }
          toggleCollapse() {
            this.isCollapsed = !this.isCollapsed;
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['o-collapse']],
            contentQueries: function (n, a, Q) {
              if ((1 & n && e.Suo(Q, I.X, 7), 2 & n)) {
                let O;
                e.iGM((O = e.CRH())) && (a.oCustomContent = O.first);
              }
            },
            inputs: {
              identifier: 'identifier',
              dataParent: 'dataParent',
              icon: 'icon',
              label: 'label',
              title: 'title',
              isTitleAlone: 'isTitleAlone',
              subtitle: 'subtitle',
              content: 'content',
              children: 'children',
              customClassesHeader: 'customClassesHeader',
              customClassesContent: 'customClassesContent',
              isWhite: 'isWhite'
            },
            outputs: { selectedItemChange: 'selectedItemChange' },
            features: [e.TTD],
            decls: 2,
            vars: 2,
            consts: [
              ['class', 'accordion', 3, 'accordion-white', 4, 'ngIf'],
              ['class', 'accordion', 3, 'accordion-white', 'id', 4, 'ngIf'],
              [1, 'accordion'],
              [1, 'card', 3, 'ngClass'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              ['data-toggle', 'collapse', 'aria-expanded', 'false', 1, 'card-header', 'collapsed', 3, 'ngClass'],
              [3, 'ngClass', 4, 'ngIf'],
              ['class', 'material-icons-round', 4, 'ngIf'],
              ['class', 'collapse-label', 4, 'ngIf'],
              [4, 'ngIf', 'ngIfElse'],
              ['titleNotAlone', ''],
              ['class', 'collapse-subtitle', 4, 'ngIf'],
              [1, 'collapse', 3, 'id'],
              ['class', 'card-body', 4, 'ngIf'],
              [3, 'ngClass'],
              [1, 'material-icons-round'],
              [1, 'collapse-label'],
              ['class', 'collapse-title', 4, 'ngIf'],
              [1, 'collapse-title'],
              [1, 'collapse-subtitle'],
              [1, 'card-body'],
              ['class', 'mb-0', 3, 'innerHTML', 4, 'ngIf', 'ngIfElse'],
              ['isAarray', ''],
              [1, 'mb-0', 3, 'innerHTML'],
              ['class', 'mb-0', 3, 'innerHTML', 4, 'ngFor', 'ngForOf'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'text-success'],
              [1, 'card-details', 3, 'for'],
              [1, 'card-details-content'],
              ['type', 'radio', 1, 'form-radio', 3, 'name', 'id', 'checked', 'click'],
              [3, 'ngTemplateOutlet'],
              [1, 'accordion', 3, 'id'],
              ['data-toggle', 'collapse', 1, 'card-header', 'collapsed', 3, 'ngClass']
            ],
            template: function (n, a) {
              1 & n && (e.YNc(0, B, 4, 5, 'div', 0), e.YNc(1, re, 4, 6, 'div', 1)),
                2 & n && (e.Q6J('ngIf', !a.dataParent), e.xp6(1), e.Q6J('ngIf', a.dataParent));
            },
            dependencies: [o.mk, o.sg, o.O5, o.tP]
          })),
          t
        );
      })();
      var M = p(4948),
        de = p(2171);
      const k = function () {
          return { label: '$200,00', title: 'Solicitud de informes varios', subtitle: 'Boleta N\xb0 2549-48758798' };
        },
        E = function (t, l) {
          return [t, l];
        },
        me = function () {
          return {
            icon: 'bx bxl-visa',
            title: 'Visa D\xe9bito ****1234',
            subtitle: 'Heraldo Paez',
            id: 'visa',
            name: 'credit_card',
            value: !1
          };
        },
        ge = function () {
          return {
            icon: 'bx bxl-mastercard',
            title: 'MasterCard Cr\xe9dito ****5678',
            subtitle: 'Heraldo Paez',
            id: 'master',
            name: 'credit_card',
            value: !0
          };
        },
        fe = [
          { path: 'api', component: A },
          {
            path: 'examples',
            component: (() => {
              class t {
                constructor() {
                  (this.collapseUniqueHtml = r.s8),
                    (this.collapseMultipleHtml = r.k4),
                    (this.collapseInfoExampleHtml = r.O_),
                    (this.collapseIconExampleHtml = r.IS),
                    (this.collapseLabelExampleHtml = r.RV),
                    (this.collapseListExampleHtml = r.cD),
                    (this.collapseWhiteHtml = r.gb);
                }
              }
              return (
                (t.ɵfac = function (n) {
                  return new (n || t)();
                }),
                (t.ɵcmp = e.Xpm({
                  type: t,
                  selectors: [['app-collapse-examples']],
                  decls: 77,
                  vars: 20,
                  consts: [
                    [1, 'section-example'],
                    ['title', 'Selecci\xf3n m\xfaltiple'],
                    ['component', '', 1, 'accordion'],
                    [
                      'identifier',
                      'collapseOne',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    [
                      'identifier',
                      'collapseTwo',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    [
                      'identifier',
                      'collapseThree',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    ['appClipboard', '', 'component-html', '', 1, 'code'],
                    [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                    ['appPrism', '', 'language', 'html'],
                    ['title', 'Selecci\xf3n \xfanica'],
                    ['component', '', 'id', 'dataParent', 1, 'accordion'],
                    [
                      'identifier',
                      'collapseUniqueOne',
                      'dataParent',
                      'dataParent',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    [
                      'identifier',
                      'collapseUniqueTwo',
                      'dataParent',
                      'dataParent',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    [
                      'identifier',
                      'collapseUniqueThree',
                      'dataParent',
                      'dataParent',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    ['title', 'Con informaci\xf3n'],
                    [
                      'identifier',
                      'collapseInfo',
                      'component',
                      '',
                      'title',
                      '$450,00',
                      'label',
                      'Total a pagar',
                      3,
                      'children'
                    ],
                    ['title', 'Con icono'],
                    [
                      'component',
                      '',
                      'identifier',
                      'collapseIcon',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.',
                      'icon',
                      'bx bxs-user-circle'
                    ],
                    ['title', 'Con volanta y descripcion'],
                    [
                      'component',
                      '',
                      'identifier',
                      'collapseLabel',
                      'icon',
                      'bx bxs-user-circle',
                      'label',
                      'Volanta',
                      'title',
                      'T\xedtulo',
                      'subtitle',
                      'Descripci\xf3n',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.'
                    ],
                    ['title', 'Con lista seleccionable'],
                    [
                      'component',
                      '',
                      'identifier',
                      'collapseList',
                      'title',
                      'Tarjeta de cr\xe9dito / d\xe9bito',
                      'subtitle',
                      'VISA, MasterCard, AMEX, CABAL, Maestro',
                      3,
                      'children'
                    ],
                    ['title', 'De color blanco'],
                    [
                      'component',
                      '',
                      'identifier',
                      'collapseWhite',
                      'title',
                      'T\xedtulo',
                      'content',
                      'Esta es la descripci\xf3n que se encuentra dentro de un colapsable.',
                      'icon',
                      'bx bxs-user-circle',
                      3,
                      'isWhite'
                    ]
                  ],
                  template: function (n, a) {
                    1 & n &&
                      (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                      e._UZ(3, 'o-collapse', 3)(4, 'o-collapse', 4)(5, 'o-collapse', 5),
                      e.qZA(),
                      e.TgZ(6, 'pre', 6),
                      e._uU(7, '      '),
                      e.TgZ(8, 'button', 7),
                      e._uU(9, 'Copiar'),
                      e.qZA(),
                      e._uU(10, '\n      '),
                      e.TgZ(11, 'code', 8),
                      e._uU(12),
                      e.qZA(),
                      e._uU(13, '\n    '),
                      e.qZA()(),
                      e.TgZ(14, 'app-viewer', 9)(15, 'div', 10),
                      e._UZ(16, 'o-collapse', 11)(17, 'o-collapse', 12)(18, 'o-collapse', 13),
                      e.qZA(),
                      e.TgZ(19, 'pre', 6),
                      e._uU(20, '      '),
                      e.TgZ(21, 'button', 7),
                      e._uU(22, 'Copiar'),
                      e.qZA(),
                      e._uU(23, '\n      '),
                      e.TgZ(24, 'code', 8),
                      e._uU(25),
                      e.qZA(),
                      e._uU(26, '\n    '),
                      e.qZA()(),
                      e.TgZ(27, 'app-viewer', 14),
                      e._UZ(28, 'o-collapse', 15),
                      e.TgZ(29, 'pre', 6),
                      e._uU(30, '      '),
                      e.TgZ(31, 'button', 7),
                      e._uU(32, 'Copiar'),
                      e.qZA(),
                      e._uU(33, '\n      '),
                      e.TgZ(34, 'code', 8),
                      e._uU(35),
                      e.qZA(),
                      e._uU(36, '\n    '),
                      e.qZA()(),
                      e.TgZ(37, 'app-viewer', 16),
                      e._UZ(38, 'o-collapse', 17),
                      e.TgZ(39, 'pre', 6),
                      e._uU(40, '      '),
                      e.TgZ(41, 'button', 7),
                      e._uU(42, 'Copiar'),
                      e.qZA(),
                      e._uU(43, '\n      '),
                      e.TgZ(44, 'code', 8),
                      e._uU(45),
                      e.qZA(),
                      e._uU(46, '\n    '),
                      e.qZA()(),
                      e.TgZ(47, 'app-viewer', 18),
                      e._UZ(48, 'o-collapse', 19),
                      e.TgZ(49, 'pre', 6),
                      e._uU(50, '      '),
                      e.TgZ(51, 'button', 7),
                      e._uU(52, 'Copiar'),
                      e.qZA(),
                      e._uU(53, '\n      '),
                      e.TgZ(54, 'code', 8),
                      e._uU(55),
                      e.qZA(),
                      e._uU(56, '\n    '),
                      e.qZA()(),
                      e.TgZ(57, 'app-viewer', 20),
                      e._UZ(58, 'o-collapse', 21),
                      e.TgZ(59, 'pre', 6),
                      e._uU(60, '      '),
                      e.TgZ(61, 'button', 7),
                      e._uU(62, 'Copiar'),
                      e.qZA(),
                      e._uU(63, '\n      '),
                      e.TgZ(64, 'code', 8),
                      e._uU(65),
                      e.qZA(),
                      e._uU(66, '\n    '),
                      e.qZA()(),
                      e.TgZ(67, 'app-viewer', 22),
                      e._UZ(68, 'o-collapse', 23),
                      e.TgZ(69, 'pre', 6),
                      e._uU(70, '      '),
                      e.TgZ(71, 'button', 7),
                      e._uU(72, 'Copiar'),
                      e.qZA(),
                      e._uU(73, '\n      '),
                      e.TgZ(74, 'code', 8),
                      e._uU(75),
                      e.qZA(),
                      e._uU(76, '\n    '),
                      e.qZA()()()),
                      2 & n &&
                        (e.xp6(12),
                        e.Oqu(a.collapseMultipleHtml),
                        e.xp6(13),
                        e.Oqu(a.collapseUniqueHtml),
                        e.xp6(3),
                        e.Q6J('children', e.WLB(12, E, e.DdM(10, k), e.DdM(11, k))),
                        e.xp6(7),
                        e.Oqu(a.collapseInfoExampleHtml),
                        e.xp6(10),
                        e.Oqu(a.collapseIconExampleHtml),
                        e.xp6(10),
                        e.Oqu(a.collapseLabelExampleHtml),
                        e.xp6(3),
                        e.Q6J('children', e.WLB(17, E, e.DdM(15, me), e.DdM(16, ge))),
                        e.xp6(7),
                        e.Oqu(a.collapseListExampleHtml),
                        e.xp6(3),
                        e.Q6J('isWhite', !0),
                        e.xp6(7),
                        e.Oqu(a.collapseWhiteHtml));
                  },
                  dependencies: [ue, M.B, de.y, b.y]
                })),
                t
              );
            })()
          },
          { path: '**', pathMatch: 'full', redirectTo: 'api' }
        ];
      let xe = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [c.Bz.forChild(fe), c.Bz] })),
          t
        );
      })();
      var Ce = p(2089),
        he = p(7538),
        Te = p(9384);
      let Ze = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({ imports: [o.ez] })),
            t
          );
        })(),
        ve = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({ imports: [o.ez, xe, he.Z, Ce.Z, Ze, M.B, Te.T] })),
            t
          );
        })();
    }
  }
]);
