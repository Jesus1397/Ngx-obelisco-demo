'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [1295],
  {
    4883: (M, f, c) => {
      c.d(f, { L: () => C });
      var t = c(4893),
        o = c(2313),
        v = c(9808);
      const u = ['checkbox'];
      function e(l, _) {
        if (1 & l) {
          const s = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (h) {
              t.CHM(s);
              const Z = t.oxw(2);
              return t.KtG(Z.onHeaderCheckboxChange(h));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & l) {
          const s = t.oxw(2);
          t.Q6J('ngClass', s.checkbox.customClassesTh),
            t.xp6(2),
            t.MGl('id', '', s.id, '-selectAllCheckbox')('name', '', s.id, '-selectAllCheckbox'),
            t.xp6(1),
            t.MGl('for', '', s.id, '-selectAllCheckbox'),
            t.Q6J('ngClass', s.checkbox.customClassesLabel),
            t.xp6(1),
            t.Oqu(s.checkbox.title);
        }
      }
      function x(l, _) {
        if ((1 & l && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & l)) {
          const s = t.oxw(2);
          t.Q6J('ngClass', s.checkbox.customClassesTh), t.xp6(1), t.hij(' ', s.checkbox.title, ' ');
        }
      }
      function U(l, _) {
        if ((1 & l && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & l)) {
          const s = _.$implicit;
          t.xp6(1), t.Q6J('ngClass', s.customClasses), t.xp6(1), t.Oqu(s.value);
        }
      }
      function A(l, _) {
        if (1 & l) {
          const s = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (h) {
              t.CHM(s);
              const Z = t.oxw().$implicit,
                w = t.oxw(2);
              return t.KtG(w.onCheckboxChange(Z, h));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & l) {
          const s = t.oxw().index,
            r = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', r.id, '-checkbox_', s, '')('name', '', r.id, '-checkbox_', s, ''),
            t.xp6(2),
            t.hYB('for', '', r.id, '-checkbox_', s, '');
        }
      }
      function q(l, _) {
        if ((1 & l && t._UZ(0, 'div', 14), 2 & l)) {
          const s = t.oxw().$implicit,
            r = t.oxw().$implicit,
            h = t.oxw(2);
          t.Q6J('innerHTML', h.sanitizeHTML(r[s.key].data), t.oJD);
        }
      }
      function I(l, _) {
        if ((1 & l && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, q, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & l)) {
          const s = _.$implicit,
            r = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', r[s.key].customClasses), t.xp6(1), t.Q6J('ngIf', r[s.key].data);
        }
      }
      function m(l, _) {
        if (
          (1 & l && (t.TgZ(0, 'tr'), t.YNc(1, A, 5, 6, 'td', 9), t.YNc(2, I, 3, 2, 'ng-container', 4), t.qZA()), 2 & l)
        ) {
          const s = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', s.checkbox), t.xp6(1), t.Q6J('ngForOf', s.columns);
        }
      }
      const b = function (l, _) {
        return { 'table-borderless': l, 'table-striped': _ };
      };
      function g(l, _) {
        if (
          (1 & l &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, x, 2, 2, 'th', 3),
            t.YNc(5, U, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, m, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & l)
        ) {
          const s = t.oxw();
          t.Q6J('ngClass', t.WLB(5, b, !s.isBordered, s.isStriped)),
            t.xp6(3),
            t.Q6J('ngIf', 1 == (null == s.checkbox ? null : s.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngIf', 0 == (null == s.checkbox ? null : s.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngForOf', s.columns),
            t.xp6(2),
            t.Q6J('ngForOf', s.dataSource);
        }
      }
      const T = function (l) {
        return { 'responsive-scroll': l };
      };
      let C = (() => {
        class l {
          constructor(s, r) {
            (this.renderer = s),
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
            this.checkboxRef.map((s) => {
              this.inputCheckArr.push(s.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((s) => {
              if ('' === s.key || '' === s.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((s) => (s.value = s.value.trim())),
              (this.columns = this.columns.map(
                (s) => ((s.value = s.value.charAt(0).toUpperCase() + s.value.slice(1).toLowerCase()), s)
              )),
              this.columns.map((s) => {
                if (
                  s.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  s.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), s;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(s) {
            return this.sanitizer.bypassSecurityTrustHtml(s);
          }
          onHeaderCheckboxChange(s) {
            const r = s.target;
            if (r) {
              const h = r.checked;
              this.checkboxRef.toArray().forEach((Z) => {
                Z.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(s, r) {
            if (r && r.target && 'boolean' == typeof r.target.checked) {
              if (r.target.checked) this.dataSelected.push(s);
              else {
                const Z = this.dataSelected.findIndex((w) => w === s);
                -1 !== Z && this.dataSelected.splice(Z, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (l.ɵfac = function (s) {
            return new (s || l)(t.Y36(t.Qsj), t.Y36(o.H7));
          }),
          (l.ɵcmp = t.Xpm({
            type: l,
            selectors: [['o-table']],
            viewQuery: function (s, r) {
              if ((1 & s && t.Gf(u, 5), 2 & s)) {
                let h;
                t.iGM((h = t.CRH())) && (r.checkboxRef = h);
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
            template: function (s, r) {
              1 & s && (t.TgZ(0, 'div', 0), t.YNc(1, g, 8, 8, 'table', 1), t.qZA()),
                2 & s &&
                  (t.Tol(r.customClasses),
                  t.Q6J('ngClass', t.VKq(4, T, r.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', r.isValidateComponent));
            },
            dependencies: [v.mk, v.sg, v.O5]
          })),
          l
        );
      })();
    },
    2089: (M, f, c) => {
      c.d(f, { Z: () => v });
      var t = c(9808),
        o = c(4893);
      let v = (() => {
        class u {}
        return (
          (u.ɵfac = function (x) {
            return new (x || u)();
          }),
          (u.ɵmod = o.oAB({ type: u })),
          (u.ɵinj = o.cJS({ imports: [t.ez] })),
          u
        );
      })();
    },
    4948: (M, f, c) => {
      c.d(f, { B: () => I });
      var t = c(9808),
        o = c(4893);
      function v(m, b) {
        if (1 & m) {
          const g = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(g);
              const C = o.oxw();
              return o.KtG((C.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(g);
              const C = o.oxw();
              return o.KtG((C.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & m) {
          const g = o.oxw();
          o.xp6(3), o.ekj('active', g.isWindowHTML), o.xp6(3), o.ekj('active', !g.isWindowHTML);
        }
      }
      function u(m, b) {
        1 & m && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function e(m, b) {
        1 & m && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function x(m, b) {
        if ((1 & m && o.YNc(0, e, 2, 0, 'ng-container', 7), 2 & m)) {
          const g = o.oxw(),
            T = o.MAs(16);
          o.Q6J('ngIf', g.isWindowHTML)('ngIfElse', T);
        }
      }
      function U(m, b) {
        1 & m && o.Hsn(0, 2);
      }
      const A = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        q = ['[component]', '[component-html]', '[component-ts]'];
      let I = (() => {
        class m {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (m.ɵfac = function (g) {
            return new (g || m)();
          }),
          (m.ɵcmp = o.Xpm({
            type: m,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [o.jDz],
            ngContentSelectors: q,
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
            template: function (g, T) {
              if (
                (1 & g &&
                  (o.F$t(A),
                  o.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  o._uU(3),
                  o.qZA(),
                  o.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  o.NdJ('click', function () {
                    return (T.isOpenCode = !T.isOpenCode);
                  }),
                  o.TgZ(8, 'span'),
                  o._uU(9),
                  o.qZA()()()()()(),
                  o.TgZ(10, 'div', 5),
                  o.YNc(11, v, 8, 4, 'nav', 6),
                  o.YNc(12, u, 2, 0, 'ng-container', 7),
                  o.YNc(13, x, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, U, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & g)
              ) {
                const C = o.MAs(14);
                o.xp6(3),
                  o.Oqu(T.title),
                  o.xp6(4),
                  o.ekj('active', T.isOpenCode),
                  o.xp6(2),
                  o.Oqu(T.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', T.isOpenCode && T.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !T.isOpenCode)('ngIfElse', C);
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
    1295: (M, f, c) => {
      c.r(f), c.d(f, { TabsModule: () => N });
      var t = c(9808),
        o = c(2526),
        v = c(5570),
        u = c(45),
        e = c(4893),
        x = c(4883),
        U = c(6434);
      let A = (() => {
        class a {
          constructor() {
            (this.columns = v.L0),
              (this.dataSourceTabs = u.lT),
              (this.dataSourceProps = u.oq),
              (this.exampleIterface = u.Ue),
              (this.sizes = v.zf);
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-navigation-tabs-api']],
            decls: 57,
            vars: 10,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { ONavModule } from 'ngx-obelisco-example/nav';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped'],
              [1, 'section-type', 'mt-4'],
              ['appPrism', '']
            ],
            template: function (i, n) {
              1 & i &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Pesta\xf1as'),
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
                e._uU(13, 'OTabs'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-tabs'),
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
                e._uU(27, 'TabsProps'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'TabsProps'),
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
                e._UZ(42, 'o-table', 10),
                e.qZA()()(),
                e.TgZ(43, 'div', 11)(44, 'h4'),
                e._uU(45, 'Sizes'),
                e.qZA(),
                e.TgZ(46, 'p'),
                e._uU(47, 'Permite establecer el tama\xf1o del componente '),
                e.TgZ(48, 'strong'),
                e._uU(49, 'OTabsComponent'),
                e.qZA(),
                e._uU(50, '.'),
                e.qZA(),
                e.TgZ(51, 'div', 8)(52, 'pre', 2),
                e._uU(53, '          '),
                e.TgZ(54, 'code', 12),
                e._uU(55),
                e.qZA(),
                e._uU(56, '\n        '),
                e.qZA()()()()),
                2 & i &&
                  (e.xp6(21),
                  e.Q6J('columns', n.columns)('dataSource', n.dataSourceTabs)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(n.exampleIterface),
                  e.xp6(5),
                  e.Q6J('dataSource', n.dataSourceProps)('columns', n.columns)('isBordered', !0)('isStriped', !0),
                  e.xp6(13),
                  e.hij('\n            ', n.sizes, '\n          '));
            },
            dependencies: [x.L, U.y]
          })),
          a
        );
      })();
      const q = ['tabContentContainer'],
        I = ['tabsList'];
      function m(a, p) {
        if ((1 & a && (e.ynx(0), e._UZ(1, 'i', 9), e.BQk()), 2 & a)) {
          const i = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J('ngClass', i.icon);
        }
      }
      function b(a, p) {
        if ((1 & a && (e.ynx(0), e.TgZ(1, 'span', 10), e._uU(2), e.qZA(), e.BQk()), 2 & a)) {
          const i = e.oxw(2).$implicit;
          e.xp6(2), e.Oqu(i.icon);
        }
      }
      function g(a, p) {
        if (
          (1 & a && (e.ynx(0), e.YNc(1, m, 2, 1, 'ng-container', 8), e.YNc(2, b, 3, 1, 'ng-container', 8), e.BQk()),
          2 & a)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1), e.Q6J('ngIf', i.icon.includes('bx')), e.xp6(1), e.Q6J('ngIf', !i.icon.includes('bx'));
        }
      }
      function T(a, p) {
        if ((1 & a && (e.ynx(0), e._UZ(1, 'i', 9), e.BQk()), 2 & a)) {
          const i = e.oxw(2).$implicit;
          e.xp6(1), e.Q6J('ngClass', i.icon);
        }
      }
      function C(a, p) {
        if ((1 & a && (e.ynx(0), e.TgZ(1, 'span', 10), e._uU(2), e.qZA(), e.BQk()), 2 & a)) {
          const i = e.oxw(2).$implicit;
          e.xp6(2), e.Oqu(i.icon);
        }
      }
      function l(a, p) {
        if (
          (1 & a && (e.ynx(0), e.YNc(1, T, 2, 1, 'ng-container', 8), e.YNc(2, C, 3, 1, 'ng-container', 8), e.BQk()),
          2 & a)
        ) {
          const i = e.oxw().$implicit;
          e.xp6(1),
            e.Q6J('ngIf', i.icon && i.icon.includes('bx')),
            e.xp6(1),
            e.Q6J('ngIf', i.icon && !i.icon.includes('bx'));
        }
      }
      const _ = function (a, p) {
        return { 'nav-link-lg': a, 'nav-link-sm': p };
      };
      function s(a, p) {
        if (1 & a) {
          const i = e.EpF();
          e.TgZ(0, 'li', 5)(1, 'a', 6),
            e.NdJ('click', function (d) {
              const k = e.CHM(i).index,
                L = e.oxw();
              return e.KtG(L.handleTabClick(k, d));
            })('keyup', function (d) {
              const k = e.CHM(i).index,
                L = e.oxw();
              return e.KtG(L.handleTabKeyup(d, k));
            }),
            e.TgZ(2, 'div', 7),
            e.YNc(3, g, 3, 2, 'ng-container', 8),
            e._uU(4),
            e.YNc(5, l, 3, 2, 'ng-container', 8),
            e.qZA()()();
        }
        if (2 & a) {
          const i = p.$implicit,
            n = p.index,
            d = e.oxw();
          e.xp6(1),
            e.ekj('active', n === d.activeTabIndex)('disabled', i.isDisabled),
            e.Q6J('ngClass', e.WLB(8, _, 'lg' === d.size, 'sm' === d.size)),
            e.xp6(2),
            e.Q6J('ngIf', i.icon),
            e.xp6(1),
            e.hij(' ', i.title, ' '),
            e.xp6(1),
            e.Q6J('ngIf', i.iconRight);
        }
      }
      function r(a, p) {
        1 & a &&
          (e.TgZ(0, 'div', 11)(1, 'button', 12)(2, 'span', 10),
          e._uU(3, 'arrow_back_ios'),
          e.qZA()(),
          e.TgZ(4, 'button', 13)(5, 'span', 10),
          e._uU(6, 'arrow_forward_ios'),
          e.qZA()()());
      }
      let h = (() => {
        class a {
          constructor(i, n, d) {
            (this.viewContainerRef = i),
              (this.renderer = n),
              (this.cdr = d),
              (this.navTabsItems = []),
              (this.isFixedWidth = !1),
              (this.isItemsRounded = !1),
              (this.isItemsRoundedLight = !1),
              (this.size = 'md'),
              (this.isSlidered = !1),
              (this.customClasses = ''),
              (this.activeTabComponentRef = null),
              (this.activeTabIndex = null),
              (this.isDragging = !1),
              (this.dragStartPositionX = 0);
          }
          ngAfterViewInit() {
            const i = this.navTabsItems.findIndex((d) => d.isActive);
            -1 !== i && this.activateTab(i), this.cdr.detectChanges();
            const n = this.tabsListRef.nativeElement.parentElement.querySelectorAll('.icon');
            n.length >= 2 &&
              (n[0].addEventListener('click', () => this.handleArrowClick('left')),
              n[1].addEventListener('click', () => this.handleArrowClick('right')));
          }
          handleArrowClick(i) {
            const d = this.tabsListRef.nativeElement.scrollLeft + ('left' === i ? -340 : 340);
            this.tabsListRef.nativeElement.scrollTo({ left: d, behavior: 'smooth' }), this.handleIcons(d);
          }
          activateTab(i) {
            this.navTabsItems[i].isDisabled ||
              (null !== this.activeTabIndex && (this.navTabsItems[this.activeTabIndex].isActive = !1),
              (this.activeTabIndex = i),
              (this.navTabsItems[i].isActive = !0),
              this.activeTabComponentRef && this.activeTabComponentRef.destroy(),
              (this.activeTabComponentRef = this.navTabsItems[i].child
                ? this.viewContainerRef.createComponent(this.navTabsItems[i].child)
                : null));
          }
          handleTabClick(i, n) {
            this.activateTab(i);
          }
          handleTabKeyup(i, n) {
            'Enter' === i.key && this.activateTab(n);
          }
          onMouseDown(i) {
            i.target.classList.contains('material-icons-round') ||
              ((this.isDragging = !0),
              (this.dragStartPositionX = i.clientX),
              this.renderer.addClass(this.tabsListRef.nativeElement, 'dragging'),
              this.renderer.setStyle(this.tabsListRef.nativeElement, 'cursor', 'grabbing'),
              this.renderer.setStyle(document.body, 'user-select', 'none'));
          }
          onMouseLeave() {
            this.isDragging &&
              ((this.isDragging = !1), this.renderer.removeClass(this.tabsListRef.nativeElement, 'dragging'));
          }
          onMouseMove(i) {
            if (this.isDragging) {
              const n = i.clientX - this.dragStartPositionX;
              (this.dragStartPositionX = i.clientX),
                this.renderer.setProperty(
                  this.tabsListRef.nativeElement,
                  'scrollLeft',
                  this.tabsListRef.nativeElement.scrollLeft - n
                ),
                this.handleIcons(this.tabsListRef.nativeElement.scrollLeft),
                i.preventDefault();
            }
          }
          onMouseUp() {
            (this.isDragging = !1),
              this.renderer.removeClass(this.tabsListRef.nativeElement, 'dragging'),
              this.renderer.removeStyle(this.tabsListRef.nativeElement, 'cursor'),
              this.renderer.removeStyle(document.body, 'user-select');
          }
          handleIcons(i) {
            const n = this.tabsListRef.nativeElement.parentElement.querySelectorAll('.icon'),
              d = this.tabsListRef.nativeElement.scrollWidth - this.tabsListRef.nativeElement.clientWidth;
            n[0] && (n[0].style.display = i <= 0 ? 'none' : 'flex'),
              n[1] && (n[1].style.display = d - i <= 1 ? 'none' : 'flex');
          }
          ngOnDestroy() {
            this.activeTabComponentRef && this.activeTabComponentRef.destroy();
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)(e.Y36(e.s_b), e.Y36(e.Qsj), e.Y36(e.sBO));
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-tabs']],
            viewQuery: function (i, n) {
              if ((1 & i && (e.Gf(q, 5, e.s_b), e.Gf(I, 5)), 2 & i)) {
                let d;
                e.iGM((d = e.CRH())) && (n.tabContentContainer = d.first),
                  e.iGM((d = e.CRH())) && (n.tabsListRef = d.first);
              }
            },
            hostBindings: function (i, n) {
              1 & i &&
                e.NdJ('mousedown', function (O) {
                  return n.onMouseDown(O);
                })('mouseleave', function () {
                  return n.onMouseLeave();
                })('mousemove', function (O) {
                  return n.onMouseMove(O);
                })('mouseup', function () {
                  return n.onMouseUp();
                });
            },
            inputs: {
              navTabsItems: 'navTabsItems',
              isFixedWidth: 'isFixedWidth',
              isItemsRounded: 'isItemsRounded',
              isItemsRoundedLight: 'isItemsRoundedLight',
              size: 'size',
              isSlidered: 'isSlidered',
              customClasses: 'customClasses'
            },
            decls: 5,
            vars: 13,
            consts: [
              ['aria-label', 'Navegaci\xf3n por pesta\xf1as', 3, 'ngClass'],
              [1, 'nav', 'nav-pills', 'tabs'],
              ['tabsList', ''],
              ['class', 'nav-item', 4, 'ngFor', 'ngForOf'],
              ['class', 'icons-container', 4, 'ngIf'],
              [1, 'nav-item'],
              ['tabindex', '0', 1, 'nav-link', 3, 'ngClass', 'click', 'keyup'],
              [1, 'nav-icon'],
              [4, 'ngIf'],
              [3, 'ngClass'],
              [1, 'material-icons-round'],
              [1, 'icons-container'],
              ['type', 'button', 'id', 'left', 1, 'right-left', 'icon'],
              ['type', 'button', 'id', 'right', 1, 'right-left', 'icon']
            ],
            template: function (i, n) {
              1 & i &&
                (e.TgZ(0, 'nav', 0)(1, 'ul', 1, 2),
                e.YNc(3, s, 6, 11, 'li', 3),
                e.qZA(),
                e.YNc(4, r, 7, 0, 'div', 4),
                e.qZA()),
                2 & i &&
                  (e.ekj('tabs-slider', !0)('px-0', !n.isSlidered),
                  e.Q6J('ngClass', n.customClasses),
                  e.xp6(1),
                  e.ekj('nav-box', n.isItemsRounded)('nav-box-bg', n.isItemsRoundedLight)('fixedWidth', n.isFixedWidth),
                  e.xp6(2),
                  e.Q6J('ngForOf', n.navTabsItems),
                  e.xp6(1),
                  e.Q6J('ngIf', n.isSlidered));
            },
            dependencies: [t.mk, t.sg, t.O5]
          })),
          a
        );
      })();
      var Z = c(4948),
        w = c(2171);
      const S = [
        { path: 'api', component: A },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.navigationTabsComponent = u.iH),
                  (this.simpleIcon = u.pT),
                  (this.simpleHTML = u.Yb),
                  (this.simpleHTMLIcon = u.Q_),
                  (this.simpleHTMLFixedWidth = u.DL),
                  (this.simpleHTMLSlider = u.jq),
                  (this.sizesHTML = u.mT),
                  (this.exampleTs = u.Es),
                  (this.exmapleTsIcon = u.hU);
              }
            }
            return (
              (a.ɵfac = function (i) {
                return new (i || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-navigation-tabs-examples']],
                decls: 225,
                vars: 77,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Simple', 3, 'isNavCode'],
                  ['component', ''],
                  [3, 'navTabsItems'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript'],
                  ['title', 'Simple con icono', 3, 'isNavCode'],
                  ['title', 'Ancho completo', 3, 'isNavCode'],
                  [3, 'navTabsItems', 'isFixedWidth'],
                  ['title', 'Desplazable', 3, 'isNavCode'],
                  [3, 'navTabsItems', 'isFixedWidth', 'isSlidered'],
                  ['title', 'Simple gris', 3, 'isNavCode'],
                  [3, 'navTabsItems', 'isItemsRounded'],
                  ['component', '', 1, 'content'],
                  [3, 'navTabsItems', 'isItemsRounded', 'isFixedWidth'],
                  [3, 'navTabsItems', 'isItemsRounded', 'isFixedWidth', 'isSlidered'],
                  ['title', 'Simple con fondo', 3, 'isNavCode'],
                  ['component', '', 1, 'wrapper-bg', 'bg-light'],
                  [3, 'navTabsItems', 'isItemsRoundedLight'],
                  [3, 'navTabsItems', 'isItemsRoundedLight', 'isFixedWidth'],
                  [3, 'navTabsItems', 'isItemsRoundedLight', 'isFixedWidth', 'isSlidered'],
                  ['title', 'Tama\xf1os', 3, 'isNavCode'],
                  ['component', '', 1, 'option-container'],
                  ['component', '', 1, 'mb-5'],
                  [1, 'mb-5'],
                  [3, 'navTabsItems', 'size', 'isFixedWidth'],
                  [3, 'navTabsItems', 'size', 'isFixedWidth', 'isItemsRounded'],
                  [3, 'navTabsItems', 'isFixedWidth', 'isItemsRounded'],
                  ['appPrism', '']
                ],
                template: function (i, n) {
                  1 & i &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-tabs', 3),
                    e.qZA(),
                    e.TgZ(4, 'pre', 4),
                    e._uU(5, '        '),
                    e.TgZ(6, 'button', 5),
                    e._uU(7, 'Copiar'),
                    e.qZA(),
                    e._uU(8, '\n        '),
                    e.TgZ(9, 'code', 6),
                    e._uU(10),
                    e.qZA(),
                    e._uU(11, '\n      '),
                    e.qZA(),
                    e.TgZ(12, 'pre', 7),
                    e._uU(13, '        '),
                    e.TgZ(14, 'button', 5),
                    e._uU(15, 'Copiar'),
                    e.qZA(),
                    e._uU(16, '\n        '),
                    e.TgZ(17, 'code', 8),
                    e._uU(18),
                    e.qZA(),
                    e._uU(19, '\n      '),
                    e.qZA()(),
                    e.TgZ(20, 'app-viewer', 9)(21, 'div', 2),
                    e._UZ(22, 'o-tabs', 3),
                    e.qZA(),
                    e.TgZ(23, 'pre', 4),
                    e._uU(24, '        '),
                    e.TgZ(25, 'button', 5),
                    e._uU(26, 'Copiar'),
                    e.qZA(),
                    e._uU(27, '\n        '),
                    e.TgZ(28, 'code', 6),
                    e._uU(29),
                    e.qZA(),
                    e._uU(30, '\n      '),
                    e.qZA(),
                    e.TgZ(31, 'pre', 7),
                    e._uU(32, '        '),
                    e.TgZ(33, 'button', 5),
                    e._uU(34, 'Copiar'),
                    e.qZA(),
                    e._uU(35, '\n        '),
                    e.TgZ(36, 'code', 8),
                    e._uU(37),
                    e.qZA(),
                    e._uU(38, '\n      '),
                    e.qZA()(),
                    e.TgZ(39, 'app-viewer', 10)(40, 'div', 2),
                    e._UZ(41, 'o-tabs', 11),
                    e.qZA(),
                    e.TgZ(42, 'pre', 4),
                    e._uU(43, '        '),
                    e.TgZ(44, 'button', 5),
                    e._uU(45, 'Copiar'),
                    e.qZA(),
                    e._uU(46, '\n        '),
                    e.TgZ(47, 'code', 6),
                    e._uU(48),
                    e.qZA(),
                    e._uU(49, '\n      '),
                    e.qZA(),
                    e.TgZ(50, 'pre', 7),
                    e._uU(51, '        '),
                    e.TgZ(52, 'button', 5),
                    e._uU(53, 'Copiar'),
                    e.qZA(),
                    e._uU(54, '\n        '),
                    e.TgZ(55, 'code', 8),
                    e._uU(56),
                    e.qZA(),
                    e._uU(57, '\n      '),
                    e.qZA()(),
                    e.TgZ(58, 'app-viewer', 12)(59, 'div', 2),
                    e._UZ(60, 'o-tabs', 13),
                    e.qZA(),
                    e.TgZ(61, 'pre', 4),
                    e._uU(62, '        '),
                    e.TgZ(63, 'button', 5),
                    e._uU(64, 'Copiar'),
                    e.qZA(),
                    e._uU(65, '\n        '),
                    e.TgZ(66, 'code', 6),
                    e._uU(67),
                    e.qZA(),
                    e._uU(68, '\n      '),
                    e.qZA(),
                    e.TgZ(69, 'pre', 7),
                    e._uU(70, '        '),
                    e.TgZ(71, 'button', 5),
                    e._uU(72, 'Copiar'),
                    e.qZA(),
                    e._uU(73, '\n        '),
                    e.TgZ(74, 'code', 8),
                    e._uU(75),
                    e.qZA(),
                    e._uU(76, '\n      '),
                    e.qZA()(),
                    e.TgZ(77, 'app-viewer', 14)(78, 'div', 2),
                    e._UZ(79, 'o-tabs', 15),
                    e.qZA(),
                    e.TgZ(80, 'div', 16),
                    e._UZ(81, 'router-outlet'),
                    e.qZA(),
                    e.TgZ(82, 'pre', 4),
                    e._uU(83, '        '),
                    e.TgZ(84, 'button', 5),
                    e._uU(85, 'Copiar'),
                    e.qZA(),
                    e._uU(86, '\n        '),
                    e.TgZ(87, 'code', 6),
                    e._uU(88),
                    e.qZA(),
                    e._uU(89, '\n      '),
                    e.qZA(),
                    e.TgZ(90, 'pre', 7),
                    e._uU(91, '        '),
                    e.TgZ(92, 'button', 5),
                    e._uU(93, 'Copiar'),
                    e.qZA(),
                    e._uU(94, '\n        '),
                    e.TgZ(95, 'code', 8),
                    e._uU(96),
                    e.qZA(),
                    e._uU(97, '\n      '),
                    e.qZA()(),
                    e.TgZ(98, 'app-viewer', 10)(99, 'div', 2),
                    e._UZ(100, 'o-tabs', 17),
                    e.qZA(),
                    e.TgZ(101, 'pre', 4),
                    e._uU(102, '        '),
                    e.TgZ(103, 'button', 5),
                    e._uU(104, 'Copiar'),
                    e.qZA(),
                    e._uU(105, '\n        '),
                    e.TgZ(106, 'code', 6),
                    e._uU(107),
                    e.qZA(),
                    e._uU(108, '\n      '),
                    e.qZA(),
                    e.TgZ(109, 'pre', 7),
                    e._uU(110, '        '),
                    e.TgZ(111, 'button', 5),
                    e._uU(112, 'Copiar'),
                    e.qZA(),
                    e._uU(113, '\n        '),
                    e.TgZ(114, 'code', 8),
                    e._uU(115),
                    e.qZA(),
                    e._uU(116, '\n      '),
                    e.qZA()(),
                    e.TgZ(117, 'app-viewer', 12)(118, 'div', 2),
                    e._UZ(119, 'o-tabs', 18),
                    e.qZA(),
                    e.TgZ(120, 'pre', 4),
                    e._uU(121, '        '),
                    e.TgZ(122, 'button', 5),
                    e._uU(123, 'Copiar'),
                    e.qZA(),
                    e._uU(124, '\n        '),
                    e.TgZ(125, 'code', 6),
                    e._uU(126),
                    e.qZA(),
                    e._uU(127, '\n      '),
                    e.qZA(),
                    e.TgZ(128, 'pre', 7),
                    e._uU(129, '        '),
                    e.TgZ(130, 'button', 5),
                    e._uU(131, 'Copiar'),
                    e.qZA(),
                    e._uU(132, '\n        '),
                    e.TgZ(133, 'code', 8),
                    e._uU(134),
                    e.qZA(),
                    e._uU(135, '\n      '),
                    e.qZA()(),
                    e.TgZ(136, 'app-viewer', 19)(137, 'div', 20),
                    e._UZ(138, 'o-tabs', 21),
                    e.qZA(),
                    e.TgZ(139, 'pre', 4),
                    e._uU(140, '        '),
                    e.TgZ(141, 'button', 5),
                    e._uU(142, 'Copiar'),
                    e.qZA(),
                    e._uU(143, '\n        '),
                    e.TgZ(144, 'code', 6),
                    e._uU(145),
                    e.qZA(),
                    e._uU(146, '\n      '),
                    e.qZA(),
                    e.TgZ(147, 'pre', 7),
                    e._uU(148, '        '),
                    e.TgZ(149, 'button', 5),
                    e._uU(150, 'Copiar'),
                    e.qZA(),
                    e._uU(151, '\n        '),
                    e.TgZ(152, 'code', 8),
                    e._uU(153),
                    e.qZA(),
                    e._uU(154, '\n      '),
                    e.qZA()(),
                    e.TgZ(155, 'app-viewer', 10)(156, 'div', 20),
                    e._UZ(157, 'o-tabs', 22),
                    e.qZA(),
                    e.TgZ(158, 'pre', 4),
                    e._uU(159, '        '),
                    e.TgZ(160, 'button', 5),
                    e._uU(161, 'Copiar'),
                    e.qZA(),
                    e._uU(162, '\n        '),
                    e.TgZ(163, 'code', 6),
                    e._uU(164),
                    e.qZA(),
                    e._uU(165, '\n      '),
                    e.qZA(),
                    e.TgZ(166, 'pre', 7),
                    e._uU(167, '        '),
                    e.TgZ(168, 'button', 5),
                    e._uU(169, 'Copiar'),
                    e.qZA(),
                    e._uU(170, '\n        '),
                    e.TgZ(171, 'code', 8),
                    e._uU(172),
                    e.qZA(),
                    e._uU(173, '\n      '),
                    e.qZA()(),
                    e.TgZ(174, 'app-viewer', 12)(175, 'div', 20),
                    e._UZ(176, 'o-tabs', 23),
                    e.qZA(),
                    e.TgZ(177, 'pre', 4),
                    e._uU(178, '        '),
                    e.TgZ(179, 'button', 5),
                    e._uU(180, 'Copiar'),
                    e.qZA(),
                    e._uU(181, '\n        '),
                    e.TgZ(182, 'code', 6),
                    e._uU(183),
                    e.qZA(),
                    e._uU(184, '\n      '),
                    e.qZA(),
                    e.TgZ(185, 'pre', 7),
                    e._uU(186, '        '),
                    e.TgZ(187, 'button', 5),
                    e._uU(188, 'Copiar'),
                    e.qZA(),
                    e._uU(189, '\n        '),
                    e.TgZ(190, 'code', 8),
                    e._uU(191),
                    e.qZA(),
                    e._uU(192, '\n      '),
                    e.qZA()(),
                    e.TgZ(193, 'app-viewer', 24)(194, 'div', 25)(195, 'form', 26)(196, 'div', 27),
                    e._UZ(197, 'o-tabs', 28),
                    e.qZA(),
                    e.TgZ(198, 'div', 27),
                    e._UZ(199, 'o-tabs', 11),
                    e.qZA(),
                    e.TgZ(200, 'div', 27),
                    e._UZ(201, 'o-tabs', 28),
                    e.qZA()(),
                    e.TgZ(202, 'form', 2)(203, 'div', 27),
                    e._UZ(204, 'o-tabs', 29),
                    e.qZA(),
                    e.TgZ(205, 'div', 27),
                    e._UZ(206, 'o-tabs', 30),
                    e.qZA(),
                    e.TgZ(207, 'div', 27),
                    e._UZ(208, 'o-tabs', 29),
                    e.qZA()()(),
                    e.TgZ(209, 'pre', 4),
                    e._uU(210, '        '),
                    e.TgZ(211, 'button', 5),
                    e._uU(212, 'Copiar'),
                    e.qZA(),
                    e._uU(213, '\n        '),
                    e.TgZ(214, 'code', 6),
                    e._uU(215),
                    e.qZA(),
                    e._uU(216, '\n      '),
                    e.qZA(),
                    e.TgZ(217, 'pre', 7),
                    e._uU(218, '        '),
                    e.TgZ(219, 'button', 5),
                    e._uU(220, 'Copiar'),
                    e.qZA(),
                    e._uU(221, '\n        '),
                    e.TgZ(222, 'code', 31),
                    e._uU(223),
                    e.qZA(),
                    e._uU(224, '\n      '),
                    e.qZA()()()),
                    2 & i &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.simpleIcon),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTMLIcon, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exmapleTsIcon, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isFixedWidth', !0),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTMLFixedWidth, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isFixedWidth', !0)('isSlidered', !0),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTMLSlider, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isItemsRounded', !0),
                      e.xp6(9),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isItemsRounded', !0)('isFixedWidth', !0),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isItemsRounded', !0)('isFixedWidth', !0)(
                        'isSlidered',
                        !0
                      ),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isItemsRoundedLight', !0),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isItemsRoundedLight', !0)('isFixedWidth', !0),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isItemsRoundedLight', !0)('isFixedWidth', !0)(
                        'isSlidered',
                        !0
                      ),
                      e.xp6(7),
                      e.hij('\n          ', n.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(4),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('size', 'sm')('isFixedWidth', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isFixedWidth', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('size', 'lg')('isFixedWidth', !0),
                      e.xp6(3),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('size', 'sm')('isFixedWidth', !0)(
                        'isItemsRounded',
                        !0
                      ),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('isFixedWidth', !0)('isItemsRounded', !0),
                      e.xp6(2),
                      e.Q6J('navTabsItems', n.navigationTabsComponent)('size', 'lg')('isFixedWidth', !0)(
                        'isItemsRounded',
                        !0
                      ),
                      e.xp6(7),
                      e.hij('\n          ', n.sizesHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', n.exampleTs, '\n        '));
                },
                dependencies: [o.lC, h, Z.B, w.y, U.y],
                styles: ['.wrapper-bg[_ngcontent-%COMP%]{background-color:#f3f6f9;padding:2.5rem}']
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let y = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [o.Bz.forChild(S), o.Bz] })),
          a
        );
      })();
      var Q = c(7538),
        J = c(2089),
        R = c(9384);
      let N = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, y, Q.Z, J.Z, Z.B, R.T] })),
          a
        );
      })();
    }
  }
]);
