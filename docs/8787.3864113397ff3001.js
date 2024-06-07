'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [8787],
  {
    4883: (U, T, s) => {
      s.d(T, { L: () => h });
      var t = s(4893),
        o = s(2313),
        C = s(9808);
      const c = ['checkbox'];
      function e(i, m) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (r) {
              t.CHM(n);
              const p = t.oxw(2);
              return t.KtG(p.onHeaderCheckboxChange(r));
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
      function v(i, m) {
        if ((1 & i && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & i)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function x(i, m) {
        if ((1 & i && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & i)) {
          const n = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function f(i, m) {
        if (1 & i) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (r) {
              t.CHM(n);
              const p = t.oxw().$implicit,
                l = t.oxw(2);
              return t.KtG(l.onCheckboxChange(p, r));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & i) {
          const n = t.oxw().index,
            a = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', a.id, '-checkbox_', n, '')('name', '', a.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', a.id, '-checkbox_', n, '');
        }
      }
      function b(i, m) {
        if ((1 & i && t._UZ(0, 'div', 14), 2 & i)) {
          const n = t.oxw().$implicit,
            a = t.oxw().$implicit,
            r = t.oxw(2);
          t.Q6J('innerHTML', r.sanitizeHTML(a[n.key].data), t.oJD);
        }
      }
      function Z(i, m) {
        if ((1 & i && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, b, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & i)) {
          const n = m.$implicit,
            a = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', a[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', a[n.key].data);
        }
      }
      function u(i, m) {
        if (
          (1 & i && (t.TgZ(0, 'tr'), t.YNc(1, f, 5, 6, 'td', 9), t.YNc(2, Z, 3, 2, 'ng-container', 4), t.qZA()), 2 & i)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const g = function (i, m) {
        return { 'table-borderless': i, 'table-striped': m };
      };
      function d(i, m) {
        if (
          (1 & i &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, v, 2, 2, 'th', 3),
            t.YNc(5, x, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & i)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, g, !n.isBordered, n.isStriped)),
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
      const _ = function (i) {
        return { 'responsive-scroll': i };
      };
      let h = (() => {
        class i {
          constructor(n, a) {
            (this.renderer = n),
              (this.sanitizer = a),
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
            const a = n.target;
            if (a) {
              const r = a.checked;
              this.checkboxRef.toArray().forEach((p) => {
                p.nativeElement.checked = r;
              }),
                (this.dataSelected = r ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, a) {
            if (a && a.target && 'boolean' == typeof a.target.checked) {
              if (a.target.checked) this.dataSelected.push(n);
              else {
                const p = this.dataSelected.findIndex((l) => l === n);
                -1 !== p && this.dataSelected.splice(p, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (i.ɵfac = function (n) {
            return new (n || i)(t.Y36(t.Qsj), t.Y36(o.H7));
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [['o-table']],
            viewQuery: function (n, a) {
              if ((1 & n && t.Gf(c, 5), 2 & n)) {
                let r;
                t.iGM((r = t.CRH())) && (a.checkboxRef = r);
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
            template: function (n, a) {
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, d, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(a.customClasses),
                  t.Q6J('ngClass', t.VKq(4, _, a.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', a.isValidateComponent));
            },
            dependencies: [C.mk, C.sg, C.O5]
          })),
          i
        );
      })();
    },
    2089: (U, T, s) => {
      s.d(T, { Z: () => C });
      var t = s(9808),
        o = s(4893);
      let C = (() => {
        class c {}
        return (
          (c.ɵfac = function (v) {
            return new (v || c)();
          }),
          (c.ɵmod = o.oAB({ type: c })),
          (c.ɵinj = o.cJS({ imports: [t.ez] })),
          c
        );
      })();
    },
    4948: (U, T, s) => {
      s.d(T, { B: () => Z });
      var t = s(9808),
        o = s(4893);
      function C(u, g) {
        if (1 & u) {
          const d = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(d);
              const h = o.oxw();
              return o.KtG((h.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(d);
              const h = o.oxw();
              return o.KtG((h.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & u) {
          const d = o.oxw();
          o.xp6(3), o.ekj('active', d.isWindowHTML), o.xp6(3), o.ekj('active', !d.isWindowHTML);
        }
      }
      function c(u, g) {
        1 & u && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function e(u, g) {
        1 & u && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function v(u, g) {
        if ((1 & u && o.YNc(0, e, 2, 0, 'ng-container', 7), 2 & u)) {
          const d = o.oxw(),
            _ = o.MAs(16);
          o.Q6J('ngIf', d.isWindowHTML)('ngIfElse', _);
        }
      }
      function x(u, g) {
        1 & u && o.Hsn(0, 2);
      }
      const f = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        b = ['[component]', '[component-html]', '[component-ts]'];
      let Z = (() => {
        class u {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (u.ɵfac = function (d) {
            return new (d || u)();
          }),
          (u.ɵcmp = o.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [o.jDz],
            ngContentSelectors: b,
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
            template: function (d, _) {
              if (
                (1 & d &&
                  (o.F$t(f),
                  o.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  o._uU(3),
                  o.qZA(),
                  o.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  o.NdJ('click', function () {
                    return (_.isOpenCode = !_.isOpenCode);
                  }),
                  o.TgZ(8, 'span'),
                  o._uU(9),
                  o.qZA()()()()()(),
                  o.TgZ(10, 'div', 5),
                  o.YNc(11, C, 8, 4, 'nav', 6),
                  o.YNc(12, c, 2, 0, 'ng-container', 7),
                  o.YNc(13, v, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, x, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & d)
              ) {
                const h = o.MAs(14);
                o.xp6(3),
                  o.Oqu(_.title),
                  o.xp6(4),
                  o.ekj('active', _.isOpenCode),
                  o.xp6(2),
                  o.Oqu(_.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', _.isOpenCode && _.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !_.isOpenCode)('ngIfElse', h);
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
    8787: (U, T, s) => {
      s.r(T), s.d(T, { NavigationVerticalModule: () => n });
      var t = s(9808),
        o = s(2526),
        C = s(5570),
        c = s(45),
        e = s(4893),
        v = s(4883),
        x = s(6434);
      let f = (() => {
        class a {
          constructor() {
            (this.columns = C.L0),
              (this.dataSourceNavigationVertical = c.bY),
              (this.dataSourceInterface = c.M9),
              (this.exampleIterface = c.zJ);
          }
        }
        return (
          (a.ɵfac = function (p) {
            return new (p || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-navigation-vertical-api']],
            decls: 43,
            vars: 9,
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
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped']
            ],
            template: function (p, l) {
              1 & p &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Navegacion vertical de Obelisco'),
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
                e._uU(13, 'ONavVertical'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-nav-vertical'),
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
                e._uU(27, 'NavVerticalItems'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'navVertItems'),
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
                e.qZA()()()()),
                2 & p &&
                  (e.xp6(21),
                  e.Q6J('columns', l.columns)('dataSource', l.dataSourceNavigationVertical)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(16),
                  e.Oqu(l.exampleIterface),
                  e.xp6(5),
                  e.Q6J('dataSource', l.dataSourceInterface)('columns', l.columns)('isBordered', !0)('isStriped', !0));
            },
            dependencies: [v.L, x.y]
          })),
          a
        );
      })();
      var b = s(851),
        Z = s(4948),
        u = s(2171);
      const d = [
        { path: 'api', component: f },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.navigationSimpleComponent = c.Lk),
                  (this.navigationSimpleIconComponent = c.Zf),
                  (this.levelTwoComponent = c.Et),
                  (this.levelTwoIconComponent = c.hd),
                  (this.levelThreeComponent = c.xS),
                  (this.levelThreeIconComponent = c.t6),
                  (this.simpleHTML = c.Vf),
                  (this.exampleTs = c.ml),
                  (this.exampleTsIcon = c.eD),
                  (this.exampleTsTwo = c.HT),
                  (this.exampleTsTwoIcon = c.DN),
                  (this.exampleTsThree = c.uv),
                  (this.exampleTsThreeIcon = c.sb);
              }
            }
            return (
              (a.ɵfac = function (p) {
                return new (p || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-navigation-vertical-examples']],
                decls: 109,
                vars: 24,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Simple', 3, 'isNavCode'],
                  ['component', '', 3, 'navVertItems'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Simple con icono', 3, 'isNavCode'],
                  ['title', 'Con dos niveles', 3, 'isNavCode'],
                  ['appPrism', '', 'language', 'javascript'],
                  ['title', 'Con dos niveles e icono', 3, 'isNavCode'],
                  ['title', 'Con tres niveles', 3, 'isNavCode'],
                  ['title', 'Con tres niveles e icono', 3, 'isNavCode']
                ],
                template: function (p, l) {
                  1 & p &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1),
                    e._UZ(2, 'o-nav-vertical', 2),
                    e.TgZ(3, 'pre', 3),
                    e._uU(4, '          '),
                    e.TgZ(5, 'button', 4),
                    e._uU(6, 'Copiar'),
                    e.qZA(),
                    e._uU(7, '\n          '),
                    e.TgZ(8, 'code', 5),
                    e._uU(9),
                    e.qZA(),
                    e._uU(10, '\n        '),
                    e.qZA(),
                    e.TgZ(11, 'pre', 6),
                    e._uU(12, '          '),
                    e.TgZ(13, 'button', 4),
                    e._uU(14, 'Copiar'),
                    e.qZA(),
                    e._uU(15, '\n          '),
                    e.TgZ(16, 'code', 7),
                    e._uU(17),
                    e.qZA(),
                    e._uU(18, '\n        '),
                    e.qZA()(),
                    e.TgZ(19, 'app-viewer', 8),
                    e._UZ(20, 'o-nav-vertical', 2),
                    e.TgZ(21, 'pre', 3),
                    e._uU(22, '          '),
                    e.TgZ(23, 'button', 4),
                    e._uU(24, 'Copiar'),
                    e.qZA(),
                    e._uU(25, '\n          '),
                    e.TgZ(26, 'code', 5),
                    e._uU(27),
                    e.qZA(),
                    e._uU(28, '\n        '),
                    e.qZA(),
                    e.TgZ(29, 'pre', 6),
                    e._uU(30, '          '),
                    e.TgZ(31, 'button', 4),
                    e._uU(32, 'Copiar'),
                    e.qZA(),
                    e._uU(33, '\n          '),
                    e.TgZ(34, 'code', 7),
                    e._uU(35),
                    e.qZA(),
                    e._uU(36, '\n        '),
                    e.qZA()(),
                    e.TgZ(37, 'app-viewer', 9),
                    e._UZ(38, 'o-nav-vertical', 2),
                    e.TgZ(39, 'pre', 3),
                    e._uU(40, '          '),
                    e.TgZ(41, 'button', 4),
                    e._uU(42, 'Copiar'),
                    e.qZA(),
                    e._uU(43, '\n          '),
                    e.TgZ(44, 'code', 5),
                    e._uU(45),
                    e.qZA(),
                    e._uU(46, '\n        '),
                    e.qZA(),
                    e.TgZ(47, 'pre', 6),
                    e._uU(48, '          '),
                    e.TgZ(49, 'button', 4),
                    e._uU(50, 'Copiar'),
                    e.qZA(),
                    e._uU(51, '\n          '),
                    e.TgZ(52, 'code', 10),
                    e._uU(53),
                    e.qZA(),
                    e._uU(54, '\n        '),
                    e.qZA()(),
                    e.TgZ(55, 'app-viewer', 11),
                    e._UZ(56, 'o-nav-vertical', 2),
                    e.TgZ(57, 'pre', 3),
                    e._uU(58, '          '),
                    e.TgZ(59, 'button', 4),
                    e._uU(60, 'Copiar'),
                    e.qZA(),
                    e._uU(61, '\n          '),
                    e.TgZ(62, 'code', 5),
                    e._uU(63),
                    e.qZA(),
                    e._uU(64, '\n        '),
                    e.qZA(),
                    e.TgZ(65, 'pre', 6),
                    e._uU(66, '          '),
                    e.TgZ(67, 'button', 4),
                    e._uU(68, 'Copiar'),
                    e.qZA(),
                    e._uU(69, '\n          '),
                    e.TgZ(70, 'code', 10),
                    e._uU(71),
                    e.qZA(),
                    e._uU(72, '\n        '),
                    e.qZA()(),
                    e.TgZ(73, 'app-viewer', 12),
                    e._UZ(74, 'o-nav-vertical', 2),
                    e.TgZ(75, 'pre', 3),
                    e._uU(76, '          '),
                    e.TgZ(77, 'button', 4),
                    e._uU(78, 'Copiar'),
                    e.qZA(),
                    e._uU(79, '\n          '),
                    e.TgZ(80, 'code', 5),
                    e._uU(81),
                    e.qZA(),
                    e._uU(82, '\n        '),
                    e.qZA(),
                    e.TgZ(83, 'pre', 6),
                    e._uU(84, '          '),
                    e.TgZ(85, 'button', 4),
                    e._uU(86, 'Copiar'),
                    e.qZA(),
                    e._uU(87, '\n          '),
                    e.TgZ(88, 'code', 10),
                    e._uU(89),
                    e.qZA(),
                    e._uU(90, '\n        '),
                    e.qZA()(),
                    e.TgZ(91, 'app-viewer', 13),
                    e._UZ(92, 'o-nav-vertical', 2),
                    e.TgZ(93, 'pre', 3),
                    e._uU(94, '          '),
                    e.TgZ(95, 'button', 4),
                    e._uU(96, 'Copiar'),
                    e.qZA(),
                    e._uU(97, '\n          '),
                    e.TgZ(98, 'code', 5),
                    e._uU(99),
                    e.qZA(),
                    e._uU(100, '\n        '),
                    e.qZA(),
                    e.TgZ(101, 'pre', 6),
                    e._uU(102, '          '),
                    e.TgZ(103, 'button', 4),
                    e._uU(104, 'Copiar'),
                    e.qZA(),
                    e._uU(105, '\n          '),
                    e.TgZ(106, 'code', 10),
                    e._uU(107),
                    e.qZA(),
                    e._uU(108, '\n        '),
                    e.qZA()()()),
                    2 & p &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navVertItems', l.navigationSimpleComponent),
                      e.xp6(7),
                      e.hij('\n            ', l.simpleHTML, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', l.exampleTs, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navVertItems', l.navigationSimpleIconComponent),
                      e.xp6(7),
                      e.hij('\n            ', l.simpleHTML, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', l.exampleTsIcon, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navVertItems', l.levelTwoComponent),
                      e.xp6(7),
                      e.hij('\n            ', l.simpleHTML, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', l.exampleTsTwo, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navVertItems', l.levelTwoIconComponent),
                      e.xp6(7),
                      e.hij('\n            ', l.simpleHTML, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', l.exampleTsTwoIcon, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navVertItems', l.levelThreeComponent),
                      e.xp6(7),
                      e.hij('\n            ', l.simpleHTML, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', l.exampleTsThree, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navVertItems', l.levelThreeIconComponent),
                      e.xp6(7),
                      e.hij('\n            ', l.simpleHTML, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', l.exampleTsThreeIcon, '\n          '));
                },
                dependencies: [b.F, Z.B, u.y, x.y]
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let _ = (() => {
        class a {}
        return (
          (a.ɵfac = function (p) {
            return new (p || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [o.Bz.forChild(d), o.Bz] })),
          a
        );
      })();
      var h = s(7538),
        i = s(2089),
        m = s(9384);
      let n = (() => {
        class a {}
        return (
          (a.ɵfac = function (p) {
            return new (p || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, _, h.Z, i.Z, Z.B, m.T] })),
          a
        );
      })();
    }
  }
]);
