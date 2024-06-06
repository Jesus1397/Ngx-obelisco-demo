var _self =
    'undefined' != typeof window
      ? window
      : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
      ? self
      : {},
  Prism = (function (l) {
    var d = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      F = 0,
      b = {},
      i = {
        manual: l.Prism && l.Prism.manual,
        disableWorkerMessageHandler: l.Prism && l.Prism.disableWorkerMessageHandler,
        util: {
          encode: function a(e) {
            return e instanceof m
              ? new m(e.type, a(e.content), e.alias)
              : Array.isArray(e)
              ? e.map(a)
              : e
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (a) {
            return Object.prototype.toString.call(a).slice(8, -1);
          },
          objId: function (a) {
            return a.__id || Object.defineProperty(a, '__id', { value: ++F }), a.__id;
          },
          clone: function a(e, t) {
            var n, r;
            switch (((t = t || {}), i.util.type(e))) {
              case 'Object':
                if (((r = i.util.objId(e)), t[r])) return t[r];
                for (var u in ((t[r] = n = {}), e)) e.hasOwnProperty(u) && (n[u] = a(e[u], t));
                return n;
              case 'Array':
                return (
                  (r = i.util.objId(e)),
                  t[r]
                    ? t[r]
                    : ((t[r] = n = []),
                      e.forEach(function (o, s) {
                        n[s] = a(o, t);
                      }),
                      n)
                );
              default:
                return e;
            }
          },
          getLanguage: function (a) {
            for (; a; ) {
              var e = d.exec(a.className);
              if (e) return e[1].toLowerCase();
              a = a.parentElement;
            }
            return 'none';
          },
          setLanguage: function (a, e) {
            (a.className = a.className.replace(RegExp(d, 'gi'), '')), a.classList.add('language-' + e);
          },
          currentScript: function () {
            if ('undefined' == typeof document) return null;
            if ('currentScript' in document) return document.currentScript;
            try {
              throw new Error();
            } catch (n) {
              var a = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack) || [])[1];
              if (a) {
                var e = document.getElementsByTagName('script');
                for (var t in e) if (e[t].src == a) return e[t];
              }
              return null;
            }
          },
          isActive: function (a, e, t) {
            for (var n = 'no-' + e; a; ) {
              var r = a.classList;
              if (r.contains(e)) return !0;
              if (r.contains(n)) return !1;
              a = a.parentElement;
            }
            return !!t;
          }
        },
        languages: {
          plain: b,
          plaintext: b,
          text: b,
          txt: b,
          extend: function (a, e) {
            var t = i.util.clone(i.languages[a]);
            for (var n in e) t[n] = e[n];
            return t;
          },
          insertBefore: function (a, e, t, n) {
            var r = (n = n || i.languages)[a],
              u = {};
            for (var o in r)
              if (r.hasOwnProperty(o)) {
                if (o == e) for (var s in t) t.hasOwnProperty(s) && (u[s] = t[s]);
                t.hasOwnProperty(o) || (u[o] = r[o]);
              }
            var c = n[a];
            return (
              (n[a] = u),
              i.languages.DFS(i.languages, function (h, x) {
                x === c && h != a && (this[h] = u);
              }),
              u
            );
          },
          DFS: function a(e, t, n, r) {
            r = r || {};
            var u = i.util.objId;
            for (var o in e)
              if (e.hasOwnProperty(o)) {
                t.call(e, o, e[o], n || o);
                var s = e[o],
                  c = i.util.type(s);
                'Object' !== c || r[u(s)]
                  ? 'Array' === c && !r[u(s)] && ((r[u(s)] = !0), a(s, t, o, r))
                  : ((r[u(s)] = !0), a(s, t, null, r));
              }
          }
        },
        plugins: {},
        highlightAll: function (a, e) {
          i.highlightAllUnder(document, a, e);
        },
        highlightAllUnder: function (a, e, t) {
          var n = {
            callback: t,
            container: a,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          i.hooks.run('before-highlightall', n),
            (n.elements = Array.prototype.slice.apply(n.container.querySelectorAll(n.selector))),
            i.hooks.run('before-all-elements-highlight', n);
          for (var u, r = 0; (u = n.elements[r++]); ) i.highlightElement(u, !0 === e, n.callback);
        },
        highlightElement: function (a, e, t) {
          var n = i.util.getLanguage(a),
            r = i.languages[n];
          i.util.setLanguage(a, n);
          var u = a.parentElement;
          u && 'pre' === u.nodeName.toLowerCase() && i.util.setLanguage(u, n);
          var s = { element: a, language: n, grammar: r, code: a.textContent };
          function c(x) {
            (s.highlightedCode = x),
              i.hooks.run('before-insert', s),
              (s.element.innerHTML = s.highlightedCode),
              i.hooks.run('after-highlight', s),
              i.hooks.run('complete', s),
              t && t.call(s.element);
          }
          if (
            (i.hooks.run('before-sanity-check', s),
            (u = s.element.parentElement) &&
              'pre' === u.nodeName.toLowerCase() &&
              !u.hasAttribute('tabindex') &&
              u.setAttribute('tabindex', '0'),
            !s.code)
          )
            return i.hooks.run('complete', s), void (t && t.call(s.element));
          if ((i.hooks.run('before-highlight', s), s.grammar))
            if (e && l.Worker) {
              var h = new Worker(i.filename);
              (h.onmessage = function (x) {
                c(x.data);
              }),
                h.postMessage(JSON.stringify({ language: s.language, code: s.code, immediateClose: !0 }));
            } else c(i.highlight(s.code, s.grammar, s.language));
          else c(i.util.encode(s.code));
        },
        highlight: function (a, e, t) {
          var n = { code: a, grammar: e, language: t };
          if ((i.hooks.run('before-tokenize', n), !n.grammar))
            throw new Error('The language "' + n.language + '" has no grammar.');
          return (
            (n.tokens = i.tokenize(n.code, n.grammar)),
            i.hooks.run('after-tokenize', n),
            m.stringify(i.util.encode(n.tokens), n.language)
          );
        },
        tokenize: function (a, e) {
          var t = e.rest;
          if (t) {
            for (var n in t) e[n] = t[n];
            delete e.rest;
          }
          var r = new E();
          return (
            k(r, r.head, a),
            T(a, r, e, r.head, 0),
            (function C(a) {
              for (var e = [], t = a.head.next; t !== a.tail; ) e.push(t.value), (t = t.next);
              return e;
            })(r)
          );
        },
        hooks: {
          all: {},
          add: function (a, e) {
            var t = i.hooks.all;
            (t[a] = t[a] || []), t[a].push(e);
          },
          run: function (a, e) {
            var t = i.hooks.all[a];
            if (t && t.length) for (var r, n = 0; (r = t[n++]); ) r(e);
          }
        },
        Token: m
      };
    function m(a, e, t, n) {
      (this.type = a), (this.content = e), (this.alias = t), (this.length = 0 | (n || '').length);
    }
    function S(a, e, t, n) {
      a.lastIndex = e;
      var r = a.exec(t);
      if (r && n && r[1]) {
        var u = r[1].length;
        (r.index += u), (r[0] = r[0].slice(u));
      }
      return r;
    }
    function T(a, e, t, n, r, u) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o]) {
          var s = t[o];
          s = Array.isArray(s) ? s : [s];
          for (var c = 0; c < s.length; ++c) {
            if (u && u.cause == o + ',' + c) return;
            var h = s[c],
              x = h.inside,
              R = !!h.lookbehind,
              Z = !!h.greedy,
              G = h.alias;
            if (Z && !h.pattern.global) {
              var B = h.pattern.toString().match(/[imsuy]*$/)[0];
              h.pattern = RegExp(h.pattern.source, B + 'g');
            }
            for (
              var H = h.pattern || h, v = n.next, A = r;
              v !== e.tail && !(u && A >= u.reach);
              A += v.value.length, v = v.next
            ) {
              var $ = v.value;
              if (e.length > a.length) return;
              if (!($ instanceof m)) {
                var y,
                  z = 1;
                if (Z) {
                  if (!(y = S(H, A, a, R)) || y.index >= a.length) break;
                  var L = y.index,
                    U = y.index + y[0].length,
                    w = A;
                  for (w += v.value.length; L >= w; ) w += (v = v.next).value.length;
                  if (((A = w -= v.value.length), v.value instanceof m)) continue;
                  for (var _ = v; _ !== e.tail && (w < U || 'string' == typeof _.value); _ = _.next)
                    z++, (w += _.value.length);
                  z--, ($ = a.slice(A, w)), (y.index -= A);
                } else if (!(y = S(H, 0, $, R))) continue;
                var P = y[0],
                  M = $.slice(0, (L = y.index)),
                  q = $.slice(L + P.length),
                  j = A + $.length;
                u && j > u.reach && (u.reach = j);
                var I = v.prev;
                if (
                  (M && ((I = k(e, I, M)), (A += M.length)),
                  D(e, I, z),
                  (v = k(e, I, new m(o, x ? i.tokenize(P, x) : P, G, P))),
                  q && k(e, v, q),
                  z > 1)
                ) {
                  var O = { cause: o + ',' + c, reach: j };
                  T(a, e, t, v.prev, A, O), u && O.reach > u.reach && (u.reach = O.reach);
                }
              }
            }
          }
        }
    }
    function E() {
      var a = { value: null, prev: null, next: null },
        e = { value: null, prev: a, next: null };
      (a.next = e), (this.head = a), (this.tail = e), (this.length = 0);
    }
    function k(a, e, t) {
      var n = e.next,
        r = { value: t, prev: e, next: n };
      return (e.next = r), (n.prev = r), a.length++, r;
    }
    function D(a, e, t) {
      for (var n = e.next, r = 0; r < t && n !== a.tail; r++) n = n.next;
      (e.next = n), (n.prev = e), (a.length -= r);
    }
    if (
      ((l.Prism = i),
      (m.stringify = function a(e, t) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) {
          var n = '';
          return (
            e.forEach(function (c) {
              n += a(c, t);
            }),
            n
          );
        }
        var r = {
            type: e.type,
            content: a(e.content, t),
            tag: 'span',
            classes: ['token', e.type],
            attributes: {},
            language: t
          },
          u = e.alias;
        u && (Array.isArray(u) ? Array.prototype.push.apply(r.classes, u) : r.classes.push(u)), i.hooks.run('wrap', r);
        var o = '';
        for (var s in r.attributes) o += ' ' + s + '="' + (r.attributes[s] || '').replace(/"/g, '&quot;') + '"';
        return '<' + r.tag + ' class="' + r.classes.join(' ') + '"' + o + '>' + r.content + '</' + r.tag + '>';
      }),
      !l.document)
    )
      return (
        l.addEventListener &&
          (i.disableWorkerMessageHandler ||
            l.addEventListener(
              'message',
              function (a) {
                var e = JSON.parse(a.data),
                  t = e.language,
                  r = e.immediateClose;
                l.postMessage(i.highlight(e.code, i.languages[t], t)), r && l.close();
              },
              !1
            )),
        i
      );
    var p = i.util.currentScript();
    function g() {
      i.manual || i.highlightAll();
    }
    if ((p && ((i.filename = p.src), p.hasAttribute('data-manual') && (i.manual = !0)), !i.manual)) {
      var f = document.readyState;
      'loading' === f || ('interactive' === f && p && p.defer)
        ? document.addEventListener('DOMContentLoaded', g)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(g)
        : window.setTimeout(g, 16);
    }
    return i;
  })(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism),
  'undefined' != typeof global && (global.Prism = Prism),
  (Prism.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              { pattern: /^=/, alias: 'attr-equals' },
              { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
      }
    },
    entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i]
  }),
  (Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity),
  (Prism.languages.markup.doctype.inside['internal-subset'].inside = Prism.languages.markup),
  Prism.hooks.add('wrap', function (l) {
    'entity' === l.type && (l.attributes.title = l.content.replace(/&amp;/, '&'));
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    value: function (d, F) {
      var b = {};
      (b['language-' + F] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[F]
      }),
        (b.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var i = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: b } };
      i['language-' + F] = { pattern: /[\s\S]+/, inside: Prism.languages[F] };
      var m = {};
      (m[d] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return d;
            }
          ),
          'i'
        ),
        lookbehind: !0,
        greedy: !0,
        inside: i
      }),
        Prism.languages.insertBefore('markup', 'cdata', m);
    }
  }),
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    value: function (l, d) {
      Prism.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(
          /(^|["'\s])/.source + '(?:' + l + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          'i'
        ),
        lookbehind: !0,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [d, 'language-' + d],
                inside: Prism.languages[d]
              },
              punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
            }
          }
        }
      });
    }
  }),
  (Prism.languages.html = Prism.languages.markup),
  (Prism.languages.mathml = Prism.languages.markup),
  (Prism.languages.svg = Prism.languages.markup),
  (Prism.languages.xml = Prism.languages.extend('markup', {})),
  (Prism.languages.ssml = Prism.languages.xml),
  (Prism.languages.atom = Prism.languages.xml),
  (Prism.languages.rss = Prism.languages.xml),
  (function (l) {
    var d = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (l.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(
          '@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + d.source + ')*?' + /(?:;|(?=\s*\{))/.source
        ),
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector'
          },
          keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 }
        }
      },
      url: {
        pattern: RegExp('\\burl\\((?:' + d.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + d.source + '$'), alias: 'url' }
        }
      },
      selector: {
        pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + d.source + ')*(?=\\s*\\{)'),
        lookbehind: !0
      },
      string: { pattern: d, greedy: !0 },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/
    }),
      (l.languages.css.atrule.inside.rest = l.languages.css);
    var F = l.languages.markup;
    F && (F.tag.addInlined('style', 'css'), F.tag.addAttribute('style', 'css'));
  })(Prism),
  (Prism.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
    ],
    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }),
  (Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          /NaN|Infinity/.source +
          '|' +
          /0[bB][01]+(?:_[01]+)*n?/.source +
          '|' +
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
          '|' +
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
          '|' +
          /\d+(?:_\d+)*n/.source +
          '|' +
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  })),
  (Prism.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: RegExp(
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          /\//.source +
          '(?:' +
          /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
          '|' +
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
            .source +
          ')' +
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/
      }
    },
    'function-variable': {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }),
  Prism.languages.insertBefore('javascript', 'string', {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
    'template-string': {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    'string-property': {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: 'property'
    }
  }),
  Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: 'property'
    }
  }),
  Prism.languages.markup &&
    (Prism.languages.markup.tag.addInlined('script', 'javascript'),
    Prism.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      'javascript'
    )),
  (Prism.languages.js = Prism.languages.javascript),
  (function () {
    if (void 0 !== Prism && 'undefined' != typeof document) {
      Element.prototype.matches ||
        (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var b = {
          js: 'javascript',
          py: 'python',
          rb: 'ruby',
          ps1: 'powershell',
          psm1: 'powershell',
          sh: 'bash',
          bat: 'batch',
          h: 'c',
          tex: 'latex'
        },
        i = 'data-src-status',
        m = 'loading',
        S = 'loaded',
        E = 'pre[data-src]:not([' + i + '="' + S + '"]):not([' + i + '="' + m + '"])';
      Prism.hooks.add('before-highlightall', function (p) {
        p.selector += ', ' + E;
      }),
        Prism.hooks.add('before-sanity-check', function (p) {
          var g = p.element;
          if (g.matches(E)) {
            (p.code = ''), g.setAttribute(i, m);
            var f = g.appendChild(document.createElement('CODE'));
            f.textContent = 'Loading\u2026';
            var a = g.getAttribute('data-src'),
              e = p.language;
            if ('none' === e) {
              var t = (/\.(\w+)$/.exec(a) || [, 'none'])[1];
              e = b[t] || t;
            }
            Prism.util.setLanguage(f, e), Prism.util.setLanguage(g, e);
            var n = Prism.plugins.autoloader;
            n && n.loadLanguages(e),
              (function k(p, g, f) {
                var a = new XMLHttpRequest();
                a.open('GET', p, !0),
                  (a.onreadystatechange = function () {
                    4 == a.readyState &&
                      (a.status < 400 && a.responseText
                        ? g(a.responseText)
                        : f(
                            a.status >= 400
                              ? (function (p, g) {
                                  return '\u2716 Error ' + p + ' while fetching file: ' + g;
                                })(a.status, a.statusText)
                              : '\u2716 Error: File does not exist or is empty'
                          ));
                  }),
                  a.send(null);
              })(
                a,
                function (r) {
                  g.setAttribute(i, S);
                  var u = (function D(p) {
                    var g = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(p || '');
                    if (g) {
                      var f = Number(g[1]),
                        e = g[3];
                      return g[2] ? (e ? [f, Number(e)] : [f, void 0]) : [f, f];
                    }
                  })(g.getAttribute('data-range'));
                  if (u) {
                    var o = r.split(/\r\n?|\n/g),
                      s = u[0],
                      c = null == u[1] ? o.length : u[1];
                    s < 0 && (s += o.length),
                      (s = Math.max(0, Math.min(s - 1, o.length))),
                      c < 0 && (c += o.length),
                      (c = Math.max(0, Math.min(c, o.length))),
                      (r = o.slice(s, c).join('\n')),
                      g.hasAttribute('data-start') || g.setAttribute('data-start', String(s + 1));
                  }
                  (f.textContent = r), Prism.highlightElement(f);
                },
                function (r) {
                  g.setAttribute(i, 'failed'), (f.textContent = r);
                }
              );
          }
        }),
        (Prism.plugins.fileHighlight = {
          highlight: function (g) {
            for (var e, f = (g || document).querySelectorAll(E), a = 0; (e = f[a++]); ) Prism.highlightElement(e);
          }
        });
      var C = !1;
      Prism.fileHighlight = function () {
        C ||
          (console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'),
          (C = !0)),
          Prism.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    }
  })(),
  (function (l) {
    (l.languages.typescript = l.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    })),
      l.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete l.languages.typescript.parameter,
      delete l.languages.typescript['literal-property'];
    var d = l.languages.extend('typescript', {});
    delete d['class-name'],
      (l.languages.typescript['class-name'].inside = d),
      l.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ }
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: d }
          }
        }
      }),
      (l.languages.ts = l.languages.typescript);
  })(Prism);
