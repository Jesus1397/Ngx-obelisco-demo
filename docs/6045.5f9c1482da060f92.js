'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [6045],
  {
    4883: (U, Z, p) => {
      p.d(Z, { L: () => x });
      var t = p(4893),
        a = p(2313),
        f = p(9808);
      const e = ['checkbox'];
      function A(r, _) {
        if (1 & r) {
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
        if (2 & r) {
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
      function v(r, _) {
        if ((1 & r && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & r)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function O(r, _) {
        if ((1 & r && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & r)) {
          const n = _.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function P(r, _) {
        if (1 & r) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const T = t.oxw().$implicit,
                M = t.oxw(2);
              return t.KtG(M.onCheckboxChange(T, h));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & r) {
          const n = t.oxw().index,
            c = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', c.id, '-checkbox_', n, '')('name', '', c.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', c.id, '-checkbox_', n, '');
        }
      }
      function w(r, _) {
        if ((1 & r && t._UZ(0, 'div', 14), 2 & r)) {
          const n = t.oxw().$implicit,
            c = t.oxw().$implicit,
            h = t.oxw(2);
          t.Q6J('innerHTML', h.sanitizeHTML(c[n.key].data), t.oJD);
        }
      }
      function k(r, _) {
        if ((1 & r && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, w, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & r)) {
          const n = _.$implicit,
            c = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', c[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', c[n.key].data);
        }
      }
      function u(r, _) {
        if (
          (1 & r && (t.TgZ(0, 'tr'), t.YNc(1, P, 5, 6, 'td', 9), t.YNc(2, k, 3, 2, 'ng-container', 4), t.qZA()), 2 & r)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const C = function (r, _) {
        return { 'table-borderless': r, 'table-striped': _ };
      };
      function m(r, _) {
        if (
          (1 & r &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, A, 5, 6, 'th', 3),
            t.YNc(4, v, 2, 2, 'th', 3),
            t.YNc(5, O, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & r)
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
      const d = function (r) {
        return { 'responsive-scroll': r };
      };
      let x = (() => {
        class r {
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
                const T = this.dataSelected.findIndex((M) => M === n);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (r.ɵfac = function (n) {
            return new (n || r)(t.Y36(t.Qsj), t.Y36(a.H7));
          }),
          (r.ɵcmp = t.Xpm({
            type: r,
            selectors: [['o-table']],
            viewQuery: function (n, c) {
              if ((1 & n && t.Gf(e, 5), 2 & n)) {
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
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, m, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(c.customClasses),
                  t.Q6J('ngClass', t.VKq(4, d, c.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', c.isValidateComponent));
            },
            dependencies: [f.mk, f.sg, f.O5]
          })),
          r
        );
      })();
    },
    2089: (U, Z, p) => {
      p.d(Z, { Z: () => f });
      var t = p(9808),
        a = p(4893);
      let f = (() => {
        class e {}
        return (
          (e.ɵfac = function (v) {
            return new (v || e)();
          }),
          (e.ɵmod = a.oAB({ type: e })),
          (e.ɵinj = a.cJS({ imports: [t.ez] })),
          e
        );
      })();
    },
    4948: (U, Z, p) => {
      p.d(Z, { B: () => k });
      var t = p(9808),
        a = p(4893);
      function f(u, C) {
        if (1 & u) {
          const m = a.EpF();
          a.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            a.NdJ('click', function () {
              a.CHM(m);
              const x = a.oxw();
              return a.KtG((x.isWindowHTML = !0));
            }),
            a._uU(4, 'HTML'),
            a.qZA()(),
            a.TgZ(5, 'li', 12)(6, 'a', 14),
            a.NdJ('click', function () {
              a.CHM(m);
              const x = a.oxw();
              return a.KtG((x.isWindowHTML = !1));
            }),
            a._uU(7, 'TS'),
            a.qZA()()()();
        }
        if (2 & u) {
          const m = a.oxw();
          a.xp6(3), a.ekj('active', m.isWindowHTML), a.xp6(3), a.ekj('active', !m.isWindowHTML);
        }
      }
      function e(u, C) {
        1 & u && (a.ynx(0), a.Hsn(1), a.BQk());
      }
      function A(u, C) {
        1 & u && (a.ynx(0), a.Hsn(1, 1), a.BQk());
      }
      function v(u, C) {
        if ((1 & u && a.YNc(0, A, 2, 0, 'ng-container', 7), 2 & u)) {
          const m = a.oxw(),
            d = a.MAs(16);
          a.Q6J('ngIf', m.isWindowHTML)('ngIfElse', d);
        }
      }
      function O(u, C) {
        1 & u && a.Hsn(0, 2);
      }
      const P = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        w = ['[component]', '[component-html]', '[component-ts]'];
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
          (u.ɵfac = function (m) {
            return new (m || u)();
          }),
          (u.ɵcmp = a.Xpm({
            type: u,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [a.jDz],
            ngContentSelectors: w,
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
                  (a.F$t(P),
                  a.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  a._uU(3),
                  a.qZA(),
                  a.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  a.NdJ('click', function () {
                    return (d.isOpenCode = !d.isOpenCode);
                  }),
                  a.TgZ(8, 'span'),
                  a._uU(9),
                  a.qZA()()()()()(),
                  a.TgZ(10, 'div', 5),
                  a.YNc(11, f, 8, 4, 'nav', 6),
                  a.YNc(12, e, 2, 0, 'ng-container', 7),
                  a.YNc(13, v, 1, 2, 'ng-template', null, 8, a.W1O),
                  a.YNc(15, O, 1, 0, 'ng-template', null, 9, a.W1O),
                  a.qZA()()),
                2 & m)
              ) {
                const x = a.MAs(14);
                a.xp6(3),
                  a.Oqu(d.title),
                  a.xp6(4),
                  a.ekj('active', d.isOpenCode),
                  a.xp6(2),
                  a.Oqu(d.linkCode),
                  a.xp6(2),
                  a.Q6J('ngIf', d.isOpenCode && d.isNavCode),
                  a.xp6(1),
                  a.Q6J('ngIf', !d.isOpenCode)('ngIfElse', x);
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
    6045: (U, Z, p) => {
      p.r(Z), p.d(Z, { PaginationModule: () => q });
      var t = p(9808),
        a = p(2526),
        f = p(5570),
        e = p(4893),
        A = p(4883),
        v = p(6434);
      let O = (() => {
        class i {
          constructor() {
            (this.dataSourcePaginationProperties = [
              {
                name: { data: '@Input() <br/> totalPages: number', customClasses: '' },
                description: { data: 'Se utiliza para establecer el n\xfamero total de p\xe1ginas.', customClasses: '' }
              },
              {
                name: { data: '@Input() <br/> ariaLabel: string', customClasses: '' },
                description: {
                  data: 'Se utiliza para establecer el texto de la etiqueta aria-label.',
                  customClasses: ''
                }
              },
              {
                name: { data: '@Input() <br/> currentPage: number', customClasses: '' },
                description: {
                  data: 'Se utiliza para establecer la p\xe1gina actual. Por defecto es 1.',
                  customClasses: ''
                }
              },
              {
                name: { data: '@Input() <br/> isDiscriptiveType: boolean', customClasses: '' },
                description: { data: 'Se utiliza para ocultar los botones de numeraci\xf3n.', customClasses: '' }
              },
              {
                name: { data: '@Input() <br /> customClasses: string', customClasses: '' },
                description: {
                  data: 'Se utiliza para aplicar clases personalizadas al componente para personalizar su apariencia.',
                  customClasses: ''
                }
              }
            ]),
              (this.dataSourcePaginationMethods = [
                {
                  name: { data: '@Output() <br/> currentPageChange: EventEmitter&lt;number&gt;', customClasses: '' },
                  description: { data: 'Se utiliza para obtener la p\xe1gina actual.', customClasses: '' }
                }
              ]),
              (this.columnsPagination = f.L0);
          }
        }
        return (
          (i.ɵfac = function (o) {
            return new (o || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['app-pagination-api']],
            decls: 26,
            vars: 8,
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
                "import { OPaginationModule } from 'ngx-obelisco-example/pagination';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered']
            ],
            template: function (o, s) {
              1 & o &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Paginacion de Obelisco'),
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
                e._uU(13, 'OPagination'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-pagination'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6),
                e.qZA(),
                e.TgZ(22, 'div', 5)(23, 'h5'),
                e._uU(24, 'M\xe9todos'),
                e.qZA(),
                e._UZ(25, 'o-table', 6),
                e.qZA()()()),
                2 & o &&
                  (e.xp6(21),
                  e.Q6J('columns', s.columnsPagination)('dataSource', s.dataSourcePaginationProperties)(
                    'isStriped',
                    !0
                  )('isBordered', !0),
                  e.xp6(4),
                  e.Q6J('columns', s.columnsPagination)('dataSource', s.dataSourcePaginationMethods)('isStriped', !0)(
                    'isBordered',
                    !0
                  ));
            },
            dependencies: [A.L, v.y]
          })),
          i
        );
      })();
      var P = p(9394),
        w = p(4948);
      function k(i, l) {
        1 & i && (e.ynx(0), e.TgZ(1, 'span', 3), e._uU(2, '...'), e.qZA(), e.BQk());
      }
      function u(i, l) {
        1 & i && (e.TgZ(0, 'a', 4), e.Hsn(1), e.qZA());
      }
      const C = ['*'];
      let m = (() => {
          class i {}
          return (
            (i.ɵfac = function (o) {
              return new (o || i)();
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [['o-pagination-item']],
              inputs: { isActive: 'isActive', isDisabled: 'isDisabled', isNoEvent: 'isNoEvent' },
              ngContentSelectors: C,
              decls: 4,
              vars: 8,
              consts: [
                [1, 'page-item'],
                [4, 'ngIf', 'ngIfElse'],
                ['showLink', ''],
                [1, 'page-link'],
                ['href', '#', 1, 'page-link']
              ],
              template: function (o, s) {
                if (
                  (1 & o &&
                    (e.F$t(),
                    e.TgZ(0, 'li', 0),
                    e.YNc(1, k, 3, 0, 'ng-container', 1),
                    e.YNc(2, u, 2, 0, 'ng-template', null, 2, e.W1O),
                    e.qZA()),
                  2 & o)
                ) {
                  const g = e.MAs(3);
                  e.ekj('active', s.isActive)('no-events', s.isNoEvent)('disabled', s.isDisabled),
                    e.xp6(1),
                    e.Q6J('ngIf', s.isNoEvent)('ngIfElse', g);
                }
              },
              dependencies: [t.O5]
            })),
            i
          );
        })(),
        d = (() => {
          class i {}
          return (
            (i.ɵfac = function (o) {
              return new (o || i)();
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [['o-pagination-number']],
              inputs: { index: 'index', current: 'current' },
              decls: 2,
              vars: 2,
              consts: [[3, 'isActive']],
              template: function (o, s) {
                1 & o && (e.TgZ(0, 'o-pagination-item', 0), e._uU(1), e.qZA()),
                  2 & o && (e.Q6J('isActive', s.index === s.current), e.xp6(1), e.hij(' ', s.index + 1, '\n'));
              },
              dependencies: [m]
            })),
            i
          );
        })();
      function x(i, l) {
        if (1 & i) {
          const o = e.EpF();
          e.ynx(0),
            e.TgZ(1, 'o-pagination-number', 11),
            e.NdJ('click', function () {
              e.CHM(o);
              const g = e.oxw(2);
              return e.KtG(g.selectedPage(0));
            }),
            e.qZA(),
            e._UZ(2, 'o-pagination-item', 12),
            e.BQk();
        }
        if (2 & i) {
          const o = e.oxw(2);
          e.xp6(1), e.Q6J('index', 0)('current', o.currentPage), e.xp6(1), e.Q6J('isDisabled', !0)('isNoEvent', !0);
        }
      }
      function r(i, l) {
        if (1 & i) {
          const o = e.EpF();
          e.TgZ(0, 'o-pagination-number', 11),
            e.NdJ('click', function () {
              const b = e.CHM(o).$implicit,
                Q = e.oxw(2);
              return e.KtG(Q.selectedPage(b));
            }),
            e.qZA();
        }
        if (2 & i) {
          const o = l.$implicit,
            s = e.oxw(2);
          e.Q6J('index', o)('current', s.currentPage);
        }
      }
      function _(i, l) {
        if (1 & i) {
          const o = e.EpF();
          e.ynx(0),
            e._UZ(1, 'o-pagination-item', 12),
            e.TgZ(2, 'o-pagination-number', 11),
            e.NdJ('click', function () {
              e.CHM(o);
              const g = e.oxw(2);
              return e.KtG(g.selectedPage(g.lastIndex));
            }),
            e.qZA(),
            e.BQk();
        }
        if (2 & i) {
          const o = e.oxw(2);
          e.xp6(1),
            e.Q6J('isDisabled', !0)('isNoEvent', !0),
            e.xp6(1),
            e.Q6J('index', o.lastIndex)('current', o.currentPage);
        }
      }
      function n(i, l) {
        if (1 & i) {
          const o = e.EpF();
          e.ynx(0),
            e.TgZ(1, 'nav', 2)(2, 'ul', 3)(3, 'o-pagination-item', 4),
            e.NdJ('click', function () {
              e.CHM(o);
              const g = e.oxw();
              return e.KtG(g.onPrev());
            }),
            e._UZ(4, 'span', 5),
            e.TgZ(5, 'span', 6),
            e._uU(6, 'Anterior'),
            e.qZA()(),
            e.YNc(7, x, 3, 4, 'ng-container', 7),
            e.YNc(8, r, 1, 2, 'o-pagination-number', 8),
            e.YNc(9, _, 3, 4, 'ng-container', 7),
            e.TgZ(10, 'o-pagination-item', 4),
            e.NdJ('click', function () {
              e.CHM(o);
              const g = e.oxw();
              return e.KtG(g.onNext());
            }),
            e.TgZ(11, 'span', 9),
            e._uU(12, 'Siguiente'),
            e.qZA(),
            e._UZ(13, 'span', 10),
            e.qZA()()(),
            e.BQk();
        }
        if (2 & i) {
          const o = e.oxw();
          e.xp6(1),
            e.Q6J('ngClass', o.customClasses),
            e.uIk('aria-label', o.ariaLabel),
            e.xp6(2),
            e.ekj('hidden', o.getIsFirstPage),
            e.xp6(1),
            e.uIk('aria-hidden', !0),
            e.xp6(3),
            e.Q6J('ngIf', o.isShowBottomTrimmer),
            e.xp6(1),
            e.Q6J('ngForOf', o.pagesToShow),
            e.xp6(1),
            e.Q6J('ngIf', o.isShowTopTrimmer),
            e.xp6(1),
            e.ekj('hidden', o.getIsLastPage),
            e.xp6(3),
            e.uIk('aria-hidden', !0);
        }
      }
      function c(i, l) {
        if (1 & i) {
          const o = e.EpF();
          e.TgZ(0, 'div', 13)(1, 'div', 14)(2, 'div', 15),
            e.NdJ('click', function () {
              e.CHM(o);
              const g = e.oxw();
              return e.KtG(g.onPrev());
            }),
            e.TgZ(3, 'a', 16),
            e._UZ(4, 'span', 5),
            e.TgZ(5, 'span', 9),
            e._uU(6, 'Anterior'),
            e.qZA()()(),
            e.TgZ(7, 'div', 15),
            e.NdJ('click', function () {
              e.CHM(o);
              const g = e.oxw();
              return e.KtG(g.onNext());
            }),
            e.TgZ(8, 'a', 16)(9, 'span', 9),
            e._uU(10, 'Siguiente'),
            e.qZA(),
            e._UZ(11, 'span', 10),
            e.qZA()()()();
        }
        if (2 & i) {
          const o = e.oxw();
          e.Q6J('ngClass', o.customClasses),
            e.xp6(2),
            e.ekj('hidden', o.getIsFirstPage),
            e.xp6(2),
            e.uIk('aria-hidden', !0),
            e.xp6(3),
            e.ekj('hidden', o.getIsLastPage),
            e.xp6(4),
            e.uIk('aria-hidden', !0);
        }
      }
      let h = (() => {
        class i {
          constructor() {
            (this.currentPage = 1),
              (this.isDiscriptiveType = !1),
              (this.customClasses = ''),
              (this.currentPageChange = new e.vpe()),
              (this.pagesArr = []),
              (this.isShowTopTrimmer = !1),
              (this.isShowBottomTrimmer = !1),
              (this.pagesToShow = []),
              (this.isBlockEvent = !1);
          }
          get getIsFirstPage() {
            return 0 === this.currentPage;
          }
          get getIsLastPage() {
            return this.currentPage === this.pagesArr.length - 1;
          }
          ngOnInit() {
            (this.pagesArr = Array.from(Array(this.totalPages).keys())),
              (this.pagesToShow = this.pagesArr),
              (this.lastIndex = this.pagesArr.length - 1),
              (this.isShowTopTrimmer = !0),
              this.selectedPage(this.currentPage - 1);
          }
          selectedPage(o) {
            this.currentPage !== o &&
              ((this.currentPage = o),
              this.isBlockEvent || this.currentPageChange.emit(o + 1),
              this.pagesArr.length > 2 &&
                (this.currentPage < 4
                  ? ((this.lastIndex = this.pagesArr.length - 1),
                    (this.pagesToShow = [0, 1, 2, 3, 4]),
                    (this.isShowTopTrimmer = !0),
                    (this.isShowBottomTrimmer = !1))
                  : this.currentPage > this.lastIndex - 4
                  ? ((this.pagesToShow = this.pagesArr.slice(-5)),
                    (this.isShowTopTrimmer = !1),
                    (this.isShowBottomTrimmer = !0))
                  : ((this.pagesToShow = this.pagesArr.slice(this.currentPage - 1, this.currentPage + 2)),
                    (this.isShowBottomTrimmer = !0),
                    (this.isShowTopTrimmer = !0))));
          }
          onPrev() {
            (this.isBlockEvent = !0),
              this.currentPageChange.emit(this.currentPage),
              this.currentPage > 0 && this.selectedPage(this.currentPage - 1),
              (this.isBlockEvent = !1);
          }
          onNext() {
            (this.isBlockEvent = !0),
              this.currentPage < this.pagesArr.length - 1 && this.selectedPage(this.currentPage + 1),
              this.currentPageChange.emit(this.currentPage + 1),
              (this.isBlockEvent = !1);
          }
        }
        return (
          (i.ɵfac = function (o) {
            return new (o || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['o-pagination']],
            inputs: {
              totalPages: 'totalPages',
              ariaLabel: 'ariaLabel',
              currentPage: 'currentPage',
              isDiscriptiveType: 'isDiscriptiveType',
              customClasses: 'customClasses'
            },
            outputs: { currentPageChange: 'currentPageChange' },
            decls: 3,
            vars: 2,
            consts: [
              [4, 'ngIf', 'ngIfElse'],
              ['descriptive', ''],
              [3, 'ngClass'],
              [1, 'pagination'],
              [3, 'click'],
              [1, 'page-previous-icon'],
              [1, 'page-previous-text'],
              [4, 'ngIf'],
              [3, 'index', 'current', 'click', 4, 'ngFor', 'ngForOf'],
              [1, 'page-next-text'],
              [1, 'page-next-icon'],
              [3, 'index', 'current', 'click'],
              [3, 'isDisabled', 'isNoEvent'],
              [1, 'pagination', 3, 'ngClass'],
              [1, 'page-navigation'],
              [1, 'page-item', 3, 'click'],
              ['href', '#', 1, 'btn', 'page-link']
            ],
            template: function (o, s) {
              if (
                (1 & o && (e.YNc(0, n, 14, 11, 'ng-container', 0), e.YNc(1, c, 12, 7, 'ng-template', null, 1, e.W1O)),
                2 & o)
              ) {
                const g = e.MAs(2);
                e.Q6J('ngIf', !s.isDiscriptiveType)('ngIfElse', g);
              }
            },
            dependencies: [t.mk, t.sg, t.O5, d, m],
            styles: ['.hidden[_ngcontent-%COMP%]{opacity:0}']
          })),
          i
        );
      })();
      var T = p(2171);
      const S = [
        { path: 'api', component: O },
        {
          path: 'examples',
          component: (() => {
            class i {
              constructor() {
                (this.exampleStartHTML = P.T9),
                  (this.exampleMidHTML = P.LO),
                  (this.exampleEndHTML = P.gX),
                  (this.exampleWithoutNumbersHTML = P.tf),
                  (this.exampleTS = P.TC);
              }
              actualPage(o) {
                console.log(o);
              }
            }
            return (
              (i.ɵfac = function (o) {
                return new (o || i)();
              }),
              (i.ɵcmp = e.Xpm({
                type: i,
                selectors: [['app-pagination-examples']],
                decls: 73,
                vars: 21,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Inicial', 3, 'isNavCode'],
                  [
                    'component',
                    '',
                    'ariaLabel',
                    'Ejemplo de paginaci\xf3n inicial',
                    3,
                    'totalPages',
                    'currentPage',
                    'currentPageChange'
                  ],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Central', 3, 'isNavCode'],
                  [
                    'component',
                    '',
                    'ariaLabel',
                    'Ejemplo de paginaci\xf3n central',
                    3,
                    'totalPages',
                    'currentPage',
                    'currentPageChange'
                  ],
                  ['title', 'Final', 3, 'isNavCode'],
                  [
                    'component',
                    '',
                    'ariaLabel',
                    'Ejemplo de paginaci\xf3n final',
                    3,
                    'totalPages',
                    'currentPage',
                    'currentPageChange'
                  ],
                  ['title', 'Descriptivo', 3, 'isNavCode'],
                  [
                    'component',
                    '',
                    'ariaLabel',
                    'Ejemplo de paginaci\xf3n sin numerado',
                    3,
                    'totalPages',
                    'currentPage',
                    'isDiscriptiveType',
                    'currentPageChange'
                  ]
                ],
                template: function (o, s) {
                  1 & o &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'o-pagination', 2),
                    e.NdJ('currentPageChange', function (b) {
                      return s.actualPage(b);
                    }),
                    e.qZA(),
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
                    e.qZA(),
                    e.TgZ(11, 'pre', 6),
                    e._uU(12, '      '),
                    e.TgZ(13, 'button', 4),
                    e._uU(14, 'Copiar'),
                    e.qZA(),
                    e._uU(15, '\n      '),
                    e.TgZ(16, 'code', 7),
                    e._uU(17),
                    e.qZA(),
                    e._uU(18, '\n    '),
                    e.qZA()(),
                    e.TgZ(19, 'app-viewer', 8)(20, 'o-pagination', 9),
                    e.NdJ('currentPageChange', function (b) {
                      return s.actualPage(b);
                    }),
                    e.qZA(),
                    e.TgZ(21, 'pre', 3),
                    e._uU(22, '      '),
                    e.TgZ(23, 'button', 4),
                    e._uU(24, 'Copiar'),
                    e.qZA(),
                    e._uU(25, '\n      '),
                    e.TgZ(26, 'code', 5),
                    e._uU(27),
                    e.qZA(),
                    e._uU(28, '\n    '),
                    e.qZA(),
                    e.TgZ(29, 'pre', 6),
                    e._uU(30, '      '),
                    e.TgZ(31, 'button', 4),
                    e._uU(32, 'Copiar'),
                    e.qZA(),
                    e._uU(33, '\n      '),
                    e.TgZ(34, 'code', 7),
                    e._uU(35),
                    e.qZA(),
                    e._uU(36, '\n    '),
                    e.qZA()(),
                    e.TgZ(37, 'app-viewer', 10)(38, 'o-pagination', 11),
                    e.NdJ('currentPageChange', function (b) {
                      return s.actualPage(b);
                    }),
                    e.qZA(),
                    e.TgZ(39, 'pre', 3),
                    e._uU(40, '      '),
                    e.TgZ(41, 'button', 4),
                    e._uU(42, 'Copiar'),
                    e.qZA(),
                    e._uU(43, '\n      '),
                    e.TgZ(44, 'code', 5),
                    e._uU(45),
                    e.qZA(),
                    e._uU(46, '\n    '),
                    e.qZA(),
                    e.TgZ(47, 'pre', 6),
                    e._uU(48, '      '),
                    e.TgZ(49, 'button', 4),
                    e._uU(50, 'Copiar'),
                    e.qZA(),
                    e._uU(51, '\n      '),
                    e.TgZ(52, 'code', 7),
                    e._uU(53),
                    e.qZA(),
                    e._uU(54, '\n    '),
                    e.qZA()(),
                    e.TgZ(55, 'app-viewer', 12)(56, 'o-pagination', 13),
                    e.NdJ('currentPageChange', function (b) {
                      return s.actualPage(b);
                    }),
                    e.qZA(),
                    e.TgZ(57, 'pre', 3),
                    e._uU(58, '      '),
                    e.TgZ(59, 'button', 4),
                    e._uU(60, 'Copiar'),
                    e.qZA(),
                    e._uU(61, '\n      '),
                    e.TgZ(62, 'code', 5),
                    e._uU(63),
                    e.qZA(),
                    e._uU(64, '\n    '),
                    e.qZA(),
                    e.TgZ(65, 'pre', 6),
                    e._uU(66, '      '),
                    e.TgZ(67, 'button', 4),
                    e._uU(68, 'Copiar'),
                    e.qZA(),
                    e._uU(69, '\n      '),
                    e.TgZ(70, 'code', 7),
                    e._uU(71),
                    e.qZA(),
                    e._uU(72, '\n    '),
                    e.qZA()()()),
                    2 & o &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('totalPages', 10)('currentPage', 1),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleStartHTML, '\n      '),
                      e.xp6(8),
                      e.hij('\n        ', s.exampleTS, '\n      '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('totalPages', 10)('currentPage', 5),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleMidHTML, '\n      '),
                      e.xp6(8),
                      e.hij('\n        ', s.exampleTS, '\n      '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('totalPages', 10)('currentPage', 10),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleEndHTML, '\n      '),
                      e.xp6(8),
                      e.hij('\n        ', s.exampleTS, '\n      '),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('totalPages', 10)('currentPage', 5)('isDiscriptiveType', !0),
                      e.xp6(7),
                      e.hij('\n        ', s.exampleWithoutNumbersHTML, '\n      '),
                      e.xp6(8),
                      e.hij('\n        ', s.exampleTS, '\n      '));
                },
                dependencies: [w.B, h, T.y, v.y]
              })),
              i
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let E = (() => {
          class i {}
          return (
            (i.ɵfac = function (o) {
              return new (o || i)();
            }),
            (i.ɵmod = e.oAB({ type: i })),
            (i.ɵinj = e.cJS({ imports: [a.Bz.forChild(S), a.Bz] })),
            i
          );
        })(),
        I = (() => {
          class i {}
          return (
            (i.ɵfac = function (o) {
              return new (o || i)();
            }),
            (i.ɵmod = e.oAB({ type: i })),
            (i.ɵinj = e.cJS({ imports: [t.ez] })),
            i
          );
        })();
      var y = p(7538),
        N = p(2089),
        J = p(9384);
      let q = (() => {
        class i {}
        return (
          (i.ɵfac = function (o) {
            return new (o || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [t.ez, E, y.Z, N.Z, w.B, I, J.T] })),
          i
        );
      })();
    }
  }
]);
