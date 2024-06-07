'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [2062],
  {
    4883: (k, b, c) => {
      c.d(b, { L: () => f });
      var e = c(4893),
        o = c(2313),
        m = c(9808);
      const C = ['checkbox'];
      function n(s, d) {
        if (1 & s) {
          const t = e.EpF();
          e.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            e.NdJ('change', function (h) {
              e.CHM(t);
              const T = e.oxw(2);
              return e.KtG(T.onHeaderCheckboxChange(h));
            }),
            e.qZA(),
            e.TgZ(3, 'label', 8),
            e._uU(4),
            e.qZA()()();
        }
        if (2 & s) {
          const t = e.oxw(2);
          e.Q6J('ngClass', t.checkbox.customClassesTh),
            e.xp6(2),
            e.MGl('id', '', t.id, '-selectAllCheckbox')('name', '', t.id, '-selectAllCheckbox'),
            e.xp6(1),
            e.MGl('for', '', t.id, '-selectAllCheckbox'),
            e.Q6J('ngClass', t.checkbox.customClassesLabel),
            e.xp6(1),
            e.Oqu(t.checkbox.title);
        }
      }
      function Z(s, d) {
        if ((1 & s && (e.TgZ(0, 'th', 5), e._uU(1), e.qZA()), 2 & s)) {
          const t = e.oxw(2);
          e.Q6J('ngClass', t.checkbox.customClassesTh), e.xp6(1), e.hij(' ', t.checkbox.title, ' ');
        }
      }
      function v(s, d) {
        if ((1 & s && (e.ynx(0), e.TgZ(1, 'th', 5), e._uU(2), e.qZA(), e.BQk()), 2 & s)) {
          const t = d.$implicit;
          e.xp6(1), e.Q6J('ngClass', t.customClasses), e.xp6(1), e.Oqu(t.value);
        }
      }
      function M(s, d) {
        if (1 & s) {
          const t = e.EpF();
          e.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            e.NdJ('change', function (h) {
              e.CHM(t);
              const T = e.oxw().$implicit,
                B = e.oxw(2);
              return e.KtG(B.onCheckboxChange(T, h));
            }),
            e.qZA(),
            e._UZ(4, 'label', 11),
            e.qZA()();
        }
        if (2 & s) {
          const t = e.oxw().index,
            l = e.oxw(2);
          e.xp6(2),
            e.hYB('id', '', l.id, '-checkbox_', t, '')('name', '', l.id, '-checkbox_', t, ''),
            e.xp6(2),
            e.hYB('for', '', l.id, '-checkbox_', t, '');
        }
      }
      function O(s, d) {
        if ((1 & s && e._UZ(0, 'div', 14), 2 & s)) {
          const t = e.oxw().$implicit,
            l = e.oxw().$implicit,
            h = e.oxw(2);
          e.Q6J('innerHTML', h.sanitizeHTML(l[t.key].data), e.oJD);
        }
      }
      function A(s, d) {
        if ((1 & s && (e.ynx(0), e.TgZ(1, 'td', 12), e.YNc(2, O, 1, 1, 'div', 13), e.qZA(), e.BQk()), 2 & s)) {
          const t = d.$implicit,
            l = e.oxw().$implicit;
          e.xp6(1), e.Q6J('ngClass', l[t.key].customClasses), e.xp6(1), e.Q6J('ngIf', l[t.key].data);
        }
      }
      function p(s, d) {
        if (
          (1 & s && (e.TgZ(0, 'tr'), e.YNc(1, M, 5, 6, 'td', 9), e.YNc(2, A, 3, 2, 'ng-container', 4), e.qZA()), 2 & s)
        ) {
          const t = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', t.checkbox), e.xp6(1), e.Q6J('ngForOf', t.columns);
        }
      }
      const x = function (s, d) {
        return { 'table-borderless': s, 'table-striped': d };
      };
      function _(s, d) {
        if (
          (1 & s &&
            (e.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            e.YNc(3, n, 5, 6, 'th', 3),
            e.YNc(4, Z, 2, 2, 'th', 3),
            e.YNc(5, v, 3, 2, 'ng-container', 4),
            e.qZA()(),
            e.TgZ(6, 'tbody'),
            e.YNc(7, p, 3, 2, 'tr', 4),
            e.qZA()()),
          2 & s)
        ) {
          const t = e.oxw();
          e.Q6J('ngClass', e.WLB(5, x, !t.isBordered, t.isStriped)),
            e.xp6(3),
            e.Q6J('ngIf', 1 == (null == t.checkbox ? null : t.checkbox.isAllSelectable)),
            e.xp6(1),
            e.Q6J('ngIf', 0 == (null == t.checkbox ? null : t.checkbox.isAllSelectable)),
            e.xp6(1),
            e.Q6J('ngForOf', t.columns),
            e.xp6(2),
            e.Q6J('ngForOf', t.dataSource);
        }
      }
      const g = function (s) {
        return { 'responsive-scroll': s };
      };
      let f = (() => {
        class s {
          constructor(t, l) {
            (this.renderer = t),
              (this.sanitizer = l),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new e.vpe()),
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
            const l = t.target;
            if (l) {
              const h = l.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = h;
              }),
                (this.dataSelected = h ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(t, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(t);
              else {
                const T = this.dataSelected.findIndex((B) => B === t);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (s.ɵfac = function (t) {
            return new (t || s)(e.Y36(e.Qsj), e.Y36(o.H7));
          }),
          (s.ɵcmp = e.Xpm({
            type: s,
            selectors: [['o-table']],
            viewQuery: function (t, l) {
              if ((1 & t && e.Gf(C, 5), 2 & t)) {
                let h;
                e.iGM((h = e.CRH())) && (l.checkboxRef = h);
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
            template: function (t, l) {
              1 & t && (e.TgZ(0, 'div', 0), e.YNc(1, _, 8, 8, 'table', 1), e.qZA()),
                2 & t &&
                  (e.Tol(l.customClasses),
                  e.Q6J('ngClass', e.VKq(4, g, l.isScrollable)),
                  e.xp6(1),
                  e.Q6J('ngIf', l.isValidateComponent));
            },
            dependencies: [m.mk, m.sg, m.O5]
          })),
          s
        );
      })();
    },
    2089: (k, b, c) => {
      c.d(b, { Z: () => m });
      var e = c(9808),
        o = c(4893);
      let m = (() => {
        class C {}
        return (
          (C.ɵfac = function (Z) {
            return new (Z || C)();
          }),
          (C.ɵmod = o.oAB({ type: C })),
          (C.ɵinj = o.cJS({ imports: [e.ez] })),
          C
        );
      })();
    },
    4948: (k, b, c) => {
      c.d(b, { B: () => A });
      var e = c(9808),
        o = c(4893);
      function m(p, x) {
        if (1 & p) {
          const _ = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(_);
              const f = o.oxw();
              return o.KtG((f.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(_);
              const f = o.oxw();
              return o.KtG((f.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & p) {
          const _ = o.oxw();
          o.xp6(3), o.ekj('active', _.isWindowHTML), o.xp6(3), o.ekj('active', !_.isWindowHTML);
        }
      }
      function C(p, x) {
        1 & p && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function n(p, x) {
        1 & p && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function Z(p, x) {
        if ((1 & p && o.YNc(0, n, 2, 0, 'ng-container', 7), 2 & p)) {
          const _ = o.oxw(),
            g = o.MAs(16);
          o.Q6J('ngIf', _.isWindowHTML)('ngIfElse', g);
        }
      }
      function v(p, x) {
        1 & p && o.Hsn(0, 2);
      }
      const M = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let A = (() => {
        class p {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (p.ɵfac = function (_) {
            return new (_ || p)();
          }),
          (p.ɵcmp = o.Xpm({
            type: p,
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
            template: function (_, g) {
              if (
                (1 & _ &&
                  (o.F$t(M),
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
                  o.YNc(11, m, 8, 4, 'nav', 6),
                  o.YNc(12, C, 2, 0, 'ng-container', 7),
                  o.YNc(13, Z, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, v, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & _)
              ) {
                const f = o.MAs(14);
                o.xp6(3),
                  o.Oqu(g.title),
                  o.xp6(4),
                  o.ekj('active', g.isOpenCode),
                  o.xp6(2),
                  o.Oqu(g.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !g.isOpenCode)('ngIfElse', f);
              }
            },
            dependencies: [e.ez, e.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          p
        );
      })();
    },
    2062: (k, b, c) => {
      c.r(b), c.d(b, { BannerModule: () => q });
      var e = c(9808),
        o = c(2526),
        m = c(5702),
        C = c(5570),
        n = c(4893),
        Z = c(4883),
        v = c(6434);
      let M = (() => {
        class a {
          constructor() {
            (this.dataSource = m.c8), (this.columns = C.L0);
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [['app-banner-api']],
            decls: 22,
            vars: 4,
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
                "import { OBannerModule } from 'ngx-obelisco-example/banner';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered']
            ],
            template: function (i, r) {
              1 & i &&
                (n.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                n._uU(3, 'Referencia de API para el componente Banner de Obelisco'),
                n.qZA(),
                n.TgZ(4, 'pre', 2),
                n._uU(5, '      '),
                n._UZ(6, 'code', 3),
                n._uU(7, '\n    '),
                n.qZA()(),
                n.TgZ(8, 'h3'),
                n._uU(9, 'Etiqueta'),
                n.qZA(),
                n._UZ(10, 'hr'),
                n.TgZ(11, 'div', 4)(12, 'h4'),
                n._uU(13, 'OBanner'),
                n.qZA(),
                n.TgZ(14, 'p'),
                n._uU(15, 'Selector: '),
                n.TgZ(16, 'strong'),
                n._uU(17, 'o-banner'),
                n.qZA()(),
                n.TgZ(18, 'div', 5)(19, 'h5'),
                n._uU(20, 'Propiedades'),
                n.qZA(),
                n._UZ(21, 'o-table', 6),
                n.qZA()()()),
                2 & i &&
                  (n.xp6(21),
                  n.Q6J('columns', r.columns)('dataSource', r.dataSource)('isStriped', !0)('isBordered', !0));
            },
            dependencies: [Z.L, v.y]
          })),
          a
        );
      })();
      var O = c(4948),
        A = c(2171),
        p = c(1998);
      const x = ['children'];
      function _(a, u) {
        if ((1 & a && n._UZ(0, 'i'), 2 & a)) {
          const i = n.oxw(2);
          n.Tol(i.icon);
        }
      }
      function g(a, u) {
        if ((1 & a && (n.TgZ(0, 'span', 8), n._uU(1), n.qZA()), 2 & a)) {
          const i = n.oxw(2);
          n.xp6(1), n.Oqu(i.icon);
        }
      }
      function f(a, u) {
        if ((1 & a && (n.ynx(0), n._UZ(1, 'p', 9), n.BQk()), 2 & a)) {
          const i = n.oxw(2);
          n.xp6(1), n.Q6J('innerHTML', i.content, n.oJD);
        }
      }
      function s(a, u) {
        1 & a && (n.TgZ(0, 'div', 10), n.Hsn(1), n.qZA());
      }
      function d(a, u) {
        if (
          (1 & a &&
            (n.TgZ(0, 'div', 3),
            n.YNc(1, _, 1, 3, 'i', 4),
            n.YNc(2, g, 2, 1, 'span', 5),
            n.YNc(3, f, 2, 1, 'ng-container', 6),
            n.YNc(4, s, 2, 0, 'div', 7),
            n.qZA()),
          2 & a)
        ) {
          const i = n.oxw();
          n.xp6(1),
            n.Q6J('ngIf', i.icon && (null == i.icon ? null : i.icon.includes('bx'))),
            n.xp6(1),
            n.Q6J('ngIf', i.icon && !i.icon.includes('bx')),
            n.xp6(1),
            n.Q6J('ngIf', i.content),
            n.xp6(1),
            n.Q6J('ngIf', i.children);
        }
      }
      function t(a, u) {
        if ((1 & a && n.GkF(0, 11), 2 & a)) {
          const i = n.oxw();
          n.Q6J('ngTemplateOutlet', i.oCustomContent.template);
        }
      }
      const l = ['*'];
      let h = (() => {
        class a {
          constructor() {
            (this.isDark = !1), (this.customClasses = '');
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵcmp = n.Xpm({
            type: a,
            selectors: [['o-banner']],
            contentQueries: function (i, r, U) {
              if ((1 & i && (n.Suo(U, x, 7), n.Suo(U, p.X, 7)), 2 & i)) {
                let w;
                n.iGM((w = n.CRH())) && (r.children = w.first), n.iGM((w = n.CRH())) && (r.oCustomContent = w.first);
              }
            },
            inputs: { isDark: 'isDark', content: 'content', icon: 'icon', customClasses: 'customClasses' },
            ngContentSelectors: l,
            decls: 3,
            vars: 5,
            consts: [
              [1, 'banner', 3, 'ngClass'],
              ['class', 'banner-content', 4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'banner-content'],
              [3, 'class', 4, 'ngIf'],
              ['class', 'material-icons-round', 4, 'ngIf'],
              [4, 'ngIf'],
              ['class', 'banner-actions', 4, 'ngIf'],
              [1, 'material-icons-round'],
              [1, 'banner-text', 3, 'innerHTML'],
              [1, 'banner-actions'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (i, r) {
              1 & i &&
                (n.F$t(),
                n.TgZ(0, 'div', 0),
                n.YNc(1, d, 5, 4, 'div', 1),
                n.YNc(2, t, 1, 1, 'ng-container', 2),
                n.qZA()),
                2 & i &&
                  (n.ekj('banner-dark', r.isDark),
                  n.Q6J('ngClass', r.customClasses),
                  n.xp6(1),
                  n.Q6J('ngIf', !r.oCustomContent),
                  n.xp6(1),
                  n.Q6J('ngIf', r.oCustomContent));
            },
            dependencies: [e.mk, e.O5, e.tP]
          })),
          a
        );
      })();
      var T = c(2200);
      const y = [
        { path: 'api', component: M },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.content = m.Yg),
                  (this.bannerTypesHTML = m.$q),
                  (this.bannerTypesTS = m.iT),
                  (this.textButton = m.d_),
                  (this.icon = m.gZ),
                  (this.bannerButtonHTML = m.o4),
                  (this.bannerButtonTS = m.Q7),
                  (this.iconCookie = m.tt),
                  (this.bannerButtonsHTML = m.iA);
              }
            }
            return (
              (a.ɵfac = function (i) {
                return new (i || a)();
              }),
              (a.ɵcmp = n.Xpm({
                type: a,
                selectors: [['app-banner-examples']],
                decls: 76,
                vars: 22,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Tipos', 3, 'isNavCode'],
                  ['component', '', 1, 'mb-4'],
                  [3, 'content'],
                  [3, 'content', 'isDark'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['title', 'Con Bot\xf3n', 3, 'isNavCode'],
                  [3, 'content', 'icon'],
                  ['size', 'sm', 'type', 'secondary', 'link', '#'],
                  ['children', ''],
                  [3, 'content', 'isDark', 'icon'],
                  ['title', 'Con Botones', 3, 'isNavCode'],
                  ['size', 'sm', 'link', '#'],
                  [3, 'content', 'icon', 'isDark']
                ],
                template: function (i, r) {
                  1 & i &&
                    (n.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2),
                    n._UZ(3, 'o-banner', 3),
                    n.qZA(),
                    n.TgZ(4, 'div', 2),
                    n._UZ(5, 'o-banner', 4),
                    n.qZA(),
                    n.TgZ(6, 'pre', 5),
                    n._uU(7, '      '),
                    n.TgZ(8, 'button', 6),
                    n._uU(9, 'Copiar'),
                    n.qZA(),
                    n._uU(10, '\n      '),
                    n.TgZ(11, 'code', 7),
                    n._uU(12),
                    n.qZA(),
                    n._uU(13, '\n    '),
                    n.qZA(),
                    n.TgZ(14, 'pre', 8),
                    n._uU(15, '      '),
                    n.TgZ(16, 'button', 6),
                    n._uU(17, 'Copiar'),
                    n.qZA(),
                    n._uU(18, '\n      '),
                    n.TgZ(19, 'code', 9),
                    n._uU(20),
                    n.qZA(),
                    n._uU(21, '\n    '),
                    n.qZA()(),
                    n.TgZ(22, 'app-viewer', 10)(23, 'div', 2)(24, 'o-banner', 11),
                    n._UZ(25, 'o-button', 12, 13),
                    n.qZA()(),
                    n.TgZ(27, 'div', 2)(28, 'o-banner', 14),
                    n._UZ(29, 'o-button', 12, 13),
                    n.qZA()(),
                    n.TgZ(31, 'pre', 5),
                    n._uU(32, '      '),
                    n.TgZ(33, 'button', 6),
                    n._uU(34, 'Copiar'),
                    n.qZA(),
                    n._uU(35, '\n      '),
                    n.TgZ(36, 'code', 7),
                    n._uU(37),
                    n.qZA(),
                    n._uU(38, '\n    '),
                    n.qZA(),
                    n.TgZ(39, 'pre', 8),
                    n._uU(40, '      '),
                    n.TgZ(41, 'button', 6),
                    n._uU(42, 'Copiar'),
                    n.qZA(),
                    n._uU(43, '\n      '),
                    n.TgZ(44, 'code', 9),
                    n._uU(45),
                    n.qZA(),
                    n._uU(46, '\n    '),
                    n.qZA()(),
                    n.TgZ(47, 'app-viewer', 15)(48, 'div', 2)(49, 'o-banner', 11),
                    n._UZ(50, 'o-button', 12, 13)(52, 'o-button', 16, 13),
                    n.qZA()(),
                    n.TgZ(54, 'div', 2)(55, 'o-banner', 17),
                    n._UZ(56, 'o-button', 12, 13)(58, 'o-button', 16, 13),
                    n.qZA()(),
                    n.TgZ(60, 'pre', 5),
                    n._uU(61, '      '),
                    n.TgZ(62, 'button', 6),
                    n._uU(63, 'Copiar'),
                    n.qZA(),
                    n._uU(64, '\n      '),
                    n.TgZ(65, 'code', 7),
                    n._uU(66),
                    n.qZA(),
                    n._uU(67, '\n    '),
                    n.qZA(),
                    n.TgZ(68, 'pre', 8),
                    n._uU(69, '      '),
                    n.TgZ(70, 'button', 6),
                    n._uU(71, 'Copiar'),
                    n.qZA(),
                    n._uU(72, '\n      '),
                    n.TgZ(73, 'code', 9),
                    n._uU(74),
                    n.qZA(),
                    n._uU(75, '\n    '),
                    n.qZA()()()),
                    2 & i &&
                      (n.xp6(1),
                      n.Q6J('isNavCode', !0),
                      n.xp6(2),
                      n.Q6J('content', r.content),
                      n.xp6(2),
                      n.Q6J('content', r.content)('isDark', !0),
                      n.xp6(7),
                      n.hij('\n        ', r.bannerTypesHTML, '\n      '),
                      n.xp6(8),
                      n.hij('\n        ', r.bannerTypesTS, '\n      '),
                      n.xp6(2),
                      n.Q6J('isNavCode', !0),
                      n.xp6(2),
                      n.Q6J('content', r.textButton)('icon', r.icon),
                      n.xp6(4),
                      n.Q6J('content', r.textButton)('isDark', !0)('icon', r.icon),
                      n.xp6(9),
                      n.hij('\n        ', r.bannerButtonHTML, '\n      '),
                      n.xp6(8),
                      n.hij('\n        ', r.bannerButtonTS, '\n      '),
                      n.xp6(2),
                      n.Q6J('isNavCode', !0),
                      n.xp6(2),
                      n.Q6J('content', r.textButton)('icon', r.iconCookie),
                      n.xp6(6),
                      n.Q6J('content', r.textButton)('icon', r.iconCookie)('isDark', !0),
                      n.xp6(11),
                      n.hij('\n        ', r.bannerButtonsHTML, '\n      '),
                      n.xp6(8),
                      n.hij('\n        ', r.bannerButtonTS, '\n      '));
                },
                dependencies: [O.B, v.y, A.y, h, T.g]
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let S = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = n.oAB({ type: a })),
          (a.ɵinj = n.cJS({ imports: [o.Bz.forChild(y), o.Bz] })),
          a
        );
      })();
      var J = c(7538);
      let Q = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = n.oAB({ type: a })),
          (a.ɵinj = n.cJS({ imports: [e.ez] })),
          a
        );
      })();
      var P = c(2089),
        E = c(9384),
        I = c(3717);
      let q = (() => {
        class a {}
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵmod = n.oAB({ type: a })),
          (a.ɵinj = n.cJS({ imports: [e.ez, S, J.Z, P.Z, O.B, Q, E.T, I.J] })),
          a
        );
      })();
    }
  }
]);
