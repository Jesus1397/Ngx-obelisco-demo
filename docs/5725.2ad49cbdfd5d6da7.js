'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [5725],
  {
    4883: (M, A, c) => {
      c.d(A, { L: () => x });
      var t = c(4893),
        o = c(2313),
        Z = c(9808);
      const C = ['checkbox'];
      function b(a, m) {
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
      function O(a, m) {
        if ((1 & a && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & a)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function v(a, m) {
        if ((1 & a && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & a)) {
          const n = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function d(a, m) {
        if (1 & a) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const T = t.oxw().$implicit,
                w = t.oxw(2);
              return t.KtG(w.onCheckboxChange(T, h));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & a) {
          const n = t.oxw().index,
            r = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', r.id, '-checkbox_', n, '')('name', '', r.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', r.id, '-checkbox_', n, '');
        }
      }
      function e(a, m) {
        if ((1 & a && t._UZ(0, 'div', 14), 2 & a)) {
          const n = t.oxw().$implicit,
            r = t.oxw().$implicit,
            h = t.oxw(2);
          t.Q6J('innerHTML', h.sanitizeHTML(r[n.key].data), t.oJD);
        }
      }
      function U(a, m) {
        if ((1 & a && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, e, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & a)) {
          const n = m.$implicit,
            r = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', r[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', r[n.key].data);
        }
      }
      function u(a, m) {
        if (
          (1 & a && (t.TgZ(0, 'tr'), t.YNc(1, d, 5, 6, 'td', 9), t.YNc(2, U, 3, 2, 'ng-container', 4), t.qZA()), 2 & a)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const f = function (a, m) {
        return { 'table-borderless': a, 'table-striped': m };
      };
      function _(a, m) {
        if (
          (1 & a &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, b, 5, 6, 'th', 3),
            t.YNc(4, O, 2, 2, 'th', 3),
            t.YNc(5, v, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, u, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & a)
        ) {
          const n = t.oxw();
          t.Q6J('ngClass', t.WLB(5, f, !n.isBordered, n.isStriped)),
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
      const g = function (a) {
        return { 'responsive-scroll': a };
      };
      let x = (() => {
        class a {
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
              const h = r.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, r) {
            if (r && r.target && 'boolean' == typeof r.target.checked) {
              if (r.target.checked) this.dataSelected.push(n);
              else {
                const T = this.dataSelected.findIndex((w) => w === n);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (a.ɵfac = function (n) {
            return new (n || a)(t.Y36(t.Qsj), t.Y36(o.H7));
          }),
          (a.ɵcmp = t.Xpm({
            type: a,
            selectors: [['o-table']],
            viewQuery: function (n, r) {
              if ((1 & n && t.Gf(C, 5), 2 & n)) {
                let h;
                t.iGM((h = t.CRH())) && (r.checkboxRef = h);
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
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, _, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(r.customClasses),
                  t.Q6J('ngClass', t.VKq(4, g, r.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', r.isValidateComponent));
            },
            dependencies: [Z.mk, Z.sg, Z.O5]
          })),
          a
        );
      })();
    },
    2089: (M, A, c) => {
      c.d(A, { Z: () => Z });
      var t = c(9808),
        o = c(4893);
      let Z = (() => {
        class C {}
        return (
          (C.ɵfac = function (O) {
            return new (O || C)();
          }),
          (C.ɵmod = o.oAB({ type: C })),
          (C.ɵinj = o.cJS({ imports: [t.ez] })),
          C
        );
      })();
    },
    4948: (M, A, c) => {
      c.d(A, { B: () => U });
      var t = c(9808),
        o = c(4893);
      function Z(u, f) {
        if (1 & u) {
          const _ = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(_);
              const x = o.oxw();
              return o.KtG((x.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(_);
              const x = o.oxw();
              return o.KtG((x.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & u) {
          const _ = o.oxw();
          o.xp6(3), o.ekj('active', _.isWindowHTML), o.xp6(3), o.ekj('active', !_.isWindowHTML);
        }
      }
      function C(u, f) {
        1 & u && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function b(u, f) {
        1 & u && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function O(u, f) {
        if ((1 & u && o.YNc(0, b, 2, 0, 'ng-container', 7), 2 & u)) {
          const _ = o.oxw(),
            g = o.MAs(16);
          o.Q6J('ngIf', _.isWindowHTML)('ngIfElse', g);
        }
      }
      function v(u, f) {
        1 & u && o.Hsn(0, 2);
      }
      const d = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        e = ['[component]', '[component-html]', '[component-ts]'];
      let U = (() => {
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
            ngContentSelectors: e,
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
                  (o.F$t(d),
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
                  o.YNc(11, Z, 8, 4, 'nav', 6),
                  o.YNc(12, C, 2, 0, 'ng-container', 7),
                  o.YNc(13, O, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, v, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & _)
              ) {
                const x = o.MAs(14);
                o.xp6(3),
                  o.Oqu(g.title),
                  o.xp6(4),
                  o.ekj('active', g.isOpenCode),
                  o.xp6(2),
                  o.Oqu(g.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !g.isOpenCode)('ngIfElse', x);
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
    5725: (M, A, c) => {
      c.r(A), c.d(A, { AlertModule: () => F });
      var t = c(9808),
        o = c(7538),
        Z = c(2089),
        C = c(5654),
        b = c(4948),
        O = c(9384),
        v = c(2526),
        d = c(1968),
        e = c(4893),
        U = c(2171),
        u = c(6434),
        f = c(1998);
      function _(i, p) {
        if ((1 & i && (e.TgZ(0, 'ul'), e.GkF(1, 7), e.qZA()), 2 & i)) {
          const s = e.oxw(3),
            l = e.MAs(5);
          e.Tol(s.checkUrls() ? null : ''), e.ekj('list-links', s.checkUrls()), e.xp6(1), e.Q6J('ngTemplateOutlet', l);
        }
      }
      function g(i, p) {
        if ((1 & i && (e.ynx(0), e.YNc(1, _, 2, 5, 'ul', 6), e.BQk()), 2 & i)) {
          e.oxw();
          const s = e.MAs(5),
            l = e.oxw();
          e.xp6(1), e.Q6J('ngIf', null == l.listContent ? null : l.listContent.isUnorderedList)('ngIfElse', s);
        }
      }
      function x(i, p) {
        if ((1 & i && (e.TgZ(0, 'ol'), e.GkF(1, 7), e.qZA()), 2 & i)) {
          const s = e.oxw(2),
            l = e.MAs(5);
          e.Tol(s.checkUrls() ? null : ''), e.ekj('list-links', s.checkUrls()), e.xp6(1), e.Q6J('ngTemplateOutlet', l);
        }
      }
      function a(i, p) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, 'p'),
            e.Hsn(2),
            e.qZA(),
            e.YNc(3, g, 2, 2, 'ng-container', 1),
            e.YNc(4, x, 2, 5, 'ng-template', null, 5, e.W1O),
            e.BQk()),
          2 & i)
        ) {
          const s = e.oxw();
          e.xp6(3),
            e.Q6J(
              'ngIf',
              0 != (null == s.listContent || null == s.listContent.listItems ? null : s.listContent.listItems.length)
            );
        }
      }
      function m(i, p) {
        if ((1 & i && e.GkF(0, 7), 2 & i)) {
          const s = e.oxw();
          e.Q6J('ngTemplateOutlet', s.oCustomContent.template);
        }
      }
      function n(i, p) {
        1 & i && (e.TgZ(0, 'button', 8)(1, 'span', 9), e._uU(2, 'close'), e.qZA()());
      }
      function r(i, p) {
        if ((1 & i && (e.ynx(0), e.TgZ(1, 'a', 13), e._uU(2), e.qZA(), e.BQk()), 2 & i)) {
          const s = e.oxw().$implicit;
          e.xp6(1), e.Q6J('href', s.url, e.LSH), e.xp6(1), e.Oqu(s.text);
        }
      }
      function h(i, p) {
        if ((1 & i && e._uU(0), 2 & i)) {
          const s = e.oxw().$implicit;
          e.hij(' ', s.text, ' ');
        }
      }
      function T(i, p) {
        if (
          (1 & i &&
            (e.TgZ(0, 'li'),
            e.YNc(1, r, 3, 2, 'ng-container', 11),
            e.YNc(2, h, 1, 1, 'ng-template', null, 12, e.W1O),
            e.qZA()),
          2 & i)
        ) {
          const s = p.$implicit,
            l = e.MAs(3);
          e.xp6(1), e.Q6J('ngIf', s.url)('ngIfElse', l);
        }
      }
      function w(i, p) {
        if ((1 & i && e.YNc(0, T, 4, 2, 'li', 10), 2 & i)) {
          const s = e.oxw();
          e.Q6J('ngForOf', null == s.listContent ? null : s.listContent.listItems);
        }
      }
      const y = ['*'];
      let q = (() => {
        class i {
          constructor() {
            (this.type = 'info'),
              (this.isDismissible = !1),
              (this.listContent = { isUnorderedList: !1, listItems: [] }),
              (this.customClasses = '');
          }
          checkUrls() {
            return !!this.listContent && this.listContent.listItems.every((s) => !!s.url);
          }
        }
        return (
          (i.ɵfac = function (s) {
            return new (s || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['o-alert']],
            contentQueries: function (s, l, L) {
              if ((1 & s && e.Suo(L, f.X, 7), 2 & s)) {
                let k;
                e.iGM((k = e.CRH())) && (l.oCustomContent = k.first);
              }
            },
            inputs: {
              type: 'type',
              isDismissible: 'isDismissible',
              listContent: 'listContent',
              customClasses: 'customClasses'
            },
            ngContentSelectors: y,
            decls: 6,
            vars: 4,
            consts: [
              ['role', 'alert', 1, 'alert', 3, 'ngClass'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              ['type', 'button', 'class', 'close', 'data-dismiss', 'alert', 'aria-label', 'Cerrar', 4, 'ngIf'],
              ['liItems', ''],
              ['orderedList', ''],
              [3, 'list-links', 'class', 4, 'ngIf', 'ngIfElse'],
              [3, 'ngTemplateOutlet'],
              ['type', 'button', 'data-dismiss', 'alert', 'aria-label', 'Cerrar', 1, 'close'],
              [1, 'material-icons-round'],
              [4, 'ngFor', 'ngForOf'],
              [4, 'ngIf', 'ngIfElse'],
              ['itemList', ''],
              [3, 'href']
            ],
            template: function (s, l) {
              1 & s &&
                (e.F$t(),
                e.TgZ(0, 'div', 0),
                e.YNc(1, a, 6, 1, 'ng-container', 1),
                e.YNc(2, m, 1, 1, 'ng-container', 2),
                e.YNc(3, n, 3, 0, 'button', 3),
                e.YNc(4, w, 1, 1, 'ng-template', null, 4, e.W1O),
                e.qZA()),
                2 & s &&
                  (e.Q6J(
                    'ngClass',
                    (l.type && 'alert-' + l.type) +
                      (l.isDismissible ? ' alert-dismissible show fade' : '') +
                      (l.customClasses ? ' ' + l.customClasses : '')
                  ),
                  e.xp6(1),
                  e.Q6J('ngIf', !l.oCustomContent),
                  e.xp6(1),
                  e.Q6J('ngIf', l.oCustomContent),
                  e.xp6(1),
                  e.Q6J('ngIf', l.isDismissible));
            },
            dependencies: [t.mk, t.sg, t.O5, t.tP],
            styles: ['.alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{min-height:24px}']
          })),
          i
        );
      })();
      const E = function () {
        return ['/'];
      };
      let I = (() => {
        class i {
          constructor() {
            (this.exampleColors = d.fB),
              (this.exampleDismissible = d.b4),
              (this.exampleHighlight = d.rF),
              (this.exampleHighlightLink = d.Cc),
              (this.exampleListsHtml = d.ni),
              (this.exampleListsTs = d.fG),
              (this.listLinkItems = d.FJ),
              (this.listItems = d.Jy);
          }
        }
        return (
          (i.ɵfac = function (s) {
            return new (s || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['app-alert-examples']],
            decls: 88,
            vars: 12,
            consts: [
              [1, 'section-example'],
              ['title', 'Simple'],
              ['component', '', 1, 'alert-container'],
              ['type', 'primary'],
              ['type', 'success'],
              ['type', 'danger'],
              ['appClipboard', '', 'component-html', '', 1, 'code'],
              [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
              ['appPrism', '', 'language', 'html'],
              ['title', 'Con cierre'],
              [3, 'isDismissible'],
              ['title', 'Con destacado'],
              ['title', 'Con hiperv\xednculo'],
              [3, 'routerLink'],
              ['title', 'Listas', 3, 'isNavCode'],
              ['type', 'danger', 3, 'listContent'],
              [3, 'listContent'],
              ['appClipboard', '', 'component-ts', '', 1, 'code'],
              ['appPrism', '']
            ],
            template: function (s, l) {
              1 & s &&
                (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'o-alert'),
                e._uU(4, 'Esta es la descripci\xf3n de una alerta de informaci\xf3n.'),
                e.qZA(),
                e.TgZ(5, 'o-alert', 3),
                e._uU(6, 'Esta es la descripci\xf3n de una alerta de advertencia.'),
                e.qZA(),
                e.TgZ(7, 'o-alert', 4),
                e._uU(8, 'Esta es la descripci\xf3n de una alerta de \xe9xito.'),
                e.qZA(),
                e.TgZ(9, 'o-alert', 5),
                e._uU(10, 'Esta es la descripci\xf3n de una alerta de error.'),
                e.qZA()(),
                e.TgZ(11, 'pre', 6),
                e._uU(12, '        '),
                e.TgZ(13, 'button', 7),
                e._uU(14, 'Copiar'),
                e.qZA(),
                e._uU(15, '\n        '),
                e.TgZ(16, 'code', 8),
                e._uU(17),
                e.qZA(),
                e._uU(18, '\n      '),
                e.qZA()(),
                e.TgZ(19, 'app-viewer', 9)(20, 'div', 2)(21, 'o-alert', 10),
                e._uU(22, 'Esta es la descripci\xf3n de una alerta de informaci\xf3n.'),
                e.qZA()(),
                e.TgZ(23, 'pre', 6),
                e._uU(24, '        '),
                e.TgZ(25, 'button', 7),
                e._uU(26, 'Copiar'),
                e.qZA(),
                e._uU(27, '\n        '),
                e.TgZ(28, 'code', 8),
                e._uU(29),
                e.qZA(),
                e._uU(30, '\n      '),
                e.qZA()(),
                e.TgZ(31, 'app-viewer', 11)(32, 'div', 2)(33, 'o-alert')(34, 'strong'),
                e._uU(35, 'Este es un destacado de una alerta de informaci\xf3n.'),
                e.qZA(),
                e._uU(
                  36,
                  ' Esta es la descripci\xf3n de una alerta de informaci\xf3n que continua al texto destacado. '
                ),
                e.qZA()(),
                e.TgZ(37, 'pre', 6),
                e._uU(38, '        '),
                e.TgZ(39, 'button', 7),
                e._uU(40, 'Copiar'),
                e.qZA(),
                e._uU(41, '\n        '),
                e.TgZ(42, 'code', 8),
                e._uU(43),
                e.qZA(),
                e._uU(44, '\n      '),
                e.qZA()(),
                e.TgZ(45, 'app-viewer', 12)(46, 'div', 2)(47, 'o-alert')(48, 'strong'),
                e._uU(49, 'Este es un destacado de una alerta de informaci\xf3n.'),
                e.qZA(),
                e._uU(
                  50,
                  ' Esta es la descripci\xf3n de una alerta de informaci\xf3n que continua al texto destacado, incluso con '
                ),
                e.TgZ(51, 'a', 13),
                e._uU(52, 'con enlace'),
                e.qZA(),
                e._uU(53, '. '),
                e.qZA()(),
                e.TgZ(54, 'pre', 6),
                e._uU(55, '        '),
                e.TgZ(56, 'button', 7),
                e._uU(57, 'Copiar'),
                e.qZA(),
                e._uU(58, '\n        '),
                e.TgZ(59, 'code', 8),
                e._uU(60),
                e.qZA(),
                e._uU(61, '\n      '),
                e.qZA()(),
                e.TgZ(62, 'app-viewer', 14)(63, 'div', 2)(64, 'o-alert', 15)(65, 'strong'),
                e._uU(66, 'Este es un destacado de una alerta de error.'),
                e.qZA(),
                e._uU(67, ' Esta es la descripci\xf3n de una alerta de error que continua al texto destacado. '),
                e.qZA(),
                e.TgZ(68, 'o-alert', 16)(69, 'strong'),
                e._uU(70, 'Este es un destacado de una alerta de informaci\xf3n.'),
                e.qZA(),
                e._uU(
                  71,
                  ' Esta es la descripci\xf3n de una alerta de informaci\xf3n que continua al texto destacado. '
                ),
                e.qZA()(),
                e.TgZ(72, 'pre', 6),
                e._uU(73, '      '),
                e.TgZ(74, 'button', 7),
                e._uU(75, 'Copiar'),
                e.qZA(),
                e._uU(76, '\n      '),
                e.TgZ(77, 'code', 8),
                e._uU(78),
                e.qZA(),
                e._uU(79, '\n    '),
                e.qZA(),
                e.TgZ(80, 'pre', 17),
                e._uU(81, '      '),
                e.TgZ(82, 'button', 7),
                e._uU(83, 'Copiar'),
                e.qZA(),
                e._uU(84, '\n      '),
                e.TgZ(85, 'code', 18),
                e._uU(86),
                e.qZA(),
                e._uU(87, '\n    '),
                e.qZA()()()),
                2 & s &&
                  (e.xp6(17),
                  e.hij('\n          ', l.exampleColors, '\n        '),
                  e.xp6(4),
                  e.Q6J('isDismissible', !0),
                  e.xp6(8),
                  e.hij('\n          ', l.exampleDismissible, '\n        '),
                  e.xp6(14),
                  e.hij('\n          ', l.exampleHighlight, '\n        '),
                  e.xp6(8),
                  e.Q6J('routerLink', e.DdM(11, E)),
                  e.xp6(9),
                  e.hij('\n          ', l.exampleHighlightLink, '\n        '),
                  e.xp6(2),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('listContent', l.listLinkItems),
                  e.xp6(4),
                  e.Q6J('listContent', l.listItems),
                  e.xp6(10),
                  e.hij('\n        ', l.exampleListsHtml, '\n      '),
                  e.xp6(8),
                  e.hij('\n        ', l.exampleListsTs, '\n      '));
            },
            dependencies: [v.yS, b.B, U.y, u.y, q],
            styles: ['.alert-container[_ngcontent-%COMP%]   o-alert[_ngcontent-%COMP%]{margin-bottom:1rem}']
          })),
          i
        );
      })();
      var P = c(5570),
        Q = c(4883);
      const S = [
        {
          path: 'api',
          component: (() => {
            class i {
              constructor() {
                (this.dataSource = d.ts),
                  (this.columns = P.L0),
                  (this.types = d.CH),
                  (this.listInterface = d.H0),
                  (this.listInterfaceData = d.b3);
              }
            }
            return (
              (i.ɵfac = function (s) {
                return new (s || i)();
              }),
              (i.ɵcmp = e.Xpm({
                type: i,
                selectors: [['app-alert-api']],
                decls: 55,
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
                    "import { OAlertModule } from 'ngx-obelisco-example/alert';"
                  ],
                  [1, 'section-selector'],
                  [1, 'section-properties'],
                  [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
                  [1, 'section-type'],
                  [1, 'section-interface'],
                  ['appPrism', '']
                ],
                template: function (s, l) {
                  1 & s &&
                    (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                    e._uU(3, 'Referencia de API para el componente Alerta de Obelisco'),
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
                    e._uU(13, 'OAlert'),
                    e.qZA(),
                    e.TgZ(14, 'p'),
                    e._uU(15, 'Selector: '),
                    e.TgZ(16, 'strong'),
                    e._uU(17, 'o-alert'),
                    e.qZA()(),
                    e.TgZ(18, 'div', 5)(19, 'h5'),
                    e._uU(20, 'Propiedades'),
                    e.qZA(),
                    e._UZ(21, 'o-table', 6),
                    e.qZA()(),
                    e._UZ(22, 'br'),
                    e.TgZ(23, 'div', 7)(24, 'h4'),
                    e._uU(25, 'AlertTypes'),
                    e.qZA(),
                    e.TgZ(26, 'p'),
                    e._uU(27, 'Permite establecer los valores de la propiedad '),
                    e.TgZ(28, 'strong'),
                    e._uU(29, 'type'),
                    e.qZA(),
                    e._uU(30, '.'),
                    e.qZA(),
                    e.TgZ(31, 'div', 8)(32, 'pre', 2),
                    e._uU(33, '        '),
                    e.TgZ(34, 'code', 9),
                    e._uU(35),
                    e.qZA(),
                    e._uU(36, '\n      '),
                    e.qZA()()(),
                    e.TgZ(37, 'div', 7)(38, 'h4'),
                    e._uU(39, 'AlertList'),
                    e.qZA(),
                    e.TgZ(40, 'p'),
                    e._uU(41, 'Permite establecer los valores de la propiedad '),
                    e.TgZ(42, 'strong'),
                    e._uU(43, 'listContent'),
                    e.qZA(),
                    e._uU(44, '.'),
                    e.qZA(),
                    e.TgZ(45, 'div', 8)(46, 'pre', 2),
                    e._uU(47, '        '),
                    e.TgZ(48, 'code', 9),
                    e._uU(49),
                    e.qZA(),
                    e._uU(50, '\n      '),
                    e.qZA()(),
                    e.TgZ(51, 'div', 5)(52, 'h5'),
                    e._uU(53, 'Propiedades'),
                    e.qZA(),
                    e._UZ(54, 'o-table', 6),
                    e.qZA()()()),
                    2 & s &&
                      (e.xp6(21),
                      e.Q6J('columns', l.columns)('dataSource', l.dataSource)('isStriped', !0)('isBordered', !0),
                      e.xp6(14),
                      e.Oqu(l.types),
                      e.xp6(14),
                      e.Oqu(l.listInterface),
                      e.xp6(5),
                      e.Q6J('columns', l.columns)('dataSource', l.listInterfaceData)('isStriped', !0)(
                        'isBordered',
                        !0
                      ));
                },
                dependencies: [Q.L, u.y]
              })),
              i
            );
          })()
        },
        { path: 'examples', component: I },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let J = (() => {
          class i {}
          return (
            (i.ɵfac = function (s) {
              return new (s || i)();
            }),
            (i.ɵmod = e.oAB({ type: i })),
            (i.ɵinj = e.cJS({ imports: [v.Bz.forChild(S), v.Bz] })),
            i
          );
        })(),
        F = (() => {
          class i {}
          return (
            (i.ɵfac = function (s) {
              return new (s || i)();
            }),
            (i.ɵmod = e.oAB({ type: i })),
            (i.ɵinj = e.cJS({ imports: [t.ez, J, o.Z, Z.Z, b.B, O.T, C.o] })),
            i
          );
        })();
    }
  }
]);
