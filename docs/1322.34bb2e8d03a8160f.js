'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [1322],
  {
    4883: (Le, ee, C) => {
      C.d(ee, { L: () => Q });
      var r = C(4893),
        d = C(2313),
        K = C(9808);
      const B = ['checkbox'];
      function o(w, k) {
        if (1 & w) {
          const u = r.EpF();
          r.TgZ(0, 'th', 5)(1, 'div', 6)(2, 'input', 7),
            r.NdJ('change', function (Z) {
              r.CHM(u);
              const q = r.oxw(2);
              return r.KtG(q.onHeaderCheckboxChange(Z));
            }),
            r.qZA(),
            r.TgZ(3, 'label', 8),
            r._uU(4),
            r.qZA()()();
        }
        if (2 & w) {
          const u = r.oxw(2);
          r.Q6J('ngClass', u.checkbox.customClassesTh),
            r.xp6(2),
            r.MGl('id', '', u.id, '-selectAllCheckbox')('name', '', u.id, '-selectAllCheckbox'),
            r.xp6(1),
            r.MGl('for', '', u.id, '-selectAllCheckbox'),
            r.Q6J('ngClass', u.checkbox.customClassesLabel),
            r.xp6(1),
            r.Oqu(u.checkbox.title);
        }
      }
      function se(w, k) {
        if ((1 & w && (r.TgZ(0, 'th', 5), r._uU(1), r.qZA()), 2 & w)) {
          const u = r.oxw(2);
          r.Q6J('ngClass', u.checkbox.customClassesTh), r.xp6(1), r.hij(' ', u.checkbox.title, ' ');
        }
      }
      function le(w, k) {
        if ((1 & w && (r.ynx(0), r.TgZ(1, 'th', 5), r._uU(2), r.qZA(), r.BQk()), 2 & w)) {
          const u = k.$implicit;
          r.xp6(1), r.Q6J('ngClass', u.customClasses), r.xp6(1), r.Oqu(u.value);
        }
      }
      function ge(w, k) {
        if (1 & w) {
          const u = r.EpF();
          r.TgZ(0, 'td')(1, 'div', 6)(2, 'input', 7, 10),
            r.NdJ('change', function (Z) {
              r.CHM(u);
              const q = r.oxw().$implicit,
                ue = r.oxw(2);
              return r.KtG(ue.onCheckboxChange(q, Z));
            }),
            r.qZA(),
            r._UZ(4, 'label', 11),
            r.qZA()();
        }
        if (2 & w) {
          const u = r.oxw().index,
            I = r.oxw(2);
          r.xp6(2),
            r.hYB('id', '', I.id, '-checkbox_', u, '')('name', '', I.id, '-checkbox_', u, ''),
            r.xp6(2),
            r.hYB('for', '', I.id, '-checkbox_', u, '');
        }
      }
      function pe(w, k) {
        if ((1 & w && r._UZ(0, 'div', 14), 2 & w)) {
          const u = r.oxw().$implicit,
            I = r.oxw().$implicit,
            Z = r.oxw(2);
          r.Q6J('innerHTML', Z.sanitizeHTML(I[u.key].data), r.oJD);
        }
      }
      function be(w, k) {
        if ((1 & w && (r.ynx(0), r.TgZ(1, 'td', 12), r.YNc(2, pe, 1, 1, 'div', 13), r.qZA(), r.BQk()), 2 & w)) {
          const u = k.$implicit,
            I = r.oxw().$implicit;
          r.xp6(1), r.Q6J('ngClass', I[u.key].customClasses), r.xp6(1), r.Q6J('ngIf', I[u.key].data);
        }
      }
      function R(w, k) {
        if (
          (1 & w && (r.TgZ(0, 'tr'), r.YNc(1, ge, 5, 6, 'td', 9), r.YNc(2, be, 3, 2, 'ng-container', 4), r.qZA()),
          2 & w)
        ) {
          const u = r.oxw(2);
          r.xp6(1), r.Q6J('ngIf', u.checkbox), r.xp6(1), r.Q6J('ngForOf', u.columns);
        }
      }
      const J = function (w, k) {
        return { 'table-borderless': w, 'table-striped': k };
      };
      function V(w, k) {
        if (
          (1 & w &&
            (r.TgZ(0, 'table', 2)(1, 'thead')(2, 'tr'),
            r.YNc(3, o, 5, 6, 'th', 3),
            r.YNc(4, se, 2, 2, 'th', 3),
            r.YNc(5, le, 3, 2, 'ng-container', 4),
            r.qZA()(),
            r.TgZ(6, 'tbody'),
            r.YNc(7, R, 3, 2, 'tr', 4),
            r.qZA()()),
          2 & w)
        ) {
          const u = r.oxw();
          r.Q6J('ngClass', r.WLB(5, J, !u.isBordered, u.isStriped)),
            r.xp6(3),
            r.Q6J('ngIf', 1 == (null == u.checkbox ? null : u.checkbox.isAllSelectable)),
            r.xp6(1),
            r.Q6J('ngIf', 0 == (null == u.checkbox ? null : u.checkbox.isAllSelectable)),
            r.xp6(1),
            r.Q6J('ngForOf', u.columns),
            r.xp6(2),
            r.Q6J('ngForOf', u.dataSource);
        }
      }
      const U = function (w) {
        return { 'responsive-scroll': w };
      };
      let Q = (() => {
        class w {
          constructor(u, I) {
            (this.renderer = u),
              (this.sanitizer = I),
              (this.isValidateComponent = !1),
              (this.id = 'o-table'),
              (this.columns = []),
              (this.dataSource = []),
              (this.isBordered = !1),
              (this.isStriped = !1),
              (this.isScrollable = !1),
              (this.customClasses = ''),
              (this.dataSelectedChange = new r.vpe()),
              (this.inputCheckArr = []),
              (this.dataSelected = []);
          }
          ngOnInit() {
            this.componentValidations();
          }
          ngAfterViewInit() {
            this.checkboxRef.map((u) => {
              this.inputCheckArr.push(u.nativeElement);
            });
          }
          componentValidations() {
            if (
              ((this.isValidateComponent = this.columns.length > 0 && this.dataSource.length > 0),
              !this.isValidateComponent)
            )
              throw new Error('The columns and dataSource must not be empty');
            this.columns.map((u) => {
              if ('' === u.key || '' === u.value)
                throw ((this.isValidateComponent = !1), new Error('The columns must not have null values'));
            }),
              this.columns.map((u) => (u.value = u.value.trim())),
              (this.columns = this.columns.map(
                (u) => ((u.value = u.value.charAt(0).toUpperCase() + u.value.slice(1).toLowerCase()), u)
              )),
              this.columns.map((u) => {
                if (
                  u.value.match(/^[a-zA-Z\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1 ]*$/) &&
                  u.key.match(/^[a-zA-Z ]*$/)
                )
                  return (this.isValidateComponent = !0), u;
                throw (
                  ((this.isValidateComponent = !1),
                  new Error(
                    'The columns value must not contain numbers or symbols and the key must not contain numbers, symbols or accents'
                  ))
                );
              });
          }
          sanitizeHTML(u) {
            return this.sanitizer.bypassSecurityTrustHtml(u);
          }
          onHeaderCheckboxChange(u) {
            const I = u.target;
            if (I) {
              const Z = I.checked;
              this.checkboxRef.toArray().forEach((q) => {
                q.nativeElement.checked = Z;
              }),
                (this.dataSelected = Z ? [...this.dataSource] : []),
                this.dataSelectedChange.emit(this.dataSelected);
            }
          }
          onCheckboxChange(u, I) {
            if (I && I.target && 'boolean' == typeof I.target.checked) {
              if (I.target.checked) this.dataSelected.push(u);
              else {
                const q = this.dataSelected.findIndex((ue) => ue === u);
                -1 !== q && this.dataSelected.splice(q, 1);
              }
              this.dataSelectedChange.emit(this.dataSelected);
            }
          }
        }
        return (
          (w.ɵfac = function (u) {
            return new (u || w)(r.Y36(r.Qsj), r.Y36(d.H7));
          }),
          (w.ɵcmp = r.Xpm({
            type: w,
            selectors: [['o-table']],
            viewQuery: function (u, I) {
              if ((1 & u && r.Gf(B, 5), 2 & u)) {
                let Z;
                r.iGM((Z = r.CRH())) && (I.checkboxRef = Z);
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
            template: function (u, I) {
              1 & u && (r.TgZ(0, 'div', 0), r.YNc(1, V, 8, 8, 'table', 1), r.qZA()),
                2 & u &&
                  (r.Tol(I.customClasses),
                  r.Q6J('ngClass', r.VKq(4, U, I.isScrollable)),
                  r.xp6(1),
                  r.Q6J('ngIf', I.isValidateComponent));
            },
            dependencies: [K.mk, K.sg, K.O5]
          })),
          w
        );
      })();
    },
    2089: (Le, ee, C) => {
      C.d(ee, { Z: () => K });
      var r = C(9808),
        d = C(4893);
      let K = (() => {
        class B {}
        return (
          (B.ɵfac = function (se) {
            return new (se || B)();
          }),
          (B.ɵmod = d.oAB({ type: B })),
          (B.ɵinj = d.cJS({ imports: [r.ez] })),
          B
        );
      })();
    },
    4948: (Le, ee, C) => {
      C.d(ee, { B: () => be });
      var r = C(9808),
        d = C(4893);
      function K(R, J) {
        if (1 & R) {
          const V = d.EpF();
          d.TgZ(0, 'nav', 10)(1, 'ul', 11)(2, 'li', 12)(3, 'a', 13),
            d.NdJ('click', function () {
              d.CHM(V);
              const Q = d.oxw();
              return d.KtG((Q.isWindowHTML = !0));
            }),
            d._uU(4, 'HTML'),
            d.qZA()(),
            d.TgZ(5, 'li', 12)(6, 'a', 14),
            d.NdJ('click', function () {
              d.CHM(V);
              const Q = d.oxw();
              return d.KtG((Q.isWindowHTML = !1));
            }),
            d._uU(7, 'TS'),
            d.qZA()()()();
        }
        if (2 & R) {
          const V = d.oxw();
          d.xp6(3), d.ekj('active', V.isWindowHTML), d.xp6(3), d.ekj('active', !V.isWindowHTML);
        }
      }
      function B(R, J) {
        1 & R && (d.ynx(0), d.Hsn(1), d.BQk());
      }
      function o(R, J) {
        1 & R && (d.ynx(0), d.Hsn(1, 1), d.BQk());
      }
      function se(R, J) {
        if ((1 & R && d.YNc(0, o, 2, 0, 'ng-container', 7), 2 & R)) {
          const V = d.oxw(),
            U = d.MAs(16);
          d.Q6J('ngIf', V.isWindowHTML)('ngIfElse', U);
        }
      }
      function le(R, J) {
        1 & R && d.Hsn(0, 2);
      }
      const ge = [[['', 'component', '']], [['', 'component-html', '']], [['', 'component-ts', '']]],
        pe = ['[component]', '[component-html]', '[component-ts]'];
      let be = (() => {
        class R {
          constructor() {
            (this.isNavCode = !1), (this.isOpenCode = !1), (this.isWindowHTML = !0);
          }
          get linkCode() {
            return this.isOpenCode ? 'Ocultar' : 'Mostrar c\xf3digo';
          }
        }
        return (
          (R.ɵfac = function (V) {
            return new (V || R)();
          }),
          (R.ɵcmp = d.Xpm({
            type: R,
            selectors: [['app-viewer']],
            inputs: { title: 'title', isNavCode: 'isNavCode' },
            standalone: !0,
            features: [d.jDz],
            ngContentSelectors: pe,
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
            template: function (V, U) {
              if (
                (1 & V &&
                  (d.F$t(ge),
                  d.TgZ(0, 'div', 0)(1, 'div', 1)(2, 'h5'),
                  d._uU(3),
                  d.qZA(),
                  d.TgZ(4, 'nav')(5, 'ul', 2)(6, 'li', 3)(7, 'a', 4),
                  d.NdJ('click', function () {
                    return (U.isOpenCode = !U.isOpenCode);
                  }),
                  d.TgZ(8, 'span'),
                  d._uU(9),
                  d.qZA()()()()()(),
                  d.TgZ(10, 'div', 5),
                  d.YNc(11, K, 8, 4, 'nav', 6),
                  d.YNc(12, B, 2, 0, 'ng-container', 7),
                  d.YNc(13, se, 1, 2, 'ng-template', null, 8, d.W1O),
                  d.YNc(15, le, 1, 0, 'ng-template', null, 9, d.W1O),
                  d.qZA()()),
                2 & V)
              ) {
                const Q = d.MAs(14);
                d.xp6(3),
                  d.Oqu(U.title),
                  d.xp6(4),
                  d.ekj('active', U.isOpenCode),
                  d.xp6(2),
                  d.Oqu(U.linkCode),
                  d.xp6(2),
                  d.Q6J('ngIf', U.isOpenCode && U.isNavCode),
                  d.xp6(1),
                  d.Q6J('ngIf', !U.isOpenCode)('ngIfElse', Q);
              }
            },
            dependencies: [r.ez, r.O5],
            styles: [
              '[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{border-radius:8px;padding:16px 24px 0;border:1px solid #cfcfcf;margin-bottom:5rem;width:100%;max-width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%]{max-width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 0;width:100%}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .example-viewer[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin-top:0;margin-bottom:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;padding:1rem}[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%]{gap:.625rem}@media (max-width: 768px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}@media (max-width: 480px){[_nghost-%COMP%]   .example-wrapper[_ngcontent-%COMP%]{width:100%;padding:0}}'
            ]
          })),
          R
        );
      })();
    },
    1322: (Le, ee, C) => {
      C.r(ee), C.d(ee, { TooltipModule: () => Nn });
      var r = C(9808),
        d = C(2526),
        K = C(5570),
        B = C(6732),
        o = C(4893),
        se = C(4883),
        le = C(6434);
      let ge = (() => {
        class e {
          constructor() {
            (this.dataSource = B.Pm), (this.columns = K.L0), (this.directions = B.qf);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o.Xpm({
            type: e,
            selectors: [['app-tooltip-api']],
            decls: 34,
            vars: 5,
            consts: [
              [1, 'section-api'],
              [1, 'section-title'],
              [1, 'code', 'import'],
              ['appPrism', '', 'code', "import { OTooltipModule } from 'ngx-obelisco-example/tooltip';"],
              [1, 'section-selector'],
              [1, 'section-properties'],
              [3, 'columns', 'dataSource', 'isStriped', 'isBordered'],
              [1, 'section-type'],
              [1, 'section-interface'],
              ['appPrism', '']
            ],
            template: function (t, s) {
              1 & t &&
                (o.TgZ(0, 'section', 0)(1, 'div', 1)(2, 'h2'),
                o._uU(3, 'Referencia de API para el componente Tooltip de Obelisco'),
                o.qZA(),
                o.TgZ(4, 'pre', 2),
                o._uU(5, '      '),
                o._UZ(6, 'code', 3),
                o._uU(7, '\n    '),
                o.qZA()(),
                o.TgZ(8, 'h3'),
                o._uU(9, 'Etiqueta'),
                o.qZA(),
                o._UZ(10, 'hr'),
                o.TgZ(11, 'div', 4)(12, 'h4'),
                o._uU(13, 'OTooltip'),
                o.qZA(),
                o.TgZ(14, 'p'),
                o._uU(15, 'Selector: '),
                o.TgZ(16, 'strong'),
                o._uU(17, 'o-tooltip'),
                o.qZA()(),
                o.TgZ(18, 'div', 5)(19, 'h5'),
                o._uU(20, 'Propiedades'),
                o.qZA(),
                o._UZ(21, 'o-table', 6),
                o.qZA()(),
                o._UZ(22, 'br'),
                o.TgZ(23, 'div', 7)(24, 'h4'),
                o._uU(25, 'TooltipDirections'),
                o.qZA(),
                o.TgZ(26, 'p'),
                o._uU(27, 'Permite establecer la direcciones del componente.'),
                o.qZA(),
                o.TgZ(28, 'div', 8)(29, 'pre', 2),
                o._uU(30, '        '),
                o.TgZ(31, 'code', 9),
                o._uU(32),
                o.qZA(),
                o._uU(33, '\n      '),
                o.qZA()()()()),
                2 & t &&
                  (o.xp6(21),
                  o.Q6J('columns', s.columns)('dataSource', s.dataSource)('isStriped', !0)('isBordered', !0),
                  o.xp6(11),
                  o.Oqu(s.directions));
            },
            dependencies: [se.L, le.y]
          })),
          e
        );
      })();
      var pe = C(4948),
        be = C(2171),
        R = C(5668),
        J = C(1971),
        V = C(9696),
        U = C(7745),
        Q = C(9208),
        w = C(3718),
        k = C(1363),
        u = C(9429),
        I = C(5443),
        Z = C(910),
        q = C(1785);
      function ue(e, n, t) {
        return (
          void 0 === t && (t = { x: 0, y: 0 }),
          {
            top: e.top - n.height - t.y,
            right: e.right - n.width + t.x,
            bottom: e.bottom - n.height + t.y,
            left: e.left - n.width - t.x
          }
        );
      }
      function Je(e) {
        return [Z.we, Z.F2, Z.I, Z.t$].some(function (n) {
          return e[n] >= 0;
        });
      }
      var Ft = (0, R.kZ)({
          defaultModifiers: [
            J.Z,
            V.Z,
            U.Z,
            Q.Z,
            w.Z,
            k.Z,
            u.Z,
            I.Z,
            {
              name: 'hide',
              enabled: !0,
              phase: 'main',
              requiresIfExists: ['preventOverflow'],
              fn: function Bt(e) {
                var n = e.state,
                  t = e.name,
                  s = n.rects.reference,
                  l = n.rects.popper,
                  c = n.modifiersData.preventOverflow,
                  p = (0, q.Z)(n, { elementContext: 'reference' }),
                  h = (0, q.Z)(n, { altBoundary: !0 }),
                  g = ue(p, s),
                  y = ue(h, l, c),
                  T = Je(g),
                  D = Je(y);
                (n.modifiersData[t] = {
                  referenceClippingOffsets: g,
                  popperEscapeOffsets: y,
                  isReferenceHidden: T,
                  hasPopperEscaped: D
                }),
                  (n.attributes.popper = Object.assign({}, n.attributes.popper, {
                    'data-popper-reference-hidden': T,
                    'data-popper-escaped': D
                  }));
              }
            }
          ]
        }),
        Qe = 'tippy-content',
        Xe = 'tippy-arrow',
        Ge = 'tippy-svg-arrow',
        te = { passive: !0, capture: !0 },
        Ke = function () {
          return document.body;
        };
      function je(e, n, t) {
        if (Array.isArray(e)) {
          var s = e[n];
          return null == s ? (Array.isArray(t) ? t[n] : t) : s;
        }
        return e;
      }
      function ke(e, n) {
        var t = {}.toString.call(e);
        return 0 === t.indexOf('[object') && t.indexOf(n + ']') > -1;
      }
      function et(e, n) {
        return 'function' == typeof e ? e.apply(void 0, n) : e;
      }
      function tt(e, n) {
        return 0 === n
          ? e
          : function (s) {
              clearTimeout(t),
                (t = setTimeout(function () {
                  e(s);
                }, n));
            };
        var t;
      }
      function ne(e) {
        return [].concat(e);
      }
      function nt(e, n) {
        -1 === e.indexOf(n) && e.push(n);
      }
      function de(e) {
        return [].slice.call(e);
      }
      function ot(e) {
        return Object.keys(e).reduce(function (n, t) {
          return void 0 !== e[t] && (n[t] = e[t]), n;
        }, {});
      }
      function ae() {
        return document.createElement('div');
      }
      function Oe(e) {
        return ['Element', 'Fragment'].some(function (n) {
          return ke(e, n);
        });
      }
      function Ue(e, n) {
        e.forEach(function (t) {
          t && (t.style.transitionDuration = n + 'ms');
        });
      }
      function ye(e, n) {
        e.forEach(function (t) {
          t && t.setAttribute('data-state', n);
        });
      }
      function He(e, n, t) {
        var s = n + 'EventListener';
        ['transitionend', 'webkitTransitionEnd'].forEach(function (l) {
          e[s](l, t);
        });
      }
      function at(e, n) {
        for (var t = n; t; ) {
          var s;
          if (e.contains(t)) return !0;
          t = null == t.getRootNode || null == (s = t.getRootNode()) ? void 0 : s.host;
        }
        return !1;
      }
      var X = { isTouch: !1 },
        ct = 0;
      function Gt() {
        X.isTouch || ((X.isTouch = !0), window.performance && document.addEventListener('mousemove', lt));
      }
      function lt() {
        var e = performance.now();
        e - ct < 20 && ((X.isTouch = !1), document.removeEventListener('mousemove', lt)), (ct = e);
      }
      function Kt() {
        var e = document.activeElement;
        (function rt(e) {
          return !(!e || !e._tippy || e._tippy.reference !== e);
        })(e) &&
          e.blur &&
          !e._tippy.state.isVisible &&
          e.blur();
      }
      var nn = !('undefined' == typeof window || 'undefined' == typeof document || !window.msCrypto),
        N = Object.assign(
          {
            appendTo: Ke,
            aria: { content: 'auto', expanded: 'auto' },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: '',
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: 'top',
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: 'mouseenter focus',
            triggerTarget: null
          },
          { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
          {
            allowHTML: !1,
            animation: 'fade',
            arrow: !0,
            content: '',
            inertia: !1,
            maxWidth: 350,
            role: 'tooltip',
            theme: '',
            zIndex: 9999
          }
        ),
        an = Object.keys(N);
      function vt(e) {
        var t = (e.plugins || []).reduce(function (s, l) {
          var h,
            c = l.name;
          return c && (s[c] = void 0 !== e[c] ? e[c] : null != (h = N[c]) ? h : l.defaultValue), s;
        }, {});
        return Object.assign({}, e, t);
      }
      function ht(e, n) {
        var t = Object.assign(
          {},
          n,
          { content: et(n.content, [e]) },
          n.ignoreAttributes
            ? {}
            : (function ln(e, n) {
                return (n ? Object.keys(vt(Object.assign({}, N, { plugins: n }))) : an).reduce(function (l, c) {
                  var p = (e.getAttribute('data-tippy-' + c) || '').trim();
                  if (!p) return l;
                  if ('content' === c) l[c] = p;
                  else
                    try {
                      l[c] = JSON.parse(p);
                    } catch (h) {
                      l[c] = p;
                    }
                  return l;
                }, {});
              })(e, n.plugins)
        );
        return (
          (t.aria = Object.assign({}, N.aria, t.aria)),
          (t.aria = {
            expanded: 'auto' === t.aria.expanded ? n.interactive : t.aria.expanded,
            content: 'auto' === t.aria.content ? (n.interactive ? null : 'describedby') : t.aria.content
          }),
          t
        );
      }
      function Be(e, n) {
        e.innerHTML = n;
      }
      function mt(e) {
        var n = ae();
        return !0 === e ? (n.className = Xe) : ((n.className = Ge), Oe(e) ? n.appendChild(e) : Be(n, e)), n;
      }
      function gt(e, n) {
        Oe(n.content)
          ? (Be(e, ''), e.appendChild(n.content))
          : 'function' != typeof n.content && (n.allowHTML ? Be(e, n.content) : (e.textContent = n.content));
      }
      function xe(e) {
        var n = e.firstElementChild,
          t = de(n.children);
        return {
          box: n,
          content: t.find(function (s) {
            return s.classList.contains(Qe);
          }),
          arrow: t.find(function (s) {
            return s.classList.contains(Xe) || s.classList.contains(Ge);
          }),
          backdrop: t.find(function (s) {
            return s.classList.contains('tippy-backdrop');
          })
        };
      }
      function bt(e) {
        var n = ae(),
          t = ae();
        (t.className = 'tippy-box'), t.setAttribute('data-state', 'hidden'), t.setAttribute('tabindex', '-1');
        var s = ae();
        function l(c, p) {
          var h = xe(n),
            g = h.box,
            y = h.content,
            T = h.arrow;
          p.theme ? g.setAttribute('data-theme', p.theme) : g.removeAttribute('data-theme'),
            'string' == typeof p.animation
              ? g.setAttribute('data-animation', p.animation)
              : g.removeAttribute('data-animation'),
            p.inertia ? g.setAttribute('data-inertia', '') : g.removeAttribute('data-inertia'),
            (g.style.maxWidth = 'number' == typeof p.maxWidth ? p.maxWidth + 'px' : p.maxWidth),
            p.role ? g.setAttribute('role', p.role) : g.removeAttribute('role'),
            (c.content !== p.content || c.allowHTML !== p.allowHTML) && gt(y, e.props),
            p.arrow
              ? T
                ? c.arrow !== p.arrow && (g.removeChild(T), g.appendChild(mt(p.arrow)))
                : g.appendChild(mt(p.arrow))
              : T && g.removeChild(T);
        }
        return (
          (s.className = Qe),
          s.setAttribute('data-state', 'hidden'),
          gt(s, e.props),
          n.appendChild(t),
          t.appendChild(s),
          l(e.props, e.props),
          { popper: n, onUpdate: l }
        );
      }
      bt.$$tippy = !0;
      var un = 1,
        Ee = [],
        Me = [];
      function dn(e, n) {
        var s,
          l,
          c,
          T,
          D,
          P,
          O,
          t = ht(e, Object.assign({}, N, vt(ot(n)))),
          p = !1,
          h = !1,
          g = !1,
          y = !1,
          L = [],
          E = tt(Rt, t.interactiveDebounce),
          _ = un++,
          A = (function Jt(e) {
            return e.filter(function (n, t) {
              return e.indexOf(n) === t;
            });
          })(t.plugins),
          i = {
            id: _,
            reference: e,
            popper: ae(),
            popperInstance: null,
            props: t,
            state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
            plugins: A,
            clearDelayTimeouts: function Jn() {
              clearTimeout(s), clearTimeout(l), cancelAnimationFrame(c);
            },
            setProps: function Qn(a) {
              if (!i.state.isDestroyed) {
                $('onBeforeUpdate', [i, a]), Pt();
                var f = i.props,
                  b = ht(e, Object.assign({}, f, ot(a), { ignoreAttributes: !0 }));
                (i.props = b),
                  It(),
                  f.interactiveDebounce !== b.interactiveDebounce && (We(), (E = tt(Rt, b.interactiveDebounce))),
                  f.triggerTarget && !b.triggerTarget
                    ? ne(f.triggerTarget).forEach(function (S) {
                        S.removeAttribute('aria-expanded');
                      })
                    : b.triggerTarget && e.removeAttribute('aria-expanded'),
                  we(),
                  Se(),
                  z && z(f, b),
                  i.popperInstance &&
                    (Zt(),
                    ze().forEach(function (S) {
                      requestAnimationFrame(S._tippy.popperInstance.forceUpdate);
                    })),
                  $('onAfterUpdate', [i, a]);
              }
            },
            setContent: function qn(a) {
              i.setProps({ content: a });
            },
            show: function Xn() {
              var a = i.state.isVisible,
                f = i.state.isDestroyed,
                b = !i.state.isEnabled,
                S = X.isTouch && !i.props.touch,
                M = je(i.props.duration, 0, N.duration);
              if (
                !(a || f || b || S || G().hasAttribute('disabled') || ($('onShow', [i], !1), !1 === i.props.onShow(i)))
              ) {
                if (
                  ((i.state.isVisible = !0),
                  F() && (m.style.visibility = 'visible'),
                  Se(),
                  At(),
                  i.state.isMounted || (m.style.transition = 'none'),
                  F())
                ) {
                  var H = _e();
                  Ue([H.box, H.content], 0);
                }
                (P = function () {
                  var ce;
                  if (i.state.isVisible && !y) {
                    if (((y = !0), (m.style.transition = i.props.moveTransition), F() && i.props.animation)) {
                      var $e = _e(),
                        De = $e.box,
                        me = $e.content;
                      Ue([De, me], M), ye([De, me], 'visible');
                    }
                    xt(),
                      we(),
                      nt(Me, i),
                      null == (ce = i.popperInstance) || ce.forceUpdate(),
                      $('onMount', [i]),
                      i.props.animation &&
                        F() &&
                        (function Fn(a, f) {
                          St(a, f);
                        })(M, function () {
                          (i.state.isShown = !0), $('onShown', [i]);
                        });
                  }
                }),
                  (function zn() {
                    var f,
                      a = i.props.appendTo,
                      b = G();
                    (f = (i.props.interactive && a === Ke) || 'parent' === a ? b.parentNode : et(a, [b])).contains(m) ||
                      f.appendChild(m),
                      (i.state.isMounted = !0),
                      Zt();
                  })();
              }
            },
            hide: function Gn() {
              var a = !i.state.isVisible,
                f = i.state.isDestroyed,
                b = !i.state.isEnabled,
                S = je(i.props.duration, 1, N.duration);
              if (!(a || f || b) && ($('onHide', [i], !1), !1 !== i.props.onHide(i))) {
                if (
                  ((i.state.isVisible = !1),
                  (i.state.isShown = !1),
                  (y = !1),
                  (p = !1),
                  F() && (m.style.visibility = 'hidden'),
                  We(),
                  Fe(),
                  Se(!0),
                  F())
                ) {
                  var M = _e(),
                    H = M.box,
                    Y = M.content;
                  i.props.animation && (Ue([H, Y], S), ye([H, Y], 'hidden'));
                }
                xt(),
                  we(),
                  i.props.animation
                    ? F() &&
                      (function Wn(a, f) {
                        St(a, function () {
                          !i.state.isVisible && m.parentNode && m.parentNode.contains(m) && f();
                        });
                      })(S, i.unmount)
                    : i.unmount();
              }
            },
            hideWithInteractivity: function Kn(a) {
              re().addEventListener('mousemove', E), nt(Ee, E), E(a);
            },
            enable: function $n() {
              i.state.isEnabled = !0;
            },
            disable: function Yn() {
              i.hide(), (i.state.isEnabled = !1);
            },
            unmount: function ei() {
              i.state.isVisible && i.hide(),
                i.state.isMounted &&
                  (Vt(),
                  ze().forEach(function (a) {
                    a._tippy.unmount();
                  }),
                  m.parentNode && m.parentNode.removeChild(m),
                  (Me = Me.filter(function (a) {
                    return a !== i;
                  })),
                  (i.state.isMounted = !1),
                  $('onHidden', [i]));
            },
            destroy: function ti() {
              i.state.isDestroyed ||
                (i.clearDelayTimeouts(),
                i.unmount(),
                Pt(),
                delete e._tippy,
                (i.state.isDestroyed = !0),
                $('onDestroy', [i]));
            }
          };
        if (!t.render) return i;
        var x = t.render(i),
          m = x.popper,
          z = x.onUpdate;
        m.setAttribute('data-tippy-root', ''), (m.id = 'tippy-' + i.id), (i.popper = m), (e._tippy = i), (m._tippy = i);
        var W = A.map(function (a) {
            return a.fn(i);
          }),
          oe = e.hasAttribute('aria-expanded');
        return (
          It(),
          we(),
          Se(),
          $('onCreate', [i]),
          t.showOnCreate && Ut(),
          m.addEventListener('mouseenter', function () {
            i.props.interactive && i.state.isVisible && i.clearDelayTimeouts();
          }),
          m.addEventListener('mouseleave', function () {
            i.props.interactive && i.props.trigger.indexOf('mouseenter') >= 0 && re().addEventListener('mousemove', E);
          }),
          i
        );
        function fe() {
          var a = i.props.touch;
          return Array.isArray(a) ? a : [a, 0];
        }
        function Ce() {
          return 'hold' === fe()[0];
        }
        function F() {
          var a;
          return !(null == (a = i.props.render) || !a.$$tippy);
        }
        function G() {
          return O || e;
        }
        function re() {
          var a = G().parentNode;
          return a
            ? (function st(e) {
                var n,
                  s = ne(e)[0];
                return null != s && null != (n = s.ownerDocument) && n.body ? s.ownerDocument : document;
              })(a)
            : document;
        }
        function _e() {
          return xe(m);
        }
        function Ot(a) {
          return (i.state.isMounted && !i.state.isVisible) || X.isTouch || (T && 'focus' === T.type)
            ? 0
            : je(i.props.delay, a ? 0 : 1, N.delay);
        }
        function Se(a) {
          void 0 === a && (a = !1),
            (m.style.pointerEvents = i.props.interactive && !a ? '' : 'none'),
            (m.style.zIndex = '' + i.props.zIndex);
        }
        function $(a, f, b) {
          var S;
          void 0 === b && (b = !0),
            W.forEach(function (M) {
              M[a] && M[a].apply(M, f);
            }),
            b && (S = i.props)[a].apply(S, f);
        }
        function xt() {
          var a = i.props.aria;
          if (a.content) {
            var f = 'aria-' + a.content,
              b = m.id;
            ne(i.props.triggerTarget || e).forEach(function (M) {
              var H = M.getAttribute(f);
              if (i.state.isVisible) M.setAttribute(f, H ? H + ' ' + b : b);
              else {
                var Y = H && H.replace(b, '').trim();
                Y ? M.setAttribute(f, Y) : M.removeAttribute(f);
              }
            });
          }
        }
        function we() {
          !oe &&
            i.props.aria.expanded &&
            ne(i.props.triggerTarget || e).forEach(function (f) {
              i.props.interactive
                ? f.setAttribute('aria-expanded', i.state.isVisible && f === G() ? 'true' : 'false')
                : f.removeAttribute('aria-expanded');
            });
        }
        function We() {
          re().removeEventListener('mousemove', E),
            (Ee = Ee.filter(function (a) {
              return a !== E;
            }));
        }
        function Ie(a) {
          if (!X.isTouch || (!g && 'mousedown' !== a.type)) {
            var f = (a.composedPath && a.composedPath()[0]) || a.target;
            if (!i.props.interactive || !at(m, f)) {
              if (
                ne(i.props.triggerTarget || e).some(function (b) {
                  return at(b, f);
                })
              ) {
                if (X.isTouch || (i.state.isVisible && i.props.trigger.indexOf('click') >= 0)) return;
              } else $('onClickOutside', [i, a]);
              !0 === i.props.hideOnClick &&
                (i.clearDelayTimeouts(),
                i.hide(),
                (h = !0),
                setTimeout(function () {
                  h = !1;
                }),
                i.state.isMounted || Fe());
            }
          }
        }
        function Et() {
          g = !0;
        }
        function Mt() {
          g = !1;
        }
        function At() {
          var a = re();
          a.addEventListener('mousedown', Ie, !0),
            a.addEventListener('touchend', Ie, te),
            a.addEventListener('touchstart', Mt, te),
            a.addEventListener('touchmove', Et, te);
        }
        function Fe() {
          var a = re();
          a.removeEventListener('mousedown', Ie, !0),
            a.removeEventListener('touchend', Ie, te),
            a.removeEventListener('touchstart', Mt, te),
            a.removeEventListener('touchmove', Et, te);
        }
        function St(a, f) {
          var b = _e().box;
          function S(M) {
            M.target === b && (He(b, 'remove', S), f());
          }
          if (0 === a) return f();
          He(b, 'remove', D), He(b, 'add', S), (D = S);
        }
        function ve(a, f, b) {
          void 0 === b && (b = !1),
            ne(i.props.triggerTarget || e).forEach(function (M) {
              M.addEventListener(a, f, b), L.push({ node: M, eventType: a, handler: f, options: b });
            });
        }
        function It() {
          Ce() && (ve('touchstart', Dt, { passive: !0 }), ve('touchend', Lt, { passive: !0 })),
            (function Yt(e) {
              return e.split(/\s+/).filter(Boolean);
            })(i.props.trigger).forEach(function (a) {
              if ('manual' !== a)
                switch ((ve(a, Dt), a)) {
                  case 'mouseenter':
                    ve('mouseleave', Lt);
                    break;
                  case 'focus':
                    ve(nn ? 'focusout' : 'blur', jt);
                    break;
                  case 'focusin':
                    ve('focusout', jt);
                }
            });
        }
        function Pt() {
          L.forEach(function (a) {
            a.node.removeEventListener(a.eventType, a.handler, a.options);
          }),
            (L = []);
        }
        function Dt(a) {
          var f,
            b = !1;
          if (i.state.isEnabled && !kt(a) && !h) {
            var S = 'focus' === (null == (f = T) ? void 0 : f.type);
            (T = a),
              (O = a.currentTarget),
              we(),
              !i.state.isVisible &&
                (function Ve(e) {
                  return ke(e, 'MouseEvent');
                })(a) &&
                Ee.forEach(function (M) {
                  return M(a);
                }),
              'click' === a.type &&
              (i.props.trigger.indexOf('mouseenter') < 0 || p) &&
              !1 !== i.props.hideOnClick &&
              i.state.isVisible
                ? (b = !0)
                : Ut(a),
              'click' === a.type && (p = !b),
              b && !S && Pe(a);
          }
        }
        function Rt(a) {
          var f = a.target,
            b = G().contains(f) || m.contains(f);
          ('mousemove' === a.type && b) ||
            ((function Xt(e, n) {
              var t = n.clientX,
                s = n.clientY;
              return e.every(function (l) {
                var c = l.popperRect,
                  p = l.popperState,
                  g = l.props.interactiveBorder,
                  y = (function it(e) {
                    return e.split('-')[0];
                  })(p.placement),
                  T = p.modifiersData.offset;
                return (
                  !T ||
                  c.top - s + ('bottom' === y ? T.top.y : 0) > g ||
                  s - c.bottom - ('top' === y ? T.bottom.y : 0) > g ||
                  c.left - t + ('right' === y ? T.left.x : 0) > g ||
                  t - c.right - ('left' === y ? T.right.x : 0) > g
                );
              });
            })(
              ze()
                .concat(m)
                .map(function (M) {
                  var H,
                    he = null == (H = M._tippy.popperInstance) ? void 0 : H.state;
                  return he ? { popperRect: M.getBoundingClientRect(), popperState: he, props: t } : null;
                })
                .filter(Boolean),
              a
            ) &&
              (We(), Pe(a)));
        }
        function Lt(a) {
          if (!(kt(a) || (i.props.trigger.indexOf('click') >= 0 && p))) {
            if (i.props.interactive) return void i.hideWithInteractivity(a);
            Pe(a);
          }
        }
        function jt(a) {
          (i.props.trigger.indexOf('focusin') < 0 && a.target !== G()) ||
            (i.props.interactive && a.relatedTarget && m.contains(a.relatedTarget)) ||
            Pe(a);
        }
        function kt(a) {
          return !!X.isTouch && Ce() !== a.type.indexOf('touch') >= 0;
        }
        function Zt() {
          Vt();
          var a = i.props,
            f = a.popperOptions,
            b = a.placement,
            S = a.offset,
            M = a.getReferenceClientRect,
            H = a.moveTransition,
            Y = F() ? xe(m).arrow : null,
            he = M ? { getBoundingClientRect: M, contextElement: M.contextElement || G() } : e,
            ce = [
              { name: 'offset', options: { offset: S } },
              { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
              { name: 'flip', options: { padding: 5 } },
              { name: 'computeStyles', options: { adaptive: !H } },
              {
                name: '$$tippy',
                enabled: !0,
                phase: 'beforeWrite',
                requires: ['computeStyles'],
                fn: function (De) {
                  var me = De.state;
                  if (F()) {
                    var Ye = _e().box;
                    ['placement', 'reference-hidden', 'escaped'].forEach(function (Re) {
                      'placement' === Re
                        ? Ye.setAttribute('data-placement', me.placement)
                        : me.attributes.popper['data-popper-' + Re]
                        ? Ye.setAttribute('data-' + Re, '')
                        : Ye.removeAttribute('data-' + Re);
                    }),
                      (me.attributes.popper = {});
                  }
                }
              }
            ];
          F() && Y && ce.push({ name: 'arrow', options: { element: Y, padding: 3 } }),
            ce.push.apply(ce, (null == f ? void 0 : f.modifiers) || []),
            (i.popperInstance = Ft(he, m, Object.assign({}, f, { placement: b, onFirstUpdate: P, modifiers: ce })));
        }
        function Vt() {
          i.popperInstance && (i.popperInstance.destroy(), (i.popperInstance = null));
        }
        function ze() {
          return de(m.querySelectorAll('[data-tippy-root]'));
        }
        function Ut(a) {
          i.clearDelayTimeouts(), a && $('onTrigger', [i, a]), At();
          var f = Ot(!0),
            b = fe(),
            M = b[1];
          X.isTouch && 'hold' === b[0] && M && (f = M),
            f
              ? (s = setTimeout(function () {
                  i.show();
                }, f))
              : i.show();
        }
        function Pe(a) {
          if ((i.clearDelayTimeouts(), $('onUntrigger', [i, a]), i.state.isVisible)) {
            if (
              !(
                i.props.trigger.indexOf('mouseenter') >= 0 &&
                i.props.trigger.indexOf('click') >= 0 &&
                ['mouseleave', 'mousemove'].indexOf(a.type) >= 0 &&
                p
              )
            ) {
              var f = Ot(!1);
              f
                ? (l = setTimeout(function () {
                    i.state.isVisible && i.hide();
                  }, f))
                : (c = requestAnimationFrame(function () {
                    i.hide();
                  }));
            }
          } else Fe();
        }
      }
      function ie(e, n) {
        void 0 === n && (n = {});
        var t = N.plugins.concat(n.plugins || []);
        !(function en() {
          document.addEventListener('touchstart', Gt, te), window.addEventListener('blur', Kt);
        })();
        var s = Object.assign({}, n, { plugins: t }),
          h = (function qt(e) {
            return Oe(e)
              ? [e]
              : (function Qt(e) {
                  return ke(e, 'NodeList');
                })(e)
              ? de(e)
              : Array.isArray(e)
              ? e
              : de(document.querySelectorAll(e));
          })(e).reduce(function (g, y) {
            var T = y && dn(y, s);
            return T && g.push(T), g;
          }, []);
        return Oe(e) ? h[0] : h;
      }
      (ie.defaultProps = N),
        (ie.setDefaultProps = function (n) {
          Object.keys(n).forEach(function (s) {
            N[s] = n[s];
          });
        }),
        (ie.currentInput = X),
        Object.assign({}, Q.Z, {
          effect: function (n) {
            var t = n.state,
              s = {
                popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
                arrow: { position: 'absolute' },
                reference: {}
              };
            Object.assign(t.elements.popper.style, s.popper),
              (t.styles = s),
              t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow);
          }
        }),
        ie.setDefaultProps({ render: bt });
      const Tn = ie;
      let Cn = (() => {
        class e {
          constructor(t) {
            (this.elementRef = t),
              (this.description = ''),
              (this.direction = 'top'),
              (this.trigger = 'mouseenter'),
              (this.isTooltipVisible = !1);
          }
          ngOnInit() {
            this.createTooltip();
          }
          ngOnDestroy() {
            this.tippyInstance && this.tippyInstance.destroy();
          }
          onWindowResize() {
            window.innerWidth < 975 ? this.createTooltip('top') : this.createTooltip();
          }
          createTooltip(t = this.direction) {
            this.tippyInstance && this.tippyInstance.destroy(),
              window.innerWidth < 975 && ('left' === t || 'left-start' === t || 'left-end' === t)
                ? (t = 'bottom')
                : window.innerWidth < 975 && ('right' === t || 'right-start' === t || 'right-end' === t) && (t = 'top'),
              (this.tippyInstance = Tn(this.elementRef.nativeElement, {
                content: this.description,
                placement: t,
                offset: [0, 16],
                theme: 'custom-theme',
                trigger: this.trigger
              }));
          }
          closeTooltip() {
            this.tippyInstance && this.tippyInstance.hide();
          }
          toggleTooltip() {
            this.tippyInstance &&
              (this.isTooltipVisible ? this.tippyInstance.hide() : this.tippyInstance.show(),
              (this.isTooltipVisible = !this.isTooltipVisible));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o.Y36(o.SBq));
          }),
          (e.ɵdir = o.lG2({
            type: e,
            selectors: [['', 'oTooltip', '']],
            hostBindings: function (t, s) {
              1 & t &&
                o.NdJ(
                  'resize',
                  function () {
                    return s.onWindowResize();
                  },
                  !1,
                  o.Jf7
                )('focusout', function () {
                  return s.closeTooltip();
                })('keydown.enter', function () {
                  return s.toggleTooltip();
                });
            },
            inputs: { description: 'description', direction: 'direction', trigger: 'trigger' }
          })),
          e
        );
      })();
      var _n = C(2200);
      function wn(e, n) {
        if ((1 & e && (o._UZ(0, 'o-button', 12), o.ALo(1, 'titlecase')), 2 & e)) {
          const t = o.oxw().$implicit,
            s = o.oxw().$implicit;
          o.Q6J('description', s.text)('direction', t)('text', o.lcZ(1, 3, t));
        }
      }
      function On(e, n) {
        if ((1 & e && (o.TgZ(0, 'span', 13)(1, 'span', 14), o._uU(2, 'help'), o.qZA()()), 2 & e)) {
          const t = o.oxw().$implicit,
            s = o.oxw().$implicit;
          o.Q6J('description', s.text)('direction', t);
        }
      }
      function xn(e, n) {
        if ((1 & e && (o.ynx(0), o.YNc(1, wn, 2, 5, 'o-button', 10), o.YNc(2, On, 3, 2, 'span', 11), o.BQk()), 2 & e)) {
          const t = o.oxw().$implicit;
          o.xp6(1), o.Q6J('ngIf', !t.customClasses), o.xp6(1), o.Q6J('ngIf', t.customClasses);
        }
      }
      function En(e, n) {
        if (
          (1 & e &&
            (o.TgZ(0, 'app-viewer', 2)(1, 'div', 3),
            o.YNc(2, xn, 3, 2, 'ng-container', 4),
            o.qZA(),
            o.TgZ(3, 'pre', 5),
            o._uU(4, '      '),
            o.TgZ(5, 'button', 6),
            o._uU(6, 'Copiar'),
            o.qZA(),
            o._uU(7, '\n      '),
            o.TgZ(8, 'code', 7),
            o._uU(9),
            o.qZA(),
            o._uU(10, '\n    '),
            o.qZA(),
            o.TgZ(11, 'pre', 8),
            o._uU(12, '      '),
            o.TgZ(13, 'button', 6),
            o._uU(14, 'Copiar'),
            o.qZA(),
            o._uU(15, '\n      '),
            o.TgZ(16, 'code', 9),
            o._uU(17),
            o.qZA(),
            o._uU(18, '\n    '),
            o.qZA()()),
          2 & e)
        ) {
          const t = n.$implicit;
          o.Q6J('title', t.name)('isNavCode', !!t.exampleTS)('id', 'example-' + t.name.toLowerCase()),
            o.xp6(2),
            o.Q6J('ngForOf', t.direction),
            o.xp6(7),
            o.hij('\n        ', t.exampleHTML, '\n      '),
            o.xp6(8),
            o.hij('\n        ', t.exampleTS, '\n      ');
        }
      }
      const Mn = [
        { path: 'api', component: ge },
        {
          path: 'examples',
          component: (() => {
            class e {
              constructor() {
                (this.text = 'Helpful Message'), (this.tooltipList = B.fh);
              }
            }
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵcmp = o.Xpm({
                type: e,
                selectors: [['app-tooltip-examples']],
                decls: 2,
                vars: 1,
                consts: [
                  [1, 'section-example'],
                  [3, 'title', 'isNavCode', 'id', 4, 'ngFor', 'ngForOf'],
                  [3, 'title', 'isNavCode', 'id'],
                  ['component', '', 1, 'd-flex', 'justify-content-center'],
                  [4, 'ngFor', 'ngForOf'],
                  ['appClipboard', '', 'component-html', '', 1, 'code'],
                  [1, 'btn', 'btn-sm', 'btn-outline-link', 'btn-clipboard'],
                  ['appPrism', '', 'language', 'html'],
                  ['appClipboard', '', 'component-ts', '', 1, 'code'],
                  ['appPrism', ''],
                  ['oTooltip', '', 'customClasses', 'mx-2', 3, 'description', 'direction', 'text', 4, 'ngIf'],
                  ['oTooltip', '', 'class', 'icon-box bg-light mx-2', 3, 'description', 'direction', 4, 'ngIf'],
                  ['oTooltip', '', 'customClasses', 'mx-2', 3, 'description', 'direction', 'text'],
                  ['oTooltip', '', 1, 'icon-box', 'bg-light', 'mx-2', 3, 'description', 'direction'],
                  [1, 'material-icons-round']
                ],
                template: function (t, s) {
                  1 & t && (o.TgZ(0, 'section', 0), o.YNc(1, En, 19, 6, 'app-viewer', 1), o.qZA()),
                    2 & t && (o.xp6(1), o.Q6J('ngForOf', s.tooltipList));
                },
                dependencies: [r.sg, r.O5, pe.B, be.y, le.y, Cn, _n.g, r.rS]
              })),
              e
            );
          })()
        },
        { path: '**', pathMatch: 'full', redirectTo: 'api' }
      ];
      let An = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({ imports: [d.Bz.forChild(Mn), d.Bz] })),
          e
        );
      })();
      var Sn = C(7538),
        In = C(2089);
      const Pn = new o.OlP('Tippy config', { providedIn: 'root', factory: () => ({}) });
      new o.OlP('TIPPY_REF');
      let _t = !1,
        wt = !1;
      'undefined' != typeof window && ('IntersectionObserver' in window, window);
      let kn = (() => {
        class e {
          static forRoot(t = {}) {
            return { ngModule: e, providers: [{ provide: Pn, useValue: t }] };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({})),
          e
        );
      })();
      const Zn = { theme: null, arrow: !1, animation: 'scale', trigger: 'mouseenter', offset: [0, 5] },
        Vn = { theme: 'light', arrow: !0, offset: [0, 10], animation: null, trigger: 'click', interactive: !0 };
      let Un = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({ imports: [r.ez, kn.forRoot({ variations: { tooltip: Zn, popper: Vn } })] })),
          e
        );
      })();
      var Hn = C(9384),
        Bn = C(3717);
      let Nn = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o.oAB({ type: e })),
          (e.ɵinj = o.cJS({ imports: [r.ez, An, Sn.Z, In.Z, pe.B, Un, Hn.T, Bn.J] })),
          e
        );
      })();
    }
  }
]);
