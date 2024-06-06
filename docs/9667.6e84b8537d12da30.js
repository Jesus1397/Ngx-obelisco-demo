'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [9667],
  {
    4883: (k, T, i) => {
      i.d(T, { L: () => h });
      var t = i(4893),
        e = i(2313),
        f = i(9808);
      const g = ['checkbox'];
      function O(l, d) {
        if (1 & l) {
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
        if (2 & l) {
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
      function b(l, d) {
        if ((1 & l && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & l)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function v(l, d) {
        if ((1 & l && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & l)) {
          const n = d.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function Z(l, d) {
        if (1 & l) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (_) {
              t.CHM(n);
              const x = t.oxw().$implicit,
                A = t.oxw(2);
              return t.KtG(A.onCheckboxChange(x, _));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & l) {
          const n = t.oxw().index,
            s = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', s.id, '-checkbox_', n, '')('name', '', s.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', s.id, '-checkbox_', n, '');
        }
      }
      function M(l, d) {
        if ((1 & l && t._UZ(0, 'div', 14), 2 & l)) {
          const n = t.oxw().$implicit,
            s = t.oxw().$implicit,
            _ = t.oxw(2);
          t.Q6J('innerHTML', _.sanitizeHTML(s[n.key].data), t.oJD);
        }
      }
      function w(l, d) {
        if ((1 & l && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, M, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & l)) {
          const n = d.$implicit,
            s = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', s[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', s[n.key].data);
        }
      }
      function c(l, d) {
        if (
          (1 & l && (t.TgZ(0, 'tr'), t.YNc(1, Z, 5, 6, 'td', 9), t.YNc(2, w, 3, 2, 'ng-container', 4), t.qZA()), 2 & l)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const C = function (l, d) {
        return { 'table-borderless': l, 'table-striped': d };
      };
      function m(l, d) {
        if (
          (1 & l &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, O, 5, 6, 'th', 3),
            t.YNc(4, b, 2, 2, 'th', 3),
            t.YNc(5, v, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, c, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & l)
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
      const u = function (l) {
        return { 'responsive-scroll': l };
      };
      let h = (() => {
        class l {
          constructor(n, s) {
            (this.renderer = n),
              (this.sanitizer = s),
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
            const s = n.target;
            if (s) {
              const _ = s.checked;
              this.checkboxRef.toArray().forEach((x) => {
                x.nativeElement.checked = _;
              }),
                (this.dataSelected = _ ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, s) {
            if (s && s.target && 'boolean' == typeof s.target.checked) {
              if (s.target.checked) this.dataSelected.push(n);
              else {
                const x = this.dataSelected.findIndex((A) => A === n);
                -1 !== x && this.dataSelected.splice(x, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (l.ɵfac = function (n) {
            return new (n || l)(t.Y36(t.Qsj), t.Y36(e.H7));
          }),
          (l.ɵcmp = t.Xpm({
            type: l,
            selectors: [['o-table']],
            viewQuery: function (n, s) {
              if ((1 & n && t.Gf(g, 5), 2 & n)) {
                let _;
                t.iGM((_ = t.CRH())) && (s.checkboxRef = _);
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
            template: function (n, s) {
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, m, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(s.customClasses),
                  t.Q6J('ngClass', t.VKq(4, u, s.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', s.isValidateComponent));
            },
            dependencies: [f.mk, f.sg, f.O5]
          })),
          l
        );
      })();
    },
    2089: (k, T, i) => {
      i.d(T, { Z: () => f });
      var t = i(9808),
        e = i(4893);
      let f = (() => {
        class g {}
        return (
          (g.ɵfac = function (b) {
            return new (b || g)();
          }),
          (g.ɵmod = e.oAB({ type: g })),
          (g.ɵinj = e.cJS({ imports: [t.ez] })),
          g
        );
      })();
    },
    4948: (k, T, i) => {
      i.d(T, { B: () => w });
      var t = i(9808),
        e = i(4893);
      function f(c, C) {
        if (1 & c) {
          const m = e.EpF();
          e.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            e.NdJ('click', function () {
              e.CHM(m);
              const h = e.oxw();
              return e.KtG((h.isWindowHTML = !0));
            }),
            e._uU(4, 'HTML'),
            e.qZA()(),
            e.TgZ(5, 'li', 12)(6, 'a', 14),
            e.NdJ('click', function () {
              e.CHM(m);
              const h = e.oxw();
              return e.KtG((h.isWindowHTML = !1));
            }),
            e._uU(7, 'TS'),
            e.qZA()()()();
        }
        if (2 & c) {
          const m = e.oxw();
          e.xp6(3), e.ekj('active', m.isWindowHTML), e.xp6(3), e.ekj('active', !m.isWindowHTML);
        }
      }
      function g(c, C) {
        1 & c && (e.ynx(0), e.Hsn(1), e.BQk());
      }
      function O(c, C) {
        1 & c && (e.ynx(0), e.Hsn(1, 1), e.BQk());
      }
      function b(c, C) {
        if ((1 & c && e.YNc(0, O, 2, 0, 'ng-container', 7), 2 & c)) {
          const m = e.oxw(),
            u = e.MAs(16);
          e.Q6J('ngIf', m.isWindowHTML)('ngIfElse', u);
        }
      }
      function v(c, C) {
        1 & c && e.Hsn(0, 2);
      }
      const Z = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        M = ['[component]', '[component-html]', '[component-ts]'];
      let w = (() => {
        class c {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (c.ɵfac = function (m) {
            return new (m || c)();
          }),
          (c.ɵcmp = e.Xpm({
            type: c,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [e.jDz],
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
            template: function (m, u) {
              if (
                (1 & m &&
                  (e.F$t(Z),
                  e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  e._uU(3),
                  e.qZA(),
                  e.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  e.NdJ('click', function () {
                    return (u.isOpenCode = !u.isOpenCode);
                  }),
                  e.TgZ(8, 'span'),
                  e._uU(9),
                  e.qZA()()()()()(),
                  e.TgZ(10, 'div', 5),
                  e.YNc(11, f, 8, 4, 'nav', 6),
                  e.YNc(12, g, 2, 0, 'ng-container', 7),
                  e.YNc(13, b, 1, 2, 'ng-template', null, 8, e.W1O),
                  e.YNc(15, v, 1, 0, 'ng-template', null, 9, e.W1O),
                  e.qZA()()),
                2 & m)
              ) {
                const h = e.MAs(14);
                e.xp6(3),
                  e.Oqu(u.title),
                  e.xp6(4),
                  e.ekj('active', u.isOpenCode),
                  e.xp6(2),
                  e.Oqu(u.linkCode),
                  e.xp6(2),
                  e.Q6J('ngIf', u.isOpenCode && u.isNavCode),
                  e.xp6(1),
                  e.Q6J('ngIf', !u.isOpenCode)('ngIfElse', h);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          c
        );
      })();
    },
    9667: (k, T, i) => {
      i.r(T), i.d(T, { ModalModule: () => I });
      var t = i(9808),
        e = i(4893);
      let f = (() => {
        class o {}
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [t.ez] })),
          o
        );
      })();
      var g = i(7538),
        O = i(2089),
        b = i(4948),
        v = i(2526),
        Z = i(5570),
        M = i(9188),
        w = i(4883),
        c = i(6434);
      let C = (() => {
        class o {
          constructor() {
            (this.dataSource = M.it), (this.columns = Z.L0);
          }
        }
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['app-modal-api']],
            decls: 22,
            vars: 4,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OModalModule } from 'ngx-obelisco-example/modal';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered']
            ],
            template: function (a, p) {
              1 & a &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Modal de Obelisco'),
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
                e._uU(13, 'OModal'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-modal'),
                e.qZA()(),
                e.TgZ(18, 'div', 5)(19, 'h5'),
                e._uU(20, 'Propiedades'),
                e.qZA(),
                e._UZ(21, 'o-table', 6),
                e.qZA()()()),
                2 & a &&
                  (e.xp6(21),
                  e.Q6J('columns', p.columns)('dataSource', p.dataSource)('isStriped', !0)('isBordered', !0));
            },
            dependencies: [w.L, c.y]
          })),
          o
        );
      })();
      var m = i(1998);
      function u(o, r) {
        if ((1 & o && (e.TgZ(0, 'small'), e._uU(1), e.qZA()), 2 & o)) {
          const a = e.oxw(2);
          e.xp6(1), e.Oqu(a.subtitle);
        }
      }
      function h(o, r) {
        if ((1 & o && (e.TgZ(0, 'h4', 9), e._uU(1), e.qZA()), 2 & o)) {
          const a = e.oxw(2);
          e.xp6(1), e.Oqu(a.title);
        }
      }
      function l(o, r) {
        if ((1 & o && (e.TgZ(0, 'div', 10)(1, 'p'), e._uU(2), e.qZA()()), 2 & o)) {
          const a = e.oxw(2);
          e.xp6(2), e.Oqu(a.description);
        }
      }
      const d = function (o) {
        return { unbordered: o };
      };
      function n(o, r) {
        if (
          (1 & o &&
            (e.ynx(0),
            e.TgZ(1, 'div', 5),
            e.YNc(2, u, 2, 1, 'small', 3),
            e.YNc(3, h, 2, 1, 'h4', 6),
            e.qZA(),
            e.YNc(4, l, 3, 1, 'div', 7),
            e.TgZ(5, 'div', 8),
            e.Hsn(6),
            e.qZA(),
            e.BQk()),
          2 & o)
        ) {
          const a = e.oxw();
          e.xp6(1),
            e.Q6J('ngClass', e.VKq(4, d, !a.isBordered)),
            e.xp6(1),
            e.Q6J('ngIf', a.subtitle),
            e.xp6(1),
            e.Q6J('ngIf', a.title),
            e.xp6(1),
            e.Q6J('ngIf', a.description);
        }
      }
      function s(o, r) {
        if ((1 & o && e.GkF(0, 11), 2 & o)) {
          const a = e.oxw();
          e.Q6J('ngTemplateOutlet', a.oCustomContent.template);
        }
      }
      const _ = function (o, r) {
          return [o, r];
        },
        x = ['*'];
      let A = (() => {
        class o {
          constructor() {
            (this.isBordered = !1), (this.size = 'sm'), (this.isScrollable = !1), (this.customClasses = '');
          }
        }
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['o-modal']],
            contentQueries: function (a, p, B) {
              if ((1 & a && e.Suo(B, m.X, 7), 2 & a)) {
                let y;
                e.iGM((y = e.CRH())) && (p.oCustomContent = y.first);
              }
            },
            inputs: {
              id: 'id',
              dataTarget: 'dataTarget',
              title: 'title',
              subtitle: 'subtitle',
              description: 'description',
              isBordered: 'isBordered',
              size: 'size',
              isScrollable: 'isScrollable',
              customClasses: 'customClasses'
            },
            ngContentSelectors: x,
            decls: 5,
            vars: 9,
            consts: [
              ['tabindex', '-1', 'role', 'dialog', 1, 'modal', 'fade', 3, 'id'],
              ['role', 'document', 1, 'modal-dialog', 'modal-dialog-centered', 3, 'ngClass'],
              [1, 'modal-content', 3, 'ngClass'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'modal-header', 3, 'ngClass'],
              ['class', 'modal-title', 4, 'ngIf'],
              ['class', 'modal-body', 4, 'ngIf'],
              [1, 'modal-footer'],
              [1, 'modal-title'],
              [1, 'modal-body'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (a, p) {
              1 & a &&
                (e.F$t(),
                e.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'div', 2),
                e.YNc(3, n, 7, 6, 'ng-container', 3),
                e.YNc(4, s, 1, 1, 'ng-container', 4),
                e.qZA()()()),
                2 & a &&
                  (e.Q6J('id', 'exampleModal'),
                  e.uIk('id', p.dataTarget),
                  e.xp6(1),
                  e.Q6J(
                    'ngClass',
                    e.WLB(
                      6,
                      _,
                      'sm' === p.size ? 'modal-sm' : 'lg' === p.size ? 'modal-lg' : 'xl' === p.size ? 'modal-xl' : '',
                      p.isScrollable ? 'modal-dialog-scrollable' : ''
                    )
                  ),
                  e.xp6(1),
                  e.Q6J('ngClass', p.customClasses),
                  e.xp6(1),
                  e.Q6J('ngIf', !p.oCustomContent),
                  e.xp6(1),
                  e.Q6J('ngIf', p.oCustomContent));
            },
            dependencies: [t.mk, t.O5, t.tP],
            styles: ['.modal-footer>*{margin:0}']
          })),
          o
        );
      })();
      var U = i(2171),
        S = i(2200);
      const E = [
        { path: 'api', component: C },
        {
          path: 'examples',
          component: (() => {
            class o {
              constructor() {
                (this.exampleModalConfirmationHTML = M.a3),
                  (this.exampleModalDangerHTML = M.O2),
                  (this.exampleModalRecognitionHTML = M.Zr);
              }
            }
            return (
              (o.ɵfac = function (a) {
                return new (a || o)();
              }),
              (o.ɵcmp = e.Xpm({
                type: o,
                selectors: [['app-modal-examples']],
                decls: 39,
                vars: 6,
                consts: [
                  [1, 'section-example'],
                  ['title', 'De confirmaci\xf3n'],
                  ['component', ''],
                  ['text', 'Ver modal', 'dataToggle', 'modal', 'dataTarget', 'exampleModal'],
                  [
                    'dataTarget',
                    'exampleModal',
                    'title',
                    '\xa1Importante!',
                    'description',
                    'Antes de realizar la ficha de salud, ten\xe9 en cuenta haber realizado los pasos previos correspondientes.',
                    3,
                    'isBordered'
                  ],
                  ['text', 'Volver atr\xe1s', 'type', 'link', 'dataDismiss', 'modal'],
                  ['text', 'Continuar'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html', 3, 'code'],
                  ['title', 'De peligro'],
                  ['text', 'Ver modal', 'dataToggle', 'modal', 'dataTarget', 'dangerModal'],
                  [
                    'dataTarget',
                    'dangerModal',
                    'title',
                    'Eliminar documento',
                    'description',
                    'El documento que seleccionaste ser\xe1 eliminado.',
                    3,
                    'isBordered'
                  ],
                  ['text', 'Cancelar', 'type', 'secondary', 'dataDismiss', 'modal', 3, 'isOutline'],
                  ['text', 'Eliminar', 'type', 'danger'],
                  ['title', 'De reconocimiento'],
                  ['text', 'Ver modal', 'dataToggle', 'modal', 'dataTarget', 'recognitionModal'],
                  [
                    'dataTarget',
                    'recognitionModal',
                    'subtitle',
                    'CARGA EXITOSA',
                    'title',
                    'Los archivos se cargaron correctamente'
                  ],
                  ['text', 'Aceptar', 'dataDismiss', 'modal']
                ],
                template: function (a, p) {
                  1 & a &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    e._UZ(3, 'o-button', 3),
                    e.TgZ(4, 'o-modal', 4),
                    e._UZ(5, 'o-button', 5)(6, 'o-button', 6),
                    e.qZA()(),
                    e.TgZ(7, 'pre', 7),
                    e._uU(8, '      '),
                    e.TgZ(9, 'button', 8),
                    e._uU(10, 'Copiar'),
                    e.qZA(),
                    e._uU(11, '\n      '),
                    e._UZ(12, 'code', 9),
                    e._uU(13, '\n    '),
                    e.qZA()(),
                    e.TgZ(14, 'app-viewer', 10)(15, 'div', 2),
                    e._UZ(16, 'o-button', 11),
                    e.TgZ(17, 'o-modal', 12),
                    e._UZ(18, 'o-button', 13)(19, 'o-button', 14),
                    e.qZA()(),
                    e.TgZ(20, 'pre', 7),
                    e._uU(21, '      '),
                    e.TgZ(22, 'button', 8),
                    e._uU(23, 'Copiar'),
                    e.qZA(),
                    e._uU(24, '\n      '),
                    e._UZ(25, 'code', 9),
                    e._uU(26, '\n    '),
                    e.qZA()(),
                    e.TgZ(27, 'app-viewer', 15)(28, 'div', 2),
                    e._UZ(29, 'o-button', 16),
                    e.TgZ(30, 'o-modal', 17),
                    e._UZ(31, 'o-button', 18),
                    e.qZA()(),
                    e.TgZ(32, 'pre', 7),
                    e._uU(33, '      '),
                    e.TgZ(34, 'button', 8),
                    e._uU(35, 'Copiar'),
                    e.qZA(),
                    e._uU(36, '\n      '),
                    e._UZ(37, 'code', 9),
                    e._uU(38, '\n    '),
                    e.qZA()()()),
                    2 & a &&
                      (e.xp6(4),
                      e.Q6J('isBordered', !0),
                      e.xp6(8),
                      e.s9C('code', p.exampleModalConfirmationHTML),
                      e.xp6(5),
                      e.Q6J('isBordered', !0),
                      e.xp6(1),
                      e.Q6J('isOutline', !0),
                      e.xp6(7),
                      e.s9C('code', p.exampleModalDangerHTML),
                      e.xp6(12),
                      e.s9C('code', p.exampleModalRecognitionHTML));
                },
                dependencies: [b.B, A, U.y, c.y, S.g]
              })),
              o
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let J = (() => {
        class o {}
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [v.Bz.forChild(E), v.Bz] })),
          o
        );
      })();
      var Q = i(9384),
        P = i(3717);
      let I = (() => {
        class o {}
        return (
          (o.ɵfac = function (a) {
            return new (a || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [t.ez, J, g.Z, O.Z, b.B, f, Q.T, P.J] })),
          o
        );
      })();
    }
  }
]);
