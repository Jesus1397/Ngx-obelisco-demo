'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [5206],
  {
    4883: (q, f, i) => {
      i.d(f, { L: () => T });
      var t = i(4893),
        a = i(2313),
        l = i(9808);
      const h = ['checkbox'];
      function b(o, m) {
        if (1 & o) {
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
        if (2 & o) {
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
      function e(o, m) {
        if ((1 & o && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function v(o, m) {
        if ((1 & o && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & o)) {
          const n = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function A(o, m) {
        if (1 & o) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (_) {
              t.CHM(n);
              const x = t.oxw().$implicit,
                w = t.oxw(2);
              return t.KtG(w.onCheckboxChange(x, _));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & o) {
          const n = t.oxw().index,
            r = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', r.id, '-checkbox_', n, '')('name', '', r.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', r.id, '-checkbox_', n, '');
        }
      }
      function O(o, m) {
        if ((1 & o && t._UZ(0, 'div', 14), 2 & o)) {
          const n = t.oxw().$implicit,
            r = t.oxw().$implicit,
            _ = t.oxw(2);
          t.Q6J('innerHTML', _.sanitizeHTML(r[n.key].data), t.oJD);
        }
      }
      function U(o, m) {
        if ((1 & o && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, O, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & o)) {
          const n = m.$implicit,
            r = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', r[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', r[n.key].data);
        }
      }
      function d(o, m) {
        if (
          (1 & o && (t.TgZ(0, 'tr'), t.YNc(1, A, 5, 6, 'td', 9), t.YNc(2, U, 3, 2, 'ng-container', 4), t.qZA()), 2 & o)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const Z = function (o, m) {
        return { 'table-borderless': o, 'table-striped': m };
      };
      function u(o, m) {
        if (
          (1 & o &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, b, 5, 6, 'th', 3),
            t.YNc(4, e, 2, 2, 'th', 3),
            t.YNc(5, v, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, d, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & o)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, Z, !n.isBordered, n.isStriped)),
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
      const p = function (o) {
        return { 'responsive-scroll': o };
      };
      let T = (() => {
        class o {
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
                const x = this.dataSelected.findIndex((w) => w === n);
                -1 !== x && this.dataSelected.splice(x, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)(t.Y36(t.Qsj), t.Y36(a.H7));
          }),
          (o.ɵcmp = t.Xpm({
            type: o,
            selectors: [['o-table']],
            viewQuery: function (n, r) {
              if ((1 & n && t.Gf(h, 5), 2 & n)) {
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
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, u, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(r.customClasses),
                  t.Q6J('ngClass', t.VKq(4, p, r.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', r.isValidateComponent));
            },
            dependencies: [l.mk, l.sg, l.O5]
          })),
          o
        );
      })();
    },
    2089: (q, f, i) => {
      i.d(f, { Z: () => l });
      var t = i(9808),
        a = i(4893);
      let l = (() => {
        class h {}
        return (
          (h.ɵfac = function (e) {
            return new (e || h)();
          }),
          (h.ɵmod = a.oAB({ type: h })),
          (h.ɵinj = a.cJS({ imports: [t.ez] })),
          h
        );
      })();
    },
    4948: (q, f, i) => {
      i.d(f, { B: () => U });
      var t = i(9808),
        a = i(4893);
      function l(d, Z) {
        if (1 & d) {
          const u = a.EpF();
          a.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            a.NdJ('click', function () {
              a.CHM(u);
              const T = a.oxw();
              return a.KtG((T.isWindowHTML = !0));
            }),
            a._uU(4, 'HTML'),
            a.qZA()(),
            a.TgZ(5, 'li', 12)(6, 'a', 14),
            a.NdJ('click', function () {
              a.CHM(u);
              const T = a.oxw();
              return a.KtG((T.isWindowHTML = !1));
            }),
            a._uU(7, 'TS'),
            a.qZA()()()();
        }
        if (2 & d) {
          const u = a.oxw();
          a.xp6(3), a.ekj('active', u.isWindowHTML), a.xp6(3), a.ekj('active', !u.isWindowHTML);
        }
      }
      function h(d, Z) {
        1 & d && (a.ynx(0), a.Hsn(1), a.BQk());
      }
      function b(d, Z) {
        1 & d && (a.ynx(0), a.Hsn(1, 1), a.BQk());
      }
      function e(d, Z) {
        if ((1 & d && a.YNc(0, b, 2, 0, 'ng-container', 7), 2 & d)) {
          const u = a.oxw(),
            p = a.MAs(16);
          a.Q6J('ngIf', u.isWindowHTML)('ngIfElse', p);
        }
      }
      function v(d, Z) {
        1 & d && a.Hsn(0, 2);
      }
      const A = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let U = (() => {
        class d {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (d.ɵfac = function (u) {
            return new (u || d)();
          }),
          (d.ɵcmp = a.Xpm({
            type: d,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [a.jDz],
            ngContentSelectors: O,
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
            template: function (u, p) {
              if (
                (1 & u &&
                  (a.F$t(A),
                  a.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  a._uU(3),
                  a.qZA(),
                  a.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  a.NdJ('click', function () {
                    return (p.isOpenCode = !p.isOpenCode);
                  }),
                  a.TgZ(8, 'span'),
                  a._uU(9),
                  a.qZA()()()()()(),
                  a.TgZ(10, 'div', 5),
                  a.YNc(11, l, 8, 4, 'nav', 6),
                  a.YNc(12, h, 2, 0, 'ng-container', 7),
                  a.YNc(13, e, 1, 2, 'ng-template', null, 8, a.W1O),
                  a.YNc(15, v, 1, 0, 'ng-template', null, 9, a.W1O),
                  a.qZA()()),
                2 & u)
              ) {
                const T = a.MAs(14);
                a.xp6(3),
                  a.Oqu(p.title),
                  a.xp6(4),
                  a.ekj('active', p.isOpenCode),
                  a.xp6(2),
                  a.Oqu(p.linkCode),
                  a.xp6(2),
                  a.Q6J('ngIf', p.isOpenCode && p.isNavCode),
                  a.xp6(1),
                  a.Q6J('ngIf', !p.isOpenCode)('ngIfElse', T);
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
    5206: (q, f, i) => {
      i.r(f), i.d(f, { CardModule: () => M });
      var t = i(9808),
        a = i(2526),
        l = i(6527),
        h = i(763),
        b = i(5570),
        e = i(4893),
        v = i(6434),
        A = i(4883);
      let O = (() => {
        class c {
          constructor() {
            (this.columns = b.L0),
              (this.dataSourceCard = l.Q),
              (this.cardBadgesInterface = l.Qq),
              (this.dataSourceCardBadges = l.lE),
              (this.badgeTypesInterface = h.mg),
              (this.mediaImageInterface = l.Wx),
              (this.mediaImagedataSourceInterface = l.Fr);
          }
        }
        return (
          (c.ɵfac = function (g) {
            return new (g || c)();
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [['app-card-api']],
            decls: 76,
            vars: 15,
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
                "import { OCardModule } from 'ngx-obelisco-example/card';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              ['appPrism', ''],
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped']
            ],
            template: function (g, s) {
              1 & g &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Tarjeta de Obelisco'),
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
                e._uU(13, 'OCardModule'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-card'),
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
                e._uU(27, 'CardBadge'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'cardBadges'),
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
                e._uU(46, 'BadgeTypes'),
                e.qZA(),
                e.TgZ(47, 'p'),
                e._uU(48, 'Permite establecer los valores de la propiedad '),
                e.TgZ(49, 'strong'),
                e._uU(50, 'type'),
                e.qZA(),
                e._uU(51, '.'),
                e.qZA(),
                e.TgZ(52, 'div', 8)(53, 'pre', 2),
                e._uU(54, '        '),
                e.TgZ(55, 'code', 10),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n      '),
                e.qZA()()(),
                e.TgZ(58, 'div', 7)(59, 'h4'),
                e._uU(60, 'MediaImage'),
                e.qZA(),
                e.TgZ(61, 'p'),
                e._uU(62, 'Permite establecer los valores de la propiedad '),
                e.TgZ(63, 'strong'),
                e._uU(64, 'image'),
                e.qZA(),
                e._uU(65, '.'),
                e.qZA(),
                e.TgZ(66, 'div', 8)(67, 'pre', 2),
                e._uU(68, '        '),
                e.TgZ(69, 'code', 9),
                e._uU(70),
                e.qZA(),
                e._uU(71, '\n      '),
                e.qZA(),
                e.TgZ(72, 'div', 5)(73, 'h5'),
                e._uU(74, 'Propiedades'),
                e.qZA(),
                e._UZ(75, 'o-table', 11),
                e.qZA()()()()),
                2 & g &&
                  (e.xp6(21),
                  e.Q6J('columns', s.columns)('dataSource', s.dataSourceCard)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(s.cardBadgesInterface),
                  e.xp6(5),
                  e.Q6J('columns', s.columns)('dataSource', s.dataSourceCardBadges)('isStriped', !0)('isBordered', !0),
                  e.xp6(14),
                  e.Oqu(s.badgeTypesInterface),
                  e.xp6(14),
                  e.Oqu(s.mediaImageInterface),
                  e.xp6(5),
                  e.Q6J('dataSource', s.mediaImagedataSourceInterface)('columns', s.columns)('isBordered', !0)(
                    'isStriped',
                    !0
                  ));
            },
            dependencies: [v.y, A.L]
          })),
          c
        );
      })();
      var U = i(4948),
        d = i(7259),
        Z = i(2171);
      const u = function () {
          return { content: 'etiqueta 1' };
        },
        p = function () {
          return { content: 'etiqueta 2' };
        },
        T = function (c, C) {
          return [c, C];
        },
        m = [
          { path: 'api', component: O },
          {
            path: 'examples',
            component: (() => {
              class c {
                constructor() {
                  (this.imageTheme = l.f_),
                    (this.imageHorizontal = l.H7),
                    (this.imageVertical = l.zm),
                    (this.cardThemeHtml = l.fb),
                    (this.cardIconHtml = l.qS),
                    (this.cardImageHtml = l.iH),
                    (this.cardTextHtml = l.T8),
                    (this.cardIconVerticalHtml = l.O4),
                    (this.cardImageVerticalHtml = l.yA),
                    (this.cardNewsHtml = l.tx),
                    (this.cardEventHtml = l.QD),
                    (this.cardLayoutThree = l.zM),
                    (this.cardLayoutTwo = l.ZD);
                }
              }
              return (
                (c.ɵfac = function (g) {
                  return new (g || c)();
                }),
                (c.ɵcmp = e.Xpm({
                  type: c,
                  selectors: [['app-card-examples']],
                  decls: 137,
                  vars: 59,
                  consts: [
                    [1, 'section-example'],
                    ['title', 'Horizontal - Tem\xe1tica'],
                    ['component', '', 1, 'card-wrapper-horizontal'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'image',
                      'isThemeCard'
                    ],
                    ['appClipboard', '', 'component-html', '', 1, 'code'],
                    [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                    ['appPrism', '', 'language', 'html'],
                    ['title', 'Horizontal - Con \xedcono'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      'icon',
                      'bx bxs-info-circle',
                      3,
                      'isHorizontal',
                      'isBordered'
                    ],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      'icon',
                      'info',
                      3,
                      'isHorizontal'
                    ],
                    ['title', 'Horizontal - Con imagen'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'image',
                      'isHorizontal',
                      'isBordered'
                    ],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'image',
                      'isHorizontal'
                    ],
                    ['title', 'Horizontal - Solo texto'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'isHorizontal',
                      'isBordered'
                    ],
                    [
                      'title',
                      'T\xedtulo de la tarjeta con m\xe1s de una l\xednea',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'isHorizontal'
                    ],
                    ['title', 'Vertical - Con \xedcono'],
                    ['component', '', 1, 'card-wrapper-vertical'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      'icon',
                      'bx bxs-info-circle',
                      3,
                      'isBordered'
                    ],
                    [
                      'title',
                      'T\xedtulo de la tarjeta',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      'icon',
                      'info'
                    ],
                    ['title', 'Vertical - Con imagen'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'image',
                      'isBordered'
                    ],
                    ['title', 'Vertical - Noticia'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'image',
                      'cardBadges',
                      'isBordered'
                    ],
                    ['info', ''],
                    [
                      'title',
                      'T\xedtulo de la tarjeta Noticias truncado con texto extendido que supera las tres l\xedneas de longitud.',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      3,
                      'image',
                      'cardBadges',
                      'isTitleTruncate',
                      'isBordered'
                    ],
                    ['title', 'Vertical - Agenda'],
                    [
                      'title',
                      'T\xedtulo de la tarjeta',
                      'description',
                      'Descripci\xf3n de la tarjeta',
                      'route',
                      '/components',
                      'headline',
                      'sobrelinea',
                      3,
                      'image',
                      'isBordered'
                    ],
                    [1, 'pt-2'],
                    [1, 'material-icons-round'],
                    ['title', 'Disposici\xf3n - Tres columnas'],
                    ['component', '', 1, 'card-deck', 'card-column', 'max-cards-3'],
                    ['title', 'Disposici\xf3n - Dos columnas'],
                    ['component', '', 1, 'card-deck', 'card-column', 'max-cards-2']
                  ],
                  template: function (g, s) {
                    1 & g &&
                      (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                      e._UZ(3, 'o-card', 3),
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
                      e.qZA()(),
                      e.TgZ(12, 'app-viewer', 7)(13, 'div', 2),
                      e._UZ(14, 'o-card', 8)(15, 'o-card', 9),
                      e.qZA(),
                      e.TgZ(16, 'pre', 4),
                      e._uU(17, '      '),
                      e.TgZ(18, 'button', 5),
                      e._uU(19, 'Copiar'),
                      e.qZA(),
                      e._uU(20, '\n      '),
                      e.TgZ(21, 'code', 6),
                      e._uU(22),
                      e.qZA(),
                      e._uU(23, '\n    '),
                      e.qZA()(),
                      e.TgZ(24, 'app-viewer', 10)(25, 'div', 2),
                      e._UZ(26, 'o-card', 11)(27, 'o-card', 12),
                      e.qZA(),
                      e.TgZ(28, 'pre', 4),
                      e._uU(29, '      '),
                      e.TgZ(30, 'button', 5),
                      e._uU(31, 'Copiar'),
                      e.qZA(),
                      e._uU(32, '\n      '),
                      e.TgZ(33, 'code', 6),
                      e._uU(34),
                      e.qZA(),
                      e._uU(35, '\n    '),
                      e.qZA()(),
                      e.TgZ(36, 'app-viewer', 13)(37, 'div', 2),
                      e._UZ(38, 'o-card', 14)(39, 'o-card', 15),
                      e.qZA(),
                      e.TgZ(40, 'pre', 4),
                      e._uU(41, '      '),
                      e.TgZ(42, 'button', 5),
                      e._uU(43, 'Copiar'),
                      e.qZA(),
                      e._uU(44, '\n      '),
                      e.TgZ(45, 'code', 6),
                      e._uU(46),
                      e.qZA(),
                      e._uU(47, '\n    '),
                      e.qZA()(),
                      e.TgZ(48, 'app-viewer', 16)(49, 'div', 17),
                      e._UZ(50, 'o-card', 18)(51, 'o-card', 19),
                      e.qZA(),
                      e.TgZ(52, 'pre', 4),
                      e._uU(53, '      '),
                      e.TgZ(54, 'button', 5),
                      e._uU(55, 'Copiar'),
                      e.qZA(),
                      e._uU(56, '\n      '),
                      e.TgZ(57, 'code', 6),
                      e._uU(58),
                      e.qZA(),
                      e._uU(59, '\n    '),
                      e.qZA()(),
                      e.TgZ(60, 'app-viewer', 20)(61, 'div', 17),
                      e._UZ(62, 'o-card', 21),
                      e.qZA(),
                      e.TgZ(63, 'pre', 4),
                      e._uU(64, '      '),
                      e.TgZ(65, 'button', 5),
                      e._uU(66, 'Copiar'),
                      e.qZA(),
                      e._uU(67, '\n      '),
                      e.TgZ(68, 'code', 6),
                      e._uU(69),
                      e.qZA(),
                      e._uU(70, '\n    '),
                      e.qZA()(),
                      e.TgZ(71, 'app-viewer', 22)(72, 'div', 17)(73, 'o-card', 23)(74, 'small', null, 24),
                      e._uU(76, 'Fecha de publicaci\xf3n'),
                      e.qZA()(),
                      e.TgZ(77, 'o-card', 25)(78, 'small', null, 24),
                      e._uU(80, 'Fecha de publicaci\xf3n'),
                      e.qZA()()(),
                      e.TgZ(81, 'pre', 4),
                      e._uU(82, '      '),
                      e.TgZ(83, 'button', 5),
                      e._uU(84, 'Copiar'),
                      e.qZA(),
                      e._uU(85, '\n      '),
                      e.TgZ(86, 'code', 6),
                      e._uU(87),
                      e.qZA(),
                      e._uU(88, '\n    '),
                      e.qZA()(),
                      e.TgZ(89, 'app-viewer', 26)(90, 'div', 17)(91, 'o-card', 27)(92, 'div', 28, 24)(94, 'small')(
                        95,
                        'span',
                        29
                      ),
                      e._uU(96, 'calendar_today'),
                      e.qZA(),
                      e._uU(97, ' Lun 01/1'),
                      e.qZA(),
                      e.TgZ(98, 'small')(99, 'span', 29),
                      e._uU(100, 'watch_later'),
                      e.qZA(),
                      e._uU(101, ' 17 | 18 | 19 hs'),
                      e.qZA()()()(),
                      e.TgZ(102, 'pre', 4),
                      e._uU(103, '      '),
                      e.TgZ(104, 'button', 5),
                      e._uU(105, 'Copiar'),
                      e.qZA(),
                      e._uU(106, '\n      '),
                      e.TgZ(107, 'code', 6),
                      e._uU(108),
                      e.qZA(),
                      e._uU(109, '\n    '),
                      e.qZA()(),
                      e.TgZ(110, 'app-viewer', 30)(111, 'div', 31),
                      e._UZ(112, 'o-card', 8)(113, 'o-card', 8)(114, 'o-card', 8)(115, 'o-card', 8),
                      e.qZA(),
                      e.TgZ(116, 'pre', 4),
                      e._uU(117, '      '),
                      e.TgZ(118, 'button', 5),
                      e._uU(119, 'Copiar'),
                      e.qZA(),
                      e._uU(120, '\n      '),
                      e.TgZ(121, 'code', 6),
                      e._uU(122),
                      e.qZA(),
                      e._uU(123, '\n    '),
                      e.qZA()(),
                      e.TgZ(124, 'app-viewer', 32)(125, 'div', 33),
                      e._UZ(126, 'o-card', 8)(127, 'o-card', 8)(128, 'o-card', 8),
                      e.qZA(),
                      e.TgZ(129, 'pre', 4),
                      e._uU(130, '      '),
                      e.TgZ(131, 'button', 5),
                      e._uU(132, 'Copiar'),
                      e.qZA(),
                      e._uU(133, '\n      '),
                      e.TgZ(134, 'code', 6),
                      e._uU(135),
                      e.qZA(),
                      e._uU(136, '\n    '),
                      e.qZA()()()),
                      2 & g &&
                        (e.xp6(3),
                        e.Q6J('image', s.imageTheme)('isThemeCard', !0),
                        e.xp6(7),
                        e.Oqu(s.cardThemeHtml),
                        e.xp6(4),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0),
                        e.xp6(7),
                        e.Oqu(s.cardIconHtml),
                        e.xp6(4),
                        e.Q6J('image', s.imageHorizontal)('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('image', s.imageHorizontal)('isHorizontal', !0),
                        e.xp6(7),
                        e.Oqu(s.cardImageHtml),
                        e.xp6(4),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0),
                        e.xp6(7),
                        e.Oqu(s.cardTextHtml),
                        e.xp6(4),
                        e.Q6J('isBordered', !0),
                        e.xp6(8),
                        e.Oqu(s.cardIconVerticalHtml),
                        e.xp6(4),
                        e.Q6J('image', s.imageVertical)('isBordered', !0),
                        e.xp6(7),
                        e.Oqu(s.cardImageVerticalHtml),
                        e.xp6(4),
                        e.Q6J('image', s.imageVertical)('cardBadges', e.WLB(51, T, e.DdM(49, u), e.DdM(50, p)))(
                          'isBordered',
                          !0
                        ),
                        e.xp6(4),
                        e.Q6J('image', s.imageVertical)('cardBadges', e.WLB(56, T, e.DdM(54, u), e.DdM(55, p)))(
                          'isTitleTruncate',
                          !0
                        )('isBordered', !0),
                        e.xp6(10),
                        e.Oqu(s.cardNewsHtml),
                        e.xp6(4),
                        e.Q6J('image', s.imageVertical)('isBordered', !0),
                        e.xp6(17),
                        e.Oqu(s.cardEventHtml),
                        e.xp6(4),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(7),
                        e.Oqu(s.cardLayoutThree),
                        e.xp6(4),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(1),
                        e.Q6J('isHorizontal', !0)('isBordered', !0),
                        e.xp6(7),
                        e.Oqu(s.cardLayoutTwo));
                  },
                  dependencies: [U.B, d.j, Z.y, v.y],
                  styles: [
                    '.card-wrapper-horizontal[_ngcontent-%COMP%]{width:100%;max-width:526px}.card-wrapper-vertical[_ngcontent-%COMP%]{width:100%;max-width:340px}.card-wrapper-horizontal[_ngcontent-%COMP%]   o-card[_ngcontent-%COMP%]:not(:first-child), .card-wrapper-vertical[_ngcontent-%COMP%]   o-card[_ngcontent-%COMP%]:not(:first-child){margin-top:1.5rem;display:block}'
                  ]
                })),
                c
              );
            })()
          },
          { path: '**', pathMatch: 'full', redirectTo: 'api' }
        ];
      let n = (() => {
        class c {}
        return (
          (c.ɵfac = function (g) {
            return new (g || c)();
          }),
          (c.ɵmod = e.oAB({ type: c })),
          (c.ɵinj = e.cJS({ imports: [a.Bz.forChild(m), a.Bz] })),
          c
        );
      })();
      var r = i(7538),
        _ = i(393),
        x = i(2089),
        w = i(9384);
      let M = (() => {
        class c {}
        return (
          (c.ɵfac = function (g) {
            return new (g || c)();
          }),
          (c.ɵmod = e.oAB({ type: c })),
          (c.ɵinj = e.cJS({ imports: [t.ez, n, r.Z, U.B, _.V, x.Z, w.T] })),
          c
        );
      })();
    }
  }
]);
