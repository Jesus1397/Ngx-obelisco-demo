'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [7236],
  {
    4883: (U, M, c) => {
      c.d(M, { L: () => x });
      var t = c(4893),
        o = c(2313),
        b = c(9808);
      const h = ['checkbox'];
      function v(s, m) {
        if (1 & s) {
          const n = t.EpF();
          t.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            t.NdJ('change', function (g) {
              t.CHM(n);
              const T = t.oxw(2);
              return t.KtG(T.onHeaderCheckboxChange(g));
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
      function O(s, m) {
        if ((1 & s && (t.TgZ(0, 'th', 5), t._uU(1), t.qZA()), 2 & s)) {
          const n = t.oxw(2);
          t.Q6J('ngClass', n.checkbox.customClassesTh), t.xp6(1), t.hij(' ', n.checkbox.title, ' ');
        }
      }
      function Z(s, m) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'th', 5), t._uU(2), t.qZA(), t.BQk()), 2 & s)) {
          const n = m.$implicit;
          t.xp6(1), t.Q6J('ngClass', n.customClasses), t.xp6(1), t.Oqu(n.value);
        }
      }
      function w(s, m) {
        if (1 & s) {
          const n = t.EpF();
          t.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            t.NdJ('change', function (g) {
              t.CHM(n);
              const T = t.oxw().$implicit,
                A = t.oxw(2);
              return t.KtG(A.onCheckboxChange(T, g));
            }),
            t.qZA(),
            t._UZ(4, 'label', 11),
            t.qZA()();
        }
        if (2 & s) {
          const n = t.oxw().index,
            l = t.oxw(2);
          t.xp6(2),
            t.hYB('id', '', l.id, '-checkbox_', n, '')('name', '', l.id, '-checkbox_', n, ''),
            t.xp6(2),
            t.hYB('for', '', l.id, '-checkbox_', n, '');
        }
      }
      function C(s, m) {
        if ((1 & s && t._UZ(0, 'div', 14), 2 & s)) {
          const n = t.oxw().$implicit,
            l = t.oxw().$implicit,
            g = t.oxw(2);
          t.Q6J('innerHTML', g.sanitizeHTML(l[n.key].data), t.oJD);
        }
      }
      function e(s, m) {
        if ((1 & s && (t.ynx(0), t.TgZ(1, 'td', 12), t.YNc(2, C, 1, 1, 'div', 13), t.qZA(), t.BQk()), 2 & s)) {
          const n = m.$implicit,
            l = t.oxw().$implicit;
          t.xp6(1), t.Q6J('ngClass', l[n.key].customClasses), t.xp6(1), t.Q6J('ngIf', l[n.key].data);
        }
      }
      function r(s, m) {
        if (
          (1 & s && (t.TgZ(0, 'tr'), t.YNc(1, w, 5, 6, 'td', 9), t.YNc(2, e, 3, 2, 'ng-container', 4), t.qZA()), 2 & s)
        ) {
          const n = t.oxw(2);
          t.xp6(1), t.Q6J('ngIf', n.checkbox), t.xp6(1), t.Q6J('ngForOf', n.columns);
        }
      }
      const f = function (s, m) {
        return { 'table-borderless': s, 'table-striped': m };
      };
      function d(s, m) {
        if (
          (1 & s &&
            (t.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            t.YNc(3, v, 5, 6, 'th', 3),
            t.YNc(4, O, 2, 2, 'th', 3),
            t.YNc(5, Z, 3, 2, 'ng-container', 4),
            t.qZA()(),
            t.TgZ(6, 'tbody'),
            t.YNc(7, r, 3, 2, 'tr', 4),
            t.qZA()()),
          2 & s)
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
      const u = function (s) {
        return { 'responsive-scroll': s };
      };
      let x = (() => {
        class s {
          constructor(n, l) {
            (this.renderer = n),
              (this.sanitizer = l),
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
            const l = n.target;
            if (l) {
              const g = l.checked;
              this.checkboxRef.toArray().forEach((T) => {
                T.nativeElement.checked = g;
              }),
                (this.dataSelected = g ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(n, l) {
            if (l && l.target && 'boolean' == typeof l.target.checked) {
              if (l.target.checked) this.dataSelected.push(n);
              else {
                const T = this.dataSelected.findIndex((A) => A === n);
                -1 !== T && this.dataSelected.splice(T, 1);
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
            viewQuery: function (n, l) {
              if ((1 & n && t.Gf(h, 5), 2 & n)) {
                let g;
                t.iGM((g = t.CRH())) && (l.checkboxRef = g);
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
            template: function (n, l) {
              1 & n && (t.TgZ(0, 'div', 0), t.YNc(1, d, 8, 8, 'table', 1), t.qZA()),
                2 & n &&
                  (t.Tol(l.customClasses),
                  t.Q6J('ngClass', t.VKq(4, u, l.isScrollable)),
                  t.xp6(1),
                  t.Q6J('ngIf', l.isValidateComponent));
            },
            dependencies: [b.mk, b.sg, b.O5]
          })),
          s
        );
      })();
    },
    2089: (U, M, c) => {
      c.d(M, { Z: () => b });
      var t = c(9808),
        o = c(4893);
      let b = (() => {
        class h {}
        return (
          (h.ɵfac = function (O) {
            return new (O || h)();
          }),
          (h.ɵmod = o.oAB({ type: h })),
          (h.ɵinj = o.cJS({ imports: [t.ez] })),
          h
        );
      })();
    },
    4948: (U, M, c) => {
      c.d(M, { B: () => e });
      var t = c(9808),
        o = c(4893);
      function b(r, f) {
        if (1 & r) {
          const d = o.EpF();
          o.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            o.NdJ('click', function () {
              o.CHM(d);
              const x = o.oxw();
              return o.KtG((x.isWindowHTML = !0));
            }),
            o._uU(4, 'HTML'),
            o.qZA()(),
            o.TgZ(5, 'li', 12)(6, 'a', 14),
            o.NdJ('click', function () {
              o.CHM(d);
              const x = o.oxw();
              return o.KtG((x.isWindowHTML = !1));
            }),
            o._uU(7, 'TS'),
            o.qZA()()()();
        }
        if (2 & r) {
          const d = o.oxw();
          o.xp6(3), o.ekj('active', d.isWindowHTML), o.xp6(3), o.ekj('active', !d.isWindowHTML);
        }
      }
      function h(r, f) {
        1 & r && (o.ynx(0), o.Hsn(1), o.BQk());
      }
      function v(r, f) {
        1 & r && (o.ynx(0), o.Hsn(1, 1), o.BQk());
      }
      function O(r, f) {
        if ((1 & r && o.YNc(0, v, 2, 0, 'ng-container', 7), 2 & r)) {
          const d = o.oxw(),
            u = o.MAs(16);
          o.Q6J('ngIf', d.isWindowHTML)('ngIfElse', u);
        }
      }
      function Z(r, f) {
        1 & r && o.Hsn(0, 2);
      }
      const w = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        C = ['[component]', '[component-html]', '[component-ts]'];
      let e = (() => {
        class r {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (r.ɵfac = function (d) {
            return new (d || r)();
          }),
          (r.ɵcmp = o.Xpm({
            type: r,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [o.jDz],
            ngContentSelectors: C,
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
            template: function (d, u) {
              if (
                (1 & d &&
                  (o.F$t(w),
                  o.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  o._uU(3),
                  o.qZA(),
                  o.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  o.NdJ('click', function () {
                    return (u.isOpenCode = !u.isOpenCode);
                  }),
                  o.TgZ(8, 'span'),
                  o._uU(9),
                  o.qZA()()()()()(),
                  o.TgZ(10, 'div', 5),
                  o.YNc(11, b, 8, 4, 'nav', 6),
                  o.YNc(12, h, 2, 0, 'ng-container', 7),
                  o.YNc(13, O, 1, 2, 'ng-template', null, 8, o.W1O),
                  o.YNc(15, Z, 1, 0, 'ng-template', null, 9, o.W1O),
                  o.qZA()()),
                2 & d)
              ) {
                const x = o.MAs(14);
                o.xp6(3),
                  o.Oqu(u.title),
                  o.xp6(4),
                  o.ekj('active', u.isOpenCode),
                  o.xp6(2),
                  o.Oqu(u.linkCode),
                  o.xp6(2),
                  o.Q6J('ngIf', u.isOpenCode && u.isNavCode),
                  o.xp6(1),
                  o.Q6J('ngIf', !u.isOpenCode)('ngIfElse', x);
              }
            },
            dependencies: [t.ez, t.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          r
        );
      })();
    },
    7236: (U, M, c) => {
      c.r(M), c.d(M, { MapModule: () => E });
      var t = c(9808),
        o = c(7538),
        b = c(2089),
        h = c(4948),
        v = c(9384),
        O = c(3717),
        Z = c(2526),
        w = c(5570),
        C = c(2766),
        e = c(4893),
        r = c(4883),
        f = c(6434);
      let d = (() => {
        class a {
          constructor() {
            (this.columns = w.L0), (this.map = C.b0), (this.interface = C.ld), (this.dataSourceInterface = C.fK);
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)();
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['app-map-api']],
            decls: 43,
            vars: 9,
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
                "import { OMapModule } from 'ngx-obelisco-example/map';"
              ],
              [1, 'section-selector'],
              [1, 'section-properties', 'mb-5'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '', 'language', 'javascript'],
              [1, 'section-properties'],
              [3, 'dataSource', 'columns', 'isBordered', 'isStriped']
            ],
            template: function (i, _) {
              1 & i &&
                (e.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                e._uU(3, 'Referencia de API para el componente Mapa de Obelisco'),
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
                e._uU(13, 'OMap'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15, 'Selector: '),
                e.TgZ(16, 'strong'),
                e._uU(17, 'o-map'),
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
                e._uU(27, 'MediaIframe'),
                e.qZA(),
                e.TgZ(28, 'p'),
                e._uU(29, 'Permite establecer los valores de la propiedad '),
                e.TgZ(30, 'strong'),
                e._uU(31, 'iframe'),
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
                e.TgZ(39, 'div', 10)(40, 'h5'),
                e._uU(41, 'Propiedades'),
                e.qZA(),
                e._UZ(42, 'o-table', 11),
                e.qZA()()()()),
                2 & i &&
                  (e.xp6(21),
                  e.Q6J('columns', _.columns)('dataSource', _.map)('isStriped', !0)('isBordered', !0),
                  e.xp6(16),
                  e.Oqu(_.interface),
                  e.xp6(5),
                  e.Q6J('dataSource', _.dataSourceInterface)('columns', _.columns)('isBordered', !0)('isStriped', !0));
            },
            dependencies: [r.L, f.y]
          })),
          a
        );
      })();
      var u = c(1998),
        x = c(2313);
      function s(a, p) {
        if ((1 & a && (e.TgZ(0, 'h2', 8), e._uU(1), e.qZA()), 2 & a)) {
          const i = e.oxw(2);
          e.xp6(1), e.Oqu(i.title);
        }
      }
      function m(a, p) {
        if ((1 & a && (e.TgZ(0, 'p', 9), e._uU(1), e.qZA()), 2 & a)) {
          const i = e.oxw(2);
          e.xp6(1), e.Oqu(i.description);
        }
      }
      function n(a, p) {
        if (
          (1 & a &&
            (e.ynx(0),
            e.YNc(1, s, 2, 1, 'h2', 4),
            e.YNc(2, m, 2, 1, 'p', 5),
            e.TgZ(3, 'div', 6),
            e._UZ(4, 'iframe', 7),
            e.qZA(),
            e.Hsn(5),
            e.BQk()),
          2 & a)
        ) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J('ngIf', i.title),
            e.xp6(1),
            e.Q6J('ngIf', i.description),
            e.xp6(2),
            e.Q6J('src', i.safeIframeUrl, e.uOi)('title', i.iframe.title || 'Mapa de como llegar');
        }
      }
      function l(a, p) {
        if ((1 & a && e.GkF(0, 10), 2 & a)) {
          const i = e.oxw();
          e.Q6J('ngTemplateOutlet', i.oCustomContent.template);
        }
      }
      const g = ['*'];
      let T = (() => {
        class a {
          constructor(i) {
            (this.sanitizer = i), (this.customClasses = '');
          }
          ngOnInit() {
            this.validateInputs(),
              (this.safeIframe = this.sanitizer.bypassSecurityTrustHtml(this.iframe.src ? this.iframe.src : '')),
              (this.safeIframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                this.iframe.src ? this.iframe.src : ''
              ));
          }
          validateInputs() {
            if (!this.title || !this.description || !this.iframe)
              throw new Error('Title, description, iframe, iframeTitle, and mapUrl are required.');
          }
        }
        return (
          (a.ɵfac = function (i) {
            return new (i || a)(e.Y36(x.H7));
          }),
          (a.ɵcmp = e.Xpm({
            type: a,
            selectors: [['o-map']],
            contentQueries: function (i, _, J) {
              if ((1 & i && e.Suo(J, u.X, 7), 2 & i)) {
                let y;
                e.iGM((y = e.CRH())) && (_.oCustomContent = y.first);
              }
            },
            inputs: { title: 'title', description: 'description', iframe: 'iframe', customClasses: 'customClasses' },
            ngContentSelectors: g,
            decls: 4,
            vars: 3,
            consts: [
              [1, 'card', 'card-map', 3, 'ngClass'],
              [1, 'card-body'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              ['class', 'card-title', 4, 'ngIf'],
              ['class', 'card-text', 4, 'ngIf'],
              [1, 'card-iframe'],
              [
                'frameborder',
                '0',
                'allow',
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                'allowfullscreen',
                '',
                'loading',
                'lazy',
                'tabindex',
                '-1',
                'referrerpolicy',
                'no-referrer-when-downgrade',
                2,
                'border',
                '0px',
                3,
                'src',
                'title'
              ],
              [1, 'card-title'],
              [1, 'card-text'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (i, _) {
              1 & i &&
                (e.F$t(),
                e.TgZ(0, 'div', 0)(1, 'div', 1),
                e.YNc(2, n, 6, 4, 'ng-container', 2),
                e.YNc(3, l, 1, 1, 'ng-container', 3),
                e.qZA()()),
                2 & i &&
                  (e.Q6J('ngClass', _.customClasses),
                  e.xp6(2),
                  e.Q6J('ngIf', !_.oCustomContent),
                  e.xp6(1),
                  e.Q6J('ngIf', _.oCustomContent));
            },
            dependencies: [t.mk, t.O5, t.tP]
          })),
          a
        );
      })();
      var A = c(2171),
        k = c(2200);
      const S = [
        { path: 'api', component: d },
        {
          path: 'examples',
          component: (() => {
            class a {
              constructor() {
                (this.mapHtml = C.z7), (this.mapTs = C.fN), (this.iframe = C.ub);
              }
            }
            return (
              (a.ɵfac = function (i) {
                return new (i || a)();
              }),
              (a.ɵcmp = e.Xpm({
                type: a,
                selectors: [['app-map-examples']],
                decls: 21,
                vars: 7,
                consts: [
                  [1, 'section-example'],
                  ['title', 'Horizontal con imagen', 3, 'isNavCode'],
                  ['component', '', 1, 'col-12', 'col-lg-6'],
                  [3, 'title', 'description', 'iframe'],
                  [
                    'text',
                    'C\xf3mo llego',
                    'link',
                    'https://mapa.buenosaires.gob.ar/comollego/?lat=-34.640340&lng=-58.407032&zl=15&modo=transporte&dir=Uspallata+3160',
                    'target',
                    '_blank',
                    'rel',
                    'noreferrer',
                    3,
                    'isExpandable'
                  ],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', '', 'language', 'javascript']
                ],
                template: function (i, _) {
                  1 & i &&
                    (e.TgZ(0, 'section', 0)(1, 'app-viewer', 1)(2, 'div', 2)(3, 'o-map', 3),
                    e._UZ(4, 'o-button', 4),
                    e.qZA()(),
                    e.TgZ(5, 'pre', 5),
                    e._uU(6, '      '),
                    e.TgZ(7, 'button', 6),
                    e._uU(8, 'Copiar'),
                    e.qZA(),
                    e._uU(9, '\n      '),
                    e.TgZ(10, 'code', 7),
                    e._uU(11),
                    e.qZA(),
                    e._uU(12, '\n    '),
                    e.qZA(),
                    e.TgZ(13, 'pre', 8),
                    e._uU(14, '      '),
                    e.TgZ(15, 'button', 6),
                    e._uU(16, 'Copiar'),
                    e.qZA(),
                    e._uU(17, '\n      '),
                    e.TgZ(18, 'code', 9),
                    e._uU(19),
                    e.qZA(),
                    e._uU(20, '\n    '),
                    e.qZA()()()),
                    2 & i &&
                      (e.xp6(1),
                      e.Q6J('isNavCode', !0),
                      e.xp6(2),
                      e.Q6J('title', 'Ubicaci\xf3n')('description', 'Uspallata 3160')('iframe', _.iframe),
                      e.xp6(1),
                      e.Q6J('isExpandable', !0),
                      e.xp6(7),
                      e.Oqu(_.mapHtml),
                      e.xp6(8),
                      e.Oqu(_.mapTs));
                },
                dependencies: [T, h.B, A.y, f.y, k.g]
              })),
              a
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let I = (() => {
          class a {}
          return (
            (a.ɵfac = function (i) {
              return new (i || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [Z.Bz.forChild(S), Z.Bz] })),
            a
          );
        })(),
        P = (() => {
          class a {}
          return (
            (a.ɵfac = function (i) {
              return new (i || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [t.ez] })),
            a
          );
        })(),
        E = (() => {
          class a {}
          return (
            (a.ɵfac = function (i) {
              return new (i || a)();
            }),
            (a.ɵmod = e.oAB({ type: a })),
            (a.ɵinj = e.cJS({ imports: [t.ez, P, o.Z, b.Z, h.B, v.T, O.J, I] })),
            a
          );
        })();
    }
  }
]);
