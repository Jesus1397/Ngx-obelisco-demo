'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [9414],
  {
    4883: (S, T, c) => {
      c.d(T, { L: () => x });
      var t = c(4893),
        n = c(2313),
        C = c(9808);
      const g = ['checkbox'];
      function Z(s, m) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (o) {
              t.CHM(a);
              const p = t.oxw(2);
              return t.KtG(p.onHeaderCheckboxChange(o));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & s) {
          const a = t.oxw(2);
          t.Q6J('ngClass', a.checkbox.customClassesTh),
            t.xp6(2),
            t.MGl('id', '', a.id, '-selectAllCheckbox')('name', '', a.id, '-selectAllCheckbox'),
            t.xp6(1),
            t.MGl('for', '', a.id, '-selectAllCheckbox'),
            t.Q6J('ngClass', a.checkbox.customClassesLabel),
            t.xp6(1),
            t.Oqu(a.checkbox.title);
        }
      }
      function f(s, m) {
        if ((1 & s && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & s)) {
          const a = t.oxw(2);
          t.Q6J('ngClass', a.checkbox.customClassesTh), t.xp6(1), t.hij(' ', a.checkbox.title, ' ');
        }
      }
      function d(s, m) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & s)) {
          const a = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', a.customClasses), t.xp6(1), t.Oqu(a.value);
        }
      }
      function e(s, m) {
        if (1 & s) {
          const a = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (o) {
              t.CHM(a);
              const p = t.oxw().$implicit,
                r = t.oxw(2);
              return t.KtG(r.onCheckboxChange(p, o));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & s) {
          const a = t.oxw().index,
            i = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', i.id, '-checkbox_', a, '')('name', '', i.id, '-checkbox_', a, ''),
            t.xp6(2),
            t.hYB('for', '', i.id, '-checkbox_', a, '');
        }
      }
      function v(s, m) {
        if ((1 & s && t._UZ(0, 'div', 14), 2 & s)) {
          const a = t.oxw().$implicit,
            i = t.oxw().$implicit,
            o = t.oxw(2);
          t.Q6J('innerHTML', o.sanitizeHTML(i[a.key].data), t.oJD);
        }
      }
      function U(s, m) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, v, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & s)) {
          const a = m.$implicit,
            i = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', i[a.key].customClasses), t.xp6(1), t.Q6J('ngIf', i[a.key].data);
        }
      }
      function u(s, m) {
        if (
          (1 & s && (t.TgZ(0, 'tr'), t.YNc(1, e, 5, 6, 'td', 9), t.YNc(2, U, 3, 2, 'ng-container', 4), t.qZA()), 2 & s)
        ) {
          const a = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', a.checkbox), t.xp6(1), t.Q6J('ngForOf', a.columns);
        }
      }
      const h = function (s, m) {
        return { 'table-borderless': s, 'table-striped': m };
      };
      function b(s, m) {
        if (
          (1 & s &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, Z, 5, 6, 'th', 3),
            t.YNc(4, f, 2, 2, 'th', 3),
            t.YNc(5, d, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & s)
        ) {
          const a = t.oxw();
          t.Q6J('ngClass', t.WLB(5, h, !a.isBordered, a.isStriped)),
            t.xp6(3),
            t.Q6J('ngIf', 1 == (null == a.checkbox ? null : a.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngIf', 0 == (null == a.checkbox ? null : a.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngForOf', a.columns),
            t.xp6(2),
            t.Q6J('ngForOf', a.dataSource);
        }
      }
      const _ = function (s) {
        return { 'responsive-scroll': s };
      };
      let x = (() => {
        class s {
          constructor(a, i) {
            (this.renderer = a),
              (this.sanitizer = i),
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
            this.checkboxRef.map((a) => {
              this.inputCheckArr.push(a.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((a) => {
              if ('' === a.key || '' === a.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((a) => (a.value = a.value.trim())),
              (this.columns = this.columns.map(
                (a) => ((a.value = a.value.charAt(0).toUpperCase() + a.value.slice(1).toLowerCase()), a)
              )),
              this.columns.map((a) => {
                if (
                  a.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  a.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), a;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(a) {
            return this.sanitizer.bypassSecurityTrustHtml(a);
          }
          onHeaderCheckboxChange(a) {
            const i = a.target;
            if (i) {
              const o = i.checked;
              this.checkboxRef.toArray().forEach((p) => {
                p.nativeElement.checked = o;
              }),
                (this.dataSelected = o ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(a, i) {
            if (i && i.target && 'boolean' == typeof i.target.checked) {
              if (i.target.checked) this.dataSelected.push(a);
              else {
                const p = this.dataSelected.findIndex((r) => r === a);
                -1 !== p && this.dataSelected.splice(p, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (a) {
            return new (a || s)(t.Y36(t.Qsj), t.Y36(n.H7));
          }),
          (s.ɵcmp = t.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (a, i) {
              if ((1 & a && t.Gf(g, 5), 2 & a)) {
                let o;
                t.iGM((o = t.CRH())) && (i.checkboxRef = o);
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
            template: function (a, i) {
              1 & a && (t.TgZ(0, 'div', 0), t.YNc(1, b, 8, 8, 'table', 1), t.qZA()),
                2 & a &&
                  (t.Tol(i.customClasses),
                  t.Q6J('ngClass', t.VKq(4, _, i.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', i.isValidateComponent));
            },
            dependencies: [C.mk, C.sg, C.O5]
          })),
          s
        );
      })();
    },
    2089: (S, T, c) => {
      c.d(T, { Z: () => C });
      var t = c(9808),
        n = c(4893);
      let C = (() => {
        class g {}
        return (
          (g.ɵfac = function (f) {
            return new (f || g)();
          }),
          (g.ɵmod = n.oAB({ type: g })),
          (g.ɵinj = n.cJS({ imports: [t.ez] })),
          g
        );
      })();
    },
    4948: (S, T, c) => {
      c.d(T, { B: () => U });
      var t = c(9808),
        n = c(4893);
      function C(u, h) {
        if (1 & u) {
          const b = n.EpF();
          n.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            n.NdJ('click', function () {
              n.CHM(b);
              const x = n.oxw();
              return n.KtG((x.isWindowHTML = !0));
            }),
            n._uU(4, 'HTML'),
            n.qZA()(),
            n.TgZ(5, 'li', 12)(6, 'a', 14),
            n.NdJ('click', function () {
              n.CHM(b);
              const x = n.oxw();
              return n.KtG((x.isWindowHTML = !1));
            }),
            n._uU(7, 'TS'),
            n.qZA()()()();
        }
        if (2 & u) {
          const b = n.oxw();
          n.xp6(3), n.ekj('active', b.isWindowHTML), n.xp6(3), n.ekj('active', !b.isWindowHTML);
        }
      }
      function g(u, h) {
        1 & u && (n.ynx(0), n.Hsn(1), n.BQk());
      }
      function Z(u, h) {
        1 & u && (n.ynx(0), n.Hsn(1, 1), n.BQk());
      }
      function f(u, h) {
        if ((1 & u && n.YNc(0, Z, 2, 0, 'ng-container', 7), 2 & u)) {
          const b = n.oxw(),
            _ = n.MAs(16);
          n.Q6J('ngIf', b.isWindowHTML)('ngIfElse', _);
        }
      }
      function d(u, h) {
        1 & u && n.Hsn(0, 2);
      }
      const e = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        v = ['[component]', '[component-html]', '[component-ts]'];
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
          (u.ɵfac = function (b) {
            return new (b || u)();
          }),
          (u.ɵcmp = n.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [n.jDz],
            ngContentSelectors: v,
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
            template: function (b, _) {
              if (
                (1 & b &&
                  (n.F$t(e),
                  n.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  n._uU(3),
                  n.qZA(),
                  n.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  n.NdJ('click', function () {
                    return (_.isOpenCode = !_.isOpenCode);
                  }),
                  n.TgZ(8, 'span'),
                  n._uU(9),
                  n.qZA()()()()()(),
                  n.TgZ(10, 'div', 5),
                  n.YNc(11, C, 8, 4, 'nav', 6),
                  n.YNc(12, g, 2, 0, 'ng-container', 7),
                  n.YNc(13, f, 1, 2, 'ng-template', null, 8, n.W1O),
                  n.YNc(15, d, 1, 0, 'ng-template', null, 9, n.W1O),
                  n.qZA()()),
                2 & b)
              ) {
                const x = n.MAs(14);
                n.xp6(3),
                  n.Oqu(_.title),
                  n.xp6(4),
                  n.ekj('active', _.isOpenCode),
                  n.xp6(2),
                  n.Oqu(_.linkCode),
                  n.xp6(2),
                  n.Q6J('ngIf', _.isOpenCode && _.isNavCode),
                  n.xp6(1),
                  n.Q6J('ngIf', !_.isOpenCode)('ngIfElse', x);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          u
        );
      })();
    },
    9414: (S, T, c) => {
      c.r(T), c.d(T, { TableModule: () => i });
      var t = c(9808),
        n = c(7538),
        C = c(2089),
        g = c(4948),
        Z = c(2526),
        f = c(5570),
        d = c(2544),
        e = c(4893),
        v = c(4883),
        U = c(6434);
      let u = (() => {
        class o {
          constructor() {
            (this.dataSource = d.if),
              (this.columns = f.L0),
              (this.dataSourceMethods = d.o5),
              (this.dsColumnInterface = d.b7),
              (this.dsDataSourceInterface = d.OK),
              (this.dsTableCheckboxInterface = d.eT),
              (this.exampleColumnInterface = d.mw),
              (this.exampleDataSourceInterface = d.B0),
              (this.exampleTableCheckboxInterface = d.Am);
          }
        }
        return (
          (o.ɵfac = function (r) {
            return new (r || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['app-table-api']],
            decls: 82,
            vars: 23,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OTableModule } from 'ngx-obelisco-example/table';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 3, 'code'],
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped']
            ],
            template: function (r, l) {
              1 & r &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Tabla de Obelisco'),
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
                e._uU(13, 'OTable'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-table'),
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
                e._uU(31, 'Column'),
                e.qZA(),
                e.TgZ(32, 'p'),
                e._uU(33, 'Permite establecer los valores de la propiedad '),
                e.TgZ(34, 'strong'),
                e._uU(35, 'columns'),
                e.qZA(),
                e._uU(36, '.'),
                e.qZA(),
                e.TgZ(37, 'div', 8)(38, 'pre', 2),
                e._uU(39, '        '),
                e._UZ(40, 'code', 9),
                e._uU(41, '\n      '),
                e.qZA(),
                e.TgZ(42, 'div', 5)(43, 'h5'),
                e._uU(44, 'Propiedades'),
                e.qZA(),
                e._UZ(45, 'o-table', 10),
                e.qZA()(),
                e._UZ(46, 'br')(47, 'br'),
                e.TgZ(48, 'h4'),
                e._uU(49, 'DataSource'),
                e.qZA(),
                e.TgZ(50, 'p'),
                e._uU(51, 'Permite establecer los valores de la propiedad '),
                e.TgZ(52, 'strong'),
                e._uU(53, 'dataSource'),
                e.qZA(),
                e._uU(54, '.'),
                e.qZA(),
                e.TgZ(55, 'div', 8)(56, 'pre', 2),
                e._uU(57, '        '),
                e._UZ(58, 'code', 9),
                e._uU(59, '\n      '),
                e.qZA(),
                e.TgZ(60, 'div', 5)(61, 'h5'),
                e._uU(62, 'Propiedades'),
                e.qZA(),
                e._UZ(63, 'o-table', 10),
                e.qZA()(),
                e._UZ(64, 'br')(65, 'br'),
                e.TgZ(66, 'h4'),
                e._uU(67, 'TableCheckbox'),
                e.qZA(),
                e.TgZ(68, 'p'),
                e._uU(69, 'Permite establecer los valores de la propiedad '),
                e.TgZ(70, 'strong'),
                e._uU(71, 'checkbox'),
                e.qZA(),
                e._uU(72, '.'),
                e.qZA(),
                e.TgZ(73, 'div', 8)(74, 'pre', 2),
                e._uU(75, '        '),
                e._UZ(76, 'code', 9),
                e._uU(77, '\n      '),
                e.qZA(),
                e.TgZ(78, 'div', 5)(79, 'h5'),
                e._uU(80, 'Propiedades'),
                e.qZA(),
                e._UZ(81, 'o-table', 10),
                e.qZA()()()()),
                2 & r &&
                  (e.xp6(21),
                  e.Q6J('columns', l.columns)('dataSource', l.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(4),
                  e.Q6J('columns', l.columns)('dataSource', l.dataSourceMethods)('isStriped', !0)('isBordered', !0),
                  e.xp6(15),
                  e.s9C('code', l.exampleColumnInterface),
                  e.xp6(5),
                  e.Q6J('dataSource', l.dsColumnInterface)('columns', l.columns)('isBordered', !0)('isStriped', !0),
                  e.xp6(13),
                  e.s9C('code', l.exampleDataSourceInterface),
                  e.xp6(5),
                  e.Q6J('dataSource', l.dsDataSourceInterface)('columns', l.columns)('isBordered', !0)('isStriped', !0),
                  e.xp6(13),
                  e.s9C('code', l.exampleTableCheckboxInterface),
                  e.xp6(5),
                  e.Q6J('dataSource', l.dsTableCheckboxInterface)('columns', l.columns)('isBordered', !0)(
                    'isStriped',
                    !0
                  ));
            },
            dependencies: [v.L, U.y]
          })),
          o
        );
      })();
      var h = c(2171);
      function b(o, p) {
        if (
          (1 & o &&
            (e.TgZ(0, 'div', 15)(1, 'p')(2, 'strong'),
            e._uU(3),
            e.qZA()(),
            e.TgZ(4, 'p'),
            e._uU(5),
            e.qZA(),
            e.TgZ(6, 'p'),
            e._uU(7),
            e.qZA(),
            e._UZ(8, 'hr'),
            e.qZA()),
          2 & o)
        ) {
          const r = p.$implicit,
            l = p.index;
          e.xp6(3),
            e.hij('Datos de la fila N\xb0', l + 1, ': '),
            e.xp6(2),
            e.hij('Numbero: ', r.number.data, ''),
            e.xp6(2),
            e.hij('Texto: ', r.text.data, '');
        }
      }
      const _ = function () {
          return { title: 'Checkbox', isAllSelectable: !0 };
        },
        s = [
          { path: 'api', component: u },
          {
            path: 'examples',
            component: (() => {
              class o {
                constructor() {
                  (this.exampleNormalHTML = d.lA),
                    (this.exampleNormalTS = d.HN),
                    (this.exampleBorderedHTML = d.gc),
                    (this.exampleStripedHTML = d.om),
                    (this.exampleSelectableHTML = d.Fb),
                    (this.exampleSelectableTS = d.Qj),
                    (this.columns = [
                      { key: 'number', value: 'N\xfamero', customClasses: 'tb-number' },
                      { key: 'text', value: 'Texto', customClasses: 'tb-text' },
                      { key: 'link', value: 'Enlace', customClasses: 'tb-link' },
                      { key: 'button', value: 'Bot\xf3n', customClasses: 'tb-button' },
                      { key: 'tag', value: 'Etiqueta', customClasses: 'tb-tag' },
                      { key: 'icon', value: 'B\xf3ton con \xedcono', customClasses: 'tb-button ' }
                    ]),
                    (this.dataSource = [
                      {
                        number: { data: '1', customClasses: 'text-right' },
                        text: { data: 'Juan' },
                        link: { data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>' },
                        button: {
                          data: '\n          <button type="button" class="btn btn-primary btn-icon">\n            <i class="bx bxs-info-circle"></i>\n            bot\xf3n\n          </button>'
                        },
                        tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
                        icon: {
                          data: '\n          <div class="actions-table">\n            <button class="btn button-actions-table" aria-label="Editar">\n              <span class="material-icons-round">edit</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Visualizar">\n              <span class="material-icons-round">visibility</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Descargar">\n              <span class="material-icons-round">file_download</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Eliminar">\n              <span class="material-icons-round">delete</span>\n            </button>\n          </div>'
                        }
                      },
                      {
                        number: { data: '2', customClasses: 'text-right' },
                        text: { data: 'Maria' },
                        link: { data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>' },
                        button: {
                          data: '\n          <button type="button" class="btn btn-primary btn-icon">\n            <i class="bx bxs-info-circle"></i>\n            bot\xf3n\n          </button>'
                        },
                        tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
                        icon: {
                          data: '\n          <div class="actions-table">\n            <button class="btn button-actions-table" aria-label="Editar">\n              <span class="material-icons-round">edit</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Visualizar">\n              <span class="material-icons-round">visibility</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Descargar">\n              <span class="material-icons-round">file_download</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Eliminar">\n              <span class="material-icons-round">delete</span>\n            </button>\n          </div>'
                        }
                      },
                      {
                        number: { data: '3', customClasses: 'text-right' },
                        text: { data: 'Esther' },
                        link: { data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>' },
                        button: {
                          data: '\n          <button type="button" class="btn btn-primary btn-icon">\n            <i class="bx bxs-info-circle"></i>\n            bot\xf3n\n          </button>'
                        },
                        tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
                        icon: {
                          data: '\n          <div class="actions-table">\n            <button class="btn button-actions-table" aria-label="Editar">\n              <span class="material-icons-round">edit</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Visualizar">\n              <span class="material-icons-round">visibility</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Descargar">\n              <span class="material-icons-round">file_download</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Eliminar">\n              <span class="material-icons-round">delete</span>\n            </button>\n          </div>'
                        }
                      },
                      {
                        number: { data: '4', customClasses: 'text-right' },
                        text: { data: 'Jos\xe9' },
                        link: { data: '<a href="#" target="_blank" rel="noreferrer">Enlace</a>' },
                        button: {
                          data: '\n          <button type="button" class="btn btn-primary btn-icon">\n            <i class="bx bxs-info-circle"></i>\n            bot\xf3n\n          </button>'
                        },
                        tag: { data: '<span class="badge badge-secondary">Etiqueta 1</span>' },
                        icon: {
                          data: '\n          <div class="actions-table">\n            <button class="btn button-actions-table" aria-label="Editar">\n              <span class="material-icons-round">edit</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Visualizar">\n              <span class="material-icons-round">visibility</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Descargar">\n              <span class="material-icons-round">file_download</span>\n            </button>\n            <button class="btn button-actions-table" aria-label="Eliminar">\n              <span class="material-icons-round">delete</span>\n            </button>\n          </div>'
                        }
                      }
                    ]);
                }
                onDataSelectedChange(r) {
                  console.log('Datos seleccionados:', r), (this.outputData = r);
                }
              }
              return (
                (o.ɵfac = function (r) {
                  return new (r || o)();
                }),
                (o.ɵcmp = e.Xpm({
                  type: o,
                  selectors: [['app-table-examples']],
                  decls: 70,
                  vars: 29,
                  consts: [
                    [1, 'section-example'],
                    ['title', 'Sin separadores', 3, 'isNavCode'],
                    ['component', '', 3, 'isScrollable', 'columns', 'dataSource'],
                    ['appClipboard', '', 'component-html', '', 1, 'code'],
                    [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                    ['appPrism', '', 'language', 'html', 3, 'code'],
                    ['appClipboard', '', 'component-ts', '', 1, 'code'],
                    ['appPrism', ''],
                    ['title', 'Con separadores', 3, 'isNavCode'],
                    ['component', '', 3, 'isScrollable', 'columns', 'dataSource', 'isBordered'],
                    ['title', 'Con patron cebra', 3, 'isNavCode'],
                    ['component', '', 3, 'isScrollable', 'columns', 'dataSource', 'isStriped'],
                    ['title', 'Con checkbox', 3, 'isNavCode'],
                    [
                      'component',
                      '',
                      'id',
                      'table-checkbox-test',
                      3,
                      'isScrollable',
                      'columns',
                      'dataSource',
                      'checkbox',
                      'dataSelectedChange'
                    ],
                    ['class', 'mt-3', 'component', '', 4, 'ngFor', 'ngForOf'],
                    ['component', '', 1, 'mt-3']
                  ],
                  template: function (r, l) {
                    1 & r &&
                      (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1),
                      e._UZ(2, 'o-table', 2),
                      e.TgZ(3, 'pre', 3),
                      e._uU(4, '      '),
                      e.TgZ(5, 'button', 4),
                      e._uU(6, 'Copiar'),
                      e.qZA(),
                      e._uU(7, '\n      '),
                      e._UZ(8, 'code', 5),
                      e._uU(9, '\n    '),
                      e.qZA(),
                      e.TgZ(10, 'pre', 6),
                      e._uU(11, '      '),
                      e.TgZ(12, 'button', 4),
                      e._uU(13, 'Copiar'),
                      e.qZA(),
                      e._uU(14, '\n      '),
                      e.TgZ(15, 'code', 7),
                      e._uU(16),
                      e.qZA(),
                      e._uU(17, '\n    '),
                      e.qZA()(),
                      e.TgZ(18, 'app-viewer', 8),
                      e._UZ(19, 'o-table', 9),
                      e.TgZ(20, 'pre', 3),
                      e._uU(21, '      '),
                      e.TgZ(22, 'button', 4),
                      e._uU(23, 'Copiar'),
                      e.qZA(),
                      e._uU(24, '\n      '),
                      e._UZ(25, 'code', 5),
                      e._uU(26, '\n    '),
                      e.qZA(),
                      e.TgZ(27, 'pre', 6),
                      e._uU(28, '      '),
                      e.TgZ(29, 'button', 4),
                      e._uU(30, 'Copiar'),
                      e.qZA(),
                      e._uU(31, '\n      '),
                      e.TgZ(32, 'code', 7),
                      e._uU(33),
                      e.qZA(),
                      e._uU(34, '\n    '),
                      e.qZA()(),
                      e.TgZ(35, 'app-viewer', 10),
                      e._UZ(36, 'o-table', 11),
                      e.TgZ(37, 'pre', 3),
                      e._uU(38, '      '),
                      e.TgZ(39, 'button', 4),
                      e._uU(40, 'Copiar'),
                      e.qZA(),
                      e._uU(41, '\n      '),
                      e._UZ(42, 'code', 5),
                      e._uU(43, '\n    '),
                      e.qZA(),
                      e.TgZ(44, 'pre', 6),
                      e._uU(45, '      '),
                      e.TgZ(46, 'button', 4),
                      e._uU(47, 'Copiar'),
                      e.qZA(),
                      e._uU(48, '\n      '),
                      e.TgZ(49, 'code', 7),
                      e._uU(50),
                      e.qZA(),
                      e._uU(51, '\n    '),
                      e.qZA()(),
                      e.TgZ(52, 'app-viewer', 12)(53, 'o-table', 13),
                      e.NdJ('dataSelectedChange', function (A) {
                        return l.onDataSelectedChange(A);
                      }),
                      e.qZA(),
                      e.YNc(54, b, 9, 3, 'div', 14),
                      e.TgZ(55, 'pre', 3),
                      e._uU(56, '      '),
                      e.TgZ(57, 'button', 4),
                      e._uU(58, 'Copiar'),
                      e.qZA(),
                      e._uU(59, '\n      '),
                      e._UZ(60, 'code', 5),
                      e._uU(61, '\n    '),
                      e.qZA(),
                      e.TgZ(62, 'pre', 6),
                      e._uU(63, '      '),
                      e.TgZ(64, 'button', 4),
                      e._uU(65, 'Copiar'),
                      e.qZA(),
                      e._uU(66, '\n      '),
                      e.TgZ(67, 'code', 7),
                      e._uU(68),
                      e.qZA(),
                      e._uU(69, '\n    '),
                      e.qZA()()()),
                      2 & r &&
                        (e.xp6(1),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('isScrollable', !0)('columns', l.columns)('dataSource', l.dataSource),
                        e.xp6(6),
                        e.s9C('code', l.exampleNormalHTML),
                        e.xp6(8),
                        e.Oqu(l.exampleNormalTS),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('isScrollable', !0)('columns', l.columns)('dataSource', l.dataSource)('isBordered', !0),
                        e.xp6(6),
                        e.s9C('code', l.exampleBorderedHTML),
                        e.xp6(8),
                        e.Oqu(l.exampleNormalTS),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('isScrollable', !0)('columns', l.columns)('dataSource', l.dataSource)('isStriped', !0),
                        e.xp6(6),
                        e.s9C('code', l.exampleStripedHTML),
                        e.xp6(8),
                        e.Oqu(l.exampleNormalTS),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('isScrollable', !0)('columns', l.columns)('dataSource', l.dataSource)(
                          'checkbox',
                          e.DdM(28, _)
                        ),
                        e.xp6(1),
                        e.Q6J('ngForOf', l.outputData),
                        e.xp6(6),
                        e.s9C('code', l.exampleSelectableHTML),
                        e.xp6(8),
                        e.Oqu(l.exampleSelectableTS));
                  },
                  dependencies: [t.sg, v.L, g.B, h.y, U.y],
                  styles: ['.ngx__table-container[_ngcontent-%COMP%]{max-width:500px}']
                })),
                o
              );
            })()
          },
          { path: '**', pathMatch: 'full', redirectTo: 'api' }
        ];
      let m = (() => {
        class o {}
        return (
          (o.ɵfac = function (r) {
            return new (r || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [Z.Bz.forChild(s), Z.Bz] })),
          o
        );
      })();
      var a = c(9384);
      let i = (() => {
        class o {}
        return (
          (o.ɵfac = function (r) {
            return new (r || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [t.ez, m, n.Z, C.Z, g.B, a.T] })),
          o
        );
      })();
    }
  }
]);
