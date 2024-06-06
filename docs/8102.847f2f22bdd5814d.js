'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [8102],
  {
    4883: (w, T, c) => {
      c.d(T, { L: () => f });
      var t = c(4893),
        n = c(2313),
        e = c(9808);
      const h = ['checkbox'];
      function v(s, _) {
        if (1 & s) {
          const o = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (g) {
              t.CHM(o);
              const C = t.oxw(2);
              return t.KtG(C.onHeaderCheckboxChange(g));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & s) {
          const o = t.oxw(2);
          t.Q6J('ngClass', o.checkbox.customClassesTh),
            t.xp6(2),
            t.MGl('id', '', o.id, '-selectAllCheckbox')('name', '', o.id, '-selectAllCheckbox'),
            t.xp6(1),
            t.MGl('for', '', o.id, '-selectAllCheckbox'),
            t.Q6J('ngClass', o.checkbox.customClassesLabel),
            t.xp6(1),
            t.Oqu(o.checkbox.title);
        }
      }
      function Z(s, _) {
        if ((1 & s && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & s)) {
          const o = t.oxw(2);
          t.Q6J('ngClass', o.checkbox.customClassesTh), t.xp6(1), t.hij(' ', o.checkbox.title, ' ');
        }
      }
      function x(s, _) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & s)) {
          const o = _.$implicit;
          t.xp6(1), t.Q6J('ngClass', o.customClasses), t.xp6(1), t.Oqu(o.value);
        }
      }
      function A(s, _) {
        if (1 & s) {
          const o = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (g) {
              t.CHM(o);
              const C = t.oxw().$implicit,
                U = t.oxw(2);
              return t.KtG(U.onCheckboxChange(C, g));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & s) {
          const o = t.oxw().index,
            i = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', i.id, '-checkbox_', o, '')('name', '', i.id, '-checkbox_', o, ''),
            t.xp6(2),
            t.hYB('for', '', i.id, '-checkbox_', o, '');
        }
      }
      function O(s, _) {
        if ((1 & s && t._UZ(0, 'div', 14), 2 & s)) {
          const o = t.oxw().$implicit,
            i = t.oxw().$implicit,
            g = t.oxw(2);
          t.Q6J('innerHTML', g.sanitizeHTML(i[o.key].data), t.oJD);
        }
      }
      function M(s, _) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, O, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & s)) {
          const o = _.$implicit,
            i = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', i[o.key].customClasses), t.xp6(1), t.Q6J('ngIf', i[o.key].data);
        }
      }
      function u(s, _) {
        if (
          (1 & s && (t.TgZ(0, 'tr'), t.YNc(1, A, 5, 6, 'td', 9), t.YNc(2, M, 3, 2, 'ng-container', 4), t.qZA()), 2 & s)
        ) {
          const o = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', o.checkbox), t.xp6(1), t.Q6J('ngForOf', o.columns);
        }
      }
      const b = function (s, _) {
        return { 'table-borderless': s, 'table-striped': _ };
      };
      function p(s, _) {
        if (
          (1 & s &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, v, 5, 6, 'th', 3),
            t.YNc(4, Z, 2, 2, 'th', 3),
            t.YNc(5, x, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & s)
        ) {
          const o = t.oxw();
          t.Q6J('ngClass', t.WLB(5, b, !o.isBordered, o.isStriped)),
            t.xp6(3),
            t.Q6J('ngIf', 1 == (null == o.checkbox ? null : o.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngIf', 0 == (null == o.checkbox ? null : o.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngForOf', o.columns),
            t.xp6(2),
            t.Q6J('ngForOf', o.dataSource);
        }
      }
      const d = function (s) {
        return { 'responsive-scroll': s };
      };
      let f = (() => {
        class s {
          constructor(o, i) {
            (this.renderer = o),
              (this.sanitizer = i),
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
            this.checkboxRef.map((o) => {
              this.inputCheckArr.push(o.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((o) => {
              if ('' === o.key || '' === o.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((o) => (o.value = o.value.trim())),
              (this.columns = this.columns.map(
                (o) => ((o.value = o.value.charAt(0).toUpperCase() + o.value.slice(1).toLowerCase()), o)
              )),
              this.columns.map((o) => {
                if (
                  o.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  o.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), o;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(o) {
            return this.sanitizer.bypassSecurityTrustHtml(o);
          }
          onHeaderCheckboxChange(o) {
            const i = o.target;
            if (i) {
              const g = i.checked;
              this.checkboxRef.toArray().forEach((C) => {
                C.nativeElement.checked = g;
              }),
                (this.dataSelected = g ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(o, i) {
            if (i && i.target && 'boolean' == typeof i.target.checked) {
              if (i.target.checked) this.dataSelected.push(o);
              else {
                const C = this.dataSelected.findIndex((U) => U === o);
                -1 !== C && this.dataSelected.splice(C, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (o) {
            return new (o || s)(t.Y36(t.Qsj), t.Y36(n.H7));
          }),
          (s.ɵcmp = t.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (o, i) {
              if ((1 & o && t.Gf(h, 5), 2 & o)) {
                let g;
                t.iGM((g = t.CRH())) && (i.checkboxRef = g);
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
            template: function (o, i) {
              1 & o && (t.TgZ(0, 'div', 0), t.YNc(1, p, 8, 8, 'table', 1), t.qZA()),
                2 & o &&
                  (t.Tol(i.customClasses),
                  t.Q6J('ngClass', t.VKq(4, d, i.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', i.isValidateComponent));
            },
            dependencies: [e.mk, e.sg, e.O5]
          })),
          s
        );
      })();
    },
    2089: (w, T, c) => {
      c.d(T, { Z: () => e });
      var t = c(9808),
        n = c(4893);
      let e = (() => {
        class h {}
        return (
          (h.ɵfac = function (Z) {
            return new (Z || h)();
          }),
          (h.ɵmod = n.oAB({ type: h })),
          (h.ɵinj = n.cJS({ imports: [t.ez] })),
          h
        );
      })();
    },
    4948: (w, T, c) => {
      c.d(T, { B: () => M });
      var t = c(9808),
        n = c(4893);
      function e(u, b) {
        if (1 & u) {
          const p = n.EpF();
          n.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            n.NdJ('click', function () {
              n.CHM(p);
              const f = n.oxw();
              return n.KtG((f.isWindowHTML = !0));
            }),
            n._uU(4, 'HTML'),
            n.qZA()(),
            n.TgZ(5, 'li', 12)(6, 'a', 14),
            n.NdJ('click', function () {
              n.CHM(p);
              const f = n.oxw();
              return n.KtG((f.isWindowHTML = !1));
            }),
            n._uU(7, 'TS'),
            n.qZA()()()();
        }
        if (2 & u) {
          const p = n.oxw();
          n.xp6(3), n.ekj('active', p.isWindowHTML), n.xp6(3), n.ekj('active', !p.isWindowHTML);
        }
      }
      function h(u, b) {
        1 & u && (n.ynx(0), n.Hsn(1), n.BQk());
      }
      function v(u, b) {
        1 & u && (n.ynx(0), n.Hsn(1, 1), n.BQk());
      }
      function Z(u, b) {
        if ((1 & u && n.YNc(0, v, 2, 0, 'ng-container', 7), 2 & u)) {
          const p = n.oxw(),
            d = n.MAs(16);
          n.Q6J('ngIf', p.isWindowHTML)('ngIfElse', d);
        }
      }
      function x(u, b) {
        1 & u && n.Hsn(0, 2);
      }
      const A = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let M = (() => {
        class u {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (u.ɵfac = function (p) {
            return new (p || u)();
          }),
          (u.ɵcmp = n.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [n.jDz],
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
            template: function (p, d) {
              if (
                (1 & p &&
                  (n.F$t(A),
                  n.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  n._uU(3),
                  n.qZA(),
                  n.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  n.NdJ('click', function () {
                    return (d.isOpenCode = !d.isOpenCode);
                  }),
                  n.TgZ(8, 'span'),
                  n._uU(9),
                  n.qZA()()()()()(),
                  n.TgZ(10, 'div', 5),
                  n.YNc(11, e, 8, 4, 'nav', 6),
                  n.YNc(12, h, 2, 0, 'ng-container', 7),
                  n.YNc(13, Z, 1, 2, 'ng-template', null, 8, n.W1O),
                  n.YNc(15, x, 1, 0, 'ng-template', null, 9, n.W1O),
                  n.qZA()()),
                2 & p)
              ) {
                const f = n.MAs(14);
                n.xp6(3),
                  n.Oqu(d.title),
                  n.xp6(4),
                  n.ekj('active', d.isOpenCode),
                  n.xp6(2),
                  n.Oqu(d.linkCode),
                  n.xp6(2),
                  n.Q6J('ngIf', d.isOpenCode && d.isNavCode),
                  n.xp6(1),
                  n.Q6J('ngIf', !d.isOpenCode)('ngIfElse', f);
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
    8102: (w, T, c) => {
      c.r(T), c.d(T, { BreadcrumbModule: () => q });
      var t = c(9808),
        n = c(2526),
        e = c(4893);
      let h = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, n.Bz] })),
          a
        );
      })();
      var v = c(7538),
        Z = c(2089),
        x = c(5600),
        A = c(5570),
        O = c(6434),
        M = c(4883);
      let u = (() => {
        class a {
          constructor() {
            (this.exampleInterface1 = x.c_),
              (this.exampleInterface2 = x.qm),
              (this.dataSource = x.AB),
              (this.dataSourceRoute = x.gQ),
              (this.columns = A.L0);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-breadcrumb-api']],
            decls: 70,
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
                "import { OBreadcrumbModule } from 'ngx-obelisco-example/breadcrumb';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties'],
              ['appPrism', '', 'language', 'javascript', 'code', "import { BreadCrumbService } from 'ngx-obelisco';"],
              [1, 'mb-5'],
              [1, 'section-type', 'mt-5'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped'],
              [1, 'mt-5']
            ],
            template: function (r, l) {
              1 & r &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Pan de miga de Obelisco'),
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
                e._uU(13, 'OBreadcrumb'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-breadcrumb'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Como se usa'),
                e.qZA(),
                e.TgZ(21, 'p'),
                e._uU(
                  22,
                  ' Se puede usar agregando su etiqueta en el html para detectar desde la url que par\xe1metros agregar al breadcrumb. '
                ),
                e.qZA(),
                e.TgZ(23, 'pre', 2),
                e._uU(24, '        '),
                e._UZ(25, 'code', 6),
                e._uU(26, '\n      '),
                e.qZA(),
                e.TgZ(27, 'p', 7),
                e._uU(28, ' De otra forma se tiene que importar el servicio '),
                e.TgZ(29, 'strong'),
                e._uU(30, 'BreadCrumbService'),
                e.qZA(),
                e._uU(
                  31,
                  ' desde el componente a quien le queremos cambiar o personalizar el breadcrumb y agregar el valor al BehaviorSubject '
                ),
                e.TgZ(32, 'strong'),
                e._uU(33, 'breadcrumb$'),
                e.qZA(),
                e._uU(34, ' la ruta actual, las rutas y la url de la siguiente manera: '),
                e.qZA()(),
                e.TgZ(35, 'div', 8)(36, 'h4'),
                e._uU(37, 'Breadcrumb'),
                e.qZA(),
                e.TgZ(38, 'p'),
                e._uU(39, 'Permite establecer los valores de la propiedad '),
                e.TgZ(40, 'strong'),
                e._uU(41, 'breadcrumb$'),
                e.qZA(),
                e._uU(42, '.'),
                e.qZA(),
                e.TgZ(43, 'div', 9)(44, 'pre', 2),
                e._uU(45, '          '),
                e.TgZ(46, 'code', 10),
                e._uU(47),
                e.qZA(),
                e._uU(48, '\n        '),
                e.qZA(),
                e.TgZ(49, 'div', 5)(50, 'h5'),
                e._uU(51, 'Propiedades'),
                e.qZA(),
                e._UZ(52, 'o-table', 11),
                e.qZA()(),
                e.TgZ(53, 'h4', 12),
                e._uU(54, 'Breadcrumb'),
                e.qZA(),
                e.TgZ(55, 'p'),
                e._uU(56, 'Permite establecer los valores de la propiedad '),
                e.TgZ(57, 'strong'),
                e._uU(58, 'breadcrumb$'),
                e.qZA(),
                e._uU(59, '.'),
                e.qZA(),
                e.TgZ(60, 'div', 9)(61, 'pre', 2),
                e._uU(62, '          '),
                e.TgZ(63, 'code', 10),
                e._uU(64),
                e.qZA(),
                e._uU(65, '\n        '),
                e.qZA(),
                e.TgZ(66, 'div', 5)(67, 'h5'),
                e._uU(68, 'Propiedades'),
                e.qZA(),
                e._UZ(69, 'o-table', 11),
                e.qZA()()()()()),
                2 & r &&
                  (e.xp6(47),
                  e.Oqu(l.exampleInterface1),
                  e.xp6(5),
                  e.Q6J('dataSource', l.dataSource)('columns', l.columns)('isBordered', !0)('isStriped', !0),
                  e.xp6(12),
                  e.Oqu(l.exampleInterface2),
                  e.xp6(5),
                  e.Q6J('dataSource', l.dataSourceRoute)('columns', l.columns)('isBordered', !0)('isStriped', !0));
            },
            dependencies: [O.y, M.L]
          })),
          a
        );
      })();
      var b = c(1135);
      let p = (() => {
        class a {
          constructor() {
            this.breadcrumb$ = new b.X({});
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵprov = e.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
          a
        );
      })();
      var d = c(4948),
        f = c(7579),
        s = c(2722),
        _ = c(9300),
        o = c(8675);
      function i(a, m) {
        1 & a && (e.TgZ(0, 'li', 4)(1, 'a', 5), e._uU(2, 'Inicio'), e.qZA()());
      }
      function g(a, m) {
        if ((1 & a && e._uU(0), 2 & a)) {
          const r = e.oxw().$implicit;
          e.hij('', null == r ? null : r.name, ' ');
        }
      }
      const C = function (a) {
        return [a];
      };
      function U(a, m) {
        if (
          (1 & a &&
            (e.TgZ(0, 'li', 4)(1, 'a', 6),
            e._uU(2),
            e.qZA(),
            e.YNc(3, g, 1, 1, 'ng-template', null, 7, e.W1O),
            e.qZA()),
          2 & a)
        ) {
          const r = m.$implicit;
          e.xp6(1), e.Q6J('routerLink', e.VKq(2, C, r.route)), e.xp6(1), e.hij(' ', r.name, ' ');
        }
      }
      let B = (() => {
        class a {
          constructor(r, l) {
            (this.router = r),
              (this.breadcrumbService = l),
              (this.customClasses = ''),
              (this.routes = []),
              (this.onDestroy$ = new f.x());
          }
          ngOnInit() {
            this.breadcrumbService.breadcrumb$.pipe((0, s.R)(this.onDestroy$)).subscribe((r) => {
              0 !== Object.entries(r).length &&
                ((this.routes = r.routes || []), (this.defaultRoute = r.defaultRoute || ''));
            }),
              0 !== this.routes.length || this.getPaths();
          }
          getPaths() {
            0 != this.routes.length &&
              this.router.events
                .pipe(
                  (0, s.R)(this.onDestroy$),
                  (0, _.h)((r) => r instanceof n.m2),
                  (0, o.O)(this.router)
                )
                .subscribe({
                  next: (r) => {
                    (this.routes = []),
                      r.route
                        .split('/')
                        .forEach(
                          (l, I) =>
                            ('' !== l || isNaN(+l) || l.length > 2) &&
                            this.routes.push({ name: this.formatedName(l), route: this.formatedRoute(l, r.route) })
                        );
                  }
                });
          }
          formatedName(r) {
            return (r && r[0].toUpperCase() + r.split('-').join(' ').slice(1)) || '';
          }
          formatedRoute(r, l) {
            return l.split(r)[0] + r;
          }
          ngOnDestroy() {
            this.onDestroy$.next(), this.onDestroy$.complete();
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(e.Y36(n.F0), e.Y36(p));
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-breadcrumb']],
            inputs: { customClasses: 'customClasses' },
            decls: 4,
            vars: 3,
            consts: [
              ['aria-label', 'Navegaci\xf3n secundaria', 3, 'ngClass'],
              [1, 'breadcrumb'],
              ['class', 'breadcrumb-item', 4, 'ngIf'],
              ['class', 'breadcrumb-item', 4, 'ngFor', 'ngForOf'],
              [1, 'breadcrumb-item'],
              ['href', 'https://buenosaires.gob.ar/inicio/'],
              [3, 'routerLink'],
              ['nameDefault', '']
            ],
            template: function (r, l) {
              1 & r &&
                (e.TgZ(0, 'nav', 0)(1, 'ol', 1), e.YNc(2, i, 3, 0, 'li', 2), e.YNc(3, U, 5, 4, 'li', 3), e.qZA()()),
                2 & r &&
                  (e.Q6J('ngClass', l.customClasses),
                  e.xp6(2),
                  e.Q6J('ngIf', 0 == l.routes.length),
                  e.xp6(1),
                  e.Q6J('ngForOf', l.routes));
            },
            dependencies: [t.mk, t.sg, t.O5, n.yS]
          })),
          a
        );
      })();
      var S = c(2171);
      const y = [
        { path: 'api', component: u },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor(r) {
                (this.breadcrumb = r), (this.exampleTS = x.U8);
              }
              ngOnInit() {
                this.breadcrumb.breadcrumb$.next({
                  routes: [
                    { name: 'Inicio', route: '/custom' },
                    { name: 'nivel 2', id: '15151' },
                    { name: 'nivel 3', route: '/custom-routes' },
                    { name: 'P\xe1gina anterior', id: '525252525', route: '/custom' }
                  ],
                  defaultRoute: '/url-default'
                });
              }
            }
            return (
              (a.ɵfac = function (r) {
                return new (r || a)(e.Y36(p));
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-breadcrumb-examples']],
                decls: 18,
                vars: 2,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Migas de pan', 'id', 'customRoutes', 3, 'isNavCode'],
                  ['component', ''],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-outline-link', 'btn-sm', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html', 'code', '<o-breadcrumb></o-breadcrumb>'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript']
                ],
                template: function (r, l) {
                  1 & r &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1),
                    e._UZ(2, 'o-breadcrumb', 2),
                    e.TgZ(3, 'pre', 3),
                    e._uU(4, '      '),
                    e.TgZ(5, 'button', 4),
                    e._uU(6, 'Copiar'),
                    e.qZA(),
                    e._uU(7, '\n      '),
                    e._UZ(8, 'code', 5),
                    e._uU(9, '\n    '),
                    e.qZA(),
                    e.TgZ(10, 'pre', 6),
                    e._uU(11, '      '),
                    e.TgZ(12, 'button', 4),
                    e._uU(13, 'Copiar'),
                    e.qZA(),
                    e._uU(14, '\n      '),
                    e.TgZ(15, 'code', 7),
                    e._uU(16),
                    e.qZA(),
                    e._uU(17, '\n    '),
                    e.qZA()()()),
                    2 & r && (e.xp6(1), e.Q6J('isNavCode', !0), e.xp6(15), e.Oqu(l.exampleTS));
                },
                dependencies: [d.B, B, S.y, O.y]
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let k = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [n.Bz.forChild(y), n.Bz] })),
          a
        );
      })();
      var P = c(9384);
      let q = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, k, v.Z, d.B, h, Z.Z, P.T] })),
          a
        );
      })();
    }
  }
]);
