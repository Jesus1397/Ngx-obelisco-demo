'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [6037],
  {
    3717: (A, C, a) => {
      a.d(C, { J: () => m });
      var e = a(9808),
        o = a(2526),
        u = a(4893);
      let m = (() => {
        class t {}
        return (
          (t.ɵfac = function (T) {
            return new (T || t)();
          }),
          (t.ɵmod = u.oAB({ type: t })),
          (t.ɵinj = u.cJS({ imports: [e.ez, o.Bz] })),
          t
        );
      })();
    },
    4883: (A, C, a) => {
      a.d(C, { L: () => b });
      var e = a(4893),
        o = a(2313),
        u = a(9808);
      const m = ['checkbox'];
      function t(i, r) {
        if (1 & i) {
          const n = e.EpF();
          e.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            e.NdJ('change', function (_) {
              e.CHM(n);
              const s = e.oxw(2);
              return e.KtG(s.onHeaderCheckboxChange(_));
            }),
            e.qZA(),
            e.TgZ(3, 'label', 8),
            e._uU(4),
            e.qZA()()();
        }
        if (2 & i) {
          const n = e.oxw(2);
          e.Q6J('ngClass', n.checkbox.customClassesTh),
            e.xp6(2),
            e.MGl('id', '', n.id, '-selectAllCheckbox')('name', '', n.id, '-selectAllCheckbox'),
            e.xp6(1),
            e.MGl('for', '', n.id, '-selectAllCheckbox'),
            e.Q6J('ngClass', n.checkbox.customClassesLabel),
            e.xp6(1),
            e.Oqu(n.checkbox.title);
        }
      }
      function x(i, r) {
        if ((1 & i && (e.TgZ(0, 'th', 5), e._uU(1), e.qZA()), 2 & i)) {
          const n = e.oxw(2);
          e.Q6J('ngClass', n.checkbox.customClassesTh), e.xp6(1), e.hij(' ', n.checkbox.title, ' ');
        }
      }
      function T(i, r) {
        if ((1 & i && (e.ynx(0), e.TgZ(1, 'th', 5), e._uU(2), e.qZA(), e.BQk()), 2 & i)) {
          const n = r.$implicit;
          e.xp6(1), e.Q6J('ngClass', n.customClasses), e.xp6(1), e.Oqu(n.value);
        }
      }
      function O(i, r) {
        if (1 & i) {
          const n = e.EpF();
          e.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            e.NdJ('change', function (_) {
              e.CHM(n);
              const s = e.oxw().$implicit,
                g = e.oxw(2);
              return e.KtG(g.onCheckboxChange(s, _));
            }),
            e.qZA(),
            e._UZ(4, 'label', 11),
            e.qZA()();
        }
        if (2 & i) {
          const n = e.oxw().index,
            c = e.oxw(2);
          e.xp6(2),
            e.hYB('id', '', c.id, '-checkbox_', n, '')('name', '', c.id, '-checkbox_', n, ''),
            e.xp6(2),
            e.hYB('for', '', c.id, '-checkbox_', n, '');
        }
      }
      function M(i, r) {
        if ((1 & i && e._UZ(0, 'div', 14), 2 & i)) {
          const n = e.oxw().$implicit,
            c = e.oxw().$implicit,
            _ = e.oxw(2);
          e.Q6J('innerHTML', _.sanitizeHTML(c[n.key].data), e.oJD);
        }
      }
      function v(i, r) {
        if ((1 & i && (e.ynx(0), e.TgZ(1, 'td', 12), e.YNc(2, M, 1, 1, 'div', 13), e.qZA(), e.BQk()), 2 & i)) {
          const n = r.$implicit,
            c = e.oxw().$implicit;
          e.xp6(1), e.Q6J('ngClass', c[n.key].customClasses), e.xp6(1), e.Q6J('ngIf', c[n.key].data);
        }
      }
      function l(i, r) {
        if (
          (1 & i && (e.TgZ(0, 'tr'), e.YNc(1, O, 5, 6, 'td', 9), e.YNc(2, v, 3, 2, 'ng-container', 4), e.qZA()), 2 & i)
        ) {
          const n = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', n.checkbox), e.xp6(1), e.Q6J('ngForOf', n.columns);
        }
      }
      const f = function (i, r) {
        return { 'table-borderless': i, 'table-striped': r };
      };
      function p(i, r) {
        if (
          (1 & i &&
            (e.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            e.YNc(3, t, 5, 6, 'th', 3),
            e.YNc(4, x, 2, 2, 'th', 3),
            e.YNc(5, T, 3, 2, 'ng-container', 4),
            e.qZA()(),
            e.TgZ(6, 'tbody'),
            e.YNc(7, l, 3, 2, 'tr', 4),
            e.qZA()()),
          2 & i)
        ) {
          const n = e.oxw();
          e.Q6J('ngClass', e.WLB(5, f, !n.isBordered, n.isStriped)),
            e.xp6(3),
            e.Q6J('ngIf', 1 == (null == n.checkbox ? null : n.checkbox.isAllSelectable)),
            e.xp6(1),
            e.Q6J('ngIf', 0 == (null == n.checkbox ? null : n.checkbox.isAllSelectable)),
            e.xp6(1),
            e.Q6J('ngForOf', n.columns),
            e.xp6(2),
            e.Q6J('ngForOf', n.dataSource);
        }
      }
      const d = function (i) {
        return { 'responsive-scroll': i };
      };
      let b = (() => {
        class i {
          constructor(n, c) {
            (this.renderer = n),
              (this.sanitizer = c),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new e.vpe()),
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
            const c = n.target;
            if (c) {
              const _ = c.checked;
              this.checkboxRef.toArray().forEach((s) => {
                s.nativeElement.checked = _;
              }),
                (this.dataSelected = _ ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, c) {
            if (c && c.target && 'boolean' == typeof c.target.checked) {
              if (c.target.checked) this.dataSelected.push(n);
              else {
                const s = this.dataSelected.findIndex((g) => g === n);
                -1 !== s && this.dataSelected.splice(s, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (i.ɵfac = function (n) {
            return new (n || i)(e.Y36(e.Qsj), e.Y36(o.H7));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['o-table']],
            viewQuery: function (n, c) {
              if ((1 & n && e.Gf(m, 5), 2 & n)) {
                let _;
                e.iGM((_ = e.CRH())) && (c.checkboxRef = _);
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
            template: function (n, c) {
              1 & n && (e.TgZ(0, 'div', 0), e.YNc(1, p, 8, 8, 'table', 1), e.qZA()),
                2 & n &&
                  (e.Tol(c.customClasses),
                  e.Q6J('ngClass', e.VKq(4, d, c.isScrollable)),
                  e.xp6(1),
                  e.Q6J('ngIf', c.isValidateComponent));
            },
            dependencies: [u.mk, u.sg, u.O5]
          })),
          i
        );
      })();
    },
    2089: (A, C, a) => {
      a.d(C, { Z: () => u });
      var e = a(9808),
        o = a(4893);
      let u = (() => {
        class m {}
        return (
          (m.ɵfac = function (x) {
            return new (x || m)();
          }),
          (m.ɵmod = o.oAB({ type: m })),
          (m.ɵinj = o.cJS({ imports: [e.ez] })),
          m
        );
      })();
    },
    4948: (A, C, a) => {
      a.d(C, { B: () => v });
      var e = a(9808),
        o = a(4893);
      function u(l, f) {
        if (1 & l) {
          const p = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(p);
              const b = o.oxw();
              return o.KtG((b.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(p);
              const b = o.oxw();
              return o.KtG((b.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & l) {
          const p = o.oxw();
          o.xp6(3), o.ekj('active', p.isWindowHTML), o.xp6(3), o.ekj('active', !p.isWindowHTML);
        }
      }
      function m(l, f) {
        1 & l && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function t(l, f) {
        1 & l && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function x(l, f) {
        if ((1 & l && o.YNc(0, t, 2, 0, 'ng-container', 7), 2 & l)) {
          const p = o.oxw(),
            d = o.MAs(16);
          o.Q6J('ngIf', p.isWindowHTML)('ngIfElse', d);
        }
      }
      function T(l, f) {
        1 & l && o.Hsn(0, 2);
      }
      const O = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        M = ['[component]', '[component-html]', '[component-ts]'];
      let v = (() => {
        class l {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (l.ɵfac = function (p) {
            return new (p || l)();
          }),
          (l.ɵcmp = o.Xpm({
            type: l,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [o.jDz],
            ngContentSelectors: M,
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
            template: function (p, d) {
              if (
                (1 & p &&
                  (o.F$t(O),
                  o.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  o._uU(3),
                  o.qZA(),
                  o.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  o.NdJ('click', function () {
                    return (d.isOpenCode = !d.isOpenCode);
                  }),
                  o.TgZ(8, 'span'),
                  o._uU(9),
                  o.qZA()()()()()(),
                  o.TgZ(10, 'div', 5),
                  o.YNc(11, u, 8, 4, 'nav', 6),
                  o.YNc(12, m, 2, 0, 'ng-container', 7),
                  o.YNc(13, x, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, T, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & p)
              ) {
                const b = o.MAs(14);
                o.xp6(3),
                  o.Oqu(d.title),
                  o.xp6(4),
                  o.ekj('active', d.isOpenCode),
                  o.xp6(2),
                  o.Oqu(d.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', d.isOpenCode && d.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !d.isOpenCode)('ngIfElse', b);
              }
            },
            dependencies: [e.ez, e.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          l
        );
      })();
    },
    6037: (A, C, a) => {
      a.r(C), a.d(C, { BadgeModule: () => _ });
      var e = a(9808),
        o = a(2526),
        u = a(763),
        m = a(5570),
        t = a(4893),
        x = a(6434),
        T = a(4883);
      let O = (() => {
        class s {
          constructor() {
            (this.dataSource = u.tc), (this.columns = m.L0), (this.colors = u.mg);
          }
        }
        return (
          (s.ɵfac = function (h) {
            return new (h || s)();
          }),
          (s.ɵcmp = t.Xpm({
            type: s,
            selectors: [['app-badge-api']],
            decls: 36,
            vars: 5,
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
                "import { OBadgeModule } from 'ngx-obelisco-example/badge';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface', 'mb-5'],
              ['appPrism', '']
            ],
            template: function (h, Z) {
              1 & h &&
                (t.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                t._uU(3, 'Referencia de API para el componente Badge de Obelisco'),
                t.qZA(),
                t.TgZ(4, 'pre', 2),
                t._uU(5, '        '),
                t._UZ(6, 'code', 3),
                t._uU(7, '\n    '),
                t.qZA()(),
                t.TgZ(8, 'h3'),
                t._uU(9, 'Etiqueta'),
                t.qZA(),
                t._UZ(10, 'hr'),
                t.TgZ(11, 'div', 4)(12, 'h4'),
                t._uU(13, 'OBadge'),
                t.qZA(),
                t.TgZ(14, 'p'),
                t._uU(15, 'Selector: '),
                t.TgZ(16, 'strong'),
                t._uU(17, 'o-badge'),
                t.qZA()(),
                t.TgZ(18, 'div', 5)(19, 'h5'),
                t._uU(20, 'Propiedades'),
                t.qZA(),
                t._UZ(21, 'o-table', 6),
                t.qZA(),
                t.TgZ(22, 'div', 7)(23, 'h4'),
                t._uU(24, 'BadgeTypes'),
                t.qZA(),
                t.TgZ(25, 'p'),
                t._uU(26, 'Permite establecer los valores de la propiedad '),
                t.TgZ(27, 'strong'),
                t._uU(28, 'type'),
                t.qZA(),
                t._uU(29, '.'),
                t.qZA(),
                t.TgZ(30, 'div', 8)(31, 'pre', 2),
                t._uU(32, '            '),
                t.TgZ(33, 'code', 9),
                t._uU(34),
                t.qZA(),
                t._uU(35, '\n        '),
                t.qZA()()()()()),
                2 & h &&
                  (t.xp6(21),
                  t.Q6J('columns', Z.columns)('dataSource', Z.dataSource)('isStriped', !0)('isBordered', !0),
                  t.xp6(13),
                  t.Oqu(Z.colors));
            },
            dependencies: [x.y, T.L]
          })),
          s
        );
      })();
      var M = a(4439),
        v = a(4948),
        l = a(2171);
      const p = [
        { path: 'api', component: O },
        {
          path: 'examples',
          component: (() => {
            class s {
              constructor() {
                (this.badgeTypes = u.fK), (this.badgeLink = u.wY);
              }
            }
            return (
              (s.ɵfac = function (h) {
                return new (h || s)();
              }),
              (s.ɵcmp = t.Xpm({
                type: s,
                selectors: [['app-badge-examples']],
                decls: 35,
                vars: 2,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Tipos'],
                  ['component', '', 1, 'mb-4', 'text-center'],
                  ['type', 'info'],
                  ['type', 'primary'],
                  ['type', 'success'],
                  ['type', 'danger'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['title', 'Con enlace'],
                  ['link', 'https://gcba.github.io/Obelisco'],
                  ['route', '#']
                ],
                template: function (h, Z) {
                  1 & h &&
                    (t.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'o-badge'),
                    t._uU(4, 'Etiqueta'),
                    t.qZA(),
                    t.TgZ(5, 'o-badge', 3),
                    t._uU(6, 'Etiqueta'),
                    t.qZA(),
                    t.TgZ(7, 'o-badge', 4),
                    t._uU(8, 'Etiqueta'),
                    t.qZA(),
                    t.TgZ(9, 'o-badge', 5),
                    t._uU(10, 'Etiqueta'),
                    t.qZA(),
                    t.TgZ(11, 'o-badge', 6),
                    t._uU(12, 'Etiqueta'),
                    t.qZA()(),
                    t.TgZ(13, 'pre', 7),
                    t._uU(14, '        '),
                    t.TgZ(15, 'button', 8),
                    t._uU(16, 'Copiar'),
                    t.qZA(),
                    t._uU(17, '\n        '),
                    t.TgZ(18, 'code', 9),
                    t._uU(19),
                    t.qZA(),
                    t._uU(20, '\n      '),
                    t.qZA()(),
                    t.TgZ(21, 'app-viewer', 10)(22, 'div', 2)(23, 'o-badge', 11),
                    t._uU(24, 'Etiqueta con link'),
                    t.qZA(),
                    t.TgZ(25, 'o-badge', 12),
                    t._uU(26, 'Etiqueta con route'),
                    t.qZA()(),
                    t.TgZ(27, 'pre', 7),
                    t._uU(28, '        '),
                    t.TgZ(29, 'button', 8),
                    t._uU(30, 'Copiar'),
                    t.qZA(),
                    t._uU(31, '\n        '),
                    t.TgZ(32, 'code', 9),
                    t._uU(33),
                    t.qZA(),
                    t._uU(34, '\n      '),
                    t.qZA()()()),
                    2 & h &&
                      (t.xp6(19),
                      t.hij('\n          ', Z.badgeTypes, '\n        '),
                      t.xp6(14),
                      t.hij('\n          ', Z.badgeLink, '\n        '));
                },
                dependencies: [M.U, v.B, l.y, x.y]
              })),
              s
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let d = (() => {
        class s {}
        return (
          (s.ɵfac = function (h) {
            return new (h || s)();
          }),
          (s.ɵmod = t.oAB({ type: s })),
          (s.ɵinj = t.cJS({ imports: [o.Bz.forChild(p), o.Bz] })),
          s
        );
      })();
      var b = a(7538),
        i = a(3252),
        r = a(2089),
        n = a(9384),
        c = a(3717);
      let _ = (() => {
        class s {}
        return (
          (s.ɵfac = function (h) {
            return new (h || s)();
          }),
          (s.ɵmod = t.oAB({ type: s })),
          (s.ɵinj = t.cJS({ imports: [e.ez, d, b.Z, i.E, v.B, r.Z, n.T, c.J] })),
          s
        );
      })();
    }
  }
]);
