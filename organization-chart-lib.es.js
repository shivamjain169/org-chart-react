import je, { useRef as Be, useState as Me, useEffect as ze, useCallback as cr } from "react";
import At from "react-dom";
function lr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function fr(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var f = r.default;
  if (typeof f == "function") {
    var d = function i() {
      return this instanceof i ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    d.prototype = f.prototype;
  } else d = {};
  return Object.defineProperty(d, "__esModule", { value: !0 }), Object.keys(r).forEach(function(i) {
    var C = Object.getOwnPropertyDescriptor(r, i);
    Object.defineProperty(d, i, C.get ? C : {
      enumerable: !0,
      get: function() {
        return r[i];
      }
    });
  }), d;
}
var Oe = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function dr() {
  if (lt) return Te;
  lt = 1;
  var r = je, f = Symbol.for("react.element"), d = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, C = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(g, _, D) {
    var y, h = {}, m = null, v = null;
    D !== void 0 && (m = "" + D), _.key !== void 0 && (m = "" + _.key), _.ref !== void 0 && (v = _.ref);
    for (y in _) i.call(_, y) && !s.hasOwnProperty(y) && (h[y] = _[y]);
    if (g && g.defaultProps) for (y in _ = g.defaultProps, _) h[y] === void 0 && (h[y] = _[y]);
    return { $$typeof: f, type: g, key: m, ref: v, props: h, _owner: C.current };
  }
  return Te.Fragment = d, Te.jsx = S, Te.jsxs = S, Te;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function pr() {
  return ft || (ft = 1, process.env.NODE_ENV !== "production" && function() {
    var r = je, f = Symbol.for("react.element"), d = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), w = Symbol.iterator, O = "@@iterator";
    function E(e) {
      if (e === null || typeof e != "object")
        return null;
      var u = w && e[w] || e[O];
      return typeof u == "function" ? u : null;
    }
    var p = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function o(e) {
      {
        for (var u = arguments.length, P = new Array(u > 1 ? u - 1 : 0), M = 1; M < u; M++)
          P[M - 1] = arguments[M];
        l("error", e, P);
      }
    }
    function l(e, u, P) {
      {
        var M = p.ReactDebugCurrentFrame, V = M.getStackAddendum();
        V !== "" && (u += "%s", P = P.concat([V]));
        var H = P.map(function(U) {
          return String(U);
        });
        H.unshift("Warning: " + u), Function.prototype.apply.call(console[e], console, H);
      }
    }
    var b = !1, n = !1, A = !1, t = !1, a = !1, x;
    x = Symbol.for("react.module.reference");
    function L(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === s || a || e === C || e === D || e === y || t || e === v || b || n || A || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === S || e.$$typeof === g || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === x || e.getModuleId !== void 0));
    }
    function J(e, u, P) {
      var M = e.displayName;
      if (M)
        return M;
      var V = u.displayName || u.name || "";
      return V !== "" ? P + "(" + V + ")" : P;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function G(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && o("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case d:
          return "Portal";
        case s:
          return "Profiler";
        case C:
          return "StrictMode";
        case D:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var u = e;
            return K(u) + ".Consumer";
          case S:
            var P = e;
            return K(P._context) + ".Provider";
          case _:
            return J(e, e.render, "ForwardRef");
          case h:
            var M = e.displayName || null;
            return M !== null ? M : G(e.type) || "Memo";
          case m: {
            var V = e, H = V._payload, U = V._init;
            try {
              return G(U(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, ue = 0, ae, se, fe, pe, c, R, $;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function j() {
      {
        if (ue === 0) {
          ae = console.log, se = console.info, fe = console.warn, pe = console.error, c = console.group, R = console.groupCollapsed, $ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ue++;
      }
    }
    function q() {
      {
        if (ue--, ue === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, e, {
              value: ae
            }),
            info: re({}, e, {
              value: se
            }),
            warn: re({}, e, {
              value: fe
            }),
            error: re({}, e, {
              value: pe
            }),
            group: re({}, e, {
              value: c
            }),
            groupCollapsed: re({}, e, {
              value: R
            }),
            groupEnd: re({}, e, {
              value: $
            })
          });
        }
        ue < 0 && o("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = p.ReactCurrentDispatcher, I;
    function k(e, u, P) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (V) {
            var M = V.stack.trim().match(/\n( *(at )?)/);
            I = M && M[1] || "";
          }
        return `
` + I + e;
      }
    }
    var X = !1, F;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      F = new ne();
    }
    function T(e, u) {
      if (!e || X)
        return "";
      {
        var P = F.get(e);
        if (P !== void 0)
          return P;
      }
      var M;
      X = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = N.current, N.current = null, j();
      try {
        if (u) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (ie) {
              M = ie;
            }
            Reflect.construct(e, [], U);
          } else {
            try {
              U.call();
            } catch (ie) {
              M = ie;
            }
            e.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            M = ie;
          }
          e();
        }
      } catch (ie) {
        if (ie && M && typeof ie.stack == "string") {
          for (var W = ie.stack.split(`
`), oe = M.stack.split(`
`), Z = W.length - 1, ee = oe.length - 1; Z >= 1 && ee >= 0 && W[Z] !== oe[ee]; )
            ee--;
          for (; Z >= 1 && ee >= 0; Z--, ee--)
            if (W[Z] !== oe[ee]) {
              if (Z !== 1 || ee !== 1)
                do
                  if (Z--, ee--, ee < 0 || W[Z] !== oe[ee]) {
                    var le = `
` + W[Z].replace(" at new ", " at ");
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && F.set(e, le), le;
                  }
                while (Z >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        X = !1, N.current = H, q(), Error.prepareStackTrace = V;
      }
      var Se = e ? e.displayName || e.name : "", ye = Se ? k(Se) : "";
      return typeof e == "function" && F.set(e, ye), ye;
    }
    function ce(e, u, P) {
      return T(e, !1);
    }
    function me(e) {
      var u = e.prototype;
      return !!(u && u.isReactComponent);
    }
    function ge(e, u, P) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return T(e, me(e));
      if (typeof e == "string")
        return k(e);
      switch (e) {
        case D:
          return k("Suspense");
        case y:
          return k("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return ce(e.render);
          case h:
            return ge(e.type, u, P);
          case m: {
            var M = e, V = M._payload, H = M._init;
            try {
              return ge(H(V), u, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Je = {}, Ke = p.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var u = e._owner, P = ge(e.type, e._source, u ? u.type : null);
        Ke.setExtraStackFrame(P);
      } else
        Ke.setExtraStackFrame(null);
    }
    function qt(e, u, P, M, V) {
      {
        var H = Function.call.bind(Ee);
        for (var U in e)
          if (H(e, U)) {
            var W = void 0;
            try {
              if (typeof e[U] != "function") {
                var oe = Error((M || "React class") + ": " + P + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              W = e[U](u, U, M, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              W = Z;
            }
            W && !(W instanceof Error) && (Re(V), o("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", P, U, typeof W), Re(null)), W instanceof Error && !(W.message in Je) && (Je[W.message] = !0, Re(V), o("Failed %s type: %s", P, W.message), Re(null));
          }
      }
    }
    var Ut = Array.isArray;
    function Ne(e) {
      return Ut(e);
    }
    function Lt(e) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, P = u && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return P;
      }
    }
    function Xt(e) {
      try {
        return Ze(e), !1;
      } catch {
        return !0;
      }
    }
    function Ze(e) {
      return "" + e;
    }
    function Qe(e) {
      if (Xt(e))
        return o("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(e)), Ze(e);
    }
    var et = p.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, rt;
    function Bt(e) {
      if (Ee.call(e, "ref")) {
        var u = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function zt(e) {
      if (Ee.call(e, "key")) {
        var u = Object.getOwnPropertyDescriptor(e, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ht(e, u) {
      typeof e.ref == "string" && et.current;
    }
    function Gt(e, u) {
      {
        var P = function() {
          tt || (tt = !0, o("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        P.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Jt(e, u) {
      {
        var P = function() {
          rt || (rt = !0, o("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        P.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Kt = function(e, u, P, M, V, H, U) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: u,
        ref: P,
        props: U,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Zt(e, u, P, M, V) {
      {
        var H, U = {}, W = null, oe = null;
        P !== void 0 && (Qe(P), W = "" + P), zt(u) && (Qe(u.key), W = "" + u.key), Bt(u) && (oe = u.ref, Ht(u, V));
        for (H in u)
          Ee.call(u, H) && !Vt.hasOwnProperty(H) && (U[H] = u[H]);
        if (e && e.defaultProps) {
          var Z = e.defaultProps;
          for (H in Z)
            U[H] === void 0 && (U[H] = Z[H]);
        }
        if (W || oe) {
          var ee = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          W && Gt(U, ee), oe && Jt(U, ee);
        }
        return Kt(e, W, oe, V, M, et.current, U);
      }
    }
    var Ie = p.ReactCurrentOwner, nt = p.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var u = e._owner, P = ge(e.type, e._source, u ? u.type : null);
        nt.setExtraStackFrame(P);
      } else
        nt.setExtraStackFrame(null);
    }
    var Ye;
    Ye = !1;
    function $e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function ot() {
      {
        if (Ie.current) {
          var e = G(Ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qt(e) {
      return "";
    }
    var at = {};
    function er(e) {
      {
        var u = ot();
        if (!u) {
          var P = typeof e == "string" ? e : e.displayName || e.name;
          P && (u = `

Check the top-level render call using <` + P + ">.");
        }
        return u;
      }
    }
    function it(e, u) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var P = er(u);
        if (at[P])
          return;
        at[P] = !0;
        var M = "";
        e && e._owner && e._owner !== Ie.current && (M = " It was passed a child from " + G(e._owner.type) + "."), be(e), o('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, M), be(null);
      }
    }
    function st(e, u) {
      {
        if (typeof e != "object")
          return;
        if (Ne(e))
          for (var P = 0; P < e.length; P++) {
            var M = e[P];
            $e(M) && it(M, u);
          }
        else if ($e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var V = E(e);
          if (typeof V == "function" && V !== e.entries)
            for (var H = V.call(e), U; !(U = H.next()).done; )
              $e(U.value) && it(U.value, u);
        }
      }
    }
    function tr(e) {
      {
        var u = e.type;
        if (u == null || typeof u == "string")
          return;
        var P;
        if (typeof u == "function")
          P = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === h))
          P = u.propTypes;
        else
          return;
        if (P) {
          var M = G(u);
          qt(P, e.props, "prop", M, e);
        } else if (u.PropTypes !== void 0 && !Ye) {
          Ye = !0;
          var V = G(u);
          o("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && o("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rr(e) {
      {
        for (var u = Object.keys(e.props), P = 0; P < u.length; P++) {
          var M = u[P];
          if (M !== "children" && M !== "key") {
            be(e), o("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), be(null);
            break;
          }
        }
        e.ref !== null && (be(e), o("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var ut = {};
    function ct(e, u, P, M, V, H) {
      {
        var U = L(e);
        if (!U) {
          var W = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = Qt();
          oe ? W += oe : W += ot();
          var Z;
          e === null ? Z = "null" : Ne(e) ? Z = "array" : e !== void 0 && e.$$typeof === f ? (Z = "<" + (G(e.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof e, o("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, W);
        }
        var ee = Zt(e, u, P, V, H);
        if (ee == null)
          return ee;
        if (U) {
          var le = u.children;
          if (le !== void 0)
            if (M)
              if (Ne(le)) {
                for (var Se = 0; Se < le.length; Se++)
                  st(le[Se], e);
                Object.freeze && Object.freeze(le);
              } else
                o("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(le, e);
        }
        if (Ee.call(u, "key")) {
          var ye = G(e), ie = Object.keys(u).filter(function(ur) {
            return ur !== "key";
          }), ke = ie.length > 0 ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ut[ye + ke]) {
            var sr = ie.length > 0 ? "{" + ie.join(": ..., ") + ": ...}" : "{}";
            o(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, ye, sr, ye), ut[ye + ke] = !0;
          }
        }
        return e === i ? rr(ee) : tr(ee), ee;
      }
    }
    function nr(e, u, P) {
      return ct(e, u, P, !0);
    }
    function or(e, u, P) {
      return ct(e, u, P, !1);
    }
    var ar = or, ir = nr;
    _e.Fragment = i, _e.jsx = ar, _e.jsxs = ir;
  }()), _e;
}
var dt;
function hr() {
  return dt || (dt = 1, process.env.NODE_ENV === "production" ? Oe.exports = dr() : Oe.exports = pr()), Oe.exports;
}
var te = hr(), we = { exports: {} }, Fe = {}, xe = { exports: {} }, Ce = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function vr() {
  if (pt) return B;
  pt = 1;
  var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, C = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, S = r ? Symbol.for("react.provider") : 60109, g = r ? Symbol.for("react.context") : 60110, _ = r ? Symbol.for("react.async_mode") : 60111, D = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, h = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, v = r ? Symbol.for("react.memo") : 60115, w = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, E = r ? Symbol.for("react.fundamental") : 60117, p = r ? Symbol.for("react.responder") : 60118, o = r ? Symbol.for("react.scope") : 60119;
  function l(n) {
    if (typeof n == "object" && n !== null) {
      var A = n.$$typeof;
      switch (A) {
        case f:
          switch (n = n.type, n) {
            case _:
            case D:
            case i:
            case s:
            case C:
            case h:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case g:
                case y:
                case w:
                case v:
                case S:
                  return n;
                default:
                  return A;
              }
          }
        case d:
          return A;
      }
    }
  }
  function b(n) {
    return l(n) === D;
  }
  return B.AsyncMode = _, B.ConcurrentMode = D, B.ContextConsumer = g, B.ContextProvider = S, B.Element = f, B.ForwardRef = y, B.Fragment = i, B.Lazy = w, B.Memo = v, B.Portal = d, B.Profiler = s, B.StrictMode = C, B.Suspense = h, B.isAsyncMode = function(n) {
    return b(n) || l(n) === _;
  }, B.isConcurrentMode = b, B.isContextConsumer = function(n) {
    return l(n) === g;
  }, B.isContextProvider = function(n) {
    return l(n) === S;
  }, B.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === f;
  }, B.isForwardRef = function(n) {
    return l(n) === y;
  }, B.isFragment = function(n) {
    return l(n) === i;
  }, B.isLazy = function(n) {
    return l(n) === w;
  }, B.isMemo = function(n) {
    return l(n) === v;
  }, B.isPortal = function(n) {
    return l(n) === d;
  }, B.isProfiler = function(n) {
    return l(n) === s;
  }, B.isStrictMode = function(n) {
    return l(n) === C;
  }, B.isSuspense = function(n) {
    return l(n) === h;
  }, B.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === i || n === D || n === s || n === C || n === h || n === m || typeof n == "object" && n !== null && (n.$$typeof === w || n.$$typeof === v || n.$$typeof === S || n.$$typeof === g || n.$$typeof === y || n.$$typeof === E || n.$$typeof === p || n.$$typeof === o || n.$$typeof === O);
  }, B.typeOf = l, B;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function gr() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, f = r ? Symbol.for("react.element") : 60103, d = r ? Symbol.for("react.portal") : 60106, i = r ? Symbol.for("react.fragment") : 60107, C = r ? Symbol.for("react.strict_mode") : 60108, s = r ? Symbol.for("react.profiler") : 60114, S = r ? Symbol.for("react.provider") : 60109, g = r ? Symbol.for("react.context") : 60110, _ = r ? Symbol.for("react.async_mode") : 60111, D = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, h = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, v = r ? Symbol.for("react.memo") : 60115, w = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, E = r ? Symbol.for("react.fundamental") : 60117, p = r ? Symbol.for("react.responder") : 60118, o = r ? Symbol.for("react.scope") : 60119;
    function l(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === i || T === D || T === s || T === C || T === h || T === m || typeof T == "object" && T !== null && (T.$$typeof === w || T.$$typeof === v || T.$$typeof === S || T.$$typeof === g || T.$$typeof === y || T.$$typeof === E || T.$$typeof === p || T.$$typeof === o || T.$$typeof === O);
    }
    function b(T) {
      if (typeof T == "object" && T !== null) {
        var ce = T.$$typeof;
        switch (ce) {
          case f:
            var me = T.type;
            switch (me) {
              case _:
              case D:
              case i:
              case s:
              case C:
              case h:
                return me;
              default:
                var ge = me && me.$$typeof;
                switch (ge) {
                  case g:
                  case y:
                  case w:
                  case v:
                  case S:
                    return ge;
                  default:
                    return ce;
                }
            }
          case d:
            return ce;
        }
      }
    }
    var n = _, A = D, t = g, a = S, x = f, L = y, J = i, K = w, G = v, re = d, ue = s, ae = C, se = h, fe = !1;
    function pe(T) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(T) || b(T) === _;
    }
    function c(T) {
      return b(T) === D;
    }
    function R(T) {
      return b(T) === g;
    }
    function $(T) {
      return b(T) === S;
    }
    function Y(T) {
      return typeof T == "object" && T !== null && T.$$typeof === f;
    }
    function j(T) {
      return b(T) === y;
    }
    function q(T) {
      return b(T) === i;
    }
    function N(T) {
      return b(T) === w;
    }
    function I(T) {
      return b(T) === v;
    }
    function k(T) {
      return b(T) === d;
    }
    function X(T) {
      return b(T) === s;
    }
    function F(T) {
      return b(T) === C;
    }
    function ne(T) {
      return b(T) === h;
    }
    z.AsyncMode = n, z.ConcurrentMode = A, z.ContextConsumer = t, z.ContextProvider = a, z.Element = x, z.ForwardRef = L, z.Fragment = J, z.Lazy = K, z.Memo = G, z.Portal = re, z.Profiler = ue, z.StrictMode = ae, z.Suspense = se, z.isAsyncMode = pe, z.isConcurrentMode = c, z.isContextConsumer = R, z.isContextProvider = $, z.isElement = Y, z.isForwardRef = j, z.isFragment = q, z.isLazy = N, z.isMemo = I, z.isPortal = k, z.isProfiler = X, z.isStrictMode = F, z.isSuspense = ne, z.isValidElementType = l, z.typeOf = b;
  }()), z;
}
var vt;
function Nt() {
  return vt || (vt = 1, process.env.NODE_ENV === "production" ? Ce.exports = vr() : Ce.exports = gr()), Ce.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var We, gt;
function yr() {
  if (gt) return We;
  gt = 1;
  var r = Object.getOwnPropertySymbols, f = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function i(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var S = {}, g = 0; g < 10; g++)
        S["_" + String.fromCharCode(g)] = g;
      var _ = Object.getOwnPropertyNames(S).map(function(y) {
        return S[y];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var D = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        D[y] = y;
      }), Object.keys(Object.assign({}, D)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return We = C() ? Object.assign : function(s, S) {
    for (var g, _ = i(s), D, y = 1; y < arguments.length; y++) {
      g = Object(arguments[y]);
      for (var h in g)
        f.call(g, h) && (_[h] = g[h]);
      if (r) {
        D = r(g);
        for (var m = 0; m < D.length; m++)
          d.call(g, D[m]) && (_[D[m]] = g[D[m]]);
      }
    }
    return _;
  }, We;
}
var qe, yt;
function He() {
  if (yt) return qe;
  yt = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return qe = r, qe;
}
var Ue, mt;
function It() {
  return mt || (mt = 1, Ue = Function.call.bind(Object.prototype.hasOwnProperty)), Ue;
}
var Le, bt;
function mr() {
  if (bt) return Le;
  bt = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var f = /* @__PURE__ */ He(), d = {}, i = /* @__PURE__ */ It();
    r = function(s) {
      var S = "Warning: " + s;
      typeof console < "u" && console.error(S);
      try {
        throw new Error(S);
      } catch {
      }
    };
  }
  function C(s, S, g, _, D) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in s)
        if (i(s, y)) {
          var h;
          try {
            if (typeof s[y] != "function") {
              var m = Error(
                (_ || "React class") + ": " + g + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            h = s[y](S, y, _, g, null, f);
          } catch (w) {
            h = w;
          }
          if (h && !(h instanceof Error) && r(
            (_ || "React class") + ": type specification of " + g + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in d)) {
            d[h.message] = !0;
            var v = D ? D() : "";
            r(
              "Failed " + g + " type: " + h.message + (v ?? "")
            );
          }
        }
    }
  }
  return C.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, Le = C, Le;
}
var Xe, St;
function br() {
  if (St) return Xe;
  St = 1;
  var r = Nt(), f = yr(), d = /* @__PURE__ */ He(), i = /* @__PURE__ */ It(), C = /* @__PURE__ */ mr(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(g) {
    var _ = "Warning: " + g;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function S() {
    return null;
  }
  return Xe = function(g, _) {
    var D = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function h(c) {
      var R = c && (D && c[D] || c[y]);
      if (typeof R == "function")
        return R;
    }
    var m = "<<anonymous>>", v = {
      array: p("array"),
      bigint: p("bigint"),
      bool: p("boolean"),
      func: p("function"),
      number: p("number"),
      object: p("object"),
      string: p("string"),
      symbol: p("symbol"),
      any: o(),
      arrayOf: l,
      element: b(),
      elementType: n(),
      instanceOf: A,
      node: L(),
      objectOf: a,
      oneOf: t,
      oneOfType: x,
      shape: K,
      exact: G
    };
    function w(c, R) {
      return c === R ? c !== 0 || 1 / c === 1 / R : c !== c && R !== R;
    }
    function O(c, R) {
      this.message = c, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function E(c) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, $ = 0;
      function Y(q, N, I, k, X, F, ne) {
        if (k = k || m, F = F || I, ne !== d) {
          if (_) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = k + ":" + I;
            !R[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            $ < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[ce] = !0, $++);
          }
        }
        return N[I] == null ? q ? N[I] === null ? new O("The " + X + " `" + F + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new O("The " + X + " `" + F + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : c(N, I, k, X, F);
      }
      var j = Y.bind(null, !1);
      return j.isRequired = Y.bind(null, !0), j;
    }
    function p(c) {
      function R($, Y, j, q, N, I) {
        var k = $[Y], X = ae(k);
        if (X !== c) {
          var F = se(k);
          return new O(
            "Invalid " + q + " `" + N + "` of type " + ("`" + F + "` supplied to `" + j + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return E(R);
    }
    function o() {
      return E(S);
    }
    function l(c) {
      function R($, Y, j, q, N) {
        if (typeof c != "function")
          return new O("Property `" + N + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var I = $[Y];
        if (!Array.isArray(I)) {
          var k = ae(I);
          return new O("Invalid " + q + " `" + N + "` of type " + ("`" + k + "` supplied to `" + j + "`, expected an array."));
        }
        for (var X = 0; X < I.length; X++) {
          var F = c(I, X, j, q, N + "[" + X + "]", d);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return E(R);
    }
    function b() {
      function c(R, $, Y, j, q) {
        var N = R[$];
        if (!g(N)) {
          var I = ae(N);
          return new O("Invalid " + j + " `" + q + "` of type " + ("`" + I + "` supplied to `" + Y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(c);
    }
    function n() {
      function c(R, $, Y, j, q) {
        var N = R[$];
        if (!r.isValidElementType(N)) {
          var I = ae(N);
          return new O("Invalid " + j + " `" + q + "` of type " + ("`" + I + "` supplied to `" + Y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(c);
    }
    function A(c) {
      function R($, Y, j, q, N) {
        if (!($[Y] instanceof c)) {
          var I = c.name || m, k = pe($[Y]);
          return new O("Invalid " + q + " `" + N + "` of type " + ("`" + k + "` supplied to `" + j + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return E(R);
    }
    function t(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), S;
      function R($, Y, j, q, N) {
        for (var I = $[Y], k = 0; k < c.length; k++)
          if (w(I, c[k]))
            return null;
        var X = JSON.stringify(c, function(ne, T) {
          var ce = se(T);
          return ce === "symbol" ? String(T) : T;
        });
        return new O("Invalid " + q + " `" + N + "` of value `" + String(I) + "` " + ("supplied to `" + j + "`, expected one of " + X + "."));
      }
      return E(R);
    }
    function a(c) {
      function R($, Y, j, q, N) {
        if (typeof c != "function")
          return new O("Property `" + N + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var I = $[Y], k = ae(I);
        if (k !== "object")
          return new O("Invalid " + q + " `" + N + "` of type " + ("`" + k + "` supplied to `" + j + "`, expected an object."));
        for (var X in I)
          if (i(I, X)) {
            var F = c(I, X, j, q, N + "." + X, d);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return E(R);
    }
    function x(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), S;
      for (var R = 0; R < c.length; R++) {
        var $ = c[R];
        if (typeof $ != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe($) + " at index " + R + "."
          ), S;
      }
      function Y(j, q, N, I, k) {
        for (var X = [], F = 0; F < c.length; F++) {
          var ne = c[F], T = ne(j, q, N, I, k, d);
          if (T == null)
            return null;
          T.data && i(T.data, "expectedType") && X.push(T.data.expectedType);
        }
        var ce = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new O("Invalid " + I + " `" + k + "` supplied to " + ("`" + N + "`" + ce + "."));
      }
      return E(Y);
    }
    function L() {
      function c(R, $, Y, j, q) {
        return re(R[$]) ? null : new O("Invalid " + j + " `" + q + "` supplied to " + ("`" + Y + "`, expected a ReactNode."));
      }
      return E(c);
    }
    function J(c, R, $, Y, j) {
      return new O(
        (c || "React class") + ": " + R + " type `" + $ + "." + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function K(c) {
      function R($, Y, j, q, N) {
        var I = $[Y], k = ae(I);
        if (k !== "object")
          return new O("Invalid " + q + " `" + N + "` of type `" + k + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var X in c) {
          var F = c[X];
          if (typeof F != "function")
            return J(j, q, N, X, se(F));
          var ne = F(I, X, j, q, N + "." + X, d);
          if (ne)
            return ne;
        }
        return null;
      }
      return E(R);
    }
    function G(c) {
      function R($, Y, j, q, N) {
        var I = $[Y], k = ae(I);
        if (k !== "object")
          return new O("Invalid " + q + " `" + N + "` of type `" + k + "` " + ("supplied to `" + j + "`, expected `object`."));
        var X = f({}, $[Y], c);
        for (var F in X) {
          var ne = c[F];
          if (i(c, F) && typeof ne != "function")
            return J(j, q, N, F, se(ne));
          if (!ne)
            return new O(
              "Invalid " + q + " `" + N + "` key `" + F + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify($[Y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var T = ne(I, F, j, q, N + "." + F, d);
          if (T)
            return T;
        }
        return null;
      }
      return E(R);
    }
    function re(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(re);
          if (c === null || g(c))
            return !0;
          var R = h(c);
          if (R) {
            var $ = R.call(c), Y;
            if (R !== c.entries) {
              for (; !(Y = $.next()).done; )
                if (!re(Y.value))
                  return !1;
            } else
              for (; !(Y = $.next()).done; ) {
                var j = Y.value;
                if (j && !re(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(c, R) {
      return c === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function ae(c) {
      var R = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : ue(R, c) ? "symbol" : R;
    }
    function se(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var R = ae(c);
      if (R === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function fe(c) {
      var R = se(c);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function pe(c) {
      return !c.constructor || !c.constructor.name ? m : c.constructor.name;
    }
    return v.checkPropTypes = C, v.resetWarningCache = C.resetWarningCache, v.PropTypes = v, v;
  }, Xe;
}
var Ve, Et;
function Sr() {
  if (Et) return Ve;
  Et = 1;
  var r = /* @__PURE__ */ He();
  function f() {
  }
  function d() {
  }
  return d.resetWarningCache = f, Ve = function() {
    function i(S, g, _, D, y, h) {
      if (h !== r) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    i.isRequired = i;
    function C() {
      return i;
    }
    var s = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: C,
      element: i,
      elementType: i,
      instanceOf: C,
      node: i,
      objectOf: C,
      oneOf: C,
      oneOfType: C,
      shape: C,
      exact: C,
      checkPropTypes: d,
      resetWarningCache: f
    };
    return s.PropTypes = s, s;
  }, Ve;
}
var Tt;
function Yt() {
  if (Tt) return xe.exports;
  if (Tt = 1, process.env.NODE_ENV !== "production") {
    var r = Nt(), f = !0;
    xe.exports = /* @__PURE__ */ br()(r.isElement, f);
  } else
    xe.exports = /* @__PURE__ */ Sr()();
  return xe.exports;
}
function $t(r) {
  var f, d, i = "";
  if (typeof r == "string" || typeof r == "number") i += r;
  else if (typeof r == "object") if (Array.isArray(r)) for (f = 0; f < r.length; f++) r[f] && (d = $t(r[f])) && (i && (i += " "), i += d);
  else for (f in r) r[f] && (i && (i += " "), i += f);
  return i;
}
function _t() {
  for (var r, f, d = 0, i = ""; d < arguments.length; ) (r = arguments[d++]) && (f = $t(r)) && (i && (i += " "), i += f);
  return i;
}
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: _t,
  default: _t
}, Symbol.toStringTag, { value: "Module" })), Tr = /* @__PURE__ */ fr(Er);
var Q = {}, he = {}, wt;
function Ae() {
  if (wt) return he;
  wt = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  }), he.dontSetMe = C, he.findInArray = r, he.int = i, he.isFunction = f, he.isNum = d;
  function r(s, S) {
    for (let g = 0, _ = s.length; g < _; g++)
      if (S.apply(S, [s[g], g, s])) return s[g];
  }
  function f(s) {
    return typeof s == "function" || Object.prototype.toString.call(s) === "[object Function]";
  }
  function d(s) {
    return typeof s == "number" && !isNaN(s);
  }
  function i(s) {
    return parseInt(s, 10);
  }
  function C(s, S, g) {
    if (s[S])
      return new Error("Invalid prop ".concat(S, " passed to ").concat(g, " - do not set this, set it on the child."));
  }
  return he;
}
var ve = {}, Pt;
function _r() {
  if (Pt) return ve;
  Pt = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  }), ve.browserPrefixToKey = d, ve.browserPrefixToStyle = i, ve.default = void 0, ve.getPrefix = f;
  const r = ["Moz", "Webkit", "O", "ms"];
  function f() {
    var s;
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
    if (typeof window > "u") return "";
    const g = (s = window.document) === null || s === void 0 || (s = s.documentElement) === null || s === void 0 ? void 0 : s.style;
    if (!g || S in g) return "";
    for (let _ = 0; _ < r.length; _++)
      if (d(S, r[_]) in g) return r[_];
    return "";
  }
  function d(s, S) {
    return S ? "".concat(S).concat(C(s)) : s;
  }
  function i(s, S) {
    return S ? "-".concat(S.toLowerCase(), "-").concat(s) : s;
  }
  function C(s) {
    let S = "", g = !0;
    for (let _ = 0; _ < s.length; _++)
      g ? (S += s[_].toUpperCase(), g = !1) : s[_] === "-" ? g = !0 : S += s[_];
    return S;
  }
  return ve.default = f(), ve;
}
var Rt;
function Ge() {
  if (Rt) return Q;
  Rt = 1, Object.defineProperty(Q, "__esModule", {
    value: !0
  }), Q.addClassName = n, Q.addEvent = g, Q.addUserSelectStyles = l, Q.createCSSTransform = w, Q.createSVGTransform = O, Q.getTouch = p, Q.getTouchIdentifier = o, Q.getTranslation = E, Q.innerHeight = h, Q.innerWidth = m, Q.matchesSelector = s, Q.matchesSelectorAndParentsTo = S, Q.offsetXYFromParent = v, Q.outerHeight = D, Q.outerWidth = y, Q.removeClassName = A, Q.removeEvent = _, Q.removeUserSelectStyles = b;
  var r = Ae(), f = i(_r());
  function d(t) {
    if (typeof WeakMap != "function") return null;
    var a = /* @__PURE__ */ new WeakMap(), x = /* @__PURE__ */ new WeakMap();
    return (d = function(L) {
      return L ? x : a;
    })(t);
  }
  function i(t, a) {
    if (t && t.__esModule)
      return t;
    if (t === null || typeof t != "object" && typeof t != "function")
      return { default: t };
    var x = d(a);
    if (x && x.has(t))
      return x.get(t);
    var L = {}, J = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var K in t)
      if (K !== "default" && Object.prototype.hasOwnProperty.call(t, K)) {
        var G = J ? Object.getOwnPropertyDescriptor(t, K) : null;
        G && (G.get || G.set) ? Object.defineProperty(L, K, G) : L[K] = t[K];
      }
    return L.default = t, x && x.set(t, L), L;
  }
  let C = "";
  function s(t, a) {
    return C || (C = (0, r.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(x) {
      return (0, r.isFunction)(t[x]);
    })), (0, r.isFunction)(t[C]) ? t[C](a) : !1;
  }
  function S(t, a, x) {
    let L = t;
    do {
      if (s(L, a)) return !0;
      if (L === x) return !1;
      L = L.parentNode;
    } while (L);
    return !1;
  }
  function g(t, a, x, L) {
    if (!t) return;
    const J = {
      capture: !0,
      ...L
    };
    t.addEventListener ? t.addEventListener(a, x, J) : t.attachEvent ? t.attachEvent("on" + a, x) : t["on" + a] = x;
  }
  function _(t, a, x, L) {
    if (!t) return;
    const J = {
      capture: !0,
      ...L
    };
    t.removeEventListener ? t.removeEventListener(a, x, J) : t.detachEvent ? t.detachEvent("on" + a, x) : t["on" + a] = null;
  }
  function D(t) {
    let a = t.clientHeight;
    const x = t.ownerDocument.defaultView.getComputedStyle(t);
    return a += (0, r.int)(x.borderTopWidth), a += (0, r.int)(x.borderBottomWidth), a;
  }
  function y(t) {
    let a = t.clientWidth;
    const x = t.ownerDocument.defaultView.getComputedStyle(t);
    return a += (0, r.int)(x.borderLeftWidth), a += (0, r.int)(x.borderRightWidth), a;
  }
  function h(t) {
    let a = t.clientHeight;
    const x = t.ownerDocument.defaultView.getComputedStyle(t);
    return a -= (0, r.int)(x.paddingTop), a -= (0, r.int)(x.paddingBottom), a;
  }
  function m(t) {
    let a = t.clientWidth;
    const x = t.ownerDocument.defaultView.getComputedStyle(t);
    return a -= (0, r.int)(x.paddingLeft), a -= (0, r.int)(x.paddingRight), a;
  }
  function v(t, a, x) {
    const J = a === a.ownerDocument.body ? {
      left: 0,
      top: 0
    } : a.getBoundingClientRect(), K = (t.clientX + a.scrollLeft - J.left) / x, G = (t.clientY + a.scrollTop - J.top) / x;
    return {
      x: K,
      y: G
    };
  }
  function w(t, a) {
    const x = E(t, a, "px");
    return {
      [(0, f.browserPrefixToKey)("transform", f.default)]: x
    };
  }
  function O(t, a) {
    return E(t, a, "");
  }
  function E(t, a, x) {
    let {
      x: L,
      y: J
    } = t, K = "translate(".concat(L).concat(x, ",").concat(J).concat(x, ")");
    if (a) {
      const G = "".concat(typeof a.x == "string" ? a.x : a.x + x), re = "".concat(typeof a.y == "string" ? a.y : a.y + x);
      K = "translate(".concat(G, ", ").concat(re, ")") + K;
    }
    return K;
  }
  function p(t, a) {
    return t.targetTouches && (0, r.findInArray)(t.targetTouches, (x) => a === x.identifier) || t.changedTouches && (0, r.findInArray)(t.changedTouches, (x) => a === x.identifier);
  }
  function o(t) {
    if (t.targetTouches && t.targetTouches[0]) return t.targetTouches[0].identifier;
    if (t.changedTouches && t.changedTouches[0]) return t.changedTouches[0].identifier;
  }
  function l(t) {
    if (!t) return;
    let a = t.getElementById("react-draggable-style-el");
    a || (a = t.createElement("style"), a.type = "text/css", a.id = "react-draggable-style-el", a.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, a.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, t.getElementsByTagName("head")[0].appendChild(a)), t.body && n(t.body, "react-draggable-transparent-selection");
  }
  function b(t) {
    if (t)
      try {
        if (t.body && A(t.body, "react-draggable-transparent-selection"), t.selection)
          t.selection.empty();
        else {
          const a = (t.defaultView || window).getSelection();
          a && a.type !== "Caret" && a.removeAllRanges();
        }
      } catch {
      }
  }
  function n(t, a) {
    t.classList ? t.classList.add(a) : t.className.match(new RegExp("(?:^|\\s)".concat(a, "(?!\\S)"))) || (t.className += " ".concat(a));
  }
  function A(t, a) {
    t.classList ? t.classList.remove(a) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(a, "(?!\\S)"), "g"), "");
  }
  return Q;
}
var de = {}, Ot;
function kt() {
  if (Ot) return de;
  Ot = 1, Object.defineProperty(de, "__esModule", {
    value: !0
  }), de.canDragX = C, de.canDragY = s, de.createCoreData = g, de.createDraggableData = _, de.getBoundPosition = d, de.getControlPosition = S, de.snapToGrid = i;
  var r = Ae(), f = Ge();
  function d(h, m, v) {
    if (!h.props.bounds) return [m, v];
    let {
      bounds: w
    } = h.props;
    w = typeof w == "string" ? w : D(w);
    const O = y(h);
    if (typeof w == "string") {
      const {
        ownerDocument: E
      } = O, p = E.defaultView;
      let o;
      if (w === "parent" ? o = O.parentNode : o = E.querySelector(w), !(o instanceof p.HTMLElement))
        throw new Error('Bounds selector "' + w + '" could not find an element.');
      const l = o, b = p.getComputedStyle(O), n = p.getComputedStyle(l);
      w = {
        left: -O.offsetLeft + (0, r.int)(n.paddingLeft) + (0, r.int)(b.marginLeft),
        top: -O.offsetTop + (0, r.int)(n.paddingTop) + (0, r.int)(b.marginTop),
        right: (0, f.innerWidth)(l) - (0, f.outerWidth)(O) - O.offsetLeft + (0, r.int)(n.paddingRight) - (0, r.int)(b.marginRight),
        bottom: (0, f.innerHeight)(l) - (0, f.outerHeight)(O) - O.offsetTop + (0, r.int)(n.paddingBottom) - (0, r.int)(b.marginBottom)
      };
    }
    return (0, r.isNum)(w.right) && (m = Math.min(m, w.right)), (0, r.isNum)(w.bottom) && (v = Math.min(v, w.bottom)), (0, r.isNum)(w.left) && (m = Math.max(m, w.left)), (0, r.isNum)(w.top) && (v = Math.max(v, w.top)), [m, v];
  }
  function i(h, m, v) {
    const w = Math.round(m / h[0]) * h[0], O = Math.round(v / h[1]) * h[1];
    return [w, O];
  }
  function C(h) {
    return h.props.axis === "both" || h.props.axis === "x";
  }
  function s(h) {
    return h.props.axis === "both" || h.props.axis === "y";
  }
  function S(h, m, v) {
    const w = typeof m == "number" ? (0, f.getTouch)(h, m) : null;
    if (typeof m == "number" && !w) return null;
    const O = y(v), E = v.props.offsetParent || O.offsetParent || O.ownerDocument.body;
    return (0, f.offsetXYFromParent)(w || h, E, v.props.scale);
  }
  function g(h, m, v) {
    const w = !(0, r.isNum)(h.lastX), O = y(h);
    return w ? {
      node: O,
      deltaX: 0,
      deltaY: 0,
      lastX: m,
      lastY: v,
      x: m,
      y: v
    } : {
      node: O,
      deltaX: m - h.lastX,
      deltaY: v - h.lastY,
      lastX: h.lastX,
      lastY: h.lastY,
      x: m,
      y: v
    };
  }
  function _(h, m) {
    const v = h.props.scale;
    return {
      node: m.node,
      x: h.state.x + m.deltaX / v,
      y: h.state.y + m.deltaY / v,
      deltaX: m.deltaX / v,
      deltaY: m.deltaY / v,
      lastX: h.state.x,
      lastY: h.state.y
    };
  }
  function D(h) {
    return {
      left: h.left,
      top: h.top,
      right: h.right,
      bottom: h.bottom
    };
  }
  function y(h) {
    const m = h.findDOMNode();
    if (!m)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return m;
  }
  return de;
}
var Pe = {}, De = {}, xt;
function Ft() {
  if (xt) return De;
  xt = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  }), De.default = r;
  function r() {
  }
  return De;
}
var Ct;
function wr() {
  if (Ct) return Pe;
  Ct = 1, Object.defineProperty(Pe, "__esModule", {
    value: !0
  }), Pe.default = void 0;
  var r = D(je), f = g(/* @__PURE__ */ Yt()), d = g(At), i = Ge(), C = kt(), s = Ae(), S = g(Ft());
  function g(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function _(E) {
    if (typeof WeakMap != "function") return null;
    var p = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
    return (_ = function(l) {
      return l ? o : p;
    })(E);
  }
  function D(E, p) {
    if (E && E.__esModule)
      return E;
    if (E === null || typeof E != "object" && typeof E != "function")
      return { default: E };
    var o = _(p);
    if (o && o.has(E))
      return o.get(E);
    var l = {}, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var n in E)
      if (n !== "default" && Object.prototype.hasOwnProperty.call(E, n)) {
        var A = b ? Object.getOwnPropertyDescriptor(E, n) : null;
        A && (A.get || A.set) ? Object.defineProperty(l, n, A) : l[n] = E[n];
      }
    return l.default = E, o && o.set(E, l), l;
  }
  function y(E, p, o) {
    return p = h(p), p in E ? Object.defineProperty(E, p, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : E[p] = o, E;
  }
  function h(E) {
    var p = m(E, "string");
    return typeof p == "symbol" ? p : String(p);
  }
  function m(E, p) {
    if (typeof E != "object" || E === null) return E;
    var o = E[Symbol.toPrimitive];
    if (o !== void 0) {
      var l = o.call(E, p);
      if (typeof l != "object") return l;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (p === "string" ? String : Number)(E);
  }
  const v = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  };
  let w = v.mouse, O = class extends r.Component {
    constructor() {
      super(...arguments), y(this, "dragging", !1), y(this, "lastX", NaN), y(this, "lastY", NaN), y(this, "touchIdentifier", null), y(this, "mounted", !1), y(this, "handleDragStart", (p) => {
        if (this.props.onMouseDown(p), !this.props.allowAnyClick && typeof p.button == "number" && p.button !== 0) return !1;
        const o = this.findDOMNode();
        if (!o || !o.ownerDocument || !o.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const {
          ownerDocument: l
        } = o;
        if (this.props.disabled || !(p.target instanceof l.defaultView.Node) || this.props.handle && !(0, i.matchesSelectorAndParentsTo)(p.target, this.props.handle, o) || this.props.cancel && (0, i.matchesSelectorAndParentsTo)(p.target, this.props.cancel, o))
          return;
        p.type === "touchstart" && p.preventDefault();
        const b = (0, i.getTouchIdentifier)(p);
        this.touchIdentifier = b;
        const n = (0, C.getControlPosition)(p, b, this);
        if (n == null) return;
        const {
          x: A,
          y: t
        } = n, a = (0, C.createCoreData)(this, A, t);
        (0, S.default)("DraggableCore: handleDragStart: %j", a), (0, S.default)("calling", this.props.onStart), !(this.props.onStart(p, a) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, i.addUserSelectStyles)(l), this.dragging = !0, this.lastX = A, this.lastY = t, (0, i.addEvent)(l, w.move, this.handleDrag), (0, i.addEvent)(l, w.stop, this.handleDragStop));
      }), y(this, "handleDrag", (p) => {
        const o = (0, C.getControlPosition)(p, this.touchIdentifier, this);
        if (o == null) return;
        let {
          x: l,
          y: b
        } = o;
        if (Array.isArray(this.props.grid)) {
          let t = l - this.lastX, a = b - this.lastY;
          if ([t, a] = (0, C.snapToGrid)(this.props.grid, t, a), !t && !a) return;
          l = this.lastX + t, b = this.lastY + a;
        }
        const n = (0, C.createCoreData)(this, l, b);
        if ((0, S.default)("DraggableCore: handleDrag: %j", n), this.props.onDrag(p, n) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const a = document.createEvent("MouseEvents");
            a.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(a);
          }
          return;
        }
        this.lastX = l, this.lastY = b;
      }), y(this, "handleDragStop", (p) => {
        if (!this.dragging) return;
        const o = (0, C.getControlPosition)(p, this.touchIdentifier, this);
        if (o == null) return;
        let {
          x: l,
          y: b
        } = o;
        if (Array.isArray(this.props.grid)) {
          let a = l - this.lastX || 0, x = b - this.lastY || 0;
          [a, x] = (0, C.snapToGrid)(this.props.grid, a, x), l = this.lastX + a, b = this.lastY + x;
        }
        const n = (0, C.createCoreData)(this, l, b);
        if (this.props.onStop(p, n) === !1 || this.mounted === !1) return !1;
        const t = this.findDOMNode();
        t && this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(t.ownerDocument), (0, S.default)("DraggableCore: handleDragStop: %j", n), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, t && ((0, S.default)("DraggableCore: Removing handlers"), (0, i.removeEvent)(t.ownerDocument, w.move, this.handleDrag), (0, i.removeEvent)(t.ownerDocument, w.stop, this.handleDragStop));
      }), y(this, "onMouseDown", (p) => (w = v.mouse, this.handleDragStart(p))), y(this, "onMouseUp", (p) => (w = v.mouse, this.handleDragStop(p))), y(this, "onTouchStart", (p) => (w = v.touch, this.handleDragStart(p))), y(this, "onTouchEnd", (p) => (w = v.touch, this.handleDragStop(p)));
    }
    componentDidMount() {
      this.mounted = !0;
      const p = this.findDOMNode();
      p && (0, i.addEvent)(p, v.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const p = this.findDOMNode();
      if (p) {
        const {
          ownerDocument: o
        } = p;
        (0, i.removeEvent)(o, v.mouse.move, this.handleDrag), (0, i.removeEvent)(o, v.touch.move, this.handleDrag), (0, i.removeEvent)(o, v.mouse.stop, this.handleDragStop), (0, i.removeEvent)(o, v.touch.stop, this.handleDragStop), (0, i.removeEvent)(p, v.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(o);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var p, o;
      return (p = this.props) !== null && p !== void 0 && p.nodeRef ? (o = this.props) === null || o === void 0 || (o = o.nodeRef) === null || o === void 0 ? void 0 : o.current : d.default.findDOMNode(this);
    }
    render() {
      return /* @__PURE__ */ r.cloneElement(r.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  };
  return Pe.default = O, y(O, "displayName", "DraggableCore"), y(O, "propTypes", {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: f.default.bool,
    children: f.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: f.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: f.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(E, p) {
      if (E[p] && E[p].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: f.default.arrayOf(f.default.number),
    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable handle=".handle">
     *              <div>
     *                  <div className="handle">Click me to drag</div>
     *                  <div>This is some other content</div>
     *              </div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    handle: f.default.string,
    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *           return(
     *               <Draggable cancel=".cancel">
     *                   <div>
     *                     <div className="cancel">You can't drag from here</div>
     *                     <div>Dragging here works fine</div>
     *                   </div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    cancel: f.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
     * Unfortunately, in order for <Draggable> to work properly, we need raw access
     * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
     * as in this example:
     *
     * function MyComponent() {
     *   const nodeRef = React.useRef(null);
     *   return (
     *     <Draggable nodeRef={nodeRef}>
     *       <div ref={nodeRef}>Example Target</div>
     *     </Draggable>
     *   );
     * }
     *
     * This can be used for arbitrarily nested components, so long as the ref ends up
     * pointing to the actual child DOM node and not a custom component.
     */
    nodeRef: f.default.object,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: f.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: f.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: f.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: f.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: f.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: s.dontSetMe,
    style: s.dontSetMe,
    transform: s.dontSetMe
  }), y(O, "defaultProps", {
    allowAnyClick: !1,
    // by default only accept left click
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function() {
    },
    onDrag: function() {
    },
    onStop: function() {
    },
    onMouseDown: function() {
    },
    scale: 1
  }), Pe;
}
var Dt;
function Pr() {
  return Dt || (Dt = 1, function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "DraggableCore", {
      enumerable: !0,
      get: function() {
        return _.default;
      }
    }), r.default = void 0;
    var f = m(je), d = y(/* @__PURE__ */ Yt()), i = y(At), C = y(Tr), s = Ge(), S = kt(), g = Ae(), _ = y(wr()), D = y(Ft());
    function y(o) {
      return o && o.__esModule ? o : { default: o };
    }
    function h(o) {
      if (typeof WeakMap != "function") return null;
      var l = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap();
      return (h = function(n) {
        return n ? b : l;
      })(o);
    }
    function m(o, l) {
      if (o && o.__esModule)
        return o;
      if (o === null || typeof o != "object" && typeof o != "function")
        return { default: o };
      var b = h(l);
      if (b && b.has(o))
        return b.get(o);
      var n = {}, A = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var t in o)
        if (t !== "default" && Object.prototype.hasOwnProperty.call(o, t)) {
          var a = A ? Object.getOwnPropertyDescriptor(o, t) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, t, a) : n[t] = o[t];
        }
      return n.default = o, b && b.set(o, n), n;
    }
    function v() {
      return v = Object.assign ? Object.assign.bind() : function(o) {
        for (var l = 1; l < arguments.length; l++) {
          var b = arguments[l];
          for (var n in b)
            Object.prototype.hasOwnProperty.call(b, n) && (o[n] = b[n]);
        }
        return o;
      }, v.apply(this, arguments);
    }
    function w(o, l, b) {
      return l = O(l), l in o ? Object.defineProperty(o, l, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : o[l] = b, o;
    }
    function O(o) {
      var l = E(o, "string");
      return typeof l == "symbol" ? l : String(l);
    }
    function E(o, l) {
      if (typeof o != "object" || o === null) return o;
      var b = o[Symbol.toPrimitive];
      if (b !== void 0) {
        var n = b.call(o, l);
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (l === "string" ? String : Number)(o);
    }
    class p extends f.Component {
      // React 16.3+
      // Arity (props, state)
      static getDerivedStateFromProps(l, b) {
        let {
          position: n
        } = l, {
          prevPropsPosition: A
        } = b;
        return n && (!A || n.x !== A.x || n.y !== A.y) ? ((0, D.default)("Draggable: getDerivedStateFromProps %j", {
          position: n,
          prevPropsPosition: A
        }), {
          x: n.x,
          y: n.y,
          prevPropsPosition: {
            ...n
          }
        }) : null;
      }
      constructor(l) {
        super(l), w(this, "onDragStart", (b, n) => {
          if ((0, D.default)("Draggable: onDragStart: %j", n), this.props.onStart(b, (0, S.createDraggableData)(this, n)) === !1) return !1;
          this.setState({
            dragging: !0,
            dragged: !0
          });
        }), w(this, "onDrag", (b, n) => {
          if (!this.state.dragging) return !1;
          (0, D.default)("Draggable: onDrag: %j", n);
          const A = (0, S.createDraggableData)(this, n), t = {
            x: A.x,
            y: A.y,
            slackX: 0,
            slackY: 0
          };
          if (this.props.bounds) {
            const {
              x,
              y: L
            } = t;
            t.x += this.state.slackX, t.y += this.state.slackY;
            const [J, K] = (0, S.getBoundPosition)(this, t.x, t.y);
            t.x = J, t.y = K, t.slackX = this.state.slackX + (x - t.x), t.slackY = this.state.slackY + (L - t.y), A.x = t.x, A.y = t.y, A.deltaX = t.x - this.state.x, A.deltaY = t.y - this.state.y;
          }
          if (this.props.onDrag(b, A) === !1) return !1;
          this.setState(t);
        }), w(this, "onDragStop", (b, n) => {
          if (!this.state.dragging || this.props.onStop(b, (0, S.createDraggableData)(this, n)) === !1) return !1;
          (0, D.default)("Draggable: onDragStop: %j", n);
          const t = {
            dragging: !1,
            slackX: 0,
            slackY: 0
          };
          if (!!this.props.position) {
            const {
              x,
              y: L
            } = this.props.position;
            t.x = x, t.y = L;
          }
          this.setState(t);
        }), this.state = {
          // Whether or not we are currently dragging.
          dragging: !1,
          // Whether or not we have been dragged before.
          dragged: !1,
          // Current transform x and y.
          x: l.position ? l.position.x : l.defaultPosition.x,
          y: l.position ? l.position.y : l.defaultPosition.y,
          prevPropsPosition: {
            ...l.position
          },
          // Used for compensating for out-of-bounds drags
          slackX: 0,
          slackY: 0,
          // Can only determine if SVG after mounting
          isElementSVG: !1
        }, l.position && !(l.onDrag || l.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
      }
      componentDidMount() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
      componentWillUnmount() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
      findDOMNode() {
        var l, b;
        return (l = (b = this.props) === null || b === void 0 || (b = b.nodeRef) === null || b === void 0 ? void 0 : b.current) !== null && l !== void 0 ? l : i.default.findDOMNode(this);
      }
      render() {
        const {
          axis: l,
          bounds: b,
          children: n,
          defaultPosition: A,
          defaultClassName: t,
          defaultClassNameDragging: a,
          defaultClassNameDragged: x,
          position: L,
          positionOffset: J,
          scale: K,
          ...G
        } = this.props;
        let re = {}, ue = null;
        const se = !!!L || this.state.dragging, fe = L || A, pe = {
          // Set left if horizontal drag is enabled
          x: (0, S.canDragX)(this) && se ? this.state.x : fe.x,
          // Set top if vertical drag is enabled
          y: (0, S.canDragY)(this) && se ? this.state.y : fe.y
        };
        this.state.isElementSVG ? ue = (0, s.createSVGTransform)(pe, J) : re = (0, s.createCSSTransform)(pe, J);
        const c = (0, C.default)(n.props.className || "", t, {
          [a]: this.state.dragging,
          [x]: this.state.dragged
        });
        return /* @__PURE__ */ f.createElement(_.default, v({}, G, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ f.cloneElement(f.Children.only(n), {
          className: c,
          style: {
            ...n.props.style,
            ...re
          },
          transform: ue
        }));
      }
    }
    r.default = p, w(p, "displayName", "Draggable"), w(p, "propTypes", {
      // Accepts all props <DraggableCore> accepts.
      ..._.default.propTypes,
      /**
       * `axis` determines which axis the draggable can move.
       *
       *  Note that all callbacks will still return data as normal. This only
       *  controls flushing to the DOM.
       *
       * 'both' allows movement horizontally and vertically.
       * 'x' limits movement to horizontal axis.
       * 'y' limits movement to vertical axis.
       * 'none' limits all movement.
       *
       * Defaults to 'both'.
       */
      axis: d.default.oneOf(["both", "x", "y", "none"]),
      /**
       * `bounds` determines the range of movement available to the element.
       * Available values are:
       *
       * 'parent' restricts movement within the Draggable's parent node.
       *
       * Alternatively, pass an object with the following properties, all of which are optional:
       *
       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
       *
       * All values are in px.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable bounds={{right: 300, bottom: 300}}>
       *              <div>Content</div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      bounds: d.default.oneOfType([d.default.shape({
        left: d.default.number,
        right: d.default.number,
        top: d.default.number,
        bottom: d.default.number
      }), d.default.string, d.default.oneOf([!1])]),
      defaultClassName: d.default.string,
      defaultClassNameDragging: d.default.string,
      defaultClassNameDragged: d.default.string,
      /**
       * `defaultPosition` specifies the x and y that the dragged item should start at
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable defaultPosition={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      defaultPosition: d.default.shape({
        x: d.default.number,
        y: d.default.number
      }),
      positionOffset: d.default.shape({
        x: d.default.oneOfType([d.default.number, d.default.string]),
        y: d.default.oneOfType([d.default.number, d.default.string])
      }),
      /**
       * `position`, if present, defines the current position of the element.
       *
       *  This is similar to how form elements in React work - if no `position` is supplied, the component
       *  is uncontrolled.
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable position={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      position: d.default.shape({
        x: d.default.number,
        y: d.default.number
      }),
      /**
       * These properties should be defined on the child, not here.
       */
      className: g.dontSetMe,
      style: g.dontSetMe,
      transform: g.dontSetMe
    }), w(p, "defaultProps", {
      ..._.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    });
  }(Fe)), Fe;
}
var Mt;
function Rr() {
  if (Mt) return we.exports;
  Mt = 1;
  const {
    default: r,
    DraggableCore: f
  } = Pr();
  return we.exports = r, we.exports.default = r, we.exports.DraggableCore = f, we.exports;
}
var Or = Rr();
const xr = /* @__PURE__ */ lr(Or), Cr = ({ childrenData: r, renderChart: f }) => {
  const d = Be(null), [i, C] = Me({ left: "0px", width: "0px" }), [s, S] = Me(!1);
  return ze(() => {
    const g = d.current;
    if (!g) return;
    const _ = () => {
      const y = g.querySelectorAll(":scope > .child-with-connector");
      if (y.length <= 1) {
        S(!1);
        return;
      }
      const h = y[0].getBoundingClientRect(), m = y[y.length - 1].getBoundingClientRect(), v = g.getBoundingClientRect(), w = h.left + h.width / 2, E = m.left + m.width / 2 - w, p = w - v.left;
      C({ left: `${p}px`, width: `${E}px` }), S(!0);
    }, D = new ResizeObserver(() => requestAnimationFrame(_));
    return D.observe(g), () => D.disconnect();
  }, [r]), /* @__PURE__ */ te.jsxs("div", { className: "children-wrapper", children: [
    /* @__PURE__ */ te.jsx("div", { className: "connector-container", children: s && /* @__PURE__ */ te.jsx("div", { className: "connector-horizontal", style: i }) }),
    /* @__PURE__ */ te.jsx("div", { className: "children-row", ref: d, children: r.map((g) => /* @__PURE__ */ te.jsxs("div", { className: "child-with-connector", children: [
      /* @__PURE__ */ te.jsx("div", { className: "connector-up" }),
      f([g])
    ] }, g.id)) })
  ] });
}, Wt = (r, f) => r.map((d) => {
  var C;
  const i = { ...d, expanded: !1 };
  return d.id === f && (i.expanded = !0), (C = d.children) != null && C.length && (i.children = Wt(d.children, f), i.children.some((s) => s.expanded) && (i.expanded = !0)), i;
}), jt = (r, f, d) => {
  document.querySelector(".scroll-container");
}, Ar = ({ data: r }) => {
  const [f, d] = Me([]), [i, C] = Me({ x: 0, y: 0 }), s = r.currentUser, S = Be(null), g = Be(null);
  ze(() => {
    const m = Wt(r.rootUsers, s);
    d(m);
  }, [r, s]), ze(() => {
    document.querySelector(".highlight-user") && jt();
  }, [f]);
  const _ = cr((m) => {
    const v = (w) => w.map((O) => ({
      ...O,
      expanded: O.id === m ? !O.expanded : O.expanded,
      children: O.children ? v(O.children) : []
    }));
    d(v(f));
  }, [f]), D = (m) => {
    S.current = { x: m.clientX, y: m.clientY };
  }, y = (m, v) => {
    const w = Math.abs(m.clientX - S.current.x), O = Math.abs(m.clientY - S.current.y);
    w < 5 && O < 5 && (_(v.id), g.current = m.currentTarget, setTimeout(() => {
      jt(m.currentTarget);
    }, 100));
  }, h = (m) => /* @__PURE__ */ te.jsx("div", { className: "org-level", children: m.map((v) => {
    var O;
    const w = v.expanded && ((O = v.children) == null ? void 0 : O.length) > 0;
    return /* @__PURE__ */ te.jsxs("div", { className: "org-node", children: [
      /* @__PURE__ */ te.jsxs(
        "div",
        {
          className: `organization_chart_node ${v.id === s ? "highlight-user" : ""}`,
          onMouseDown: D,
          onMouseUp: (E) => y(E, v),
          children: [
            /* @__PURE__ */ te.jsx("div", { className: "node_avatar", children: v.person.avatar }),
            /* @__PURE__ */ te.jsx("div", { className: "node_name", children: v.person.name }),
            /* @__PURE__ */ te.jsx("div", { className: "node_title", title: v.person.title, children: v.person.title }),
            /* @__PURE__ */ te.jsxs("div", { className: "node_reports", children: [
              v.person.totalReports,
              " Reports"
            ] })
          ]
        }
      ),
      w && /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
        /* @__PURE__ */ te.jsx("div", { className: "connector-down" }),
        /* @__PURE__ */ te.jsx(Cr, { childrenData: v.children, renderChart: h })
      ] })
    ] }, v.id);
  }) });
  return /* @__PURE__ */ te.jsx("div", { className: "scroll-container", children: /* @__PURE__ */ te.jsx(xr, { position: i, onStop: (m, v) => C({ x: v.x, y: v.y }), children: /* @__PURE__ */ te.jsx("div", { className: "org-tree", children: h(f) }) }) });
};
export {
  Ar as OrganizationChart
};
