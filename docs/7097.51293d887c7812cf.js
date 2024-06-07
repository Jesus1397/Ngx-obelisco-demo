'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [7097],
  {
    4883: (B, Z, a) => {
      a.d(Z, { L: () => h });
      var e = a(4893),
        o = a(2313),
        r = a(9808);
      const x = ['checkbox'];
      function t(s, d) {
        if (1 & s) {
          const n = e.EpF();
          e.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            e.NdJ('change', function (i) {
              e.CHM(n);
              const p = e.oxw(2);
              return e.KtG(p.onHeaderCheckboxChange(i));
            }),
            e.qZA(),
            e.TgZ(3, 'label', 8),
            e._uU(4),
            e.qZA()()();
        }
        if (2 & s) {
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
      function T(s, d) {
        if ((1 & s && (e.TgZ(0, 'th', 5), e._uU(1), e.qZA()), 2 & s)) {
          const n = e.oxw(2);
          e.Q6J('ngClass', n.checkbox.customClassesTh), e.xp6(1), e.hij(' ', n.checkbox.title, ' ');
        }
      }
      function f(s, d) {
        if ((1 & s && (e.ynx(0), e.TgZ(1, 'th', 5), e._uU(2), e.qZA(), e.BQk()), 2 & s)) {
          const n = d.$implicit;
          e.xp6(1), e.Q6J('ngClass', n.customClasses), e.xp6(1), e.Oqu(n.value);
        }
      }
      function v(s, d) {
        if (1 & s) {
          const n = e.EpF();
          e.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            e.NdJ('change', function (i) {
              e.CHM(n);
              const p = e.oxw().$implicit,
                m = e.oxw(2);
              return e.KtG(m.onCheckboxChange(p, i));
            }),
            e.qZA(),
            e._UZ(4, 'label', 11),
            e.qZA()();
        }
        if (2 & s) {
          const n = e.oxw().index,
            l = e.oxw(2);
          e.xp6(2),
            e.hYB('id', '', l.id, '-checkbox_', n, '')('name', '', l.id, '-checkbox_', n, ''),
            e.xp6(2),
            e.hYB('for', '', l.id, '-checkbox_', n, '');
        }
      }
      function O(s, d) {
        if ((1 & s && e._UZ(0, 'div', 14), 2 & s)) {
          const n = e.oxw().$implicit,
            l = e.oxw().$implicit,
            i = e.oxw(2);
          e.Q6J('innerHTML', i.sanitizeHTML(l[n.key].data), e.oJD);
        }
      }
      function A(s, d) {
        if ((1 & s && (e.ynx(0), e.TgZ(1, 'td', 12), e.YNc(2, O, 1, 1, 'div', 13), e.qZA(), e.BQk()), 2 & s)) {
          const n = d.$implicit,
            l = e.oxw().$implicit;
          e.xp6(1), e.Q6J('ngClass', l[n.key].customClasses), e.xp6(1), e.Q6J('ngIf', l[n.key].data);
        }
      }
      function u(s, d) {
        if (
          (1 & s && (e.TgZ(0, 'tr'), e.YNc(1, v, 5, 6, 'td', 9), e.YNc(2, A, 3, 2, 'ng-container', 4), e.qZA()), 2 & s)
        ) {
          const n = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', n.checkbox), e.xp6(1), e.Q6J('ngForOf', n.columns);
        }
      }
      const b = function (s, d) {
        return { 'table-borderless': s, 'table-striped': d };
      };
      function _(s, d) {
        if (
          (1 & s &&
            (e.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            e.YNc(3, t, 5, 6, 'th', 3),
            e.YNc(4, T, 2, 2, 'th', 3),
            e.YNc(5, f, 3, 2, 'ng-container', 4),
            e.qZA()(),
            e.TgZ(6, 'tbody'),
            e.YNc(7, u, 3, 2, 'tr', 4),
            e.qZA()()),
          2 & s)
        ) {
          const n = e.oxw();
          e.Q6J('ngClass', e.WLB(5, b, !n.isBordered, n.isStriped)),
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
      const g = function (s) {
        return { 'responsive-scroll': s };
      };
      let h = (() => {
        class s {
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
            const l = n.target;
            if (l) {
              const i = l.checked;
              this.checkboxRef.toArray().forEach((p) => {
                p.nativeElement.checked = i;
              }),
                (this.dataSelected = i ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(n);
              else {
                const p = this.dataSelected.findIndex((m) => m === n);
                -1 !== p && this.dataSelected.splice(p, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (n) {
            return new (n || s)(e.Y36(e.Qsj), e.Y36(o.H7));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (n, l) {
              if ((1 & n && e.Gf(x, 5), 2 & n)) {
                let i;
                e.iGM((i = e.CRH())) && (l.checkboxRef = i);
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
              1 & n && (e.TgZ(0, 'div', 0), e.YNc(1, _, 8, 8, 'table', 1), e.qZA()),
                2 & n &&
                  (e.Tol(l.customClasses),
                  e.Q6J('ngClass', e.VKq(4, g, l.isScrollable)),
                  e.xp6(1),
                  e.Q6J('ngIf', l.isValidateComponent));
            },
            dependencies: [r.mk, r.sg, r.O5]
          })),
          s
        );
      })();
    },
    2089: (B, Z, a) => {
      a.d(Z, { Z: () => r });
      var e = a(9808),
        o = a(4893);
      let r = (() => {
        class x {}
        return (
          (x.ɵfac = function (T) {
            return new (T || x)();
          }),
          (x.ɵmod = o.oAB({ type: x })),
          (x.ɵinj = o.cJS({ imports: [e.ez] })),
          x
        );
      })();
    },
    4948: (B, Z, a) => {
      a.d(Z, { B: () => A });
      var e = a(9808),
        o = a(4893);
      function r(u, b) {
        if (1 & u) {
          const _ = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(_);
              const h = o.oxw();
              return o.KtG((h.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(_);
              const h = o.oxw();
              return o.KtG((h.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & u) {
          const _ = o.oxw();
          o.xp6(3), o.ekj('active', _.isWindowHTML), o.xp6(3), o.ekj('active', !_.isWindowHTML);
        }
      }
      function x(u, b) {
        1 & u && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function t(u, b) {
        1 & u && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function T(u, b) {
        if ((1 & u && o.YNc(0, t, 2, 0, 'ng-container', 7), 2 & u)) {
          const _ = o.oxw(),
            g = o.MAs(16);
          o.Q6J('ngIf', _.isWindowHTML)('ngIfElse', g);
        }
      }
      function f(u, b) {
        1 & u && o.Hsn(0, 2);
      }
      const v = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let A = (() => {
        class u {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (u.ɵfac = function (_) {
            return new (_ || u)();
          }),
          (u.ɵcmp = o.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [o.jDz],
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
            template: function (_, g) {
              if (
                (1 & _ &&
                  (o.F$t(v),
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
                  o.YNc(11, r, 8, 4, 'nav', 6),
                  o.YNc(12, x, 2, 0, 'ng-container', 7),
                  o.YNc(13, T, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, f, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & _)
              ) {
                const h = o.MAs(14);
                o.xp6(3),
                  o.Oqu(g.title),
                  o.xp6(4),
                  o.ekj('active', g.isOpenCode),
                  o.xp6(2),
                  o.Oqu(g.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !g.isOpenCode)('ngIfElse', h);
              }
            },
            dependencies: [e.ez, e.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          u
        );
      })();
    },
    7097: (B, Z, a) => {
      a.r(Z), a.d(Z, { ButtonModule: () => l });
      var e = a(9808),
        o = a(2526),
        r = a(8992),
        x = a(5570),
        t = a(4893),
        T = a(4883),
        f = a(6434);
      let v = (() => {
        class i {
          constructor() {
            (this.columns = x.L0),
              (this.dataSource = r.xr),
              (this.linkDataSource = r.nF),
              (this.buttonDataSource = r.q6),
              (this.types = r.Dx),
              (this.sizes = x.zf);
          }
        }
        return (
          (i.ɵfac = function (m) {
            return new (m || i)();
          }),
          (i.ɵcmp = t.Xpm({
            type: i,
            selectors: [['app-button-api']],
            decls: 57,
            vars: 14,
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
                "import { OButtonModule } from 'ngx-obelisco-example/button';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface', 'mb-5'],
              ['appPrism', ''],
              [1, 'section-interface']
            ],
            template: function (m, c) {
              1 & m &&
                (t.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                t._uU(3, 'Referencia de API para el componente Bot\xf3n de Obelisco'),
                t.qZA(),
                t.TgZ(4, 'pre', 2),
                t._uU(5, '        '),
                t._UZ(6, 'code', 3),
                t._uU(7, '\n      '),
                t.qZA()(),
                t.TgZ(8, 'h3'),
                t._uU(9, 'Etiqueta'),
                t.qZA(),
                t._UZ(10, 'hr'),
                t.TgZ(11, 'div', 4)(12, 'h4'),
                t._uU(13, 'OButton'),
                t.qZA(),
                t.TgZ(14, 'p'),
                t._uU(15, 'Selector: '),
                t.TgZ(16, 'strong'),
                t._uU(17, 'o-button'),
                t.qZA()(),
                t.TgZ(18, 'div', 5)(19, 'h5'),
                t._uU(20, 'Propiedades generales'),
                t.qZA(),
                t._UZ(21, 'o-table', 6),
                t.qZA(),
                t.TgZ(22, 'div', 5)(23, 'h5'),
                t._uU(24, 'Propiedades en etiqueta <a>'),
                t.qZA(),
                t._UZ(25, 'o-table', 6),
                t.qZA(),
                t.TgZ(26, 'div', 5)(27, 'h5'),
                t._uU(28, 'Propiedades en etiqueta <button>'),
                t.qZA(),
                t._UZ(29, 'o-table', 6),
                t.qZA()(),
                t.TgZ(30, 'div', 7)(31, 'h4'),
                t._uU(32, 'ButtonTypes'),
                t.qZA(),
                t.TgZ(33, 'p'),
                t._uU(34, 'Permite establecer los valores de la propiedad '),
                t.TgZ(35, 'strong'),
                t._uU(36, 'type'),
                t.qZA(),
                t._uU(37, '.'),
                t.qZA(),
                t.TgZ(38, 'div', 8)(39, 'pre', 2),
                t._uU(40, '        '),
                t.TgZ(41, 'code', 9),
                t._uU(42),
                t.qZA(),
                t._uU(43, '\n      '),
                t.qZA()(),
                t.TgZ(44, 'h4'),
                t._uU(45, 'Sizes'),
                t.qZA(),
                t.TgZ(46, 'p'),
                t._uU(47, 'Permite establecer el '),
                t.TgZ(48, 'strong'),
                t._uU(49, 'tama\xf1o'),
                t.qZA(),
                t._uU(50, ' del bot\xf3n'),
                t.qZA(),
                t.TgZ(51, 'div', 10)(52, 'pre', 2),
                t._uU(53, '        '),
                t.TgZ(54, 'code', 9),
                t._uU(55),
                t.qZA(),
                t._uU(56, '\n      '),
                t.qZA()()()()),
                2 & m &&
                  (t.xp6(21),
                  t.Q6J('columns', c.columns)('dataSource', c.dataSource)('isStriped', !0)('isBordered', !0),
                  t.xp6(4),
                  t.Q6J('columns', c.columns)('dataSource', c.linkDataSource)('isStriped', !0)('isBordered', !0),
                  t.xp6(4),
                  t.Q6J('columns', c.columns)('dataSource', c.buttonDataSource)('isStriped', !0)('isBordered', !0),
                  t.xp6(13),
                  t.Oqu(c.types),
                  t.xp6(13),
                  t.Oqu(c.sizes));
            },
            dependencies: [T.L, f.y]
          })),
          i
        );
      })();
      var O = a(4948),
        A = a(2171),
        u = a(2200);
      const _ = [
        { path: 'api', component: v },
        {
          path: 'examples',
          component: (() => {
            class i {
              constructor() {
                (this.buttonTypes = r.Yq),
                  (this.buttonTypesTs = r.r4),
                  (this.buttonSizes = r.UB),
                  (this.buttonBlock = r.m7),
                  (this.buttonIcon = r.IE),
                  (this.buttonSpinner = r.NQ);
              }
              alert() {
                alert('Bot\xf3n');
              }
            }
            return (
              (i.ɵfac = function (m) {
                return new (m || i)();
              }),
              (i.ɵcmp = t.Xpm({
                type: i,
                selectors: [['app-button-examples']],
                decls: 94,
                vars: 29,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Tipos', 3, 'isNavCode'],
                  ['component', '', 1, 'button-container'],
                  ['text', 'Bot\xf3n', 3, 'click'],
                  ['text', 'Bot\xf3n', 'type', 'secondary', 3, 'click'],
                  ['text', 'Bot\xf3n', 'type', 'success', 3, 'click'],
                  ['text', 'Bot\xf3n', 'type', 'danger', 3, 'click'],
                  ['text', 'Bot\xf3n', 'type', 'link', 3, 'click'],
                  ['text', 'Bot\xf3n', 'text', 'Enlace', 'link', 'https://www.google.com/'],
                  ['text', 'Bot\xf3n', 3, 'isOutline', 'click'],
                  ['text', 'Bot\xf3n', 'type', 'secondary', 3, 'isOutline', 'click'],
                  ['text', 'Bot\xf3n', 'type', 'success', 3, 'isOutline', 'click'],
                  ['text', 'Bot\xf3n', 'type', 'danger', 3, 'isOutline', 'click'],
                  ['text', 'Bot\xf3n', 'type', 'link', 3, 'isOutline', 'click'],
                  ['text', 'Bot\xf3n', 'text', 'Enlace', 'link', 'https://www.google.com/', 3, 'isOutline'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Tama\xf1os'],
                  ['text', 'Bot\xf3n', 'size', 'sm'],
                  ['text', 'Bot\xf3n'],
                  ['text', 'Bot\xf3n', 'size', 'lg'],
                  ['title', 'Expandible'],
                  ['component', '', 1, 'w-50', 'mx-auto', 'mb-5'],
                  ['text', 'Expandible', 3, 'isExpandable'],
                  ['title', 'Con \xedcono'],
                  ['size', 'sm', 'icon', 'info', 'text', 'Bot\xf3n'],
                  ['icon', 'bx bxs-info-circle', 'text', 'Bot\xf3n'],
                  ['size', 'lg', 'icon', 'info', 'text', 'Bot\xf3n'],
                  ['size', 'sm', 'icon', 'info', 'ariaLabel', 'Bot\xf3n'],
                  ['icon', 'bx bxs-info-circle', 'ariaLabel', 'Bot\xf3n'],
                  ['size', 'lg', 'icon', 'info', 'ariaLabel', 'Bot\xf3n'],
                  ['title', 'Con spinner'],
                  ['text', 'Bot\xf3n', 3, 'spinner'],
                  ['type', 'secondary', 'text', 'Bot\xf3n', 3, 'spinner'],
                  ['type', 'success', 'text', 'Bot\xf3n', 3, 'spinner'],
                  ['type', 'danger', 'text', 'Bot\xf3n', 3, 'spinner'],
                  ['type', 'link', 'text', 'Bot\xf3n', 3, 'spinner'],
                  ['text', 'Bot\xf3n', 3, 'isOutline', 'spinner'],
                  ['type', 'secondary', 'text', 'Bot\xf3n', 3, 'isOutline', 'spinner'],
                  ['type', 'success', 'text', 'Bot\xf3n', 3, 'isOutline', 'spinner'],
                  ['type', 'danger', 'text', 'Bot\xf3n', 3, 'isOutline', 'spinner'],
                  ['type', 'link', 'text', 'Bot\xf3n', 3, 'isOutline', 'spinner']
                ],
                template: function (m, c) {
                  1 & m &&
                    (t.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'o-button', 3),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(4, 'o-button', 4),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(5, 'o-button', 5),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(6, 'o-button', 6),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(7, 'o-button', 7),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t._UZ(8, 'o-button', 8),
                    t.qZA(),
                    t.TgZ(9, 'div', 2)(10, 'o-button', 9),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(11, 'o-button', 10),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(12, 'o-button', 11),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(13, 'o-button', 12),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t.TgZ(14, 'o-button', 13),
                    t.NdJ('click', function () {
                      return c.alert();
                    }),
                    t.qZA(),
                    t._UZ(15, 'o-button', 14),
                    t.qZA(),
                    t.TgZ(16, 'pre', 15),
                    t._uU(17, '        '),
                    t.TgZ(18, 'button', 16),
                    t._uU(19, 'Copiar'),
                    t.qZA(),
                    t._uU(20, '\n        '),
                    t.TgZ(21, 'code', 17),
                    t._uU(22),
                    t.qZA(),
                    t._uU(23, '\n    '),
                    t.qZA(),
                    t.TgZ(24, 'pre', 18),
                    t._uU(25, '      '),
                    t.TgZ(26, 'button', 16),
                    t._uU(27, 'Copiar'),
                    t.qZA(),
                    t._uU(28, '\n      '),
                    t.TgZ(29, 'code', 19),
                    t._uU(30),
                    t.qZA(),
                    t._uU(31, '\n    '),
                    t.qZA()(),
                    t.TgZ(32, 'app-viewer', 20)(33, 'div', 2),
                    t._UZ(34, 'o-button', 21)(35, 'o-button', 22)(36, 'o-button', 23),
                    t.qZA(),
                    t.TgZ(37, 'pre', 15),
                    t._uU(38, '        '),
                    t.TgZ(39, 'button', 16),
                    t._uU(40, 'Copiar'),
                    t.qZA(),
                    t._uU(41, '\n        '),
                    t.TgZ(42, 'code', 17),
                    t._uU(43),
                    t.qZA(),
                    t._uU(44, '\n    '),
                    t.qZA()(),
                    t.TgZ(45, 'app-viewer', 24)(46, 'div', 25),
                    t._UZ(47, 'o-button', 26),
                    t.qZA(),
                    t.TgZ(48, 'pre', 15),
                    t._uU(49, '        '),
                    t.TgZ(50, 'button', 16),
                    t._uU(51, 'Copiar'),
                    t.qZA(),
                    t._uU(52, '\n        '),
                    t.TgZ(53, 'code', 17),
                    t._uU(54),
                    t.qZA(),
                    t._uU(55, '\n    '),
                    t.qZA()(),
                    t.TgZ(56, 'app-viewer', 27)(57, 'div', 2),
                    t._UZ(58, 'o-button', 28)(59, 'o-button', 29)(60, 'o-button', 30),
                    t.qZA(),
                    t.TgZ(61, 'div', 2),
                    t._UZ(62, 'o-button', 31)(63, 'o-button', 32)(64, 'o-button', 33),
                    t.qZA(),
                    t.TgZ(65, 'pre', 15),
                    t._uU(66, '        '),
                    t.TgZ(67, 'button', 16),
                    t._uU(68, 'Copiar'),
                    t.qZA(),
                    t._uU(69, '\n        '),
                    t.TgZ(70, 'code', 17),
                    t._uU(71),
                    t.qZA(),
                    t._uU(72, '\n    '),
                    t.qZA()(),
                    t.TgZ(73, 'app-viewer', 34)(74, 'div', 2),
                    t._UZ(75, 'o-button', 35)(76, 'o-button', 36)(77, 'o-button', 37)(78, 'o-button', 38)(
                      79,
                      'o-button',
                      39
                    ),
                    t.qZA(),
                    t.TgZ(80, 'div', 2),
                    t._UZ(81, 'o-button', 40)(82, 'o-button', 41)(83, 'o-button', 42)(84, 'o-button', 43)(
                      85,
                      'o-button',
                      44
                    ),
                    t.qZA(),
                    t.TgZ(86, 'pre', 15),
                    t._uU(87, '        '),
                    t.TgZ(88, 'button', 16),
                    t._uU(89, 'Copiar'),
                    t.qZA(),
                    t._uU(90, '\n        '),
                    t.TgZ(91, 'code', 17),
                    t._uU(92),
                    t.qZA(),
                    t._uU(93, '\n    '),
                    t.qZA()()()),
                    2 & m &&
                      (t.xp6(1),
                      t.Q6J('isNavCode', !0),
                      t.xp6(9),
                      t.Q6J('isOutline', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0),
                      t.xp6(7),
                      t.Oqu(c.buttonTypes),
                      t.xp6(8),
                      t.hij('\n        ', c.buttonTypesTs, '\n      '),
                      t.xp6(13),
                      t.Oqu(c.buttonSizes),
                      t.xp6(4),
                      t.Q6J('isExpandable', !0),
                      t.xp6(7),
                      t.Oqu(c.buttonBlock),
                      t.xp6(17),
                      t.Oqu(c.buttonIcon),
                      t.xp6(4),
                      t.Q6J('spinner', !0),
                      t.xp6(1),
                      t.Q6J('spinner', !0),
                      t.xp6(1),
                      t.Q6J('spinner', !0),
                      t.xp6(1),
                      t.Q6J('spinner', !0),
                      t.xp6(1),
                      t.Q6J('spinner', !0),
                      t.xp6(2),
                      t.Q6J('isOutline', !0)('spinner', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0)('spinner', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0)('spinner', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0)('spinner', !0),
                      t.xp6(1),
                      t.Q6J('isOutline', !0)('spinner', !0),
                      t.xp6(7),
                      t.Oqu(c.buttonSpinner));
                },
                dependencies: [O.B, f.y, A.y, u.g],
                styles: [
                  '.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:2rem;margin-bottom:3rem}'
                ]
              })),
              i
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let g = (() => {
        class i {}
        return (
          (i.ɵfac = function (m) {
            return new (m || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [o.Bz.forChild(_), o.Bz] })),
          i
        );
      })();
      var h = a(7538),
        s = a(2089),
        d = a(9384),
        n = a(3717);
      let l = (() => {
        class i {}
        return (
          (i.ɵfac = function (m) {
            return new (m || i)();
          }),
          (i.ɵmod = t.oAB({ type: i })),
          (i.ɵinj = t.cJS({ imports: [e.ez, g, h.Z, s.Z, O.B, d.T, n.J] })),
          i
        );
      })();
    }
  }
]);
