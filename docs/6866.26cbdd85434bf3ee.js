'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [6866],
  {
    4883: (P, x, c) => {
      c.d(x, { L: () => T });
      var t = c(4893),
        o = c(2313),
        u = c(9808);
      const e = ['checkbox'];
      function f(s, d) {
        if (1 & s) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const Z = t.oxw(2);
              return t.KtG(Z.onHeaderCheckboxChange(h));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & s) {
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
      function b(s, d) {
        if ((1 & s && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & s)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function A(s, d) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & s)) {
          const n = d.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function O(s, d) {
        if (1 & s) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (h) {
              t.CHM(n);
              const Z = t.oxw().$implicit,
                q = t.oxw(2);
              return t.KtG(q.onCheckboxChange(Z, h));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & s) {
          const n = t.oxw().index,
            r = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', r.id, '-checkbox_', n, '')('name', '', r.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', r.id, '-checkbox_', n, '');
        }
      }
      function U(s, d) {
        if ((1 & s && t._UZ(0, 'div', 14), 2 & s)) {
          const n = t.oxw().$implicit,
            r = t.oxw().$implicit,
            h = t.oxw(2);
          t.Q6J('innerHTML', h.sanitizeHTML(r[n.key].data), t.oJD);
        }
      }
      function w(s, d) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, U, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & s)) {
          const n = d.$implicit,
            r = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', r[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', r[n.key].data);
        }
      }
      function m(s, d) {
        if (
          (1 & s && (t.TgZ(0, 'tr'), t.YNc(1, O, 5, 6, 'td', 9), t.YNc(2, w, 3, 2, 'ng-container', 4), t.qZA()), 2 & s)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const C = function (s, d) {
        return { 'table-borderless': s, 'table-striped': d };
      };
      function g(s, d) {
        if (
          (1 & s &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, f, 5, 6, 'th', 3),
            t.YNc(4, b, 2, 2, 'th', 3),
            t.YNc(5, A, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, m, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & s)
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
      const _ = function (s) {
        return { 'responsive-scroll': s };
      };
      let T = (() => {
        class s {
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
              this.checkboxRef.toArray().forEach((Z) => {
                Z.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, r) {
            if (r && r.target && 'boolean' == typeof r.target.checked) {
              if (r.target.checked) this.dataSelected.push(n);
              else {
                const Z = this.dataSelected.findIndex((q) => q === n);
                -1 !== Z && this.dataSelected.splice(Z, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (n) {
            return new (n || s)(t.Y36(t.Qsj), t.Y36(o.H7));
          }),
          (s.ɵcmp = t.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (n, r) {
              if ((1 & n && t.Gf(e, 5), 2 & n)) {
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
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, g, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(r.customClasses),
                  t.Q6J('ngClass', t.VKq(4, _, r.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', r.isValidateComponent));
            },
            dependencies: [u.mk, u.sg, u.O5]
          })),
          s
        );
      })();
    },
    2089: (P, x, c) => {
      c.d(x, { Z: () => u });
      var t = c(9808),
        o = c(4893);
      let u = (() => {
        class e {}
        return (
          (e.ɵfac = function (b) {
            return new (b || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({ imports: [t.ez] })),
          e
        );
      })();
    },
    4948: (P, x, c) => {
      c.d(x, { B: () => w });
      var t = c(9808),
        o = c(4893);
      function u(m, C) {
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
      function e(m, C) {
        1 & m && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function f(m, C) {
        1 & m && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function b(m, C) {
        if ((1 & m && o.YNc(0, f, 2, 0, 'ng-container', 7), 2 & m)) {
          const g = o.oxw(),
            _ = o.MAs(16);
          o.Q6J('ngIf', g.isWindowHTML)('ngIfElse', _);
        }
      }
      function A(m, C) {
        1 & m && o.Hsn(0, 2);
      }
      const O = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        U = ['[component]', '[component-html]', '[component-ts]'];
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
            template: function (g, _) {
              if (
                (1 & g &&
                  (o.F$t(O),
                  o.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  o._uU(3),
                  o.qZA(),
                  o.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  o.NdJ('click', function () {
                    return (_.isOpenCode = !_.isOpenCode);
                  }),
                  o.TgZ(8, 'span'),
                  o._uU(9),
                  o.qZA()()()()()(),
                  o.TgZ(10, 'div', 5),
                  o.YNc(11, u, 8, 4, 'nav', 6),
                  o.YNc(12, e, 2, 0, 'ng-container', 7),
                  o.YNc(13, b, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, A, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & g)
              ) {
                const T = o.MAs(14);
                o.xp6(3),
                  o.Oqu(_.title),
                  o.xp6(4),
                  o.ekj('active', _.isOpenCode),
                  o.xp6(2),
                  o.Oqu(_.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', _.isOpenCode && _.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !_.isOpenCode)('ngIfElse', T);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          m
        );
      })();
    },
    6866: (P, x, c) => {
      c.r(x), c.d(x, { PanelModule: () => I });
      var t = c(9808),
        o = c(2526),
        u = c(5871),
        e = c(4893),
        f = c(4948),
        b = c(1998);
      const A = ['listLinkContent'],
        O = ['panelFooterContent'];
      function U(a, p) {
        if ((1 & a && e._UZ(0, 'img', 7), 2 & a)) {
          const i = e.oxw(2);
          e.Q6J('src', i.image.src, e.LSH)('alt', i.image.alt)('width', i.sizeToPx(i.image.size ? i.image.size : 'md'))(
            'height',
            i.sizeToPx(i.image.size ? i.image.size : 'md')
          );
        }
      }
      function w(a, p) {
        if (
          (1 & a && (e.ynx(0), e.TgZ(1, 'h3', 8), e._uU(2), e.qZA(), e.TgZ(3, 'p', 9), e._uU(4), e.qZA(), e.BQk()),
          2 & a)
        ) {
          const i = e.oxw(2);
          e.xp6(2), e.Oqu(i.title), e.xp6(2), e.hij(' ', i.description, ' ');
        }
      }
      function m(a, p) {
        if ((1 & a && e.GkF(0, 10), 2 & a)) {
          const i = e.oxw(2);
          e.Q6J('ngTemplateOutlet', i.oCustomContent.template);
        }
      }
      function C(a, p) {
        if (
          (1 & a &&
            (e.YNc(0, U, 1, 4, 'img', 3),
            e.TgZ(1, 'div', 4),
            e.YNc(2, w, 5, 2, 'ng-container', 5),
            e.YNc(3, m, 1, 1, 'ng-container', 6),
            e.qZA()),
          2 & a)
        ) {
          const i = e.oxw();
          e.Q6J('ngIf', i.image), e.xp6(2), e.Q6J('ngIf', !i.oCustomContent), e.xp6(1), e.Q6J('ngIf', i.oCustomContent);
        }
      }
      function g(a, p) {
        1 & a && e.GkF(0);
      }
      function _(a, p) {
        if ((1 & a && (e.TgZ(0, 'div', 11), e.YNc(1, g, 1, 0, 'ng-container', 12), e.qZA()), 2 & a)) {
          const i = e.oxw(),
            l = e.MAs(1);
          e.Q6J('ngClass', i.customClasses), e.xp6(1), e.Q6J('ngTemplateOutlet', l);
        }
      }
      function T(a, p) {
        1 & a && e.GkF(0);
      }
      const s = function (a, p) {
        return { 'panel-footer': a, 'list-link': p };
      };
      function d(a, p) {
        if (
          (1 & a &&
            (e.TgZ(0, 'div', 13), e.YNc(1, T, 1, 0, 'ng-container', 12), e.TgZ(2, 'div', 14), e.Hsn(3), e.qZA()()),
          2 & a)
        ) {
          const i = e.oxw(),
            l = e.MAs(1);
          e.ekj('panel-list-link', i.listLinkContent)('panel-sm', !i.listLinkContent)('bg-white', i.isBgWhite)(
            'bg-light',
            i.isBgLight
          ),
            e.Q6J('ngClass', i.customClasses),
            e.xp6(1),
            e.Q6J('ngTemplateOutlet', l),
            e.xp6(1),
            e.Q6J('ngClass', e.WLB(11, s, i.panelFooterContent, i.listLinkContent));
        }
      }
      const n = ['*'];
      let r = (() => {
        class a {
          constructor() {
            (this.isBgWhite = !1),
              (this.isBgLight = !1),
              (this.isVertical = !1),
              (this.customClasses = ''),
              (this.sizeToPx = (i) => {
                switch (i) {
                  case 'lg':
                    return 154;
                  case 'md':
                  case 'sm':
                    return 104;
                }
              });
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-panel-small']],
            contentQueries: function (i, l, M) {
              if ((1 & i && (e.Suo(M, b.X, 7), e.Suo(M, A, 7), e.Suo(M, O, 7)), 2 & i)) {
                let v;
                e.iGM((v = e.CRH())) && (l.oCustomContent = v.first),
                  e.iGM((v = e.CRH())) && (l.listLinkContent = v.first),
                  e.iGM((v = e.CRH())) && (l.panelFooterContent = v.first);
              }
            },
            inputs: {
              title: 'title',
              description: 'description',
              image: 'image',
              isBgWhite: 'isBgWhite',
              isBgLight: 'isBgLight',
              isVertical: 'isVertical',
              customClasses: 'customClasses'
            },
            ngContentSelectors: n,
            decls: 4,
            vars: 2,
            consts: [
              ['smallPanelContent', ''],
              ['class', 'card card-simple panel-sm-horizontal', 3, 'ngClass', 4, 'ngIf'],
              [
                'class',
                'card card-simple',
                3,
                'panel-list-link',
                'panel-sm',
                'bg-white',
                'bg-light',
                'ngClass',
                4,
                'ngIf'
              ],
              ['class', 'rounded-lg', 3, 'src', 'alt', 'width', 'height', 4, 'ngIf'],
              [1, 'card-body'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'rounded-lg', 3, 'src', 'alt', 'width', 'height'],
              [1, 'card-title'],
              [1, 'card-text'],
              [3, 'ngTemplateOutlet'],
              [1, 'card', 'card-simple', 'panel-sm-horizontal', 3, 'ngClass'],
              [4, 'ngTemplateOutlet'],
              [1, 'card', 'card-simple', 3, 'ngClass'],
              [3, 'ngClass']
            ],
            template: function (i, l) {
              1 & i &&
                (e.F$t(),
                e.YNc(0, C, 4, 3, 'ng-template', null, 0, e.W1O),
                e.YNc(2, _, 2, 2, 'div', 1),
                e.YNc(3, d, 4, 14, 'div', 2)),
                2 & i && (e.xp6(2), e.Q6J('ngIf', !l.isVertical), e.xp6(1), e.Q6J('ngIf', l.isVertical));
            },
            dependencies: [t.mk, t.O5, t.tP]
          })),
          a
        );
      })();
      var h = c(2171),
        Z = c(6434);
      let q = (() => {
        class a {
          constructor() {
            (this.exampleTs = u.rI),
              (this.exampleImageLargeTs = u.BC),
              (this.horizontal = u.oY),
              (this.vertical = u.dc),
              (this.withBg = u.MW),
              (this.verticalItems = u.EY),
              (this.horizontalItems = u._2),
              (this.image = u.xV),
              (this.imageLarge = u.$6);
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-panel-examples']],
            decls: 137,
            vars: 33,
            consts: [
              [1, 'section-example'],
              ['title', 'Horizontal', 3, 'isNavCode'],
              ['component', '', 1, 'col-xl-6', 'col-lg-6', 'col-md-12'],
              [
                'title',
                'Nombre del titular',
                'description',
                'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.',
                3,
                'image'
              ],
              ['appClipboard', '', 'component-html', '', 1, 'code'],
              [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
              ['appPrism', '', 'language', 'html'],
              ['appClipboard', '', 'component-ts', '', 1, 'code'],
              ['appPrism', '', 'language', 'javascript'],
              ['title', 'Vertical', 3, 'isNavCode'],
              [
                'title',
                'Nombre del titular',
                'description',
                'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.',
                3,
                'image',
                'isVertical'
              ],
              ['title', 'Imagen grande', 3, 'isNavCode'],
              [
                'title',
                'Nombre del titular',
                'description',
                'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.',
                3,
                'isVertical',
                'image'
              ],
              ['title', 'Con fondos', 3, 'isNavCode'],
              [
                'title',
                'Nombre del titular',
                'description',
                'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.',
                3,
                'image',
                'isVertical',
                'isBgWhite'
              ],
              [
                'title',
                'Nombre del titular',
                'description',
                'Descripci\xf3n de hasta 3 l\xedneas para mantener los est\xe1ndares de lectura en los componentes de Obelisco.',
                3,
                'image',
                'isVertical',
                'isBgLight'
              ],
              ['title', 'Items horizontales', 3, 'isNavCode'],
              ['panelFooterContent', ''],
              ['type', 'button', 1, 'btn', 'btn-secondary', 'btn-sm', 'card-link'],
              ['type', 'button', 1, 'btn', 'btn-link', 'btn-sm', 'card-link'],
              ['title', 'Items verticales', 3, 'isNavCode'],
              ['listLinkContent', ''],
              [1, 'list-link-item-title'],
              ['href', '#', 'download', '', 1, 'btn', 'btn-secondary', 'btn-sm', 'download-link', 'card-link']
            ],
            template: function (i, l) {
              1 & i &&
                (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                e._UZ(3, 'o-panel-small', 3),
                e.qZA(),
                e.TgZ(4, 'pre', 4),
                e._uU(5, '      '),
                e.TgZ(6, 'button', 5),
                e._uU(7, 'Copiar'),
                e.qZA(),
                e._uU(8, '\n      '),
                e.TgZ(9, 'code', 6),
                e._uU(10),
                e.qZA(),
                e._uU(11, '\n    '),
                e.qZA(),
                e.TgZ(12, 'pre', 7),
                e._uU(13, '      '),
                e.TgZ(14, 'button', 5),
                e._uU(15, 'Copiar'),
                e.qZA(),
                e._uU(16, '\n      '),
                e.TgZ(17, 'code', 8),
                e._uU(18),
                e.qZA(),
                e._uU(19, '\n    '),
                e.qZA()(),
                e.TgZ(20, 'app-viewer', 9)(21, 'div', 2),
                e._UZ(22, 'o-panel-small', 10),
                e.qZA(),
                e.TgZ(23, 'pre', 4),
                e._uU(24, '      '),
                e.TgZ(25, 'button', 5),
                e._uU(26, 'Copiar'),
                e.qZA(),
                e._uU(27, '\n      '),
                e.TgZ(28, 'code', 6),
                e._uU(29),
                e.qZA(),
                e._uU(30, '\n    '),
                e.qZA(),
                e.TgZ(31, 'pre', 7),
                e._uU(32, '      '),
                e.TgZ(33, 'button', 5),
                e._uU(34, 'Copiar'),
                e.qZA(),
                e._uU(35, '\n      '),
                e.TgZ(36, 'code', 8),
                e._uU(37),
                e.qZA(),
                e._uU(38, '\n    '),
                e.qZA()(),
                e.TgZ(39, 'app-viewer', 11)(40, 'div', 2),
                e._UZ(41, 'o-panel-small', 12),
                e.qZA(),
                e.TgZ(42, 'pre', 4),
                e._uU(43, '      '),
                e.TgZ(44, 'button', 5),
                e._uU(45, 'Copiar'),
                e.qZA(),
                e._uU(46, '\n      '),
                e.TgZ(47, 'code', 6),
                e._uU(48),
                e.qZA(),
                e._uU(49, '\n    '),
                e.qZA(),
                e.TgZ(50, 'pre', 7),
                e._uU(51, '      '),
                e.TgZ(52, 'button', 5),
                e._uU(53, 'Copiar'),
                e.qZA(),
                e._uU(54, '\n      '),
                e.TgZ(55, 'code', 8),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n    '),
                e.qZA()(),
                e.TgZ(58, 'app-viewer', 13)(59, 'div', 2),
                e._UZ(60, 'o-panel-small', 14)(61, 'br')(62, 'o-panel-small', 15),
                e.qZA(),
                e.TgZ(63, 'pre', 4),
                e._uU(64, '      '),
                e.TgZ(65, 'button', 5),
                e._uU(66, 'Copiar'),
                e.qZA(),
                e._uU(67, '\n      '),
                e.TgZ(68, 'code', 6),
                e._uU(69),
                e.qZA(),
                e._uU(70, '\n    '),
                e.qZA(),
                e.TgZ(71, 'pre', 7),
                e._uU(72, '      '),
                e.TgZ(73, 'button', 5),
                e._uU(74, 'Copiar'),
                e.qZA(),
                e._uU(75, '\n      '),
                e.TgZ(76, 'code', 8),
                e._uU(77),
                e.qZA(),
                e._uU(78, '\n    '),
                e.qZA()(),
                e.TgZ(79, 'app-viewer', 16)(80, 'div', 2)(81, 'o-panel-small', 10),
                e.ynx(82, null, 17),
                e.TgZ(84, 'button', 18),
                e._uU(85, 'Acci\xf3n 1'),
                e.qZA(),
                e.TgZ(86, 'button', 19),
                e._uU(87, 'Acci\xf3n 2'),
                e.qZA(),
                e.BQk(),
                e.qZA()(),
                e.TgZ(88, 'pre', 4),
                e._uU(89, '      '),
                e.TgZ(90, 'button', 5),
                e._uU(91, 'Copiar'),
                e.qZA(),
                e._uU(92, '\n      '),
                e.TgZ(93, 'code', 6),
                e._uU(94),
                e.qZA(),
                e._uU(95, '\n    '),
                e.qZA(),
                e.TgZ(96, 'pre', 7),
                e._uU(97, '      '),
                e.TgZ(98, 'button', 5),
                e._uU(99, 'Copiar'),
                e.qZA(),
                e._uU(100, '\n      '),
                e.TgZ(101, 'code', 8),
                e._uU(102),
                e.qZA(),
                e._uU(103, '\n    '),
                e.qZA()(),
                e.TgZ(104, 'app-viewer', 20)(105, 'div', 2)(106, 'o-panel-small', 10),
                e.ynx(107, null, 21),
                e.TgZ(109, 'h4', 22),
                e._uU(110, 'Nombre del archivo'),
                e.qZA(),
                e.TgZ(111, 'a', 23),
                e._uU(112, ' Descargar '),
                e.qZA(),
                e.TgZ(113, 'h4', 22),
                e._uU(114, 'Nombre del archivo'),
                e.qZA(),
                e.TgZ(115, 'a', 23),
                e._uU(116, ' Descargar '),
                e.qZA(),
                e.TgZ(117, 'h4', 22),
                e._uU(118, 'Nombre del archivo'),
                e.qZA(),
                e.TgZ(119, 'a', 23),
                e._uU(120, ' Descargar '),
                e.qZA(),
                e.BQk(),
                e.qZA()(),
                e.TgZ(121, 'pre', 4),
                e._uU(122, '      '),
                e.TgZ(123, 'button', 5),
                e._uU(124, 'Copiar'),
                e.qZA(),
                e._uU(125, '\n      '),
                e.TgZ(126, 'code', 6),
                e._uU(127),
                e.qZA(),
                e._uU(128, '\n    '),
                e.qZA(),
                e.TgZ(129, 'pre', 7),
                e._uU(130, '      '),
                e.TgZ(131, 'button', 5),
                e._uU(132, 'Copiar'),
                e.qZA(),
                e._uU(133, '\n      '),
                e.TgZ(134, 'code', 8),
                e._uU(135),
                e.qZA(),
                e._uU(136, '\n    '),
                e.qZA()()()),
                2 & i &&
                  (e.xp6(1),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('image', l.image),
                  e.xp6(7),
                  e.Oqu(l.horizontal),
                  e.xp6(8),
                  e.Oqu(l.exampleTs),
                  e.xp6(2),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('image', l.image)('isVertical', !0),
                  e.xp6(7),
                  e.Oqu(l.vertical),
                  e.xp6(8),
                  e.Oqu(l.exampleTs),
                  e.xp6(2),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('isVertical', !0)('image', l.imageLarge),
                  e.xp6(7),
                  e.Oqu(l.vertical),
                  e.xp6(8),
                  e.Oqu(l.exampleImageLargeTs),
                  e.xp6(2),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('image', l.image)('isVertical', !0)('isBgWhite', !0),
                  e.xp6(2),
                  e.Q6J('image', l.image)('isVertical', !0)('isBgLight', !0),
                  e.xp6(7),
                  e.Oqu(l.withBg),
                  e.xp6(8),
                  e.Oqu(l.exampleTs),
                  e.xp6(2),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('image', l.image)('isVertical', !0),
                  e.xp6(13),
                  e.Oqu(l.horizontalItems),
                  e.xp6(8),
                  e.Oqu(l.exampleTs),
                  e.xp6(2),
                  e.Q6J('isNavCode', !0),
                  e.xp6(2),
                  e.Q6J('image', l.image)('isVertical', !0),
                  e.xp6(21),
                  e.Oqu(l.verticalItems),
                  e.xp6(8),
                  e.Oqu(l.exampleTs));
            },
            dependencies: [f.B, r, h.y, Z.y]
          })),
          a
        );
      })();
      var k = c(5570),
        S = c(4883);
      const Q = [
        {
          path: 'api',
          component: (() => {
            class a {
              constructor() {
                (this.columns = k.L0),
                  (this.dataSourcePanelSmall = u.n$),
                  (this.interface = u.le),
                  (this.dataSourceInterface = u.UI),
                  (this.mediaTypes = u.Oj);
              }
            }
            return (
              (a.ɵfac = function (i) {
                return new (i || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-panel-api']],
                decls: 51,
                vars: 10,
                consts: [
                  [1, 'section-api'],
                  [1, 'section-title'],
                  [1, 'code', 'import'],
                  ['appPrism', '', 'code', "import { OPanelModule } from 'ngx-obelisco-example/panel';"],
                  [1, 'section-selector'],
                  [1, 'section-properties'],
                  [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
                  [1, 'section-type'],
                  [1, 'section-interface'],
                  ['appPrism', '', 'language', 'javascript'],
                  [3, 'dataSource', 'columns', 'isBordered', 'isStriped']
                ],
                template: function (i, l) {
                  1 & i &&
                    (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                    e._uU(3, 'Referencia de API para el componente Panel de Obelisco'),
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
                    e._uU(13, 'OPanelModule'),
                    e.qZA(),
                    e.TgZ(14, 'p'),
                    e._uU(15, 'Selector: '),
                    e.TgZ(16, 'strong'),
                    e._uU(17, 'o-panel-small'),
                    e.qZA()(),
                    e.TgZ(18, 'div', 5)(19, 'h5'),
                    e._uU(20, 'Propiedades'),
                    e.qZA(),
                    e._UZ(21, 'o-table', 6),
                    e.qZA(),
                    e.TgZ(22, 'h3'),
                    e._uU(23, 'Tipos de datos'),
                    e.qZA(),
                    e._UZ(24, 'hr'),
                    e.TgZ(25, 'div', 7)(26, 'h4'),
                    e._uU(27, 'MediaPanel'),
                    e.qZA(),
                    e.TgZ(28, 'p'),
                    e._uU(29, 'Permite establecer los valores de la propiedad '),
                    e.TgZ(30, 'strong'),
                    e._uU(31, 'image'),
                    e.qZA(),
                    e._uU(32, '.'),
                    e.qZA(),
                    e.TgZ(33, 'div', 8)(34, 'pre', 2),
                    e._uU(35, '          '),
                    e.TgZ(36, 'code', 9),
                    e._uU(37),
                    e.qZA(),
                    e._uU(38, '\n        '),
                    e.qZA(),
                    e.TgZ(39, 'div', 5)(40, 'h5'),
                    e._uU(41, 'Propiedades'),
                    e.qZA(),
                    e._UZ(42, 'o-table', 10),
                    e.qZA(),
                    e.TgZ(43, 'div', 5)(44, 'h5'),
                    e._uU(45, 'MediaSizes'),
                    e.qZA(),
                    e.TgZ(46, 'pre', 2),
                    e._uU(47, '            '),
                    e.TgZ(48, 'code', 9),
                    e._uU(49),
                    e.qZA(),
                    e._uU(50, '\n          '),
                    e.qZA()()()()()()),
                    2 & i &&
                      (e.xp6(21),
                      e.Q6J('columns', l.columns)('dataSource', l.dataSourcePanelSmall)('isStriped', !0)(
                        'isBordered',
                        !0
                      ),
                      e.xp6(16),
                      e.Oqu(l.interface),
                      e.xp6(5),
                      e.Q6J('dataSource', l.dataSourceInterface)('columns', l.columns)('isBordered', !0)(
                        'isStriped',
                        !0
                      ),
                      e.xp6(7),
                      e.Oqu(l.mediaTypes));
                },
                dependencies: [Z.y, S.L]
              })),
              a
            );
          })()
        },
        { path: 'examples', component: q },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let y = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [o.Bz.forChild(Q), o.Bz] })),
          a
        );
      })();
      var J = c(7538),
        B = c(2089);
      let N = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez] })),
          a
        );
      })();
      var E = c(9384);
      let I = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = e.oAB({ type: a })),
          (a.ɵinj = e.cJS({ imports: [t.ez, y, J.Z, f.B, N, B.Z, E.T] })),
          a
        );
      })();
    }
  }
]);
