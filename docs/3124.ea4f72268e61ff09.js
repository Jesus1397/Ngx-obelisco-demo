'use strict';
(self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []).push([
  [3124],
  {
    5668: (R, v, t) => {
      t.d(v, { kZ: () => S });
      var n = t(309),
        a = t(6919),
        s = t(5211),
        d = t(7577),
        l = t(3535),
        c = t(7319),
        h = t(8863),
        M = t(1804),
        O = t(373);
      function p(P, r, g) {
        void 0 === g && (g = !1);
        var i = (0, d.Re)(r),
          A =
            (0, d.Re)(r) &&
            (function Z(P) {
              var r = P.getBoundingClientRect(),
                g = (0, O.NM)(r.width) / P.offsetWidth || 1,
                i = (0, O.NM)(r.height) / P.offsetHeight || 1;
              return 1 !== g || 1 !== i;
            })(r),
          E = (0, h.Z)(r),
          C = (0, n.Z)(P, A, g),
          w = { scrollLeft: 0, scrollTop: 0 },
          D = { x: 0, y: 0 };
        return (
          (i || (!i && !g)) &&
            (('body' !== (0, l.Z)(r) || (0, M.Z)(E)) &&
              (w = (function u(P) {
                return P !== (0, s.Z)(P) && (0, d.Re)(P)
                  ? (function f(P) {
                      return { scrollLeft: P.scrollLeft, scrollTop: P.scrollTop };
                    })(P)
                  : (0, a.Z)(P);
              })(r)),
            (0, d.Re)(r)
              ? (((D = (0, n.Z)(r, !0)).x += r.clientLeft), (D.y += r.clientTop))
              : E && (D.x = (0, c.Z)(E))),
          { x: C.left + w.scrollLeft - D.x, y: C.top + w.scrollTop - D.y, width: C.width, height: C.height }
        );
      }
      var o = t(4436),
        e = t(8941),
        m = t(4826),
        B = t(910);
      function x(P) {
        var r = new Map(),
          g = new Set(),
          i = [];
        function A(E) {
          g.add(E.name),
            [].concat(E.requires || [], E.requiresIfExists || []).forEach(function (w) {
              if (!g.has(w)) {
                var D = r.get(w);
                D && A(D);
              }
            }),
            i.push(E);
        }
        return (
          P.forEach(function (E) {
            r.set(E.name, E);
          }),
          P.forEach(function (E) {
            g.has(E.name) || A(E);
          }),
          i
        );
      }
      function b(P) {
        var r;
        return function () {
          return (
            r ||
              (r = new Promise(function (g) {
                Promise.resolve().then(function () {
                  (r = void 0), g(P());
                });
              })),
            r
          );
        };
      }
      var W = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function F() {
        for (var P = arguments.length, r = new Array(P), g = 0; g < P; g++) r[g] = arguments[g];
        return !r.some(function (i) {
          return !(i && 'function' == typeof i.getBoundingClientRect);
        });
      }
      function S(P) {
        void 0 === P && (P = {});
        var g = P.defaultModifiers,
          i = void 0 === g ? [] : g,
          A = P.defaultOptions,
          E = void 0 === A ? W : A;
        return function (w, D, _) {
          void 0 === _ && (_ = E);
          var y = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, W, E),
              modifiersData: {},
              elements: { reference: w, popper: D },
              attributes: {},
              styles: {}
            },
            j = [],
            $ = !1,
            K = {
              state: y,
              setOptions: function (I) {
                var X = 'function' == typeof I ? I(y.options) : I;
                J(),
                  (y.options = Object.assign({}, E, y.options, X)),
                  (y.scrollParents = {
                    reference: (0, d.kK)(w) ? (0, e.Z)(w) : w.contextElement ? (0, e.Z)(w.contextElement) : [],
                    popper: (0, e.Z)(D)
                  });
                var G = (function U(P) {
                  var r = x(P);
                  return B.xs.reduce(function (g, i) {
                    return g.concat(
                      r.filter(function (A) {
                        return A.phase === i;
                      })
                    );
                  }, []);
                })(
                  (function N(P) {
                    var r = P.reduce(function (g, i) {
                      var A = g[i.name];
                      return (
                        (g[i.name] = A
                          ? Object.assign({}, A, i, {
                              options: Object.assign({}, A.options, i.options),
                              data: Object.assign({}, A.data, i.data)
                            })
                          : i),
                        g
                      );
                    }, {});
                    return Object.keys(r).map(function (g) {
                      return r[g];
                    });
                  })([].concat(i, y.options.modifiers))
                );
                return (
                  (y.orderedModifiers = G.filter(function (T) {
                    return T.enabled;
                  })),
                  (function H() {
                    y.orderedModifiers.forEach(function (L) {
                      var X = L.options,
                        T = L.effect;
                      if ('function' == typeof T) {
                        var Y = T({ state: y, name: L.name, instance: K, options: void 0 === X ? {} : X });
                        j.push(Y || function () {});
                      }
                    });
                  })(),
                  K.update()
                );
              },
              forceUpdate: function () {
                if (!$) {
                  var I = y.elements,
                    X = I.reference,
                    G = I.popper;
                  if (F(X, G)) {
                    (y.rects = { reference: p(X, (0, m.Z)(G), 'fixed' === y.options.strategy), popper: (0, o.Z)(G) }),
                      (y.reset = !1),
                      (y.placement = y.options.placement),
                      y.orderedModifiers.forEach(function (k) {
                        return (y.modifiersData[k.name] = Object.assign({}, k.data));
                      });
                    for (var T = 0; T < y.orderedModifiers.length; T++)
                      if (!0 !== y.reset) {
                        var Y = y.orderedModifiers[T],
                          z = Y.fn,
                          Q = Y.options;
                        'function' == typeof z &&
                          (y = z({ state: y, options: void 0 === Q ? {} : Q, name: Y.name, instance: K }) || y);
                      } else (y.reset = !1), (T = -1);
                  }
                }
              },
              update: b(function () {
                return new Promise(function (L) {
                  K.forceUpdate(), L(y);
                });
              }),
              destroy: function () {
                J(), ($ = !0);
              }
            };
          if (!F(w, D)) return K;
          function J() {
            j.forEach(function (L) {
              return L();
            }),
              (j = []);
          }
          return (
            K.setOptions(_).then(function (L) {
              !$ && _.onFirstUpdate && _.onFirstUpdate(L);
            }),
            K
          );
        };
      }
    },
    7852: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(7577);
      function a(s, d) {
        var f = d.getRootNode && d.getRootNode();
        if (s.contains(d)) return !0;
        if (f && (0, n.Zq)(f)) {
          var u = d;
          do {
            if (u && s.isSameNode(u)) return !0;
            u = u.parentNode || u.host;
          } while (u);
        }
        return !1;
      }
    },
    309: (R, v, t) => {
      t.d(v, { Z: () => f });
      var n = t(7577),
        a = t(373),
        s = t(5211),
        d = t(4796);
      function f(u, l, c) {
        void 0 === l && (l = !1), void 0 === c && (c = !1);
        var h = u.getBoundingClientRect(),
          M = 1,
          O = 1;
        l &&
          (0, n.Re)(u) &&
          ((M = (u.offsetWidth > 0 && (0, a.NM)(h.width) / u.offsetWidth) || 1),
          (O = (u.offsetHeight > 0 && (0, a.NM)(h.height) / u.offsetHeight) || 1));
        var p = ((0, n.kK)(u) ? (0, s.Z)(u) : window).visualViewport,
          o = !(0, d.Z)() && c,
          e = (h.left + (o && p ? p.offsetLeft : 0)) / M,
          m = (h.top + (o && p ? p.offsetTop : 0)) / O,
          B = h.width / M,
          x = h.height / O;
        return { width: B, height: x, top: m, right: e + B, bottom: m + x, left: e, x: e, y: m };
      }
    },
    1422: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(5211);
      function a(s) {
        return (0, n.Z)(s).getComputedStyle(s);
      }
    },
    8863: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(7577);
      function a(s) {
        return (((0, n.kK)(s) ? s.ownerDocument : s.document) || window.document).documentElement;
      }
    },
    4436: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(309);
      function a(s) {
        var d = (0, n.Z)(s),
          f = s.offsetWidth,
          u = s.offsetHeight;
        return (
          Math.abs(d.width - f) <= 1 && (f = d.width),
          Math.abs(d.height - u) <= 1 && (u = d.height),
          { x: s.offsetLeft, y: s.offsetTop, width: f, height: u }
        );
      }
    },
    3535: (R, v, t) => {
      function n(a) {
        return a ? (a.nodeName || '').toLowerCase() : null;
      }
      t.d(v, { Z: () => n });
    },
    4826: (R, v, t) => {
      t.d(v, { Z: () => M });
      var n = t(5211),
        a = t(3535),
        s = t(1422),
        d = t(7577);
      function f(O) {
        return ['table', 'td', 'th'].indexOf((0, a.Z)(O)) >= 0;
      }
      var u = t(3449),
        l = t(549);
      function c(O) {
        return (0, d.Re)(O) && 'fixed' !== (0, s.Z)(O).position ? O.offsetParent : null;
      }
      function M(O) {
        for (var Z = (0, n.Z)(O), p = c(O); p && f(p) && 'static' === (0, s.Z)(p).position; ) p = c(p);
        return p && ('html' === (0, a.Z)(p) || ('body' === (0, a.Z)(p) && 'static' === (0, s.Z)(p).position))
          ? Z
          : p ||
              (function h(O) {
                var Z = /firefox/i.test((0, l.Z)());
                if (/Trident/i.test((0, l.Z)()) && (0, d.Re)(O) && 'fixed' === (0, s.Z)(O).position) return null;
                var e = (0, u.Z)(O);
                for ((0, d.Zq)(e) && (e = e.host); (0, d.Re)(e) && ['html', 'body'].indexOf((0, a.Z)(e)) < 0; ) {
                  var m = (0, s.Z)(e);
                  if (
                    'none' !== m.transform ||
                    'none' !== m.perspective ||
                    'paint' === m.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(m.willChange) ||
                    (Z && 'filter' === m.willChange) ||
                    (Z && m.filter && 'none' !== m.filter)
                  )
                    return e;
                  e = e.parentNode;
                }
                return null;
              })(O) ||
              Z;
      }
    },
    3449: (R, v, t) => {
      t.d(v, { Z: () => d });
      var n = t(3535),
        a = t(8863),
        s = t(7577);
      function d(f) {
        return 'html' === (0, n.Z)(f)
          ? f
          : f.assignedSlot || f.parentNode || ((0, s.Zq)(f) ? f.host : null) || (0, a.Z)(f);
      }
    },
    5211: (R, v, t) => {
      function n(a) {
        if (null == a) return window;
        if ('[object Window]' !== a.toString()) {
          var s = a.ownerDocument;
          return (s && s.defaultView) || window;
        }
        return a;
      }
      t.d(v, { Z: () => n });
    },
    6919: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(5211);
      function a(s) {
        var d = (0, n.Z)(s);
        return { scrollLeft: d.pageXOffset, scrollTop: d.pageYOffset };
      }
    },
    7319: (R, v, t) => {
      t.d(v, { Z: () => d });
      var n = t(309),
        a = t(8863),
        s = t(6919);
      function d(f) {
        return (0, n.Z)((0, a.Z)(f)).left + (0, s.Z)(f).scrollLeft;
      }
    },
    7577: (R, v, t) => {
      t.d(v, { Re: () => s, Zq: () => d, kK: () => a });
      var n = t(5211);
      function a(f) {
        return f instanceof (0, n.Z)(f).Element || f instanceof Element;
      }
      function s(f) {
        return f instanceof (0, n.Z)(f).HTMLElement || f instanceof HTMLElement;
      }
      function d(f) {
        return 'undefined' != typeof ShadowRoot && (f instanceof (0, n.Z)(f).ShadowRoot || f instanceof ShadowRoot);
      }
    },
    4796: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(549);
      function a() {
        return !/^((?!chrome|android).)*safari/i.test((0, n.Z)());
      }
    },
    1804: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(1422);
      function a(s) {
        var d = (0, n.Z)(s);
        return /auto|scroll|overlay|hidden/.test(d.overflow + d.overflowY + d.overflowX);
      }
    },
    8941: (R, v, t) => {
      t.d(v, { Z: () => l });
      var n = t(3449),
        a = t(1804),
        s = t(3535),
        d = t(7577);
      function f(c) {
        return ['html', 'body', '#document'].indexOf((0, s.Z)(c)) >= 0
          ? c.ownerDocument.body
          : (0, d.Re)(c) && (0, a.Z)(c)
          ? c
          : f((0, n.Z)(c));
      }
      var u = t(5211);
      function l(c, h) {
        var M;
        void 0 === h && (h = []);
        var O = f(c),
          Z = O === (null == (M = c.ownerDocument) ? void 0 : M.body),
          p = (0, u.Z)(O),
          o = Z ? [p].concat(p.visualViewport || [], (0, a.Z)(O) ? O : []) : O,
          e = h.concat(o);
        return Z ? e : e.concat(l((0, n.Z)(o)));
      }
    },
    910: (R, v, t) => {
      t.d(v, {
        BL: () => l,
        Ct: () => o,
        F2: () => s,
        I: () => a,
        Pj: () => M,
        YP: () => Z,
        bw: () => p,
        d7: () => f,
        k5: () => O,
        mv: () => u,
        t$: () => d,
        ut: () => c,
        we: () => n,
        xs: () => S,
        zV: () => h
      });
      var n = 'top',
        a = 'bottom',
        s = 'right',
        d = 'left',
        f = 'auto',
        u = [n, a, s, d],
        l = 'start',
        c = 'end',
        h = 'clippingParents',
        M = 'viewport',
        O = 'popper',
        Z = 'reference',
        p = u.reduce(function (V, P) {
          return V.concat([P + '-' + l, P + '-' + c]);
        }, []),
        o = [].concat(u, [f]).reduce(function (V, P) {
          return V.concat([P, P + '-' + l, P + '-' + c]);
        }, []),
        S = [
          'beforeRead',
          'read',
          'afterRead',
          'beforeMain',
          'main',
          'afterMain',
          'beforeWrite',
          'write',
          'afterWrite'
        ];
    },
    9208: (R, v, t) => {
      t.d(v, { Z: () => f });
      var n = t(3535),
        a = t(7577);
      const f = {
        name: 'applyStyles',
        enabled: !0,
        phase: 'write',
        fn: function s(u) {
          var l = u.state;
          Object.keys(l.elements).forEach(function (c) {
            var h = l.styles[c] || {},
              M = l.attributes[c] || {},
              O = l.elements[c];
            !(0, a.Re)(O) ||
              !(0, n.Z)(O) ||
              (Object.assign(O.style, h),
              Object.keys(M).forEach(function (Z) {
                var p = M[Z];
                !1 === p ? O.removeAttribute(Z) : O.setAttribute(Z, !0 === p ? '' : p);
              }));
          });
        },
        effect: function d(u) {
          var l = u.state,
            c = {
              popper: { position: l.options.strategy, left: '0', top: '0', margin: '0' },
              arrow: { position: 'absolute' },
              reference: {}
            };
          return (
            Object.assign(l.elements.popper.style, c.popper),
            (l.styles = c),
            l.elements.arrow && Object.assign(l.elements.arrow.style, c.arrow),
            function () {
              Object.keys(l.elements).forEach(function (h) {
                var M = l.elements[h],
                  O = l.attributes[h] || {},
                  p = Object.keys(l.styles.hasOwnProperty(h) ? l.styles[h] : c[h]).reduce(function (o, e) {
                    return (o[e] = ''), o;
                  }, {});
                !(0, a.Re)(M) ||
                  !(0, n.Z)(M) ||
                  (Object.assign(M.style, p),
                  Object.keys(O).forEach(function (o) {
                    M.removeAttribute(o);
                  }));
              });
            }
          );
        },
        requires: ['computeStyles']
      };
    },
    5443: (R, v, t) => {
      t.d(v, { Z: () => p });
      var n = t(8978),
        a = t(4436),
        s = t(7852),
        d = t(4826),
        f = t(3218),
        u = t(7327),
        l = t(3234),
        c = t(3857),
        h = t(910);
      const p = {
        name: 'arrow',
        enabled: !0,
        phase: 'main',
        fn: function O(o) {
          var e,
            m = o.state,
            B = o.name,
            x = o.options,
            U = m.elements.arrow,
            b = m.modifiersData.popperOffsets,
            N = (0, n.Z)(m.placement),
            W = (0, f.Z)(N),
            S = [h.t$, h.F2].indexOf(N) >= 0 ? 'height' : 'width';
          if (U && b) {
            var V = (function (e, m) {
                return (
                  (e = 'function' == typeof e ? e(Object.assign({}, m.rects, { placement: m.placement })) : e),
                  (0, l.Z)('number' != typeof e ? e : (0, c.Z)(e, h.mv))
                );
              })(x.padding, m),
              P = (0, a.Z)(U),
              r = 'y' === W ? h.we : h.t$,
              g = 'y' === W ? h.I : h.F2,
              i = m.rects.reference[S] + m.rects.reference[W] - b[W] - m.rects.popper[S],
              A = b[W] - m.rects.reference[W],
              E = (0, d.Z)(U),
              C = E ? ('y' === W ? E.clientHeight || 0 : E.clientWidth || 0) : 0,
              y = C / 2 - P[S] / 2 + (i / 2 - A / 2),
              j = (0, u.u)(V[r], y, C - P[S] - V[g]);
            m.modifiersData[B] = (((e = {})[W] = j), (e.centerOffset = j - y), e);
          }
        },
        effect: function Z(o) {
          var e = o.state,
            B = o.options.element,
            x = void 0 === B ? '[data-popper-arrow]' : B;
          null != x &&
            (('string' == typeof x && !(x = e.elements.popper.querySelector(x))) ||
              !(0, s.Z)(e.elements.popper, x) ||
              (e.elements.arrow = x));
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow']
      };
    },
    7745: (R, v, t) => {
      t.d(v, { Z: () => p });
      var n = t(910),
        a = t(4826),
        s = t(5211),
        d = t(8863),
        f = t(1422),
        u = t(8978),
        l = t(1786),
        c = t(373),
        h = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
      function O(o) {
        var e,
          m = o.popper,
          B = o.popperRect,
          x = o.placement,
          U = o.variation,
          b = o.offsets,
          N = o.position,
          W = o.gpuAcceleration,
          F = o.adaptive,
          S = o.roundOffsets,
          V = o.isFixed,
          P = b.x,
          r = void 0 === P ? 0 : P,
          g = b.y,
          i = void 0 === g ? 0 : g,
          A = 'function' == typeof S ? S({ x: r, y: i }) : { x: r, y: i };
        (r = A.x), (i = A.y);
        var E = b.hasOwnProperty('x'),
          C = b.hasOwnProperty('y'),
          w = n.t$,
          D = n.we,
          _ = window;
        if (F) {
          var y = (0, a.Z)(m),
            j = 'clientHeight',
            $ = 'clientWidth';
          y === (0, s.Z)(m) &&
            ((y = (0, d.Z)(m)),
            'static' !== (0, f.Z)(y).position && 'absolute' === N && ((j = 'scrollHeight'), ($ = 'scrollWidth'))),
            (x === n.we || ((x === n.t$ || x === n.F2) && U === n.ut)) &&
              ((D = n.I),
              (i -= (V && y === _ && _.visualViewport ? _.visualViewport.height : y[j]) - B.height),
              (i *= W ? 1 : -1)),
            (x !== n.t$ && ((x !== n.we && x !== n.I) || U !== n.ut)) ||
              ((w = n.F2),
              (r -= (V && y === _ && _.visualViewport ? _.visualViewport.width : y[$]) - B.width),
              (r *= W ? 1 : -1));
        }
        var I,
          J = Object.assign({ position: N }, F && h),
          L =
            !0 === S
              ? (function M(o, e) {
                  var B = o.y,
                    x = e.devicePixelRatio || 1;
                  return { x: (0, c.NM)(o.x * x) / x || 0, y: (0, c.NM)(B * x) / x || 0 };
                })({ x: r, y: i }, (0, s.Z)(m))
              : { x: r, y: i };
        return (
          (r = L.x),
          (i = L.y),
          Object.assign(
            {},
            J,
            W
              ? (((I = {})[D] = C ? '0' : ''),
                (I[w] = E ? '0' : ''),
                (I.transform =
                  (_.devicePixelRatio || 1) <= 1
                    ? 'translate(' + r + 'px, ' + i + 'px)'
                    : 'translate3d(' + r + 'px, ' + i + 'px, 0)'),
                I)
              : (((e = {})[D] = C ? i + 'px' : ''), (e[w] = E ? r + 'px' : ''), (e.transform = ''), e)
          )
        );
      }
      const p = {
        name: 'computeStyles',
        enabled: !0,
        phase: 'beforeWrite',
        fn: function Z(o) {
          var e = o.state,
            m = o.options,
            B = m.gpuAcceleration,
            x = void 0 === B || B,
            U = m.adaptive,
            b = void 0 === U || U,
            N = m.roundOffsets,
            W = void 0 === N || N,
            F = {
              placement: (0, u.Z)(e.placement),
              variation: (0, l.Z)(e.placement),
              popper: e.elements.popper,
              popperRect: e.rects.popper,
              gpuAcceleration: x,
              isFixed: 'fixed' === e.options.strategy
            };
          null != e.modifiersData.popperOffsets &&
            (e.styles.popper = Object.assign(
              {},
              e.styles.popper,
              O(
                Object.assign({}, F, {
                  offsets: e.modifiersData.popperOffsets,
                  position: e.options.strategy,
                  adaptive: b,
                  roundOffsets: W
                })
              )
            )),
            null != e.modifiersData.arrow &&
              (e.styles.arrow = Object.assign(
                {},
                e.styles.arrow,
                O(
                  Object.assign({}, F, {
                    offsets: e.modifiersData.arrow,
                    position: 'absolute',
                    adaptive: !1,
                    roundOffsets: W
                  })
                )
              )),
            (e.attributes.popper = Object.assign({}, e.attributes.popper, { 'data-popper-placement': e.placement }));
        },
        data: {}
      };
    },
    1971: (R, v, t) => {
      t.d(v, { Z: () => d });
      var n = t(5211),
        a = { passive: !0 };
      const d = {
        name: 'eventListeners',
        enabled: !0,
        phase: 'write',
        fn: function () {},
        effect: function s(f) {
          var u = f.state,
            l = f.instance,
            c = f.options,
            h = c.scroll,
            M = void 0 === h || h,
            O = c.resize,
            Z = void 0 === O || O,
            p = (0, n.Z)(u.elements.popper),
            o = [].concat(u.scrollParents.reference, u.scrollParents.popper);
          return (
            M &&
              o.forEach(function (e) {
                e.addEventListener('scroll', l.update, a);
              }),
            Z && p.addEventListener('resize', l.update, a),
            function () {
              M &&
                o.forEach(function (e) {
                  e.removeEventListener('scroll', l.update, a);
                }),
                Z && p.removeEventListener('resize', l.update, a);
            }
          );
        },
        data: {}
      };
    },
    1363: (R, v, t) => {
      t.d(v, { Z: () => Z });
      var n = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      function a(p) {
        return p.replace(/left|right|bottom|top/g, function (o) {
          return n[o];
        });
      }
      var s = t(8978),
        d = { start: 'end', end: 'start' };
      function f(p) {
        return p.replace(/start|end/g, function (o) {
          return d[o];
        });
      }
      var u = t(1785),
        l = t(1786),
        c = t(910);
      const Z = {
        name: 'flip',
        enabled: !0,
        phase: 'main',
        fn: function O(p) {
          var o = p.state,
            e = p.options,
            m = p.name;
          if (!o.modifiersData[m]._skip) {
            for (
              var B = e.mainAxis,
                x = void 0 === B || B,
                U = e.altAxis,
                b = void 0 === U || U,
                N = e.fallbackPlacements,
                W = e.padding,
                F = e.boundary,
                S = e.rootBoundary,
                V = e.altBoundary,
                P = e.flipVariations,
                r = void 0 === P || P,
                g = e.allowedAutoPlacements,
                i = o.options.placement,
                A = (0, s.Z)(i),
                C =
                  N ||
                  (A !== i && r
                    ? (function M(p) {
                        if ((0, s.Z)(p) === c.d7) return [];
                        var o = a(p);
                        return [f(p), o, f(o)];
                      })(i)
                    : [a(i)]),
                w = [i].concat(C).reduce(function (q, tt) {
                  return q.concat(
                    (0, s.Z)(tt) === c.d7
                      ? (function h(p, o) {
                          void 0 === o && (o = {});
                          var B = o.boundary,
                            x = o.rootBoundary,
                            U = o.padding,
                            b = o.flipVariations,
                            N = o.allowedAutoPlacements,
                            W = void 0 === N ? c.Ct : N,
                            F = (0, l.Z)(o.placement),
                            S = F
                              ? b
                                ? c.bw
                                : c.bw.filter(function (r) {
                                    return (0, l.Z)(r) === F;
                                  })
                              : c.mv,
                            V = S.filter(function (r) {
                              return W.indexOf(r) >= 0;
                            });
                          0 === V.length && (V = S);
                          var P = V.reduce(function (r, g) {
                            return (
                              (r[g] = (0, u.Z)(p, { placement: g, boundary: B, rootBoundary: x, padding: U })[
                                (0, s.Z)(g)
                              ]),
                              r
                            );
                          }, {});
                          return Object.keys(P).sort(function (r, g) {
                            return P[r] - P[g];
                          });
                        })(o, {
                          placement: tt,
                          boundary: F,
                          rootBoundary: S,
                          padding: W,
                          flipVariations: r,
                          allowedAutoPlacements: g
                        })
                      : tt
                  );
                }, []),
                D = o.rects.reference,
                _ = o.rects.popper,
                y = new Map(),
                j = !0,
                $ = w[0],
                K = 0;
              K < w.length;
              K++
            ) {
              var H = w[K],
                J = (0, s.Z)(H),
                L = (0, l.Z)(H) === c.BL,
                I = [c.we, c.I].indexOf(J) >= 0,
                X = I ? 'width' : 'height',
                G = (0, u.Z)(o, { placement: H, boundary: F, rootBoundary: S, altBoundary: V, padding: W }),
                T = I ? (L ? c.F2 : c.t$) : L ? c.I : c.we;
              D[X] > _[X] && (T = a(T));
              var Y = a(T),
                z = [];
              if (
                (x && z.push(G[J] <= 0),
                b && z.push(G[T] <= 0, G[Y] <= 0),
                z.every(function (q) {
                  return q;
                }))
              ) {
                ($ = H), (j = !1);
                break;
              }
              y.set(H, z);
            }
            if (j)
              for (
                var nt = function (tt) {
                    var ot = w.find(function (rt) {
                      var it = y.get(rt);
                      if (it)
                        return it.slice(0, tt).every(function (at) {
                          return at;
                        });
                    });
                    if (ot) return ($ = ot), 'break';
                  },
                  et = r ? 3 : 1;
                et > 0 && 'break' !== nt(et);
                et--
              );
            o.placement !== $ && ((o.modifiersData[m]._skip = !0), (o.placement = $), (o.reset = !0));
          }
        },
        requiresIfExists: ['offset'],
        data: { _skip: !1 }
      };
    },
    3718: (R, v, t) => {
      t.d(v, { Z: () => f });
      var n = t(8978),
        a = t(910);
      const f = {
        name: 'offset',
        enabled: !0,
        phase: 'main',
        requires: ['popperOffsets'],
        fn: function d(u) {
          var l = u.state,
            h = u.name,
            M = u.options.offset,
            O = void 0 === M ? [0, 0] : M,
            Z = a.Ct.reduce(function (m, B) {
              return (
                (m[B] = (function s(u, l, c) {
                  var h = (0, n.Z)(u),
                    M = [a.t$, a.we].indexOf(h) >= 0 ? -1 : 1,
                    O = 'function' == typeof c ? c(Object.assign({}, l, { placement: u })) : c,
                    Z = O[0],
                    p = O[1];
                  return (
                    (Z = Z || 0), (p = (p || 0) * M), [a.t$, a.F2].indexOf(h) >= 0 ? { x: p, y: Z } : { x: Z, y: p }
                  );
                })(B, l.rects, O)),
                m
              );
            }, {}),
            p = Z[l.placement],
            e = p.y;
          null != l.modifiersData.popperOffsets &&
            ((l.modifiersData.popperOffsets.x += p.x), (l.modifiersData.popperOffsets.y += e)),
            (l.modifiersData[h] = Z);
        }
      };
    },
    9696: (R, v, t) => {
      t.d(v, { Z: () => s });
      var n = t(2551);
      const s = {
        name: 'popperOffsets',
        enabled: !0,
        phase: 'read',
        fn: function a(d) {
          var f = d.state;
          f.modifiersData[d.name] = (0, n.Z)({
            reference: f.rects.reference,
            element: f.rects.popper,
            strategy: 'absolute',
            placement: f.placement
          });
        },
        data: {}
      };
    },
    9429: (R, v, t) => {
      t.d(v, { Z: () => p });
      var n = t(910),
        a = t(8978),
        s = t(3218),
        f = t(7327),
        u = t(4436),
        l = t(4826),
        c = t(1785),
        h = t(1786),
        M = t(613),
        O = t(373);
      const p = {
        name: 'preventOverflow',
        enabled: !0,
        phase: 'main',
        fn: function Z(o) {
          var e = o.state,
            m = o.options,
            B = o.name,
            x = m.mainAxis,
            U = void 0 === x || x,
            b = m.altAxis,
            N = void 0 !== b && b,
            P = m.tether,
            r = void 0 === P || P,
            g = m.tetherOffset,
            i = void 0 === g ? 0 : g,
            A = (0, c.Z)(e, {
              boundary: m.boundary,
              rootBoundary: m.rootBoundary,
              padding: m.padding,
              altBoundary: m.altBoundary
            }),
            E = (0, a.Z)(e.placement),
            C = (0, h.Z)(e.placement),
            w = !C,
            D = (0, s.Z)(E),
            _ = (function d(o) {
              return 'x' === o ? 'y' : 'x';
            })(D),
            y = e.modifiersData.popperOffsets,
            j = e.rects.reference,
            $ = e.rects.popper,
            K = 'function' == typeof i ? i(Object.assign({}, e.rects, { placement: e.placement })) : i,
            H = 'number' == typeof K ? { mainAxis: K, altAxis: K } : Object.assign({ mainAxis: 0, altAxis: 0 }, K),
            J = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
            L = { x: 0, y: 0 };
          if (y) {
            if (U) {
              var I,
                X = 'y' === D ? n.we : n.t$,
                G = 'y' === D ? n.I : n.F2,
                T = 'y' === D ? 'height' : 'width',
                Y = y[D],
                z = Y + A[X],
                Q = Y - A[G],
                nt = r ? -$[T] / 2 : 0,
                et = C === n.BL ? j[T] : $[T],
                k = C === n.BL ? -$[T] : -j[T],
                q = e.elements.arrow,
                tt = r && q ? (0, u.Z)(q) : { width: 0, height: 0 },
                ot = e.modifiersData['arrow#persistent'] ? e.modifiersData['arrow#persistent'].padding : (0, M.Z)(),
                rt = ot[X],
                it = ot[G],
                at = (0, f.u)(0, j[T], tt[T]),
                Pt = w ? j[T] / 2 - nt - at - rt - H.mainAxis : et - at - rt - H.mainAxis,
                yt = w ? -j[T] / 2 + nt + at + it + H.mainAxis : k + at + it + H.mainAxis,
                lt = e.elements.arrow && (0, l.Z)(e.elements.arrow),
                dt = null != (I = null == J ? void 0 : J[D]) ? I : 0,
                Mt = Y + yt - dt,
                vt = (0, f.u)(
                  r ? (0, O.VV)(z, Y + Pt - dt - (lt ? ('y' === D ? lt.clientTop || 0 : lt.clientLeft || 0) : 0)) : z,
                  Y,
                  r ? (0, O.Fp)(Q, Mt) : Q
                );
              (y[D] = vt), (L[D] = vt - Y);
            }
            if (N) {
              var ct,
                st = y[_],
                ft = 'y' === _ ? 'height' : 'width',
                pt = st + A['x' === D ? n.we : n.t$],
                mt = st - A['x' === D ? n.I : n.F2],
                ut = -1 !== [n.we, n.t$].indexOf(E),
                gt = null != (ct = null == J ? void 0 : J[_]) ? ct : 0,
                ht = ut ? pt : st - j[ft] - $[ft] - gt + H.altAxis,
                Ot = ut ? st + j[ft] + $[ft] - gt - H.altAxis : mt,
                Et = r && ut ? (0, f.q)(ht, st, Ot) : (0, f.u)(r ? ht : pt, st, r ? Ot : mt);
              (y[_] = Et), (L[_] = Et - st);
            }
            e.modifiersData[B] = L;
          }
        },
        requiresIfExists: ['offset']
      };
    },
    2551: (R, v, t) => {
      t.d(v, { Z: () => f });
      var n = t(8978),
        a = t(1786),
        s = t(3218),
        d = t(910);
      function f(u) {
        var o,
          l = u.reference,
          c = u.element,
          h = u.placement,
          M = h ? (0, n.Z)(h) : null,
          O = h ? (0, a.Z)(h) : null,
          Z = l.x + l.width / 2 - c.width / 2,
          p = l.y + l.height / 2 - c.height / 2;
        switch (M) {
          case d.we:
            o = { x: Z, y: l.y - c.height };
            break;
          case d.I:
            o = { x: Z, y: l.y + l.height };
            break;
          case d.F2:
            o = { x: l.x + l.width, y: p };
            break;
          case d.t$:
            o = { x: l.x - c.width, y: p };
            break;
          default:
            o = { x: l.x, y: l.y };
        }
        var e = M ? (0, s.Z)(M) : null;
        if (null != e) {
          var m = 'y' === e ? 'height' : 'width';
          switch (O) {
            case d.BL:
              o[e] = o[e] - (l[m] / 2 - c[m] / 2);
              break;
            case d.ut:
              o[e] = o[e] + (l[m] / 2 - c[m] / 2);
          }
        }
        return o;
      }
    },
    1785: (R, v, t) => {
      t.d(v, { Z: () => P });
      var n = t(910),
        a = t(5211),
        s = t(8863),
        d = t(7319),
        f = t(4796),
        l = t(1422),
        c = t(6919),
        h = t(373),
        O = t(8941),
        Z = t(4826),
        p = t(7577),
        o = t(309),
        e = t(3449),
        m = t(7852),
        B = t(3535);
      function x(r) {
        return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
      }
      function b(r, g, i) {
        return g === n.Pj
          ? x(
              (function u(r, g) {
                var i = (0, a.Z)(r),
                  A = (0, s.Z)(r),
                  E = i.visualViewport,
                  C = A.clientWidth,
                  w = A.clientHeight,
                  D = 0,
                  _ = 0;
                if (E) {
                  (C = E.width), (w = E.height);
                  var y = (0, f.Z)();
                  (y || (!y && 'fixed' === g)) && ((D = E.offsetLeft), (_ = E.offsetTop));
                }
                return { width: C, height: w, x: D + (0, d.Z)(r), y: _ };
              })(r, i)
            )
          : (0, p.kK)(g)
          ? (function U(r, g) {
              var i = (0, o.Z)(r, !1, 'fixed' === g);
              return (
                (i.top = i.top + r.clientTop),
                (i.left = i.left + r.clientLeft),
                (i.bottom = i.top + r.clientHeight),
                (i.right = i.left + r.clientWidth),
                (i.width = r.clientWidth),
                (i.height = r.clientHeight),
                (i.x = i.left),
                (i.y = i.top),
                i
              );
            })(g, i)
          : x(
              (function M(r) {
                var g,
                  i = (0, s.Z)(r),
                  A = (0, c.Z)(r),
                  E = null == (g = r.ownerDocument) ? void 0 : g.body,
                  C = (0, h.Fp)(i.scrollWidth, i.clientWidth, E ? E.scrollWidth : 0, E ? E.clientWidth : 0),
                  w = (0, h.Fp)(i.scrollHeight, i.clientHeight, E ? E.scrollHeight : 0, E ? E.clientHeight : 0),
                  D = -A.scrollLeft + (0, d.Z)(r),
                  _ = -A.scrollTop;
                return (
                  'rtl' === (0, l.Z)(E || i).direction && (D += (0, h.Fp)(i.clientWidth, E ? E.clientWidth : 0) - C),
                  { width: C, height: w, x: D, y: _ }
                );
              })((0, s.Z)(r))
            );
      }
      var F = t(2551),
        S = t(3234),
        V = t(3857);
      function P(r, g) {
        void 0 === g && (g = {});
        var A = g.placement,
          E = void 0 === A ? r.placement : A,
          C = g.strategy,
          w = void 0 === C ? r.strategy : C,
          D = g.boundary,
          _ = void 0 === D ? n.zV : D,
          y = g.rootBoundary,
          j = void 0 === y ? n.Pj : y,
          $ = g.elementContext,
          K = void 0 === $ ? n.k5 : $,
          H = g.altBoundary,
          J = void 0 !== H && H,
          L = g.padding,
          I = void 0 === L ? 0 : L,
          X = (0, S.Z)('number' != typeof I ? I : (0, V.Z)(I, n.mv)),
          T = r.rects.popper,
          Y = r.elements[J ? (K === n.k5 ? n.YP : n.k5) : K],
          z = (function W(r, g, i, A) {
            var E =
                'clippingParents' === g
                  ? (function N(r) {
                      var g = (0, O.Z)((0, e.Z)(r)),
                        A = ['absolute', 'fixed'].indexOf((0, l.Z)(r).position) >= 0 && (0, p.Re)(r) ? (0, Z.Z)(r) : r;
                      return (0, p.kK)(A)
                        ? g.filter(function (E) {
                            return (0, p.kK)(E) && (0, m.Z)(E, A) && 'body' !== (0, B.Z)(E);
                          })
                        : [];
                    })(r)
                  : [].concat(g),
              C = [].concat(E, [i]),
              D = C.reduce(function (_, y) {
                var j = b(r, y, A);
                return (
                  (_.top = (0, h.Fp)(j.top, _.top)),
                  (_.right = (0, h.VV)(j.right, _.right)),
                  (_.bottom = (0, h.VV)(j.bottom, _.bottom)),
                  (_.left = (0, h.Fp)(j.left, _.left)),
                  _
                );
              }, b(r, C[0], A));
            return (D.width = D.right - D.left), (D.height = D.bottom - D.top), (D.x = D.left), (D.y = D.top), D;
          })((0, p.kK)(Y) ? Y : Y.contextElement || (0, s.Z)(r.elements.popper), _, j, w),
          Q = (0, o.Z)(r.elements.reference),
          nt = (0, F.Z)({ reference: Q, element: T, strategy: 'absolute', placement: E }),
          et = x(Object.assign({}, T, nt)),
          k = K === n.k5 ? et : Q,
          q = {
            top: z.top - k.top + X.top,
            bottom: k.bottom - z.bottom + X.bottom,
            left: z.left - k.left + X.left,
            right: k.right - z.right + X.right
          },
          tt = r.modifiersData.offset;
        if (K === n.k5 && tt) {
          var ot = tt[E];
          Object.keys(q).forEach(function (rt) {
            var it = [n.F2, n.I].indexOf(rt) >= 0 ? 1 : -1,
              at = [n.we, n.I].indexOf(rt) >= 0 ? 'y' : 'x';
            q[rt] += ot[at] * it;
          });
        }
        return q;
      }
    },
    3857: (R, v, t) => {
      function n(a, s) {
        return s.reduce(function (d, f) {
          return (d[f] = a), d;
        }, {});
      }
      t.d(v, { Z: () => n });
    },
    8978: (R, v, t) => {
      function n(a) {
        return a.split('-')[0];
      }
      t.d(v, { Z: () => n });
    },
    613: (R, v, t) => {
      function n() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      t.d(v, { Z: () => n });
    },
    3218: (R, v, t) => {
      function n(a) {
        return ['top', 'bottom'].indexOf(a) >= 0 ? 'x' : 'y';
      }
      t.d(v, { Z: () => n });
    },
    1786: (R, v, t) => {
      function n(a) {
        return a.split('-')[1];
      }
      t.d(v, { Z: () => n });
    },
    373: (R, v, t) => {
      t.d(v, { Fp: () => n, NM: () => s, VV: () => a });
      var n = Math.max,
        a = Math.min,
        s = Math.round;
    },
    3234: (R, v, t) => {
      t.d(v, { Z: () => a });
      var n = t(613);
      function a(s) {
        return Object.assign({}, (0, n.Z)(), s);
      }
    },
    549: (R, v, t) => {
      function n() {
        var a = navigator.userAgentData;
        return null != a && a.brands && Array.isArray(a.brands)
          ? a.brands
              .map(function (s) {
                return s.brand + '/' + s.version;
              })
              .join(' ')
          : navigator.userAgent;
      }
      t.d(v, { Z: () => n });
    },
    7327: (R, v, t) => {
      t.d(v, { q: () => s, u: () => a });
      var n = t(373);
      function a(d, f, u) {
        return (0, n.Fp)(d, (0, n.VV)(f, u));
      }
      function s(d, f, u) {
        var l = a(d, f, u);
        return l > u ? u : l;
      }
    }
  }
]);
