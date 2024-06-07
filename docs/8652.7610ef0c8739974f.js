'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [8652],
  {
    4883: (F, Z, l) => {
      l.d(Z, { L: () => x });
      var t = l(4893),
        s = l(2313),
        e = l(9808);
      const h = ['checkbox'];
      function b(r, m) {
        if (1 & r) {
          const i = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (C) {
              t.CHM(i);
              const T = t.oxw(2);
              return t.KtG(T.onHeaderCheckboxChange(C));
            }),
            t.qZA(),
            t.TgZ(3, 'label', 8),
            t._uU(4),
            t.qZA()()();
        }
        if (2 & r) {
          const i = t.oxw(2);
          t.Q6J('ngClass', i.checkbox.customClassesTh),
            t.xp6(2),
            t.MGl('id', '', i.id, '-selectAllCheckbox')('name', '', i.id, '-selectAllCheckbox'),
            t.xp6(1),
            t.MGl('for', '', i.id, '-selectAllCheckbox'),
            t.Q6J('ngClass', i.checkbox.customClassesLabel),
            t.xp6(1),
            t.Oqu(i.checkbox.title);
        }
      }
      function A(r, m) {
        if ((1 & r && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & r)) {
          const i = t.oxw(2);
          t.Q6J('ngClass', i.checkbox.customClassesTh), t.xp6(1), t.hij(' ', i.checkbox.title, ' ');
        }
      }
      function w(r, m) {
        if ((1 & r && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & r)) {
          const i = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', i.customClasses), t.xp6(1), t.Oqu(i.value);
        }
      }
      function k(r, m) {
        if (1 & r) {
          const i = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (C) {
              t.CHM(i);
              const T = t.oxw().$implicit,
                U = t.oxw(2);
              return t.KtG(U.onCheckboxChange(T, C));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & r) {
          const i = t.oxw().index,
            p = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', p.id, '-checkbox_', i, '')('name', '', p.id, '-checkbox_', i, ''),
            t.xp6(2),
            t.hYB('for', '', p.id, '-checkbox_', i, '');
        }
      }
      function O(r, m) {
        if ((1 & r && t._UZ(0, 'div', 14), 2 & r)) {
          const i = t.oxw().$implicit,
            p = t.oxw().$implicit,
            C = t.oxw(2);
          t.Q6J('innerHTML', C.sanitizeHTML(p[i.key].data), t.oJD);
        }
      }
      function v(r, m) {
        if ((1 & r && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, O, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & r)) {
          const i = m.$implicit,
            p = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', p[i.key].customClasses), t.xp6(1), t.Q6J('ngIf', p[i.key].data);
        }
      }
      function _(r, m) {
        if (
          (1 & r && (t.TgZ(0, 'tr'), t.YNc(1, k, 5, 6, 'td', 9), t.YNc(2, v, 3, 2, 'ng-container', 4), t.qZA()), 2 & r)
        ) {
          const i = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', i.checkbox), t.xp6(1), t.Q6J('ngForOf', i.columns);
        }
      }
      const f = function (r, m) {
        return { 'table-borderless': r, 'table-striped': m };
      };
      function d(r, m) {
        if (
          (1 & r &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, b, 5, 6, 'th', 3),
            t.YNc(4, A, 2, 2, 'th', 3),
            t.YNc(5, w, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, _, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & r)
        ) {
          const i = t.oxw();
          t.Q6J('ngClass', t.WLB(5, f, !i.isBordered, i.isStriped)),
            t.xp6(3),
            t.Q6J('ngIf', 1 == (null == i.checkbox ? null : i.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngIf', 0 == (null == i.checkbox ? null : i.checkbox.isAllSelectable)),
            t.xp6(1),
            t.Q6J('ngForOf', i.columns),
            t.xp6(2),
            t.Q6J('ngForOf', i.dataSource);
        }
      }
      const g = function (r) {
        return { 'responsive-scroll': r };
      };
      let x = (() => {
        class r {
          constructor(i, p) {
            (this.renderer = i),
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
            this.checkboxRef.map((i) => {
              this.inputCheckArr.push(i.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((i) => {
              if ('' === i.key || '' === i.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((i) => (i.value = i.value.trim())),
              (this.columns = this.columns.map(
                (i) => ((i.value = i.value.charAt(0).toUpperCase() + i.value.slice(1).toLowerCase()), i)
              )),
              this.columns.map((i) => {
                if (
                  i.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  i.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), i;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(i) {
            return this.sanitizer.bypassSecurityTrustHtml(i);
          }
          onHeaderCheckboxChange(i) {
            const p = i.target;
            if (p) {
              const C = p.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = C;
              }),
                (this.dataSelected = C ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(i, p) {
            if (p && p.target && 'boolean' == typeof p.target.checked) {
              if (p.target.checked) this.dataSelected.push(i);
              else {
                const T = this.dataSelected.findIndex((U) => U === i);
                -1 !== T && this.dataSelected.splice(T, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (r.ɵfac = function (i) {
            return new (i || r)(t.Y36(t.Qsj), t.Y36(s.H7));
          }),
          (r.ɵcmp = t.Xpm({
            type: r,
            selectors: [['o-table']],
            viewQuery: function (i, p) {
              if ((1 & i && t.Gf(h, 5), 2 & i)) {
                let C;
                t.iGM((C = t.CRH())) && (p.checkboxRef = C);
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
            template: function (i, p) {
              1 & i && (t.TgZ(0, 'div', 0), t.YNc(1, d, 8, 8, 'table', 1), t.qZA()),
                2 & i &&
                  (t.Tol(p.customClasses),
                  t.Q6J('ngClass', t.VKq(4, g, p.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', p.isValidateComponent));
            },
            dependencies: [e.mk, e.sg, e.O5]
          })),
          r
        );
      })();
    },
    2089: (F, Z, l) => {
      l.d(Z, { Z: () => e });
      var t = l(9808),
        s = l(4893);
      let e = (() => {
        class h {}
        return (
          (h.ɵfac = function (A) {
            return new (A || h)();
          }),
          (h.ɵmod = s.oAB({ type: h })),
          (h.ɵinj = s.cJS({ imports: [t.ez] })),
          h
        );
      })();
    },
    4948: (F, Z, l) => {
      l.d(Z, { B: () => v });
      var t = l(9808),
        s = l(4893);
      function e(_, f) {
        if (1 & _) {
          const d = s.EpF();
          s.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            s.NdJ('click', function () {
              s.CHM(d);
              const x = s.oxw();
              return s.KtG((x.isWindowHTML = !0));
            }),
            s._uU(4, 'HTML'),
            s.qZA()(),
            s.TgZ(5, 'li', 12)(6, 'a', 14),
            s.NdJ('click', function () {
              s.CHM(d);
              const x = s.oxw();
              return s.KtG((x.isWindowHTML = !1));
            }),
            s._uU(7, 'TS'),
            s.qZA()()()();
        }
        if (2 & _) {
          const d = s.oxw();
          s.xp6(3), s.ekj('active', d.isWindowHTML), s.xp6(3), s.ekj('active', !d.isWindowHTML);
        }
      }
      function h(_, f) {
        1 & _ && (s.ynx(0), s.Hsn(1), s.BQk());
      }
      function b(_, f) {
        1 & _ && (s.ynx(0), s.Hsn(1, 1), s.BQk());
      }
      function A(_, f) {
        if ((1 & _ && s.YNc(0, b, 2, 0, 'ng-container', 7), 2 & _)) {
          const d = s.oxw(),
            g = s.MAs(16);
          s.Q6J('ngIf', d.isWindowHTML)('ngIfElse', g);
        }
      }
      function w(_, f) {
        1 & _ && s.Hsn(0, 2);
      }
      const k = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        O = ['[component]', '[component-html]', '[component-ts]'];
      let v = (() => {
        class _ {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (_.ɵfac = function (d) {
            return new (d || _)();
          }),
          (_.ɵcmp = s.Xpm({
            type: _,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [s.jDz],
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
            template: function (d, g) {
              if (
                (1 & d &&
                  (s.F$t(k),
                  s.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  s._uU(3),
                  s.qZA(),
                  s.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  s.NdJ('click', function () {
                    return (g.isOpenCode = !g.isOpenCode);
                  }),
                  s.TgZ(8, 'span'),
                  s._uU(9),
                  s.qZA()()()()()(),
                  s.TgZ(10, 'div', 5),
                  s.YNc(11, e, 8, 4, 'nav', 6),
                  s.YNc(12, h, 2, 0, 'ng-container', 7),
                  s.YNc(13, A, 1, 2, 'ng-template', null, 8, s.W1O),
                  s.YNc(15, w, 1, 0, 'ng-template', null, 9, s.W1O),
                  s.qZA()()),
                2 & d)
              ) {
                const x = s.MAs(14);
                s.xp6(3),
                  s.Oqu(g.title),
                  s.xp6(4),
                  s.ekj('active', g.isOpenCode),
                  s.xp6(2),
                  s.Oqu(g.linkCode),
                  s.xp6(2),
                  s.Q6J('ngIf', g.isOpenCode && g.isNavCode),
                  s.xp6(1),
                  s.Q6J('ngIf', !g.isOpenCode)('ngIfElse', x);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          _
        );
      })();
    },
    8652: (F, Z, l) => {
      l.r(Z), l.d(Z, { FooterModule: () => te });
      var t = l(9808),
        s = l(1998),
        e = l(4893);
      function h(n, a) {
        if (
          (1 & n &&
            (e.TgZ(0, 'div', 5)(1, 'div', 6)(2, 'h3', 7), e._uU(3), e.qZA(), e.TgZ(4, 'div', 8), e.Hsn(5), e.qZA()()()),
          2 & n)
        ) {
          const o = e.oxw();
          e.Q6J('ngClass', o.customClassesIndicator), e.xp6(3), e.Oqu(o.indicatorText);
        }
      }
      function b(n, a) {
        if ((1 & n && (e.TgZ(0, 'li', 21)(1, 'a', 22), e._uU(2), e.qZA()()), 2 & n)) {
          const o = a.$implicit;
          e.xp6(1), e.Q6J('href', 'tel:' + o.number, e.LSH), e.xp6(1), e.Oqu(o.title);
        }
      }
      function A(n, a) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, 'h3'),
            e._uU(2, 'Tel\xe9fonos \xfatiles'),
            e.qZA(),
            e.TgZ(3, 'ul', 18),
            e.YNc(4, b, 3, 2, 'li', 19),
            e.qZA(),
            e.TgZ(5, 'a', 20),
            e._uU(6, ' Ver todos los tel\xe9fonos '),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = e.oxw(3);
          e.xp6(4), e.Q6J('ngForOf', o.phoneCustomItems);
        }
      }
      function w(n, a) {
        if ((1 & n && e._UZ(0, 'p', 26), 2 & n)) {
          const o = e.oxw(4);
          e.Q6J('innerHTML', o.phoneCustomContent.content, e.oJD);
        }
      }
      function k(n, a) {
        1 & n && e._UZ(0, 'p', 26), 2 & n && e.Q6J('innerHTML', a.$implicit, e.oJD);
      }
      function O(n, a) {
        if ((1 & n && e.YNc(0, k, 1, 1, 'p', 27), 2 & n)) {
          const o = e.oxw(4);
          e.Q6J('ngForOf', o.phoneContentArray);
        }
      }
      function v(n, a) {
        if (
          (1 & n &&
            (e.ynx(0),
            e._UZ(1, 'h3', 23),
            e.YNc(2, w, 1, 1, 'p', 24),
            e.YNc(3, O, 1, 1, 'ng-template', null, 25, e.W1O),
            e.BQk()),
          2 & n)
        ) {
          const o = e.MAs(4),
            c = e.oxw(3);
          e.xp6(1),
            e.Q6J('innerHTML', c.phoneCustomContent.title, e.oJD),
            e.xp6(1),
            e.Q6J('ngIf', !c.isPhoneContentArray)('ngIfElse', o);
        }
      }
      function _(n, a) {
        if (
          (1 & n &&
            (e.TgZ(0, 'section'), e.YNc(1, A, 7, 1, 'ng-container', 3), e.YNc(2, v, 5, 3, 'ng-container', 3), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', !o.phoneCustomContent), e.xp6(1), e.Q6J('ngIf', o.phoneCustomContent);
        }
      }
      function f(n, a) {
        if ((1 & n && (e.TgZ(0, 'li', 29)(1, 'a', 30), e._UZ(2, 'i'), e._uU(3), e.qZA()()), 2 & n)) {
          const o = a.$implicit;
          e.xp6(1), e.Q6J('href', o.src, e.LSH), e.xp6(1), e.Gre('bx ', o.icon, ''), e.xp6(1), e.Oqu(o.title);
        }
      }
      function d(n, a) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, 'h3'),
            e._uU(2, 'Redes de la ciudad'),
            e.qZA(),
            e.TgZ(3, 'ul', 18),
            e.YNc(4, f, 4, 5, 'li', 28),
            e.qZA(),
            e.BQk()),
          2 & n)
        ) {
          const o = e.oxw(3);
          e.xp6(4), e.Q6J('ngForOf', o.networkCustomItems);
        }
      }
      function g(n, a) {
        if ((1 & n && e._UZ(0, 'p', 26), 2 & n)) {
          const o = e.oxw(4);
          e.Q6J('innerHTML', o.networkCustomContent.content, e.oJD);
        }
      }
      function x(n, a) {
        1 & n && e._UZ(0, 'p', 26), 2 & n && e.Q6J('innerHTML', a.$implicit, e.oJD);
      }
      function r(n, a) {
        if ((1 & n && e.YNc(0, x, 1, 1, 'p', 27), 2 & n)) {
          const o = e.oxw(4);
          e.Q6J('ngForOf', o.networkContentArray);
        }
      }
      function m(n, a) {
        if (
          (1 & n &&
            (e.ynx(0),
            e._UZ(1, 'h3', 23),
            e.YNc(2, g, 1, 1, 'p', 24),
            e.YNc(3, r, 1, 1, 'ng-template', null, 25, e.W1O),
            e.BQk()),
          2 & n)
        ) {
          const o = e.MAs(4),
            c = e.oxw(3);
          e.xp6(1),
            e.Q6J('innerHTML', c.networkCustomContent.title, e.oJD),
            e.xp6(1),
            e.Q6J('ngIf', !c.isNetworkContentArray)('ngIfElse', o);
        }
      }
      function i(n, a) {
        if (
          (1 & n &&
            (e.TgZ(0, 'section'), e.YNc(1, d, 5, 1, 'ng-container', 3), e.YNc(2, m, 5, 3, 'ng-container', 3), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', !o.networkCustomContent), e.xp6(1), e.Q6J('ngIf', o.networkCustomContent);
        }
      }
      function p(n, a) {
        1 & n && e._UZ(0, 'hr', 31);
      }
      function C(n, a) {
        if ((1 & n && (e.TgZ(0, 'li', 34)(1, 'a', 22), e._uU(2), e.qZA()()), 2 & n)) {
          const o = a.$implicit;
          e.xp6(1), e.Q6J('href', o.src, e.LSH), e.xp6(1), e.Oqu(o.title);
        }
      }
      function T(n, a) {
        if ((1 & n && (e.ynx(0), e.TgZ(1, 'ul', 18), e.YNc(2, C, 3, 2, 'li', 33), e.qZA(), e.BQk()), 2 & n)) {
          const o = e.oxw(3);
          e.xp6(2), e.Q6J('ngForOf', o.linkCustomItems);
        }
      }
      function U(n, a) {
        if ((1 & n && e._UZ(0, 'p', 26), 2 & n)) {
          const o = e.oxw(4);
          e.Q6J('innerHTML', o.linkCustomContent.content, e.oJD);
        }
      }
      function y(n, a) {
        1 & n && e._UZ(0, 'p', 26), 2 & n && e.Q6J('innerHTML', a.$implicit, e.oJD);
      }
      function L(n, a) {
        if ((1 & n && e.YNc(0, y, 1, 1, 'p', 27), 2 & n)) {
          const o = e.oxw(4);
          e.Q6J('ngForOf', o.linkContentArray);
        }
      }
      function J(n, a) {
        if (
          (1 & n &&
            (e.ynx(0),
            e._UZ(1, 'h3', 23),
            e.YNc(2, U, 1, 1, 'p', 24),
            e.YNc(3, L, 1, 1, 'ng-template', null, 25, e.W1O),
            e.BQk()),
          2 & n)
        ) {
          const o = e.MAs(4),
            c = e.oxw(3);
          e.xp6(1),
            e.Q6J('innerHTML', c.linkCustomContent.title, e.oJD),
            e.xp6(1),
            e.Q6J('ngIf', !c.isLinkContentArray)('ngIfElse', o);
        }
      }
      function Q(n, a) {
        if (
          (1 & n &&
            (e.TgZ(0, 'div', 32), e.YNc(1, T, 3, 1, 'ng-container', 3), e.YNc(2, J, 5, 3, 'ng-container', 3), e.qZA()),
          2 & n)
        ) {
          const o = e.oxw(2);
          e.xp6(1), e.Q6J('ngIf', !o.linkCustomContent), e.xp6(1), e.Q6J('ngIf', o.linkCustomContent);
        }
      }
      function H(n, a) {
        if (
          (1 & n &&
            (e.ynx(0),
            e.TgZ(1, 'div', 6),
            e.YNc(2, _, 3, 2, 'section', 3),
            e.YNc(3, i, 3, 2, 'section', 3),
            e.qZA(),
            e.YNc(4, p, 1, 0, 'hr', 9),
            e.TgZ(5, 'div', 6)(6, 'section', 10)(7, 'h3', 0),
            e._uU(8, 'Informaci\xf3n gubernamental'),
            e.qZA(),
            e.TgZ(9, 'div', 11)(10, 'div', 12),
            e._UZ(11, 'img', 13)(12, 'img', 14)(13, 'img', 15),
            e.qZA(),
            e.YNc(14, Q, 3, 2, 'div', 16),
            e.qZA()(),
            e.TgZ(15, 'section')(16, 'div', 17),
            e._uU(
              17,
              ' Los contenidos de buenosaires.gob.ar est\xe1n licenciados bajo Creative Commons Reconocimiento 2.5 Argentina License. '
            ),
            e.qZA()()(),
            e.BQk()),
          2 & n)
        ) {
          const o = e.oxw();
          e.xp6(2),
            e.Q6J('ngIf', !o.isPhoneSectionHidden),
            e.xp6(1),
            e.Q6J('ngIf', !o.isNetworkSectionHidden),
            e.xp6(1),
            e.Q6J('ngIf', !o.isPhoneSectionHidden || !o.isNetworkSectionHidden),
            e.xp6(10),
            e.Q6J('ngIf', !o.isLinkSectionHideen);
        }
      }
      function N(n, a) {
        if ((1 & n && e.GkF(0, 35), 2 & n)) {
          const o = e.oxw();
          e.Q6J('ngTemplateOutlet', o.oCustomContent.template);
        }
      }
      const P = ['*'],
        E = [
          { title: '102 - Ni\xf1ez y Adolescencia', number: 102 },
          { title: '103 - Emergencias', number: 103 },
          { title: '107 - SAME', number: 107 },
          { title: '911 - Polic\xeda', number: 911 },
          { title: '144 - Violencia de g\xe9nero', number: 144 },
          { title: '147 - Atenci\xf3n ciudadana', number: 147 }
        ],
        B = [
          { title: 'Facebook', src: 'https://www.facebook.com/GCBA', icon: 'bx bxl-facebook-circle' },
          { title: 'Instagram', src: 'https://www.instagram.com/gcba/', icon: 'bx bxl-instagram-alt' },
          { title: 'Twitter', src: 'https://twitter.com/buenosaires', icon: 'bxl-twitter' },
          { title: 'YouTube', src: 'https://www.youtube.com/user/GCBA', icon: 'bxl-youtube' },
          {
            title: 'LinkedIn',
            src: 'https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires',
            icon: 'bx bxl-linkedin-square'
          },
          { title: 'TikTok', src: 'https://www.tiktok.com/@buenosaires', icon: 'bx bxl-tiktok' },
          { title: 'Pinterest', src: 'https://www.pinterest.es/buenosaires/', icon: 'bx bxl-pinterest' }
        ],
        Y = [
          { title: 'Bolet\xedn oficial', src: 'https://boletinoficial.buenosaires.gob.ar' },
          { title: 'T\xe9rminos y condiciones', src: 'https://buenosaires.gob.ar/terminos-y-condiciones' },
          { title: 'Pol\xedtica de privacidad', src: 'https://buenosaires.gob.ar/privacidad' },
          {
            title: 'Oficios judiciales',
            src: 'https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales'
          },
          { title: 'Transparencia', src: 'https://buenosaires.gob.ar/gobierno/transparencia' }
        ];
      let D = (() => {
        class n {
          constructor() {
            (this.phoneCustomItems = E),
              (this.networkCustomItems = B),
              (this.linkCustomItems = Y),
              (this.isPhoneSectionHidden = !1),
              (this.isNetworkSectionHidden = !1),
              (this.isLinkSectionHideen = !1),
              (this.customClasses = ''),
              (this.customClassesIndicator = '');
          }
          get isPhoneContentArray() {
            return Array.isArray(this.phoneCustomContent.content);
          }
          get phoneContentArray() {
            return Array.isArray(this.phoneCustomContent.content) ? this.phoneCustomContent.content : [];
          }
          get isNetworkContentArray() {
            return Array.isArray(this.networkCustomContent.content);
          }
          get networkContentArray() {
            return Array.isArray(this.networkCustomContent.content) ? this.networkCustomContent.content : [];
          }
          get isLinkContentArray() {
            return Array.isArray(this.linkCustomContent.content);
          }
          get linkContentArray() {
            return Array.isArray(this.linkCustomContent.content) ? this.linkCustomContent.content : [];
          }
        }
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['o-footer']],
            contentQueries: function (o, c, ne) {
              if ((1 & o && e.Suo(ne, s.X, 7), 2 & o)) {
                let S;
                e.iGM((S = e.CRH())) && (c.oCustomContent = S.first);
              }
            },
            inputs: {
              phoneCustomItems: 'phoneCustomItems',
              networkCustomItems: 'networkCustomItems',
              linkCustomItems: 'linkCustomItems',
              isPhoneSectionHidden: 'isPhoneSectionHidden',
              isNetworkSectionHidden: 'isNetworkSectionHidden',
              isLinkSectionHideen: 'isLinkSectionHideen',
              phoneCustomContent: 'phoneCustomContent',
              networkCustomContent: 'networkCustomContent',
              linkCustomContent: 'linkCustomContent',
              indicatorText: 'indicatorText',
              customClasses: 'customClasses',
              customClassesIndicator: 'customClassesIndicator'
            },
            ngContentSelectors: P,
            decls: 6,
            vars: 4,
            consts: [
              [1, 'sr-only'],
              ['class', 'footer-info', 3, 'ngClass', 4, 'ngIf'],
              [1, 'main-footer', 3, 'ngClass'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'footer-info', 3, 'ngClass'],
              [1, 'container'],
              [1, 'footer-info-text'],
              [1, 'footer-info-actions'],
              ['class', 'divider', 4, 'ngIf'],
              [1, 'footer-legal-section'],
              [1, 'row', 'align-items-center'],
              [1, 'col-12', 'col-md-5', 'col-xl-4', 'footer-content-img'],
              [
                'oDefaultImage',
                '',
                'src',
                'https://raw.githubusercontent.com/gcba/Obelisco/8e3c51245a98c0c2c5fed1e43e20d53fa135e98d/static/footer/ciudad-ba-sm.svg',
                'alt',
                'Logo de Ciudad de Buenos Aires',
                'height',
                '48',
                1,
                'd-lg-none'
              ],
              [
                'oDefaultImage',
                '',
                'src',
                'https://raw.githubusercontent.com/gcba/Obelisco/8e3c51245a98c0c2c5fed1e43e20d53fa135e98d/static/footer/ciudad-ba.svg',
                'alt',
                'Logo de Ciudad de Buenos Aires',
                'height',
                '40',
                1,
                'd-none',
                'd-lg-inline'
              ],
              [
                'oDefaultImage',
                '',
                'src',
                'https://raw.githubusercontent.com/gcba/Obelisco/8e3c51245a98c0c2c5fed1e43e20d53fa135e98d/static/footer/vamos-ba.svg',
                'alt',
                'Logo de Vamos Buenos Aires',
                1,
                'img-vamos-ba'
              ],
              ['class', 'col-12', 4, 'ngIf'],
              [1, 'footer-license-text'],
              [1, 'list-inline'],
              ['class', 'list-inline-item phone-items', 4, 'ngFor', 'ngForOf'],
              ['href', 'https://www.buenosaires.gob.ar/laciudad/telefonosutiles'],
              [1, 'list-inline-item', 'phone-items'],
              [3, 'href'],
              [3, 'innerHTML'],
              ['class', 'mb-0', 3, 'innerHTML', 4, 'ngIf', 'ngIfElse'],
              ['isAarray', ''],
              [1, 'mb-0', 3, 'innerHTML'],
              ['class', 'mb-0', 3, 'innerHTML', 4, 'ngFor', 'ngForOf'],
              ['class', 'list-inline-item redes-items', 4, 'ngFor', 'ngForOf'],
              [1, 'list-inline-item', 'redes-items'],
              ['target', '_blank', 3, 'href'],
              [1, 'divider'],
              [1, 'col-12'],
              ['class', 'list-inline-item', 4, 'ngFor', 'ngForOf'],
              [1, 'list-inline-item'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (o, c) {
              1 & o &&
                (e.F$t(),
                e.TgZ(0, 'h2', 0),
                e._uU(1, 'Navegaci\xf3n de pie de p\xe1gina'),
                e.qZA(),
                e.YNc(2, h, 6, 2, 'div', 1),
                e.TgZ(3, 'footer', 2),
                e.YNc(4, H, 18, 4, 'ng-container', 3),
                e.YNc(5, N, 1, 1, 'ng-container', 4),
                e.qZA()),
                2 & o &&
                  (e.xp6(2),
                  e.Q6J('ngIf', c.indicatorText),
                  e.xp6(1),
                  e.Q6J('ngClass', c.customClasses),
                  e.xp6(1),
                  e.Q6J('ngIf', !c.oCustomContent),
                  e.xp6(1),
                  e.Q6J('ngIf', c.oCustomContent));
            },
            dependencies: [t.mk, t.sg, t.O5, t.tP]
          })),
          n
        );
      })();
      var I = l(2526);
      let V = (() => {
        class n {}
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [t.ez, I.Bz] })),
          n
        );
      })();
      var W = l(7538),
        R = l(2089),
        M = l(4948),
        u = l(642),
        j = l(5570),
        z = l(4883),
        q = l(6434);
      let K = (() => {
        class n {
          constructor() {
            (this.dataSource = u.KH),
              (this.columns = j.L0),
              (this.exampleIterfacePhone = u.TP),
              (this.exampleIterfaceNetwork = u.EB),
              (this.exampleIterfaceLink = u.nS),
              (this.exampleIterfaceCustomContent = u.l2),
              (this.dataSourceFooterPhoneInterface = u.ZB),
              (this.dataSourceFooterNetworkInterface = u.$f),
              (this.dataSourceFooterLinkListInterface = u.Ud),
              (this.dataSourceFooterCustomContentInterface = u.f2);
          }
        }
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['app-footer-api']],
            decls: 106,
            vars: 24,
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
                "import { OFooterModule } from 'ngx-obelisco-example/footer';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript']
            ],
            template: function (o, c) {
              1 & o &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Footer de Obelisco'),
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
                e._uU(13, 'OFooter'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-footer'),
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
                e._uU(27, 'Phone'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'phoneCustomList'),
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
                e._uU(46, 'Network'),
                e.qZA(),
                e.TgZ(47, 'p'),
                e._uU(48, 'Permite establecer los valores de la propiedad '),
                e.TgZ(49, 'strong'),
                e._uU(50, 'networkCustomList'),
                e.qZA(),
                e._uU(51, '.'),
                e.qZA(),
                e.TgZ(52, 'div', 8)(53, 'pre', 2),
                e._uU(54, '        '),
                e.TgZ(55, 'code', 9),
                e._uU(56),
                e.qZA(),
                e._uU(57, '\n      '),
                e.qZA(),
                e.TgZ(58, 'div', 5)(59, 'h5'),
                e._uU(60, 'Propiedades'),
                e.qZA(),
                e._UZ(61, 'o-table', 6),
                e.qZA()()(),
                e._UZ(62, 'br'),
                e.TgZ(63, 'div', 7)(64, 'h4'),
                e._uU(65, 'Link'),
                e.qZA(),
                e.TgZ(66, 'p'),
                e._uU(67, 'Permite establecer los valores de la propiedad '),
                e.TgZ(68, 'strong'),
                e._uU(69, 'linkCustomList'),
                e.qZA(),
                e._uU(70, '.'),
                e.qZA(),
                e.TgZ(71, 'div', 8)(72, 'pre', 2),
                e._uU(73, '        '),
                e.TgZ(74, 'code', 9),
                e._uU(75),
                e.qZA(),
                e._uU(76, '\n      '),
                e.qZA(),
                e.TgZ(77, 'div', 5)(78, 'h5'),
                e._uU(79, 'Propiedades'),
                e.qZA(),
                e._UZ(80, 'o-table', 6),
                e.qZA()()(),
                e._UZ(81, 'br'),
                e.TgZ(82, 'div', 7)(83, 'h4'),
                e._uU(84, 'CustomContent'),
                e.qZA(),
                e.TgZ(85, 'p'),
                e._uU(86, ' Permite establecer los valores de la propiedad '),
                e.TgZ(87, 'strong'),
                e._uU(88, 'phoneCustomContent'),
                e.qZA(),
                e._uU(89, ', '),
                e.TgZ(90, 'strong'),
                e._uU(91, 'networkCustomContent'),
                e.qZA(),
                e._uU(92, ', '),
                e.TgZ(93, 'strong'),
                e._uU(94, 'linkCustomContent'),
                e.qZA(),
                e._uU(95, '. '),
                e.qZA(),
                e.TgZ(96, 'div', 8)(97, 'pre', 2),
                e._uU(98, '        '),
                e.TgZ(99, 'code', 9),
                e._uU(100),
                e.qZA(),
                e._uU(101, '\n      '),
                e.qZA(),
                e.TgZ(102, 'div', 5)(103, 'h5'),
                e._uU(104, 'Propiedades'),
                e.qZA(),
                e._UZ(105, 'o-table', 6),
                e.qZA()()()()),
                2 & o &&
                  (e.xp6(21),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSource)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(c.exampleIterfacePhone),
                  e.xp6(5),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSourceFooterPhoneInterface)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(14),
                  e.Oqu(c.exampleIterfaceNetwork),
                  e.xp6(5),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSourceFooterNetworkInterface)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(14),
                  e.Oqu(c.exampleIterfaceLink),
                  e.xp6(5),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSourceFooterLinkListInterface)('isStriped', !0)(
                    'isBordered',
                    !0
                  ),
                  e.xp6(20),
                  e.Oqu(c.exampleIterfaceCustomContent),
                  e.xp6(5),
                  e.Q6J('columns', c.columns)('dataSource', c.dataSourceFooterCustomContentInterface)('isStriped', !0)(
                    'isBordered',
                    !0
                  ));
            },
            dependencies: [z.L, q.y]
          })),
          n
        );
      })();
      var $ = l(2171);
      const G = [
        { path: 'api', component: K },
        {
          path: 'examples',
          component: (() => {
            class n {
              constructor() {
                (this.phoneCustomList = u.Qc),
                  (this.networkCustomList = u.O),
                  (this.linkCustomList = u.EJ),
                  (this.exampleLinksHTML = u.KX),
                  (this.exampleAllHTML = u.U8),
                  (this.exampleIndicatorHTML = u.KQ),
                  (this.exampleCustomListHTML = u.dG),
                  (this.exampleCustomContentHTML = u.Wh),
                  (this.exampleCustomListTS = u.NQ),
                  (this.exampleCustomCustomTS = u.o6),
                  (this.phoneCustomContent = u.Bn),
                  (this.networkCustomContent = u.Ui),
                  (this.linkCustomContent = u.zw);
              }
            }
            return (
              (n.ɵfac = function (o) {
                return new (o || n)();
              }),
              (n.ɵcmp = e.Xpm({
                type: n,
                selectors: [['app-footer-examples']],
                decls: 71,
                vars: 18,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Solo legales'],
                  ['component', '', 3, 'isPhoneSectionHidden', 'isNetworkSectionHidden'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['title', 'Completo'],
                  ['component', ''],
                  ['title', 'Con indicador'],
                  ['component', '', 'indicatorText', '\xbfTe fue \xfatil esta p\xe1gina?', 3, 'isPhoneSectionHidden'],
                  [1, 'btn', 'btn-primary'],
                  [1, 'btn', 'btn-secondary'],
                  ['title', 'Con listas personalizables', 3, 'isNavCode'],
                  ['component', '', 3, 'phoneCustomItems', 'networkCustomItems', 'linkCustomItems'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript'],
                  ['title', 'Contenido personalizado', 3, 'isNavCode'],
                  ['component', '', 3, 'phoneCustomContent', 'networkCustomContent', 'linkCustomContent']
                ],
                template: function (o, c) {
                  1 & o &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1),
                    e._UZ(2, 'o-footer', 2),
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
                    e.TgZ(11, 'app-viewer', 6),
                    e._UZ(12, 'o-footer', 7),
                    e.TgZ(13, 'pre', 3),
                    e._uU(14, '      '),
                    e.TgZ(15, 'button', 4),
                    e._uU(16, 'Copiar'),
                    e.qZA(),
                    e._uU(17, '\n      '),
                    e.TgZ(18, 'code', 5),
                    e._uU(19),
                    e.qZA(),
                    e._uU(20, '\n    '),
                    e.qZA()(),
                    e.TgZ(21, 'app-viewer', 8)(22, 'o-footer', 9)(23, 'button', 10),
                    e._uU(24, 'S\xed, me fue \xfatil'),
                    e.qZA(),
                    e.TgZ(25, 'button', 11),
                    e._uU(26, 'No me sirvi\xf3'),
                    e.qZA()(),
                    e.TgZ(27, 'pre', 3),
                    e._uU(28, '      '),
                    e.TgZ(29, 'button', 4),
                    e._uU(30, 'Copiar'),
                    e.qZA(),
                    e._uU(31, '\n      '),
                    e.TgZ(32, 'code', 5),
                    e._uU(33),
                    e.qZA(),
                    e._uU(34, '\n    '),
                    e.qZA()(),
                    e.TgZ(35, 'app-viewer', 12),
                    e._UZ(36, 'o-footer', 13),
                    e.TgZ(37, 'pre', 3),
                    e._uU(38, '      '),
                    e.TgZ(39, 'button', 4),
                    e._uU(40, 'Copiar'),
                    e.qZA(),
                    e._uU(41, '\n      '),
                    e.TgZ(42, 'code', 5),
                    e._uU(43),
                    e.qZA(),
                    e._uU(44, '\n    '),
                    e.qZA(),
                    e.TgZ(45, 'pre', 14),
                    e._uU(46, '      '),
                    e.TgZ(47, 'button', 4),
                    e._uU(48, 'Copiar'),
                    e.qZA(),
                    e._uU(49, '\n      '),
                    e.TgZ(50, 'code', 15),
                    e._uU(51),
                    e.qZA(),
                    e._uU(52, '\n    '),
                    e.qZA()(),
                    e.TgZ(53, 'app-viewer', 16),
                    e._UZ(54, 'o-footer', 17),
                    e.TgZ(55, 'pre', 3),
                    e._uU(56, '      '),
                    e.TgZ(57, 'button', 4),
                    e._uU(58, 'Copiar'),
                    e.qZA(),
                    e._uU(59, '\n      '),
                    e.TgZ(60, 'code', 5),
                    e._uU(61),
                    e.qZA(),
                    e._uU(62, '\n    '),
                    e.qZA(),
                    e.TgZ(63, 'pre', 14),
                    e._uU(64, '      '),
                    e.TgZ(65, 'button', 4),
                    e._uU(66, 'Copiar'),
                    e.qZA(),
                    e._uU(67, '\n      '),
                    e.TgZ(68, 'code', 15),
                    e._uU(69),
                    e.qZA(),
                    e._uU(70, '\n    '),
                    e.qZA()()()),
                    2 & o &&
                      (e.xp6(2),
                      e.Q6J('isPhoneSectionHidden', !0)('isNetworkSectionHidden', !0),
                      e.xp6(7),
                      e.Oqu(c.exampleLinksHTML),
                      e.xp6(10),
                      e.Oqu(c.exampleAllHTML),
                      e.xp6(3),
                      e.Q6J('isPhoneSectionHidden', !0),
                      e.xp6(11),
                      e.Oqu(c.exampleIndicatorHTML),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('phoneCustomItems', c.phoneCustomList)('networkCustomItems', c.networkCustomList)(
                        'linkCustomItems',
                        c.linkCustomList
                      ),
                      e.xp6(7),
                      e.Oqu(c.exampleCustomListHTML),
                      e.xp6(8),
                      e.Oqu(c.exampleCustomListTS),
                      e.xp6(2),
                      e.Q6J('isNavCode', !0),
                      e.xp6(1),
                      e.Q6J('phoneCustomContent', c.phoneCustomContent)('networkCustomContent', c.networkCustomContent)(
                        'linkCustomContent',
                        c.linkCustomContent
                      ),
                      e.xp6(7),
                      e.Oqu(c.exampleCustomContentHTML),
                      e.xp6(8),
                      e.Oqu(c.exampleCustomCustomTS));
                },
                dependencies: [D, M.B, $.y, q.y]
              })),
              n
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let X = (() => {
        class n {}
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [I.Bz.forChild(G), I.Bz] })),
          n
        );
      })();
      var ee = l(9384);
      let te = (() => {
        class n {}
        return (
          (n.ɵfac = function (o) {
            return new (o || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [t.ez, X, W.Z, R.Z, V, M.B, ee.T] })),
          n
        );
      })();
    }
  }
]);
