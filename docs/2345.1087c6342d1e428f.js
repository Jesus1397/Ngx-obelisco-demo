'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2345],
  {
    4883: (H, f, c) => {
      c.d(f, { L: () => T });
      var n = c(4893),
        o = c(2313),
        C = c(9808);
      const p = ['checkbox'];
      function e(s, _) {
        if (1 & s) {
          const t = n.EpF();
          n.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            n.NdJ('change', function (h) {
              n.CHM(t);
              const Z = n.oxw(2);
              return n.KtG(Z.onHeaderCheckboxChange(h));
            }),
            n.qZA(),
            n.TgZ(3, 'label', 8),
            n._uU(4),
            n.qZA()()();
        }
        if (2 & s) {
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
      function b(s, _) {
        if ((1 & s && (n.TgZ(0, 'th', 5), n._uU(1), n.qZA()), 2 & s)) {
          const t = n.oxw(2);
          n.Q6J('ngClass', t.checkbox.customClassesTh), n.xp6(1), n.hij(' ', t.checkbox.title, ' ');
        }
      }
      function A(s, _) {
        if ((1 & s && (n.ynx(0), n.TgZ(1, 'th', 5), n._uU(2), n.qZA(), n.BQk()), 2 & s)) {
          const t = _.$implicit;
          n.xp6(1), n.Q6J('ngClass', t.customClasses), n.xp6(1), n.Oqu(t.value);
        }
      }
      function U(s, _) {
        if (1 & s) {
          const t = n.EpF();
          n.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            n.NdJ('change', function (h) {
              n.CHM(t);
              const Z = n.oxw().$implicit,
                M = n.oxw(2);
              return n.KtG(M.onCheckboxChange(Z, h));
            }),
            n.qZA(),
            n._UZ(4, 'label', 11),
            n.qZA()();
        }
        if (2 & s) {
          const t = n.oxw().index,
            r = n.oxw(2);
          n.xp6(2),
            n.hYB('id', '', r.id, '-checkbox_', t, '')('name', '', r.id, '-checkbox_', t, ''),
            n.xp6(2),
            n.hYB('for', '', r.id, '-checkbox_', t, '');
        }
      }
      function O(s, _) {
        if ((1 & s && n._UZ(0, 'div', 14), 2 & s)) {
          const t = n.oxw().$implicit,
            r = n.oxw().$implicit,
            h = n.oxw(2);
          n.Q6J('innerHTML', h.sanitizeHTML(r[t.key].data), n.oJD);
        }
      }
      function w(s, _) {
        if ((1 & s && (n.ynx(0), n.TgZ(1, 'td', 12), n.YNc(2, O, 1, 1, 'div', 13), n.qZA(), n.BQk()), 2 & s)) {
          const t = _.$implicit,
            r = n.oxw().$implicit;
          n.xp6(1), n.Q6J('ngClass', r[t.key].customClasses), n.xp6(1), n.Q6J('ngIf', r[t.key].data);
        }
      }
      function m(s, _) {
        if (
          (1 & s && (n.TgZ(0, 'tr'), n.YNc(1, U, 5, 6, 'td', 9), n.YNc(2, w, 3, 2, 'ng-container', 4), n.qZA()), 2 & s)
        ) {
          const t = n.oxw(2);
          n.xp6(1), n.Q6J('ngIf', t.checkbox), n.xp6(1), n.Q6J('ngForOf', t.columns);
        }
      }
      const v = function (s, _) {
        return { 'table-borderless': s, 'table-striped': _ };
      };
      function g(s, _) {
        if (
          (1 & s &&
            (n.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            n.YNc(3, e, 5, 6, 'th', 3),
            n.YNc(4, b, 2, 2, 'th', 3),
            n.YNc(5, A, 3, 2, 'ng-container', 4),
            n.qZA()(),
            n.TgZ(6, 'tbody'),
            n.YNc(7, m, 3, 2, 'tr', 4),
            n.qZA()()),
          2 & s)
        ) {
          const t = n.oxw();
          n.Q6J('ngClass', n.WLB(5, v, !t.isBordered, t.isStriped)),
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
      const d = function (s) {
        return { 'responsive-scroll': s };
      };
      let T = (() => {
        class s {
          constructor(t, r) {
            (this.renderer = t),
              (this.sanitizer = r),
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
            const r = t.target;
            if (r) {
              const h = r.checked;
              this.checkboxRef.toArray().forEach((Z) => {
                Z.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(t, r) {
            if (r && r.target && 'boolean' == typeof r.target.checked) {
              if (r.target.checked) this.dataSelected.push(t);
              else {
                const Z = this.dataSelected.findIndex((M) => M === t);
                -1 !== Z && this.dataSelected.splice(Z, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (t) {
            return new (t || s)(n.Y36(n.Qsj), n.Y36(o.H7));
          }),
          (s.ɵcmp = n.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (t, r) {
              if ((1 & t && n.Gf(p, 5), 2 & t)) {
                let h;
                n.iGM((h = n.CRH())) && (r.checkboxRef = h);
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
            template: function (t, r) {
              1 & t && (n.TgZ(0, 'div', 0), n.YNc(1, g, 8, 8, 'table', 1), n.qZA()),
                2 & t &&
                  (n.Tol(r.customClasses),
                  n.Q6J('ngClass', n.VKq(4, d, r.isScrollable)),
                  n.xp6(1),
                  n.Q6J('ngIf', r.isValidateComponent));
            },
            dependencies: [C.mk, C.sg, C.O5]
          })),
          s
        );
      })();
    },
    2089: (H, f, c) => {
      c.d(f, { Z: () => C });
      var n = c(9808),
        o = c(4893);
      let C = (() => {
        class p {}
        return (
          (p.ɵfac = function (b) {
            return new (b || p)();
          }),
          (p.ɵmod = o.oAB({ type: p })),
          (p.ɵinj = o.cJS({ imports: [n.ez] })),
          p
        );
      })();
    },
    4948: (H, f, c) => {
      c.d(f, { B: () => w });
      var n = c(9808),
        o = c(4893);
      function C(m, v) {
        if (1 & m) {
          const g = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(g);
              const T = o.oxw();
              return o.KtG((T.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(g);
              const T = o.oxw();
              return o.KtG((T.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & m) {
          const g = o.oxw();
          o.xp6(3), o.ekj('active', g.isWindowHTML), o.xp6(3), o.ekj('active', !g.isWindowHTML);
        }
      }
      function p(m, v) {
        1 & m && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function e(m, v) {
        1 & m && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function b(m, v) {
        if ((1 & m && o.YNc(0, e, 2, 0, 'ng-container', 7), 2 & m)) {
          const g = o.oxw(),
            d = o.MAs(16);
          o.Q6J('ngIf', g.isWindowHTML)('ngIfElse', d);
        }
      }
      function A(m, v) {
        1 & m && o.Hsn(0, 2);
      }
      const U = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let w = (() => {
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
            template: function (g, d) {
              if (
                (1 & g &&
                  (o.F$t(U),
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
                  o.YNc(11, C, 8, 4, 'nav', 6),
                  o.YNc(12, p, 2, 0, 'ng-container', 7),
                  o.YNc(13, b, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, A, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & g)
              ) {
                const T = o.MAs(14);
                o.xp6(3),
                  o.Oqu(d.title),
                  o.xp6(4),
                  o.ekj('active', d.isOpenCode),
                  o.xp6(2),
                  o.Oqu(d.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', d.isOpenCode && d.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !d.isOpenCode)('ngIfElse', T);
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
    2345: (H, f, c) => {
      c.r(f), c.d(f, { NavigationHorizontalModule: () => M });
      var n = c(9808),
        o = c(2526),
        C = c(5570),
        p = c(45),
        e = c(4893),
        b = c(4883),
        A = c(6434);
      let U = (() => {
        class i {
          constructor() {
            (this.columns = C.L0),
              (this.dataSourceNavigationHorizontal = p.qE),
              (this.dataSourceInterface = p.Vb),
              (this.exampleIterface = p.F3),
              (this.sizes = C.zf);
          }
        }
        return (
          (i.ɵfac = function (l) {
            return new (l || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['app-navigation-horizontal-api']],
            decls: 58,
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
              ['appPrism', '']
            ],
            template: function (l, a) {
              1 & l &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Navegacion horizontal de Obelisco'),
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
                e._uU(13, 'ONavHorizontal'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-nav-horizontal'),
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
                e._uU(27, 'NavHorizontalItems'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'navHorItems'),
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
                e._UZ(43, 'br'),
                e.TgZ(44, 'div', 7)(45, 'h4'),
                e._uU(46, 'Sizes'),
                e.qZA(),
                e.TgZ(47, 'p'),
                e._uU(48, 'Permite establecer el tama\xf1o del componente '),
                e.TgZ(49, 'strong'),
                e._uU(50, 'ONavHorizontalComponent'),
                e.qZA(),
                e._uU(51, '.'),
                e.qZA(),
                e.TgZ(52, 'div', 8)(53, 'pre', 2),
                e._uU(54, '          '),
                e.TgZ(55, 'code', 11),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n        '),
                e.qZA()()()()),
                2 & l &&
                  (e.xp6(21),
                  e.Q6J('columns', a.columns)('dataSource', a.dataSourceNavigationHorizontal)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(16),
                  e.Oqu(a.exampleIterface),
                  e.xp6(5),
                  e.Q6J('dataSource', a.dataSourceInterface)('columns', a.columns)('isBordered', !0)('isStriped', !0),
                  e.xp6(14),
                  e.hij('\n            ', a.sizes, '\n          '));
            },
            dependencies: [b.L, A.y]
          })),
          i
        );
      })();
      const O = ['navLink'];
      function w(i, u) {
        if ((1 & i && (e.TgZ(0, 'div', 8), e._UZ(1, 'i'), e.TgZ(2, 'span'), e._uU(3), e.qZA()()), 2 & i)) {
          const l = e.oxw().$implicit;
          e.xp6(1), e.Tol(l.icon), e.xp6(2), e.Oqu(l.title);
        }
      }
      function m(i, u) {
        if ((1 & i && (e.TgZ(0, 'span'), e._uU(1), e.qZA()), 2 & i)) {
          const l = e.oxw().$implicit;
          e.xp6(1), e.Oqu(l.title);
        }
      }
      function v(i, u) {
        if (
          (1 & i &&
            (e.TgZ(0, 'li', 3)(1, 'a', 4, 5),
            e.YNc(3, w, 4, 3, 'div', 6),
            e.YNc(4, m, 2, 1, 'ng-template', null, 7, e.W1O),
            e.qZA()()),
          2 & i)
        ) {
          const l = u.$implicit,
            a = u.index,
            x = e.MAs(5),
            z = e.oxw();
          e.xp6(1),
            e.ekj('border-link', z.isBordered)('disabled', l.isDisabled),
            e.Q6J('routerLink', l.route)('ngClass', z.size ? 'nav-link-' + z.size : ''),
            e.xp6(2),
            e.Q6J('ngIf', 0 === a && l.icon)('ngIfElse', x);
        }
      }
      let g = (() => {
        class i {
          constructor(l) {
            (this.renderer = l),
              (this.navHorItems = []),
              (this.isBordered = !1),
              (this.size = 'md'),
              (this.customClasses = '');
          }
          ngAfterViewInit() {
            const l = this.navHorItems.map((a, x) => x);
            this.navLinks.forEach((a, x) => {
              ('' === a.nativeElement.href || !a.nativeElement.href) &&
                l.includes(x) &&
                this.renderer.setAttribute(a.nativeElement, 'href', this.navHorItems[x].link);
            });
          }
        }
        return (
          (i.ɵfac = function (l) {
            return new (l || i)(e.Y36(e.Qsj));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['o-nav-horizontal']],
            viewQuery: function (l, a) {
              if ((1 & l && e.Gf(O, 5), 2 & l)) {
                let x;
                e.iGM((x = e.CRH())) && (a.navLinks = x);
              }
            },
            inputs: {
              navHorItems: 'navHorItems',
              isBordered: 'isBordered',
              size: 'size',
              customClasses: 'customClasses'
            },
            decls: 3,
            vars: 2,
            consts: [
              [3, 'ngClass'],
              [1, 'nav', 'flex-row', 'nav-pills'],
              ['class', 'nav-item', 4, 'ngFor', 'ngForOf'],
              [1, 'nav-item'],
              ['routerLinkActive', 'active', 1, 'nav-link', 3, 'routerLink', 'ngClass'],
              ['navLink', ''],
              ['class', 'nav-icon', 4, 'ngIf', 'ngIfElse'],
              ['simpleTitle', ''],
              [1, 'nav-icon']
            ],
            template: function (l, a) {
              1 & l && (e.TgZ(0, 'nav', 0)(1, 'ul', 1), e.YNc(2, v, 6, 8, 'li', 2), e.qZA()()),
                2 & l && (e.Q6J('ngClass', a.customClasses), e.xp6(2), e.Q6J('ngForOf', a.navHorItems));
            },
            dependencies: [n.mk, n.sg, n.O5, o.yS, o.Od]
          })),
          i
        );
      })();
      var d = c(4948),
        T = c(2171);
      const _ = [
        { path: 'api', component: U },
        {
          path: 'examples',
          component: (() => {
            class i {
              constructor() {
                (this.navigationSimpleComponent = p.pE),
                  (this.navigationSizeComponent = p.hZ),
                  (this.NavigationSimpleIconComponent = p.F6),
                  (this.simpleHTML = p.DO),
                  (this.sizesHTML = p.qo),
                  (this.simpleBorderHTML = p.ob),
                  (this.sizesTs = p.Qg),
                  (this.exampleTs = p.$E),
                  (this.exmapleTsIcon = p.xc);
              }
            }
            return (
              (i.ɵfac = function (l) {
                return new (l || i)();
              }),
              (i.ɵcmp = e.Xpm({
                type: i,
                selectors: [['app-navigation-horizontal-examples']],
                decls: 95,
                vars: 27,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Simple', 3, 'isNavCode'],
                  ['component', '', 'size', 'lg', 3, 'navHorItems'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript'],
                  ['title', 'Simple con icono', 3, 'isNavCode'],
                  ['title', 'Tama\xf1os', 3, 'isNavCode'],
                  ['component', '', 1, 'option-container'],
                  [
                    'component',
                    '',
                    1,
                    'd-flex',
                    'flex-row',
                    'justify-content-start',
                    'align-items-center',
                    'options-container'
                  ],
                  ['component', '', 'size', 'sm', 3, 'navHorItems', 'isBordered'],
                  ['component', '', 'size', 'md', 3, 'navHorItems', 'isBordered'],
                  ['component', '', 'size', 'lg', 3, 'navHorItems', 'isBordered'],
                  ['appPrism', ''],
                  ['title', 'Simple con borde', 3, 'isNavCode'],
                  ['title', 'Simple con borde e icono', 3, 'isNavCode']
                ],
                template: function (l, a) {
                  1 & l &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1),
                    e._UZ(2, 'o-nav-horizontal', 2),
                    e.TgZ(3, 'pre', 3),
                    e._uU(4, '        '),
                    e.TgZ(5, 'button', 4),
                    e._uU(6, 'Copiar'),
                    e.qZA(),
                    e._uU(7, '\n        '),
                    e.TgZ(8, 'code', 5),
                    e._uU(9),
                    e.qZA(),
                    e._uU(10, '\n      '),
                    e.qZA(),
                    e.TgZ(11, 'pre', 6),
                    e._uU(12, '        '),
                    e.TgZ(13, 'button', 4),
                    e._uU(14, 'Copiar'),
                    e.qZA(),
                    e._uU(15, '\n        '),
                    e.TgZ(16, 'code', 7),
                    e._uU(17),
                    e.qZA(),
                    e._uU(18, '\n      '),
                    e.qZA()(),
                    e.TgZ(19, 'app-viewer', 8),
                    e._UZ(20, 'o-nav-horizontal', 2),
                    e.TgZ(21, 'pre', 3),
                    e._uU(22, '        '),
                    e.TgZ(23, 'button', 4),
                    e._uU(24, 'Copiar'),
                    e.qZA(),
                    e._uU(25, '\n        '),
                    e.TgZ(26, 'code', 5),
                    e._uU(27),
                    e.qZA(),
                    e._uU(28, '\n      '),
                    e.qZA(),
                    e.TgZ(29, 'pre', 6),
                    e._uU(30, '        '),
                    e.TgZ(31, 'button', 4),
                    e._uU(32, 'Copiar'),
                    e.qZA(),
                    e._uU(33, '\n        '),
                    e.TgZ(34, 'code', 7),
                    e._uU(35),
                    e.qZA(),
                    e._uU(36, '\n      '),
                    e.qZA()(),
                    e.TgZ(37, 'app-viewer', 9)(38, 'div', 10)(39, 'form', 11),
                    e._UZ(40, 'o-nav-horizontal', 12)(41, 'o-nav-horizontal', 13)(42, 'o-nav-horizontal', 14),
                    e.qZA()(),
                    e.TgZ(43, 'pre', 3),
                    e._uU(44, '        '),
                    e.TgZ(45, 'button', 4),
                    e._uU(46, 'Copiar'),
                    e.qZA(),
                    e._uU(47, '\n        '),
                    e.TgZ(48, 'code', 5),
                    e._uU(49),
                    e.qZA(),
                    e._uU(50, '\n      '),
                    e.qZA(),
                    e.TgZ(51, 'pre', 6),
                    e._uU(52, '        '),
                    e.TgZ(53, 'button', 4),
                    e._uU(54, 'Copiar'),
                    e.qZA(),
                    e._uU(55, '\n        '),
                    e.TgZ(56, 'code', 15),
                    e._uU(57),
                    e.qZA(),
                    e._uU(58, '\n      '),
                    e.qZA()(),
                    e.TgZ(59, 'app-viewer', 16),
                    e._UZ(60, 'o-nav-horizontal', 14),
                    e.TgZ(61, 'pre', 3),
                    e._uU(62, '        '),
                    e.TgZ(63, 'button', 4),
                    e._uU(64, 'Copiar'),
                    e.qZA(),
                    e._uU(65, '\n        '),
                    e.TgZ(66, 'code', 5),
                    e._uU(67),
                    e.qZA(),
                    e._uU(68, '\n      '),
                    e.qZA(),
                    e.TgZ(69, 'pre', 6),
                    e._uU(70, '        '),
                    e.TgZ(71, 'button', 4),
                    e._uU(72, 'Copiar'),
                    e.qZA(),
                    e._uU(73, '\n        '),
                    e.TgZ(74, 'code', 15),
                    e._uU(75),
                    e.qZA(),
                    e._uU(76, '\n      '),
                    e.qZA()(),
                    e.TgZ(77, 'app-viewer', 17),
                    e._UZ(78, 'o-nav-horizontal', 14),
                    e.TgZ(79, 'pre', 3),
                    e._uU(80, '        '),
                    e.TgZ(81, 'button', 4),
                    e._uU(82, 'Copiar'),
                    e.qZA(),
                    e._uU(83, '\n        '),
                    e.TgZ(84, 'code', 5),
                    e._uU(85),
                    e.qZA(),
                    e._uU(86, '\n      '),
                    e.qZA(),
                    e.TgZ(87, 'pre', 6),
                    e._uU(88, '        '),
                    e.TgZ(89, 'button', 4),
                    e._uU(90, 'Copiar'),
                    e.qZA(),
                    e._uU(91, '\n        '),
                    e.TgZ(92, 'code', 15),
                    e._uU(93),
                    e.qZA(),
                    e._uU(94, '\n      '),
                    e.qZA()()()),
                    2 & l &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navHorItems', a.navigationSimpleComponent),
                      e.xp6(7),
                      e.hij('\n          ', a.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', a.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navHorItems', a.NavigationSimpleIconComponent),
                      e.xp6(7),
                      e.hij('\n          ', a.simpleHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', a.exmapleTsIcon, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(3),
                      e.Q6J('navHorItems', a.navigationSizeComponent)('isBordered', !0),
                      e.xp6(1),
                      e.Q6J('navHorItems', a.navigationSizeComponent)('isBordered', !0),
                      e.xp6(1),
                      e.Q6J('navHorItems', a.navigationSizeComponent)('isBordered', !0),
                      e.xp6(7),
                      e.hij('\n          ', a.sizesHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', a.sizesTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navHorItems', a.navigationSimpleComponent)('isBordered', !0),
                      e.xp6(7),
                      e.hij('\n          ', a.simpleBorderHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', a.exampleTs, '\n        '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('navHorItems', a.NavigationSimpleIconComponent)('isBordered', !0),
                      e.xp6(7),
                      e.hij('\n          ', a.simpleBorderHTML, '\n        '),
                      e.xp6(8),
                      e.hij('\n          ', a.exmapleTsIcon, '\n        '));
                },
                dependencies: [g, d.B, T.y, A.y],
                styles: ['.options-container[_ngcontent-%COMP%]{gap:.625rem}']
              })),
              i
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let t = (() => {
        class i {}
        return (
          (i.ɵfac = function (l) {
            return new (l || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [o.Bz.forChild(_), o.Bz] })),
          i
        );
      })();
      var r = c(7538),
        h = c(2089),
        Z = c(9384);
      let M = (() => {
        class i {}
        return (
          (i.ɵfac = function (l) {
            return new (l || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [n.ez, t, r.Z, h.Z, d.B, Z.T] })),
          i
        );
      })();
    }
  }
]);
