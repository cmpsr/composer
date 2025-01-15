/* eslint-disable */
export const loadAmplitude = () => {
  function c(e, t) {
    const r = e.amplitude || { _q: [], _iq: {} };
    if (r.invoked) e.console && console.error && console.error('Amplitude snippet has been loaded.');
    else {
      const n = function (e, t) {
          e.prototype[t] = function () {
            return this._q.push({ name: t, args: Array.prototype.slice.call(arguments, 0) }), this;
          };
        },
        o = function (e, t, r) {
          return function (n) {
            e._q.push({ name: t, args: Array.prototype.slice.call(r, 0), resolve: n });
          };
        },
        s = function (e, t, r) {
          e._q.push({ name: t, args: Array.prototype.slice.call(r, 0) });
        },
        i = function (e, t, r) {
          e[t] = function () {
            if (r) return { promise: new Promise(o(e, t, Array.prototype.slice.call(arguments))) };
            s(e, t, Array.prototype.slice.call(arguments));
          };
        },
        a = function (e) {
          for (let t = 0; t < g.length; t++) i(e, g[t], !1);
          for (let r = 0; r < m.length; r++) i(e, m[r], !0);
        };
      r.invoked = !0;
      const c = t.createElement('script');
      (c.type = 'text/javascript'),
        (c.integrity = 'sha384-r58GovPc8jo7o9PFd/Y8xHwOiockvJvuIBZZqsA7I8EzliMj0Pe0Sbx7Ti2ClxDD'),
        (c.crossOrigin = 'anonymous'),
        (c.async = !0),
        (c.src = 'https://cdn.amplitude.com/libs/analytics-browser-2.8.0-min.js.gz'),
        (c.onload = function () {
          e.amplitude.runQueuedFunctions || console.log('[Amplitude] Error: could not load SDK');
        });
      const u = t.getElementsByTagName('script')[0];
      u.parentNode.insertBefore(c, u);
      for (
        var l = function () {
            return (this._q = []), this;
          },
          p = [
            'add',
            'append',
            'clearAll',
            'prepend',
            'set',
            'setOnce',
            'unset',
            'preInsert',
            'postInsert',
            'remove',
            'getUserProperties',
          ],
          d = 0;
        d < p.length;
        d++
      )
        n(l, p[d]);
      r.Identify = l;
      for (
        var v = function () {
            return (this._q = []), this;
          },
          f = [
            'getEventProperties',
            'setProductId',
            'setQuantity',
            'setPrice',
            'setRevenue',
            'setRevenueType',
            'setEventProperties',
          ],
          y = 0;
        y < f.length;
        y++
      )
        n(v, f[y]);
      r.Revenue = v;
      var g = [
          'getDeviceId',
          'setDeviceId',
          'getSessionId',
          'setSessionId',
          'getUserId',
          'setUserId',
          'setOptOut',
          'setTransport',
          'reset',
          'extendSession',
        ],
        m = ['init', 'add', 'remove', 'track', 'logEvent', 'identify', 'groupIdentify', 'setGroup', 'revenue', 'flush'];
      a(r),
        (r.createInstance = function (e) {
          return (r._iq[e] = { _q: [] }), a(r._iq[e]), r._iq[e];
        }),
        (e.amplitude = r);
    }
  }
  c(window, document);

  return (window as any).amplitude;
};
