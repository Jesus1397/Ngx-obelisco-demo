'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [5353],
  {
    4883: (A, f, s) => {
      s.d(f, { L: () => C });
      var n = s(4893),
        e = s(2313),
        x = s(9808);
      const _ = ['checkbox'];
      function b(i, p) {
        if (1 & i) {
          const t = n.EpF();
          n.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            n.NdJ('change', function (o) {
              n.CHM(t);
              const c = n.oxw(2);
              return n.KtG(c.onHeaderCheckboxChange(o));
            }),
            n.qZA(),
            n.TgZ(3, 'label', 8),
            n._uU(4),
            n.qZA()()();
        }
        if (2 & i) {
          const t = n.oxw(2);
          n.Q6J('ngClass', t.checkbox.customClassesTh),
            n.xp6(2),
            n.MGl('id', '', t.id, '-selectAllCheckbox')('name', '', t.id, '-selectAllCheckbox'),
            n.xp6(1),
            n.MGl('for', '', t.id, '-selectAllCheckbox'),
            n.Q6J('ngClass', t.checkbox.customClassesLabel),
            n.xp6(1),
            n.Oqu(t.checkbox.title);
        }
      }
      function T(i, p) {
        if ((1 & i && (n.TgZ(0, 'th', 5), n._uU(1), n.qZA()), 2 & i)) {
          const t = n.oxw(2);
          n.Q6J('ngClass', t.checkbox.customClassesTh), n.xp6(1), n.hij(' ', t.checkbox.title, ' ');
        }
      }
      function h(i, p) {
        if ((1 & i && (n.ynx(0), n.TgZ(1, 'th', 5), n._uU(2), n.qZA(), n.BQk()), 2 & i)) {
          const t = p.$implicit;
          n.xp6(1), n.Q6J('ngClass', t.customClasses), n.xp6(1), n.Oqu(t.value);
        }
      }
      function Z(i, p) {
        if (1 & i) {
          const t = n.EpF();
          n.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            n.NdJ('change', function (o) {
              n.CHM(t);
              const c = n.oxw().$implicit,
                l = n.oxw(2);
              return n.KtG(l.onCheckboxChange(c, o));
            }),
            n.qZA(),
            n._UZ(4, 'label', 11),
            n.qZA()();
        }
        if (2 & i) {
          const t = n.oxw().index,
            a = n.oxw(2);
          n.xp6(2),
            n.hYB('id', '', a.id, '-checkbox_', t, '')('name', '', a.id, '-checkbox_', t, ''),
            n.xp6(2),
            n.hYB('for', '', a.id, '-checkbox_', t, '');
        }
      }
      function O(i, p) {
        if ((1 & i && n._UZ(0, 'div', 14), 2 & i)) {
          const t = n.oxw().$implicit,
            a = n.oxw().$implicit,
            o = n.oxw(2);
          n.Q6J('innerHTML', o.sanitizeHTML(a[t.key].data), n.oJD);
        }
      }
      function v(i, p) {
        if ((1 & i && (n.ynx(0), n.TgZ(1, 'td', 12), n.YNc(2, O, 1, 1, 'div', 13), n.qZA(), n.BQk()), 2 & i)) {
          const t = p.$implicit,
            a = n.oxw().$implicit;
          n.xp6(1), n.Q6J('ngClass', a[t.key].customClasses), n.xp6(1), n.Q6J('ngIf', a[t.key].data);
        }
      }
      function r(i, p) {
        if (
          (1 & i && (n.TgZ(0, 'tr'), n.YNc(1, Z, 5, 6, 'td', 9), n.YNc(2, v, 3, 2, 'ng-container', 4), n.qZA()), 2 & i)
        ) {
          const t = n.oxw(2);
          n.xp6(1), n.Q6J('ngIf', t.checkbox), n.xp6(1), n.Q6J('ngForOf', t.columns);
        }
      }
      const g = function (i, p) {
        return { 'table-borderless': i, 'table-striped': p };
      };
      function m(i, p) {
        if (
          (1 & i &&
            (n.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            n.YNc(3, b, 5, 6, 'th', 3),
            n.YNc(4, T, 2, 2, 'th', 3),
            n.YNc(5, h, 3, 2, 'ng-container', 4),
            n.qZA()(),
            n.TgZ(6, 'tbody'),
            n.YNc(7, r, 3, 2, 'tr', 4),
            n.qZA()()),
          2 & i)
        ) {
          const t = n.oxw();
          n.Q6J('ngClass', n.WLB(5, g, !t.isBordered, t.isStriped)),
            n.xp6(3),
            n.Q6J('ngIf', 1 == (null == t.checkbox ? null : t.checkbox.isAllSelectable)),
            n.xp6(1),
            n.Q6J('ngIf', 0 == (null == t.checkbox ? null : t.checkbox.isAllSelectable)),
            n.xp6(1),
            n.Q6J('ngForOf', t.columns),
            n.xp6(2),
            n.Q6J('ngForOf', t.dataSource);
        }
      }
      const d = function (i) {
        return { 'responsive-scroll': i };
      };
      let C = (() => {
        class i {
          constructor(t, a) {
            (this.renderer = t),
              (this.sanitizer = a),
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
            this.checkboxRef.map((t) => {
              this.inputCheckArr.push(t.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((t) => {
              if ('' === t.key || '' === t.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((t) => (t.value = t.value.trim())),
              (this.columns = this.columns.map(
                (t) => ((t.value = t.value.charAt(0).toUpperCase() + t.value.slice(1).toLowerCase()), t)
              )),
              this.columns.map((t) => {
                if (
                  t.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  t.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), t;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(t) {
            return this.sanitizer.bypassSecurityTrustHtml(t);
          }
          onHeaderCheckboxChange(t) {
            const a = t.target;
            if (a) {
              const o = a.checked;
              this.checkboxRef.toArray().forEach((c) => {
                c.nativeElement.checked = o;
              }),
                (this.dataSelected = o ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(t, a) {
            if (a && a.target && 'boolean' == typeof a.target.checked) {
              if (a.target.checked) this.dataSelected.push(t);
              else {
                const c = this.dataSelected.findIndex((l) => l === t);
                -1 !== c && this.dataSelected.splice(c, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)(n.Y36(n.Qsj), n.Y36(e.H7));
          }),
          (i.ɵcmp = n.Xpm({
            type: i,
            selectors: [['o-table']],
            viewQuery: function (t, a) {
              if ((1 & t && n.Gf(_, 5), 2 & t)) {
                let o;
                n.iGM((o = n.CRH())) && (a.checkboxRef = o);
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
            template: function (t, a) {
              1 & t && (n.TgZ(0, 'div', 0), n.YNc(1, m, 8, 8, 'table', 1), n.qZA()),
                2 & t &&
                  (n.Tol(a.customClasses),
                  n.Q6J('ngClass', n.VKq(4, d, a.isScrollable)),
                  n.xp6(1),
                  n.Q6J('ngIf', a.isValidateComponent));
            },
            dependencies: [x.mk, x.sg, x.O5]
          })),
          i
        );
      })();
    },
    2089: (A, f, s) => {
      s.d(f, { Z: () => x });
      var n = s(9808),
        e = s(4893);
      let x = (() => {
        class _ {}
        return (
          (_.ɵfac = function (T) {
            return new (T || _)();
          }),
          (_.ɵmod = e.oAB({ type: _ })),
          (_.ɵinj = e.cJS({ imports: [n.ez] })),
          _
        );
      })();
    },
    4948: (A, f, s) => {
      s.d(f, { B: () => v });
      var n = s(9808),
        e = s(4893);
      function x(r, g) {
        if (1 & r) {
          const m = e.EpF();
          e.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            e.NdJ('click', function () {
              e.CHM(m);
              const C = e.oxw();
              return e.KtG((C.isWindowHTML = !0));
            }),
            e._uU(4, 'HTML'),
            e.qZA()(),
            e.TgZ(5, 'li', 12)(6, 'a', 14),
            e.NdJ('click', function () {
              e.CHM(m);
              const C = e.oxw();
              return e.KtG((C.isWindowHTML = !1));
            }),
            e._uU(7, 'TS'),
            e.qZA()()()();
        }
        if (2 & r) {
          const m = e.oxw();
          e.xp6(3), e.ekj('active', m.isWindowHTML), e.xp6(3), e.ekj('active', !m.isWindowHTML);
        }
      }
      function _(r, g) {
        1 & r && (e.ynx(0), e.Hsn(1), e.BQk());
      }
      function b(r, g) {
        1 & r && (e.ynx(0), e.Hsn(1, 1), e.BQk());
      }
      function T(r, g) {
        if ((1 & r && e.YNc(0, b, 2, 0, 'ng-container', 7), 2 & r)) {
          const m = e.oxw(),
            d = e.MAs(16);
          e.Q6J('ngIf', m.isWindowHTML)('ngIfElse', d);
        }
      }
      function h(r, g) {
        1 & r && e.Hsn(0, 2);
      }
      const Z = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let v = (() => {
        class r {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (r.ɵfac = function (m) {
            return new (m || r)();
          }),
          (r.ɵcmp = e.Xpm({
            type: r,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [e.jDz],
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
            template: function (m, d) {
              if (
                (1 & m &&
                  (e.F$t(Z),
                  e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  e._uU(3),
                  e.qZA(),
                  e.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  e.NdJ('click', function () {
                    return (d.isOpenCode = !d.isOpenCode);
                  }),
                  e.TgZ(8, 'span'),
                  e._uU(9),
                  e.qZA()()()()()(),
                  e.TgZ(10, 'div', 5),
                  e.YNc(11, x, 8, 4, 'nav', 6),
                  e.YNc(12, _, 2, 0, 'ng-container', 7),
                  e.YNc(13, T, 1, 2, 'ng-template', null, 8, e.W1O),
                  e.YNc(15, h, 1, 0, 'ng-template', null, 9, e.W1O),
                  e.qZA()()),
                2 & m)
              ) {
                const C = e.MAs(14);
                e.xp6(3),
                  e.Oqu(d.title),
                  e.xp6(4),
                  e.ekj('active', d.isOpenCode),
                  e.xp6(2),
                  e.Oqu(d.linkCode),
                  e.xp6(2),
                  e.Q6J('ngIf', d.isOpenCode && d.isNavCode),
                  e.xp6(1),
                  e.Q6J('ngIf', !d.isOpenCode)('ngIfElse', C);
              }
            },
            dependencies: [n.ez, n.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          r
        );
      })();
    },
    5353: (A, f, s) => {
      s.r(f), s.d(f, { SpinnerModule: () => a });
      var n = s(9808),
        e = s(4893);
      let x = (() => {
        class o {}
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [n.ez] })),
          o
        );
      })();
      var _ = s(7538),
        b = s(2089),
        T = s(2526),
        h = s(8631),
        Z = s(5570),
        O = s(4883),
        v = s(6434);
      let r = (() => {
        class o {
          constructor() {
            (this.dataSource = h.oO), (this.columns = Z.L0), (this.colors = h.P3), (this.sizes = Z.zf);
          }
        }
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['app-spinner-api']],
            decls: 49,
            vars: 6,
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
                "import { OSpinnerModule } from 'ngx-obelisco-example/spinner';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface', 'mb-5'],
              ['appPrism', ''],
              [1, 'section-interface']
            ],
            template: function (l, u) {
              1 & l &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Spinner de Obelisco'),
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
                e._uU(13, 'OSpinner'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'oSpinner'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6),
                e.qZA()(),
                e.TgZ(22, 'div', 7)(23, 'h4'),
                e._uU(24, 'SpinnerTypes'),
                e.qZA(),
                e.TgZ(25, 'p'),
                e._uU(26, 'Permite establecer los valores de la propiedad '),
                e.TgZ(27, 'strong'),
                e._uU(28, 'type'),
                e.qZA(),
                e._uU(29, '.'),
                e.qZA(),
                e.TgZ(30, 'div', 8)(31, 'pre', 2),
                e._uU(32, '          '),
                e.TgZ(33, 'code', 9),
                e._uU(34),
                e.qZA(),
                e._uU(35, '\n        '),
                e.qZA()(),
                e.TgZ(36, 'h4'),
                e._uU(37, 'Sizes'),
                e.qZA(),
                e.TgZ(38, 'p'),
                e._uU(39, 'Permite establecer el '),
                e.TgZ(40, 'strong'),
                e._uU(41, 'tama\xf1o'),
                e.qZA(),
                e._uU(42, ' del spinner'),
                e.qZA(),
                e.TgZ(43, 'div', 10)(44, 'pre', 2),
                e._uU(45, '            '),
                e.TgZ(46, 'code', 9),
                e._uU(47),
                e.qZA(),
                e._uU(48, '\n        '),
                e.qZA()()()()),
                2 & l &&
                  (e.xp6(21),
                  e.Q6J('columns', u.columns)('dataSource', u.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(13),
                  e.Oqu(u.colors),
                  e.xp6(13),
                  e.hij('\n              ', u.sizes, '\n            '));
            },
            dependencies: [O.L, v.y]
          })),
          o
        );
      })();
      var g = s(4948),
        m = s(2171);
      let d = (() => {
        class o {
          constructor() {
            (this.type = 'info'), (this.size = 'md'), (this.isExpandable = !1);
          }
        }
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['o-spinner']],
            inputs: { type: 'type', size: 'size', isExpandable: 'isExpandable' },
            decls: 3,
            vars: 8,
            consts: [
              ['role', 'status', 1, 'spinner-border'],
              [1, 'sr-only']
            ],
            template: function (l, u) {
              1 & l && (e.TgZ(0, 'div', 0)(1, 'span', 1), e._uU(2, 'Cargando...'), e.qZA()()),
                2 & l &&
                  (e.Tol('text-' + u.type),
                  e.ekj('spinner-border-sm', 'sm' === u.size)('spinner-border-lg', 'lg' === u.size)(
                    'spinner-block',
                    u.isExpandable
                  ));
            }
          })),
          o
        );
      })();
      const i = [
        { path: 'api', component: r },
        {
          path: 'examples',
          component: (() => {
            class o {
              constructor() {
                (this.exampleColors = h.SH),
                  (this.exampleSizes = h.Al),
                  (this.exampleBlock = h.e3),
                  (this.exampleMessage = h.M8);
              }
            }
            return (
              (o.ɵfac = function (l) {
                return new (l || o)();
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [['app-spinner-examples']],
                decls: 56,
                vars: 5,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Tipos'],
                  ['component', '', 1, 'spinner-container'],
                  ['type', 'primary'],
                  ['type', 'secondary'],
                  ['type', 'success'],
                  ['type', 'danger'],
                  ['type', 'light'],
                  ['type', 'dark'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['title', 'Tama\xf1os'],
                  ['size', 'sm'],
                  ['size', 'lg'],
                  ['title', 'Expandible'],
                  [2, 'width', '64px'],
                  [3, 'isExpandable'],
                  ['title', 'Con mensaje'],
                  ['component', '', 1, 'd-flex', 'flex-column', 'align-items-center'],
                  [1, 'mt-2']
                ],
                template: function (l, u) {
                  1 & l &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-spinner')(4, 'o-spinner', 3)(5, 'o-spinner', 4)(6, 'o-spinner', 5)(7, 'o-spinner', 6)(
                      8,
                      'o-spinner',
                      7
                    )(9, 'o-spinner', 8),
                    e.qZA(),
                    e.TgZ(10, 'pre', 9),
                    e._uU(11, '        '),
                    e.TgZ(12, 'button', 10),
                    e._uU(13, 'Copiar'),
                    e.qZA(),
                    e._uU(14, '\n        '),
                    e.TgZ(15, 'code', 11),
                    e._uU(16),
                    e.qZA(),
                    e._uU(17, '\n      '),
                    e.qZA()(),
                    e.TgZ(18, 'app-viewer', 12)(19, 'div', 2),
                    e._UZ(20, 'o-spinner', 13)(21, 'o-spinner')(22, 'o-spinner', 14),
                    e.qZA(),
                    e.TgZ(23, 'pre', 9),
                    e._uU(24, '        '),
                    e.TgZ(25, 'button', 10),
                    e._uU(26, 'Copiar'),
                    e.qZA(),
                    e._uU(27, '\n        '),
                    e.TgZ(28, 'code', 11),
                    e._uU(29),
                    e.qZA(),
                    e._uU(30, '\n      '),
                    e.qZA()(),
                    e.TgZ(31, 'app-viewer', 15)(32, 'div', 2)(33, 'div', 16),
                    e._UZ(34, 'o-spinner', 17),
                    e.qZA()(),
                    e.TgZ(35, 'pre', 9),
                    e._uU(36, '        '),
                    e.TgZ(37, 'button', 10),
                    e._uU(38, 'Copiar'),
                    e.qZA(),
                    e._uU(39, '\n        '),
                    e.TgZ(40, 'code', 11),
                    e._uU(41),
                    e.qZA(),
                    e._uU(42, '\n      '),
                    e.qZA()(),
                    e.TgZ(43, 'app-viewer', 18)(44, 'div', 19),
                    e._UZ(45, 'o-spinner', 14),
                    e.TgZ(46, 'small', 20),
                    e._uU(47, 'Cargando...'),
                    e.qZA()(),
                    e.TgZ(48, 'pre', 9),
                    e._uU(49, '        '),
                    e.TgZ(50, 'button', 10),
                    e._uU(51, 'Copiar'),
                    e.qZA(),
                    e._uU(52, '\n        '),
                    e.TgZ(53, 'code', 11),
                    e._uU(54),
                    e.qZA(),
                    e._uU(55, '\n      '),
                    e.qZA()()()),
                    2 & l &&
                      (e.xp6(16),
                      e.hij('\n          ', u.exampleColors, '\n        '),
                      e.xp6(13),
                      e.hij('\n          ', u.exampleSizes, '\n        '),
                      e.xp6(5),
                      e.Q6J('isExpandable', !0),
                      e.xp6(7),
                      e.hij('\n          ', u.exampleBlock, '\n        '),
                      e.xp6(13),
                      e.hij('\n          ', u.exampleMessage, '\n        '));
                },
                dependencies: [g.B, m.y, v.y, d],
                styles: [
                  '.spinner-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:2rem;margin-bottom:1rem}'
                ]
              })),
              o
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let p = (() => {
        class o {}
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [T.Bz.forChild(i), T.Bz] })),
          o
        );
      })();
      var t = s(9384);
      let a = (() => {
        class o {}
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [n.ez, p, _.Z, b.Z, g.B, x, t.T] })),
          o
        );
      })();
    }
  }
]);
