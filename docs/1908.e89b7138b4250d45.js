'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [1908],
  {
    4883: (w, f, p) => {
      p.d(f, { L: () => Z });
      var t = p(4893),
        s = p(2313),
        x = p(9808);
      const r = ['checkbox'];
      function e(a, g) {
        if (1 & a) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const T = t.oxw(2);
              return t.KtG(T.onHeaderCheckboxChange(h));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & a) {
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
      function b(a, g) {
        if ((1 & a && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & a)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function A(a, g) {
        if ((1 & a && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & a)) {
          const n = g.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function U(a, g) {
        if (1 & a) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const T = t.oxw().$implicit,
                S = t.oxw(2);
              return t.KtG(S.onCheckboxChange(T, h));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & a) {
          const n = t.oxw().index,
            c = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', c.id, '-checkbox_', n, '')('name', '', c.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', c.id, '-checkbox_', n, '');
        }
      }
      function v(a, g) {
        if ((1 & a && t._UZ(0, 'div', 14), 2 & a)) {
          const n = t.oxw().$implicit,
            c = t.oxw().$implicit,
            h = t.oxw(2);
          t.Q6J('innerHTML', h.sanitizeHTML(c[n.key].data), t.oJD);
        }
      }
      function O(a, g) {
        if ((1 & a && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, v, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & a)) {
          const n = g.$implicit,
            c = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', c[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', c[n.key].data);
        }
      }
      function u(a, g) {
        if (
          (1 & a && (t.TgZ(0, 'tr'), t.YNc(1, U, 5, 6, 'td', 9), t.YNc(2, O, 3, 2, 'ng-container', 4), t.qZA()), 2 & a)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const C = function (a, g) {
        return { 'table-borderless': a, 'table-striped': g };
      };
      function d(a, g) {
        if (
          (1 & a &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, e, 5, 6, 'th', 3),
            t.YNc(4, b, 2, 2, 'th', 3),
            t.YNc(5, A, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & a)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, C, !n.isBordered, n.isStriped)),
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
      const _ = function (a) {
        return { 'responsive-scroll': a };
      };
      let Z = (() => {
        class a {
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
            const c = n.target;
            if (c) {
              const h = c.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, c) {
            if (c && c.target && 'boolean' == typeof c.target.checked) {
              if (c.target.checked) this.dataSelected.push(n);
              else {
                const T = this.dataSelected.findIndex((S) => S === n);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (a.ɵfac = function (n) {
            return new (n || a)(t.Y36(t.Qsj), t.Y36(s.H7));
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [['o-table']],
            viewQuery: function (n, c) {
              if ((1 & n && t.Gf(r, 5), 2 & n)) {
                let h;
                t.iGM((h = t.CRH())) && (c.checkboxRef = h);
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
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, d, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(c.customClasses),
                  t.Q6J('ngClass', t.VKq(4, _, c.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', c.isValidateComponent));
            },
            dependencies: [x.mk, x.sg, x.O5]
          })),
          a
        );
      })();
    },
    2089: (w, f, p) => {
      p.d(f, { Z: () => x });
      var t = p(9808),
        s = p(4893);
      let x = (() => {
        class r {}
        return (
          (r.ɵfac = function (b) {
            return new (b || r)();
          }),
          (r.ɵmod = s.oAB({ type: r })),
          (r.ɵinj = s.cJS({ imports: [t.ez] })),
          r
        );
      })();
    },
    4948: (w, f, p) => {
      p.d(f, { B: () => O });
      var t = p(9808),
        s = p(4893);
      function x(u, C) {
        if (1 & u) {
          const d = s.EpF();
          s.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            s.NdJ('click', function () {
              s.CHM(d);
              const Z = s.oxw();
              return s.KtG((Z.isWindowHTML = !0));
            }),
            s._uU(4, 'HTML'),
            s.qZA()(),
            s.TgZ(5, 'li', 12)(6, 'a', 14),
            s.NdJ('click', function () {
              s.CHM(d);
              const Z = s.oxw();
              return s.KtG((Z.isWindowHTML = !1));
            }),
            s._uU(7, 'TS'),
            s.qZA()()()();
        }
        if (2 & u) {
          const d = s.oxw();
          s.xp6(3), s.ekj('active', d.isWindowHTML), s.xp6(3), s.ekj('active', !d.isWindowHTML);
        }
      }
      function r(u, C) {
        1 & u && (s.ynx(0), s.Hsn(1), s.BQk());
      }
      function e(u, C) {
        1 & u && (s.ynx(0), s.Hsn(1, 1), s.BQk());
      }
      function b(u, C) {
        if ((1 & u && s.YNc(0, e, 2, 0, 'ng-container', 7), 2 & u)) {
          const d = s.oxw(),
            _ = s.MAs(16);
          s.Q6J('ngIf', d.isWindowHTML)('ngIfElse', _);
        }
      }
      function A(u, C) {
        1 & u && s.Hsn(0, 2);
      }
      const U = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        v = ['[component]', '[component-html]', '[component-ts]'];
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
          (u.ɵfac = function (d) {
            return new (d || u)();
          }),
          (u.ɵcmp = s.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [s.jDz],
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
            template: function (d, _) {
              if (
                (1 & d &&
                  (s.F$t(U),
                  s.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  s._uU(3),
                  s.qZA(),
                  s.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  s.NdJ('click', function () {
                    return (_.isOpenCode = !_.isOpenCode);
                  }),
                  s.TgZ(8, 'span'),
                  s._uU(9),
                  s.qZA()()()()()(),
                  s.TgZ(10, 'div', 5),
                  s.YNc(11, x, 8, 4, 'nav', 6),
                  s.YNc(12, r, 2, 0, 'ng-container', 7),
                  s.YNc(13, b, 1, 2, 'ng-template', null, 8, s.W1O),
                  s.YNc(15, A, 1, 0, 'ng-template', null, 9, s.W1O),
                  s.qZA()()),
                2 & d)
              ) {
                const Z = s.MAs(14);
                s.xp6(3),
                  s.Oqu(_.title),
                  s.xp6(4),
                  s.ekj('active', _.isOpenCode),
                  s.xp6(2),
                  s.Oqu(_.linkCode),
                  s.xp6(2),
                  s.Q6J('ngIf', _.isOpenCode && _.isNavCode),
                  s.xp6(1),
                  s.Q6J('ngIf', !_.isOpenCode)('ngIfElse', Z);
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
    1908: (w, f, p) => {
      p.r(f), p.d(f, { ListStepModule: () => L });
      var t = p(9808),
        s = p(2526),
        x = p(5570),
        r = p(3098),
        e = p(4893),
        b = p(4883),
        A = p(6434);
      let U = (() => {
        class o {
          constructor() {
            (this.dataSource = r.u0),
              (this.columns = x.L0),
              (this.liststepInterfaceStep = r.dO),
              (this.liststepStepInterfaceStep = r.Zn),
              (this.sizes = x.zf);
          }
        }
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['app-list-step-api']],
            decls: 58,
            vars: 10,
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
                "import { OListModule } from 'ngx-obelisco-example/list';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript']
            ],
            template: function (l, i) {
              1 & l &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Lista de pasos de Obelisco'),
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
                e._uU(13, 'OListStep'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-list-step'),
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
                e._uU(27, 'Step'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'listStepItems'),
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
                e._uU(46, 'Size'),
                e.qZA(),
                e.TgZ(47, 'p'),
                e._uU(48, 'Permite establecer los valores de la propiedad '),
                e.TgZ(49, 'strong'),
                e._uU(50, 'size'),
                e.qZA(),
                e._uU(51, '.'),
                e.qZA(),
                e.TgZ(52, 'div', 8)(53, 'pre', 2),
                e._uU(54, '        '),
                e.TgZ(55, 'code', 9),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n      '),
                e.qZA()()()()),
                2 & l &&
                  (e.xp6(21),
                  e.Q6J('columns', i.columns)('dataSource', i.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(i.liststepInterfaceStep),
                  e.xp6(5),
                  e.Q6J('columns', i.columns)('dataSource', i.liststepStepInterfaceStep)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(14),
                  e.Oqu(i.sizes));
            },
            dependencies: [b.L, A.y]
          })),
          o
        );
      })();
      var v = p(4948),
        O = p(2171);
      function u(o, m) {
        if ((1 & o && (e.TgZ(0, 'h3'), e._uU(1), e.qZA()), 2 & o)) {
          const l = e.oxw().$implicit;
          e.xp6(1), e.Oqu(l.title);
        }
      }
      function C(o, m) {
        if ((1 & o && e._UZ(0, 'p', 6), 2 & o)) {
          const l = e.oxw().$implicit;
          e.Q6J('innerHTML', l.description, e.oJD);
        }
      }
      function d(o, m) {
        1 & o && e._UZ(0, 'p', 6), 2 & o && e.Q6J('innerHTML', m.$implicit, e.oJD);
      }
      function _(o, m) {
        if ((1 & o && e.YNc(0, d, 1, 1, 'p', 7), 2 & o)) {
          const l = e.oxw().index,
            i = e.oxw();
          e.Q6J('ngForOf', i.textArray(l));
        }
      }
      function Z(o, m) {
        if (
          (1 & o &&
            (e.TgZ(0, 'li', 2),
            e.YNc(1, u, 2, 1, 'h3', 3),
            e.YNc(2, C, 1, 1, 'p', 4),
            e.YNc(3, _, 1, 1, 'ng-template', null, 5, e.W1O),
            e.qZA()),
          2 & o)
        ) {
          const l = m.$implicit,
            i = e.MAs(4),
            q = e.oxw();
          e.xp6(1), e.Q6J('ngIf', l.title), e.xp6(1), e.Q6J('ngIf', !q.isTextArray)('ngIfElse', i);
        }
      }
      let a = (() => {
        class o {
          constructor() {
            (this.steps = []), (this.isStepLight = !1), (this.isStepNumber = !1), (this.customClasses = '');
          }
          isTextArray(l) {
            return Array.isArray(this.steps[l].description);
          }
          textArray(l) {
            const i = this.steps[l].description;
            return Array.isArray(i) ? i : [i];
          }
        }
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['o-list-step']],
            inputs: {
              steps: 'steps',
              isStepLight: 'isStepLight',
              isStepNumber: 'isStepNumber',
              size: 'size',
              customClasses: 'customClasses'
            },
            decls: 2,
            vars: 10,
            consts: [
              [1, 'list-steps', 3, 'ngClass'],
              ['class', 'list-steps-item', 4, 'ngFor', 'ngForOf'],
              [1, 'list-steps-item'],
              [4, 'ngIf'],
              ['class', 'status-text', 3, 'innerHTML', 4, 'ngIf', 'ngIfElse'],
              ['isAarray', ''],
              [1, 'status-text', 3, 'innerHTML'],
              ['class', 'status-text', 3, 'innerHTML', 4, 'ngFor', 'ngForOf']
            ],
            template: function (l, i) {
              1 & l && (e.TgZ(0, 'ul', 0), e.YNc(1, Z, 5, 3, 'li', 1), e.qZA()),
                2 & l &&
                  (e.ekj('list-steps-light', i.isStepLight)('list-steps-numbers', i.isStepNumber)(
                    'list-steps-lg',
                    'lg' === i.size
                  )('list-steps-sm', 'sm' === i.size),
                  e.Q6J('ngClass', i.customClasses),
                  e.xp6(1),
                  e.Q6J('ngForOf', i.steps));
            },
            dependencies: [t.mk, t.sg, t.O5]
          })),
          o
        );
      })();
      const n = [
        { path: 'api', component: U },
        {
          path: 'examples',
          component: (() => {
            class o {
              constructor() {
                (this.steps = r.Ss),
                  (this.liststepExampleHtml = r.sO),
                  (this.liststepLightExampleHtml = r.op),
                  (this.liststepNumberExampleHtml = r.lk),
                  (this.liststepLgExampleHtml = r.aI),
                  (this.liststepSmExampleHtml = r.ZL),
                  (this.liststepExampleTs = r.eV);
              }
            }
            return (
              (o.ɵfac = function (l) {
                return new (l || o)();
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [['app-list-step-examples']],
                decls: 96,
                vars: 22,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Predeterminada', 3, 'isNavCode'],
                  ['component', '', 1, 'col-lg-8', 'col-md-12'],
                  ['component', '', 3, 'steps'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Con borde', 3, 'isNavCode'],
                  ['component', '', 3, 'steps', 'isStepLight'],
                  ['title', 'Con n\xfamero', 3, 'isNavCode'],
                  ['component', '', 3, 'steps', 'isStepNumber'],
                  ['title', 'Tama\xf1o grande', 3, 'isNavCode'],
                  ['component', '', 'size', 'lg', 3, 'steps'],
                  ['title', 'Tama\xf1o chico', 3, 'isNavCode'],
                  ['component', '', 'size', 'sm', 3, 'steps']
                ],
                template: function (l, i) {
                  1 & l &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-list-step', 3),
                    e.qZA(),
                    e.TgZ(4, 'pre', 4),
                    e._uU(5, '          '),
                    e.TgZ(6, 'button', 5),
                    e._uU(7, 'Copiar'),
                    e.qZA(),
                    e._uU(8, '\n          '),
                    e.TgZ(9, 'code', 6),
                    e._uU(10),
                    e.qZA(),
                    e._uU(11, '\n        '),
                    e.qZA(),
                    e.TgZ(12, 'pre', 7),
                    e._uU(13, '          '),
                    e.TgZ(14, 'button', 5),
                    e._uU(15, 'Copiar'),
                    e.qZA(),
                    e._uU(16, '\n          '),
                    e.TgZ(17, 'code', 8),
                    e._uU(18),
                    e.qZA(),
                    e._uU(19, '\n        '),
                    e.qZA()(),
                    e.TgZ(20, 'app-viewer', 9)(21, 'div', 2),
                    e._UZ(22, 'o-list-step', 10),
                    e.qZA(),
                    e.TgZ(23, 'pre', 4),
                    e._uU(24, '          '),
                    e.TgZ(25, 'button', 5),
                    e._uU(26, 'Copiar'),
                    e.qZA(),
                    e._uU(27, '\n          '),
                    e.TgZ(28, 'code', 6),
                    e._uU(29),
                    e.qZA(),
                    e._uU(30, '\n        '),
                    e.qZA(),
                    e.TgZ(31, 'pre', 7),
                    e._uU(32, '          '),
                    e.TgZ(33, 'button', 5),
                    e._uU(34, 'Copiar'),
                    e.qZA(),
                    e._uU(35, '\n          '),
                    e.TgZ(36, 'code', 8),
                    e._uU(37),
                    e.qZA(),
                    e._uU(38, '\n        '),
                    e.qZA()(),
                    e.TgZ(39, 'app-viewer', 11)(40, 'div', 2),
                    e._UZ(41, 'o-list-step', 12),
                    e.qZA(),
                    e.TgZ(42, 'pre', 4),
                    e._uU(43, '          '),
                    e.TgZ(44, 'button', 5),
                    e._uU(45, 'Copiar'),
                    e.qZA(),
                    e._uU(46, '\n          '),
                    e.TgZ(47, 'code', 6),
                    e._uU(48),
                    e.qZA(),
                    e._uU(49, '\n        '),
                    e.qZA(),
                    e.TgZ(50, 'pre', 7),
                    e._uU(51, '          '),
                    e.TgZ(52, 'button', 5),
                    e._uU(53, 'Copiar'),
                    e.qZA(),
                    e._uU(54, '\n          '),
                    e.TgZ(55, 'code', 8),
                    e._uU(56),
                    e.qZA(),
                    e._uU(57, '\n        '),
                    e.qZA()(),
                    e.TgZ(58, 'app-viewer', 13)(59, 'div', 2),
                    e._UZ(60, 'o-list-step', 14),
                    e.qZA(),
                    e.TgZ(61, 'pre', 4),
                    e._uU(62, '          '),
                    e.TgZ(63, 'button', 5),
                    e._uU(64, 'Copiar'),
                    e.qZA(),
                    e._uU(65, '\n          '),
                    e.TgZ(66, 'code', 6),
                    e._uU(67),
                    e.qZA(),
                    e._uU(68, '\n        '),
                    e.qZA(),
                    e.TgZ(69, 'pre', 7),
                    e._uU(70, '          '),
                    e.TgZ(71, 'button', 5),
                    e._uU(72, 'Copiar'),
                    e.qZA(),
                    e._uU(73, '\n          '),
                    e.TgZ(74, 'code', 8),
                    e._uU(75),
                    e.qZA(),
                    e._uU(76, '\n        '),
                    e.qZA()(),
                    e.TgZ(77, 'app-viewer', 15)(78, 'div', 2),
                    e._UZ(79, 'o-list-step', 16),
                    e.qZA(),
                    e.TgZ(80, 'pre', 4),
                    e._uU(81, '          '),
                    e.TgZ(82, 'button', 5),
                    e._uU(83, 'Copiar'),
                    e.qZA(),
                    e._uU(84, '\n          '),
                    e.TgZ(85, 'code', 6),
                    e._uU(86),
                    e.qZA(),
                    e._uU(87, '\n        '),
                    e.qZA(),
                    e.TgZ(88, 'pre', 7),
                    e._uU(89, '          '),
                    e.TgZ(90, 'button', 5),
                    e._uU(91, 'Copiar'),
                    e.qZA(),
                    e._uU(92, '\n          '),
                    e.TgZ(93, 'code', 8),
                    e._uU(94),
                    e.qZA(),
                    e._uU(95, '\n        '),
                    e.qZA()()()),
                    2 & l &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('steps', i.steps),
                      e.xp6(7),
                      e.hij('\n            ', i.liststepExampleHtml, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', i.liststepExampleTs, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('steps', i.steps)('isStepLight', !0),
                      e.xp6(7),
                      e.hij('\n            ', i.liststepLightExampleHtml, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', i.liststepExampleTs, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('steps', i.steps)('isStepNumber', !0),
                      e.xp6(7),
                      e.hij('\n            ', i.liststepNumberExampleHtml, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', i.liststepExampleTs, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('steps', i.steps),
                      e.xp6(7),
                      e.hij('\n            ', i.liststepLgExampleHtml, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', i.liststepExampleTs, '\n          '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('steps', i.steps),
                      e.xp6(7),
                      e.hij('\n            ', i.liststepSmExampleHtml, '\n          '),
                      e.xp6(8),
                      e.hij('\n            ', i.liststepExampleTs, '\n          '));
                },
                dependencies: [v.B, O.y, A.y, a]
              })),
              o
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let c = (() => {
        class o {}
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [s.Bz.forChild(n), s.Bz] })),
          o
        );
      })();
      var h = p(7538),
        T = p(2089),
        S = p(7377),
        M = p(9384);
      let L = (() => {
        class o {}
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [t.ez, c, h.Z, T.Z, v.B, S.N, M.T] })),
          o
        );
      })();
    }
  }
]);
