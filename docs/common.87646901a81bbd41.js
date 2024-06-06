'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [8592],
  {
    5654: (O, a, n) => {
      n.d(a, { o: () => s });
      var i = n(9808),
        o = n(4893);
      let s = (() => {
        class t {}
        return (
          (t.ɵfac = function (l) {
            return new (l || t)();
          }),
          (t.ɵmod = o.oAB({ type: t })),
          (t.ɵinj = o.cJS({ imports: [i.ez] })),
          t
        );
      })();
    },
    3252: (O, a, n) => {
      n.d(a, { E: () => t });
      var i = n(9808),
        o = n(2526),
        s = n(4893);
      let t = (() => {
        class e {}
        return (
          (e.ɵfac = function (u) {
            return new (u || e)();
          }),
          (e.ɵmod = s.oAB({ type: e })),
          (e.ɵinj = s.cJS({ imports: [i.ez, o.Bz] })),
          e
        );
      })();
    },
    388: (O, a, n) => {
      n.d(a, { h: () => B });
      var i = n(1998),
        o = n(4893),
        s = n(9808);
      function t(_, d) {
        if ((1 & _ && (o.ynx(0), o.TgZ(1, 'h2', 4), o._uU(2), o.qZA(), o.BQk()), 2 & _)) {
          const c = o.oxw(2);
          o.xp6(2), o.Oqu(c.title);
        }
      }
      function e(_, d) {
        if ((1 & _ && (o.ynx(0), o.TgZ(1, 'p', 5), o._uU(2), o.qZA(), o.BQk()), 2 & _)) {
          const c = o.oxw(2);
          o.xp6(2), o.Oqu(c.description);
        }
      }
      function l(_, d) {
        if (
          (1 & _ &&
            (o.ynx(0),
            o.YNc(1, t, 3, 1, 'ng-container', 2),
            o.YNc(2, e, 3, 1, 'ng-container', 2),
            o.Hsn(3),
            o.Hsn(4, 1),
            o.BQk()),
          2 & _)
        ) {
          const c = o.oxw();
          o.xp6(1), o.Q6J('ngIf', c.title), o.xp6(1), o.Q6J('ngIf', c.description);
        }
      }
      function u(_, d) {
        if ((1 & _ && o.GkF(0, 6), 2 & _)) {
          const c = o.oxw();
          o.Q6J('ngTemplateOutlet', c.oCustomContent.template);
        }
      }
      const m = [[['', 'progressBar', '']], [['', 'button', '']]],
        E = function () {
          return { top: '48px' };
        },
        M = ['[progressBar]', '[button]'];
      let B = (() => {
        class _ {
          constructor() {
            (this.isBgLight = !1), (this.isPositionRelative = !1), (this.customClasses = '');
          }
        }
        return (
          (_.ɵfac = function (c) {
            return new (c || _)();
          }),
          (_.ɵcmp = o.Xpm({
            type: _,
            selectors: [['o-block']],
            contentQueries: function (c, r, p) {
              if ((1 & c && o.Suo(p, i.X, 7), 2 & c)) {
                let g;
                o.iGM((g = o.CRH())) && (r.oCustomContent = g.first);
              }
            },
            inputs: {
              title: 'title',
              description: 'description',
              isBgLight: 'isBgLight',
              isPositionRelative: 'isPositionRelative',
              customClasses: 'customClasses'
            },
            ngContentSelectors: M,
            decls: 4,
            vars: 10,
            consts: [
              [1, 'card', 'card-block', 3, 'ngStyle'],
              [1, 'card-body'],
              [4, 'ngIf'],
              [3, 'ngTemplateOutlet', 4, 'ngIf'],
              [1, 'block-title'],
              [1, 'block-text'],
              [3, 'ngTemplateOutlet']
            ],
            template: function (c, r) {
              1 & c &&
                (o.F$t(m),
                o.TgZ(0, 'div', 0)(1, 'div', 1),
                o.YNc(2, l, 5, 2, 'ng-container', 2),
                o.YNc(3, u, 1, 1, 'ng-container', 3),
                o.qZA()()),
                2 & c &&
                  (o.Tol(r.customClasses),
                  o.ekj('bg-light', r.isBgLight)('position-sticky', !r.isPositionRelative),
                  o.Q6J('ngStyle', r.isPositionRelative ? null : o.DdM(9, E)),
                  o.xp6(2),
                  o.Q6J('ngIf', !r.oCustomContent),
                  o.xp6(1),
                  o.Q6J('ngIf', r.oCustomContent));
            },
            dependencies: [s.O5, s.tP, s.PC]
          })),
          _
        );
      })();
    },
    9371: (O, a, n) => {
      n.d(a, { V: () => s });
      var i = n(9808),
        o = n(4893);
      let s = (() => {
        class t {}
        return (
          (t.ɵfac = function (l) {
            return new (l || t)();
          }),
          (t.ɵmod = o.oAB({ type: t })),
          (t.ɵinj = o.cJS({ imports: [i.ez] })),
          t
        );
      })();
    },
    393: (O, a, n) => {
      n.d(a, { V: () => e });
      var i = n(9808),
        o = n(2526),
        s = n(3252),
        t = n(4893);
      let e = (() => {
        class l {}
        return (
          (l.ɵfac = function (m) {
            return new (m || l)();
          }),
          (l.ɵmod = t.oAB({ type: l })),
          (l.ɵinj = t.cJS({ imports: [i.ez, o.Bz, s.E] })),
          l
        );
      })();
    },
    25: (O, a, n) => {
      n.d(a, { a: () => t });
      var i = n(9808),
        o = n(2526),
        s = n(4893);
      let t = (() => {
        class e {}
        return (
          (e.ɵfac = function (u) {
            return new (u || e)();
          }),
          (e.ɵmod = s.oAB({ type: e })),
          (e.ɵinj = s.cJS({ imports: [i.ez, o.Bz] })),
          e
        );
      })();
    }
  }
]);
