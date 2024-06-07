'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [4892],
  {
    4883: (k, b, l) => {
      l.d(b, { L: () => f });
      var e = l(4893),
        o = l(2313),
        M = l(9808);
      const d = ['checkbox'];
      function t(i, m) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            e.NdJ('change', function (x) {
              e.CHM(s);
              const h = e.oxw(2);
              return e.KtG(h.onHeaderCheckboxChange(x));
            }),
            e.qZA(),
            e.TgZ(3, 'label', 8),
            e._uU(4),
            e.qZA()()();
        }
        if (2 & i) {
          const s = e.oxw(2);
          e.Q6J('ngClass', s.checkbox.customClassesTh),
            e.xp6(2),
            e.MGl('id', '', s.id, '-selectAllCheckbox')('name', '', s.id, '-selectAllCheckbox'),
            e.xp6(1),
            e.MGl('for', '', s.id, '-selectAllCheckbox'),
            e.Q6J('ngClass', s.checkbox.customClassesLabel),
            e.xp6(1),
            e.Oqu(s.checkbox.title);
        }
      }
      function O(i, m) {
        if ((1 & i && (e.TgZ(0, 'th', 5), e._uU(1), e.qZA()), 2 & i)) {
          const s = e.oxw(2);
          e.Q6J('ngClass', s.checkbox.customClassesTh), e.xp6(1), e.hij(' ', s.checkbox.title, ' ');
        }
      }
      function v(i, m) {
        if ((1 & i && (e.ynx(0), e.TgZ(1, 'th', 5), e._uU(2), e.qZA(), e.BQk()), 2 & i)) {
          const s = m.$implicit;
          e.xp6(1), e.Q6J('ngClass', s.customClasses), e.xp6(1), e.Oqu(s.value);
        }
      }
      function S(i, m) {
        if (1 & i) {
          const s = e.EpF();
          e.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            e.NdJ('change', function (x) {
              e.CHM(s);
              const h = e.oxw().$implicit,
                y = e.oxw(2);
              return e.KtG(y.onCheckboxChange(h, x));
            }),
            e.qZA(),
            e._UZ(4, 'label', 11),
            e.qZA()();
        }
        if (2 & i) {
          const s = e.oxw().index,
            p = e.oxw(2);
          e.xp6(2),
            e.hYB('id', '', p.id, '-checkbox_', s, '')('name', '', p.id, '-checkbox_', s, ''),
            e.xp6(2),
            e.hYB('for', '', p.id, '-checkbox_', s, '');
        }
      }
      function w(i, m) {
        if ((1 & i && e._UZ(0, 'div', 14), 2 & i)) {
          const s = e.oxw().$implicit,
            p = e.oxw().$implicit,
            x = e.oxw(2);
          e.Q6J('innerHTML', x.sanitizeHTML(p[s.key].data), e.oJD);
        }
      }
      function A(i, m) {
        if ((1 & i && (e.ynx(0), e.TgZ(1, 'td', 12), e.YNc(2, w, 1, 1, 'div', 13), e.qZA(), e.BQk()), 2 & i)) {
          const s = m.$implicit,
            p = e.oxw().$implicit;
          e.xp6(1), e.Q6J('ngClass', p[s.key].customClasses), e.xp6(1), e.Q6J('ngIf', p[s.key].data);
        }
      }
      function u(i, m) {
        if (
          (1 & i && (e.TgZ(0, 'tr'), e.YNc(1, S, 5, 6, 'td', 9), e.YNc(2, A, 3, 2, 'ng-container', 4), e.qZA()), 2 & i)
        ) {
          const s = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', s.checkbox), e.xp6(1), e.Q6J('ngForOf', s.columns);
        }
      }
      const C = function (i, m) {
        return { 'table-borderless': i, 'table-striped': m };
      };
      function _(i, m) {
        if (
          (1 & i &&
            (e.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            e.YNc(3, t, 5, 6, 'th', 3),
            e.YNc(4, O, 2, 2, 'th', 3),
            e.YNc(5, v, 3, 2, 'ng-container', 4),
            e.qZA()(),
            e.TgZ(6, 'tbody'),
            e.YNc(7, u, 3, 2, 'tr', 4),
            e.qZA()()),
          2 & i)
        ) {
          const s = e.oxw();
          e.Q6J('ngClass', e.WLB(5, C, !s.isBordered, s.isStriped)),
            e.xp6(3),
            e.Q6J('ngIf', 1 == (null == s.checkbox ? null : s.checkbox.isAllSelectable)),
            e.xp6(1),
            e.Q6J('ngIf', 0 == (null == s.checkbox ? null : s.checkbox.isAllSelectable)),
            e.xp6(1),
            e.Q6J('ngForOf', s.columns),
            e.xp6(2),
            e.Q6J('ngForOf', s.dataSource);
        }
      }
      const g = function (i) {
        return { 'responsive-scroll': i };
      };
      let f = (() => {
        class i {
          constructor(s, p) {
            (this.renderer = s),
              (this.sanitizer = p),
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
            this.checkboxRef.map((s) => {
              this.inputCheckArr.push(s.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((s) => {
              if ('' === s.key || '' === s.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((s) => (s.value = s.value.trim())),
              (this.columns = this.columns.map(
                (s) => ((s.value = s.value.charAt(0).toUpperCase() + s.value.slice(1).toLowerCase()), s)
              )),
              this.columns.map((s) => {
                if (
                  s.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  s.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), s;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(s) {
            return this.sanitizer.bypassSecurityTrustHtml(s);
          }
          onHeaderCheckboxChange(s) {
            const p = s.target;
            if (p) {
              const x = p.checked;
              this.checkboxRef.toArray().forEach((h) => {
                h.nativeElement.checked = x;
              }),
                (this.dataSelected = x ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(s, p) {
            if (p && p.target && 'boolean' == typeof p.target.checked) {
              if (p.target.checked) this.dataSelected.push(s);
              else {
                const h = this.dataSelected.findIndex((y) => y === s);
                -1 !== h && this.dataSelected.splice(h, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (i.ɵfac = function (s) {
            return new (s || i)(e.Y36(e.Qsj), e.Y36(o.H7));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [['o-table']],
            viewQuery: function (s, p) {
              if ((1 & s && e.Gf(d, 5), 2 & s)) {
                let x;
                e.iGM((x = e.CRH())) && (p.checkboxRef = x);
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
            template: function (s, p) {
              1 & s && (e.TgZ(0, 'div', 0), e.YNc(1, _, 8, 8, 'table', 1), e.qZA()),
                2 & s &&
                  (e.Tol(p.customClasses),
                  e.Q6J('ngClass', e.VKq(4, g, p.isScrollable)),
                  e.xp6(1),
                  e.Q6J('ngIf', p.isValidateComponent));
            },
            dependencies: [M.mk, M.sg, M.O5]
          })),
          i
        );
      })();
    },
    2089: (k, b, l) => {
      l.d(b, { Z: () => M });
      var e = l(9808),
        o = l(4893);
      let M = (() => {
        class d {}
        return (
          (d.ɵfac = function (O) {
            return new (O || d)();
          }),
          (d.ɵmod = o.oAB({ type: d })),
          (d.ɵinj = o.cJS({ imports: [e.ez] })),
          d
        );
      })();
    },
    4948: (k, b, l) => {
      l.d(b, { B: () => A });
      var e = l(9808),
        o = l(4893);
      function M(u, C) {
        if (1 & u) {
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
        if (2 & u) {
          const _ = o.oxw();
          o.xp6(3), o.ekj('active', _.isWindowHTML), o.xp6(3), o.ekj('active', !_.isWindowHTML);
        }
      }
      function d(u, C) {
        1 & u && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function t(u, C) {
        1 & u && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function O(u, C) {
        if ((1 & u && o.YNc(0, t, 2, 0, 'ng-container', 7), 2 & u)) {
          const _ = o.oxw(),
            g = o.MAs(16);
          o.Q6J('ngIf', _.isWindowHTML)('ngIfElse', g);
        }
      }
      function v(u, C) {
        1 & u && o.Hsn(0, 2);
      }
      const S = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        w = ['[component]', '[component-html]', '[component-ts]'];
      let A = (() => {
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
            template: function (_, g) {
              if (
                (1 & _ &&
                  (o.F$t(S),
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
                  o.YNc(11, M, 8, 4, 'nav', 6),
                  o.YNc(12, d, 2, 0, 'ng-container', 7),
                  o.YNc(13, O, 1, 2, 'ng-template', null, 8, o.W1O),
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
          u
        );
      })();
    },
    4892: (k, b, l) => {
      l.r(b), l.d(b, { StatusMessageModule: () => V });
      var e = l(9808),
        o = l(2526),
        M = l(5570),
        d = l(919),
        t = l(4893),
        O = l(4883),
        v = l(6434);
      let S = (() => {
        class n {
          constructor() {
            (this.dataSource = d.aq), (this.columns = M.L0), (this.type = d.fI);
          }
        }
        return (
          (n.ɵfac = function (a) {
            return new (a || n)();
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['app-status-message-api']],
            decls: 33,
            vars: 5,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OStatusMessageModule } from 'ngx-obelisco-example/status-message';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              ['appPrism', '']
            ],
            template: function (a, r) {
              1 & a &&
                (t.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                t._uU(3, 'Referencia de API para el componente Mensaje de estado de Obelisco'),
                t.qZA(),
                t.TgZ(4, 'pre', 2),
                t._uU(5, '      '),
                t._UZ(6, 'code', 3),
                t._uU(7, '\n    '),
                t.qZA()(),
                t.TgZ(8, 'h3'),
                t._uU(9, 'Etiqueta'),
                t.qZA(),
                t._UZ(10, 'hr'),
                t.TgZ(11, 'div', 4)(12, 'h4'),
                t._uU(13, 'OStatusMessage'),
                t.qZA(),
                t.TgZ(14, 'p'),
                t._uU(15, 'Selector: '),
                t.TgZ(16, 'strong'),
                t._uU(17, 'o-status-message'),
                t.qZA()(),
                t.TgZ(18, 'div', 5)(19, 'h5'),
                t._uU(20, 'Propiedades'),
                t.qZA(),
                t._UZ(21, 'o-table', 6),
                t.qZA()(),
                t._UZ(22, 'br'),
                t.TgZ(23, 'div', 7)(24, 'h4'),
                t._uU(25, 'StatusMessageTypes'),
                t.qZA(),
                t.TgZ(26, 'p'),
                t._uU(27, 'Permite establecer los diferentes tipos de Mensaje de estado.'),
                t.qZA(),
                t.TgZ(28, 'pre', 2),
                t._uU(29, '      '),
                t.TgZ(30, 'code', 8),
                t._uU(31),
                t.qZA(),
                t._uU(32, '\n    '),
                t.qZA()()()),
                2 & a &&
                  (t.xp6(21),
                  t.Q6J('columns', r.columns)('dataSource', r.dataSource)('isStriped', !0)('isBordered', !0),
                  t.xp6(10),
                  t.Oqu(r.type));
            },
            dependencies: [O.L, v.y]
          })),
          n
        );
      })();
      var w = l(1998);
      function A(n, c) {
        if ((1 & n && t._UZ(0, 'p', 7), 2 & n)) {
          const a = t.oxw(2);
          t.Q6J('innerHTML', a.content, t.oJD);
        }
      }
      function u(n, c) {
        1 & n && t._UZ(0, 'p', 7), 2 & n && t.Q6J('innerHTML', c.$implicit, t.oJD);
      }
      function C(n, c) {
        if ((1 & n && t.YNc(0, u, 1, 1, 'p', 8), 2 & n)) {
          const a = t.oxw(2);
          t.Q6J('ngForOf', a.textArray);
        }
      }
      function _(n, c) {
        1 & n && t._UZ(0, 'li', 11), 2 & n && t.Q6J('innerHTML', c.$implicit, t.oJD);
      }
      function g(n, c) {
        if ((1 & n && (t.TgZ(0, 'ul', 9), t.YNc(1, _, 1, 1, 'li', 10), t.qZA()), 2 & n)) {
          const a = t.oxw(2);
          t.xp6(1), t.Q6J('ngForOf', a.listContent);
        }
      }
      function f(n, c) {
        if (
          (1 & n &&
            (t.ynx(0),
            t.TgZ(1, 'h2', 3),
            t._uU(2),
            t.qZA(),
            t.YNc(3, A, 1, 1, 'p', 4),
            t.YNc(4, C, 1, 1, 'ng-template', null, 5, t.W1O),
            t.YNc(6, g, 2, 1, 'ul', 6),
            t.Hsn(7),
            t.BQk()),
          2 & n)
        ) {
          const a = t.MAs(5),
            r = t.oxw();
          t.xp6(2),
            t.Oqu(r.title),
            t.xp6(1),
            t.Q6J('ngIf', !r.isTextArray)('ngIfElse', a),
            t.xp6(3),
            t.Q6J('ngIf', r.isList);
        }
      }
      function i(n, c) {
        if ((1 & n && t.GkF(0, 12), 2 & n)) {
          const a = t.oxw();
          t.Q6J('ngTemplateOutlet', a.oCustomContent.template);
        }
      }
      const m = ['*'];
      let s = (() => {
        class n {
          constructor() {
            (this.type = 'success'), (this.listContent = []), (this.customClasses = '');
          }
          get isTextArray() {
            return Array.isArray(this.content);
          }
          get textArray() {
            return Array.isArray(this.content) ? this.content : [];
          }
          get isList() {
            return this.listContent.length > 0;
          }
        }
        return (
          (n.ɵfac = function (a) {
            return new (a || n)();
          }),
          (n.ɵcmp = t.Xpm({
            type: n,
            selectors: [['o-status-message']],
            contentQueries: function (a, r, T) {
              if ((1 & a && t.Suo(T, w.X, 7), 2 & a)) {
                let Z;
                t.iGM((Z = t.CRH())) && (r.oCustomContent = Z.first);
              }
            },
            inputs: {
              type: 'type',
              title: 'title',
              content: 'content',
              listContent: 'listContent',
              customClasses: 'customClasses'
            },
            ngContentSelectors: m,
            decls: 3,
            vars: 5,
            consts: [
              [1, 'status', 3, 'ngClass'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'status-title'],
              ['class', 'status-text', 3, 'innerHTML', 4, 'ngIf', 'ngIfElse'],
              ['isAarray', ''],
              ['class', 'status-list', 4, 'ngIf'],
              [1, 'status-text', 3, 'innerHTML'],
              ['class', 'status-text', 3, 'innerHTML', 4, 'ngFor', 'ngForOf'],
              [1, 'status-list'],
              [3, 'innerHTML', 4, 'ngFor', 'ngForOf'],
              [3, 'innerHTML'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (a, r) {
              1 & a &&
                (t.F$t(),
                t.TgZ(0, 'div', 0),
                t.YNc(1, f, 8, 4, 'ng-container', 1),
                t.YNc(2, i, 1, 1, 'ng-container', 2),
                t.qZA()),
                2 & a &&
                  (t.Tol(r.customClasses),
                  t.Q6J('ngClass', 'status-' + r.type),
                  t.xp6(1),
                  t.Q6J('ngIf', !r.oCustomContent),
                  t.xp6(1),
                  t.Q6J('ngIf', r.oCustomContent));
            },
            dependencies: [e.mk, e.sg, e.O5, e.tP],
            styles: ['.status>o-button+o-button{margin-left:1rem}']
          })),
          n
        );
      })();
      var p = l(4948),
        x = l(2171),
        h = l(2200);
      function y(n, c) {
        1 & n && (t.ynx(0), t._UZ(1, 'o-button', 14)(2, 'o-button', 15), t.BQk()),
          2 & n && (t.xp6(2), t.Q6J('isOutline', !0));
      }
      function J(n, c) {
        1 & n && t._UZ(0, 'o-button', 14);
      }
      function E(n, c) {
        if (
          (1 & n &&
            (t.TgZ(0, 'o-status-message', 11),
            t.YNc(1, y, 3, 1, 'ng-container', 12),
            t.YNc(2, J, 1, 0, 'ng-template', null, 13, t.W1O),
            t.qZA()),
          2 & n)
        ) {
          const a = t.MAs(3),
            r = t.oxw(),
            T = r.$implicit,
            Z = r.index;
          t.Q6J('type', T.type)('title', T.title)('content', T.content)('listContent', T.listContent),
            t.xp6(1),
            t.Q6J('ngIf', 0 !== Z)('ngIfElse', a);
        }
      }
      function Q(n, c) {
        1 & n && (t.ynx(0), t._UZ(1, 'o-button', 18), t.BQk()), 2 & n && (t.xp6(1), t.Q6J('isOutline', !0));
      }
      function U(n, c) {
        1 & n && t._UZ(0, 'o-button', 14);
      }
      function I(n, c) {
        if (
          (1 & n &&
            (t.TgZ(0, 'o-status-message', 16),
            t.YNc(1, Q, 2, 1, 'ng-container', 12),
            t.YNc(2, U, 1, 0, 'ng-template', null, 17, t.W1O),
            t.qZA()),
          2 & n)
        ) {
          const a = t.MAs(3),
            r = t.oxw(),
            T = r.$implicit,
            Z = r.index;
          t.Q6J('type', T.type)('title', T.title)('content', T.content),
            t.xp6(1),
            t.Q6J('ngIf', 4 === Z)('ngIfElse', a);
        }
      }
      function P(n, c) {
        if (
          (1 & n &&
            (t.TgZ(0, 'app-viewer', 2)(1, 'div', 3),
            t.YNc(2, E, 4, 6, 'o-status-message', 4),
            t.YNc(3, I, 4, 5, 'ng-template', null, 5, t.W1O),
            t.qZA(),
            t.TgZ(5, 'pre', 6),
            t._uU(6, '      '),
            t.TgZ(7, 'button', 7),
            t._uU(8, 'Copiar'),
            t.qZA(),
            t._uU(9, '\n      '),
            t.TgZ(10, 'code', 8),
            t._uU(11),
            t.qZA(),
            t._uU(12, '\n    '),
            t.qZA(),
            t.TgZ(13, 'pre', 9),
            t._uU(14, '      '),
            t.TgZ(15, 'button', 7),
            t._uU(16, 'Copiar'),
            t.qZA(),
            t._uU(17, '\n      '),
            t.TgZ(18, 'code', 10),
            t._uU(19),
            t.qZA(),
            t._uU(20, '\n    '),
            t.qZA()()),
          2 & n)
        ) {
          const a = c.$implicit,
            r = t.MAs(4);
          t.Q6J('title', a.name)('isNavCode', !!a.exampleTS)('id', 'example-' + a.name.toLowerCase()),
            t.xp6(2),
            t.Q6J('ngIf', a.listContent)('ngIfElse', r),
            t.xp6(9),
            t.hij('\n        ', a.exampleHTML, '\n      '),
            t.xp6(8),
            t.hij('\n        ', a.exampleTS, '\n      ');
        }
      }
      const L = [
        { path: 'api', component: S },
        {
          path: 'examples',
          component: (() => {
            class n {
              constructor() {
                this.statusMessageList = d.Dn;
              }
            }
            return (
              (n.ɵfac = function (a) {
                return new (a || n)();
              }),
              (n.ɵcmp = t.Xpm({
                type: n,
                selectors: [['app-status-message-example']],
                decls: 2,
                vars: 1,
                consts: [
                  [1, 'section-example'],
                  [3, 'title', 'isNavCode', 'id', 4, 'ngFor', 'ngForOf'],
                  [3, 'title', 'isNavCode', 'id'],
                  ['component', ''],
                  [3, 'type', 'title', 'content', 'listContent', 4, 'ngIf', 'ngIfElse'],
                  ['noList', ''],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  [3, 'type', 'title', 'content', 'listContent'],
                  [4, 'ngIf', 'ngIfElse'],
                  ['onlyButton', ''],
                  ['type', 'secondary'],
                  ['type', 'secondary', 3, 'isOutline'],
                  [3, 'type', 'title', 'content'],
                  ['clasicButton', ''],
                  ['type', 'link', 'text', 'Ir al sitio web', 'link', 'https://buenosaires.gob.ar/', 3, 'isOutline']
                ],
                template: function (a, r) {
                  1 & a && (t.TgZ(0, 'section', 0), t.YNc(1, P, 21, 7, 'app-viewer', 1), t.qZA()),
                    2 & a && (t.xp6(1), t.Q6J('ngForOf', r.statusMessageList));
                },
                dependencies: [e.sg, e.O5, s, p.B, x.y, v.y, h.g]
              })),
              n
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let N = (() => {
        class n {}
        return (
          (n.ɵfac = function (a) {
            return new (a || n)();
          }),
          (n.ɵmod = t.oAB({ type: n })),
          (n.ɵinj = t.cJS({ imports: [o.Bz.forChild(L), o.Bz] })),
          n
        );
      })();
      var H = l(7538),
        B = l(2089),
        F = l(9384),
        Y = l(3717);
      let q = (() => {
          class n {}
          return (
            (n.ɵfac = function (a) {
              return new (a || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [e.ez] })),
            n
          );
        })(),
        V = (() => {
          class n {}
          return (
            (n.ɵfac = function (a) {
              return new (a || n)();
            }),
            (n.ɵmod = t.oAB({ type: n })),
            (n.ɵinj = t.cJS({ imports: [e.ez, N, q, H.Z, B.Z, p.B, F.T, Y.J] })),
            n
          );
        })();
    }
  }
]);
