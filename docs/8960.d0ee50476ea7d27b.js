'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [8960],
  {
    3717: (J, A, d) => {
      d.d(A, { J: () => f });
      var t = d(9808),
        c = d(2526),
        i = d(4893);
      let f = (() => {
        class e {}
        return (
          (e.ɵfac = function (D) {
            return new (D || e)();
          }),
          (e.ɵmod = i.oAB({ type: e })),
          (e.ɵinj = i.cJS({ imports: [t.ez, c.Bz] })),
          e
        );
      })();
    },
    4883: (J, A, d) => {
      d.d(A, { L: () => x });
      var t = d(4893),
        c = d(2313),
        i = d(9808);
      const f = ['checkbox'];
      function e(r, m) {
        if (1 & r) {
          const l = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (T) {
              t.CHM(l);
              const O = t.oxw(2);
              return t.KtG(O.onHeaderCheckboxChange(T));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & r) {
          const l = t.oxw(2);
          t.Q6J('ngClass', l.checkbox.customClassesTh),
            t.xp6(2),
            t.MGl('id', '', l.id, '-selectAllCheckbox')('name', '', l.id, '-selectAllCheckbox'),
            t.xp6(1),
            t.MGl('for', '', l.id, '-selectAllCheckbox'),
            t.Q6J('ngClass', l.checkbox.customClassesLabel),
            t.xp6(1),
            t.Oqu(l.checkbox.title);
        }
      }
      function b(r, m) {
        if ((1 & r && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & r)) {
          const l = t.oxw(2);
          t.Q6J('ngClass', l.checkbox.customClassesTh), t.xp6(1), t.hij(' ', l.checkbox.title, ' ');
        }
      }
      function D(r, m) {
        if ((1 & r && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & r)) {
          const l = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', l.customClasses), t.xp6(1), t.Oqu(l.value);
        }
      }
      function w(r, m) {
        if (1 & r) {
          const l = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (T) {
              t.CHM(l);
              const O = t.oxw().$implicit,
                q = t.oxw(2);
              return t.KtG(q.onCheckboxChange(O, T));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & r) {
          const l = t.oxw().index,
            p = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', p.id, '-checkbox_', l, '')('name', '', p.id, '-checkbox_', l, ''),
            t.xp6(2),
            t.hYB('for', '', p.id, '-checkbox_', l, '');
        }
      }
      function U(r, m) {
        if ((1 & r && t._UZ(0, 'div', 14), 2 & r)) {
          const l = t.oxw().$implicit,
            p = t.oxw().$implicit,
            T = t.oxw(2);
          t.Q6J('innerHTML', T.sanitizeHTML(p[l.key].data), t.oJD);
        }
      }
      function k(r, m) {
        if ((1 & r && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, U, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & r)) {
          const l = m.$implicit,
            p = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', p[l.key].customClasses), t.xp6(1), t.Q6J('ngIf', p[l.key].data);
        }
      }
      function u(r, m) {
        if (
          (1 & r && (t.TgZ(0, 'tr'), t.YNc(1, w, 5, 6, 'td', 9), t.YNc(2, k, 3, 2, 'ng-container', 4), t.qZA()), 2 & r)
        ) {
          const l = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', l.checkbox), t.xp6(1), t.Q6J('ngForOf', l.columns);
        }
      }
      const Z = function (r, m) {
        return { 'table-borderless': r, 'table-striped': m };
      };
      function C(r, m) {
        if (
          (1 & r &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, b, 2, 2, 'th', 3),
            t.YNc(5, D, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & r)
        ) {
          const l = t.oxw();
          t.Q6J('ngClass', t.WLB(5, Z, !l.isBordered, l.isStriped)),
            t.xp6(3),
            t.Q6J('ngIf', 1 == (null == l.checkbox ? null : l.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngIf', 0 == (null == l.checkbox ? null : l.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngForOf', l.columns),
            t.xp6(2),
            t.Q6J('ngForOf', l.dataSource);
        }
      }
      const h = function (r) {
        return { 'responsive-scroll': r };
      };
      let x = (() => {
        class r {
          constructor(l, p) {
            (this.renderer = l),
              (this.sanitizer = p),
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
            this.checkboxRef.map((l) => {
              this.inputCheckArr.push(l.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((l) => {
              if ('' === l.key || '' === l.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((l) => (l.value = l.value.trim())),
              (this.columns = this.columns.map(
                (l) => ((l.value = l.value.charAt(0).toUpperCase() + l.value.slice(1).toLowerCase()), l)
              )),
              this.columns.map((l) => {
                if (
                  l.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  l.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), l;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(l) {
            return this.sanitizer.bypassSecurityTrustHtml(l);
          }
          onHeaderCheckboxChange(l) {
            const p = l.target;
            if (p) {
              const T = p.checked;
              this.checkboxRef.toArray().forEach((O) => {
                O.nativeElement.checked = T;
              }),
                (this.dataSelected = T ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(l, p) {
            if (p && p.target && 'boolean' == typeof p.target.checked) {
              if (p.target.checked) this.dataSelected.push(l);
              else {
                const O = this.dataSelected.findIndex((q) => q === l);
                -1 !== O && this.dataSelected.splice(O, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (r.ɵfac = function (l) {
            return new (l || r)(t.Y36(t.Qsj), t.Y36(c.H7));
          }),
          (r.ɵcmp = t.Xpm({
            type: r,
            selectors: [['o-table']],
            viewQuery: function (l, p) {
              if ((1 & l && t.Gf(f, 5), 2 & l)) {
                let T;
                t.iGM((T = t.CRH())) && (p.checkboxRef = T);
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
            template: function (l, p) {
              1 & l && (t.TgZ(0, 'div', 0), t.YNc(1, C, 8, 8, 'table', 1), t.qZA()),
                2 & l &&
                  (t.Tol(p.customClasses),
                  t.Q6J('ngClass', t.VKq(4, h, p.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', p.isValidateComponent));
            },
            dependencies: [i.mk, i.sg, i.O5]
          })),
          r
        );
      })();
    },
    2089: (J, A, d) => {
      d.d(A, { Z: () => i });
      var t = d(9808),
        c = d(4893);
      let i = (() => {
        class f {}
        return (
          (f.ɵfac = function (b) {
            return new (b || f)();
          }),
          (f.ɵmod = c.oAB({ type: f })),
          (f.ɵinj = c.cJS({ imports: [t.ez] })),
          f
        );
      })();
    },
    4948: (J, A, d) => {
      d.d(A, { B: () => k });
      var t = d(9808),
        c = d(4893);
      function i(u, Z) {
        if (1 & u) {
          const C = c.EpF();
          c.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            c.NdJ('click', function () {
              c.CHM(C);
              const x = c.oxw();
              return c.KtG((x.isWindowHTML = !0));
            }),
            c._uU(4, 'HTML'),
            c.qZA()(),
            c.TgZ(5, 'li', 12)(6, 'a', 14),
            c.NdJ('click', function () {
              c.CHM(C);
              const x = c.oxw();
              return c.KtG((x.isWindowHTML = !1));
            }),
            c._uU(7, 'TS'),
            c.qZA()()()();
        }
        if (2 & u) {
          const C = c.oxw();
          c.xp6(3), c.ekj('active', C.isWindowHTML), c.xp6(3), c.ekj('active', !C.isWindowHTML);
        }
      }
      function f(u, Z) {
        1 & u && (c.ynx(0), c.Hsn(1), c.BQk());
      }
      function e(u, Z) {
        1 & u && (c.ynx(0), c.Hsn(1, 1), c.BQk());
      }
      function b(u, Z) {
        if ((1 & u && c.YNc(0, e, 2, 0, 'ng-container', 7), 2 & u)) {
          const C = c.oxw(),
            h = c.MAs(16);
          c.Q6J('ngIf', C.isWindowHTML)('ngIfElse', h);
        }
      }
      function D(u, Z) {
        1 & u && c.Hsn(0, 2);
      }
      const w = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        U = ['[component]', '[component-html]', '[component-ts]'];
      let k = (() => {
        class u {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (u.ɵfac = function (C) {
            return new (C || u)();
          }),
          (u.ɵcmp = c.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [c.jDz],
            ngContentSelectors: U,
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
            template: function (C, h) {
              if (
                (1 & C &&
                  (c.F$t(w),
                  c.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  c._uU(3),
                  c.qZA(),
                  c.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  c.NdJ('click', function () {
                    return (h.isOpenCode = !h.isOpenCode);
                  }),
                  c.TgZ(8, 'span'),
                  c._uU(9),
                  c.qZA()()()()()(),
                  c.TgZ(10, 'div', 5),
                  c.YNc(11, i, 8, 4, 'nav', 6),
                  c.YNc(12, f, 2, 0, 'ng-container', 7),
                  c.YNc(13, b, 1, 2, 'ng-template', null, 8, c.W1O),
                  c.YNc(15, D, 1, 0, 'ng-template', null, 9, c.W1O),
                  c.qZA()()),
                2 & C)
              ) {
                const x = c.MAs(14);
                c.xp6(3),
                  c.Oqu(h.title),
                  c.xp6(4),
                  c.ekj('active', h.isOpenCode),
                  c.xp6(2),
                  c.Oqu(h.linkCode),
                  c.xp6(2),
                  c.Q6J('ngIf', h.isOpenCode && h.isNavCode),
                  c.xp6(1),
                  c.Q6J('ngIf', !h.isOpenCode)('ngIfElse', x);
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
    8960: (J, A, d) => {
      d.r(A), d.d(A, { CalendarModule: () => _e });
      var t = d(9808),
        c = d(2526),
        i = d(5417),
        f = d(5570),
        e = d(4893),
        b = d(4883),
        D = d(6434);
      let w = (() => {
        class o {
          constructor() {
            (this.columns = f.L0),
              (this.dataSource = i.Y_),
              (this.activedayInterface = i.ot),
              (this.calendarDateInterface = i.gQ),
              (this.activedayDataSource = i.F),
              (this.calendarDateDataSource = i.tE),
              (this.activedayTypes = i.Sc);
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['app-calendar-api']],
            decls: 70,
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
                "import { OCalendarModule } from 'ngx-obelisco-example/calendar';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type', 'mb-5'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              [1, 'section-properties'],
              [1, 'section-type'],
              [1, 'section-interface', 'mb-5'],
              ['appPrism', '']
            ],
            template: function (n, a) {
              1 & n &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Calendario de Obelisco'),
                e.qZA(),
                e.TgZ(4, 'pre', 2),
                e._uU(5, '          '),
                e._UZ(6, 'code', 3),
                e._uU(7, '\n        '),
                e.qZA()(),
                e.TgZ(8, 'h3'),
                e._uU(9, 'Etiqueta'),
                e.qZA(),
                e._UZ(10, 'hr'),
                e.TgZ(11, 'div', 4)(12, 'h4'),
                e._uU(13, 'OCalendar'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-calendar'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades generales'),
                e.qZA(),
                e._UZ(21, 'o-table', 6),
                e.qZA()(),
                e.TgZ(22, 'h3'),
                e._uU(23, 'Tipos de datos'),
                e.qZA(),
                e._UZ(24, 'hr'),
                e.TgZ(25, 'div', 7)(26, 'h4'),
                e._uU(27, 'CalendarDate'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de las referencias del mes y a\xf1o.'),
                e.qZA(),
                e.TgZ(30, 'div', 8)(31, 'pre', 2),
                e._uU(32, '        '),
                e.TgZ(33, 'code', 9),
                e._uU(34),
                e.qZA(),
                e._uU(35, '\n      '),
                e.qZA(),
                e.TgZ(36, 'div', 10)(37, 'h5'),
                e._uU(38, 'Propiedades'),
                e.qZA(),
                e._UZ(39, 'o-table', 6),
                e.qZA()()(),
                e.TgZ(40, 'div', 11)(41, 'h4'),
                e._uU(42, 'ActiveDay'),
                e.qZA(),
                e.TgZ(43, 'p'),
                e._uU(44, 'Permite establecer los valores de las referencias de los d\xedas.'),
                e.qZA(),
                e.TgZ(45, 'div', 8)(46, 'pre', 2),
                e._uU(47, '        '),
                e.TgZ(48, 'code', 9),
                e._uU(49),
                e.qZA(),
                e._uU(50, '\n      '),
                e.qZA(),
                e.TgZ(51, 'div', 10)(52, 'h5'),
                e._uU(53, 'Propiedades'),
                e.qZA(),
                e._UZ(54, 'o-table', 6),
                e.qZA()()(),
                e._UZ(55, 'br'),
                e.TgZ(56, 'div', 11)(57, 'h4'),
                e._uU(58, 'ActiveDayTypes'),
                e.qZA(),
                e.TgZ(59, 'p'),
                e._uU(60, 'Permite establecer los valores de la propiedad '),
                e.TgZ(61, 'strong'),
                e._uU(62, 'type'),
                e.qZA(),
                e._uU(63, '.'),
                e.qZA(),
                e.TgZ(64, 'div', 12)(65, 'pre', 2),
                e._uU(66, '          '),
                e.TgZ(67, 'code', 13),
                e._uU(68),
                e.qZA(),
                e._uU(69, '\n        '),
                e.qZA()()()()),
                2 & n &&
                  (e.xp6(21),
                  e.Q6J('columns', a.columns)('dataSource', a.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(13),
                  e.Oqu(a.calendarDateInterface),
                  e.xp6(5),
                  e.Q6J('columns', a.columns)('dataSource', a.calendarDateDataSource)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(10),
                  e.Oqu(a.activedayInterface),
                  e.xp6(5),
                  e.Q6J('columns', a.columns)('dataSource', a.activedayDataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(14),
                  e.Oqu(a.activedayTypes));
            },
            dependencies: [b.L, D.y]
          })),
          o
        );
      })();
      var U = d(4948),
        k = d(2171);
      function u(o, s) {
        if ((1 & o && (e.TgZ(0, 'th')(1, 'span'), e._uU(2), e.qZA()()), 2 & o)) {
          const n = s.$implicit;
          e.xp6(2), e.Oqu(n);
        }
      }
      function Z(o, s) {
        1 & o && e._UZ(0, 'td');
      }
      function C(o, s) {
        if ((1 & o && (e.ynx(0), e.YNc(1, Z, 1, 0, 'td', 6), e.BQk()), 2 & o)) {
          const n = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', n.emptyDaysArray);
        }
      }
      function h(o, s) {
        1 & o && e.GkF(0);
      }
      const x = function (o) {
        return { day: o };
      };
      function r(o, s) {
        if ((1 & o && (e.TgZ(0, 'td'), e.YNc(1, h, 1, 0, 'ng-container', 14), e.qZA()), 2 & o)) {
          const n = s.$implicit;
          e.oxw();
          const a = e.MAs(21);
          e.xp6(1), e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.VKq(2, x, n));
        }
      }
      function m(o, s) {
        1 & o && e.GkF(0);
      }
      function l(o, s) {
        if ((1 & o && (e.ynx(0), e.YNc(1, m, 1, 0, 'ng-container', 14), e.BQk()), 2 & o)) {
          const n = e.oxw().$implicit;
          e.oxw(2);
          const a = e.MAs(21);
          e.xp6(1), e.Q6J('ngTemplateOutlet', a)('ngTemplateOutletContext', e.VKq(2, x, n));
        }
      }
      function p(o, s) {
        1 & o && (e.ynx(0), e._UZ(1, 'span'), e.BQk());
      }
      function T(o, s) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, 'td'),
            e.YNc(2, l, 2, 4, 'ng-container', 8),
            e.YNc(3, p, 2, 0, 'ng-container', 8),
            e.qZA(),
            e.BQk()),
          2 & o)
        ) {
          const n = s.$implicit;
          e.xp6(2), e.Q6J('ngIf', n >= 0), e.xp6(1), e.Q6J('ngIf', n < 0);
        }
      }
      function O(o, s) {
        if ((1 & o && (e.TgZ(0, 'tr', 7), e.YNc(1, T, 4, 2, 'ng-container', 6), e.qZA()), 2 & o)) {
          const n = s.$implicit;
          e.xp6(1), e.Q6J('ngForOf', n);
        }
      }
      function q(o, s) {
        1 & o && (e.TgZ(0, 'td'), e._UZ(1, 'span'), e.qZA());
      }
      const Q = function () {
        return [1, 2, 3, 4, 5, 6, 7];
      };
      function E(o, s) {
        1 & o && (e.TgZ(0, 'tr', 7), e.YNc(1, q, 2, 0, 'td', 6), e.qZA()),
          2 & o && (e.xp6(1), e.Q6J('ngForOf', e.DdM(1, Q)));
      }
      function S(o, s) {
        1 & o && e.GkF(0);
      }
      function N(o, s) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, 'div', 17)(2, 'div', 18)(3, 'button', 19),
            e._UZ(4, 'i', 20),
            e.TgZ(5, 'span', 21),
            e._uU(6, 'Referencias'),
            e.qZA()(),
            e.TgZ(7, 'div', 22)(8, 'div', 23),
            e.YNc(9, S, 1, 0, 'ng-container', 24),
            e.qZA()()()(),
            e.BQk()),
          2 & o)
        ) {
          const n = e.oxw(2),
            a = e.MAs(19);
          e.xp6(3),
            e.uIk('data-target', '#collapse' + n.monthsTitles(n.month)),
            e.xp6(4),
            e.MGl('id', 'collapse', n.monthsTitles(n.month), ''),
            e.xp6(2),
            e.Q6J('ngTemplateOutlet', a);
        }
      }
      function I(o, s) {
        if ((1 & o && (e.TgZ(0, 'div', 15), e.YNc(1, N, 10, 3, 'ng-container', 16), e.qZA()), 2 & o)) {
          const n = e.oxw(),
            a = e.MAs(19);
          e.xp6(1), e.Q6J('ngIf', n.isCollapsed)('ngIfElse', a);
        }
      }
      function B(o, s) {
        if ((1 & o && (e.TgZ(0, 'li')(1, 'strong'), e._uU(2), e.qZA(), e._uU(3), e.qZA()), 2 & o)) {
          const n = s.$implicit,
            a = e.oxw(2);
          e.xp6(2), e.hij(' ', a.typeOfDays(n.day), ' '), e.xp6(1), e.hij(' ', n.title, ' ');
        }
      }
      function L(o, s) {
        if ((1 & o && (e.TgZ(0, 'ul', 25), e.YNc(1, B, 4, 2, 'li', 6), e.qZA()), 2 & o)) {
          const n = e.oxw();
          e.xp6(1), e.Q6J('ngForOf', n.activeDays);
        }
      }
      function Y(o, s) {
        if (1 & o) {
          const n = e.EpF();
          e.TgZ(0, 'a', 29),
            e.NdJ('click', function (_) {
              e.CHM(n);
              const g = e.oxw(2).day,
                v = e.oxw();
              let y;
              return e.KtG((null == (y = v.getActiveDay(g)) ? null : y.isDisabled) && _.preventDefault());
            }),
            e.TgZ(1, 'span', 30),
            e._uU(2),
            e.qZA()();
        }
        if (2 & o) {
          const n = e.oxw(2).day,
            a = e.oxw();
          let _, g, v, y;
          e.ekj('disabled', null == (_ = a.getActiveDay(n)) ? null : _.isDisabled),
            e.s9C('href', null == (g = a.getActiveDay(n)) ? null : g.url, e.LSH),
            e.s9C('title', null == (v = a.getActiveDay(n)) ? null : v.title),
            e.xp6(1),
            e.Q6J('ngClass', a.getClassByType(null == (y = a.getActiveDay(n)) ? null : y.type)),
            e.xp6(1),
            e.Oqu(n);
        }
      }
      function R(o, s) {
        if ((1 & o && (e.TgZ(0, 'span', 31)(1, 'span', 30), e._uU(2), e.qZA()()), 2 & o)) {
          const n = e.oxw(2).day,
            a = e.oxw();
          let _, g, v;
          e.ekj('disabled', null == (_ = a.getActiveDay(n)) ? null : _.isDisabled),
            e.s9C('title', null == (g = a.getActiveDay(n)) ? null : g.title),
            e.xp6(1),
            e.Q6J('ngClass', a.getClassByType(null == (v = a.getActiveDay(n)) ? null : v.type)),
            e.xp6(1),
            e.Oqu(n);
        }
      }
      function H(o, s) {
        if (
          (1 & o && (e.ynx(0), e.YNc(1, Y, 3, 6, 'a', 27), e.YNc(2, R, 3, 5, 'ng-template', null, 28, e.W1O), e.BQk()),
          2 & o)
        ) {
          const n = e.MAs(3),
            a = e.oxw().day,
            _ = e.oxw();
          let g;
          e.xp6(1), e.Q6J('ngIf', null != (null == (g = _.getActiveDay(a)) ? null : g.url))('ngIfElse', n);
        }
      }
      function F(o, s) {
        if ((1 & o && (e.TgZ(0, 'span'), e._uU(1), e.qZA()), 2 & o)) {
          const n = e.oxw().day;
          e.xp6(1), e.Oqu(n);
        }
      }
      function W(o, s) {
        if (
          (1 & o && (e.YNc(0, H, 4, 2, 'ng-container', 16), e.YNc(1, F, 2, 1, 'ng-template', null, 26, e.W1O)), 2 & o)
        ) {
          const n = s.day,
            a = e.MAs(2),
            _ = e.oxw();
          e.Q6J('ngIf', _.isActiveDay(n))('ngIfElse', a);
        }
      }
      let z = (() => {
        class o {
          constructor() {
            (this.activeDays = []),
              (this.isCollapsed = !1),
              (this.hasList = !0),
              (this.customClasses = ''),
              (this.month = null),
              (this.year = null),
              (this.start = 0),
              (this.MONTH_TITLE = [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
              ]),
              (this.DAYS_HEADER_TABLE = ['D', 'L', 'M', 'M', 'J', 'V', 'S']),
              (this.daysArray = []),
              (this.emptyDaysArray = []),
              (this.firstWeekDays = 0),
              (this.firstWeekDaysArray = []),
              (this.weekDaysArray = []),
              (this.analizedActiveDays = []),
              (this.monthAmountOfDays = (n, a) =>
                'number' != typeof n || n < 1 || n > 12
                  ? 0
                  : 4 === n || 6 === n || 9 === n || 11 === n
                  ? 30
                  : 2 === n
                  ? (a || 2024) % 4 == 0
                    ? 29
                    : 28
                  : 31),
              (this.monthsTitles = (n) => (n && n >= 1 && n <= 12 ? this.MONTH_TITLE[n - 1] : 'Mes inv\xe1lido'));
          }
          getStartDayOfMonth(n, a) {
            const g = new Date(n, a - 1, 1).getDay();
            return (this.start = g), this.start;
          }
          get weekDaysArrayRows() {
            const n = [],
              _ = this.weekDaysArray.length;
            let g = 0;
            for (let y = 0; y < _; y += 7) n.push(this.weekDaysArray.slice(y, y + 7)), (g += 1);
            const v = n[n.length - 1].length;
            if (v < 7) {
              const y = 7 - v;
              for (let P = 0; P < y; P++) n[n.length - 1].push(-1);
            }
            return { rows: n, counter: g };
          }
          isActiveDay(n) {
            var a;
            return !(null === (a = this.analizedActiveDays) || void 0 === a || !a.find((_) => _.day === n));
          }
          getActiveDay(n) {
            var a;
            return null === (a = this.analizedActiveDays) || void 0 === a ? void 0 : a.find((_) => _.day === n);
          }
          convertArrayIntoObject(n) {
            const a = n.day;
            return Array.isArray(a) ? a.map((_) => Object.assign(Object.assign({}, n), { day: _ })) : [n];
          }
          generateArrayActiveDays(n) {
            for (const a in n)
              if (Object.prototype.hasOwnProperty.call(n, a)) {
                const _ = n[a];
                if ('number' == typeof _.day) this.analizedActiveDays.push(_);
                else for (const g of this.convertArrayIntoObject(_)) this.analizedActiveDays.push(g);
              }
            return this.analizedActiveDays;
          }
          getClassByType(n) {
            return null == n ? 'active' : 'secondary' == n ? 'active-secondary' : `active bg-${n}`;
          }
          typeOfDays(n) {
            return n
              ? 'number' == typeof n
                ? `${n}.`
                : n.length > 2
                ? `${n[0]} al ${n[n.length - 1]}.`
                : `${n[0]}, ${n[n.length - 1]}.`
              : '';
          }
          ngOnInit() {
            this.date && ((this.month = this.date.month), (this.year = this.date.year)),
              this.getStartDayOfMonth(this.year, this.month),
              (this.daysArray = Array.from({ length: this.monthAmountOfDays(this.month, this.year) }, (n, a) => a + 1)),
              (this.emptyDaysArray = this.start < 7 ? Array.from({ length: this.start }, (n, a) => ({ key: a })) : []),
              (this.firstWeekDays = 7 - this.start),
              (this.firstWeekDaysArray = this.daysArray.slice(0, this.firstWeekDays)),
              (this.weekDaysArray = this.daysArray.slice(this.firstWeekDays)),
              this.activeDays && this.generateArrayActiveDays(this.activeDays);
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['o-calendar']],
            inputs: {
              date: 'date',
              activeDays: 'activeDays',
              isCollapsed: 'isCollapsed',
              hasList: 'hasList',
              customClasses: 'customClasses'
            },
            decls: 22,
            vars: 9,
            consts: [
              [1, 'calendar', 3, 'ngClass'],
              [1, 'calendar-header'],
              [1, 'calendar-title'],
              [1, 'calendar-year'],
              [1, 'calendar-body'],
              [1, 'calendar-week-header'],
              [4, 'ngFor', 'ngForOf'],
              [1, 'calendar-week'],
              [4, 'ngIf'],
              ['class', 'calendar-week', 4, 'ngFor', 'ngForOf'],
              ['class', 'calendar-week', 4, 'ngIf'],
              ['class', 'calendar-footer', 4, 'ngIf'],
              ['calendarList', ''],
              ['activeDay', ''],
              [4, 'ngTemplateOutlet', 'ngTemplateOutletContext'],
              [1, 'calendar-footer'],
              [4, 'ngIf', 'ngIfElse'],
              [1, 'accordion'],
              [1, 'card'],
              ['data-toggle', 'collapse', 1, 'card-header', 'collapsed'],
              [1, 'bx', 'bx-calendar'],
              [1, 'collapse-title'],
              [1, 'collapse', 3, 'id'],
              [1, 'card-body'],
              [4, 'ngTemplateOutlet'],
              [1, 'calendar-footer-list'],
              ['notActive', ''],
              ['class', 'calendar-link', 3, 'href', 'title', 'disabled', 'click', 4, 'ngIf', 'ngIfElse'],
              ['activeNoLink', ''],
              [1, 'calendar-link', 3, 'href', 'title', 'click'],
              [3, 'ngClass'],
              [3, 'title']
            ],
            template: function (n, a) {
              1 & n &&
                (e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h2', 2),
                e._uU(3),
                e.qZA(),
                e.TgZ(4, 'span', 3),
                e._uU(5),
                e.qZA()(),
                e.TgZ(6, 'div', 4)(7, 'table')(8, 'thead')(9, 'tr', 5),
                e.YNc(10, u, 3, 1, 'th', 6),
                e.qZA()(),
                e.TgZ(11, 'tbody')(12, 'tr', 7),
                e.YNc(13, C, 2, 1, 'ng-container', 8),
                e.YNc(14, r, 2, 4, 'td', 6),
                e.qZA(),
                e.YNc(15, O, 2, 1, 'tr', 9),
                e.YNc(16, E, 2, 2, 'tr', 10),
                e.qZA()()(),
                e.YNc(17, I, 2, 2, 'div', 11),
                e.qZA(),
                e.YNc(18, L, 2, 1, 'ng-template', null, 12, e.W1O),
                e.YNc(20, W, 3, 2, 'ng-template', null, 13, e.W1O)),
                2 & n &&
                  (e.Q6J('ngClass', a.customClasses),
                  e.xp6(3),
                  e.Oqu(a.monthsTitles(a.month)),
                  e.xp6(2),
                  e.Oqu(a.year),
                  e.xp6(5),
                  e.Q6J('ngForOf', a.DAYS_HEADER_TABLE),
                  e.xp6(3),
                  e.Q6J('ngIf', 0 != a.emptyDaysArray.length),
                  e.xp6(1),
                  e.Q6J('ngForOf', a.firstWeekDaysArray),
                  e.xp6(1),
                  e.Q6J('ngForOf', a.weekDaysArrayRows.rows),
                  e.xp6(1),
                  e.Q6J('ngIf', 4 === a.weekDaysArrayRows.counter),
                  e.xp6(1),
                  e.Q6J('ngIf', a.activeDays && a.hasList));
            },
            dependencies: [t.mk, t.sg, t.O5, t.tP],
            styles: [
              '.calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .calendar-link.disabled[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > span.disabled[_ngcontent-%COMP%]{cursor:not-allowed;pointer-events:none}.calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .calendar-link.disabled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .calendar[_ngcontent-%COMP%]   .calendar-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .calendar-week[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] > span.disabled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:transparent!important;color:#9eaab8}'
            ]
          })),
          o
        );
      })();
      const M = function () {
          return { month: 10, year: 2024 };
        },
        V = function () {
          return { month: 1, year: 2024 };
        },
        j = function () {
          return { month: 2, year: 2024 };
        },
        $ = function () {
          return { month: 3, year: 2024 };
        },
        G = function () {
          return { month: 4, year: 2024 };
        },
        K = function () {
          return { month: 5, year: 2024 };
        },
        X = function () {
          return { month: 6, year: 2024 };
        },
        ee = function () {
          return { month: 7, year: 2024 };
        },
        te = function () {
          return { month: 8, year: 2024 };
        },
        ne = function () {
          return { month: 9, year: 2024 };
        },
        ae = function () {
          return { month: 11, year: 2024 };
        },
        oe = function () {
          return { month: 12, year: 2024 };
        },
        le = [
          { path: 'api', component: w },
          {
            path: 'examples',
            component: (() => {
              class o {
                constructor() {
                  (this.calendarNoEvents = i.Su),
                    (this.calendarDefault = i.Ag),
                    (this.calendarDefaultHtml = i.lR),
                    (this.calendarDefaultTs = i.al),
                    (this.calendarLink = i.F4),
                    (this.calendarLinkHtml = i.nl),
                    (this.calendarLinkTs = i.JF),
                    (this.calendarTwoReferences = i.SH),
                    (this.calendarTwoReferencesHtml = i.Gf),
                    (this.calendarTwoReferencesTs = i.QP),
                    (this.calendarCollapse = i.M2),
                    (this.calendarCollapseHtml = i.ll),
                    (this.calendarCollapseTs = i.eG),
                    (this.calendarCromaticRef = i.Yn),
                    (this.calendarCromaticRefHtml = i.MO),
                    (this.calendarCromaticRefTs = i.xy),
                    (this.calendarDeck = i.w_),
                    (this.calendarDeckHtml = i.eu),
                    (this.calendarDeckTs = i.GG);
                }
              }
              return (
                (o.ɵfac = function (n) {
                  return new (n || o)();
                }),
                (o.ɵcmp = e.Xpm({
                  type: o,
                  selectors: [['app-calendar-examples']],
                  decls: 133,
                  vars: 74,
                  consts: [
                    [1, 'section-example'],
                    ['title', 'Sin eventos'],
                    ['component', '', 'customClasses', 'mx-auto', 3, 'date'],
                    ['appClipboard', '', 'component-html', '', 1, 'code'],
                    [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                    ['appPrism', '', 'language', 'html'],
                    [1, 'font-weight-bold'],
                    ['title', 'Predeterminado', 3, 'isNavCode'],
                    ['component', '', 'customClasses', 'mx-auto', 3, 'date', 'activeDays'],
                    ['appClipboard', '', 'component-ts', '', 1, 'code'],
                    ['appPrism', '', 'language', 'javascript'],
                    ['title', 'Con enlace', 3, 'isNavCode'],
                    ['title', 'Con 2 referencias', 3, 'isNavCode'],
                    ['title', 'Con colapsable', 3, 'isNavCode'],
                    ['component', '', 'customClasses', 'mx-auto', 3, 'date', 'activeDays', 'isCollapsed'],
                    ['title', 'Con referencias crom\xe1ticas', 3, 'isNavCode'],
                    ['title', 'Disposici\xf3n', 3, 'isNavCode'],
                    ['component', '', 1, 'calendar-deck'],
                    [3, 'date', 'activeDays']
                  ],
                  template: function (n, a) {
                    1 & n &&
                      (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1),
                      e._UZ(2, 'o-calendar', 2),
                      e.TgZ(3, 'pre', 3),
                      e._uU(4, '      '),
                      e.TgZ(5, 'button', 4),
                      e._uU(6, 'Copiar'),
                      e.qZA(),
                      e._uU(7, '\n      '),
                      e.TgZ(8, 'code', 5),
                      e._uU(9),
                      e.qZA(),
                      e._uU(10, '\n    '),
                      e.qZA()(),
                      e.TgZ(11, 'h3', 6),
                      e._uU(12, 'Con eventos'),
                      e.qZA(),
                      e.TgZ(13, 'app-viewer', 7),
                      e._UZ(14, 'o-calendar', 8),
                      e.TgZ(15, 'pre', 3),
                      e._uU(16, '      '),
                      e.TgZ(17, 'button', 4),
                      e._uU(18, 'Copiar'),
                      e.qZA(),
                      e._uU(19, '\n      '),
                      e.TgZ(20, 'code', 5),
                      e._uU(21),
                      e.qZA(),
                      e._uU(22, '\n    '),
                      e.qZA(),
                      e.TgZ(23, 'pre', 9),
                      e._uU(24, '      '),
                      e.TgZ(25, 'button', 4),
                      e._uU(26, 'Copiar'),
                      e.qZA(),
                      e._uU(27, '\n      '),
                      e.TgZ(28, 'code', 10),
                      e._uU(29),
                      e.qZA(),
                      e._uU(30, '\n    '),
                      e.qZA()(),
                      e.TgZ(31, 'app-viewer', 11),
                      e._UZ(32, 'o-calendar', 8),
                      e.TgZ(33, 'pre', 3),
                      e._uU(34, '      '),
                      e.TgZ(35, 'button', 4),
                      e._uU(36, 'Copiar'),
                      e.qZA(),
                      e._uU(37, '\n      '),
                      e.TgZ(38, 'code', 5),
                      e._uU(39),
                      e.qZA(),
                      e._uU(40, '\n    '),
                      e.qZA(),
                      e.TgZ(41, 'pre', 9),
                      e._uU(42, '      '),
                      e.TgZ(43, 'button', 4),
                      e._uU(44, 'Copiar'),
                      e.qZA(),
                      e._uU(45, '\n      '),
                      e.TgZ(46, 'code', 10),
                      e._uU(47),
                      e.qZA(),
                      e._uU(48, '\n    '),
                      e.qZA()(),
                      e.TgZ(49, 'app-viewer', 12),
                      e._UZ(50, 'o-calendar', 8),
                      e.TgZ(51, 'pre', 3),
                      e._uU(52, '      '),
                      e.TgZ(53, 'button', 4),
                      e._uU(54, 'Copiar'),
                      e.qZA(),
                      e._uU(55, '\n      '),
                      e.TgZ(56, 'code', 5),
                      e._uU(57),
                      e.qZA(),
                      e._uU(58, '\n    '),
                      e.qZA(),
                      e.TgZ(59, 'pre', 9),
                      e._uU(60, '      '),
                      e.TgZ(61, 'button', 4),
                      e._uU(62, 'Copiar'),
                      e.qZA(),
                      e._uU(63, '\n      '),
                      e.TgZ(64, 'code', 10),
                      e._uU(65),
                      e.qZA(),
                      e._uU(66, '\n    '),
                      e.qZA()(),
                      e.TgZ(67, 'app-viewer', 13),
                      e._UZ(68, 'o-calendar', 14),
                      e.TgZ(69, 'pre', 3),
                      e._uU(70, '      '),
                      e.TgZ(71, 'button', 4),
                      e._uU(72, 'Copiar'),
                      e.qZA(),
                      e._uU(73, '\n      '),
                      e.TgZ(74, 'code', 5),
                      e._uU(75),
                      e.qZA(),
                      e._uU(76, '\n    '),
                      e.qZA(),
                      e.TgZ(77, 'pre', 9),
                      e._uU(78, '      '),
                      e.TgZ(79, 'button', 4),
                      e._uU(80, 'Copiar'),
                      e.qZA(),
                      e._uU(81, '\n      '),
                      e.TgZ(82, 'code', 10),
                      e._uU(83),
                      e.qZA(),
                      e._uU(84, '\n    '),
                      e.qZA()(),
                      e.TgZ(85, 'app-viewer', 15),
                      e._UZ(86, 'o-calendar', 14),
                      e.TgZ(87, 'pre', 3),
                      e._uU(88, '      '),
                      e.TgZ(89, 'button', 4),
                      e._uU(90, 'Copiar'),
                      e.qZA(),
                      e._uU(91, '\n      '),
                      e.TgZ(92, 'code', 5),
                      e._uU(93),
                      e.qZA(),
                      e._uU(94, '\n    '),
                      e.qZA(),
                      e.TgZ(95, 'pre', 9),
                      e._uU(96, '      '),
                      e.TgZ(97, 'button', 4),
                      e._uU(98, 'Copiar'),
                      e.qZA(),
                      e._uU(99, '\n      '),
                      e.TgZ(100, 'code', 10),
                      e._uU(101),
                      e.qZA(),
                      e._uU(102, '\n    '),
                      e.qZA()(),
                      e.TgZ(103, 'app-viewer', 16)(104, 'div', 17),
                      e._UZ(105, 'o-calendar', 18)(106, 'o-calendar', 18)(107, 'o-calendar', 18)(108, 'o-calendar', 18)(
                        109,
                        'o-calendar',
                        18
                      )(110, 'o-calendar', 18)(111, 'o-calendar', 18)(112, 'o-calendar', 18)(113, 'o-calendar', 18)(
                        114,
                        'o-calendar',
                        18
                      )(115, 'o-calendar', 18)(116, 'o-calendar', 18),
                      e.qZA(),
                      e.TgZ(117, 'pre', 3),
                      e._uU(118, '      '),
                      e.TgZ(119, 'button', 4),
                      e._uU(120, 'Copiar'),
                      e.qZA(),
                      e._uU(121, '\n      '),
                      e.TgZ(122, 'code', 5),
                      e._uU(123),
                      e.qZA(),
                      e._uU(124, '\n    '),
                      e.qZA(),
                      e.TgZ(125, 'pre', 9),
                      e._uU(126, '      '),
                      e.TgZ(127, 'button', 4),
                      e._uU(128, 'Copiar'),
                      e.qZA(),
                      e._uU(129, '\n      '),
                      e.TgZ(130, 'code', 10),
                      e._uU(131),
                      e.qZA(),
                      e._uU(132, '\n    '),
                      e.qZA()()()),
                      2 & n &&
                        (e.xp6(2),
                        e.Q6J('date', e.DdM(56, M)),
                        e.xp6(7),
                        e.Oqu(a.calendarNoEvents),
                        e.xp6(4),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(57, M))('activeDays', a.calendarDefault),
                        e.xp6(7),
                        e.Oqu(a.calendarDefaultHtml),
                        e.xp6(8),
                        e.Oqu(a.calendarDefaultTs),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(58, M))('activeDays', a.calendarLink),
                        e.xp6(7),
                        e.Oqu(a.calendarLinkHtml),
                        e.xp6(8),
                        e.Oqu(a.calendarLinkTs),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(59, M))('activeDays', a.calendarTwoReferences),
                        e.xp6(7),
                        e.Oqu(a.calendarTwoReferencesHtml),
                        e.xp6(8),
                        e.Oqu(a.calendarTwoReferencesTs),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(60, M))('activeDays', a.calendarCollapse)('isCollapsed', !0),
                        e.xp6(7),
                        e.Oqu(a.calendarCollapseHtml),
                        e.xp6(8),
                        e.Oqu(a.calendarCollapseTs),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(61, M))('activeDays', a.calendarCromaticRef)('isCollapsed', !0),
                        e.xp6(7),
                        e.Oqu(a.calendarCromaticRefHtml),
                        e.xp6(8),
                        e.Oqu(a.calendarCromaticRefTs),
                        e.xp6(2),
                        e.Q6J('isNavCode', !0),
                        e.xp6(2),
                        e.Q6J('date', e.DdM(62, V))('activeDays', a.calendarDeck.JANUARY),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(63, j))('activeDays', a.calendarDeck.FEBRUARY),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(64, $))('activeDays', a.calendarDeck.MARCH),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(65, G))('activeDays', a.calendarDeck.APRIL),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(66, K))('activeDays', a.calendarDeck.MAY),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(67, X))('activeDays', a.calendarDeck.JUNE),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(68, ee))('activeDays', a.calendarDeck.JULY),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(69, te))('activeDays', a.calendarDeck.AUGUST),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(70, ne))('activeDays', a.calendarDeck.SEPTEMBER),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(71, M))('activeDays', a.calendarDeck.OCTOBER),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(72, ae))('activeDays', a.calendarDeck.NOVEMBER),
                        e.xp6(1),
                        e.Q6J('date', e.DdM(73, oe))('activeDays', a.calendarDeck.DECEMBER),
                        e.xp6(7),
                        e.Oqu(a.calendarDeckHtml),
                        e.xp6(8),
                        e.Oqu(a.calendarDeckTs));
                  },
                  dependencies: [U.B, D.y, k.y, z],
                  styles: [
                    '@media (max-width: 350px){  o-calendar .calendar .calendar-body table{transform:translate(-6%) scale(.92)}}@media (max-width: 315px){  o-calendar .calendar .calendar-body table{transform:translate(-13%) scale(.82)}}@media (max-width: 350px){  .calendar-deck{transform:translate(0) translateY(-445px) scale(.85)}  .calendar-deck o-calendar .calendar .calendar-body table{transform:translate(0) scale(1)}}@media (max-width: 315px){  .calendar-deck{transform:translate(0) translateY(-745px) scale(.75)}}'
                  ]
                })),
                o
              );
            })()
          },
          { path: '**', pathMatch: 'full', redirectTo: 'api' }
        ];
      let ce = (() => {
        class o {}
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [c.Bz.forChild(le), c.Bz] })),
          o
        );
      })();
      var se = d(9384),
        ie = d(7538);
      let re = (() => {
        class o {}
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [t.ez, c.Bz] })),
          o
        );
      })();
      var de = d(2089),
        pe = d(3717);
      let _e = (() => {
        class o {}
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [t.ez, ce, ie.Z, de.Z, U.B, se.T, re, pe.J] })),
          o
        );
      })();
    }
  }
]);
