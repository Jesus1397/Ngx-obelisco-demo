(() => {
  'use strict';
  var e,
    v = {},
    m = {};
  function a(e) {
    var t = m[e];
    if (void 0 !== t) return t.exports;
    var f = (m[e] = { exports: {} });
    return v[e](f, f.exports, a), f.exports;
  }
  (a.m = v),
    (e = []),
    (a.O = (t, f, c, n) => {
      if (!f) {
        var r = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [f, c, n] = e[d], u = !0, b = 0; b < f.length; b++)
            (!1 & n || r >= n) && Object.keys(a.O).every((p) => a.O[p](f[b]))
              ? f.splice(b--, 1)
              : ((u = !1), n < r && (r = n));
          if (u) {
            e.splice(d--, 1);
            var i = c();
            void 0 !== i && (t = i);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [f, c, n];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var f in t) a.o(t, f) && !a.o(e, f) && Object.defineProperty(e, f, { enumerable: !0, get: t[f] });
    }),
    (a.f = {}),
    (a.e = (e) => Promise.all(Object.keys(a.f).reduce((t, f) => (a.f[f](e, t), t), []))),
    (a.u = (e) =>
      (8592 === e ? 'common' : e) +
      '.' +
      {
        1295: 'aa76b459b10ffe90',
        1322: '34bb2e8d03a8160f',
        1343: '9968618483bd65e7',
        1519: '09b9af485e6c2036',
        1648: 'de99cd24c8a2de90',
        1908: 'e89b7138b4250d45',
        1960: '3a2da2cf0fdc19d9',
        2062: 'a2f12d4684d984fd',
        2277: '0d44e96615141075',
        2345: '1087c6342d1e428f',
        2497: '11a85d649d3e923a',
        2737: '707091f9ec182934',
        2775: '372d4045c32791f0',
        2792: 'b966648b4d669bee',
        2825: 'ad66a4738b69c0d6',
        3124: 'ea4f72268e61ff09',
        3607: 'ed87133a13e5c804',
        3934: '4da227d1ec177ffd',
        3992: '51c01dbfdd967b93',
        4025: '234c10fb968807cb',
        4858: '914270def8c16c70',
        4892: 'd26cba5669e01aa4',
        5037: '8747912e3be5b5b7',
        5206: '7f600c2df3e12fbd',
        5220: 'fe5f87ef780bfe69',
        5353: 'bcdb126f7480e1f0',
        5612: '7cf69d06812a05a1',
        5725: '2ad49cbdfd5d6da7',
        6019: 'ec1ad46f6d3542f5',
        6037: '2861ba91a4ddbe5d',
        6045: '5f9c1482da060f92',
        6866: '26cbdd85434bf3ee',
        7024: '7c60d5431965f972',
        7037: 'f379a7528a5882d8',
        7097: '51293d887c7812cf',
        7236: '4dde6315e98450e9',
        7340: 'a1805a51ff5f3661',
        7556: '0647ac0d209c755d',
        8102: '847f2f22bdd5814d',
        8592: '87646901a81bbd41',
        8652: '7610ef0c8739974f',
        8783: '226212a0f86b3f10',
        8787: '3864113397ff3001',
        8960: 'd0ee50476ea7d27b',
        9414: 'c3276a7cbb1350e1',
        9504: '307ba18387051478',
        9667: '6e84b8537d12da30'
      }[e] +
      '.js'),
    (a.miniCssF = (e) => {}),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = 'ngx-obelisco-demo:';
      a.l = (f, c, n, d) => {
        if (e[f]) e[f].push(c);
        else {
          var r, u;
          if (void 0 !== n)
            for (var b = document.getElementsByTagName('script'), i = 0; i < b.length; i++) {
              var o = b[i];
              if (o.getAttribute('src') == f || o.getAttribute('data-webpack') == t + n) {
                r = o;
                break;
              }
            }
          r ||
            ((u = !0),
            ((r = document.createElement('script')).type = 'module'),
            (r.charset = 'utf-8'),
            (r.timeout = 120),
            a.nc && r.setAttribute('nonce', a.nc),
            r.setAttribute('data-webpack', t + n),
            (r.src = a.tu(f))),
            (e[f] = [c]);
          var l = (g, p) => {
              (r.onerror = r.onload = null), clearTimeout(s);
              var _ = e[f];
              if ((delete e[f], r.parentNode && r.parentNode.removeChild(r), _ && _.forEach((h) => h(p)), g))
                return g(p);
            },
            s = setTimeout(l.bind(null, void 0, { type: 'timeout', target: r }), 12e4);
          (r.onerror = l.bind(null, r.onerror)), (r.onload = l.bind(null, r.onload)), u && document.head.appendChild(r);
        }
      };
    })(),
    (a.r = (e) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      var e;
      a.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (t) => t }),
          'undefined' != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy('angular#bundler', e))),
        e
      );
    })(),
    (a.tu = (e) => a.tt().createScriptURL(e)),
    (a.p = ''),
    (() => {
      var e = { 3666: 0 };
      (a.f.j = (c, n) => {
        var d = a.o(e, c) ? e[c] : void 0;
        if (0 !== d)
          if (d) n.push(d[2]);
          else if (3666 != c) {
            var r = new Promise((o, l) => (d = e[c] = [o, l]));
            n.push((d[2] = r));
            var u = a.p + a.u(c),
              b = new Error();
            a.l(
              u,
              (o) => {
                if (a.o(e, c) && (0 !== (d = e[c]) && (e[c] = void 0), d)) {
                  var l = o && ('load' === o.type ? 'missing' : o.type),
                    s = o && o.target && o.target.src;
                  (b.message = 'Loading chunk ' + c + ' failed.\n(' + l + ': ' + s + ')'),
                    (b.name = 'ChunkLoadError'),
                    (b.type = l),
                    (b.request = s),
                    d[1](b);
                }
              },
              'chunk-' + c,
              c
            );
          } else e[c] = 0;
      }),
        (a.O.j = (c) => 0 === e[c]);
      var t = (c, n) => {
          var b,
            i,
            [d, r, u] = n,
            o = 0;
          if (d.some((s) => 0 !== e[s])) {
            for (b in r) a.o(r, b) && (a.m[b] = r[b]);
            if (u) var l = u(a);
          }
          for (c && c(n); o < d.length; o++) a.o(e, (i = d[o])) && e[i] && e[i][0](), (e[i] = 0);
          return a.O(l);
        },
        f = (self.webpackChunkngx_obelisco_demo = self.webpackChunkngx_obelisco_demo || []);
      f.forEach(t.bind(null, 0)), (f.push = t.bind(null, f.push.bind(f)));
    })();
})();
