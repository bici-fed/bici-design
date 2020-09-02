!(function(e, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n(
        require('react'),
        require('prop-types'),
        require('antd/es/notification'),
        require('dayjs'),
        require('dayjs/plugin/isSameOrBefore'),
        require('dayjs/plugin/isSameOrAfter'),
        require('dayjs/plugin/advancedFormat'),
        require('dayjs/plugin/customParseFormat'),
        require('dayjs/plugin/weekday'),
        require('dayjs/plugin/weekYear'),
        require('dayjs/plugin/weekOfYear'),
        require('dayjs/plugin/isMoment'),
        require('dayjs/plugin/localeData'),
        require('dayjs/plugin/localizedFormat'),
        require('lodash'),
        require('antd/es/notification/style/css'),
      ))
    : 'function' == typeof define && define.amd
    ? define([
        'react',
        'prop-types',
        'antd/es/notification',
        'dayjs',
        'dayjs/plugin/isSameOrBefore',
        'dayjs/plugin/isSameOrAfter',
        'dayjs/plugin/advancedFormat',
        'dayjs/plugin/customParseFormat',
        'dayjs/plugin/weekday',
        'dayjs/plugin/weekYear',
        'dayjs/plugin/weekOfYear',
        'dayjs/plugin/isMoment',
        'dayjs/plugin/localeData',
        'dayjs/plugin/localizedFormat',
        'lodash',
        'antd/es/notification/style/css',
      ], n)
    : 'object' == typeof exports
    ? (exports.BiciDesign = n(
        require('react'),
        require('prop-types'),
        require('antd/es/notification'),
        require('dayjs'),
        require('dayjs/plugin/isSameOrBefore'),
        require('dayjs/plugin/isSameOrAfter'),
        require('dayjs/plugin/advancedFormat'),
        require('dayjs/plugin/customParseFormat'),
        require('dayjs/plugin/weekday'),
        require('dayjs/plugin/weekYear'),
        require('dayjs/plugin/weekOfYear'),
        require('dayjs/plugin/isMoment'),
        require('dayjs/plugin/localeData'),
        require('dayjs/plugin/localizedFormat'),
        require('lodash'),
        require('antd/es/notification/style/css'),
      ))
    : (e.BiciDesign = n(
        e.react,
        e['prop-types'],
        e['antd/es/notification'],
        e.dayjs,
        e['dayjs/plugin/isSameOrBefore'],
        e['dayjs/plugin/isSameOrAfter'],
        e['dayjs/plugin/advancedFormat'],
        e['dayjs/plugin/customParseFormat'],
        e['dayjs/plugin/weekday'],
        e['dayjs/plugin/weekYear'],
        e['dayjs/plugin/weekOfYear'],
        e['dayjs/plugin/isMoment'],
        e['dayjs/plugin/localeData'],
        e['dayjs/plugin/localizedFormat'],
        e.lodash,
        e['antd/es/notification/style/css'],
      ));
})(window, function(e, n, t, r, i, o, a, u, s, c, l, d, f, p, y, v) {
  return (function(e) {
    var n = {};
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
      }),
      (t.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (t.t = function(e, n) {
        if ((1 & n && (e = t(e)), 8 & n)) return e;
        if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & n && 'string' != typeof e)
        )
          for (var i in e)
            t.d(
              r,
              i,
              function(n) {
                return e[n];
              }.bind(null, i),
            );
        return r;
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, 'a', n), n;
      }),
      (t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (t.p = ''),
      t((t.s = 6))
    );
  })([
    function(e, n, t) {
      'use strict';
      e.exports = function(e) {
        var n = [];
        return (
          (n.toString = function() {
            return this.map(function(n) {
              var t = (function(e, n) {
                var t = e[1] || '',
                  r = e[3];
                if (!r) return t;
                if (n && 'function' == typeof btoa) {
                  var i =
                      ((a = r),
                      (u = btoa(
                        unescape(encodeURIComponent(JSON.stringify(a))),
                      )),
                      (s = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        u,
                      )),
                      '/*# '.concat(s, ' */')),
                    o = r.sources.map(function(e) {
                      return '/*# sourceURL='
                        .concat(r.sourceRoot || '')
                        .concat(e, ' */');
                    });
                  return [t]
                    .concat(o)
                    .concat([i])
                    .join('\n');
                }
                var a, u, s;
                return [t].join('\n');
              })(n, e);
              return n[2] ? '@media '.concat(n[2], ' {').concat(t, '}') : t;
            }).join('');
          }),
          (n.i = function(e, t, r) {
            'string' == typeof e && (e = [[null, e, '']]);
            var i = {};
            if (r)
              for (var o = 0; o < this.length; o++) {
                var a = this[o][0];
                null != a && (i[a] = !0);
              }
            for (var u = 0; u < e.length; u++) {
              var s = [].concat(e[u]);
              (r && i[s[0]]) ||
                (t &&
                  (s[2]
                    ? (s[2] = ''.concat(t, ' and ').concat(s[2]))
                    : (s[2] = t)),
                n.push(s));
            }
          }),
          n
        );
      };
    },
    function(n, t) {
      n.exports = e;
    },
    function(e, n, t) {
      'use strict';
      var r,
        i = function() {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        o = (function() {
          var e = {};
          return function(n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          };
        })(),
        a = [];
      function u(e) {
        for (var n = -1, t = 0; t < a.length; t++)
          if (a[t].identifier === e) {
            n = t;
            break;
          }
        return n;
      }
      function s(e, n) {
        for (var t = {}, r = [], i = 0; i < e.length; i++) {
          var o = e[i],
            s = n.base ? o[0] + n.base : o[0],
            c = t[s] || 0,
            l = ''.concat(s, ' ').concat(c);
          t[s] = c + 1;
          var d = u(l),
            f = { css: o[1], media: o[2], sourceMap: o[3] };
          -1 !== d
            ? (a[d].references++, a[d].updater(f))
            : a.push({ identifier: l, updater: g(f, n), references: 1 }),
            r.push(l);
        }
        return r;
      }
      function c(e) {
        var n = document.createElement('style'),
          r = e.attributes || {};
        if (void 0 === r.nonce) {
          var i = t.nc;
          i && (r.nonce = i);
        }
        if (
          (Object.keys(r).forEach(function(e) {
            n.setAttribute(e, r[e]);
          }),
          'function' == typeof e.insert)
        )
          e.insert(n);
        else {
          var a = o(e.insert || 'head');
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          a.appendChild(n);
        }
        return n;
      }
      var l,
        d =
          ((l = []),
          function(e, n) {
            return (l[e] = n), l.filter(Boolean).join('\n');
          });
      function f(e, n, t, r) {
        var i = t
          ? ''
          : r.media
          ? '@media '.concat(r.media, ' {').concat(r.css, '}')
          : r.css;
        if (e.styleSheet) e.styleSheet.cssText = d(n, i);
        else {
          var o = document.createTextNode(i),
            a = e.childNodes;
          a[n] && e.removeChild(a[n]),
            a.length ? e.insertBefore(o, a[n]) : e.appendChild(o);
        }
      }
      function p(e, n, t) {
        var r = t.css,
          i = t.media,
          o = t.sourceMap;
        if (
          (i ? e.setAttribute('media', i) : e.removeAttribute('media'),
          o &&
            btoa &&
            (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
              ' */',
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var y = null,
        v = 0;
      function g(e, n) {
        var t, r, i;
        if (n.singleton) {
          var o = v++;
          (t = y || (y = c(n))),
            (r = f.bind(null, t, o, !1)),
            (i = f.bind(null, t, o, !0));
        } else
          (t = c(n)),
            (r = p.bind(null, t, n)),
            (i = function() {
              !(function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            });
        return (
          r(e),
          function(n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap
              )
                return;
              r((e = n));
            } else i();
          }
        );
      }
      e.exports = function(e, n) {
        (n = n || {}).singleton ||
          'boolean' == typeof n.singleton ||
          (n.singleton = i());
        var t = s((e = e || []), n);
        return function(e) {
          if (
            ((e = e || []),
            '[object Array]' === Object.prototype.toString.call(e))
          ) {
            for (var r = 0; r < t.length; r++) {
              var i = u(t[r]);
              a[i].references--;
            }
            for (var o = s(e, n), c = 0; c < t.length; c++) {
              var l = u(t[c]);
              0 === a[l].references && (a[l].updater(), a.splice(l, 1));
            }
            t = o;
          }
        };
      };
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, n, t) {
      'use strict';
      var r = t(0),
        i = t.n(r)()(!1);
      i.push([
        e.i,
        '.ellipse {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n',
        '',
      ]),
        (n.a = i);
    },
    function(e, n) {
      e.exports = t;
    },
    function(e, n, t) {
      t(7), (e.exports = t(26));
    },
    function(e, n, t) {
      var r = t(8),
        i = t(9),
        o = t(10),
        a = t(11),
        u = t(12),
        s = t(13),
        c = t(14),
        l = t(15),
        d = t(16),
        f = t(17),
        p = t(18);
      r.extend(i),
        r.extend(o),
        r.extend(a),
        r.extend(u),
        r.extend(s),
        r.extend(c),
        r.extend(l),
        r.extend(d),
        r.extend(f),
        r.extend(p);
      var y = t(19);
      r.extend(y);
    },
    function(e, n) {
      e.exports = r;
    },
    function(e, n) {
      e.exports = i;
    },
    function(e, n) {
      e.exports = o;
    },
    function(e, n) {
      e.exports = a;
    },
    function(e, n) {
      e.exports = u;
    },
    function(e, n) {
      e.exports = s;
    },
    function(e, n) {
      e.exports = c;
    },
    function(e, n) {
      e.exports = l;
    },
    function(e, n) {
      e.exports = d;
    },
    function(e, n) {
      e.exports = f;
    },
    function(e, n) {
      e.exports = p;
    },
    function(e, n) {
      const t = { en_GB: 'en-gb', en_US: 'en', zh_CN: 'zh-cn', zh_TW: 'zh-tw' };
      e.exports = function(e, n, r) {
        const i = n.prototype.locale;
        n.prototype.locale = function(e) {
          var n;
          return (
            'string' == typeof e && (e = t[(n = e)] || n.split('_')[0]),
            i.call(this, e)
          );
        };
      };
    },
    function(e, n, t) {
      var r = t(2),
        i = t(21);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, '']]);
      var o = { insert: 'head', singleton: !1 };
      r(i, o);
      e.exports = i.locals || {};
    },
    function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t(0),
        i = t.n(r),
        o = t(4),
        a = i()(!1);
      a.i(o.a), a.push([e.i, '\n', '']), (n.default = a);
    },
    function(e, n, t) {
      var r = t(2),
        i = t(23);
      'string' == typeof (i = i.__esModule ? i.default : i) &&
        (i = [[e.i, i, '']]);
      var o = { insert: 'head', singleton: !1 };
      r(i, o);
      e.exports = i.locals || {};
    },
    function(e, n, t) {
      'use strict';
      t.r(n);
      var r = t(0),
        i = t.n(r)()(!1);
      i.push([e.i, '._3VS0ivCd6lBTB6vRAQv1jn {\n  font-size: 14px;\n}\n', '']),
        (i.locals = { icon: '_3VS0ivCd6lBTB6vRAQv1jn' }),
        (n.default = i);
    },
    function(e, n) {
      e.exports = y;
    },
    function(e, n) {
      e.exports = v;
    },
    function(e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'BiciEmpty', function() {
          return a;
        }),
        t.d(n, 'BiciTable', function() {
          return s;
        }),
        t.d(n, 'BiciWebSocket', function() {
          return c;
        }),
        t.d(n, 'biciNotification', function() {
          return d;
        });
      t(20);
      var r = t(1),
        i = t.n(r);
      t(3), t(22);
      function o(e) {
        return i.a.createElement(i.a.Fragment, null);
      }
      (o.defaultProps = {}), (o.propTypes = {});
      var a = o;
      function u(e) {}
      (u.defaultProps = {}), (u.propTypes = {});
      var s = u;
      t(24);
      var c = class {
          constructor(e) {
            this.options = e;
          }
        },
        l = (t(25), t(5)),
        d = t.n(l).a;
    },
  ]);
});
