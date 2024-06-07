'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [1343],
  {
    4883: (v, f, c) => {
      c.d(f, { L: () => C });
      var t = c(4893),
        i = c(2313),
        x = c(9808);
      const d = ['checkbox'];
      function e(o, m) {
        if (1 & o) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (a) {
              t.CHM(n);
              const p = t.oxw(2);
              return t.KtG(p.onHeaderCheckboxChange(a));
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
      function w(o, m) {
        if ((1 & o && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & o)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function b(o, m) {
        if ((1 & o && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & o)) {
          const n = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function Z(o, m) {
        if (1 & o) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (a) {
              t.CHM(n);
              const p = t.oxw().$implicit,
                r = t.oxw(2);
              return t.KtG(r.onCheckboxChange(p, a));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & o) {
          const n = t.oxw().index,
            l = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', l.id, '-checkbox_', n, '')('name', '', l.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', l.id, '-checkbox_', n, '');
        }
      }
      function T(o, m) {
        if ((1 & o && t._UZ(0, 'div', 14), 2 & o)) {
          const n = t.oxw().$implicit,
            l = t.oxw().$implicit,
            a = t.oxw(2);
          t.Q6J('innerHTML', a.sanitizeHTML(l[n.key].data), t.oJD);
        }
      }
      function O(o, m) {
        if ((1 & o && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, T, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & o)) {
          const n = m.$implicit,
            l = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', l[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', l[n.key].data);
        }
      }
      function u(o, m) {
        if (
          (1 & o && (t.TgZ(0, 'tr'), t.YNc(1, Z, 5, 6, 'td', 9), t.YNc(2, O, 3, 2, 'ng-container', 4), t.qZA()), 2 & o)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const g = function (o, m) {
        return { 'table-borderless': o, 'table-striped': m };
      };
      function h(o, m) {
        if (
          (1 & o &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, w, 2, 2, 'th', 3),
            t.YNc(5, b, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & o)
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
      const _ = function (o) {
        return { 'responsive-scroll': o };
      };
      let C = (() => {
        class o {
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
              const a = l.checked;
              this.checkboxRef.toArray().forEach((p) => {
                p.nativeElement.checked = a;
              }),
                (this.dataSelected = a ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(n);
              else {
                const p = this.dataSelected.findIndex((r) => r === n);
                -1 !== p && this.dataSelected.splice(p, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)(t.Y36(t.Qsj), t.Y36(i.H7));
          }),
          (o.ɵcmp = t.Xpm({
            type: o,
            selectors: [['o-table']],
            viewQuery: function (n, l) {
              if ((1 & n && t.Gf(d, 5), 2 & n)) {
                let a;
                t.iGM((a = t.CRH())) && (l.checkboxRef = a);
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
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, h, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(l.customClasses),
                  t.Q6J('ngClass', t.VKq(4, _, l.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', l.isValidateComponent));
            },
            dependencies: [x.mk, x.sg, x.O5]
          })),
          o
        );
      })();
    },
    2089: (v, f, c) => {
      c.d(f, { Z: () => x });
      var t = c(9808),
        i = c(4893);
      let x = (() => {
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
    4948: (v, f, c) => {
      c.d(f, { B: () => O });
      var t = c(9808),
        i = c(4893);
      function x(u, g) {
        if (1 & u) {
          const h = i.EpF();
          i.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            i.NdJ('click', function () {
              i.CHM(h);
              const C = i.oxw();
              return i.KtG((C.isWindowHTML = !0));
            }),
            i._uU(4, 'HTML'),
            i.qZA()(),
            i.TgZ(5, 'li', 12)(6, 'a', 14),
            i.NdJ('click', function () {
              i.CHM(h);
              const C = i.oxw();
              return i.KtG((C.isWindowHTML = !1));
            }),
            i._uU(7, 'TS'),
            i.qZA()()()();
        }
        if (2 & u) {
          const h = i.oxw();
          i.xp6(3), i.ekj('active', h.isWindowHTML), i.xp6(3), i.ekj('active', !h.isWindowHTML);
        }
      }
      function d(u, g) {
        1 & u && (i.ynx(0), i.Hsn(1), i.BQk());
      }
      function e(u, g) {
        1 & u && (i.ynx(0), i.Hsn(1, 1), i.BQk());
      }
      function w(u, g) {
        if ((1 & u && i.YNc(0, e, 2, 0, 'ng-container', 7), 2 & u)) {
          const h = i.oxw(),
            _ = i.MAs(16);
          i.Q6J('ngIf', h.isWindowHTML)('ngIfElse', _);
        }
      }
      function b(u, g) {
        1 & u && i.Hsn(0, 2);
      }
      const Z = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        T = ['[component]', '[component-html]', '[component-ts]'];
      let O = (() => {
        class u {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (u.ɵfac = function (h) {
            return new (h || u)();
          }),
          (u.ɵcmp = i.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [i.jDz],
            ngContentSelectors: T,
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
            template: function (h, _) {
              if (
                (1 & h &&
                  (i.F$t(Z),
                  i.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  i._uU(3),
                  i.qZA(),
                  i.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  i.NdJ('click', function () {
                    return (_.isOpenCode = !_.isOpenCode);
                  }),
                  i.TgZ(8, 'span'),
                  i._uU(9),
                  i.qZA()()()()()(),
                  i.TgZ(10, 'div', 5),
                  i.YNc(11, x, 8, 4, 'nav', 6),
                  i.YNc(12, d, 2, 0, 'ng-container', 7),
                  i.YNc(13, w, 1, 2, 'ng-template', null, 8, i.W1O),
                  i.YNc(15, b, 1, 0, 'ng-template', null, 9, i.W1O),
                  i.qZA()()),
                2 & h)
              ) {
                const C = i.MAs(14);
                i.xp6(3),
                  i.Oqu(_.title),
                  i.xp6(4),
                  i.ekj('active', _.isOpenCode),
                  i.xp6(2),
                  i.Oqu(_.linkCode),
                  i.xp6(2),
                  i.Q6J('ngIf', _.isOpenCode && _.isNavCode),
                  i.xp6(1),
                  i.Q6J('ngIf', !_.isOpenCode)('ngIfElse', C);
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
    1343: (v, f, c) => {
      c.r(f), c.d(f, { SwitchModule: () => l });
      var t = c(9808),
        i = c(2526),
        x = c(5570),
        d = c(3677),
        e = c(4893),
        w = c(4883),
        b = c(6434);
      let Z = (() => {
        class a {
          constructor() {
            (this.dataSource = d.yE), (this.columns = x.L0), (this.dataSourceOutput = d.r3);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-switch-api']],
            decls: 26,
            vars: 8,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OSwitchModule } from 'ngx-obelisco-example/switch';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered']
            ],
            template: function (r, s) {
              1 & r &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Switch de Obelisco'),
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
                e._uU(13, 'OSwitch'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-switch'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6)(22, 'br'),
                e.TgZ(23, 'h5'),
                e._uU(24, 'M\xe9todos'),
                e.qZA(),
                e._UZ(25, 'o-table', 6),
                e.qZA()()()),
                2 & r &&
                  (e.xp6(21),
                  e.Q6J('columns', s.columns)('dataSource', s.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(4),
                  e.Q6J('columns', s.columns)('dataSource', s.dataSourceOutput)('isStriped', !0)('isBordered', !0));
            },
            dependencies: [w.L, b.y]
          })),
          a
        );
      })();
      var T = c(4948),
        O = c(2171);
      let u = (() => {
        class a {
          constructor() {
            (this.isDark = !1),
              (this.isDisabled = !1),
              (this.isSmall = !1),
              (this.isFixed = !1),
              (this.customClasses = ''),
              (this.customClassesLabel = ''),
              (this._switchValue = !1),
              (this.switchValueChange = new e.vpe());
          }
          set switchValue(r) {
            this._switchValue = !!this.isFixed || r;
          }
          get switchValue() {
            return this._switchValue;
          }
          onSwitchChange() {
            this.isFixed || ((this.switchValue = !this.switchValue), this.switchValueChange.emit(this.switchValue));
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-switch']],
            inputs: {
              id: 'id',
              labelOn: 'labelOn',
              labelOff: 'labelOff',
              isDark: 'isDark',
              isDisabled: 'isDisabled',
              isSmall: 'isSmall',
              isFixed: 'isFixed',
              customClasses: 'customClasses',
              customClassesLabel: 'customClassesLabel',
              switchValue: 'switchValue'
            },
            outputs: { switchValueChange: 'switchValueChange' },
            decls: 5,
            vars: 19,
            consts: [
              [1, 'switch', 3, 'ngClass'],
              ['type', 'checkbox', 3, 'disabled', 'checked', 'change'],
              [1, 'slider'],
              [1, 'switch-label', 3, 'ngClass']
            ],
            template: function (r, s) {
              1 & r &&
                (e.TgZ(0, 'label', 0)(1, 'input', 1),
                e.NdJ('change', function () {
                  return s.onSwitchChange();
                }),
                e.qZA(),
                e._UZ(2, 'span', 2),
                e.TgZ(3, 'span', 3),
                e._uU(4),
                e.qZA()()),
                2 & r &&
                  (e.Udp('pointer-events', s.isFixed ? 'none' : null),
                  e.ekj('switch-dark', s.isDark)('switch-sm', s.isSmall),
                  e.Q6J('ngClass', s.customClasses),
                  e.uIk('for', s.id),
                  e.xp6(1),
                  e.Q6J('disabled', s.isDisabled)('checked', s.switchValue),
                  e.uIk('id', s.id),
                  e.xp6(2),
                  e.ekj('on', s.switchValue)('off', !s.switchValue),
                  e.Q6J('ngClass', s.customClassesLabel),
                  e.uIk('disabled', !!s.isDisabled || null)(
                    'aria-label',
                    s.labelOn || s.labelOff ? null : s.switchValue ? 'Prendido' : 'Apagado'
                  ),
                  e.xp6(1),
                  e.hij(' ', s.switchValue ? s.labelOn : s.labelOff, ' '));
            },
            dependencies: [t.mk],
            styles: ['label.switch-label[disabled=true][_ngcontent-%COMP%]{cursor:not-allowed}']
          })),
          a
        );
      })();
      const h = [
        { path: 'api', component: Z },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.exampleDefault = d.U7),
                  (this.exampleWithLabel = d.BP),
                  (this.exampleDark = d.Ik),
                  (this.exampleSmall = d.SV),
                  (this.exampleChecked = d.oU),
                  (this.exampleDisabled = d.$8);
              }
            }
            return (
              (a.ɵfac = function (r) {
                return new (r || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-switch-examples']],
                decls: 72,
                vars: 24,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Predeterminado', 'id', 'example-directive'],
                  ['component', '', 1, 'd-flex'],
                  [3, 'switchValue'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['title', 'Con label', 'id', 'example-directive'],
                  [3, 'id', 'labelOff', 'labelOn'],
                  ['title', 'Oscuro', 'id', 'example-directive'],
                  [3, 'isDark'],
                  [3, 'switchValue', 'isDark'],
                  ['title', 'Chico', 'id', 'example-directive'],
                  [3, 'isSmall'],
                  [3, 'switchValue', 'isSmall'],
                  ['title', 'Valor fijo', 'id', 'example-directive'],
                  [3, 'isFixed'],
                  [3, 'switchValue', 'isFixed'],
                  ['title', 'Deshabilitado', 'id', 'example-directive'],
                  [3, 'isDisabled', 'labelOff'],
                  [3, 'isDisabled', 'labelOn', 'switchValue']
                ],
                template: function (r, s) {
                  1 & r &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-switch')(4, 'o-switch', 3),
                    e.qZA(),
                    e.TgZ(5, 'pre', 4),
                    e._uU(6, '      '),
                    e.TgZ(7, 'button', 5),
                    e._uU(8, 'Copiar'),
                    e.qZA(),
                    e._uU(9, '\n      '),
                    e.TgZ(10, 'code', 6),
                    e._uU(11),
                    e.qZA(),
                    e._uU(12, '\n    '),
                    e.qZA()(),
                    e.TgZ(13, 'app-viewer', 7)(14, 'div', 2),
                    e._UZ(15, 'o-switch', 8),
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
                    e.TgZ(24, 'app-viewer', 9)(25, 'div', 2),
                    e._UZ(26, 'o-switch', 10)(27, 'o-switch', 11),
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
                    e.TgZ(36, 'app-viewer', 12)(37, 'div', 2),
                    e._UZ(38, 'o-switch', 13)(39, 'o-switch', 14),
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
                    e.TgZ(48, 'app-viewer', 15)(49, 'div', 2),
                    e._UZ(50, 'o-switch', 16)(51, 'o-switch', 17),
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
                    e.TgZ(60, 'app-viewer', 18)(61, 'div', 2),
                    e._UZ(62, 'o-switch', 19)(63, 'o-switch', 20),
                    e.qZA(),
                    e.TgZ(64, 'pre', 4),
                    e._uU(65, '      '),
                    e.TgZ(66, 'button', 5),
                    e._uU(67, 'Copiar'),
                    e.qZA(),
                    e._uU(68, '\n      '),
                    e.TgZ(69, 'code', 6),
                    e._uU(70),
                    e.qZA(),
                    e._uU(71, '\n    '),
                    e.qZA()()()),
                    2 & r &&
                      (e.xp6(4),
                      e.Q6J('switchValue', !0),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleDefault, '\n      '),
                      e.xp6(4),
                      e.Q6J('id', 'example')('labelOff', 'Apagado')('labelOn', 'Prendido'),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleWithLabel, '\n      '),
                      e.xp6(4),
                      e.Q6J('isDark', !0),
                      e.xp6(1),
                      e.Q6J('switchValue', !0)('isDark', !0),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleDark, '\n      '),
                      e.xp6(4),
                      e.Q6J('isSmall', !0),
                      e.xp6(1),
                      e.Q6J('switchValue', !0)('isSmall', !0),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleSmall, '\n      '),
                      e.xp6(4),
                      e.Q6J('isFixed', !0),
                      e.xp6(1),
                      e.Q6J('switchValue', !0)('isFixed', !0),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleChecked, '\n      '),
                      e.xp6(4),
                      e.Q6J('isDisabled', !0)('labelOff', 'Apagado'),
                      e.xp6(1),
                      e.Q6J('isDisabled', !0)('labelOn', 'Prendido')('switchValue', !0),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleDisabled, '\n      '));
                },
                dependencies: [T.B, b.y, O.y, u],
                styles: ['o-switch[_ngcontent-%COMP%]{margin-right:.5rem}']
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
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [i.Bz.forChild(h), i.Bz] })),
            a
          );
        })(),
        C = (() => {
          class a {}
          return (
            (a.ɵfac = function (r) {
              return new (r || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [t.ez] })),
            a
          );
        })();
      var o = c(2089),
        m = c(7538),
        n = c(9384);
      let l = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, _, m.Z, o.Z, T.B, C, n.T] })),
          a
        );
      })();
    }
  }
]);
