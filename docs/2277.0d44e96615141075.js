'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2277],
  {
    9373: (q, C, r) => {
      r.d(C, { n: () => x });
      var n = r(9808),
        c = r(2526),
        h = r(4893);
      let x = (() => {
        class f {}
        return (
          (f.ɵfac = function (p) {
            return new (p || f)();
          }),
          (f.ɵmod = h.oAB({ type: f })),
          (f.ɵinj = h.cJS({ imports: [n.ez, c.Bz] })),
          f
        );
      })();
    },
    4883: (q, C, r) => {
      r.d(C, { L: () => O });
      var n = r(4893),
        c = r(2313),
        h = r(9808);
      const x = ['checkbox'];
      function f(_, u) {
        if (1 & _) {
          const i = n.EpF();
          n.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            n.NdJ('change', function (A) {
              n.CHM(i);
              const v = n.oxw(2);
              return n.KtG(v.onHeaderCheckboxChange(A));
            }),
            n.qZA(),
            n.TgZ(3, 'label', 8),
            n._uU(4),
            n.qZA()()();
        }
        if (2 & _) {
          const i = n.oxw(2);
          n.Q6J('ngClass', i.checkbox.customClassesTh),
            n.xp6(2),
            n.MGl('id', '', i.id, '-selectAllCheckbox')('name', '', i.id, '-selectAllCheckbox'),
            n.xp6(1),
            n.MGl('for', '', i.id, '-selectAllCheckbox'),
            n.Q6J('ngClass', i.checkbox.customClassesLabel),
            n.xp6(1),
            n.Oqu(i.checkbox.title);
        }
      }
      function Z(_, u) {
        if ((1 & _ && (n.TgZ(0, 'th', 5), n._uU(1), n.qZA()), 2 & _)) {
          const i = n.oxw(2);
          n.Q6J('ngClass', i.checkbox.customClassesTh), n.xp6(1), n.hij(' ', i.checkbox.title, ' ');
        }
      }
      function p(_, u) {
        if ((1 & _ && (n.ynx(0), n.TgZ(1, 'th', 5), n._uU(2), n.qZA(), n.BQk()), 2 & _)) {
          const i = u.$implicit;
          n.xp6(1), n.Q6J('ngClass', i.customClasses), n.xp6(1), n.Oqu(i.value);
        }
      }
      function L(_, u) {
        if (1 & _) {
          const i = n.EpF();
          n.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            n.NdJ('change', function (A) {
              n.CHM(i);
              const v = n.oxw().$implicit,
                b = n.oxw(2);
              return n.KtG(b.onCheckboxChange(v, A));
            }),
            n.qZA(),
            n._UZ(4, 'label', 11),
            n.qZA()();
        }
        if (2 & _) {
          const i = n.oxw().index,
            l = n.oxw(2);
          n.xp6(2),
            n.hYB('id', '', l.id, '-checkbox_', i, '')('name', '', l.id, '-checkbox_', i, ''),
            n.xp6(2),
            n.hYB('for', '', l.id, '-checkbox_', i, '');
        }
      }
      function e(_, u) {
        if ((1 & _ && n._UZ(0, 'div', 14), 2 & _)) {
          const i = n.oxw().$implicit,
            l = n.oxw().$implicit,
            A = n.oxw(2);
          n.Q6J('innerHTML', A.sanitizeHTML(l[i.key].data), n.oJD);
        }
      }
      function U(_, u) {
        if ((1 & _ && (n.ynx(0), n.TgZ(1, 'td', 12), n.YNc(2, e, 1, 1, 'div', 13), n.qZA(), n.BQk()), 2 & _)) {
          const i = u.$implicit,
            l = n.oxw().$implicit;
          n.xp6(1), n.Q6J('ngClass', l[i.key].customClasses), n.xp6(1), n.Q6J('ngIf', l[i.key].data);
        }
      }
      function m(_, u) {
        if (
          (1 & _ && (n.TgZ(0, 'tr'), n.YNc(1, L, 5, 6, 'td', 9), n.YNc(2, U, 3, 2, 'ng-container', 4), n.qZA()), 2 & _)
        ) {
          const i = n.oxw(2);
          n.xp6(1), n.Q6J('ngIf', i.checkbox), n.xp6(1), n.Q6J('ngForOf', i.columns);
        }
      }
      const T = function (_, u) {
        return { 'table-borderless': _, 'table-striped': u };
      };
      function d(_, u) {
        if (
          (1 & _ &&
            (n.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            n.YNc(3, f, 5, 6, 'th', 3),
            n.YNc(4, Z, 2, 2, 'th', 3),
            n.YNc(5, p, 3, 2, 'ng-container', 4),
            n.qZA()(),
            n.TgZ(6, 'tbody'),
            n.YNc(7, m, 3, 2, 'tr', 4),
            n.qZA()()),
          2 & _)
        ) {
          const i = n.oxw();
          n.Q6J('ngClass', n.WLB(5, T, !i.isBordered, i.isStriped)),
            n.xp6(3),
            n.Q6J('ngIf', 1 == (null == i.checkbox ? null : i.checkbox.isAllSelectable)),
            n.xp6(1),
            n.Q6J('ngIf', 0 == (null == i.checkbox ? null : i.checkbox.isAllSelectable)),
            n.xp6(1),
            n.Q6J('ngForOf', i.columns),
            n.xp6(2),
            n.Q6J('ngForOf', i.dataSource);
        }
      }
      const g = function (_) {
        return { 'responsive-scroll': _ };
      };
      let O = (() => {
        class _ {
          constructor(i, l) {
            (this.renderer = i),
              (this.sanitizer = l),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new n.vpe()),
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
            const l = i.target;
            if (l) {
              const A = l.checked;
              this.checkboxRef.toArray().forEach((v) => {
                v.nativeElement.checked = A;
              }),
                (this.dataSelected = A ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(i, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(i);
              else {
                const v = this.dataSelected.findIndex((b) => b === i);
                -1 !== v && this.dataSelected.splice(v, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (_.ɵfac = function (i) {
            return new (i || _)(n.Y36(n.Qsj), n.Y36(c.H7));
          }),
          (_.ɵcmp = n.Xpm({
            type: _,
            selectors: [['o-table']],
            viewQuery: function (i, l) {
              if ((1 & i && n.Gf(x, 5), 2 & i)) {
                let A;
                n.iGM((A = n.CRH())) && (l.checkboxRef = A);
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
            template: function (i, l) {
              1 & i && (n.TgZ(0, 'div', 0), n.YNc(1, d, 8, 8, 'table', 1), n.qZA()),
                2 & i &&
                  (n.Tol(l.customClasses),
                  n.Q6J('ngClass', n.VKq(4, g, l.isScrollable)),
                  n.xp6(1),
                  n.Q6J('ngIf', l.isValidateComponent));
            },
            dependencies: [h.mk, h.sg, h.O5]
          })),
          _
        );
      })();
    },
    2089: (q, C, r) => {
      r.d(C, { Z: () => h });
      var n = r(9808),
        c = r(4893);
      let h = (() => {
        class x {}
        return (
          (x.ɵfac = function (Z) {
            return new (Z || x)();
          }),
          (x.ɵmod = c.oAB({ type: x })),
          (x.ɵinj = c.cJS({ imports: [n.ez] })),
          x
        );
      })();
    },
    4948: (q, C, r) => {
      r.d(C, { B: () => U });
      var n = r(9808),
        c = r(4893);
      function h(m, T) {
        if (1 & m) {
          const d = c.EpF();
          c.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            c.NdJ('click', function () {
              c.CHM(d);
              const O = c.oxw();
              return c.KtG((O.isWindowHTML = !0));
            }),
            c._uU(4, 'HTML'),
            c.qZA()(),
            c.TgZ(5, 'li', 12)(6, 'a', 14),
            c.NdJ('click', function () {
              c.CHM(d);
              const O = c.oxw();
              return c.KtG((O.isWindowHTML = !1));
            }),
            c._uU(7, 'TS'),
            c.qZA()()()();
        }
        if (2 & m) {
          const d = c.oxw();
          c.xp6(3), c.ekj('active', d.isWindowHTML), c.xp6(3), c.ekj('active', !d.isWindowHTML);
        }
      }
      function x(m, T) {
        1 & m && (c.ynx(0), c.Hsn(1), c.BQk());
      }
      function f(m, T) {
        1 & m && (c.ynx(0), c.Hsn(1, 1), c.BQk());
      }
      function Z(m, T) {
        if ((1 & m && c.YNc(0, f, 2, 0, 'ng-container', 7), 2 & m)) {
          const d = c.oxw(),
            g = c.MAs(16);
          c.Q6J('ngIf', d.isWindowHTML)('ngIfElse', g);
        }
      }
      function p(m, T) {
        1 & m && c.Hsn(0, 2);
      }
      const L = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        e = ['[component]', '[component-html]', '[component-ts]'];
      let U = (() => {
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
          (m.ɵcmp = c.Xpm({
            type: m,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [c.jDz],
            ngContentSelectors: e,
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
                  (c.F$t(L),
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
                  c.YNc(11, h, 8, 4, 'nav', 6),
                  c.YNc(12, x, 2, 0, 'ng-container', 7),
                  c.YNc(13, Z, 1, 2, 'ng-template', null, 8, c.W1O),
                  c.YNc(15, p, 1, 0, 'ng-template', null, 9, c.W1O),
                  c.qZA()()),
                2 & d)
              ) {
                const O = c.MAs(14);
                c.xp6(3),
                  c.Oqu(g.title),
                  c.xp6(4),
                  c.ekj('active', g.isOpenCode),
                  c.xp6(2),
                  c.Oqu(g.linkCode),
                  c.xp6(2),
                  c.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  c.xp6(1),
                  c.Q6J('ngIf', !g.isOpenCode)('ngIfElse', O);
              }
            },
            dependencies: [n.ez, n.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          m
        );
      })();
    },
    2277: (q, C, r) => {
      r.r(C), r.d(C, { AccessListModule: () => re });
      var n = r(9808),
        c = r(9373),
        h = r(7538),
        x = r(2089),
        f = r(4948),
        Z = r(2526),
        p = r(7824),
        L = r(5570),
        e = r(4893),
        U = r(4883),
        m = r(6434);
      let T = (() => {
        class t {
          constructor() {
            (this.dataSource = p.rJ),
              (this.columns = L.L0),
              (this.exampleIterfaceAccessList = p.r),
              (this.exampleIterfaceAccessListHeader = p.C2),
              (this.exampleIterfaceAccessListAccess = p.F3),
              (this.exampleIterfaceAccessListCategory = p.B0),
              (this.exampleIterfaceAccessListFooter = p.Vb),
              (this.exampleDBAccessListInterface = p.oT),
              (this.exampleDBAccessListInterfaceHeader = p.Db),
              (this.exampleDBAccessListInterfaceAccess = p.Zl),
              (this.exampleDBAccessListInterfaceAccessCategory = p.sO),
              (this.exampleDBAccessListInterfaceFooter = p.lS);
          }
        }
        return (
          (t.ɵfac = function (s) {
            return new (s || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['app-access-list-api']],
            decls: 119,
            vars: 29,
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
            template: function (s, o) {
              1 & s &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Lista de Accesos'),
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
                e._uU(13, 'OAccessList'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-access-list'),
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
                e._uU(27, 'AccessList'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'items'),
                e.qZA(),
                e._uU(32, '.'),
                e.qZA(),
                e.TgZ(33, 'div', 8)(34, 'pre', 2),
                e._uU(35, '        '),
                e.TgZ(36, 'code', 9),
                e._uU(37),
                e.qZA(),
                e._uU(38, '\n      '),
                e.qZA(),
                e.TgZ(39, 'div', 5)(40, 'h5'),
                e._uU(41, 'Propiedades'),
                e.qZA(),
                e._UZ(42, 'o-table', 6),
                e.qZA()()(),
                e._UZ(43, 'br'),
                e.TgZ(44, 'div', 7)(45, 'h4'),
                e._uU(46, 'AccessHeader'),
                e.qZA(),
                e.TgZ(47, 'p'),
                e._uU(48, 'Permite establecer los valores de la propiedad '),
                e.TgZ(49, 'strong'),
                e._uU(50, 'header'),
                e.qZA(),
                e._uU(51, '.'),
                e.qZA(),
                e.TgZ(52, 'div', 8)(53, 'pre', 2),
                e._uU(54, '        '),
                e.TgZ(55, 'code', 9),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n      '),
                e.qZA(),
                e.TgZ(58, 'div', 5)(59, 'h5'),
                e._uU(60, 'Propiedades'),
                e.qZA(),
                e._UZ(61, 'o-table', 6),
                e.qZA()()(),
                e._UZ(62, 'br'),
                e.TgZ(63, 'div', 7)(64, 'h4'),
                e._uU(65, 'Access'),
                e.qZA(),
                e.TgZ(66, 'p'),
                e._uU(67, 'Permite establecer los valores de la propiedad '),
                e.TgZ(68, 'strong'),
                e._uU(69, 'children'),
                e.qZA(),
                e._uU(70, '.'),
                e.qZA(),
                e.TgZ(71, 'div', 8)(72, 'pre', 2),
                e._uU(73, '        '),
                e.TgZ(74, 'code', 9),
                e._uU(75),
                e.qZA(),
                e._uU(76, '\n      '),
                e.qZA(),
                e.TgZ(77, 'div', 5)(78, 'h5'),
                e._uU(79, 'Propiedades'),
                e.qZA(),
                e._UZ(80, 'o-table', 6),
                e.qZA()()(),
                e._UZ(81, 'br'),
                e.TgZ(82, 'div', 7)(83, 'h4'),
                e._uU(84, 'AccessCategory'),
                e.qZA(),
                e.TgZ(85, 'p'),
                e._uU(86, 'Permite establecer los valores de la propiedad '),
                e.TgZ(87, 'strong'),
                e._uU(88, 'children'),
                e.qZA(),
                e._uU(89, '.'),
                e.qZA(),
                e.TgZ(90, 'div', 8)(91, 'pre', 2),
                e._uU(92, '        '),
                e.TgZ(93, 'code', 9),
                e._uU(94),
                e.qZA(),
                e._uU(95, '\n      '),
                e.qZA(),
                e.TgZ(96, 'div', 5)(97, 'h5'),
                e._uU(98, 'Propiedades'),
                e.qZA(),
                e._UZ(99, 'o-table', 6),
                e.qZA()()(),
                e._UZ(100, 'br'),
                e.TgZ(101, 'div', 7)(102, 'h4'),
                e._uU(103, 'AccessFootter'),
                e.qZA(),
                e.TgZ(104, 'p'),
                e._uU(105, 'Permite establecer los valores de la propiedad '),
                e.TgZ(106, 'strong'),
                e._uU(107, 'footer'),
                e.qZA(),
                e._uU(108, '.'),
                e.qZA(),
                e.TgZ(109, 'div', 8)(110, 'pre', 2),
                e._uU(111, '        '),
                e.TgZ(112, 'code', 9),
                e._uU(113),
                e.qZA(),
                e._uU(114, '\n      '),
                e.qZA(),
                e.TgZ(115, 'div', 5)(116, 'h5'),
                e._uU(117, 'Propiedades'),
                e.qZA(),
                e._UZ(118, 'o-table', 6),
                e.qZA()()()()),
                2 & s &&
                  (e.xp6(21),
                  e.Q6J('columns', o.columns)('dataSource', o.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(o.exampleIterfaceAccessList),
                  e.xp6(5),
                  e.Q6J('columns', o.columns)('dataSource', o.exampleDBAccessListInterface)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(14),
                  e.Oqu(o.exampleIterfaceAccessListHeader),
                  e.xp6(5),
                  e.Q6J('columns', o.columns)('dataSource', o.exampleDBAccessListInterfaceHeader)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(14),
                  e.Oqu(o.exampleIterfaceAccessListAccess),
                  e.xp6(5),
                  e.Q6J('columns', o.columns)('dataSource', o.exampleDBAccessListInterfaceAccess)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(14),
                  e.Oqu(o.exampleIterfaceAccessListCategory),
                  e.xp6(5),
                  e.Q6J('columns', o.columns)('dataSource', o.exampleDBAccessListInterfaceAccessCategory)(
                    'isStriped',
                    !0
                  )('isBordered', !0),
                  e.xp6(14),
                  e.Oqu(o.exampleIterfaceAccessListFooter),
                  e.xp6(5),
                  e.Q6J('columns', o.columns)('dataSource', o.exampleDBAccessListInterfaceFooter)('isStriped', !0)(
                    'isBordered',
                    !0
                  ));
            },
            dependencies: [U.L, m.y]
          })),
          t
        );
      })();
      var d = r(2171);
      function g(t, a) {
        if ((1 & t && (e.TgZ(0, 'p', 12), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw();
          e.xp6(1), e.Oqu(s.items.header.description);
        }
      }
      function O(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(2);
          e.Gre('card-access-icon ', s.items.header.icon, '');
        }
      }
      function _(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 15), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(2);
          e.xp6(1), e.Oqu(s.items.header.icon);
        }
      }
      function u(t, a) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, O, 1, 3, 'i', 13), e.YNc(2, _, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw();
          e.xp6(1), e.Q6J('ngIf', o.items.header.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function i(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 16), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw();
          e.xp6(1), e.Oqu(s.items.header.iconText);
        }
      }
      function l(t, a) {
        1 & t && e._UZ(0, 'hr', 17);
      }
      function A(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(2).$implicit;
          e.Tol(s.icon);
        }
      }
      function v(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 25), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(2).$implicit;
          e.xp6(1), e.Oqu(s.icon);
        }
      }
      function b(t, a) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, A, 1, 3, 'i', 13), e.YNc(2, v, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw().$implicit;
          e.xp6(1), e.Q6J('ngIf', o.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function w(t, a) {
        if ((1 & t && (e.TgZ(0, 'p', 26), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.Oqu(s.description);
        }
      }
      function I(t, a) {
        if (
          (1 & t &&
            (e.ynx(0),
            e.TgZ(1, 'a', 21),
            e.YNc(2, b, 4, 2, 'ng-container', 6),
            e.TgZ(3, 'div', 22)(4, 'span', 23),
            e._uU(5),
            e.qZA(),
            e.YNc(6, w, 2, 1, 'p', 24),
            e.qZA()(),
            e.BQk()),
          2 & t)
        ) {
          const s = a.$implicit;
          e.xp6(1),
            e.Q6J('routerLink', s.route),
            e.xp6(1),
            e.Q6J('ngIf', s.icon),
            e.xp6(3),
            e.Oqu(s.title),
            e.xp6(1),
            e.Q6J('ngIf', s.description);
        }
      }
      function M(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(3).$implicit;
          e.Tol(s.icon);
        }
      }
      function Q(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 25), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(3).$implicit;
          e.xp6(1), e.Oqu(s.icon);
        }
      }
      function y(t, a) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, M, 1, 3, 'i', 13), e.YNc(2, Q, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J('ngIf', o.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function J(t, a) {
        if ((1 & t && (e.TgZ(0, 'p', 26), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(2).$implicit;
          e.xp6(1), e.Oqu(s.description);
        }
      }
      function k(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'a', 28),
            e.YNc(1, y, 4, 2, 'ng-container', 6),
            e.TgZ(2, 'div', 22)(3, 'span', 23),
            e._uU(4),
            e.qZA(),
            e.YNc(5, J, 2, 1, 'p', 24),
            e.qZA()()),
          2 & t)
        ) {
          const s = e.oxw().$implicit;
          e.Q6J('href', s.link, e.LSH),
            e.xp6(1),
            e.Q6J('ngIf', s.icon),
            e.xp6(3),
            e.Oqu(s.title),
            e.xp6(1),
            e.Q6J('ngIf', s.description);
        }
      }
      function N(t, a) {
        if ((1 & t && (e.ynx(0), e.YNc(1, k, 6, 4, 'a', 27), e.BQk()), 2 & t)) {
          const s = a.$implicit;
          e.xp6(1), e.Q6J('ngIf', s.link);
        }
      }
      function P(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 18)(1, 'div', 19),
            e.YNc(2, I, 7, 4, 'ng-container', 20),
            e.YNc(3, N, 2, 1, 'ng-container', 20),
            e.qZA()()),
          2 & t)
        ) {
          const s = e.oxw();
          e.xp6(2), e.Q6J('ngForOf', s.accessList), e.xp6(1), e.Q6J('ngForOf', s.accessList);
        }
      }
      function B(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(3).$implicit;
          e.Tol(s.icon);
        }
      }
      function S(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 25), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(3).$implicit;
          e.xp6(1), e.Oqu(s.icon);
        }
      }
      function E(t, a) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, B, 1, 3, 'i', 13), e.YNc(2, S, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J('ngIf', o.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function Y(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'a', 21)(1, 'span', 23), e.YNc(2, E, 4, 2, 'ng-container', 6), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const s = e.oxw().$implicit;
          e.Q6J('routerLink', s.route), e.xp6(2), e.Q6J('ngIf', s.icon), e.xp6(1), e.hij(' ', s.title, ' ');
        }
      }
      function D(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(3).$implicit;
          e.Tol(s.icon);
        }
      }
      function F(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 25), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(3).$implicit;
          e.xp6(1), e.Oqu(s.icon);
        }
      }
      function H(t, a) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, D, 1, 3, 'i', 13), e.YNc(2, F, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J('ngIf', o.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function $(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'a', 28)(1, 'span', 23), e.YNc(2, H, 4, 2, 'ng-container', 6), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const s = e.oxw().$implicit;
          e.Q6J('href', s.link, e.LSH), e.xp6(2), e.Q6J('ngIf', s.icon), e.xp6(1), e.hij(' ', s.title, ' ');
        }
      }
      function W(t, a) {
        if ((1 & t && (e.ynx(0), e.YNc(1, Y, 4, 3, 'a', 31), e.YNc(2, $, 4, 3, 'a', 27), e.BQk()), 2 & t)) {
          const s = a.$implicit;
          e.xp6(1), e.Q6J('ngIf', s.route), e.xp6(1), e.Q6J('ngIf', s.link);
        }
      }
      function V(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div', 19)(1, 'h5', 30), e._uU(2), e.qZA(), e.YNc(3, W, 3, 2, 'ng-container', 20), e.qZA()),
          2 & t)
        ) {
          const s = a.$implicit;
          e.xp6(2), e.Oqu(s.title), e.xp6(1), e.Q6J('ngForOf', s.children);
        }
      }
      function j(t, a) {
        if ((1 & t && (e.TgZ(0, 'div', 18), e.YNc(1, V, 4, 2, 'div', 29), e.qZA()), 2 & t)) {
          const s = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', s.accessCategoryList);
        }
      }
      function R(t, a) {
        1 & t && e._UZ(0, 'hr', 17);
      }
      function K(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(3);
          e.Tol(s.items.footer.icon);
        }
      }
      function z(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 25), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(3);
          e.xp6(1), e.Oqu(s.items.footer.icon);
        }
      }
      function G(t, a) {
        if (
          (1 & t && (e.ynx(0), e.YNc(1, K, 1, 3, 'i', 13), e.YNc(2, z, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', o.items.footer.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function X(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'a', 32)(1, 'span', 23), e.YNc(2, G, 4, 2, 'ng-container', 6), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const s = e.oxw();
          e.Q6J('routerLink', s.items.footer.route),
            e.xp6(2),
            e.Q6J('ngIf', s.items.footer.icon),
            e.xp6(1),
            e.hij(' ', s.items.footer.title, ' ');
        }
      }
      function ee(t, a) {
        if ((1 & t && e._UZ(0, 'i'), 2 & t)) {
          const s = e.oxw(3);
          e.Tol(s.items.footer.icon);
        }
      }
      function te(t, a) {
        if ((1 & t && (e.TgZ(0, 'span', 25), e._uU(1), e.qZA()), 2 & t)) {
          const s = e.oxw(3);
          e.xp6(1), e.Oqu(s.items.footer.icon);
        }
      }
      function ne(t, a) {
        if (
          (1 & t &&
            (e.ynx(0), e.YNc(1, ee, 1, 3, 'i', 13), e.YNc(2, te, 2, 1, 'ng-template', null, 14, e.W1O), e.BQk()),
          2 & t)
        ) {
          const s = e.MAs(3),
            o = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', o.items.footer.icon.includes('bx'))('ngIfElse', s);
        }
      }
      function se(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'a', 33)(1, 'span', 23), e.YNc(2, ne, 4, 2, 'ng-container', 6), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const s = e.oxw();
          e.Q6J('href', s.items.footer.link, e.LSH),
            e.xp6(2),
            e.Q6J('ngIf', s.items.footer.icon),
            e.xp6(1),
            e.hij(' ', s.items.footer.title, ' ');
        }
      }
      const ie = function (t) {
        return { reverse: t };
      };
      let ce = (() => {
        class t {
          constructor() {
            (this.customClasses = ''), (this.accessList = []), (this.accessCategoryList = []);
          }
          ngOnChanges() {
            this.items &&
              this.items.children &&
              this.items.children.forEach((s) => {
                this.isAccess(s)
                  ? this.accessList.push(s)
                  : this.isAccessCategory(s) && this.accessCategoryList.push(s);
              });
          }
          isAccess(s) {
            return s.hasOwnProperty('link') || s.hasOwnProperty('route');
          }
          isAccessCategory(s) {
            return s.hasOwnProperty('title') && s.hasOwnProperty('children');
          }
        }
        return (
          (t.ɵfac = function (s) {
            return new (s || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['o-access-list']],
            inputs: { items: 'items', customClasses: 'customClasses' },
            features: [e.TTD],
            decls: 16,
            vars: 14,
            consts: [
              [1, 'list-group', 3, 'ngClass'],
              [1, 'group-access'],
              [1, 'card-access'],
              [1, 'card-access-body', 3, 'ngClass'],
              [1, 'mb-1'],
              ['class', 'mb-0', 4, 'ngIf'],
              [4, 'ngIf'],
              ['class', 'card-access-icon descriptive', 4, 'ngIf'],
              ['class', 'clearfix', 4, 'ngIf'],
              ['class', 'container-access', 4, 'ngIf'],
              ['class', 'list-group-item card-item', 3, 'routerLink', 4, 'ngIf'],
              ['class', 'list-group-item card-item', 3, 'href', 4, 'ngIf'],
              [1, 'mb-0'],
              [3, 'class', 4, 'ngIf', 'ngIfElse'],
              ['materialIcon', ''],
              [1, 'card-access-icon', 'material-icons-round'],
              [1, 'card-access-icon', 'descriptive'],
              [1, 'clearfix'],
              [1, 'container-access'],
              [1, 'access-option'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'list-group-item', 'item-sm', 3, 'routerLink'],
              [1, 'access-content'],
              [1, 'access-title'],
              ['class', 'access-text', 4, 'ngIf'],
              [1, 'material-icons-round'],
              [1, 'access-text'],
              ['class', 'list-group-item item-sm', 3, 'href', 4, 'ngIf'],
              [1, 'list-group-item', 'item-sm', 3, 'href'],
              ['class', 'access-option', 4, 'ngFor', 'ngForOf'],
              [1, 'title-option'],
              ['class', 'list-group-item item-sm', 3, 'routerLink', 4, 'ngIf'],
              [1, 'list-group-item', 'card-item', 3, 'routerLink'],
              [1, 'list-group-item', 'card-item', 3, 'href']
            ],
            template: function (s, o) {
              1 & s &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'div', 2)(3, 'div', 3)(4, 'div')(5, 'h4', 4),
                e._uU(6),
                e.qZA(),
                e.YNc(7, g, 2, 1, 'p', 5),
                e.qZA(),
                e.YNc(8, u, 4, 2, 'ng-container', 6),
                e.YNc(9, i, 2, 1, 'span', 7),
                e.qZA(),
                e.YNc(10, l, 1, 0, 'hr', 8),
                e.YNc(11, P, 4, 2, 'div', 9),
                e.YNc(12, j, 2, 1, 'div', 9),
                e.YNc(13, R, 1, 0, 'hr', 8),
                e.YNc(14, X, 4, 3, 'a', 10),
                e.YNc(15, se, 4, 3, 'a', 11),
                e.qZA()()()),
                2 & s &&
                  (e.Q6J('ngClass', o.customClasses),
                  e.xp6(3),
                  e.Q6J('ngClass', e.VKq(12, ie, o.items.header.iconPositionLeft)),
                  e.xp6(3),
                  e.Oqu(o.items.header.title),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.header.description),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.header.icon),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.header.iconText),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.children),
                  e.xp6(1),
                  e.Q6J('ngIf', o.accessList.length > 0),
                  e.xp6(1),
                  e.Q6J('ngIf', o.accessCategoryList.length > 0),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.footer),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.footer && o.items.footer.route),
                  e.xp6(1),
                  e.Q6J('ngIf', o.items.footer && o.items.footer.link));
            },
            dependencies: [n.mk, n.sg, n.O5, Z.yS],
            styles: ['.card-access:has(.container-access) .card-item:not(:hover){box-shadow:none}']
          })),
          t
        );
      })();
      const oe = [
        { path: 'api', component: T },
        {
          path: 'examples',
          component: (() => {
            class t {
              constructor() {
                (this.exampleAccessListHtml = p.Yw),
                  (this.exampleAccessListTs = p.N0),
                  (this.exampleAccessListAccessTs = p.BG),
                  (this.exampleAccessListCategoryTs = p.sJ),
                  (this.accesListArray = p.fX),
                  (this.accesListArrayCategory = p.j_),
                  (this.accesListArrayFooter = p.jb);
              }
            }
            return (
              (t.ɵfac = function (s) {
                return new (s || t)();
              }),
              (t.ɵcmp = e.Xpm({
                type: t,
                selectors: [['app-access-list-example']],
                decls: 58,
                vars: 12,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Simple', 3, 'isNavCode'],
                  ['component', '', 1, 'list-group-container'],
                  [3, 'items'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Con lista de accesos', 3, 'isNavCode'],
                  ['title', 'Con categor\xedas', 3, 'isNavCode']
                ],
                template: function (s, o) {
                  1 & s &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-access-list', 3),
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
                    e._UZ(22, 'o-access-list', 3),
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
                    e.TgZ(39, 'app-viewer', 10)(40, 'div', 2),
                    e._UZ(41, 'o-access-list', 3),
                    e.qZA(),
                    e.TgZ(42, 'pre', 4),
                    e._uU(43, '      '),
                    e.TgZ(44, 'button', 5),
                    e._uU(45, 'Copiar'),
                    e.qZA(),
                    e._uU(46, '\n      '),
                    e.TgZ(47, 'code', 6),
                    e._uU(48),
                    e.qZA(),
                    e._uU(49, '\n    '),
                    e.qZA(),
                    e.TgZ(50, 'pre', 7),
                    e._uU(51, '      '),
                    e.TgZ(52, 'button', 5),
                    e._uU(53, 'Copiar'),
                    e.qZA(),
                    e._uU(54, '\n      '),
                    e.TgZ(55, 'code', 8),
                    e._uU(56),
                    e.qZA(),
                    e._uU(57, '\n    '),
                    e.qZA()()()),
                    2 & s &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('items', o.accesListArrayFooter),
                      e.xp6(7),
                      e.Oqu(o.exampleAccessListHtml),
                      e.xp6(8),
                      e.Oqu(o.exampleAccessListTs),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('items', o.accesListArray),
                      e.xp6(7),
                      e.Oqu(o.exampleAccessListHtml),
                      e.xp6(8),
                      e.Oqu(o.exampleAccessListAccessTs),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('items', o.accesListArrayCategory),
                      e.xp6(7),
                      e.Oqu(o.exampleAccessListHtml),
                      e.xp6(8),
                      e.Oqu(o.exampleAccessListCategoryTs));
                },
                dependencies: [m.y, d.y, f.B, ce],
                styles: ['.list-group-container[_ngcontent-%COMP%]{max-width:400px}']
              })),
              t
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let ae = (() => {
        class t {}
        return (
          (t.ɵfac = function (s) {
            return new (s || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [Z.Bz.forChild(oe), Z.Bz] })),
          t
        );
      })();
      var _e = r(9384);
      let re = (() => {
        class t {}
        return (
          (t.ɵfac = function (s) {
            return new (s || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [n.ez, ae, h.Z, x.Z, f.B, c.n, _e.T] })),
          t
        );
      })();
    }
  }
]);
